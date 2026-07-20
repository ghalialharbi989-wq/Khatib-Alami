/* ============================================
   Khatib & Alami - Main Application
   ============================================ */
(function () {
    'use strict';

    /* ==========================================
       PROJECT DATA - With relevant images
    ========================================== */
    const projectsData = [
        {
            id: 'sp-locator',
            category: 'electronic-services',
            featured: false,
            image: 'images/projects/sp-locator.png?v=11',
            ar: { category: 'الخدمات الإلكترونية', name: 'محدد SP', location: 'السعودية', shortDesc: 'نظام تحديد المواقع الجغرافية لإدارة البنية التحتية للاتصالات.', fullDesc: 'تطوير نظام متكامل لتحديد المواقع الجغرافية يُستخدم في إدارة وتتبع البنية التحتية لشبكات الاتصالات في المملكة العربية السعودية، مما يعزز كفاءة العمليات والصيانة.' },
            en: { category: 'Electronic Services', name: 'SP Locator', location: 'Saudi Arabia', shortDesc: 'Geographic positioning system for telecom infrastructure management.', fullDesc: 'Development of an integrated geographic positioning system used to manage and track telecommunications network infrastructure in Saudi Arabia, enhancing operational and maintenance efficiency.' }
        },
        {
            id: 'omantel-gis',
            category: 'electronic-services',
            featured: false,
            image: 'images/projects/omantel-gis.png?v=11',
            ar: { category: 'الخدمات الإلكترونية', name: 'أومانتيل GIS', location: 'عمان', shortDesc: 'نظام معلومات جغرافية متكامل لإدارة شبكات الاتصالات.', fullDesc: 'تطوير نظام معلومات جغرافية (GIS) متكامل لشركة عمانتل لإدارة ومراقبة شبكات الاتصالات بكفاءة عالية، مع توفير أدوات تحليل مكاني متقدمة.' },
            en: { category: 'Electronic Services', name: 'Omantel GIS', location: 'Oman', shortDesc: 'Integrated GIS system for managing telecommunications networks.', fullDesc: 'Development of a comprehensive Geographic Information System (GIS) for Omantel to efficiently manage and monitor telecommunications networks, with advanced spatial analysis tools.' }
        },
        {
            id: 'sar-gis',
            category: 'electronic-services',
            featured: true,
            image: 'images/projects/sar-gis.png?v=11',
            ar: { category: 'الخدمات الإلكترونية', name: 'سار GIS', location: 'قطر', shortDesc: 'نظام معلومات جغرافية لإدارة شبكة السكك الحديدية.', fullDesc: 'تصميم وتنفيذ نظام معلومات جغرافية متقدم لإدارة شبكة السكك الحديدية في قطر، يشمل تتبع الأصول وتحليل البيانات المكانية وتخطيط الصيانة.' },
            en: { category: 'Electronic Services', name: 'SAR GIS', location: 'Qatar', shortDesc: 'GIS system for railway network management.', fullDesc: 'Design and implementation of an advanced Geographic Information System for managing Qatar\'s railway network, including asset tracking, spatial data analysis, and maintenance planning.' }
        },
        {
            id: 'lebanon-dsp',
            category: 'energy',
            featured: false,
            image: 'images/projects/lebanon-dsp.png?v=11',
            ar: { category: 'الطاقة', name: 'لبنان DSP', location: 'السعودية', shortDesc: 'تصميم وتخطيط محطات توزيع الطاقة الكهربائية.', fullDesc: 'مشروع تصميم وتخطيط محطات توزيع الطاقة الكهربائية بأحدث التقنيات والمعايير الدولية لضمان استدامة وكفاءة التوزيع الكهربائي.' },
            en: { category: 'Energy', name: 'Lebanon DSP', location: 'Saudi Arabia', shortDesc: 'Design and planning of electrical power distribution stations.', fullDesc: 'Design and planning project for electrical power distribution stations using the latest technologies and international standards to ensure sustainable and efficient power distribution.' }
        },
        {
            id: 'baghdad-city',
            category: 'energy',
            featured: false,
            image: 'images/projects/baghdad-city.png?v=11',
            ar: { category: 'الطاقة', name: 'مدينة بغداد', location: 'العراق', shortDesc: 'تطوير البنية التحتية للطاقة الكهربائية في بغداد.', fullDesc: 'مشروع شامل لتطوير وتحديث البنية التحتية للطاقة الكهربائية في مدينة بغداد، يهدف إلى تحسين جودة الخدمة وزيادة قدرة الشبكة الكهربائية.' },
            en: { category: 'Energy', name: 'Baghdad City', location: 'Iraq', shortDesc: 'Electrical energy infrastructure development in Baghdad.', fullDesc: 'A comprehensive project to develop and modernize the electrical energy infrastructure in Baghdad city, aiming to improve service quality and increase grid capacity.' }
        },
        {
            id: 'khafji-gas',
            category: 'energy',
            featured: false,
            image: 'images/projects/khafji-gas.png?v=11',
            ar: { category: 'الطاقة', name: 'غاز الخفجي', location: 'السعودية', shortDesc: 'تصميم وإشراف على منشآت معالجة الغاز الطبيعي.', fullDesc: 'تصميم هندسي متكامل والإشراف على تنفيذ منشآت معالجة الغاز الطبيعي في منطقة الخفجي، بما يشمل أنظمة المعالجة والتخزين والنقل.' },
            en: { category: 'Energy', name: 'Khafji Gas', location: 'Saudi Arabia', shortDesc: 'Design and supervision of natural gas processing facilities.', fullDesc: 'Comprehensive engineering design and supervision of natural gas processing facilities in the Khafji region, including processing, storage, and transportation systems.' }
        },
        {
            id: 'mdeirej-bridge',
            category: 'infrastructure',
            featured: false,
            image: 'images/projects/mdeirej-bridge.png?v=11',
            ar: { category: 'البنية التحتية', name: 'جسر مديرج', location: 'لبنان', shortDesc: 'تصميم وإشراف هندسي على بناء جسر مديرج الشهير.', fullDesc: 'تصميم وإشراف هندسي على بناء جسر مديرج الشهير في لبنان، أحد أبرز المعالم الهندسية في المنطقة، بطول يتجاوز عدة مئات من الأمتار.' },
            en: { category: 'Infrastructure', name: 'Mdeirej Bridge', location: 'Lebanon', shortDesc: 'Engineering design and supervision of the famous Mdeirej Bridge.', fullDesc: 'Engineering design and supervision of the iconic Mdeirej Bridge in Lebanon, one of the most prominent engineering landmarks in the region, spanning several hundred meters.' }
        },
        {
            id: 'najran-airport',
            category: 'infrastructure',
            featured: true,
            image: 'images/projects/najran-airport.png?v=11',
            ar: { category: 'البنية التحتية', name: 'مطار نجران', location: 'السعودية', shortDesc: 'الإشراف على إنشاء مطار نجران بتكليف من هيئة الطيران المدني.', fullDesc: 'كُلِّفت شركة خطيب وعلمي من قِبل الهيئة العامة للطيران المدني بالإشراف على إنشاء مطار نجران. يتضمن المشروع تصميم المدارج، المباني الرئيسية، والخدمات اللوجستية التي تدعم حركة المسافرين بكفاءة عالية.' },
            en: { category: 'Infrastructure', name: 'Najran Airport', location: 'Saudi Arabia', shortDesc: 'Supervision of Najran Airport construction for the Civil Aviation Authority.', fullDesc: 'Khatib & Alami was commissioned by the General Authority of Civil Aviation to supervise the construction of Najran Airport. The project includes runway design, main buildings, and logistics services supporting efficient passenger movement.' }
        },
        {
            id: 'water-supply',
            category: 'infrastructure',
            featured: false,
            image: 'images/projects/water-supply.png?v=11',
            ar: { category: 'البنية التحتية', name: 'إمدادات المياه', location: 'كردستان', shortDesc: 'تطوير شبكات إمدادات المياه والصرف الصحي.', fullDesc: 'مشروع شامل لتطوير وتحديث شبكات إمدادات المياه والصرف الصحي في إقليم كردستان، يهدف لتوفير مياه نظيفة وآمنة للسكان وتحسين البنية التحتية للمياه.' },
            en: { category: 'Infrastructure', name: 'Water Supply', location: 'Kurdistan', shortDesc: 'Water supply and sewage network development.', fullDesc: 'A comprehensive project to develop and modernize water supply and sewage networks in the Kurdistan Region, aiming to provide clean and safe water for residents and improve water infrastructure.' }
        },
        {
            id: 'riyadh-hotel',
            category: 'architecture',
            featured: false,
            image: 'images/projects/riyadh-hotel.png?v=11',
            ar: { category: 'الهندسة المعمارية', name: 'فندق الرياض', location: 'الجزائر', shortDesc: 'تصميم معماري وإنشائي لفندق فاخر في العاصمة الجزائرية.', fullDesc: 'تصميم معماري وإنشائي متكامل لفندق فاخر في العاصمة الجزائرية، يجمع بين الأصالة والحداثة مع مرافق عالمية المستوى ومعايير ضيافة استثنائية.' },
            en: { category: 'Architecture', name: 'Riyadh Hotel', location: 'Algeria', shortDesc: 'Architectural and structural design of a luxury hotel.', fullDesc: 'Comprehensive architectural and structural design of a luxury hotel in the Algerian capital, combining authenticity and modernity with world-class facilities and exceptional hospitality standards.' }
        },
        {
            id: 'tamkeen-tower',
            category: 'architecture',
            featured: false,
            image: 'images/projects/tamkeen-tower.png?v=11',
            ar: { category: 'الهندسة المعمارية', name: 'برج تمكين', location: 'السعودية', shortDesc: 'تصميم وإشراف هندسي على بناء برج تمكين الشاهق.', fullDesc: 'تصميم وإشراف هندسي متكامل على بناء برج تمكين، أحد الأبراج الشاهقة في المملكة العربية السعودية، بتقنيات بناء متطورة وتصميم معماري عصري.' },
            en: { category: 'Architecture', name: 'Tamkeen Tower', location: 'Saudi Arabia', shortDesc: 'Engineering design and supervision of the iconic Tamkeen Tower.', fullDesc: 'Comprehensive engineering design and supervision of Tamkeen Tower, one of the tallest towers in Saudi Arabia, utilizing advanced construction techniques and modern architectural design.' }
        },
        {
            id: 'jabal-omar',
            category: 'architecture',
            featured: true,
            image: 'images/projects/jabal-omar.png?v=11',
            ar: { category: 'الهندسة المعمارية', name: 'جبل عمر', location: 'السعودية', shortDesc: 'تطوير مشروع جبل عمر على مساحة تزيد عن مليون متر مربع.', fullDesc: 'تعمل شركة خطيب وعلمي على مشروع تطوير جبل عمر، الذي يمتد على مساحة تزيد عن مليون متر مربع. يهدف المشروع لتطوير بنية تحتية حديثة تخدم زوار مكة المكرمة بأعلى مستويات الراحة والجودة العمرانية.' },
            en: { category: 'Architecture', name: 'Jabal Omar', location: 'Saudi Arabia', shortDesc: 'Development spanning over one million square meters near the Holy Mosque.', fullDesc: 'Khatib & Alami is working on the Jabal Omar development project, spanning over one million square meters. The project aims to develop modern infrastructure serving visitors to Makkah with the highest levels of comfort and urban quality.' }
        },
        {
            id: 'salil-factory',
            category: 'energy',
            featured: false,
            image: 'images/projects/salil-factory.png?v=11',
            ar: { category: 'الطاقة', name: 'مصنع سليل للتعبئة', location: 'السعودية', shortDesc: 'إعداد مراجعة التصميم التفصيلي والمساعدة في شراء المواد ووثائق البناء لمصنع السائبة في السليل.', fullDesc: 'إعداد مراجعة التصميم التفصيلي بما في ذلك المساعدة في شراء المواد ووثائق البناء لمصنع السائبة في السليل. يمثل المشروع خطوة متقدمة في القطاع الصناعي لدعم الإنتاج المحلي.' },
            en: { category: 'Energy', name: 'Salil Packaging Factory', location: 'Saudi Arabia', shortDesc: 'Detailed design review and procurement assistance for the bulk plant in Salil.', fullDesc: 'Preparation of detailed design review, including procurement assistance and construction documentation for the bulk plant in Salil. The project represents a key industrial step supporting local production.' }
        },
        {
            id: 'riyadh-services',
            category: 'electronic-services',
            featured: true,
            image: 'images/projects/riyadh-services.png?v=11',
            ar: { category: 'الخدمات الإلكترونية', name: 'برنامج الخدمات بالرياض', location: 'السعودية', shortDesc: 'بناء ونشر نظم المعلومات الجغرافية لخدمة قطاع الأعمال ورفع الكفاءة.', fullDesc: 'الهدف من نشر نظم المعلومات الجغرافية هو بناء قاعدة لنظام المؤسسة الذي سيتم دمجه مع أنظمة متعددة لخدمة قطاع الأعمال ورفع كفاءة الخدمات الإلكترونية بالمنطقة.' },
            en: { category: 'Electronic Services', name: 'Riyadh Services Program', location: 'Saudi Arabia', shortDesc: 'Deploying GIS to serve the business sector and improve service efficiency.', fullDesc: 'The deployment of GIS aims to build an enterprise system integrated with multiple platforms to serve the business sector and raise the efficiency of electronic services in Riyadh.' }
        }
    ];

    // VR Data
    const vrData = [
        { name: { ar: 'مول العائلة', en: 'Family Mall' }, image: 'images/projects/vr-family-mall.svg?v=11', link: 'https://maps.app.goo.gl/ZwNfmAv9Sau8GWFe7' },
        { name: { ar: 'الوحدة مول', en: 'Al Wahda Mall' }, image: 'images/projects/vr-alwahda-mall.svg?v=11', link: 'https://maps.app.goo.gl/oEdzmyBDZuj4JMLZ6' },
        { name: { ar: 'فندق فيرمونت', en: 'Fairmont Hotel' }, image: 'images/projects/vr-fairmont.png?v=11', link: 'https://maps.app.goo.gl/eFgmSJ1jTCtz4dre9' }
    ];

    /* ==========================================
       TRANSLATIONS
    ========================================== */
    const translations = {
        ar: {
            'site.name': 'خطيب وعلمي',
            'site.copyright': '© 2025 خطيب وعلمي. جميع الحقوق محفوظة.',
            'skip.content': 'تخطي إلى المحتوى الرئيسي',
            'nav.home': 'الرئيسية', 'nav.about': 'من نحن', 'nav.projects': 'المشاريع', 'nav.contact': 'تواصل معنا',
            'nav.lang': 'English', 'nav.menu': 'القائمة',
            'a11y.fontUp': 'تكبير الخط', 'a11y.fontDown': 'تصغير الخط',
            'a11y.darkMode': 'الوضع الداكن', 'a11y.lightMode': 'الوضع الفاتح',
            'a11y.backToTop': 'العودة لأعلى',
            'hero.badge': 'ريادة في الهندسة', 'hero.title': 'شركة خطيب وعلمي',
            'hero.subtitle': 'للاستشارات الهندسية',
            'hero.desc.pre': 'أكثر من', 'hero.desc.years': '50',
            'hero.desc.post': 'عامًا من الابتكار، التخطيط، وبناء مستقبل مستدام بأعلى المعايير العالمية.',
            'hero.cta1': 'استفسر الآن', 'hero.cta2': 'استكشف مشاريعنا',
            'about.label': 'عن الشركة', 'about.title1': 'نصمم اليوم', 'about.title2': 'لمستقبل أفضل.',
            'about.desc': 'خطيب وعلمي شركة استشارات هندسية رائدة تقدم حلولًا متكاملة في التصميم، التخطيط، وإدارة المشاريع. بخبرة تمتد لعقود ومعايير عالمية، نعمل على تحويل الرؤى إلى واقع ملموس يعزز البنية التحتية.',
            'about.link': 'اقرأ المزيد عنا', 'about.exp': 'عاماً من الخبرة',
            'featured.label': 'أعمالنا', 'featured.title': 'مشاريعنا المميزة',
            'featured.viewAll': 'عرض الكل', 'featured.viewAllMobile': 'عرض كل المشاريع',
            'featured.viewDetails': 'عرض التفاصيل',
            'vr.title': 'تقنية الواقع الافتراضي 360',
            'vr.desc': 'استكشف مشاريعنا بتفاصيل مذهلة من خلال إطلالة بانورامية بتقنية 360 درجة. عش التجربة وكأنك في الموقع.',
            'aboutPage.title': 'من نحن', 'aboutPage.subtitle': 'تعرف على رؤيتنا ورسالتنا',
            'aboutPage.who': 'من هي شركة خطيب وعلمي؟',
            'aboutPage.desc1': 'شركة استشارات هندسية رائدة تقدم حلولًا متكاملة في التصميم، التخطيط، وإدارة المشاريع، بهدف تنفيذ مشاريع نوعية تعزز البنية التحتية وتواكب أحدث التطورات العالمية.',
            'aboutPage.desc2': 'على مدار عقود، استطعنا بناء سمعة مبنية على الثقة، الجودة، والتسليم في الموعد المحدد، مما جعلنا الشريك المفضل للعديد من الجهات الحكومية والخاصة.',
            'aboutPage.whatsapp': 'تواصل معنا عبر واتساب',
            'aboutPage.vision': 'رؤيتنا',
            'aboutPage.visionDesc': 'نحو مستقبل حضري مبتكر من خلال تقديم خدمات تتوافق مع رؤية 2030 وأهداف التنمية المستدامة، لإنشاء مجتمعات مزدهرة.',
            'aboutPage.mission': 'رسالتنا',
            'aboutPage.missionDesc': 'نقدم خدمات تخطيط وتصميم وإدارة مستدامة تلبي طموحات المجتمع، وتساهم بفعالية في تحسين جودة الحياة للجميع.',
            'aboutPage.values': 'قيمنا الأساسية',
            'aboutPage.valuesDesc': 'المبادئ التي تقود كل قرار نتخذه',
            'value.respect': 'الاحترام والأمانة',
            'value.respectDesc': 'نلتزم بالنزاهة والاحترام المتبادل في جميع تعاملاتنا الداخلية والخارجية.',
            'value.transparency': 'الشفافية',
            'value.transparencyDesc': 'نعزز ثقافة المصارحة في جميع مراحل العمل لتحقيق أفضل النتائج بشفافية تامة.',
            'value.added': 'القيمة المضافة',
            'value.addedDesc': 'نضيف لعملائنا قيمة ملموسة تعزز من جودة مشاريعهم وتحسن من العائد الاستثماري.',
            'value.innovation': 'الإبداع والتطوير',
            'value.innovationDesc': 'نؤمن بأهمية التطوير المستمر ومواكبة الابتكار في الحلول الهندسية.',
            'value.quality': 'الجودة والاستدامة',
            'value.qualityDesc': 'نلتزم بأعلى معايير الجودة لتحقيق مشاريع مستدامة وصديقة للبيئة تدوم لأجيال قادمة وتحافظ على الموارد.',
            'partners.title': 'شركاؤنا في النجاح',
            'projectsPage.title': 'المشاريع',
            'projectsPage.subtitle': 'سجل حافل بالنجاحات عبر مختلف القطاعات',
            'filter.all': 'جميع المشاريع', 'filter.electronic': 'الخدمات الإلكترونية',
            'filter.architecture': 'الهندسة المعمارية', 'filter.infrastructure': 'البنية التحتية',
            'filter.energy': 'الطاقة', 'project.viewBtn': 'عرض المشروع',
            'contactPage.title': 'تواصل معنا',
            'contactPage.subtitle': 'نحن هنا للإجابة على استفساراتكم وبناء شراكات جديدة',
            'contact.heading': 'دعنا نتحدث عن مشروعك القادم',
            'contact.desc': 'فريقنا من الخبراء والمهندسين جاهز لتقديم الاستشارات الفنية والهندسية المناسبة لمتطلباتك.',
            'contact.office': 'المكتب الرئيسي', 'contact.phone': 'الهاتف الموحد',
            'contact.email': 'البريد الإلكتروني', 'contact.social': 'تواصل معنا عبر الشبكات',
            'contact.formTitle': 'أرسل لنا رسالة', 'contact.name': 'الاسم الكامل',
            'contact.emailLabel': 'البريد الإلكتروني', 'contact.subject': 'موضوع الرسالة',
            'contact.message': 'تفاصيل الرسالة', 'contact.send': 'إرسال الرسالة',
            'footer.contact': 'تواصل معنا', 'footer.links': 'روابط مهمة',
            'footer.desc': 'نحن شركة هندسية واستشارية رائدة في المملكة، نقدم خدمات احترافية تدعم التنمية المستدامة وتحقق رؤية المملكة 2030 بأعلى معايير الجودة والتصميم.',
            'footer.privacy': 'سياسة الخصوصية', 'footer.terms': 'الشروط والأحكام',
            'modal.close': 'إغلاق',
            'toast.langChanged': 'تم تغيير اللغة إلى العربية',
            'toast.darkOn': 'تم تفعيل الوضع الداكن', 'toast.darkOff': 'تم تفعيل الوضع الفاتح',
            'stats.projects': 'مشروع منجز', 'stats.countries': 'دولة حول العالم',
            'stats.employees': 'مهندس وخبير', 'stats.years': 'عامًا من الخبرة',
        },
        en: {
            'site.name': 'Khatib & Alami', 'site.copyright': '© 2025 Khatib & Alami. All Rights Reserved.',
            'skip.content': 'Skip to main content',
            'nav.home': 'Home', 'nav.about': 'About Us', 'nav.projects': 'Projects', 'nav.contact': 'Contact Us',
            'nav.lang': 'العربية', 'nav.menu': 'Menu',
            'a11y.fontUp': 'Increase Font Size', 'a11y.fontDown': 'Decrease Font Size',
            'a11y.darkMode': 'Dark Mode', 'a11y.lightMode': 'Light Mode',
            'a11y.backToTop': 'Back to Top',
            'hero.badge': 'Pioneering Engineering', 'hero.title': 'Khatib & Alami',
            'hero.subtitle': 'Engineering Consultancy',
            'hero.desc.pre': 'More than', 'hero.desc.years': '50',
            'hero.desc.post': 'years of innovation, planning, and building a sustainable future with the highest international standards.',
            'hero.cta1': 'Inquire Now', 'hero.cta2': 'Explore Our Projects',
            'about.label': 'About Us', 'about.title1': 'We Design Today', 'about.title2': 'for a Better Tomorrow.',
            'about.desc': 'Khatib & Alami is a leading engineering consultancy providing integrated solutions in design, planning, and project management. With decades of experience and global standards, we transform visions into tangible reality that enhances infrastructure.',
            'about.link': 'Read More About Us', 'about.exp': 'Years of Experience',
            'featured.label': 'Our Work', 'featured.title': 'Featured Projects',
            'featured.viewAll': 'View All', 'featured.viewAllMobile': 'View All Projects',
            'featured.viewDetails': 'View Details',
            'vr.title': '360° Virtual Reality',
            'vr.desc': 'Explore our projects in stunning detail with a 360-degree panoramic view. Experience it as if you were on-site.',
            'aboutPage.title': 'About Us', 'aboutPage.subtitle': 'Learn about our vision and mission',
            'aboutPage.who': 'Who is Khatib & Alami?',
            'aboutPage.desc1': 'A leading engineering consultancy providing integrated solutions in design, planning, and project management, aiming to execute quality projects that enhance infrastructure and keep pace with the latest global developments.',
            'aboutPage.desc2': 'Over decades, we have built a reputation based on trust, quality, and on-time delivery, making us the preferred partner for many government and private entities.',
            'aboutPage.whatsapp': 'Contact us via WhatsApp',
            'aboutPage.vision': 'Our Vision',
            'aboutPage.visionDesc': 'Towards an innovative urban future by providing services aligned with Vision 2030 and sustainable development goals, creating thriving communities.',
            'aboutPage.mission': 'Our Mission',
            'aboutPage.missionDesc': 'We provide sustainable planning, design, and management services that meet community aspirations and effectively contribute to improving quality of life for all.',
            'aboutPage.values': 'Our Core Values',
            'aboutPage.valuesDesc': 'The principles that guide every decision we make',
            'value.respect': 'Respect & Integrity',
            'value.respectDesc': 'We are committed to integrity and mutual respect in all our internal and external dealings.',
            'value.transparency': 'Transparency',
            'value.transparencyDesc': 'We promote a culture of openness at all stages of work to achieve the best results with full transparency.',
            'value.added': 'Added Value',
            'value.addedDesc': 'We add tangible value to our clients that enhances their project quality and improves return on investment.',
            'value.innovation': 'Innovation & Development',
            'value.innovationDesc': 'We believe in the importance of continuous development and keeping pace with innovation in engineering solutions.',
            'value.quality': 'Quality & Sustainability',
            'value.qualityDesc': 'We are committed to the highest quality standards to achieve sustainable and environmentally friendly projects that last for generations and preserve resources.',
            'partners.title': 'Our Partners in Success',
            'projectsPage.title': 'Projects',
            'projectsPage.subtitle': 'A proud record of success across various sectors',
            'filter.all': 'All Projects', 'filter.electronic': 'Electronic Services',
            'filter.architecture': 'Architecture', 'filter.infrastructure': 'Infrastructure',
            'filter.energy': 'Energy', 'project.viewBtn': 'View Project',
            'contactPage.title': 'Contact Us',
            'contactPage.subtitle': 'We are here to answer your questions and build new partnerships',
            'contact.heading': "Let's Talk About Your Next Project",
            'contact.desc': 'Our team of experts and engineers is ready to provide the technical and engineering consultations suitable for your requirements.',
            'contact.office': 'Head Office', 'contact.phone': 'Phone',
            'contact.email': 'Email', 'contact.social': 'Connect with us on social media',
            'contact.formTitle': 'Send us a Message', 'contact.name': 'Full Name',
            'contact.emailLabel': 'Email Address', 'contact.subject': 'Subject',
            'contact.message': 'Message Details', 'contact.send': 'Send Message',
            'footer.contact': 'Contact Us', 'footer.links': 'Important Links',
            'footer.desc': 'We are a leading engineering and consulting company in the Kingdom, providing professional services that support sustainable development and achieve the Kingdom\'s Vision 2030 with the highest quality and design standards.',
            'footer.privacy': 'Privacy Policy', 'footer.terms': 'Terms & Conditions',
            'modal.close': 'Close',
            'toast.langChanged': 'Language changed to English',
            'toast.darkOn': 'Dark mode enabled', 'toast.darkOff': 'Light mode enabled',
            'stats.projects': 'Completed Projects', 'stats.countries': 'Countries Worldwide',
            'stats.employees': 'Engineers & Experts', 'stats.years': 'Years of Experience',
        }
    };

    /* ==========================================
       STATE
    ========================================== */
    let currentLang = localStorage.getItem('ka-lang') || 'ar';
    var validPages = ['home', 'about', 'projects', 'contact'];
    let currentPage = validPages.indexOf(localStorage.getItem('ka-page')) !== -1
        ? localStorage.getItem('ka-page') : 'home';
    let fontScale = parseFloat(localStorage.getItem('ka-font-scale') || '1');
    let darkMode = localStorage.getItem('ka-dark-mode') === 'true';
    let scrollObserver = null;

    /* ==========================================
       LANGUAGE SYSTEM
    ========================================== */
    function setLanguage(lang, showToast) {
        currentLang = lang;
        localStorage.setItem('ka-lang', lang);
        var html = document.documentElement;
        html.lang = lang;
        html.dir = lang === 'ar' ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (translations[lang][key]) el.textContent = translations[lang][key];
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-aria');
            if (translations[lang][key]) el.setAttribute('aria-label', translations[lang][key]);
        });

        renderFeaturedProjects();
        renderAllProjects();
        renderVRSection();
        renderStats();
        updateDarkModeButton();

        if (showToast) showToastMsg(translations[lang]['toast.langChanged']);
    }

    function toggleLanguage() {
        setLanguage(currentLang === 'ar' ? 'en' : 'ar', true);
    }

    /* ==========================================
       DARK MODE
    ========================================== */
    function toggleDarkMode() {
        darkMode = !darkMode;
        applyDarkMode();
        localStorage.setItem('ka-dark-mode', darkMode);
        showToastMsg(translations[currentLang][darkMode ? 'toast.darkOn' : 'toast.darkOff']);
    }

    function applyDarkMode() {
        document.documentElement.classList.toggle('dark-mode', darkMode);
        updateDarkModeButton();
    }

    function updateDarkModeButton() {
        var btn = document.getElementById('dark-mode-toggle');
        if (!btn) return;
        var icon = btn.querySelector('i');
        if (icon) {
            icon.className = darkMode ? 'fas fa-sun' : 'fas fa-moon';
        }
        btn.classList.toggle('active', darkMode);
        var label = darkMode ? translations[currentLang]['a11y.lightMode'] : translations[currentLang]['a11y.darkMode'];
        btn.setAttribute('aria-label', label);
        btn.setAttribute('title', label);
    }

    /* ==========================================
       NAVIGATION
    ========================================== */
    function navigate(pageId) {
        if (validPages.indexOf(pageId) === -1) pageId = 'home';
        currentPage = pageId;
        localStorage.setItem('ka-page', pageId);
        document.querySelectorAll('.page-view').forEach(function (p) { p.classList.remove('active'); });
        var target = document.getElementById(pageId);
        if (target) target.classList.add('active');

        document.querySelectorAll('.nav-link').forEach(function (link) {
            link.classList.remove('active-link');
            if (link.getAttribute('data-page') === pageId) link.classList.add('active-link');
        });

        var mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(initScrollAnimations, 200);
    }

    /* ==========================================
       RENDER FUNCTIONS
    ========================================== */
    function renderFeaturedProjects() {
        var container = document.getElementById('featured-projects-grid');
        if (!container) return;
        var lang = currentLang;
        var featured = projectsData.filter(function (p) { return p.featured; });
        if (featured.length < 4) {
            projectsData.forEach(function (p) { if (!p.featured && featured.length < 4) featured.push(p); });
        }
        container.innerHTML = featured.map(function (p) {
            return '<div class="platform-card project-card group cursor-pointer overflow-hidden animate-on-scroll" data-animate="zoom-in" onclick="openProjectModal(\'' + p.id + '\')" tabindex="0" role="button" aria-label="' + p[lang].name + '">' +
                '<div class="relative h-60 overflow-hidden">' +
                '<img src="' + p.image + '" alt="' + p[lang].name + ' - ' + p[lang].location + '" class="project-image" loading="lazy">' +
                '<div class="project-overlay">' +
                '<span class="view-btn"><i class="fas fa-eye me-1"></i> ' + translations[lang]['featured.viewDetails'] + '</span>' +
                '</div></div>' +
                '<div class="p-6"><span class="text-sm text-gray-500 font-medium mb-1 block">' + p[lang].category + '</span>' +
                '<h3 class="font-bold text-xl text-black">' + p[lang].name + '</h3></div></div>';
        }).join('');
    }

    function renderAllProjects() {
        var container = document.getElementById('projects-grid');
        if (!container) return;
        var lang = currentLang;
        container.innerHTML = projectsData.map(function (p) {
            return '<div class="platform-card project-card project-item overflow-hidden p-0 animate-on-scroll" data-category="' + p.category + '" tabindex="0" role="article">' +
                '<div class="relative overflow-hidden">' +
                '<img src="' + p.image + '" alt="' + p[lang].name + ' - ' + p[lang].location + '" class="project-image" loading="lazy">' +
                '<div class="project-overlay">' +
                '<button class="view-btn" onclick="openProjectModal(\'' + p.id + '\')" aria-label="' + translations[lang]['project.viewBtn'] + ' - ' + p[lang].name + '"><i class="fas fa-eye me-1"></i> ' + translations[lang]['project.viewBtn'] + '</button>' +
                '</div></div>' +
                '<div class="p-5 border-t border-gray-100">' +
                '<span class="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">' + p[lang].category + '</span>' +
                '<h5 class="font-bold text-black mt-3 text-lg">' + p[lang].name + '</h5>' +
                '<p class="text-sm text-gray-500 mt-2 leading-relaxed" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + p[lang].shortDesc + '</p>' +
                '<div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">' +
                '<span class="text-xs text-gray-400"><i class="fas fa-map-marker-alt me-1"></i> ' + p[lang].location + '</span>' +
                '<button onclick="event.stopPropagation(); openProjectModal(\'' + p.id + '\')" class="text-primary text-sm font-bold hover:underline" aria-label="' + translations[lang]['project.viewBtn'] + '">' + translations[lang]['project.viewBtn'] + ' <i class="fas fa-arrow-' + (lang === 'ar' ? 'left' : 'right') + ' ms-1 text-xs"></i></button>' +
                '</div></div></div>';
        }).join('');
        var activeBtn = document.querySelector('#filter-buttons .filter-btn.active');
        if (activeBtn) applyFilter(activeBtn.getAttribute('data-filter'));
    }

    function renderVRSection() {
        var container = document.getElementById('vr-grid');
        if (!container) return;
        var lang = currentLang;
        container.innerHTML = vrData.map(function (v) {
            return '<a href="' + v.link + '" target="_blank" rel="noopener noreferrer" class="block bg-darkGray rounded-2xl overflow-hidden hover:bg-gray-800 transition group border border-gray-700" aria-label="' + v.name[lang] + ' - 360°">' +
                '<div class="relative h-56"><img src="' + v.image + '" alt="' + v.name[lang] + ' - 360° VR" class="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition duration-700" loading="lazy">' +
                '<div class="absolute inset-0 flex items-center justify-center"><div class="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition"><i class="fas fa-play text-xl text-white ml-1"></i></div></div></div>' +
                '<div class="p-6 text-start"><h4 class="font-bold text-xl text-white">' + v.name[lang] + '</h4></div></a>';
        }).join('');
    }

    function renderStats() {
        var container = document.getElementById('stats-grid');
        if (!container) return;
        var lang = currentLang;
        var stats = [
            { icon: 'fa-project-diagram', number: '3000+', text: translations[lang]['stats.projects'] },
            { icon: 'fa-globe-americas', number: '50+', text: translations[lang]['stats.countries'] },
            { icon: 'fa-users', number: '7000+', text: translations[lang]['stats.employees'] },
            { icon: 'fa-clock', number: '50+', text: translations[lang]['stats.years'] }
        ];
        container.innerHTML = stats.map(function (s) {
            return '<div class="text-center animate-on-scroll" data-animate="zoom-in">' +
                '<div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary"><i class="fas ' + s.icon + ' text-2xl"></i></div>' +
                '<div class="stat-number">' + s.number + '</div>' +
                '<p class="text-gray-400 mt-2 font-medium">' + s.text + '</p></div>';
        }).join('');
    }

    /* ==========================================
       MODAL SYSTEM
    ========================================== */
    function openProjectModal(projectId) {
        var project = projectsData.find(function (p) { return p.id === projectId; });
        if (!project) return;
        var lang = currentLang;
        var modal = document.getElementById('project-modal');
        var content = document.getElementById('modal-project-content');
        content.innerHTML =
            '<div class="flex justify-between items-start mb-6">' +
            '<div><span class="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2 inline-block">' + project[lang].category + '</span>' +
            '<h5 class="text-2xl font-bold text-black mt-2">' + project[lang].name + ' – ' + project[lang].location + '</h5></div>' +
            '<button onclick="closeModal()" class="modal-close-btn" aria-label="' + translations[lang]['modal.close'] + '"><i class="fas fa-times"></i></button></div>' +
            '<img src="' + project.image + '" alt="' + project[lang].name + '" class="w-full h-72 object-cover rounded-xl mb-6 shadow-sm">' +
            '<p class="text-darkGray leading-relaxed text-lg">' + project[lang].fullDesc + '</p>';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(function () { var c = modal.querySelector('.modal-close-btn'); if (c) c.focus(); }, 100);
    }

    function closeModal() {
        var modal = document.getElementById('project-modal');
        if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
    }

    /* ==========================================
       FILTER SYSTEM
    ========================================== */
    function applyFilter(filterValue) {
        document.querySelectorAll('.project-item').forEach(function (item) {
            var match = filterValue === 'all' || item.getAttribute('data-category') === filterValue;
            if (match) {
                item.style.display = '';
                item.animate([{ opacity: 0, transform: 'translateY(15px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 400, easing: 'ease-out', fill: 'forwards' });
            } else { item.style.display = 'none'; }
        });
    }

    function initFilters() {
        var container = document.getElementById('filter-buttons');
        if (!container) return;
        container.addEventListener('click', function (e) {
            var btn = e.target.closest('.filter-btn');
            if (!btn) return;
            container.querySelectorAll('.filter-btn').forEach(function (b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            applyFilter(btn.getAttribute('data-filter'));
        });
    }

    /* ==========================================
       SCROLL ANIMATIONS
    ========================================== */
    function initScrollAnimations() {
        if (scrollObserver) scrollObserver.disconnect();
        var elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
        if (!elements.length) return;
        scrollObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) { entry.target.classList.add('animated'); scrollObserver.unobserve(entry.target); }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        elements.forEach(function (el) { scrollObserver.observe(el); });
    }

    /* ==========================================
       ACCESSIBILITY
    ========================================== */
    function adjustFontSize(direction) {
        if (direction === 'up' && fontScale < 1.4) fontScale += 0.1;
        else if (direction === 'down' && fontScale > 0.8) fontScale -= 0.1;
        fontScale = Math.round(fontScale * 10) / 10;
        document.documentElement.style.setProperty('--font-scale', fontScale);
        localStorage.setItem('ka-font-scale', fontScale);
    }

    /* ==========================================
       UTILITIES
    ========================================== */
    function initProgressBar() {
        var bar = document.getElementById('progress-bar');
        if (!bar) return;
        window.addEventListener('scroll', function () {
            var s = window.scrollY, d = document.documentElement.scrollHeight - window.innerHeight;
            if (d > 0) bar.style.transform = 'scaleX(' + (s / d) + ')';
        }, { passive: true });
    }

    function initBackToTop() {
        var btn = document.getElementById('back-to-top');
        if (!btn) return;
        window.addEventListener('scroll', function () { btn.classList.toggle('visible', window.scrollY > 400); }, { passive: true });
        btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    function initMobileMenu() {
        var btn = document.getElementById('mobile-menu-btn');
        var menu = document.getElementById('mobile-menu');
        if (!btn || !menu) return;
        btn.addEventListener('click', function () {
            menu.classList.toggle('hidden');
            btn.setAttribute('aria-expanded', !menu.classList.contains('hidden'));
        });
    }

    function initNavScroll() {
        var nav = document.querySelector('.glass-nav');
        if (!nav) return;
        window.addEventListener('scroll', function () { nav.classList.toggle('scrolled', window.scrollY > 20); }, { passive: true });
    }

    function initKeyboard() {
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeModal();
                var mm = document.getElementById('mobile-menu');
                if (mm && !mm.classList.contains('hidden')) mm.classList.add('hidden');
            }
        });
        document.addEventListener('keydown', function (e) {
            if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('project-card')) { e.preventDefault(); e.target.click(); }
        });
    }

    function showToastMsg(message) {
        var existing = document.querySelector('.toast');
        if (existing) existing.remove();
        var toast = document.createElement('div');
        toast.className = 'toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
        document.body.appendChild(toast);
        setTimeout(function () { toast.classList.add('show'); }, 50);
        setTimeout(function () { toast.classList.remove('show'); setTimeout(function () { toast.remove(); }, 400); }, 2500);
    }

    function initModalBackdrop() {
        var modal = document.getElementById('project-modal');
        if (!modal) return;
        var backdrop = modal.querySelector('.modal-backdrop');
        if (backdrop) backdrop.addEventListener('click', closeModal);
    }

    /* ==========================================
       INITIALIZATION
    ========================================== */
    function init() {
        if (fontScale !== 1) document.documentElement.style.setProperty('--font-scale', fontScale);
        if (darkMode) applyDarkMode();

        setLanguage(currentLang, false);
        navigate(currentPage);

        initMobileMenu();
        initNavScroll();
        initProgressBar();
        initBackToTop();
        initFilters();
        initScrollAnimations();
        initKeyboard();
        initModalBackdrop();

        var fontUpBtn = document.getElementById('font-increase');
        var fontDownBtn = document.getElementById('font-decrease');
        var darkBtn = document.getElementById('dark-mode-toggle');

        if (fontUpBtn) fontUpBtn.addEventListener('click', function () { adjustFontSize('up'); });
        if (fontDownBtn) fontDownBtn.addEventListener('click', function () { adjustFontSize('down'); });
        if (darkBtn) darkBtn.addEventListener('click', toggleDarkMode);

        document.querySelectorAll('.lang-toggle').forEach(function (btn) { btn.addEventListener('click', toggleLanguage); });
    }

    document.addEventListener('DOMContentLoaded', init);

    window.navigate = navigate;
    window.openProjectModal = openProjectModal;
    window.closeModal = closeModal;
    window.toggleLanguage = toggleLanguage;
})();
