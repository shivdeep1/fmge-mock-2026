/* FMGE Mock Test — question bank (CALIBRATION SET, INI-CET / NEET-PG level)
 * Schema: { id, part:"A"|"B", subject, topic, difficulty, type?, figure?, question, options[4], answer(0-3), explanation }
 *   type:    "sba" (default) | "image" | "match" | "assertion"
 *   figure:  optional raw SVG / HTML (rendered above the options) for image & match-the-following items
 * Answer-key positions are deliberately randomised (A/B/C/D balanced — see validate.js).
 * This is a difficulty-calibration set; once approved, the same level is rolled across the full 300.
 */
const QUESTIONS = [

/* ============================ PART A ============================ */

{ id:1, part:"A", subject:"Biochemistry", topic:"Glycogen storage disease", difficulty:"hard", type:"assertion",
  question:"Assertion (A): In von Gierke disease (type I glycogen storage disease), blood lactate is markedly elevated.\nReason (R): Accumulated glucose-6-phosphate is diverted into glycolysis, generating excess pyruvate and lactate.",
  options:[
    "Both A and R are true, and R is the correct explanation of A",
    "Both A and R are true, but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"],
  answer:0,
  explanation:"Glucose-6-phosphatase deficiency blocks the final step of both glycogenolysis and gluconeogenesis. Glucose-6-phosphate accumulates and is shunted through glycolysis (and the pentose pathway), producing lactic acidosis, hyperuricaemia and hyperlipidaemia along with fasting hypoglycaemia. R correctly explains the lactic acidosis." },

{ id:2, part:"A", subject:"Physiology", topic:"Spirometry", difficulty:"hard", type:"image",
  question:"A 62-year-old lifelong smoker performs spirometry; the resulting flow–volume loop is shown. The pattern is most consistent with:",
  figure:"<svg viewBox='0 0 320 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Flow-volume loop'><rect width='320' height='230' fill='#fbfcfe'/><line x1='40' y1='140' x2='300' y2='140' stroke='#9aa6b6'/><line x1='40' y1='20' x2='40' y2='210' stroke='#9aa6b6'/><path d='M40 140 L80 50 Q108 104 150 122 Q205 136 250 140' fill='none' stroke='#1f6feb' stroke-width='2.5'/><path d='M250 140 Q150 178 40 140' fill='none' stroke='#1f6feb' stroke-width='2.5'/><text x='150' y='205' font-family='sans-serif' font-size='11' fill='#647084'>Volume →</text><text x='86' y='40' font-family='sans-serif' font-size='10' fill='#647084'>Expiration ↑</text><text x='150' y='168' font-family='sans-serif' font-size='10' fill='#647084'>Inspiration ↓</text><text x='92' y='92' font-family='sans-serif' font-size='10' fill='#b3261e'>scooped limb</text></svg>",
  options:[
    "A normal flow–volume loop",
    "A restrictive ventilatory defect",
    "An obstructive ventilatory defect",
    "Fixed upper-airway obstruction"],
  answer:2,
  explanation:"The expiratory limb shows a rapid fall in peak flow with a concave ('scooped/coved') descending limb — the hallmark of airflow obstruction (COPD/asthma). A restrictive defect gives a tall, narrow loop with reduced volume; fixed upper-airway obstruction flattens BOTH the inspiratory and expiratory limbs (a 'box')." },

{ id:3, part:"A", subject:"Pharmacology", topic:"Organophosphate poisoning", difficulty:"moderate", type:"assertion",
  question:"Assertion (A): Pralidoxime is used in the treatment of organophosphate poisoning.\nReason (R): Pralidoxime acts by directly blocking muscarinic acetylcholine receptors.",
  options:[
    "Both A and R are true, and R is the correct explanation of A",
    "Both A and R are true, but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"],
  answer:2,
  explanation:"Pralidoxime IS used in organophosphate poisoning (A true), but it works by REACTIVATING inhibited acetylcholinesterase (regenerating the enzyme before 'ageing'), not by blocking muscarinic receptors — that is atropine's action. Hence R is false." },

{ id:4, part:"A", subject:"Pathology", topic:"Histopathology eponyms", difficulty:"moderate", type:"match",
  question:"Match each cell/inclusion (List I) with its associated condition (List II) and select the correct combination:",
  figure:"<table><tr><th>List I</th><th>List II</th></tr><tr><td>A. Reed–Sternberg cell</td><td>1. Papillary thyroid carcinoma</td></tr><tr><td>B. Auer rods</td><td>2. Rabies</td></tr><tr><td>C. Psammoma bodies</td><td>3. Hodgkin lymphoma</td></tr><tr><td>D. Negri bodies</td><td>4. Acute myeloid leukaemia</td></tr></table>",
  options:[
    "A-4, B-3, C-1, D-2",
    "A-3, B-4, C-2, D-1",
    "A-3, B-4, C-1, D-2",
    "A-1, B-4, C-3, D-2"],
  answer:2,
  explanation:"Reed–Sternberg cells → Hodgkin lymphoma; Auer rods → acute myeloid leukaemia; psammoma bodies → papillary thyroid carcinoma (also meningioma, serous ovarian Ca); Negri bodies → rabies. Correct: A-3, B-4, C-1, D-2." },

{ id:5, part:"A", subject:"Microbiology", topic:"Culture media", difficulty:"hard", type:"match",
  question:"Match each organism (List I) with its selective/enriched culture medium (List II) and select the correct combination:",
  figure:"<table><tr><th>List I</th><th>List II</th></tr><tr><td>A. Corynebacterium diphtheriae</td><td>1. Thayer–Martin agar</td></tr><tr><td>B. Bordetella pertussis</td><td>2. Löwenstein–Jensen medium</td></tr><tr><td>C. Neisseria gonorrhoeae</td><td>3. Potassium tellurite agar</td></tr><tr><td>D. Mycobacterium tuberculosis</td><td>4. Bordet–Gengou medium</td></tr></table>",
  options:[
    "A-4, B-3, C-1, D-2",
    "A-3, B-4, C-1, D-2",
    "A-3, B-4, C-2, D-1",
    "A-2, B-4, C-1, D-3"],
  answer:1,
  explanation:"C. diphtheriae → tellurite media (black colonies, e.g., Tinsdale); B. pertussis → Bordet–Gengou; N. gonorrhoeae → Thayer–Martin (chocolate agar with antibiotics); M. tuberculosis → Löwenstein–Jensen. Correct: A-3, B-4, C-1, D-2." },

{ id:6, part:"A", subject:"Community Medicine", topic:"Screening — predictive value", difficulty:"hard",
  question:"A screening test has a sensitivity of 90% and a specificity of 90%. If it is applied to a population in which the disease prevalence is only 1%, the approximate positive predictive value (PPV) is:",
  options:[
    "About 50%",
    "About 90%",
    "About 33%",
    "About 8%"],
  answer:3,
  explanation:"In 10,000 people, 100 are diseased → true positives = 90; 9,900 are healthy → false positives = 10% × 9,900 = 990. PPV = 90 ÷ (90+990) ≈ 8%. Despite excellent sensitivity/specificity, a low prevalence makes most positives false — the key reason screening low-prevalence populations yields many false positives." },

{ id:7, part:"A", subject:"Physiology", topic:"Oxygen transport", difficulty:"moderate", type:"image",
  question:"Two oxygen–haemoglobin dissociation curves are shown; curve B is displaced relative to the normal curve A. Which physiological condition produces the shift seen in curve B?",
  figure:"<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Oxygen dissociation curves'><rect width='320' height='220' fill='#fbfcfe'/><line x1='40' y1='190' x2='300' y2='190' stroke='#9aa6b6'/><line x1='40' y1='20' x2='40' y2='190' stroke='#9aa6b6'/><polyline points='40,190 66,171 92,134 110,110 144,70 196,46 248,36 300,33' fill='none' stroke='#1f6feb' stroke-width='2.5'/><polyline points='40,190 79,171 105,142 134,110 170,78 222,49 274,38 300,35' fill='none' stroke='#b3261e' stroke-width='2.5' stroke-dasharray='6 4'/><text x='150' y='208' font-family='sans-serif' font-size='11' fill='#647084'>PO₂ (mmHg) →</text><text x='112' y='98' font-family='sans-serif' font-size='11' fill='#1f6feb'>A</text><text x='150' y='102' font-family='sans-serif' font-size='11' fill='#b3261e'>B</text><text x='150' y='118' font-family='sans-serif' font-size='10' fill='#647084'>right shift</text></svg>",
  options:[
    "Storage of blood in the blood bank",
    "Actively exercising skeletal muscle",
    "The presence of fetal haemoglobin",
    "Acute respiratory alkalosis"],
  answer:1,
  explanation:"Curve B is shifted to the right (reduced O₂ affinity, easier unloading). A right shift is produced by increased CO₂, H⁺ (low pH), temperature and 2,3-BPG — exactly the environment of exercising muscle (Bohr effect). Stored blood (low 2,3-BPG), fetal haemoglobin and alkalosis all shift the curve LEFT." },

{ id:8, part:"A", subject:"Pharmacology", topic:"Toxicology — antidotes", difficulty:"moderate", type:"match",
  question:"Match each poison (List I) with its specific antidote (List II) and select the correct combination:",
  figure:"<table><tr><th>List I</th><th>List II</th></tr><tr><td>A. Methanol</td><td>1. Deferoxamine</td></tr><tr><td>B. Iron</td><td>2. Flumazenil</td></tr><tr><td>C. Cyanide</td><td>3. Fomepizole</td></tr><tr><td>D. Benzodiazepine</td><td>4. Hydroxocobalamin</td></tr></table>",
  options:[
    "A-4, B-1, C-3, D-2",
    "A-3, B-4, C-1, D-2",
    "A-1, B-3, C-4, D-2",
    "A-3, B-1, C-4, D-2"],
  answer:3,
  explanation:"Methanol → fomepizole (alcohol dehydrogenase inhibitor); iron → deferoxamine (chelator); cyanide → hydroxocobalamin (or amyl/sodium nitrite + thiosulphate); benzodiazepine → flumazenil. Correct: A-3, B-1, C-4, D-2." },

{ id:9, part:"A", subject:"Pathology", topic:"Glomerular disease", difficulty:"hard",
  question:"A 30-year-old man presents with haemoptysis and rapidly progressive acute kidney injury. Renal biopsy shows crescentic glomerulonephritis with LINEAR deposition of IgG along the glomerular basement membrane on immunofluorescence. The target antigen is:",
  options:[
    "The α3 chain of type IV collagen",
    "The phospholipase A2 receptor (PLA2R)",
    "DNA topoisomerase I",
    "A streptococcal exotoxin"],
  answer:0,
  explanation:"Linear GBM IgG with pulmonary–renal syndrome is anti-GBM (Goodpasture) disease; the autoantibody targets the α3 chain of the NC1 domain of type IV collagen. PLA2R is the antigen in primary membranous nephropathy (granular, not linear); anti-topoisomerase (Scl-70) marks diffuse systemic sclerosis." },

{ id:10, part:"A", subject:"Anatomy", topic:"Cavernous sinus", difficulty:"hard",
  question:"A diabetic patient develops fever, proptosis, chemosis and painful ophthalmoplegia from cavernous sinus thrombosis. Which cranial nerve, lying FREELY within the sinus adjacent to the internal carotid artery (rather than in its lateral wall), is typically affected earliest?",
  options:[
    "Oculomotor nerve (III)",
    "Trochlear nerve (IV)",
    "Abducens nerve (VI)",
    "Maxillary nerve (V2)"],
  answer:2,
  explanation:"The abducens nerve (VI) runs within the cavernous sinus alongside the internal carotid artery, whereas III, IV, V1 and V2 lie in the lateral wall. Because VI is most intimately related to the artery, it is often the first to be affected, producing a lateral rectus palsy (failure of abduction)." },

{ id:11, part:"A", subject:"Forensic Medicine", topic:"Putrefaction", difficulty:"moderate",
  question:"In a body undergoing decomposition in temperate conditions, what is the EARLIEST external sign of putrefaction usually observed?",
  options:[
    "Marbling of the superficial veins",
    "Greenish discolouration over the right iliac fossa",
    "Bloating of the face with protrusion of the tongue",
    "Skin slippage and blister formation"],
  answer:1,
  explanation:"The first external sign of putrefaction is a greenish discolouration of the skin over the right iliac fossa (overlying the caecum, where bacteria-rich contents and sulph-haemoglobin form first), usually within 12–24 hours. Marbling, bloating and skin slippage appear later." },

{ id:12, part:"A", subject:"Microbiology", topic:"Non-fermenters", difficulty:"hard",
  question:"Blood and sputum cultures from a ventilated ICU patient with blue-green-tinged secretions grow an oxidase-POSITIVE, non-lactose-fermenting Gram-negative bacillus that produces a sweet, grape-like odour and pigment on culture. The organism is:",
  options:[
    "Klebsiella pneumoniae",
    "Escherichia coli",
    "Acinetobacter baumannii",
    "Pseudomonas aeruginosa"],
  answer:3,
  explanation:"Oxidase-positive, non-lactose-fermenting Gram-negative rod with blue-green pigment (pyocyanin/pyoverdin) and a grape-like (aminoacetophenone) odour is Pseudomonas aeruginosa — a major cause of ventilator-associated pneumonia. Klebsiella and E. coli ferment lactose and are oxidase-negative; Acinetobacter is oxidase-negative and non-pigmented." },

/* ============================ PART B ============================ */

{ id:13, part:"B", subject:"General Medicine", topic:"Acute coronary syndrome", difficulty:"hard", type:"image",
  question:"A 58-year-old man has 2 hours of crushing chest pain and sweating. BP is 86/58 mmHg, heart rate 48/min, and the chest is clear. His ECG (leads II, III and aVF) is shown. Which is the most appropriate immediate action?",
  figure:"<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='ECG showing ST elevation in inferior leads'><defs><pattern id='gecg' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M10 0H0V10' fill='none' stroke='#f1cccc' stroke-width='0.5'/></pattern></defs><rect width='400' height='150' fill='#fff7f7'/><rect width='400' height='150' fill='url(#gecg)'/><g fill='none' stroke='#b3261e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M20 90 H34 L40 82 L46 90 H60 L63 95 L69 52 L75 102 L81 74 H106 L116 58 L124 74 L128 90 H140'/><path d='M20 90 H34 L40 82 L46 90 H60 L63 95 L69 52 L75 102 L81 74 H106 L116 58 L124 74 L128 90 H140' transform='translate(120,0)'/><path d='M20 90 H34 L40 82 L46 90 H60 L63 95 L69 52 L75 102 L81 74 H106 L116 58 L124 74 L128 90 H140' transform='translate(240,0)'/></g><text x='10' y='18' font-family='sans-serif' font-size='11' fill='#7a1a16'>Leads II, III, aVF</text></svg>",
  options:[
    "Give high-dose sublingual glyceryl trinitrate immediately",
    "Give cautious IV fluids, avoid nitrates, and arrange urgent reperfusion",
    "Give intravenous metoprolol to control the heart rate",
    "Withhold all treatment until the troponin result returns"],
  answer:1,
  explanation:"The ECG shows ST elevation in the inferior leads (II, III, aVF) — an inferior STEMI, often from right coronary artery occlusion with possible right-ventricular involvement (hypotension + bradycardia). Nitrates and beta-blockers can cause catastrophic hypotension here; give cautious fluids and arrange urgent reperfusion (primary PCI/thrombolysis). Treatment is not delayed for troponin in STEMI." },

{ id:14, part:"B", subject:"General Medicine", topic:"Bradyarrhythmia", difficulty:"moderate", type:"assertion",
  question:"Assertion (A): In complete (third-degree) heart block, intermittent large 'cannon a waves' are seen in the jugular venous pulse.\nReason (R): Atrioventricular dissociation causes the atria to occasionally contract against closed atrioventricular valves.",
  options:[
    "Both A and R are true, and R is the correct explanation of A",
    "Both A and R are true, but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"],
  answer:0,
  explanation:"In complete heart block the atria and ventricles beat independently (AV dissociation). When an atrial contraction happens to occur while the tricuspid valve is closed (ventricle contracting), the right atrium ejects against a closed valve, producing an intermittent giant 'cannon a wave'. R correctly explains A." },

{ id:15, part:"B", subject:"Paediatrics", topic:"Drug safety / Reye syndrome", difficulty:"moderate", type:"assertion",
  question:"Assertion (A): Aspirin should be avoided in children with a viral febrile illness.\nReason (R): Aspirin irreversibly acetylates the enzyme cyclo-oxygenase.",
  options:[
    "Both A and R are true, and R is the correct explanation of A",
    "Both A and R are true, but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"],
  answer:1,
  explanation:"Both statements are true, but R is not the reason for A. Aspirin is avoided in febrile children because of the risk of Reye syndrome (acute encephalopathy with hepatic failure), not because of its (genuine) irreversible COX inhibition. True assertion, true reason, but R does not explain A." },

{ id:16, part:"B", subject:"ENT", topic:"Audiometry", difficulty:"hard", type:"image",
  question:"A 30-year-old woman has progressive bilateral hearing loss with a normal tympanic membrane and a family history of deafness. Her pure-tone audiogram of the right ear is shown (O = air conduction, [ = bone conduction). The findings and most likely diagnosis are:",
  figure:"<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Audiogram with air-bone gap'><rect width='340' height='230' fill='#fbfcfe'/><g stroke='#dde3ec' stroke-width='1'><line x1='50' y1='40' x2='300' y2='40'/><line x1='50' y1='72' x2='300' y2='72'/><line x1='50' y1='104' x2='300' y2='104'/><line x1='50' y1='136' x2='300' y2='136'/><line x1='50' y1='168' x2='300' y2='168'/><line x1='50' y1='200' x2='300' y2='200'/><line x1='50' y1='40' x2='50' y2='200'/><line x1='100' y1='40' x2='100' y2='200'/><line x1='150' y1='40' x2='150' y2='200'/><line x1='200' y1='40' x2='200' y2='200'/><line x1='250' y1='40' x2='250' y2='200'/><line x1='300' y1='40' x2='300' y2='200'/></g><g font-family='sans-serif' font-size='9' fill='#647084'><text x='38' y='43'>0</text><text x='33' y='107'>40</text><text x='33' y='171'>80</text><text x='44' y='214'>250</text><text x='140' y='214'>1k</text><text x='240' y='214'>4k</text><text x='8' y='120' transform='rotate(-90 8,120)'>dB HL</text></g><polyline points='50,126 100,126 150,128 200,130 250,132 300,134' fill='none' stroke='#b3261e' stroke-width='2'/><g font-family='sans-serif' font-size='13' fill='#b3261e' text-anchor='middle'><text x='50' y='130'>O</text><text x='100' y='130'>O</text><text x='150' y='132'>O</text><text x='200' y='134'>O</text><text x='250' y='136'>O</text><text x='300' y='138'>O</text></g><g font-family='sans-serif' font-size='13' fill='#1f6feb' text-anchor='middle'><text x='50' y='60'>[</text><text x='100' y='60'>[</text><text x='150' y='60'>[</text><text x='200' y='62'>[</text><text x='250' y='62'>[</text><text x='300' y='62'>[</text></g><text x='150' y='225' font-family='sans-serif' font-size='9' fill='#647084'>Frequency (Hz)</text></svg>",
  options:[
    "Sensorineural hearing loss — presbycusis",
    "Sensorineural hearing loss — noise-induced",
    "Conductive hearing loss — otosclerosis",
    "Mixed hearing loss — chronic suppurative otitis media"],
  answer:2,
  explanation:"Bone conduction (blue '[') is near-normal while air conduction (red 'O') is depressed — a wide AIR–BONE GAP, which defines a conductive hearing loss. In a young adult with a normal eardrum and family history, the cause is otosclerosis (stapes fixation). Sensorineural losses show air and bone thresholds falling TOGETHER with no gap." },

{ id:17, part:"B", subject:"General Medicine", topic:"Acid–base", difficulty:"hard",
  question:"A patient with several days of profuse vomiting is drowsy. Arterial blood gas: pH 7.50, PaCO₂ 50 mmHg, HCO₃⁻ 38 mmol/L; electrolytes Na⁺ 140, Cl⁻ 88, K⁺ 2.9 mmol/L. The acid–base disturbance is best described as:",
  options:[
    "Acute respiratory alkalosis",
    "High anion-gap metabolic acidosis",
    "Metabolic acidosis with respiratory compensation",
    "Metabolic alkalosis with appropriate respiratory compensation"],
  answer:3,
  explanation:"High pH with a high HCO₃⁻ indicates a primary metabolic alkalosis; the raised PaCO₂ (50) is appropriate respiratory compensation (hypoventilation). Prolonged vomiting causes a hypochloraemic, hypokalaemic metabolic alkalosis (loss of HCl, volume/Cl depletion, secondary hyperaldosteronism). The low Cl⁻ and K⁺ fit perfectly." },

{ id:18, part:"B", subject:"Obstetrics & Gynaecology", topic:"Intrapartum emergency", difficulty:"hard",
  question:"A multigravida with a previous caesarean section is in labour when she develops sudden severe abdominal pain, cessation of uterine contractions and recession of the presenting part; the fetal heart rate becomes undetectable and she turns hypotensive. The most likely diagnosis is:",
  options:[
    "Uterine rupture",
    "Placental abruption",
    "Amniotic fluid embolism",
    "Umbilical cord prolapse"],
  answer:0,
  explanation:"Sudden severe pain, loss of uterine contractions, recession of the presenting part (loss of station), acute fetal compromise and maternal shock in a woman with a uterine scar are classic for uterine rupture. It demands immediate resuscitation and laparotomy. Abruption keeps a tense, contracting uterus; cord prolapse shows a palpable cord." },

{ id:19, part:"B", subject:"General Surgery", topic:"Trauma — next step", difficulty:"hard",
  question:"A 25-year-old with blunt abdominal trauma has BP 80/50 mmHg that does not improve after 2 litres of crystalloid; the abdomen is distended and a FAST scan shows free intraperitoneal fluid. The next best step is:",
  options:[
    "CT scan of the abdomen with contrast",
    "Repeat the FAST scan in 30 minutes",
    "Emergency exploratory laparotomy",
    "Diagnostic peritoneal lavage"],
  answer:2,
  explanation:"A haemodynamically UNSTABLE trauma patient with a positive FAST has ongoing intra-abdominal haemorrhage and needs immediate exploratory laparotomy for control — not CT, which is only for stable patients. DPL is largely obsolete where FAST is available. Persisting hypotension after 2 L crystalloid signals significant blood loss." },

{ id:20, part:"B", subject:"Paediatrics", topic:"Metabolic disease", difficulty:"hard",
  question:"A 5-week-old, exclusively breastfed infant presents with poor feeding, jaundice, hepatomegaly, bilateral cataracts and Escherichia coli sepsis. Urine is positive for reducing substances but negative on the glucose-oxidase (dipstick) test. The most likely diagnosis is:",
  options:[
    "Hereditary fructose intolerance",
    "Classic galactosaemia",
    "Phenylketonuria",
    "Maple syrup urine disease"],
  answer:1,
  explanation:"Galactosaemia (galactose-1-phosphate uridyltransferase deficiency) presents in the first weeks of milk feeding with jaundice, hepatomegaly, cataracts, failure to thrive and a striking predisposition to E. coli sepsis. Urine reducing substances are positive (galactose) but the glucose-specific dipstick is negative. Management is a galactose/lactose-free diet." },

{ id:21, part:"B", subject:"Ophthalmology", topic:"Sudden visual loss", difficulty:"hard",
  question:"A 28-year-old woman has subacute loss of vision in one eye over 2 days with pain on eye movement, reduced colour vision and a relative afferent pupillary defect; the fundus looks normal. The most likely diagnosis and its key association are:",
  options:[
    "Central retinal artery occlusion — cardiac embolism",
    "Acute angle-closure glaucoma — hypermetropia",
    "Anterior ischaemic optic neuropathy — giant cell arteritis",
    "Retrobulbar optic neuritis — multiple sclerosis"],
  answer:3,
  explanation:"Subacute monocular visual loss with pain on eye movement, dyschromatopsia and a relative afferent pupillary defect but a NORMAL fundus is retrobulbar optic neuritis ('the patient sees nothing and the doctor sees nothing'), strongly associated with multiple sclerosis. CRAO is sudden and painless with a cherry-red spot; AION causes a swollen disc, often in older patients with giant cell arteritis." },

{ id:22, part:"B", subject:"General Medicine", topic:"Valvular murmurs", difficulty:"moderate", type:"match",
  question:"Match each auscultatory finding (List I) with the underlying valve lesion (List II) and select the correct combination:",
  figure:"<table><tr><th>List I</th><th>List II</th></tr><tr><td>A. Mid-diastolic rumble with opening snap</td><td>1. Aortic regurgitation</td></tr><tr><td>B. Ejection systolic murmur radiating to the carotids</td><td>2. Mitral stenosis</td></tr><tr><td>C. Early diastolic decrescendo murmur at the left sternal edge</td><td>3. Mitral regurgitation</td></tr><tr><td>D. Pansystolic murmur radiating to the axilla</td><td>4. Aortic stenosis</td></tr></table>",
  options:[
    "A-2, B-4, C-1, D-3",
    "A-4, B-2, C-1, D-3",
    "A-2, B-4, C-3, D-1",
    "A-1, B-4, C-2, D-3"],
  answer:0,
  explanation:"Mid-diastolic rumble with opening snap → mitral stenosis; ejection systolic murmur to the carotids → aortic stenosis; early diastolic decrescendo at the left sternal edge → aortic regurgitation; pansystolic murmur to the axilla → mitral regurgitation. Correct: A-2, B-4, C-1, D-3." },

{ id:23, part:"B", subject:"General Surgery", topic:"Obstructive jaundice", difficulty:"hard",
  question:"A 60-year-old man has painless, progressive obstructive jaundice with weight loss and a palpable, non-tender gallbladder. Imaging shows simultaneous dilatation of the common bile duct and the pancreatic duct (the 'double-duct sign'). The most likely diagnosis is:",
  options:[
    "Choledocholithiasis (common bile-duct stone)",
    "Carcinoma of the head of the pancreas",
    "Primary sclerosing cholangitis",
    "Acute cholecystitis"],
  answer:1,
  explanation:"Painless obstructive jaundice with weight loss, a palpable non-tender gallbladder (Courvoisier's law) and a double-duct sign (dilated CBD AND pancreatic duct) point to carcinoma of the pancreatic head/periampullary region obstructing both ducts. Stones usually cause painful, intermittent jaundice with a fibrotic, non-palpable gallbladder." },

{ id:24, part:"B", subject:"General Medicine", topic:"Endocrine — hypertension", difficulty:"hard",
  question:"A 45-year-old with resistant hypertension and spontaneous hypokalaemia (not on diuretics) has an elevated plasma aldosterone with suppressed plasma renin activity (high aldosterone-to-renin ratio). Which is the most appropriate test to CONFIRM primary hyperaldosteronism?",
  options:[
    "Renal artery Doppler ultrasound",
    "24-hour urinary metanephrines",
    "A saline-infusion (aldosterone suppression) test",
    "Overnight dexamethasone suppression test"],
  answer:2,
  explanation:"A high aldosterone-to-renin ratio is a SCREEN for primary hyperaldosteronism (Conn's). Confirmation requires demonstrating non-suppressible aldosterone — e.g., a saline-infusion or fludrocortisone-suppression test (aldosterone fails to fall). Adrenal CT and adrenal vein sampling then localise the source. Metanephrines test for phaeochromocytoma; dexamethasone suppression screens for Cushing's." }

];

/* expose for the engine */
if (typeof window !== "undefined") window.QUESTIONS = QUESTIONS;
