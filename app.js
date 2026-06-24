/* FMGE Mock Test — engine (vanilla JS, no dependencies) */
(function () {
  "use strict";

  const PART_DURATION = 150 * 60;   // seconds per part
  const STORAGE_KEY = "fmge_mock_v1";
  const OPT_KEYS = ["A", "B", "C", "D", "E", "F"];

  // ---- question banks (from questions.js) ----
  const BANK = { A: [], B: [] };
  (window.QUESTIONS || []).forEach(q => { (BANK[q.part] || (BANK[q.part] = [])).push(q); });
  const TOTAL = BANK.A.length + BANK.B.length;
  const PASS_MARK = Math.ceil(TOTAL / 2);   // 50% pass mark

  let state = null;
  let timerId = null;
  let enteredAt = null;       // timestamp current question was shown

  // ---- tiny helpers ----
  const el = id => document.getElementById(id);
  const cur = () => state.parts[state.currentPart];
  const curQs = () => BANK[state.currentPart];
  const curQ = () => curQs()[state.index];

  function show(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    el(screenId).classList.add("active");
    window.scrollTo(0, 0);
  }

  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    const m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  // ---- state ----
  function newPart() {
    return { remaining: PART_DURATION, started: false, submitted: false,
             answers: {}, marks: {}, visited: {}, timeSpent: {}, timeUsed: 0 };
  }
  function freshState(name) {
    return { candidate: name || "Candidate", currentPart: "A", finished: false, index: 0,
             parts: { A: newPart(), B: newPart() } };
  }
  function save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {} }
  function load() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch (e) { return null; } }
  function clearSaved() { try { localStorage.removeItem(STORAGE_KEY); } catch (e) {} }

  // ---- timing per question ----
  function flushTime() {
    if (enteredAt == null) return;
    const q = curQ(); if (!q) return;
    const dt = (Date.now() - enteredAt) / 1000;
    cur().timeSpent[q.id] = (cur().timeSpent[q.id] || 0) + dt;
    enteredAt = Date.now();
  }

  // ================= EXAM FLOW =================
  function startPart(part) {
    state.currentPart = part;
    state.index = 0;
    const p = state.parts[part];
    if (!p.started) { p.started = true; }
    save();
    el("exam-part-label").textContent = "Part " + part;
    el("exam-candidate").textContent = state.candidate;
    show("screen-exam");
    enteredAt = Date.now();
    renderQuestion();
    renderPalette();
    startTimer();
  }

  function startTimer() {
    stopTimer();
    updateTimerDisplay();
    timerId = setInterval(() => {
      cur().remaining -= 1;
      updateTimerDisplay();
      if (cur().remaining % 5 === 0) save();
      if (cur().remaining <= 0) { autoSubmit(); }
    }, 1000);
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  function updateTimerDisplay() {
    const t = el("timer"); const r = cur().remaining;
    t.textContent = fmtTime(r);
    t.classList.toggle("warn", r <= 300 && r > 60);
    t.classList.toggle("danger", r <= 60);
  }

  const TYPE_LABEL = { image: "🖼 Image-based", match: "Match the following", assertion: "Assertion–Reason" };
  function renderFigure(container, q) {
    if (q && q.figure) { container.innerHTML = q.figure; container.hidden = false; }
    else { container.innerHTML = ""; container.hidden = true; }
  }
  function renderTypeTag(tag, q) {
    const label = q && TYPE_LABEL[q.type];
    if (label) { tag.textContent = label; tag.hidden = false; } else { tag.textContent = ""; tag.hidden = true; }
  }

  function renderQuestion() {
    const q = curQ();
    cur().visited[q.id] = true;
    el("q-number").textContent = "Question " + (state.index + 1) + " / " + curQs().length;
    el("q-subject").textContent = q.subject;
    el("q-difficulty").textContent = q.difficulty || "moderate";
    el("q-text").textContent = q.question;
    renderFigure(el("q-figure"), q);
    renderTypeTag(el("q-type"), q);

    const form = el("options");
    form.innerHTML = "";
    q.options.forEach((opt, i) => {
      const chosen = cur().answers[q.id] === i;
      const label = document.createElement("label");
      label.className = "opt" + (chosen ? " selected" : "");
      label.innerHTML =
        '<input type="radio" name="opt" value="' + i + '"' + (chosen ? " checked" : "") + '>' +
        '<span><span class="opt-key">' + OPT_KEYS[i] + '.</span> </span>';
      label.querySelector("span").appendChild(document.createTextNode(opt));
      label.querySelector("input").addEventListener("change", () => selectOption(i));
      form.appendChild(label);
    });
    el("btn-prev").disabled = state.index === 0;
    updatePaletteActive();
    updateCounts();
  }

  function selectOption(i) {
    const q = curQ();
    cur().answers[q.id] = i;
    save();
    document.querySelectorAll("#options .opt").forEach((l, idx) =>
      l.classList.toggle("selected", idx === i));
    paintCell(state.index);
    updateCounts();
  }

  function go(delta) {
    const ni = state.index + delta;
    if (ni < 0 || ni >= curQs().length) return;
    flushTime();
    state.index = ni;
    save();
    renderQuestion();
  }
  function goTo(i) {
    if (i === state.index) return;
    flushTime();
    state.index = i;
    save();
    renderQuestion();
  }

  function markAndNext() {
    const q = curQ();
    cur().marks[q.id] = true;
    if (state.index < curQs().length - 1) go(1);
    else { paintCell(state.index); updateCounts(); save(); }
  }
  function clearResponse() {
    const q = curQ();
    delete cur().answers[q.id];
    document.querySelectorAll("#options input").forEach(r => (r.checked = false));
    document.querySelectorAll("#options .opt").forEach(l => l.classList.remove("selected"));
    paintCell(state.index);
    updateCounts();
    save();
  }

  // ---- palette ----
  function cellClass(i) {
    const q = curQs()[i], p = cur();
    const answered = p.answers[q.id] !== undefined;
    const marked = !!p.marks[q.id];
    const visited = !!p.visited[q.id];
    if (marked && answered) return "ansmarked";
    if (marked) return "marked";
    if (answered) return "answered";
    if (visited) return "notans";
    return "notvis";
  }
  function renderPalette() {
    const pal = el("palette");
    pal.innerHTML = "";
    curQs().forEach((q, i) => {
      const b = document.createElement("button");
      b.className = "pcell " + cellClass(i);
      b.textContent = i + 1;
      b.addEventListener("click", () => goTo(i));
      pal.appendChild(b);
    });
    updatePaletteActive();
  }
  function paintCell(i) {
    const cell = el("palette").children[i];
    if (cell) cell.className = "pcell " + cellClass(i) + (i === state.index ? " current" : "");
  }
  function updatePaletteActive() {
    const children = el("palette").children;
    for (let i = 0; i < children.length; i++)
      children[i].className = "pcell " + cellClass(i) + (i === state.index ? " current" : "");
  }
  function updateCounts() {
    const p = cur(), qs = curQs();
    let answered = 0, marked = 0, notans = 0, notvis = 0;
    qs.forEach(q => {
      const a = p.answers[q.id] !== undefined, m = !!p.marks[q.id], v = !!p.visited[q.id];
      if (a) answered++;
      if (m) marked++;
      if (!a && v) notans++;
      if (!v) notvis++;
    });
    el("palette-counts").innerHTML =
      "<span><b>" + answered + "</b> answered</span>" +
      "<span><b>" + notans + "</b> left</span>" +
      "<span><b>" + marked + "</b> marked</span>" +
      "<span><b>" + notvis + "</b> not seen</span>";
  }

  // ---- submit ----
  function openSubmitModal() {
    const p = cur(), qs = curQs();
    let answered = 0, marked = 0;
    qs.forEach(q => { if (p.answers[q.id] !== undefined) answered++; if (p.marks[q.id]) marked++; });
    const unattempted = qs.length - answered;
    el("modal-title").textContent = "Submit Part " + state.currentPart + "?";
    el("modal-summary").innerHTML =
      "<div>Answered<b>" + answered + "</b></div>" +
      "<div>Unattempted<b>" + unattempted + "</b></div>" +
      "<div>Marked<b>" + marked + "</b></div>" +
      "<div>Total<b>" + qs.length + "</b></div>";
    el("modal-warn").textContent = state.currentPart === "A"
      ? "Part A will be locked — you cannot return to it."
      : "This ends the test and shows your result.";
    el("modal-submit").classList.remove("hidden");
  }
  function closeModal() { el("modal-submit").classList.add("hidden"); }

  function autoSubmit() { stopTimer(); doSubmit(true); }

  function doSubmit(auto) {
    closeModal();
    stopTimer();
    flushTime();
    const p = cur();
    p.timeUsed = PART_DURATION - Math.max(0, p.remaining);
    p.submitted = true;
    save();
    if (state.currentPart === "A") {
      state.currentPart = "B";
      save();
      el("transition-title").textContent = auto ? "Time up — Part A submitted" : "Part A submitted";
      el("transition-msg").textContent =
        "You attempted " + Object.keys(state.parts.A.answers).length +
        " of " + BANK.A.length + " questions. Part B has " + BANK.B.length +
        " clinical questions and a fresh 150-minute timer. Take a breath, then begin.";
      show("screen-transition");
    } else {
      state.finished = true;
      save();
      renderResult();
      show("screen-result");
    }
  }

  // ================= RESULTS =================
  function compute() {
    const res = { score: 0, correct: 0, incorrect: 0, unattempted: 0,
                  parts: { A: { c: 0, a: 0, t: BANK.A.length }, B: { c: 0, a: 0, t: BANK.B.length } },
                  bySubject: {} };
    ["A", "B"].forEach(part => {
      const p = state.parts[part];
      BANK[part].forEach(q => {
        const sel = p.answers[q.id];
        const sub = (res.bySubject[q.subject] || (res.bySubject[q.subject] = { c: 0, a: 0, t: 0, part: part }));
        sub.t++;
        if (sel === undefined) { res.unattempted++; return; }
        res.parts[part].a++; sub.a++;
        if (sel === q.answer) { res.score++; res.correct++; res.parts[part].c++; sub.c++; }
        else { res.incorrect++; }
      });
    });
    return res;
  }

  function renderResult() {
    const r = compute();
    el("result-score").textContent = r.score;
    const den = el("score-den"); if (den) den.textContent = "/ " + TOTAL;
    el("result-pct").textContent = (TOTAL ? Math.round(100 * r.score / TOTAL) : 0) + "%";
    el("result-cand").textContent = state.candidate;
    const pass = r.score >= PASS_MARK;
    const badge = el("result-badge");
    badge.textContent = pass ? "PASS" : "FAIL";
    badge.className = "result-badge " + (pass ? "pass" : "fail");
    el("result-partA").textContent = r.parts.A.c + " / " + r.parts.A.t;
    el("result-partB").textContent = r.parts.B.c + " / " + r.parts.B.t;
    el("result-correct").textContent = r.correct;
    el("result-incorrect").textContent = r.incorrect;
    el("result-unattempted").textContent = r.unattempted;
    const attempted = r.correct + r.incorrect;
    el("result-accuracy").textContent = attempted ? Math.round(100 * r.correct / attempted) + "%" : "0%";
    el("result-timeA").textContent = fmtTime(state.parts.A.timeUsed);
    el("result-timeB").textContent = fmtTime(state.parts.B.timeUsed);

    const order = Object.keys(r.bySubject).sort((x, y) =>
      (r.bySubject[x].part).localeCompare(r.bySubject[y].part) || x.localeCompare(y));
    const tb = el("subject-table"); tb.innerHTML = "";
    order.forEach(sub => {
      const s = r.bySubject[sub];
      const acc = s.a ? Math.round(100 * s.c / s.a) : 0;
      const weak = s.a >= 1 && acc < 50;
      const tr = document.createElement("tr");
      if (weak) tr.className = "weak";
      tr.innerHTML =
        "<td>" + sub + "</td><td>" + s.part + "</td><td>" + s.c + "</td><td>" + s.a +
        "</td><td>" + s.t + "</td><td>" + acc + "%<div class='acc-bar'><i style='width:" + acc + "%'></i></div></td>";
      tb.appendChild(tr);
    });
  }

  // ================= REVIEW =================
  let reviewFilter = "all";
  function buildFilters() {
    const defs = [["all", "All"], ["incorrect", "Incorrect"], ["correct", "Correct"],
                  ["skipped", "Unattempted"], ["marked", "Marked"]];
    const box = el("review-filters"); box.innerHTML = "";
    defs.forEach(([k, lab]) => {
      const b = document.createElement("button");
      b.className = "chip" + (k === reviewFilter ? " active" : "");
      b.textContent = lab;
      b.addEventListener("click", () => { reviewFilter = k; buildFilters(); renderReview(); });
      box.appendChild(b);
    });
  }
  function statusOf(part, q) {
    const p = state.parts[part], sel = p.answers[q.id];
    if (sel === undefined) return "skipped";
    return sel === q.answer ? "correct" : "incorrect";
  }
  function renderReview() {
    const list = el("review-list"); list.innerHTML = "";
    let n = 0;
    ["A", "B"].forEach(part => {
      BANK[part].forEach((q, idx) => {
        const st = statusOf(part, q);
        const marked = !!state.parts[part].marks[q.id];
        if (reviewFilter === "marked" && !marked) return;
        if (reviewFilter !== "all" && reviewFilter !== "marked" && st !== reviewFilter) return;
        n++;
        const sel = state.parts[part].answers[q.id];
        const card = document.createElement("div");
        card.className = "rev-q " + st;
        let opts = "";
        q.options.forEach((o, i) => {
          let cls = "rev-opt", mk = "";
          if (i === q.answer) { cls += " correct"; mk = "Correct"; }
          if (i === sel && i !== q.answer) { cls += " chosen-wrong"; mk = "Your answer"; }
          else if (i === sel && i === q.answer) { mk = "Your answer ✓"; }
          opts += "<div class='" + cls + "'><span class='opt-key'>" + OPT_KEYS[i] + ".</span> <span>" +
                  escapeHtml(o) + "</span>" + (mk ? "<span class='mk'>" + mk + "</span>" : "") + "</div>";
        });
        const t = state.parts[part].timeSpent[q.id];
        const figHtml = q.figure ? "<div class='rev-figure'>" + q.figure + "</div>" : "";
        card.innerHTML =
          "<div class='rev-head'><span class='rev-num'>Part " + part + " · Q" + (idx + 1) +
          " <span class='tag tag-subject'>" + q.subject + "</span></span>" +
          "<span class='rev-status " + st + "'>" + st.toUpperCase() + "</span></div>" +
          "<div class='rev-text'>" + escapeHtml(q.question) + "</div>" + figHtml + opts +
          "<div class='rev-exp'><b>Explanation:</b> " + escapeHtml(q.explanation || "") + "</div>" +
          "<div class='rev-meta'><span>Difficulty: " + (q.difficulty || "moderate") + "</span>" +
          (q.topic ? "<span>Topic: " + escapeHtml(q.topic) + "</span>" : "") +
          (t ? "<span>Time on this Q: " + fmtTime(t) + "</span>" : "") +
          (marked ? "<span>🚩 marked for review</span>" : "") + "</div>";
        list.appendChild(card);
      });
    });
    if (n === 0) list.innerHTML = "<p class='hint'>No questions in this filter.</p>";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  // ================= WIRING =================
  function begin() {
    const name = el("candidate-name").value.trim();
    state = freshState(name);
    clearSaved();
    save();
    startPart("A");
  }
  function resume() {
    if (state.finished) { renderResult(); show("screen-result"); return; }
    const p = state.parts[state.currentPart];
    if (p.submitted && state.currentPart === "B") { renderResult(); show("screen-result"); return; }
    if (!p.started || (state.currentPart === "B" && !state.parts.B.started)) {
      // between parts
      if (state.parts.A.submitted && !state.parts.B.started) {
        el("transition-title").textContent = "Part A submitted";
        el("transition-msg").textContent = "Resume where you left off — begin Part B (fresh 150-minute timer).";
        show("screen-transition");
        return;
      }
    }
    el("exam-candidate").textContent = state.candidate;
    startPart(state.currentPart);
  }

  function retake() {
    if (!confirm("Start a brand-new attempt? Your current result will be cleared.")) return;
    clearSaved();
    state = freshState(el("candidate-name") ? el("candidate-name").value.trim() : "");
    location.reload();
  }

  function keyHandler(e) {
    if (!el("screen-exam").classList.contains("active")) return;
    if (e.target.tagName === "INPUT" && e.target.type === "text") return;
    if (["1", "2", "3", "4", "5", "6"].includes(e.key)) {
      const i = parseInt(e.key, 10) - 1;
      const q = curQ();
      if (i < q.options.length) {
        const radio = document.querySelectorAll("#options input")[i];
        if (radio) { radio.checked = true; selectOption(i); }
      }
    } else if (e.key === "ArrowRight") { go(1); }
    else if (e.key === "ArrowLeft") { go(-1); }
  }

  function init() {
    // reflect the actual loaded bank size in the instructions
    const setText = (id, v) => { const n = el(id); if (n) n.textContent = v; };
    setText("sub-total", TOTAL); setText("sub-total2", TOTAL);
    setText("sub-a", BANK.A.length); setText("sub-b", BANK.B.length);

    // restore saved attempt?
    const saved = load();
    if (saved && saved.parts) {
      state = saved;
      el("btn-resume").classList.remove("hidden");
      el("btn-clear-saved").classList.remove("hidden");
      if (saved.candidate) el("candidate-name").value = saved.candidate === "Candidate" ? "" : saved.candidate;
      el("start-hint").textContent = saved.finished
        ? "A completed attempt is saved — resume to view your result."
        : "An in-progress attempt is saved (Part " + saved.currentPart + ").";
    }

    el("btn-begin").addEventListener("click", begin);
    el("btn-resume").addEventListener("click", resume);
    el("btn-clear-saved").addEventListener("click", () => {
      clearSaved(); location.reload();
    });
    el("btn-save-next").addEventListener("click", () => go(1));
    el("btn-prev").addEventListener("click", () => go(-1));
    el("btn-mark-next").addEventListener("click", markAndNext);
    el("btn-clear").addEventListener("click", clearResponse);
    el("btn-submit-part").addEventListener("click", openSubmitModal);
    el("btn-cancel-submit").addEventListener("click", closeModal);
    el("btn-confirm-submit").addEventListener("click", () => doSubmit(false));
    el("btn-begin-b").addEventListener("click", () => startPart("B"));
    el("btn-review").addEventListener("click", () => { buildFilters(); renderReview(); show("screen-review"); });
    el("btn-back-result").addEventListener("click", () => show("screen-result"));
    el("btn-print").addEventListener("click", () => window.print());
    el("btn-retake").addEventListener("click", retake);
    document.addEventListener("keydown", keyHandler);

    window.addEventListener("beforeunload", e => {
      if (state && !state.finished && el("screen-exam").classList.contains("active")) {
        e.preventDefault(); e.returnValue = "";
      }
    });

    // sanity banner if bank is incomplete
    if (BANK.A.length === 0 && BANK.B.length === 0) {
      el("start-hint").textContent = "⚠ questions.js not loaded.";
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
