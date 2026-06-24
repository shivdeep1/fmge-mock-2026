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
  explanation:"Snuffbox tenderness suggests a scaphoid fracture even when initial X-rays are normal. Immobilise in a thumb-spica cast and re-image (or do MRI) in 10–14 days. Because the scaphoid's blood supply runs distal-to-proximal, proximal-pole fractures risk avascular necrosis and non-union." },

  { id:29, part:"A", subject:"Anatomy", topic:"Recurrent laryngeal nerve", difficulty:"moderate",
    question:"During a thyroidectomy the surgeon ligates the inferior thyroid artery and the patient subsequently has a hoarse voice. Which nerve, closely related to this artery, was most likely injured?",
    options:["External laryngeal nerve","Recurrent laryngeal nerve","Internal laryngeal nerve","Hypoglossal nerve"],
    answer:1,
    explanation:"The recurrent laryngeal nerve runs in the tracheo-oesophageal groove in close relation to the inferior thyroid artery and supplies all intrinsic laryngeal muscles except cricothyroid; injury causes hoarseness. The external laryngeal nerve accompanies the superior thyroid artery and supplies cricothyroid (voice fatigue)." },

  { id:30, part:"A", subject:"Anatomy", topic:"Median nerve / carpal tunnel", difficulty:"easy",
    question:"A typist complains of night-time tingling over the thumb, index, middle and lateral half of the ring finger, with wasting of the thenar eminence. The nerve involved and the site of compression are:",
    options:["Median nerve at the carpal tunnel","Ulnar nerve at Guyon's canal","Radial nerve in the spiral groove","Anterior interosseous nerve in the forearm"],
    answer:0,
    explanation:"Carpal tunnel syndrome is compression of the median nerve beneath the flexor retinaculum, giving sensory symptoms in the lateral 3½ digits and thenar wasting. Ulnar lesions affect the medial 1½ digits and hypothenar muscles." },

  { id:31, part:"A", subject:"Anatomy", topic:"Radial nerve", difficulty:"moderate",
    question:"A mid-shaft fracture of the humerus is complicated by inability to extend the wrist and fingers ('wrist drop') with sensory loss over the dorsum of the first web space. The injured nerve is the:",
    options:["Radial nerve","Ulnar nerve","Median nerve","Axillary nerve"],
    answer:0,
    explanation:"The radial nerve runs in the spiral (radial) groove of the humerus and is injured in mid-shaft fractures, producing wrist drop (loss of wrist/finger extensors) and sensory loss over the dorsal first web space. Triceps is usually spared as its branches arise proximally." },

  { id:32, part:"A", subject:"Anatomy", topic:"Axillary nerve", difficulty:"moderate",
    question:"After an anterior shoulder dislocation a young man cannot abduct his arm beyond the first few degrees and has lost sensation over the lateral aspect of the upper arm ('regimental badge' area). Which nerve is injured?",
    options:["Axillary nerve","Musculocutaneous nerve","Suprascapular nerve","Long thoracic nerve"],
    answer:0,
    explanation:"The axillary nerve winds around the surgical neck of the humerus and is injured in shoulder dislocation/surgical-neck fractures. It supplies deltoid (abduction 15–90°) and teres minor, and gives the upper lateral cutaneous nerve of the arm (regimental badge sensation)." },

  { id:33, part:"A", subject:"Anatomy", topic:"Femoral hernia", difficulty:"moderate",
    question:"A femoral hernia descends through the femoral ring into the femoral canal. The sharp, unyielding structure forming the medial boundary of the femoral ring — which may strangulate the hernia — is the:",
    options:["Lacunar ligament","Inguinal ligament","Femoral vein","Pectineus muscle"],
    answer:0,
    explanation:"The femoral ring is bounded medially by the sharp lacunar (Gimbernat's) ligament, anteriorly by the inguinal ligament, laterally by the femoral vein and posteriorly by the pectineal (Cooper's) ligament. The rigid lacunar ligament makes femoral hernias prone to strangulation." },

  { id:34, part:"A", subject:"Anatomy", topic:"Pharyngeal arches (embryology)", difficulty:"moderate",
    question:"The muscles of mastication develop from the mesoderm of which pharyngeal (branchial) arch, and are therefore supplied by which nerve?",
    options:["First arch — mandibular nerve (V3)","Second arch — facial nerve (VII)","Third arch — glossopharyngeal nerve (IX)","Fourth arch — vagus nerve (X)"],
    answer:0,
    explanation:"The first pharyngeal arch gives rise to the muscles of mastication (plus mylohyoid, anterior belly of digastric, tensor tympani and tensor veli palatini), all supplied by the mandibular division of the trigeminal nerve (V3). The second arch (VII) forms the muscles of facial expression." },

  { id:35, part:"A", subject:"Anatomy", topic:"Aortic arch derivatives", difficulty:"hard",
    question:"Persistence of a structure derived from the left sixth aortic arch produces a continuous machinery murmur in a neonate. The sixth aortic arch normally gives rise to the:",
    options:["Proximal pulmonary arteries and the ductus arteriosus","Arch of the aorta","Common carotid arteries","Maxillary artery"],
    answer:0,
    explanation:"The sixth aortic arch forms the proximal pulmonary arteries; on the left it also forms the ductus arteriosus. Failure of the ductus to close produces a patent ductus arteriosus with a continuous 'machinery' murmur. The third arch forms the common carotids; the left fourth forms the aortic arch." },

  { id:36, part:"A", subject:"Anatomy", topic:"Portosystemic anastomosis", difficulty:"moderate",
    question:"Oesophageal varices in a cirrhotic patient form at a site of porto-systemic anastomosis between the left gastric (portal) vein and which systemic veins?",
    options:["Oesophageal veins draining to the azygos system","Superior rectal veins","Paraumbilical veins","Left renal vein"],
    answer:0,
    explanation:"At the lower oesophagus the left gastric (portal) vein anastomoses with oesophageal veins that drain into the azygos system (systemic). Portal hypertension engorges these, producing varices. Other sites: rectum (superior vs middle/inferior rectal) and umbilicus (caput medusae)." },

  { id:37, part:"A", subject:"Anatomy", topic:"Thoracic duct", difficulty:"easy",
    question:"The thoracic duct, which drains lymph from most of the body, terminates by opening into the venous system at the junction of the:",
    options:["Left subclavian and left internal jugular veins","Right subclavian and right internal jugular veins","Superior vena cava and azygos vein","Left brachiocephalic and superior vena cava"],
    answer:0,
    explanation:"The thoracic duct ascends through the posterior mediastinum and drains into the junction of the left subclavian and left internal jugular veins (the left venous angle). The right lymphatic duct drains the right head, neck, thorax and upper limb into the right venous angle." },

  { id:38, part:"A", subject:"Anatomy", topic:"Diaphragm openings", difficulty:"moderate",
    question:"Which structure passes through the caval opening of the diaphragm at the level of the eighth thoracic vertebra (T8)?",
    options:["Inferior vena cava (with the right phrenic nerve)","Oesophagus and vagal trunks","Aorta and thoracic duct","Azygos vein"],
    answer:0,
    explanation:"The diaphragmatic apertures: T8 caval opening transmits the IVC and the right phrenic nerve; T10 oesophageal opening transmits the oesophagus with the vagi; T12 aortic hiatus transmits the aorta, thoracic duct and azygos vein (behind the diaphragm). Mnemonic: vena cava–8, oesophagus–10, aorta–12." },

  { id:39, part:"A", subject:"Anatomy", topic:"Inguinal canal", difficulty:"moderate",
    question:"The deep inguinal ring, through which an indirect inguinal hernia enters the canal, is an evagination of which layer and lies lateral to which vessels?",
    options:["Transversalis fascia; lateral to the inferior epigastric vessels","External oblique aponeurosis; medial to the inferior epigastric vessels","Internal oblique; lateral to the superior epigastric vessels","Conjoint tendon; medial to the femoral vessels"],
    answer:0,
    explanation:"The deep inguinal ring is a defect in the transversalis fascia lying lateral to the inferior epigastric vessels — hence an indirect hernia (through the deep ring) is lateral to these vessels, whereas a direct hernia bulges medial to them through Hesselbach's triangle." },

  { id:40, part:"A", subject:"Anatomy", topic:"Common peroneal nerve", difficulty:"moderate",
    question:"A fracture at the neck of the fibula results in foot drop with loss of sensation over the dorsum of the foot. The nerve injured winds around the fibular neck and is the:",
    options:["Common peroneal (fibular) nerve","Tibial nerve","Sural nerve","Femoral nerve"],
    answer:0,
    explanation:"The common peroneal nerve winds superficially around the neck of the fibula, making it vulnerable to fracture or a tight cast. Injury paralyses the dorsiflexors and evertors (foot drop, high-stepping gait) with sensory loss over the dorsum of the foot and lateral leg." },

  { id:41, part:"A", subject:"Anatomy", topic:"Cardiac blood supply", difficulty:"easy",
    question:"In the majority of individuals (right-dominant circulation), the sino-atrial (SA) node is supplied by a branch of which artery?",
    options:["Right coronary artery","Left anterior descending artery","Left circumflex artery","Left main coronary artery"],
    answer:0,
    explanation:"In about 60% of people the SA nodal artery arises from the right coronary artery (the AV node is supplied by the RCA in right-dominant hearts via the posterior descending artery). This is why inferior (RCA) infarcts often cause bradyarrhythmias and heart block." },

  { id:42, part:"A", subject:"Anatomy", topic:"Histology of epithelium", difficulty:"easy",
    question:"The urinary bladder mucosa, which must stretch as the bladder fills, is lined by which type of epithelium?",
    options:["Transitional epithelium (urothelium)","Stratified squamous epithelium","Simple columnar epithelium","Pseudostratified ciliated columnar epithelium"],
    answer:0,
    explanation:"The urinary tract from the renal calyces to the proximal urethra is lined by transitional epithelium (urothelium), whose dome-shaped 'umbrella' cells flatten as the bladder distends, allowing volume change while remaining impermeable to urine." },

  { id:43, part:"A", subject:"Anatomy", topic:"Meckel's diverticulum (embryology)", difficulty:"moderate",
    question:"A 2-year-old presents with painless rectal bleeding. A technetium-99m pertechnetate scan is positive. The most likely lesion, a remnant of the vitello-intestinal duct, is located approximately how far from the ileocaecal valve?",
    options:["About 60 cm (2 feet) proximal, on the antimesenteric border","At the ileocaecal junction","In the ascending colon","About 5 cm from the duodeno-jejunal flexure"],
    answer:0,
    explanation:"Meckel's diverticulum follows the 'rule of 2s': ~2% of people, ~2 feet (≈60 cm) proximal to the ileocaecal valve on the antimesenteric border, ~2 inches long, often with 2 ectopic tissue types (gastric/pancreatic). Ectopic gastric mucosa causes bleeding and is detected by the Meckel (pertechnetate) scan." },

  { id:44, part:"A", subject:"Physiology", topic:"Cardiac cycle / heart sounds", difficulty:"easy",
    question:"The second heart sound (S2) heard on auscultation is produced by:",
    options:["Closure of the aortic and pulmonary (semilunar) valves","Closure of the mitral and tricuspid valves","Opening of the semilunar valves","Atrial systole"],
    answer:0,
    explanation:"S2 marks the end of ventricular systole and is produced by closure of the aortic and pulmonary valves. S1 is due to closure of the atrioventricular (mitral and tricuspid) valves at the start of systole. Physiological splitting of S2 widens on inspiration." },

  { id:45, part:"A", subject:"Physiology", topic:"Renal — GFR measurement", difficulty:"moderate",
    question:"Which substance gives the most accurate measurement of glomerular filtration rate because it is freely filtered and neither reabsorbed nor secreted by the tubules?",
    options:["Inulin","Glucose","Para-aminohippuric acid","Sodium"],
    answer:0,
    explanation:"Inulin is the gold standard for measuring GFR as it is freely filtered and neither reabsorbed nor secreted. Creatinine clearance is a convenient clinical estimate but slightly overestimates GFR (some tubular secretion). PAH clearance estimates renal plasma flow, not GFR." },

  { id:46, part:"A", subject:"Physiology", topic:"Renal — plasma flow", difficulty:"moderate",
    question:"The clearance of para-aminohippuric acid (PAH), which is almost completely cleared from the plasma in a single pass, is used to estimate:",
    options:["Effective renal plasma flow","Glomerular filtration rate","Free water clearance","Filtration fraction directly"],
    answer:0,
    explanation:"PAH is filtered and actively secreted so that nearly all PAH presented to the kidney is removed in one pass; its clearance therefore estimates effective renal plasma flow (ERPF). Filtration fraction = GFR ÷ renal plasma flow (normally ~0.2)." },

  { id:47, part:"A", subject:"Physiology", topic:"Types of hypoxia", difficulty:"moderate",
    question:"A victim of a house fire has a normal arterial oxygen tension (PaO₂) but a markedly reduced oxygen-carrying capacity due to carbon monoxide. This represents which type of hypoxia?",
    options:["Anaemic (haemic) hypoxia","Hypoxic hypoxia","Stagnant hypoxia","Histotoxic hypoxia"],
    answer:0,
    explanation:"Carbon monoxide binds haemoglobin with ~240× the affinity of oxygen, lowering oxygen-carrying capacity while PaO₂ stays normal — anaemic hypoxia. Hypoxic hypoxia has low PaO₂; stagnant hypoxia has poor flow; histotoxic hypoxia (e.g., cyanide) is failure of tissue oxygen utilisation." },

  { id:48, part:"A", subject:"Physiology", topic:"Histotoxic hypoxia", difficulty:"moderate",
    question:"Cyanide poisoning produces hypoxia despite normal arterial oxygen content because it inhibits cytochrome c oxidase. This is classified as:",
    options:["Histotoxic hypoxia","Anaemic hypoxia","Hypoxic hypoxia","Stagnant hypoxia"],
    answer:0,
    explanation:"Cyanide blocks complex IV (cytochrome c oxidase) of the electron transport chain, so cells cannot use oxygen — histotoxic hypoxia. Venous oxygen content is high (tissues can't extract O₂). Treatment includes amyl/sodium nitrite (induces methaemoglobin) and sodium thiosulphate or hydroxocobalamin." },

  { id:49, part:"A", subject:"Physiology", topic:"Glucose transporters", difficulty:"moderate",
    question:"Insulin lowers blood glucose mainly by stimulating glucose uptake into skeletal muscle and adipose tissue through the recruitment of which transporter to the cell membrane?",
    options:["GLUT4","GLUT2","GLUT1","SGLT1"],
    answer:0,
    explanation:"GLUT4 is the insulin-responsive glucose transporter in skeletal/cardiac muscle and adipocytes; insulin signalling moves GLUT4 vesicles to the membrane. GLUT2 (liver, β-cells) and GLUT1 (RBC, brain) are insulin-independent; SGLT1 is a sodium-coupled intestinal/renal cotransporter." },

  { id:50, part:"A", subject:"Physiology", topic:"Glucose sensing", difficulty:"hard",
    question:"Glucose enters the pancreatic β-cell and the hepatocyte through a high-capacity, insulin-independent transporter that allows intracellular glucose to equilibrate with blood levels. This transporter is:",
    options:["GLUT2","GLUT4","GLUT1","GLUT3"],
    answer:0,
    explanation:"GLUT2 is a high-Km, insulin-independent transporter in β-cells, hepatocytes, the basolateral intestine and renal tubule. In the β-cell it lets glucose enter in proportion to blood levels, coupling glucose sensing to insulin secretion. GLUT3 is the high-affinity neuronal transporter." },

  { id:51, part:"A", subject:"Physiology", topic:"Spinal sensory tracts", difficulty:"easy",
    question:"Pain and temperature sensations from the limbs are carried to the brain mainly by which ascending spinal cord pathway?",
    options:["Lateral spinothalamic tract","Dorsal column–medial lemniscus pathway","Lateral corticospinal tract","Dorsal spinocerebellar tract"],
    answer:0,
    explanation:"Pain and temperature fibres synapse in the dorsal horn, cross within a few segments and ascend in the contralateral lateral spinothalamic tract. The dorsal columns carry fine touch, vibration and proprioception; the corticospinal tract is motor." },

  { id:52, part:"A", subject:"Physiology", topic:"Dorsal columns", difficulty:"moderate",
    question:"Fine touch, vibration and conscious proprioception are conveyed in the spinal cord by the dorsal column–medial lemniscus system, which first crosses the midline at the:",
    options:["Medulla (as the internal arcuate fibres / sensory decussation)","Spinal cord segment of entry","Midbrain","Thalamus"],
    answer:0,
    explanation:"Dorsal column fibres ascend ipsilaterally to the gracile and cuneate nuclei in the medulla, where second-order neurons cross as the internal arcuate fibres (sensory decussation) to form the medial lemniscus. This explains ipsilateral loss below a cord hemisection (Brown-Séquard)." },

  { id:53, part:"A", subject:"Physiology", topic:"Skeletal muscle contraction", difficulty:"moderate",
    question:"According to the sliding-filament theory, during skeletal muscle contraction which parts of the sarcomere shorten?",
    options:["The I band and the H zone","The A band","The thick filaments themselves","The thin filaments themselves"],
    answer:0,
    explanation:"During contraction the thin filaments slide over the thick filaments, so the I band and H zone narrow and the Z lines approach each other, while the A band (length of the thick filaments) stays constant. The filaments themselves do not shorten." },

  { id:54, part:"A", subject:"Physiology", topic:"Cardiac action potential", difficulty:"hard",
    question:"The prolonged plateau (phase 2) of the ventricular myocyte action potential, which underlies the long refractory period of cardiac muscle, results mainly from:",
    options:["Calcium influx through L-type channels balancing potassium efflux","A large sodium influx","Potassium efflux alone","Chloride influx"],
    answer:0,
    explanation:"In phase 2 the inward Ca²⁺ current through L-type ('long-lasting') calcium channels balances the outward K⁺ current, maintaining the plateau. This sustained depolarisation gives a long refractory period that prevents tetany and triggers calcium-induced calcium release for contraction." },

  { id:55, part:"A", subject:"Physiology", topic:"Nerve conduction", difficulty:"easy",
    question:"Saltatory conduction, which greatly increases the velocity of impulse transmission in myelinated nerves, occurs because the action potential regenerates at the:",
    options:["Nodes of Ranvier","Synaptic terminals","Motor end plates","Dendritic spines"],
    answer:0,
    explanation:"Myelin insulates the internodal axon, so depolarisation 'jumps' from one node of Ranvier to the next, where voltage-gated sodium channels are concentrated. This saltatory conduction is faster and more energy-efficient than continuous conduction in unmyelinated fibres." },

  { id:56, part:"A", subject:"Physiology", topic:"Gastric secretion", difficulty:"moderate",
    question:"Intrinsic factor, which is essential for the absorption of vitamin B₁₂ in the terminal ileum, is secreted by which gastric cells?",
    options:["Parietal (oxyntic) cells","Chief cells","G cells","Mucous neck cells"],
    answer:0,
    explanation:"Parietal cells secrete both hydrochloric acid and intrinsic factor. Loss of parietal cells (autoimmune atrophic gastritis) causes intrinsic-factor deficiency and pernicious anaemia. Chief cells secrete pepsinogen; G cells (antrum) secrete gastrin." },

  { id:57, part:"A", subject:"Physiology", topic:"Urine concentration", difficulty:"moderate",
    question:"The ability of the kidney to produce concentrated urine depends on the medullary osmotic gradient generated by the counter-current multiplier located in the:",
    options:["Loop of Henle","Proximal convoluted tubule","Glomerulus","Cortical collecting duct"],
    answer:0,
    explanation:"The loop of Henle acts as a counter-current multiplier: the thick ascending limb actively pumps out NaCl (but is water-impermeable), building a hypertonic medullary interstitium. ADH then makes the collecting ducts water-permeable, allowing water to be reabsorbed and urine to be concentrated." },

  { id:58, part:"A", subject:"Physiology", topic:"CO₂ transport", difficulty:"moderate",
    question:"The majority of carbon dioxide produced by the tissues is transported in venous blood in which form?",
    options:["As bicarbonate ions in plasma","Dissolved as CO₂ in plasma","Bound to haemoglobin as carbaminohaemoglobin","As carbonic acid"],
    answer:0,
    explanation:"About 70% of CO₂ is carried as bicarbonate (formed in red cells by carbonic anhydrase, then exchanged for chloride — the chloride shift). Around 23% is carbaminohaemoglobin and ~7% is dissolved CO₂. In contrast, most oxygen is carried bound to haemoglobin." },

  { id:59, part:"A", subject:"Biochemistry", topic:"Glycolysis regulation", difficulty:"moderate",
    question:"The most important rate-limiting (committed) step of glycolysis, allosterically activated by AMP and fructose-2,6-bisphosphate, is catalysed by:",
    options:["Phosphofructokinase-1","Hexokinase","Pyruvate kinase","Aldolase"],
    answer:0,
    explanation:"Phosphofructokinase-1 (PFK-1) catalyses the committed, rate-limiting step (fructose-6-phosphate → fructose-1,6-bisphosphate). It is activated by AMP and fructose-2,6-bisphosphate and inhibited by ATP and citrate, integrating glycolysis with cellular energy status." },

  { id:60, part:"A", subject:"Biochemistry", topic:"Glycogen storage disease", difficulty:"hard",
    question:"An infant has a protruding abdomen from massive hepatomegaly, severe fasting hypoglycaemia, lactic acidosis, hyperuricaemia and hyperlipidaemia. The deficient enzyme is glucose-6-phosphatase. The diagnosis is:",
    options:["Von Gierke disease (type I)","Pompe disease (type II)","McArdle disease (type V)","Cori disease (type III)"],
    answer:0,
    explanation:"Von Gierke disease (type I) is glucose-6-phosphatase deficiency: the liver cannot release free glucose from glycogenolysis or gluconeogenesis, causing severe fasting hypoglycaemia with lactic acidosis, hyperuricaemia and hyperlipidaemia. Pompe (acid maltase) affects the heart; McArdle affects muscle." },

  { id:61, part:"A", subject:"Biochemistry", topic:"Glycogen storage disease", difficulty:"hard",
    question:"A young adult develops painful muscle cramps and myoglobinuria after vigorous exercise but improves if he slows down briefly (the 'second-wind' phenomenon). Muscle biopsy shows deficiency of myophosphorylase. The diagnosis is:",
    options:["McArdle disease (type V)","Von Gierke disease (type I)","Pompe disease (type II)","Tay–Sachs disease"],
    answer:0,
    explanation:"McArdle disease (type V) is deficiency of muscle glycogen phosphorylase (myophosphorylase), so muscle cannot mobilise glycogen during exercise — causing cramps, fatigue and myoglobinuria (rhabdomyolysis). Blood glucose is normal (liver enzyme is unaffected)." },

  { id:62, part:"A", subject:"Biochemistry", topic:"Phenylketonuria", difficulty:"moderate",
    question:"A neonate detected on newborn screening has a 'musty/mousy' body odour, fair skin and hair, and risk of intellectual disability if untreated. The condition is due to deficient phenylalanine hydroxylase. In the diet, which amino acid becomes 'conditionally essential' and must be supplied?",
    options:["Tyrosine","Phenylalanine","Methionine","Leucine"],
    answer:0,
    explanation:"In phenylketonuria, phenylalanine cannot be converted to tyrosine, so phenylalanine accumulates (musty odour, neurotoxicity) and tyrosine becomes essential — diet must restrict phenylalanine while supplementing tyrosine. Tyrosine is also needed for melanin (hence fair skin/hair)." },

  { id:63, part:"A", subject:"Biochemistry", topic:"Alkaptonuria", difficulty:"moderate",
    question:"A patient's urine turns black on standing, and over years he develops dark pigmentation of cartilage (ochronosis) and arthritis. The deficient enzyme acts in the degradation of which amino acid?",
    options:["Tyrosine (homogentisate oxidase deficiency)","Tryptophan","Histidine","Glycine"],
    answer:0,
    explanation:"Alkaptonuria is deficiency of homogentisate oxidase in the tyrosine degradation pathway, causing homogentisic acid to accumulate. It oxidises and polymerises to a dark pigment, blackening the urine and depositing in connective tissue (ochronosis) with arthritis. It is largely benign compared with PKU." },

  { id:64, part:"A", subject:"Biochemistry", topic:"Vitamin C / collagen", difficulty:"moderate",
    question:"A man living on a diet devoid of fresh fruit and vegetables develops bleeding gums, perifollicular haemorrhages and poor wound healing. The vitamin deficiency impairs collagen synthesis because the vitamin is a cofactor for:",
    options:["Prolyl and lysyl hydroxylase","Lysyl oxidase cross-linking","Glycosylation of collagen","Signal peptidase cleavage"],
    answer:0,
    explanation:"Vitamin C (ascorbate) is a cofactor for prolyl and lysyl hydroxylases, which hydroxylate proline and lysine residues to stabilise the collagen triple helix. Deficiency (scurvy) yields weak collagen — bleeding gums, perifollicular haemorrhage and impaired healing." },

  { id:65, part:"A", subject:"Biochemistry", topic:"Electron transport chain", difficulty:"easy",
    question:"In oxidative phosphorylation, the final electron acceptor of the electron transport chain, reduced to water at cytochrome c oxidase (complex IV), is:",
    options:["Molecular oxygen","NAD⁺","FAD","Cytochrome c"],
    answer:0,
    explanation:"Molecular oxygen is the terminal electron acceptor, accepting electrons at complex IV and combining with protons to form water. Blocking this step (e.g., cyanide, carbon monoxide at complex IV) halts ATP production despite adequate oxygen delivery (histotoxic hypoxia)." },

  { id:66, part:"A", subject:"Biochemistry", topic:"Enzyme kinetics", difficulty:"moderate",
    question:"A reversible competitive inhibitor is added to an enzyme-catalysed reaction. Compared with the uninhibited reaction, the kinetic changes are:",
    options:["Increased apparent Km with unchanged Vmax","Decreased Vmax with unchanged Km","Decreased both Km and Vmax","Increased Vmax with unchanged Km"],
    answer:0,
    explanation:"A competitive inhibitor binds the active site and can be overcome by more substrate, so it raises the apparent Km (lower apparent affinity) but leaves Vmax unchanged. A non-competitive inhibitor lowers Vmax with an unchanged Km." },

  { id:67, part:"A", subject:"Biochemistry", topic:"Purine salvage (Lesch–Nyhan)", difficulty:"hard",
    question:"A boy shows compulsive self-mutilation (biting lips and fingers), choreoathetosis, intellectual disability and hyperuricaemia. The deficient enzyme of the purine salvage pathway is:",
    options:["Hypoxanthine-guanine phosphoribosyltransferase (HGPRT)","Adenosine deaminase","Xanthine oxidase","Glucose-6-phosphate dehydrogenase"],
    answer:0,
    explanation:"Lesch–Nyhan syndrome is X-linked HGPRT deficiency. Loss of purine salvage drives excess uric acid (gout, urate stones) and causes the neurological features with characteristic self-mutilation. Adenosine deaminase deficiency instead causes severe combined immunodeficiency." },

  { id:68, part:"A", subject:"Biochemistry", topic:"Fatty acid oxidation", difficulty:"moderate",
    question:"Long-chain fatty acyl groups are transported across the inner mitochondrial membrane for β-oxidation by which carrier system, the first step of which is the rate-limiting enzyme inhibited by malonyl-CoA?",
    options:["The carnitine shuttle (carnitine palmitoyltransferase-1)","The malate–aspartate shuttle","The citrate shuttle","The glycerophosphate shuttle"],
    answer:0,
    explanation:"Long-chain fatty acids enter the mitochondrial matrix via the carnitine shuttle; carnitine palmitoyltransferase-1 (CPT-1) is rate-limiting and is inhibited by malonyl-CoA (high in the fed state), preventing simultaneous fatty acid synthesis and oxidation. The other shuttles move reducing equivalents or citrate." },

  { id:69, part:"A", subject:"Biochemistry", topic:"Ketone body metabolism", difficulty:"moderate",
    question:"During prolonged starvation, the brain reduces its dependence on glucose by oxidising which liver-derived fuel?",
    options:["Ketone bodies (β-hydroxybutyrate and acetoacetate)","Free fatty acids","Lactate","Glycerol"],
    answer:0,
    explanation:"In prolonged fasting the liver converts fatty-acid-derived acetyl-CoA into ketone bodies (β-hydroxybutyrate, acetoacetate), which cross the blood–brain barrier and become a major brain fuel, sparing glucose and muscle protein. The brain cannot use free fatty acids directly (they don't cross the barrier well)." },

  { id:70, part:"A", subject:"Biochemistry", topic:"Homocystinuria", difficulty:"hard",
    question:"A tall, thin teenager with long limbs has downward dislocation of the ocular lens, intellectual disability and a tendency to thromboembolism. Deficiency of cystathionine β-synthase is found. Which vitamin, a cofactor for this enzyme, may benefit responsive patients?",
    options:["Pyridoxine (vitamin B₆)","Thiamine (B₁)","Niacin (B₃)","Riboflavin (B₂)"],
    answer:0,
    explanation:"Homocystinuria (cystathionine β-synthase deficiency) causes homocysteine accumulation with thromboembolism, intellectual disability and DOWNWARD (inferonasal) lens dislocation — unlike Marfan, where the lens dislocates upward. Pyridoxine (B₆) is the cofactor and a subset of patients are B₆-responsive." },

  { id:71, part:"A", subject:"Biochemistry", topic:"DNA replication", difficulty:"moderate",
    question:"During DNA replication, the enzyme that relieves the torsional strain (supercoiling) generated ahead of the advancing replication fork by transiently cutting and resealing the DNA strands is:",
    options:["Topoisomerase (DNA gyrase)","Helicase","Primase","DNA ligase"],
    answer:0,
    explanation:"Topoisomerases (e.g., bacterial DNA gyrase) cut one or both strands to relax supercoils ahead of the fork, then reseal them. Helicase unwinds the duplex, primase lays down RNA primers, and ligase joins Okazaki fragments. Fluoroquinolones inhibit bacterial gyrase/topoisomerase IV." },

  { id:72, part:"A", subject:"Biochemistry", topic:"Haem synthesis / lead", difficulty:"moderate",
    question:"A child with pica develops abdominal colic, a microcytic anaemia with basophilic stippling of red cells, and a peripheral neuropathy. The toxin inhibits δ-aminolaevulinic acid dehydratase and ferrochelatase. The most likely cause is:",
    options:["Lead poisoning","Iron deficiency","Vitamin B₁₂ deficiency","Copper deficiency"],
    answer:0,
    explanation:"Lead inhibits ALA dehydratase and ferrochelatase in haem synthesis, causing accumulation of ALA and protoporphyrin and a microcytic anaemia with coarse basophilic stippling. Features include abdominal colic, neuropathy and, in children, encephalopathy. Treat with chelation (e.g., DMSA, EDTA)." },

  { id:73, part:"A", subject:"Pathology", topic:"Necrosis — caseous", difficulty:"easy",
    question:"A lymph node biopsy from a patient with tuberculosis shows a soft, cheese-like centre surrounded by epithelioid granulomas. This pattern of cell death is:",
    options:["Caseous necrosis","Coagulative necrosis","Liquefactive necrosis","Fat necrosis"],
    answer:0,
    explanation:"Caseous ('cheese-like') necrosis is characteristic of tuberculosis and some fungal infections; the centre of the granuloma loses all architecture. Coagulative necrosis preserves outlines (ischaemic infarcts), liquefactive occurs in brain/abscesses, and fat necrosis in pancreatitis." },

  { id:74, part:"A", subject:"Pathology", topic:"Necrosis — liquefactive", difficulty:"easy",
    question:"Which type of necrosis characteristically occurs in cerebral infarcts and in bacterial abscesses, producing a soft, fluid-filled cavity?",
    options:["Liquefactive necrosis","Coagulative necrosis","Caseous necrosis","Gangrenous necrosis"],
    answer:0,
    explanation:"Liquefactive necrosis results from enzymatic digestion of dead tissue — typical of the brain (which lacks supporting stroma) and of pyogenic (neutrophil-rich) infections, producing pus. Coagulative necrosis is the rule for infarcts elsewhere." },

  { id:75, part:"A", subject:"Pathology", topic:"Necrosis — coagulative", difficulty:"moderate",
    question:"In a myocardial infarction (outside the brain), the dead myocardium initially retains its cellular outlines as 'ghost cells' due to denaturation of structural proteins. This is:",
    options:["Coagulative necrosis","Liquefactive necrosis","Caseous necrosis","Fibrinoid necrosis"],
    answer:0,
    explanation:"Ischaemic necrosis in solid organs (heart, kidney, spleen) is coagulative: protein denaturation preserves the basic tissue architecture for a few days until leukocytes remove the debris. The brain is the exception, undergoing liquefactive necrosis." },

  { id:76, part:"A", subject:"Pathology", topic:"Apoptosis vs necrosis", difficulty:"moderate",
    question:"Which feature distinguishes apoptosis from necrosis?",
    options:["Cell shrinkage with an intact membrane and no inflammation","Cell swelling and rupture","Release of lysosomal enzymes into surrounding tissue","A surrounding acute inflammatory response"],
    answer:0,
    explanation:"Apoptosis is programmed, energy-dependent cell death with cell shrinkage, chromatin condensation, membrane blebbing and apoptotic bodies — the membrane stays intact, so there is NO inflammation. Necrosis shows cell swelling, membrane rupture and an inflammatory reaction." },

  { id:77, part:"A", subject:"Pathology", topic:"Granulomatous inflammation", difficulty:"moderate",
    question:"The epithelioid cells and multinucleated giant cells that form a granuloma are derived from which cell type?",
    options:["Macrophages","B lymphocytes","Neutrophils","Plasma cells"],
    answer:0,
    explanation:"A granuloma is a focus of chronic inflammation in which activated macrophages transform into epithelioid cells and may fuse into multinucleated giant cells (e.g., Langhans cells in TB). T-helper cells (releasing IFN-γ) drive this macrophage activation." },

  { id:78, part:"A", subject:"Pathology", topic:"Iron deficiency anaemia", difficulty:"moderate",
    question:"A menstruating woman has a microcytic hypochromic anaemia. Which iron-study profile confirms iron deficiency rather than anaemia of chronic disease?",
    options:["Low serum ferritin, high TIBC, low transferrin saturation","High serum ferritin, low TIBC","Normal ferritin, normal TIBC","High serum iron, low TIBC"],
    answer:0,
    explanation:"Iron deficiency: low ferritin (depleted stores — the most useful single test), raised TIBC/transferrin and low transferrin saturation. Anaemia of chronic disease shows low TIBC with normal or high ferritin (iron sequestered by hepcidin)." },

  { id:79, part:"A", subject:"Pathology", topic:"Megaloblastic anaemia", difficulty:"moderate",
    question:"A macrocytic anaemia with hypersegmented neutrophils on the blood film and a megaloblastic bone marrow results from impaired DNA synthesis due to deficiency of:",
    options:["Vitamin B₁₂ or folate","Iron","Vitamin B₆","Copper"],
    answer:0,
    explanation:"Vitamin B₁₂ or folate deficiency impairs DNA synthesis, producing megaloblastic erythropoiesis (large cells, nuclear–cytoplasmic asynchrony) and hypersegmented neutrophils. B₁₂ deficiency additionally causes subacute combined degeneration of the cord (neurological signs)." },

  { id:80, part:"A", subject:"Pathology", topic:"Sickle cell disease", difficulty:"moderate",
    question:"Sickle cell disease is caused by a point mutation in the β-globin gene that substitutes which amino acid for glutamic acid at the sixth position?",
    options:["Valine","Lysine","Histidine","Glycine"],
    answer:0,
    explanation:"In HbS, valine replaces glutamic acid at position 6 of the β-globin chain (a single point/missense mutation). Deoxygenated HbS polymerises, distorting red cells into sickles that cause vaso-occlusion and haemolysis. In HbC, lysine replaces the same glutamate." },

  { id:81, part:"A", subject:"Pathology", topic:"G6PD deficiency", difficulty:"moderate",
    question:"A boy develops acute haemolysis with dark urine after eating fava beans; the blood film shows 'bite cells' and Heinz bodies. The most likely X-linked enzyme deficiency is:",
    options:["Glucose-6-phosphate dehydrogenase","Pyruvate kinase","Hexokinase","Glutathione synthase"],
    answer:0,
    explanation:"G6PD deficiency reduces NADPH and glutathione, leaving red cells vulnerable to oxidative stress (fava beans, primaquine, sulfa drugs, infection). Oxidised haemoglobin precipitates as Heinz bodies, which the spleen removes leaving 'bite cells'. It is X-linked recessive." },

  { id:82, part:"A", subject:"Pathology", topic:"Acute myeloid leukaemia", difficulty:"moderate",
    question:"A bone marrow aspirate shows more than 20% myeloblasts, some containing pink rod-shaped cytoplasmic inclusions that are myeloperoxidase positive. These inclusions and the diagnosis are:",
    options:["Auer rods — acute myeloid leukaemia","Russell bodies — multiple myeloma","Döhle bodies — sepsis","Smudge cells — chronic lymphocytic leukaemia"],
    answer:0,
    explanation:"Auer rods are azurophilic, MPO-positive crystalline inclusions seen in myeloblasts, diagnostic of acute myeloid leukaemia (especially acute promyelocytic leukaemia, APML, which carries t(15;17) and risks DIC). ALL blasts are MPO-negative and lack Auer rods." },

  { id:83, part:"A", subject:"Pathology", topic:"Chronic myeloid leukaemia", difficulty:"moderate",
    question:"A 45-year-old has massive splenomegaly and a very high white cell count with the full spectrum of maturing granulocytes; the leukocyte alkaline phosphatase score is low. The characteristic cytogenetic abnormality is:",
    options:["t(9;22) BCR-ABL1 (Philadelphia chromosome)","t(8;14) MYC","t(15;17) PML-RARA","t(14;18) BCL2"],
    answer:0,
    explanation:"Chronic myeloid leukaemia is defined by the Philadelphia chromosome, t(9;22), creating the BCR-ABL1 fusion tyrosine kinase (target of imatinib). A low LAP score helps distinguish CML from a reactive leukemoid reaction (high LAP)." },

  { id:84, part:"A", subject:"Pathology", topic:"Multiple myeloma", difficulty:"moderate",
    question:"An elderly man has bone pain, anaemia, hypercalcaemia and renal impairment. X-rays show 'punched-out' lytic skull lesions, serum shows an M-band, and urine contains Bence-Jones protein. The diagnosis is:",
    options:["Multiple myeloma","Monoclonal gammopathy of uncertain significance","Chronic lymphocytic leukaemia","Osteoporosis"],
    answer:0,
    explanation:"Multiple myeloma is a malignant plasma-cell proliferation causing the 'CRAB' features (hyperCalcaemia, Renal failure, Anaemia, Bone lytic lesions), a monoclonal (M) spike, Bence-Jones (free light chain) proteinuria, rouleaux and marrow plasmacytosis." },

  { id:85, part:"A", subject:"Pathology", topic:"Hypersensitivity type I", difficulty:"easy",
    question:"Anaphylaxis, allergic rhinitis and atopic asthma are mediated by IgE bound to mast cells and basophils. This is which type of hypersensitivity reaction?",
    options:["Type I (immediate)","Type II (cytotoxic)","Type III (immune complex)","Type IV (delayed)"],
    answer:0,
    explanation:"Type I hypersensitivity is IgE-mediated: allergen cross-links IgE on sensitised mast cells, releasing histamine and other mediators within minutes. Examples include anaphylaxis, urticaria, atopic asthma and allergic rhinitis." },

  { id:86, part:"A", subject:"Pathology", topic:"Hypersensitivity type II", difficulty:"moderate",
    question:"Autoimmune haemolytic anaemia and Goodpasture syndrome, in which antibodies are directed against antigens on cell surfaces or basement membrane, are examples of which hypersensitivity?",
    options:["Type II (antibody-mediated cytotoxic)","Type I","Type III","Type IV"],
    answer:0,
    explanation:"Type II hypersensitivity involves IgG/IgM antibodies binding fixed cell-surface or matrix antigens, causing complement-mediated lysis, opsonisation or dysfunction. Examples: autoimmune haemolytic anaemia, Goodpasture, ITP, Rh haemolytic disease, myasthenia gravis." },

  { id:87, part:"A", subject:"Pathology", topic:"Hypersensitivity type III", difficulty:"moderate",
    question:"Serum sickness, post-streptococcal glomerulonephritis and the tissue damage of systemic lupus erythematosus are caused by deposition of antigen–antibody complexes. This is which type of hypersensitivity?",
    options:["Type III (immune complex)","Type I","Type II","Type IV"],
    answer:0,
    explanation:"Type III hypersensitivity is mediated by circulating antigen–antibody (immune) complexes that deposit in vessel walls and tissues, activating complement and recruiting neutrophils. Examples: serum sickness, SLE, post-streptococcal GN and the Arthus reaction." },

  { id:88, part:"A", subject:"Pathology", topic:"Hypersensitivity type IV", difficulty:"moderate",
    question:"The tuberculin (Mantoux) skin reaction and allergic contact dermatitis are mediated by sensitised T lymphocytes rather than antibody. This is which type of hypersensitivity?",
    options:["Type IV (delayed, cell-mediated)","Type I","Type II","Type III"],
    answer:0,
    explanation:"Type IV hypersensitivity is delayed (24–72 h) and T-cell mediated, independent of antibody. CD4⁺ T cells and macrophages drive the tuberculin reaction, contact dermatitis and granuloma formation; CD8⁺ cells mediate direct cytotoxicity (e.g., in transplant rejection)." },

  { id:89, part:"A", subject:"Pathology", topic:"SLE serology", difficulty:"moderate",
    question:"Which autoantibodies are the most specific for systemic lupus erythematosus?",
    options:["Anti-double-stranded DNA and anti-Smith antibodies","Antinuclear antibody (ANA)","Anti-histone antibody","Anti-centromere antibody"],
    answer:0,
    explanation:"Anti-dsDNA (which also correlates with lupus nephritis activity) and anti-Smith antibodies are highly specific for SLE. ANA is very sensitive but not specific. Anti-histone antibodies suggest drug-induced lupus; anti-centromere points to limited systemic sclerosis (CREST)." },

  { id:90, part:"A", subject:"Pathology", topic:"Amyloidosis", difficulty:"moderate",
    question:"Tissue suspected of containing amyloid is stained with Congo red. A positive result shows which finding under polarised light?",
    options:["Apple-green birefringence","Metachromatic purple colour","Blue-black granules","Strong autofluorescence only"],
    answer:0,
    explanation:"Amyloid stained with Congo red shows characteristic apple-green birefringence under polarised light, reflecting its β-pleated sheet structure. Amyloid is an extracellular fibrillar protein deposit (AL in myeloma, AA in chronic inflammation)." },

  { id:91, part:"A", subject:"Pathology", topic:"Atherosclerosis", difficulty:"easy",
    question:"The earliest grossly visible lesion of atherosclerosis, composed of lipid-laden foam cells in the intima and reversible at this stage, is the:",
    options:["Fatty streak","Fibrous (atheromatous) plaque","Complicated plaque with thrombus","Calcified nodule"],
    answer:0,
    explanation:"The fatty streak — intimal collections of lipid-filled macrophages (foam cells) — is the earliest lesion and can appear even in childhood. It may progress to a fibrous plaque (lipid core with a fibrous cap) and then a complicated plaque (rupture, thrombosis, calcification)." },

  { id:92, part:"A", subject:"Pathology", topic:"Myocardial infarction evolution", difficulty:"hard",
    question:"At which time after an acute myocardial infarction is the necrotic myocardium softest (yellow, with maximal neutrophil/macrophage activity), making myocardial free-wall rupture most likely?",
    options:["3–7 days","Within the first 4 hours","At 24 hours","After 6 weeks"],
    answer:0,
    explanation:"Around days 3–7 the infarct is at its softest as macrophages remove necrotic tissue before fibrous scar forms — the peak window for free-wall rupture, papillary muscle rupture and septal rupture. By ~2–8 weeks a tough collagenous scar has formed." },

  { id:93, part:"A", subject:"Pathology", topic:"Psammoma bodies", difficulty:"moderate",
    question:"Laminated, concentric calcified concretions known as psammoma bodies are most characteristically associated with which tumour?",
    options:["Papillary carcinoma of the thyroid","Follicular carcinoma of the thyroid","Hepatocellular carcinoma","Renal cell carcinoma"],
    answer:0,
    explanation:"Psammoma bodies (laminated calcospherites) are seen in papillary thyroid carcinoma, meningioma, serous papillary cystadenocarcinoma of the ovary and mesothelioma. Papillary thyroid carcinoma also shows 'Orphan Annie eye' nuclei and nuclear grooves." },

  { id:94, part:"A", subject:"Pathology", topic:"Tumour suppressor genes", difficulty:"moderate",
    question:"Which tumour suppressor gene, often called the 'guardian of the genome', is the most frequently mutated gene in human cancers and is lost germline in Li-Fraumeni syndrome?",
    options:["TP53 (p53)","RB1","APC","BRCA1"],
    answer:0,
    explanation:"TP53 (p53) arrests the cell cycle for DNA repair or triggers apoptosis after DNA damage; it is the most commonly mutated gene in human cancer. Germline loss causes Li-Fraumeni syndrome (multiple early cancers). RB1 underlies retinoblastoma; APC underlies familial adenomatous polyposis." },

  { id:95, part:"A", subject:"Pathology", topic:"Tumour spread", difficulty:"easy",
    question:"Carcinomas (epithelial malignancies) most characteristically spread first by which route, in contrast to sarcomas?",
    options:["Lymphatic spread","Haematogenous spread","Transcoelomic spread","Perineural spread"],
    answer:0,
    explanation:"Carcinomas typically metastasise first via lymphatics to regional nodes, whereas sarcomas (mesenchymal tumours) characteristically spread haematogenously (often to the lungs). Transcoelomic spread is typical of ovarian and gastric (Krukenberg) tumours." },

  /* >>> APPEND NEW QUESTIONS ABOVE THIS LINE (keep trailing comma on the object above) <<< */
];

/* expose for the engine */
if (typeof window !== "undefined") window.QUESTIONS = QUESTIONS;
