/* Dev validator for questions.js — run: node validate.js
 * Checks counts vs the FMGE blueprint, unique ids, 4 options, valid answer index,
 * and non-empty fields. Exits non-zero on any error.
 */
const fs = require("fs");
const src = fs.readFileSync(require("path").join(__dirname, "questions.js"), "utf8");
const QUESTIONS = eval(src + ";\nQUESTIONS");

const TARGET = {
  A: { Anatomy:17, Physiology:17, Biochemistry:16, Pathology:25, Pharmacology:20,
       Microbiology:20, "Forensic Medicine":10, "Community Medicine":25 },
  B: { "General Medicine":30, Psychiatry:6, Dermatology:4, "General Surgery":24,
       Orthopaedics:8, Anaesthesia:4, Radiology:4, "Obstetrics & Gynaecology":30,
       Paediatrics:12, Ophthalmology:14, ENT:14 }
};

let errors = [], warnings = [];
const ids = new Set();
const count = { A: {}, B: {} };

QUESTIONS.forEach((q, i) => {
  const at = `Q#${q.id ?? "?"} (index ${i})`;
  if (q.id == null) errors.push(`${at}: missing id`);
  if (ids.has(q.id)) errors.push(`${at}: duplicate id`);
  ids.add(q.id);
  if (!["A", "B"].includes(q.part)) errors.push(`${at}: bad part '${q.part}'`);
  if (!q.subject) errors.push(`${at}: missing subject`);
  if (!q.question || q.question.trim().length < 10) errors.push(`${at}: question too short/empty`);
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${at}: needs exactly 4 options`);
  else if (q.options.some(o => !o || !String(o).trim())) errors.push(`${at}: has an empty option`);
  if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3)) errors.push(`${at}: answer index must be 0-3`);
  if (!q.explanation || q.explanation.trim().length < 10) warnings.push(`${at}: explanation short/empty`);
  if (!["easy", "moderate", "hard"].includes(q.difficulty)) warnings.push(`${at}: difficulty '${q.difficulty}'`);
  if (q.part === "A" || q.part === "B") count[q.part][q.subject] = (count[q.part][q.subject] || 0) + 1;
});

function report(part) {
  const tgt = TARGET[part], have = count[part];
  let total = 0, tot_t = 0;
  console.log(`\n--- Part ${part} ---`);
  const subjects = new Set([...Object.keys(tgt), ...Object.keys(have)]);
  [...subjects].sort().forEach(s => {
    const h = have[s] || 0, t = tgt[s] || 0;
    total += h; tot_t += t;
    const flag = h === t ? "  ok " : (h < t ? " LOW " : "OVER ");
    console.log(`  ${flag} ${s.padEnd(26)} ${String(h).padStart(3)} / ${t}`);
    if (!(s in tgt)) warnings.push(`Part ${part}: unexpected subject '${s}'`);
  });
  console.log(`  TOTAL  ${String(total).padStart(3)} / ${tot_t} (target 150)`);
  return total;
}

const a = report("A"), b = report("B");
console.log(`\nGRAND TOTAL: ${a + b} / 300\n`);

// answer-key position distribution & question-type tally
const dist = [0, 0, 0, 0], types = {};
QUESTIONS.forEach(q => {
  if (Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4) dist[q.answer]++;
  const ty = q.type || "sba"; types[ty] = (types[ty] || 0) + 1;
});
const n = QUESTIONS.length;
console.log("Answer position:", ["A", "B", "C", "D"].map((k, i) => `${k}=${dist[i]} (${Math.round(100 * dist[i] / n)}%)`).join("  "));
console.log("Question types: ", Object.entries(types).map(([k, v]) => `${k}=${v}`).join("  "));
if (n >= 40) {
  const lo = Math.min(...dist), hi = Math.max(...dist);
  if (hi > n * 0.35 || lo < n * 0.15) warnings.push(`Answer key looks skewed (A-D = ${dist.join("/")}); aim ~25% each.`);
}
console.log("");

if (warnings.length) { console.log("WARNINGS:"); warnings.forEach(w => console.log("  ! " + w)); }
if (errors.length) { console.log("\nERRORS:"); errors.forEach(e => console.log("  ✗ " + e)); process.exit(1); }
console.log("\n✓ No structural errors.");
