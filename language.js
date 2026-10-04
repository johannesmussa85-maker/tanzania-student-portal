(() => {
  const translations = {
    "Home":"Nyumbani","Dashboard":"Dashibodi","Study":"Masomo","Books":"Vitabu","Courses":"Kozi",
    "Career Hub":"Kituo cha Kazi","Tools":"Zana","Opportunities":"Fursa","Past Papers":"Mitihani ya Zamani",
    "Menu":"Menyu","Your journey.":"Safari yako.","Your knowledge.":"Maarifa yako.","Your future.":"Mustakabali wako.",
    "A welcoming home for Tanzania’s learners. Find study resources, prepare for exams, shape your career and take your next step with confidence.":"Karibu kwenye tovuti ya wanafunzi wa Tanzania. Pata nyenzo za kujifunzia, jiandae kwa mitihani, jenga taaluma yako na piga hatua inayofuata kwa kujiamini.",
    "✦ A LITTLE PROGRESS EVERY DAY":"✦ HATUA NDOGO KILA SIKU","Find resources":"Tafuta nyenzo","Popular: Past papers · Digital library · CV builder":"Maarufu: Mitihani ya zamani · Maktaba ya kidijitali · CV Builder",
    "Courses & Resources":"Kozi na Nyenzo","Books, videos & study guides":"Vitabu, video na miongozo ya masomo",
    "Digital Library":"Maktaba ya Kidijitali","Find useful books":"Pata vitabu muhimu","Exam practice":"Mazoezi ya mitihani",
    "Your student hub":"Kituo chako cha mwanafunzi","Student Tools":"Zana za Mwanafunzi","GPA & study planner":"GPA na mpangilio wa masomo",
    "Your course · Your future · Your resources":"Kozi yako · Mustakabali wako · Nyenzo zako","Find your field.":"Tafuta fani yako.","Build your future.":"Jenga mustakabali wako.",
    "Explore course guides ↓":"Chunguza miongozo ya kozi ↓","Check official directories ↗":"Angalia orodha rasmi ↗",
    "📚 Free learning resources":"📚 Nyenzo za kujifunzia bure","Open textbooks and legal reading links":"Vitabu huria na viungo halali vya kusoma",
    "🎬 Videos & documentaries":"🎬 Video na makala za kielimu","Learning media and visual explainers":"Video za masomo na maelezo ya kuona",
    "🇹🇿 Tanzania pathways":"🇹🇿 Njia za masomo Tanzania","Official university and TVET directories":"Orodha rasmi za vyuo vikuu na TVET",
    "All study pathways":"Njia zote za masomo","University / Degree":"Chuo kikuu / Shahada","College / Diploma":"Chuo / Diploma",
    "Technical / Vocational":"Ufundi / Stadi","Multiple pathways":"Njia mbalimbali","All fields":"Fani zote",
    "Engineering & Technology":"Uhandisi na Teknolojia","Health & Life Sciences":"Afya na Sayansi ya Maisha",
    "Business & Social Sciences":"Biashara na Sayansi za Jamii","Natural Resources":"Maliasili",
    "Education & Creative Arts":"Elimu na Sanaa Bunifu","Built Environment & Services":"Ujenzi na Huduma",
    "Engineering":"Uhandisi","Health":"Afya","Business":"Biashara","ICT & Computing":"TEHAMA na Kompyuta",
    "Agriculture":"Kilimo","Mining & Geology":"Madini na Jiolojia","Search course guides":"Tafuta miongozo ya kozi",
    "Choose a resource link on each card":"Chagua kiungo cha nyenzo kwenye kila kadi",
    "Secondary Exam Practice":"Mazoezi ya Mitihani ya Sekondari",
    "Browse national examination resources by Form 2, Form 4 and Form 6, filtered by subject and year.":"Vinjari nyenzo za mitihani ya kitaifa ya Kidato cha Pili, Nne na Sita kwa somo na mwaka.",
    "Important:":"Muhimu:","All years":"Miaka yote","All subjects":"Masomo yote","Form 2 resources":"Nyenzo za Kidato cha Pili",
    "Form 2 · FTNA":"Kidato cha Pili · FTNA","Form 4 · CSEE":"Kidato cha Nne · CSEE","Form 6 · ACSEE":"Kidato cha Sita · ACSEE",
    "Official examination guidance":"Mwongozo rasmi wa mitihani","Search subject or resource...":"Tafuta somo au nyenzo...",
    "Career & Admissions Hub":"Kituo cha Kazi na Udahili","One place to prepare your CV, explore work opportunities and find official college or university admission routes in Tanzania.":"Sehemu moja ya kuandaa CV, kutafuta fursa za kazi na kupata njia rasmi za udahili wa vyuo Tanzania.",
    "Search categories: jobs, university, diploma, CV…":"Tafuta: kazi, chuo kikuu, diploma, CV…","CV Builder":"Tengeneza CV",
    "Work & Internships":"Kazi na Mafunzo kwa Vitendo","Universities":"Vyuo Vikuu","Colleges & Training":"Vyuo na Mafunzo",
    "Build your professional CV":"Tengeneza CV yako ya kitaalamu","Create a clean CV, preview it and save it as PDF.":"Tengeneza CV nzuri, ikague na ihifadhi kama PDF.",
    "Full name":"Jina kamili","Email":"Barua pepe","Phone":"Simu","Education":"Elimu","Skills":"Ujuzi","Experience":"Uzoefu",
    "Profile / Career objective":"Wasifu / Lengo la kazi","Generate CV":"Tengeneza CV","Work, jobs & internships":"Kazi na nafasi za mafunzo",
    "Go to trusted recruitment portals to review requirements and apply.":"Tembelea tovuti za ajira zinazoaminika kusoma masharti na kutuma maombi.",
    "Registered Universities in Tanzania":"Vyuo Vikuu Vilivyosajiliwa Tanzania","University Application Guidance":"Mwongozo wa Maombi ya Chuo Kikuu",
    "Colleges, diplomas & certificates":"Vyuo, Diploma na Cheti","Before you apply":"Kabla ya kutuma ombi",
    "Open Ajira Portal ↗":"Fungua Ajira Portal ↗","View Announcements ↗":"Tazama Matangazo ↗","Create a CV ↑":"Tengeneza CV ↑",
    "Registered Colleges & Training Institutions":"Vyuo na Taasisi za Mafunzo Zilizosajiliwa",
    "Find your field. Build your future.":"Tafuta fani yako. Jenga mustakabali wako.",
    "Search books, exam papers, career tools…":"Tafuta vitabu, mitihani, zana za kazi…",
    "Search for a book...":"Tafuta kitabu...","Search by author...":"Tafuta kwa mwandishi...","Publication year...":"Mwaka wa kuchapishwa...",
    "Search":"Tafuta","All Books":"Vitabu Vyote","Hydrometallurgy":"Hidrometallurgia","Comminution":"Usagaji wa Madini",
    "Flotation":"Ueleaji wa Madini","Gravity Separation":"Utenganishaji kwa Mvuto","Magnetic Separation":"Utenganishaji wa Sumaku",
    "Dewatering":"Uondoaji wa Maji","Ore Characterization":"Uchambuzi wa Sifa za Ore","Sort Books:":"Panga Vitabu:",
    "Default":"Chaguomsingi","Title A–Z":"Jina A–Z","Newest First":"Vipya Kwanza","Oldest First":"Vya Zamani Kwanza",
    "Previous":"Iliyotangulia","Next":"Inayofuata","← Back to Home":"← Rudi Nyumbani","← Home":"← Nyumbani",
    "University & College Portal":"Tovuti ya Vyuo Vikuu na Vyuo","Welcome to Tanzania Student Portal.":"Karibu Tanzania Student Portal.",
    "Past Papers, Study Materials and College Notices.":"Mitihani ya Zamani, Nyenzo za Masomo na Matangazo ya Vyuo.",
    "Popular Courses":"Kozi Maarufu","University & College Past Papers":"Mitihani ya Vyuo Vikuu na Vyuo",
    "Past examination papers will be organized by course and institution.":"Mitihani ya zamani itapangwa kwa kozi na taasisi.",
    "Past papers coming soon.":"Mitihani ya zamani itaongezwa hivi karibuni.","College & University Notices":"Matangazo ya Vyuo Vikuu na Vyuo",
    "Examination timetables":"Ratiba za mitihani","Registration announcements":"Matangazo ya usajili",
    "Scholarships and internships":"Scholarship na mafunzo kwa vitendo","Class timetable changes":"Mabadiliko ya ratiba za darasa",
    "Other official college announcements":"Matangazo mengine rasmi ya vyuo","Notice Board:":"Ubao wa Matangazo:",
    "Official notices will be added here.":"Matangazo rasmi yataongezwa hapa.",
"University & College Portal":"University & College Portal",
    "Universities, colleges & admission pathways":"Vyuo vikuu, vyuo na njia za udahili",
    "Higher education guide":"Mwongozo wa elimu ya juu",
    "Choose your pathway":"Chagua njia yako ya masomo",
    "Application checklist":"Orodha ya kujiandaa kuomba",
    "Helpful student links":"Viungo muhimu kwa wanafunzi",
    "Verify before applying":"Thibitisha kabla ya kutuma maombi",
    "Form 5 & Form 6 Study Hub":"Kituo cha masomo cha Kidato cha Tano na Sita",
    "Study smarter for ACSEE":"Jiandae vizuri zaidi kwa ACSEE",
    "Form 5 study focus":"Mambo ya kuzingatia Kidato cha Tano",
    "Form 6 exam readiness":"Maandalizi ya mtihani wa Kidato cha Sita",
    "A simple weekly revision plan":"Mpango rahisi wa marudio ya kila wiki",
    "Word-compatible document":"Hati inayofunguka kwenye Word",
    "Search library":"Tafuta maktaba",
    "Check catalogue":"Angalia taarifa za katalogi"
  };
  const attrMap = {
    "Search books, exam papers, career tools…":"Tafuta vitabu, mitihani, zana za kazi…",
    "Search course or topic (e.g. mining, nursing, ICT)...":"Tafuta kozi au mada (mf. madini, uuguzi, TEHAMA)...",
    "Search course guides":"Tafuta miongozo ya kozi",
    "Search subject or resource...":"Tafuta somo au nyenzo...",
    "Search all career and admissions categories":"Tafuta makundi ya kazi na udahili",
    "Search for a book...":"Tafuta kitabu...","Search by author...":"Tafuta kwa mwandishi...",
    "Example: Diploma in Mining Engineering — Jema Institute of Technology":"Mfano: Diploma ya Mining Engineering — Jema Institute of Technology",
    "Example: Communication, teamwork, computer skills":"Mfano: Mawasiliano, ushirikiano, ujuzi wa kompyuta"
  };
  const nodes = [];
  function collect(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      if (!n.parentElement || /^(SCRIPT|STYLE|NOSCRIPT|OPTION)$/i.test(n.parentElement.tagName)) continue;
      if (!n.nodeValue.trim()) continue;
      nodes.push({node:n, original:n.nodeValue});
    }
  }
  function apply(lang) {
    document.documentElement.lang = lang === "sw" ? "sw" : "en";
    for (const item of nodes) {
      const raw = item.original;
      const lead = raw.match(/^\s*/)?.[0] || "";
      const trail = raw.match(/\s*$/)?.[0] || "";
      const key = raw.trim();
      item.node.nodeValue = lead + (lang === "sw" ? (translations[key] || key) : key) + trail;
    }
    document.querySelectorAll("[placeholder],[aria-label],[title]").forEach(el => {
      ["placeholder","aria-label","title"].forEach(attr => {
        const val = el.getAttribute(attr);
        if (!val) return;
        if (!el.dataset["langOrig"+attr]) el.dataset["langOrig"+attr] = val;
        const original = el.dataset["langOrig"+attr];
        el.setAttribute(attr, lang === "sw" ? (attrMap[original] || translations[original] || original) : original);
      });
    });
    document.querySelectorAll("select option").forEach(el => {
      if (!el.dataset.langOriginal) el.dataset.langOriginal = el.textContent;
      const original = el.dataset.langOriginal;
      el.textContent = lang === "sw" ? (translations[original] || original) : original;
    });
    const label = document.getElementById("languageLabel");
    if (label) label.textContent = lang === "sw" ? "Lugha" : "Language";
    const select = document.getElementById("siteLanguage");
    if (select) select.value = lang;
    document.title = lang === "sw" ? (translations[document.title] || document.title) : (document.documentElement.dataset.originalTitle || document.title);
  }
  function mount() {
    document.documentElement.dataset.originalTitle = document.title;
    collect(document.body);
    const wrap = document.createElement("div");
    wrap.className = "language-switcher";
    wrap.innerHTML = '<span class="language-globe" aria-hidden="true">文</span><label id="languageLabel" for="siteLanguage">Language</label><select id="siteLanguage" aria-label="Choose website language"><option value="en">English</option><option value="sw">Kiswahili</option></select>';
    document.body.appendChild(wrap);
    const style = document.createElement("style");
    style.textContent = '.language-switcher{position:fixed;right:16px;bottom:76px;z-index:9999;display:flex;align-items:center;gap:8px;padding:9px 11px;border:1px solid #d8e2d7;border-radius:15px;background:#fffdf7;color:#183b36;box-shadow:0 10px 30px #183b3620;font:700 12px/1.2 Inter,"Segoe UI",Arial,sans-serif}.language-globe{display:grid;place-items:center;width:26px;height:26px;border-radius:8px;background:#e4eee4;color:#176b5b;font-size:16px}.language-switcher select{max-width:112px;border:1px solid #d7dfd4;border-radius:8px;background:#fff;padding:7px 8px;color:#183b36;font:700 12px inherit;cursor:pointer}.language-switcher label{font-weight:800}.language-switcher select:focus{outline:2px solid #176b5b55}@media(max-width:480px){.language-switcher{right:10px;bottom:72px;padding:7px 8px}.language-switcher label{display:none}}';
    document.head.appendChild(style);
    const select = document.getElementById("siteLanguage");
    let saved = "en";
    try { saved = localStorage.getItem("tsp-language") || "en"; } catch(e) {}
    select.addEventListener("change", () => {
      const lang = select.value;
      try { localStorage.setItem("tsp-language", lang); } catch(e) {}
      apply(lang);
    });
    apply(saved);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();