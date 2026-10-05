(() => {
  /*
   * Tanzania Student Portal - multilingual UI
   * Languages: English, Kiswahili, French, Chinese, Arabic, Spanish, Hindi
   * The English text is always kept as the source so switching never mixes languages.
   */
  const sw = {
    "Home":"Nyumbani","Dashboard":"Dashibodi","Study":"Masomo","Books":"Vitabu","Courses":"Kozi",
    "Career Hub":"Kituo cha Kazi","Tools":"Zana","Opportunities":"Fursa","Past Papers":"Mitihani ya Zamani",
    "Menu":"Menyu","Previous":"Iliyotangulia","Next":"Inayofuata","Back":"Rudi","← Back to Home":"← Rudi Nyumbani","← Home":"← Nyumbani",
    "Search":"Tafuta","All Books":"Vitabu Vyote","Default":"Chaguomsingi","Title A–Z":"Jina A–Z","Newest First":"Vipya Kwanza","Oldest First":"Vya Zamani Kwanza",
    "Education":"Elimu","Skills":"Ujuzi","Experience":"Uzoefu","Full name":"Jina kamili","Email":"Barua pepe","Phone":"Simu",
    "Generate CV":"Tengeneza CV","CV Builder":"Tengeneza CV","Universities":"Vyuo Vikuu","Engineering":"Uhandisi","Health":"Afya",
    "Business":"Biashara","Agriculture":"Kilimo","Mining & Geology":"Madini na Jiolojia","ICT & Computing":"TEHAMA na Kompyuta",
    "Engineering & Technology":"Uhandisi na Teknolojia","Health & Life Sciences":"Afya na Sayansi ya Maisha",
    "Business & Social Sciences":"Biashara na Sayansi za Jamii","Natural Resources":"Maliasili","Education & Creative Arts":"Elimu na Sanaa Bunifu",
    "Secondary Exam Practice":"Mazoezi ya Mitihani ya Sekondari","Important:":"Muhimu:","All years":"Miaka yote","All subjects":"Masomo yote",
    "Form 2 resources":"Nyenzo za Kidato cha Pili","Form 2 · FTNA":"Kidato cha Pili · FTNA","Form 4 · CSEE":"Kidato cha Nne · CSEE","Form 6 · ACSEE":"Kidato cha Sita · ACSEE",
    "Official examination guidance":"Mwongozo rasmi wa mitihani","Search subject or resource...":"Tafuta somo au nyenzo...",
    "Career & Admissions Hub":"Kituo cha Kazi na Udahili","Work & Internships":"Kazi na Mafunzo kwa Vitendo","Colleges & Training":"Vyuo na Mafunzo",
    "Application checklist":"Orodha ya kujiandaa kuomba","Helpful student links":"Viungo muhimu kwa wanafunzi","Verify before applying":"Thibitisha kabla ya kutuma maombi",
    "Search books, exam papers, career tools…":"Tafuta vitabu, mitihani, zana za kazi…","Search for a book...":"Tafuta kitabu...",
    "Search by author...":"Tafuta kwa mwandishi...","Publication year...":"Mwaka wa kuchapishwa...",
    "Hydrometallurgy":"Hidrometallurgia","Comminution":"Usagaji wa Madini","Flotation":"Ueleaji wa Madini",
    "Gravity Separation":"Utenganishaji kwa Mvuto","Magnetic Separation":"Utenganishaji wa Sumaku","Dewatering":"Uondoaji wa Maji","Ore Characterization":"Uchambuzi wa Sifa za Ore",
    "University & College Portal":"Tovuti ya Vyuo Vikuu na Vyuo","Popular Courses":"Kozi Maarufu",
    "University & College Past Papers":"Mitihani ya Vyuo Vikuu na Vyuo","College & University Notices":"Matangazo ya Vyuo Vikuu na Vyuo",
    "Examination timetables":"Ratiba za mitihani","Registration announcements":"Matangazo ya usajili",
    "Scholarships and internships":"Scholarship na mafunzo kwa vitendo","Notice Board:":"Ubao wa Matangazo:",
    "Official notices will be added here.":"Matangazo rasmi yataongezwa hapa.",
    "Search library":"Tafuta maktaba","Check catalogue":"Angalia taarifa za katalogi",
    "Student Tools":"Zana za Mwanafunzi","Digital Library":"Maktaba ya Kidijitali","Courses & Resources":"Kozi na Nyenzo",
    "Your student hub":"Kituo chako cha mwanafunzi","Your journey.":"Safari yako.","Your knowledge.":"Maarifa yako.","Your future.":"Mustakabali wako.",
    "Find resources":"Tafuta nyenzo","Find your field.":"Tafuta fani yako.","Build your future.":"Jenga mustakabali wako."
  };

  const common = {
    en:{name:"English",dir:"ltr"},
    sw:{name:"Kiswahili",dir:"ltr"},
    fr:{name:"Français",dir:"ltr"},
    zh:{name:"中文",dir:"ltr"},
    ar:{name:"العربية",dir:"rtl"},
    es:{name:"Español",dir:"ltr"},
    hi:{name:"हिन्दी",dir:"ltr"}
  };

  const dictionaries = {
    sw,
    fr:{
      Home:"Accueil",Dashboard:"Tableau de bord",Study:"Études",Books:"Livres",Courses:"Cours","Career Hub":"Carrières",Tools:"Outils",Opportunities:"Opportunités","Past Papers":"Anciens examens",Menu:"Menu",Previous:"Précédent",Next:"Suivant",Back:"Retour","← Back to Home":"← Retour à l’accueil","← Home":"← Accueil",Search:"Rechercher","All Books":"Tous les livres",Default:"Par défaut","Title A–Z":"Titre A–Z","Newest First":"Plus récents","Oldest First":"Plus anciens",Education:"Éducation",Skills:"Compétences",Experience:"Expérience","Full name":"Nom complet",Email:"E-mail",Phone:"Téléphone","Generate CV":"Générer le CV","CV Builder":"Créateur de CV",Universities:"Universités",Engineering:"Ingénierie",Health:"Santé",Business:"Commerce",Agriculture:"Agriculture","Mining & Geology":"Mines et géologie","ICT & Computing":"TIC et informatique","Engineering & Technology":"Ingénierie et technologie","Health & Life Sciences":"Santé et sciences de la vie","Business & Social Sciences":"Commerce et sciences sociales","Natural Resources":"Ressources naturelles","Education & Creative Arts":"Éducation et arts créatifs","Secondary Exam Practice":"Exercices d’examens secondaires","Important:":"Important :","All years":"Toutes les années","All subjects":"Toutes les matières","Official examination guidance":"Guide officiel des examens","Career & Admissions Hub":"Carrières et admissions","Work & Internships":"Emplois et stages","Colleges & Training":"Collèges et formations","Application checklist":"Liste de préparation","Helpful student links":"Liens utiles","Verify before applying":"Vérifier avant de postuler","Search for a book...":"Rechercher un livre...","Search by author...":"Rechercher par auteur...","Publication year...":"Année de publication...","Hydrometallurgy":"Hydrométallurgie",Comminution:"Broyage",Flotation:"Flottation","Gravity Separation":"Séparation gravimétrique","Magnetic Separation":"Séparation magnétique",Dewatering:"Déshydratation","Ore Characterization":"Caractérisation du minerai","University & College Portal":"Portail des universités et collèges","Popular Courses":"Cours populaires","College & University Notices":"Avis des universités et collèges","Examination timetables":"Calendriers d’examens","Registration announcements":"Annonces d’inscription","Scholarships and internships":"Bourses et stages","Notice Board:":"Tableau d’annonces :","Student Tools":"Outils étudiants","Digital Library":"Bibliothèque numérique","Courses & Resources":"Cours et ressources","Find resources":"Trouver des ressources","Find your field.":"Trouvez votre domaine.","Build your future.":"Construisez votre avenir."
    },
    zh:{
      Home:"首页",Dashboard:"仪表板",Study:"学习",Books:"书籍",Courses:"课程","Career Hub":"职业中心",Tools:"工具",Opportunities:"机会","Past Papers":"历年试卷",Menu:"菜单",Previous:"上一页",Next:"下一页",Back:"返回","← Back to Home":"← 返回首页","← Home":"← 首页",Search:"搜索","All Books":"全部书籍",Default:"默认","Title A–Z":"标题 A–Z","Newest First":"最新优先","Oldest First":"最旧优先",Education:"教育",Skills:"技能",Experience:"经验","Full name":"姓名",Email:"电子邮箱",Phone:"电话","Generate CV":"生成简历","CV Builder":"简历制作",Universities:"大学",Engineering:"工程",Health:"健康",Business:"商业",Agriculture:"农业","Mining & Geology":"采矿与地质","ICT & Computing":"信息通信技术与计算机","Engineering & Technology":"工程与技术","Health & Life Sciences":"健康与生命科学","Business & Social Sciences":"商业与社会科学","Natural Resources":"自然资源","Education & Creative Arts":"教育与创意艺术","Secondary Exam Practice":"中学考试练习","Important:":"重要：","All years":"所有年份","All subjects":"所有科目","Official examination guidance":"官方考试指南","Career & Admissions Hub":"职业与招生中心","Work & Internships":"工作与实习","Colleges & Training":"学院与培训","Application checklist":"申请清单","Helpful student links":"实用学生链接","Verify before applying":"申请前核实","Search for a book...":"搜索书籍...","Search by author...":"按作者搜索...","Publication year...":"出版年份...","Hydrometallurgy":"湿法冶金",Comminution:"粉碎",Flotation:"浮选","Gravity Separation":"重力分选","Magnetic Separation":"磁选",Dewatering:"脱水","Ore Characterization":"矿石表征","University & College Portal":"大学与学院门户","Popular Courses":"热门课程","College & University Notices":"大学与学院公告","Examination timetables":"考试时间表","Registration announcements":"注册公告","Scholarships and internships":"奖学金与实习","Notice Board:":"公告栏：","Student Tools":"学生工具","Digital Library":"数字图书馆","Courses & Resources":"课程与资源","Find resources":"查找学习资源","Find your field.":"找到你的专业领域。","Build your future.":"建设你的未来。"
    },
    ar:{
      Home:"الرئيسية",Dashboard:"لوحة التحكم",Study:"الدراسة",Books:"الكتب",Courses:"المقررات","Career Hub":"مركز الوظائف",Tools:"الأدوات",Opportunities:"الفرص","Past Papers":"الامتحانات السابقة",Menu:"القائمة",Previous:"السابق",Next:"التالي",Back:"رجوع","← Back to Home":"← العودة للرئيسية","← Home":"← الرئيسية",Search:"بحث","All Books":"كل الكتب",Default:"افتراضي","Title A–Z":"العنوان أ–ي","Newest First":"الأحدث أولاً","Oldest First":"الأقدم أولاً",Education:"التعليم",Skills:"المهارات",Experience:"الخبرة","Full name":"الاسم الكامل",Email:"البريد الإلكتروني",Phone:"الهاتف","Generate CV":"إنشاء السيرة الذاتية","CV Builder":"منشئ السيرة الذاتية",Universities:"الجامعات",Engineering:"الهندسة",Health:"الصحة",Business:"الأعمال",Agriculture:"الزراعة","Mining & Geology":"التعدين والجيولوجيا","ICT & Computing":"تكنولوجيا المعلومات والحوسبة","Engineering & Technology":"الهندسة والتكنولوجيا","Health & Life Sciences":"الصحة وعلوم الحياة","Business & Social Sciences":"الأعمال والعلوم الاجتماعية","Natural Resources":"الموارد الطبيعية","Education & Creative Arts":"التعليم والفنون الإبداعية","Secondary Exam Practice":"تدريبات امتحانات المرحلة الثانوية","Important:":"مهم:","All years":"كل السنوات","All subjects":"كل المواد","Official examination guidance":"إرشادات الامتحانات الرسمية","Career & Admissions Hub":"مركز الوظائف والقبول","Work & Internships":"العمل والتدريب","Colleges & Training":"الكليات والتدريب","Application checklist":"قائمة التقديم","Helpful student links":"روابط مفيدة للطلاب","Verify before applying":"تحقق قبل التقديم","Search for a book...":"ابحث عن كتاب...","Search by author...":"ابحث باسم المؤلف...","Publication year...":"سنة النشر...","Hydrometallurgy":"المعالجة الهيدروميتالورجية",Comminution:"طحن وتكسير الخامات",Flotation:"التعويم","Gravity Separation":"الفصل بالجاذبية","Magnetic Separation":"الفصل المغناطيسي",Dewatering:"نزع الماء","Ore Characterization":"توصيف الخام","University & College Portal":"بوابة الجامعات والكليات","Popular Courses":"المقررات الشائعة","College & University Notices":"إعلانات الجامعات والكليات","Examination timetables":"جداول الامتحانات","Registration announcements":"إعلانات التسجيل","Scholarships and internships":"المنح والتدريب","Notice Board:":"لوحة الإعلانات:","Student Tools":"أدوات الطلاب","Digital Library":"المكتبة الرقمية","Courses & Resources":"المقررات والموارد","Find resources":"ابحث عن الموارد","Find your field.":"اعثر على تخصصك","Build your future.":"ابنِ مستقبلك"
    },
    es:{
      Home:"Inicio",Dashboard:"Panel",Study:"Estudio",Books:"Libros",Courses:"Cursos","Career Hub":"Centro profesional",Tools:"Herramientas",Opportunities:"Oportunidades","Past Papers":"Exámenes anteriores",Menu:"Menú",Previous:"Anterior",Next:"Siguiente",Back:"Volver","← Back to Home":"← Volver al inicio","← Home":"← Inicio",Search:"Buscar","All Books":"Todos los libros",Default:"Predeterminado","Title A–Z":"Título A–Z","Newest First":"Más recientes","Oldest First":"Más antiguos",Education:"Educación",Skills:"Habilidades",Experience:"Experiencia","Full name":"Nombre completo",Email:"Correo electrónico",Phone:"Teléfono","Generate CV":"Generar CV","CV Builder":"Creador de CV",Universities:"Universidades",Engineering:"Ingeniería",Health:"Salud",Business:"Negocios",Agriculture:"Agricultura","Mining & Geology":"Minería y geología","ICT & Computing":"TIC e informática","Engineering & Technology":"Ingeniería y tecnología","Health & Life Sciences":"Salud y ciencias de la vida","Business & Social Sciences":"Negocios y ciencias sociales","Natural Resources":"Recursos naturales","Education & Creative Arts":"Educación y artes creativas","Secondary Exam Practice":"Práctica de exámenes secundarios","Important:":"Importante:","All years":"Todos los años","All subjects":"Todas las materias","Official examination guidance":"Guía oficial de exámenes","Career & Admissions Hub":"Centro de empleo y admisiones","Work & Internships":"Trabajo y prácticas","Colleges & Training":"Colegios y formación","Application checklist":"Lista de solicitud","Helpful student links":"Enlaces útiles","Verify before applying":"Verificar antes de solicitar","Search for a book...":"Buscar un libro...","Search by author...":"Buscar por autor...","Publication year...":"Año de publicación...","Hydrometallurgy":"Hidrometalurgia",Comminution:"Conminución",Flotation:"Flotación","Gravity Separation":"Separación gravimétrica","Magnetic Separation":"Separación magnética",Dewatering:"Deshidratación","Ore Characterization":"Caracterización del mineral","University & College Portal":"Portal de universidades y colegios","Popular Courses":"Cursos populares","College & University Notices":"Avisos de universidades y colegios","Examination timetables":"Horarios de exámenes","Registration announcements":"Anuncios de inscripción","Scholarships and internships":"Becas y prácticas","Notice Board:":"Tablón de anuncios:","Student Tools":"Herramientas para estudiantes","Digital Library":"Biblioteca digital","Courses & Resources":"Cursos y recursos","Find resources":"Buscar recursos","Find your field.":"Encuentra tu área","Build your future.":"Construye tu futuro"
    },
    hi:{
      Home:"होम",Dashboard:"डैशबोर्ड",Study:"पढ़ाई",Books:"किताबें",Courses:"पाठ्यक्रम","Career Hub":"करियर केंद्र",Tools:"उपकरण",Opportunities:"अवसर","Past Papers":"पिछले प्रश्नपत्र",Menu:"मेनू",Previous:"पिछला",Next:"अगला",Back:"वापस","← Back to Home":"← होम पर वापस","← Home":"← होम",Search:"खोजें","All Books":"सभी किताबें",Default:"डिफ़ॉल्ट","Title A–Z":"शीर्षक A–Z","Newest First":"नवीनतम पहले","Oldest First":"पुराने पहले",Education:"शिक्षा",Skills:"कौशल",Experience:"अनुभव","Full name":"पूरा नाम",Email:"ईमेल",Phone:"फ़ोन","Generate CV":"CV बनाएं","CV Builder":"CV निर्माता",Universities:"विश्वविद्यालय",Engineering:"इंजीनियरिंग",Health:"स्वास्थ्य",Business:"व्यवसाय",Agriculture:"कृषि","Mining & Geology":"खनन और भूविज्ञान","ICT & Computing":"आईसीटी और कंप्यूटिंग","Engineering & Technology":"इंजीनियरिंग और प्रौद्योगिकी","Health & Life Sciences":"स्वास्थ्य और जीवन विज्ञान","Business & Social Sciences":"व्यवसाय और सामाजिक विज्ञान","Natural Resources":"प्राकृतिक संसाधन","Education & Creative Arts":"शिक्षा और रचनात्मक कला","Secondary Exam Practice":"माध्यमिक परीक्षा अभ्यास","Important:":"महत्वपूर्ण:","All years":"सभी वर्ष","All subjects":"सभी विषय","Official examination guidance":"आधिकारिक परीक्षा मार्गदर्शन","Career & Admissions Hub":"करियर और प्रवेश केंद्र","Work & Internships":"नौकरी और इंटर्नशिप","Colleges & Training":"कॉलेज और प्रशिक्षण","Application checklist":"आवेदन सूची","Helpful student links":"उपयोगी छात्र लिंक","Verify before applying":"आवेदन से पहले सत्यापित करें","Search for a book...":"किताब खोजें...","Search by author...":"लेखक से खोजें...","Publication year...":"प्रकाशन वर्ष...","Hydrometallurgy":"हाइड्रोमेटलर्जी",Comminution:"अयस्क पीसना",Flotation:"फ्लोटेशन","Gravity Separation":"गुरुत्व पृथक्करण","Magnetic Separation":"चुंबकीय पृथक्करण",Dewatering:"जल निष्कासन","Ore Characterization":"अयस्क विशेषता","University & College Portal":"विश्वविद्यालय और कॉलेज पोर्टल","Popular Courses":"लोकप्रिय पाठ्यक्रम","College & University Notices":"विश्वविद्यालय और कॉलेज सूचनाएँ","Examination timetables":"परीक्षा समय-सारणी","Registration announcements":"पंजीकरण घोषणाएँ","Scholarships and internships":"छात्रवृत्ति और इंटर्नशिप","Notice Board:":"सूचना बोर्ड:","Student Tools":"छात्र उपकरण","Digital Library":"डिजिटल लाइब्रेरी","Courses & Resources":"पाठ्यक्रम और संसाधन","Find resources":"संसाधन खोजें","Find your field.":"अपना क्षेत्र खोजें","Build your future.":"अपना भविष्य बनाएं"
    },
    zh:{},
    ar:{},
    es:{},
    hi:{}
  };

  const attrMap = {
    "Search books, exam papers, career tools…": {
      sw:"Tafuta vitabu, mitihani, zana za kazi…", fr:"Rechercher des livres, examens et outils professionnels…", zh:"搜索书籍、试卷和职业工具…", ar:"ابحث عن الكتب والامتحانات وأدوات الوظائف…", es:"Buscar libros, exámenes y herramientas profesionales…", hi:"किताबें, प्रश्नपत्र और करियर टूल खोजें…"
    },
    "Search for a book...": {sw:"Tafuta kitabu...",fr:"Rechercher un livre...",zh:"搜索书籍...",ar:"ابحث عن كتاب...",es:"Buscar un libro...",hi:"किताब खोजें..."},
    "Search by author...": {sw:"Tafuta kwa mwandishi...",fr:"Rechercher par auteur...",zh:"按作者搜索...",ar:"ابحث باسم المؤلف...",es:"Buscar por autor...",hi:"लेखक से खोजें..."}
  };

  const originalNodes = new WeakMap();
  const translatedNodes = new WeakSet();
  let currentLang = "en";

  function sourceText(node) {
    if (!originalNodes.has(node)) originalNodes.set(node, node.nodeValue);
    return originalNodes.get(node);
  }

  function translateText(text) {
    const key = text.trim();
    if (!key) return text;
    const dict = dictionaries[currentLang] || {};
    const translated = currentLang === "en" ? key : (dict[key] || key);
    const lead = text.match(/^\s*/)?.[0] || "";
    const trail = text.match(/\s*$/)?.[0] || "";
    return lead + translated + trail;
  }

  function translateNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE || !node.parentElement) return;
    if (/^(SCRIPT|STYLE|NOSCRIPT|OPTION)$/i.test(node.parentElement.tagName)) return;
    const raw = sourceText(node);
    node.nodeValue = translateText(raw);
    translatedNodes.add(node);
  }

  function collect(root=document.body) {
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let n; while((n=walker.nextNode())) translateNode(n);
  }

  function apply(lang) {
    currentLang = common[lang] ? lang : "en";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = common[currentLang].dir;
    document.body.classList.toggle("rtl-language", common[currentLang].dir === "rtl");
    collect(document.body);

    document.querySelectorAll("[placeholder],[aria-label],[title]").forEach(el=>{
      ["placeholder","aria-label","title"].forEach(attr=>{
        const val=el.getAttribute(attr);
        if(!val) return;
        const key="langOriginal_"+attr;
        if(!el.dataset[key]) el.dataset[key]=val;
        const original=el.dataset[key];
        const custom=attrMap[original]?.[currentLang];
        const dict=dictionaries[currentLang]||{};
        el.setAttribute(attr,currentLang==="en"?original:(custom||dict[original]||original));
      });
    });

    document.querySelectorAll("select option").forEach(el=>{
      if(!el.dataset.langOriginal) el.dataset.langOriginal=el.textContent;
      const original=el.dataset.langOriginal;
      const dict=dictionaries[currentLang]||{};
      el.textContent=currentLang==="en"?original:(dict[original]||original);
    });

    const label=document.getElementById("languageLabel");
    if(label) label.textContent=common[currentLang].name;
    const select=document.getElementById("siteLanguage");
    if(select) select.value=currentLang;
    document.body.classList.add("language-ready");
  }

  function mount() {
    const wrap=document.createElement("div");
    wrap.className="language-switcher";
    wrap.innerHTML='<span class="language-globe" aria-hidden="true">文</span><label id="languageLabel" for="siteLanguage">Language</label><select id="siteLanguage" aria-label="Choose website language"><option value="en">English</option><option value="sw">Kiswahili</option><option value="fr">Français</option><option value="zh">中文</option><option value="ar">العربية</option><option value="es">Español</option><option value="hi">हिन्दी</option></select>';
    document.body.appendChild(wrap);

    const style=document.createElement("style");
    style.textContent=`
      .language-switcher{position:fixed;right:16px;bottom:76px;z-index:9999;display:flex;align-items:center;gap:8px;padding:9px 11px;border:1px solid #d8e2d7;border-radius:15px;background:#fffdf7;color:#183b36;box-shadow:0 10px 30px #183b3620;font:700 12px/1.2 Inter,"Segoe UI",Arial,sans-serif}
      .language-globe{display:grid;place-items:center;width:27px;height:27px;border-radius:9px;background:#e4eee4;color:#176b5b;font-size:16px}
      .language-switcher select{min-width:118px;border:1px solid #d7dfd4;border-radius:9px;background:#fff;padding:8px 9px;color:#183b36;font:700 12px inherit;cursor:pointer}
      .language-switcher label{font-weight:800}
      .language-switcher select:focus{outline:2px solid #176b5b55}
      .rtl-language{direction:rtl}
      .rtl-language .language-switcher{direction:ltr}
      @media(max-width:600px){.language-switcher{right:10px;bottom:70px;padding:7px 8px}.language-switcher label{display:none}.language-switcher select{min-width:112px}}
    `;
    document.head.appendChild(style);

    const select=document.getElementById("siteLanguage");
    let saved="en"; try{saved=localStorage.getItem("tsp-language")||"en"}catch(e){}
    select.addEventListener("change",()=>{try{localStorage.setItem("tsp-language",select.value)}catch(e){};apply(select.value)});
    apply(saved);

    const observer=new MutationObserver(mutations=>{
      if(!document.body.classList.contains("language-ready")) return;
      for(const m of mutations){
        for(const node of m.addedNodes){
          if(node.nodeType===Node.TEXT_NODE) translateNode(node);
          else if(node.nodeType===Node.ELEMENT_NODE && !node.closest(".language-switcher")) collect(node);
        }
      }
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",mount);
  else mount();
})();