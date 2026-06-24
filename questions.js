/* FMGE Mock Test — question bank
 * Schema: { id, part:"A"|"B", subject, topic, difficulty:"easy|moderate|hard",
 *           question, options:[4], answer:<0-3 index>, explanation }
 * Part A = pre/para-clinical, Part B = clinical. Expanding toward 300 (150 + 150).
 * Questions are original but aligned to recurring FMGE / NEET / INI-CET themes.
 */
const QUESTIONS = [

/* ============================ PART A ============================ */

/* ---- Anatomy ---- */
{ id:1, part:"A", subject:"Anatomy", topic:"Skull foramina / Trigeminal nerve", difficulty:"moderate",
  question:"A 40-year-old man sustains facial trauma and develops loss of sensation over the lower lip and chin along with weakness of the muscles of mastication on the same side. Injury to a structure passing through which skull foramen best explains this?",
  options:["Foramen rotundum","Foramen ovale","Foramen spinosum","Jugular foramen"],
  answer:1,
  explanation:"The mandibular division of the trigeminal nerve (V3) exits through the foramen ovale and carries sensory fibres to the lower lip/chin and motor fibres to the muscles of mastication. V2 uses the foramen rotundum, the middle meningeal artery the foramen spinosum, and CN IX–XI the jugular foramen." },

{ id:2, part:"A", subject:"Anatomy", topic:"Brachial plexus", difficulty:"moderate",
  question:"Two weeks after axillary lymph node dissection for breast cancer, a woman notices the medial border of her scapula juts out ('winging') when she pushes against a wall, and she cannot raise the arm fully overhead. Which nerve is most likely injured?",
  options:["Thoracodorsal nerve","Axillary nerve","Long thoracic nerve","Dorsal scapular nerve"],
  answer:2,
  explanation:"Winging of the scapula is due to serratus anterior paralysis from long thoracic nerve (C5–C7) injury, a known complication of axillary surgery. Thoracodorsal supplies latissimus dorsi, axillary supplies deltoid/teres minor, and dorsal scapular supplies the rhomboids." },

/* ---- Physiology ---- */
{ id:3, part:"A", subject:"Physiology", topic:"Respiratory physiology", difficulty:"easy",
  question:"Which of the following shifts the oxygen–haemoglobin dissociation curve to the right, favouring oxygen unloading at the tissues?",
  options:["Decreased 2,3-BPG","Respiratory alkalosis","Increased CO₂ and decreased pH","Presence of fetal haemoglobin"],
  answer:2,
  explanation:"A right shift (decreased O₂ affinity) is produced by increased CO₂, increased H⁺ (low pH — the Bohr effect), increased temperature and increased 2,3-BPG. Alkalosis, low 2,3-BPG and fetal haemoglobin all shift the curve left." },

{ id:4, part:"A", subject:"Physiology", topic:"Membrane physiology", difficulty:"easy",
  question:"The resting membrane potential of a typical neuron lies closest to the Nernst equilibrium potential of which ion, reflecting the membrane's high resting permeability to it?",
  options:["Sodium","Potassium","Calcium","Chloride"],
  answer:1,
  explanation:"At rest the membrane is most permeable to K⁺ through leak channels, so the resting potential (~ −70 mV) lies near the K⁺ equilibrium potential (~ −90 mV). The Na⁺/K⁺-ATPase maintains the gradients but contributes only a few mV directly." },

/* ---- Biochemistry ---- */
{ id:5, part:"A", subject:"Biochemistry", topic:"Urea cycle", difficulty:"hard",
  question:"A male neonate becomes lethargic and vomits after starting protein feeds. Investigations show marked hyperammonaemia with a normal anion gap (no acidosis), elevated urinary orotic acid and low citrulline. The most likely deficient enzyme is:",
  options:["Carbamoyl phosphate synthetase-1","Ornithine transcarbamylase","Arginase","Argininosuccinate synthetase"],
  answer:1,
  explanation:"Ornithine transcarbamylase (OTC) deficiency is the commonest urea-cycle defect and is X-linked. Accumulated carbamoyl phosphate spills into pyrimidine synthesis, raising orotic acid — hyperammonaemia WITH high orotic acid and no acidosis points to OTC. CPS-1 deficiency has low orotic acid." },

{ id:6, part:"A", subject:"Biochemistry", topic:"Vitamins / coenzymes", difficulty:"moderate",
  question:"A chronic alcoholic presents with confusion, gait ataxia and bilateral lateral rectus palsy. Which coenzyme deficiency and impaired enzyme best explain this picture?",
  options:["Thiamine (TPP) — pyruvate dehydrogenase","Niacin — glyceraldehyde-3-phosphate dehydrogenase","Pyridoxine — ALA synthase","Biotin — pyruvate carboxylase"],
  answer:0,
  explanation:"Wernicke encephalopathy (confusion, ophthalmoplegia, ataxia) results from thiamine deficiency. Thiamine pyrophosphate is a cofactor for pyruvate dehydrogenase, α-ketoglutarate dehydrogenase and transketolase. Always give thiamine BEFORE glucose to avoid precipitating the syndrome." },

/* ---- Pathology ---- */
{ id:7, part:"A", subject:"Pathology", topic:"Haematology", difficulty:"moderate",
  question:"A 62-year-old man has fatigue and massive splenomegaly. The peripheral smear shows numerous teardrop-shaped red cells with nucleated red cells and immature granulocytes; bone marrow aspiration yields a 'dry tap' and biopsy shows extensive fibrosis. The most likely diagnosis is:",
  options:["Iron deficiency anaemia","Primary myelofibrosis","Hereditary spherocytosis","Megaloblastic anaemia"],
  answer:1,
  explanation:"Teardrop cells (dacrocytes) with a leucoerythroblastic blood picture, a dry tap and marrow fibrosis define primary myelofibrosis, a myeloproliferative neoplasm (JAK2 mutation in ~50%) with massive splenomegaly from extramedullary haematopoiesis." },

{ id:8, part:"A", subject:"Pathology", topic:"Lymphoma", difficulty:"moderate",
  question:"A 24-year-old man has painless cervical lymphadenopathy, low-grade fever and night sweats. Lymph node biopsy shows large binucleate cells with prominent eosinophilic 'owl-eye' nucleoli that are CD15 and CD30 positive. The diagnosis is:",
  options:["Hodgkin lymphoma","Burkitt lymphoma","Chronic lymphocytic leukaemia","Metastatic carcinoma"],
  answer:0,
  explanation:"Reed–Sternberg cells (binucleate, owl-eye nucleoli, CD15+/CD30+) are characteristic of classical Hodgkin lymphoma. Burkitt shows a 'starry-sky' pattern with MYC translocation; CLL shows mature small lymphocytes and smudge cells." },

/* ---- Pharmacology ---- */
{ id:9, part:"A", subject:"Pharmacology", topic:"Antidiabetics", difficulty:"moderate",
  question:"A 58-year-old man with type 2 diabetes and heart failure with reduced ejection fraction needs an additional anti-diabetic agent that also lowers heart-failure hospitalisation and slows chronic kidney disease. The most appropriate class is:",
  options:["Sulfonylurea","SGLT2 inhibitor","DPP-4 inhibitor","Thiazolidinedione"],
  answer:1,
  explanation:"SGLT2 inhibitors (dapagliflozin, empagliflozin) reduce heart-failure hospitalisation and slow CKD progression independent of glucose lowering. Thiazolidinediones cause fluid retention and are contraindicated in heart failure; sulfonylureas risk hypoglycaemia and weight gain." },

{ id:10, part:"A", subject:"Pharmacology", topic:"Anticoagulants", difficulty:"moderate",
  question:"A patient on warfarin for atrial fibrillation has an INR of 8.0 with minor gum bleeding but no major haemorrhage. In addition to withholding warfarin, the most appropriate management is:",
  options:["Oral or IV vitamin K (phytomenadione)","Protamine sulphate","Platelet transfusion","Tranexamic acid alone"],
  answer:0,
  explanation:"For a high INR with only minor bleeding, hold warfarin and give vitamin K. Major or life-threatening bleeding additionally needs rapid reversal with prothrombin complex concentrate (or FFP). Protamine reverses heparin, not warfarin." },

/* ---- Microbiology ---- */
{ id:11, part:"A", subject:"Microbiology", topic:"Bacterial toxins", difficulty:"moderate",
  question:"A 6-year-old unimmunised child develops a thick greyish adherent pseudomembrane over the tonsils, marked cervical lymphadenopathy ('bull neck') and early myocarditis. The responsible toxin acts by:",
  options:["ADP-ribosylation of elongation factor-2","Increasing intracellular cAMP","Blocking acetylcholine release","Cleaving SNARE proteins to block glycine"],
  answer:0,
  explanation:"Corynebacterium diphtheriae toxin ADP-ribosylates elongation factor-2 (EF-2), halting host protein synthesis and producing the pseudomembrane and cardiotoxicity (Pseudomonas exotoxin A shares this mechanism). Cholera/ETEC toxins raise cAMP; botulinum and tetanus toxins cleave SNAREs." },

{ id:12, part:"A", subject:"Microbiology", topic:"Enteric infections", difficulty:"moderate",
  question:"Which organism characteristically causes bacillary dysentery (bloody, mucoid stools with tenesmus) and is notable for needing a very low infective dose, as few as 10–100 organisms?",
  options:["Shigella dysenteriae","Vibrio cholerae","Enterotoxigenic E. coli","Giardia lamblia"],
  answer:0,
  explanation:"Shigella causes dysentery and has an extremely low infective dose, enabling easy person-to-person spread. Vibrio cholerae and ETEC cause watery (secretory) diarrhoea and need far larger doses; Giardia causes non-bloody malabsorptive diarrhoea." },

/* ---- Forensic Medicine ---- */
{ id:13, part:"A", subject:"Forensic Medicine", topic:"Firearm injuries", difficulty:"moderate",
  question:"A gunshot wound shows 'tattooing' — pinpoint abrasions from unburnt powder grains embedded in the skin that cannot be wiped away. This finding indicates a wound of:",
  options:["Distant range","Intermediate range","Contact range","Range beyond one metre"],
  answer:1,
  explanation:"Tattooing/stippling (unburnt powder that cannot be wiped off) indicates an intermediate-range wound. Soot/blackening that CAN be wiped off with singeing suggests close range; a muzzle imprint with cherry-red wound suggests contact; distant wounds show neither soot nor tattooing." },

{ id:14, part:"A", subject:"Forensic Medicine", topic:"Thanatology", difficulty:"easy",
  question:"Rigor mortis, the post-mortem stiffening of muscles, is biochemically due to:",
  options:["Accumulation of lactic acid lowering muscle pH","Depletion of ATP causing persistent actin–myosin cross-bridges","Heat coagulation of muscle proteins","Bacterial putrefaction of muscle"],
  answer:1,
  explanation:"After death ATP is no longer regenerated; without ATP the actin–myosin cross-bridges cannot detach, so muscles stiffen. Rigor appears 1–2 h after death, is fully established by ~12 h, persists ~12 h and passes off as putrefaction begins." },

/* ---- Community Medicine (PSM) ---- */
{ id:15, part:"A", subject:"Community Medicine", topic:"Epidemiology / measurements", difficulty:"moderate",
  question:"In a district of 50,000 people, 250 new cases of tuberculosis are registered over one year while 1,000 patients are already living with the disease at mid-year. The incidence rate of tuberculosis is:",
  options:["5 per 1,000 per year","20 per 1,000 per year","25 per 1,000 per year","250 per 1,000 per year"],
  answer:0,
  explanation:"Incidence rate = (NEW cases ÷ population at risk) × 1,000 = (250 ÷ 50,000) × 1,000 = 5 per 1,000 per year. The 1,000 pre-existing cases describe prevalence and must NOT be included in incidence — the classic distractor." },

{ id:16, part:"A", subject:"Community Medicine", topic:"Immunisation / cold chain", difficulty:"moderate",
  question:"In the cold chain for the Universal Immunisation Programme, which vaccine is the MOST sensitive to heat and is therefore stored in the deep-freezer compartment?",
  options:["Oral polio vaccine","BCG","Measles vaccine","DPT"],
  answer:0,
  explanation:"Oral polio vaccine (OPV) is the most heat-sensitive vaccine and is kept in the deep freezer at regional/district level. DPT, TT, hepatitis B and diluents must NEVER be frozen, as freezing destroys them." },

/* ============================ PART B ============================ */

/* ---- General Medicine ---- */
{ id:17, part:"B", subject:"General Medicine", topic:"Thyroid", difficulty:"moderate",
  question:"A 30-year-old woman has palpitations, weight loss and heat intolerance. Examination reveals a fine tremor, a diffuse goitre with an overlying bruit and bilateral exophthalmos. Which antibody is MOST specific for the underlying diagnosis?",
  options:["Anti-thyroid peroxidase (anti-TPO)","Anti-thyroglobulin","TSH-receptor antibody (TRAb/TSI)","Anti-microsomal antibody"],
  answer:2,
  explanation:"The picture is Graves disease — diffuse goitre with bruit plus orbitopathy (exophthalmos), which is specific to Graves. The TSH-receptor stimulating antibody (TRAb/TSI) drives the hyperthyroidism and is the most specific marker. Anti-TPO is sensitive but also positive in Hashimoto thyroiditis." },

{ id:18, part:"B", subject:"General Medicine", topic:"Acute coronary syndrome", difficulty:"moderate",
  question:"A 55-year-old diabetic develops crushing chest pain. ECG shows ST-segment elevation in leads II, III and aVF. The artery most likely occluded — and the drug class to use with particular caution — are:",
  options:["Left anterior descending; avoid all beta-blockers","Right coronary artery; use nitrates cautiously","Left circumflex; avoid aspirin","Left main; avoid heparin"],
  answer:1,
  explanation:"ST elevation in II, III and aVF indicates an inferior-wall MI, usually from right coronary artery occlusion. Because the RCA often supplies the right ventricle, nitrates and other preload-reducers can cause severe hypotension if there is RV infarction, so they are used cautiously." },

/* ---- General Surgery ---- */
{ id:19, part:"B", subject:"General Surgery", topic:"Hepatobiliary surgery", difficulty:"moderate",
  question:"A 45-year-old woman presents with fever with chills, right upper quadrant pain and jaundice. This triad is most characteristic of:",
  options:["Acute cholangitis","Acute cholecystitis","Acute viral hepatitis","Acute pancreatitis"],
  answer:0,
  explanation:"Fever, RUQ pain and jaundice constitute Charcot's triad, characteristic of acute (ascending) cholangitis from biliary obstruction. Adding hypotension and confusion gives Reynolds' pentad. Management is fluids, antibiotics and urgent biliary drainage (ERCP)." },

{ id:20, part:"B", subject:"General Surgery", topic:"Urology / oncology", difficulty:"moderate",
  question:"A 28-year-old man has a firm, painless, non-transilluminating testicular mass. Serum AFP and β-hCG are elevated. The most appropriate next step is:",
  options:["High inguinal orchidectomy","Trans-scrotal needle biopsy","Start chemotherapy before any surgery","Reassurance and repeat ultrasound in 6 weeks"],
  answer:0,
  explanation:"A solid testicular mass with raised tumour markers is a germ-cell tumour until proven otherwise; the standard is high inguinal orchidectomy, which is diagnostic and therapeutic. Trans-scrotal biopsy is contraindicated because it risks tumour seeding and alters lymphatic drainage." },

/* ---- Obstetrics & Gynaecology ---- */
{ id:21, part:"B", subject:"Obstetrics & Gynaecology", topic:"Hypertensive disorders of pregnancy", difficulty:"moderate",
  question:"A 28-year-old primigravida at 34 weeks has BP 160/110 mmHg, 3+ proteinuria, headache and epigastric pain. After magnesium sulphate and intravenous antihypertensive therapy to stabilise her, the DEFINITIVE management is:",
  options:["Continue the pregnancy to term on oral antihypertensives","Delivery of the baby","Strict bed rest and observation only","High-dose loop diuretics"],
  answer:1,
  explanation:"This is pre-eclampsia with severe features; the only definitive cure is delivery, as the disease is driven by the placenta. Magnesium sulphate prevents eclamptic seizures and antihypertensives (labetalol, hydralazine, nifedipine) control BP but do not cure the condition." },

{ id:22, part:"B", subject:"Obstetrics & Gynaecology", topic:"Postpartum haemorrhage", difficulty:"easy",
  question:"The single most common cause of primary postpartum haemorrhage is:",
  options:["Uterine atony","Retained placenta","Genital tract trauma","Coagulation disorder"],
  answer:0,
  explanation:"Uterine atony accounts for about 80% of primary PPH (the '4 Ts': Tone, Tissue, Trauma, Thrombin). First-line management is uterine massage and uterotonics, with oxytocin the drug of choice; ergometrine is avoided in hypertensive women." },

/* ---- Paediatrics ---- */
{ id:23, part:"B", subject:"Paediatrics", topic:"Paediatric respiratory", difficulty:"moderate",
  question:"A 2-year-old has a 2-day coryzal illness followed by a barking, seal-like cough, inspiratory stridor and hoarseness with low-grade fever. Neck X-ray shows a subglottic 'steeple sign'. The most likely diagnosis is:",
  options:["Croup (laryngotracheobronchitis)","Acute epiglottitis","Bronchiolitis","Inhaled foreign body"],
  answer:0,
  explanation:"A barking cough with stridor and the subglottic 'steeple sign' indicates viral croup, usually parainfluenza virus. Treatment is corticosteroids (dexamethasone) and, if severe, nebulised adrenaline. Epiglottitis causes drooling and a 'thumbprint sign'." },

/* ---- Ophthalmology ---- */
{ id:24, part:"B", subject:"Ophthalmology", topic:"Glaucoma", difficulty:"moderate",
  question:"A 60-year-old presents with a sudden painful red eye, blurred vision with coloured haloes around lights, nausea, a mid-dilated non-reactive pupil and a stony-hard globe. The diagnosis is:",
  options:["Acute angle-closure glaucoma","Primary open-angle glaucoma","Optic neuritis","Central retinal artery occlusion"],
  answer:0,
  explanation:"Sudden painful red eye, haloes, a mid-dilated fixed pupil and high intraocular pressure (hard globe) indicate acute angle-closure glaucoma — an emergency. Treat with IV acetazolamide, topical pilocarpine/timolol and definitive laser peripheral iridotomy. Open-angle glaucoma is painless and chronic." },

/* ---- ENT ---- */
{ id:25, part:"B", subject:"ENT", topic:"Rhinology", difficulty:"easy",
  question:"A 4-year-old child is brought with persistent UNILATERAL foul-smelling, blood-tinged nasal discharge for two weeks. The most likely cause is:",
  options:["Nasal foreign body","Allergic rhinitis","Acute bacterial sinusitis","Adenoid hypertrophy"],
  answer:0,
  explanation:"Unilateral foul-smelling, often blood-stained nasal discharge in a young child is a retained nasal foreign body until proven otherwise. Allergic rhinitis, sinusitis and adenoid hypertrophy cause bilateral symptoms. Management is prompt removal." },

/* ---- Psychiatry ---- */
{ id:26, part:"B", subject:"Psychiatry", topic:"Psychopharmacology emergencies", difficulty:"moderate",
  question:"Three days after starting haloperidol, a patient develops high fever, 'lead-pipe' muscle rigidity, altered sensorium, autonomic instability and a markedly raised creatine kinase. The diagnosis and most appropriate management are:",
  options:["Neuroleptic malignant syndrome — stop the drug and give dantrolene/bromocriptine","Serotonin syndrome — increase the antipsychotic dose","Malignant hyperthermia — continue haloperidol","Benign extrapyramidal effect — simply reassure"],
  answer:0,
  explanation:"Fever, rigidity, altered mental status, autonomic instability and raised CK after a dopamine antagonist define neuroleptic malignant syndrome. Stop the offending drug, give supportive care and cooling, and use dantrolene and/or bromocriptine. It evolves over days; serotonin syndrome is faster and has clonus/hyperreflexia." },

/* ---- Dermatology ---- */
{ id:27, part:"B", subject:"Dermatology", topic:"Vesiculobullous disorders", difficulty:"moderate",
  question:"A 50-year-old has flaccid blisters that rupture easily leaving painful erosions, with painful oral ulcers. The Nikolsky sign is positive; histology shows intra-epidermal acantholysis and direct immunofluorescence shows a 'fishnet' pattern of intercellular IgG. The diagnosis is:",
  options:["Pemphigus vulgaris","Bullous pemphigoid","Dermatitis herpetiformis","Stevens–Johnson syndrome"],
  answer:0,
  explanation:"Flaccid bullae, prominent oral involvement, a positive Nikolsky sign, intra-epidermal acantholysis and intercellular ('fishnet') IgG against desmoglein define pemphigus vulgaris. Bullous pemphigoid has TENSE blisters, a negative Nikolsky sign, linear basement-membrane IgG/C3 and spares the mouth." },

/* ---- Orthopaedics ---- */
{ id:28, part:"B", subject:"Orthopaedics", topic:"Hand injuries", difficulty:"moderate",
  question:"A 22-year-old falls on an outstretched hand and has tenderness in the anatomical snuffbox. Initial wrist X-rays appear normal. The most appropriate management and the main complication to anticipate are:",
  options:["Thumb-spica cast and re-image in 10–14 days; risk of avascular necrosis","Reassure and mobilise immediately; no significant risk","Open reduction now; risk of compartment syndrome","Below-elbow cast for distal radius fracture; risk of malunion"],
  answer:0,
  explanation:"Snuffbox tenderness suggests a scaphoid fracture even when initial X-rays are normal. Immobilise in a thumb-spica cast and re-image (or do MRI) in 10–14 days. Because the scaphoid's blood supply runs distal-to-proximal, proximal-pole fractures risk avascular necrosis and non-union." }

];

/* expose for the engine */
if (typeof window !== "undefined") window.QUESTIONS = QUESTIONS;
