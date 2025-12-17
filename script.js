/*
   Balance4Profit Website JavaScript
   Handles interactive functionality including navigation, form handling, and user interactions
*/

// ===== DOCUMENT READY AND INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeContactForm();
    initializeSmoothScrolling();
    initializeAnimations();
    initializeFAQ();
    initializeLanguageSwitcher();
    console.log('Balance4Profit website initialized successfully');
});

// ===== MOBILE NAVIGATION FUNCTIONALITY =====
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Add active class to current nav item based on scroll position
    initializeNavHighlight();
}

// ===== NAVIGATION HIGHLIGHT ON SCROLL =====
function initializeNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Add CSS for active nav state if not already defined
    if (!document.querySelector('#nav-active-styles')) {
        const style = document.createElement('style');
        style.id = 'nav-active-styles';
        style.textContent = `
            .nav-link.active {
                color: var(--primary-color);
                background-color: var(--gray-100);
            }
        `;
        document.head.appendChild(style);
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Run once on load
}

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                return;
            }
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                
                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== LANGUAGE SWITCHER FUNCTIONALITY =====
function initializeLanguageSwitcher() {
    const langButton = document.getElementById('langButton');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.querySelector('.current-lang');
    const languageSwitcher = document.querySelector('.language-switcher');
    
    // Language translations
    const translations = {
        en: {
            home: 'Home',
            services: 'Services',
            about: 'About Us',
            contact: 'Contact',
            heroTitle: 'Professional Accounting Services You Can Trust',
            heroSubtitle: 'At Balance4Profit, we provide comprehensive accounting solutions that help businesses maintain compliance, improve efficiency, and build stakeholder confidence. Led by Nazgul Kadyralieva, we serve businesses across Kyrgyzstan.',
            ourServices: 'Our Services',
            servicesSubtitle: 'Comprehensive accounting solutions tailored to your business needs',
            getQuote: 'Get Quote',
            // Service Cards
            service1Title: 'Bookkeeping',
            service1Desc: 'Monthly bookkeeping, reconciliations, and financial statements prepared to local standards in Kyrgyzstan.',
            service2Title: 'Tax Preparation',
            service2Desc: 'Tax filings, VAT reporting, and tax optimization strategies for KIC and corporate taxpayers in Kyrgyzstan.',
            service3Title: 'Payroll Services',
            service3Desc: 'Payroll processing, social contributions, payslips and labor-report assistance for your business.',
            service4Title: 'Financial Advisory',
            service4Desc: 'Financial planning, cashflow forecasts and business registration support to help your business grow.',
            service5Title: 'Compliance Services',
            service5Desc: 'Ensure adherence to regulatory requirements and industry standards in Kyrgyzstan to minimize legal and financial risks.',
            service6Title: 'Financial Reporting',
            service6Desc: 'Comprehensive financial reports and analysis to help you understand your business performance.',
            // About Section
            aboutTitle: 'About Balance4Profit',
            aboutSubtitle: 'Your trusted partner in professional accounting services',
            owner: 'Owner',
            location: 'Location',
            locationValue: 'Bishkek, Kyrgyzstan (serving nationwide)',
            aboutDesc1: 'Balance4Profit helps businesses get their finances in order so owners can focus on growth. We prioritize clarity, compliance and friendly customer service. With years of experience in the accounting industry, Balance4Profit has built a reputation for delivering accurate, timely, and insightful accounting services.',
            aboutDesc2: 'We understand that every business is unique, which is why we tailor our approach to meet your specific needs and industry requirements. Our commitment to excellence and attention to detail ensures that you receive the highest quality service.',
            languages: 'Languages',
            languagesValue: 'Kyrgyz / Russian / English',
            whyChoose: 'Why choose us?',
            whyItem1: 'Local tax knowledge in Kyrgyzstan',
            whyItem2: 'Personalized service tailored to your needs',
            whyItem3: 'Secure handling of financial data',
            whyItem4: 'Professional certified accountant',
            // Contact Section
            contactTitle: 'Contact Us',
            contactSubtitle: 'Get in touch for professional accounting services',
            getInTouch: 'Get In Touch',
            readyToDiscuss: 'Ready to discuss your accounting needs? Contact us today for a consultation.',
            address: 'Address',
            addressValue: '103 Toktonaliyev street<br>Oktyabr City district<br>Bishkek 720044, Kyrgyzstan',
            phone: 'Phone',
            email: 'Email',
            businessHours: 'Business Hours',
            mondayFriday: 'Monday - Friday: 9:00 AM - 6:00 PM',
            followUs: 'Follow Us',
            // FAQ
            faqTitle: 'Frequently Asked Questions',
            faq1Q: 'What types of services do you provide?',
            faq1A: 'We provide comprehensive accounting services including bookkeeping, tax preparation, payroll services, financial advisory, compliance services, and financial reporting tailored to your specific business needs.',
            faq2Q: 'Do you work with small businesses?',
            faq2A: 'Absolutely! We work with businesses of all sizes, from small startups to larger corporations. Our services are scalable and tailored to meet your specific requirements and budget.',
            faq3Q: 'What languages do you speak?',
            faq3A: 'We provide services in Kyrgyz, Russian, and English to better serve businesses in Kyrgyzstan and international clients.',
            faq4Q: 'How do I get started?',
            faq4A: 'Simply contact us via phone, email, or WhatsApp to schedule a consultation. We\'ll discuss your business needs and propose a tailored plan that works for you.',
            faq5Q: 'Where are you located?',
            faq5A: 'Our office is located at 103 Toktonaliyev street, Oktyabr City district, Bishkek 720044, Kyrgyzstan. We serve businesses nationwide across Kyrgyzstan.',
            faq6Q: 'How much do your services cost?',
            faq6A: 'Our fees depend on the scope and complexity of your accounting needs. We offer competitive rates and provide detailed quotes after an initial consultation. Contact us for a personalized estimate.',
            // Footer
            footerDescription: 'Professional accounting services for businesses of all sizes in Kyrgyzstan. Trusted, reliable, and comprehensive accounting solutions. Owner: Nazgul Kadyralieva.',
            quickLinks: 'Quick Links',
            contactInfo: 'Contact Info',
            footerAddress: '103 Toktonaliyev street, Bishkek',
            allRightsReserved: 'All rights reserved. Owner: Nazgul Kadyralieva',
            privacyPolicy: 'Privacy Policy',
            termsOfService: 'Terms of Service',
            langCode: 'EN'
        },
        ru: {
            home: 'Главная',
            services: 'Услуги',
            about: 'О нас',
            contact: 'Контакты',
            heroTitle: 'Профессиональные бухгалтерские услуги, которым можно доверять',
            heroSubtitle: 'Balance4Profit предоставляет комплексные бухгалтерские решения, которые помогают компаниям соблюдать требования законодательства, повышать эффективность и укреплять доверие заинтересованных сторон. Под руководством Назгуль Кадыралиевой мы обслуживаем предприятия по всему Кыргызстану.',
            ourServices: 'Наши услуги',
            servicesSubtitle: 'Комплексные бухгалтерские решения, адаптированные к потребностям вашего бизнеса',
            getQuote: 'Получить расчет',
            // Service Cards
            service1Title: 'Бухгалтерский учет',
            service1Desc: 'Ежемесячный бухгалтерский учет, сверки и финансовая отчетность, подготовленная в соответствии с местными стандартами Кыргызстана.',
            service2Title: 'Налоговая подготовка',
            service2Desc: 'Налоговые декларации, отчетность по НДС и стратегии налоговой оптимизации для ИП и корпоративных налогоплательщиков в Кыргызстане.',
            service3Title: 'Расчет заработной платы',
            service3Desc: 'Обработка заработной платы, социальные отчисления, расчетные листки и помощь в трудовой отчетности для вашего бизнеса.',
            service4Title: 'Финансовый консалтинг',
            service4Desc: 'Финансовое планирование, прогнозы денежных потоков и поддержка регистрации бизнеса для роста вашей компании.',
            service5Title: 'Услуги по соблюдению требований',
            service5Desc: 'Обеспечение соблюдения нормативных требований и отраслевых стандартов в Кыргызстане для минимизации юридических и финансовых рисков.',
            service6Title: 'Финансовая отчетность',
            service6Desc: 'Комплексные финансовые отчеты и анализ для понимания эффективности вашего бизнеса.',
            // About Section
            aboutTitle: 'О Balance4Profit',
            aboutSubtitle: 'Ваш надежный партнер в профессиональных бухгалтерских услугах',
            owner: 'Владелец',
            location: 'Местоположение',
            locationValue: 'Бишкек, Кыргызстан (обслуживание по всей стране)',
            aboutDesc1: 'Balance4Profit помогает предприятиям навести порядок в финансах, чтобы владельцы могли сосредоточиться на росте. Мы уделяем приоритетное внимание ясности, соблюдению требований и дружелюбному обслуживанию клиентов. Благодаря многолетнему опыту работы в области бухгалтерского учета, Balance4Profit заработал репутацию за предоставление точных, своевременных и содержательных бухгалтерских услуг.',
            aboutDesc2: 'Мы понимаем, что каждый бизнес уникален, поэтому мы адаптируем наш подход в соответствии с вашими конкретными потребностями и отраслевыми требованиями. Наша приверженность к совершенству и внимание к деталям гарантируют, что вы получите услуги высочайшего качества.',
            languages: 'Языки',
            languagesValue: 'Кыргызский / Русский / Английский',
            whyChoose: 'Почему выбирают нас?',
            whyItem1: 'Знание местного налогового законодательства Кыргызстана',
            whyItem2: 'Персонализированное обслуживание под ваши нужды',
            whyItem3: 'Безопасная обработка финансовых данных',
            whyItem4: 'Профессиональный сертифицированный бухгалтер',
            // Contact Section
            contactTitle: 'Свяжитесь с нами',
            contactSubtitle: 'Свяжитесь с нами для получения профессиональных бухгалтерских услуг',
            getInTouch: 'Связаться с нами',
            readyToDiscuss: 'Готовы обсудить ваши бухгалтерские потребности? Свяжитесь с нами сегодня для консультации.',
            address: 'Адрес',
            addressValue: 'ул. Токтоналиева 103<br>Октябрьский район<br>Бишкек 720044, Кыргызстан',
            phone: 'Телефон',
            email: 'Эл. почта',
            businessHours: 'Часы работы',
            mondayFriday: 'Понедельник - Пятница: 9:00 - 18:00',
            followUs: 'Подписывайтесь на нас',
            // FAQ
            faqTitle: 'Часто задаваемые вопросы',
            faq1Q: 'Какие виды услуг вы предоставляете?',
            faq1A: 'Мы предоставляем комплексные бухгалтерские услуги, включая бухгалтерский учет, налоговую подготовку, расчет заработной платы, финансовый консалтинг, услуги по соблюдению требований и финансовую отчетность, адаптированные к конкретным потребностям вашего бизнеса.',
            faq2Q: 'Вы работаете с малым бизнесом?',
            faq2A: 'Конечно! Мы работаем с предприятиями любого размера, от небольших стартапов до крупных корпораций. Наши услуги масштабируемы и адаптированы к вашим конкретным требованиям и бюджету.',
            faq3Q: 'На каких языках вы говорите?',
            faq3A: 'Мы предоставляем услуги на кыргызском, русском и английском языках для лучшего обслуживания предприятий в Кыргызстане и международных клиентов.',
            faq4Q: 'Как начать работу?',
            faq4A: 'Просто свяжитесь с нами по телефону, электронной почте или WhatsApp, чтобы назначить консультацию. Мы обсудим потребности вашего бизнеса и предложим индивидуальный план, который вам подходит.',
            faq5Q: 'Где вы находитесь?',
            faq5A: 'Наш офис находится по адресу: ул. Токтоналиева 103, Октябрьский район, Бишкек 720044, Кыргызстан. Мы обслуживаем предприятия по всему Кыргызстану.',
            faq6Q: 'Сколько стоят ваши услуги?',
            faq6A: 'Наши тарифы зависят от объема и сложности ваших бухгалтерских потребностей. Мы предлагаем конкурентоспособные цены и предоставляем подробные расчеты после первичной консультации. Свяжитесь с нами для персонализированной оценки.',
            // Footer
            footerDescription: 'Профессиональные бухгалтерские услуги для предприятий любого размера в Кыргызстане. Надежные и комплексные бухгалтерские решения. Владелец: Назгуль Кадыралиева.',
            quickLinks: 'Быстрые ссылки',
            contactInfo: 'Контактная информация',
            footerAddress: 'ул. Токтоналиева 103, Бишкек',
            allRightsReserved: 'Все права защищены. Владелец: Назгуль Кадыралиева',
            privacyPolicy: 'Политика конфиденциальности',
            termsOfService: 'Условия обслуживания',
            langCode: 'RU'
        },
        ky: {
            home: 'Башкы бет',
            services: 'Кызматтар',
            about: 'Биз жөнүндө',
            contact: 'Байланыш',
            heroTitle: 'Ишенимдүү кесиптик бухгалтердик кызматтар',
            heroSubtitle: 'Balance4Profit ишканаларга мыйзамдарды сактоого, натыйжалуулукту жогорулатууга жана кызыкдар тараптардын ишенимин бекемдөөгө жардам берген комплекстүү бухгалтердик чечимдерди берет. Назгул Кадыралиеванын жетекчилигинде биз Кыргызстан боюнча ишканаларга кызмат көрсөтөбүз.',
            ourServices: 'Биздин кызматтар',
            servicesSubtitle: 'Бизнесиңиздин муктаждыктарына ылайыкталган комплекстүү бухгалтердик чечимдер',
            getQuote: 'Эсептөө алуу',
            // Service Cards
            service1Title: 'Бухгалтердик эсеп',
            service1Desc: 'Ай сайынкы бухгалтердик эсеп, салыштыруулар жана Кыргызстандын жергиликтүү стандарттарына ылайык финансылык отчеттор.',
            service2Title: 'Салык даярдоо',
            service2Desc: 'Салык декларациялары, КНС отчеттору жана Кыргызстандагы ЖИК жана корпоративдик салык төлөөчүлөр үчүн салык оптималдаштыруу стратегиялары.',
            service3Title: 'Эмгек акы эсептөө',
            service3Desc: 'Эмгек акы эсептөө, социалдык салымдар, эсептөө барактары жана эмгек отчетторуна жардам.',
            service4Title: 'Финансылык консалтинг',
            service4Desc: 'Финансылык пландаштыруу, акча агымынын болжолдору жана бизнести өнүктүрүү үчүн бизнести каттоого колдоо.',
            service5Title: 'Талаптарды аткаруу боюнча кызматтар',
            service5Desc: 'Юридикалык жана финансылык тобокелдиктерди азайтуу үчүн Кыргызстандагы жөнгө салуучу талаптарга жана тармактык стандарттарга ылайык келүүнү камсыз кылуу.',
            service6Title: 'Финансылык отчеттуулук',
            service6Desc: 'Бизнесиңиздин иштешин түшүнүү үчүн комплекстүү финансылык отчеттор жана анализ.',
            // About Section
            aboutTitle: 'Balance4Profit жөнүндө',
            aboutSubtitle: 'Кесиптик бухгалтердик кызматтарда сиздин ишенимдүү өнөктөшүңүз',
            owner: 'Ээси',
            location: 'Жайгашкан жери',
            locationValue: 'Бишкек, Кыргызстан (бүткүл өлкө боюнча кызмат)',
            aboutDesc1: 'Balance4Profit ишканаларга финансыларын тартипке келтирүүгө жардам берет, ошондо ээлери өсүүгө көңүл буруу мүмкүнчүлүгүн алат. Биз ачык-айкындуулукту, талаптарды сактоону жана достук тейлөөнү артыкчылыкка коёбуз. Бухгалтердик эсеп тармагында көп жылдык тажрыйбага ээ болгон Balance4Profit так, өз убагында жана маанилүү бухгалтердик кызматтарды көрсөтүү боюнча атак-даңкка ээ болгон.',
            aboutDesc2: 'Биз ар бир бизнес уникалдуу экенин түшүнөбүз, ошондуктан биз сиздин конкреттүү муктаждыктарыңызга жана тармактык талаптарга ылайыкталган ыкманы колдонобуз. Мыктылыкка умтулуубуз жана деталдарга көңүл бурушубуз сизге эң жогорку сапаттагы кызматты алууңузду камсыздайт.',
            languages: 'Тилдер',
            languagesValue: 'Кыргызча / Орусча / Англисче',
            whyChoose: 'Эмне үчүн бизди тандайсыз?',
            whyItem1: 'Кыргызстандын жергиликтүү салык мыйзамын билүү',
            whyItem2: 'Сиздин муктаждыктарыңызга ылайыкталган жекелештирилген кызмат',
            whyItem3: 'Финансылык маалыматтарды коопсуз иштетүү',
            whyItem4: 'Кесиптик сертификатталган бухгалтер',
            // Contact Section
            contactTitle: 'Биз менен байланышыңыз',
            contactSubtitle: 'Кесиптик бухгалтердик кызматтар үчүн биз менен байланышыңыз',
            getInTouch: 'Байланышуу',
            readyToDiscuss: 'Бухгалтердик муктаждыктарыңызды талкуулоого даярсызбы? Консультация алуу үчүн бүгүн эле биз менен байланышыңыз.',
            address: 'Дарек',
            addressValue: 'Токтоналиев көчөсү 103<br>Октябрь шаар району<br>Бишкек 720044, Кыргызстан',
            phone: 'Телефон',
            email: 'Электрондук почта',
            businessHours: 'Иш убактысы',
            mondayFriday: 'Дүйшөмбү - Жума: 9:00 - 18:00',
            followUs: 'Бизди ээрчиңиз',
            // FAQ
            faqTitle: 'Көп берилүүчү суроолор',
            faq1Q: 'Сиз кандай түрдөгү кызматтарды көрсөтөсүз?',
            faq1A: 'Биз бухгалтердик эсепти, салык даярдоону, эмгек акы эсептөөнү, финансылык консалтингди, талаптарды аткаруу боюнча кызматтарды жана сиздин бизнесиңиздин конкреттүү муктаждыктарына ылайыкталган финансылык отчеттуулукту камтыган комплекстүү бухгалтердик кызматтарды көрсөтөбүз.',
            faq2Q: 'Сиз чакан бизнес менен иштейсизби?',
            faq2A: 'Албетте! Биз чакан стартаптардан баштап чоң корпорацияларга чейин бардык өлчөмдөгү ишканалар менен иштейбиз. Биздин кызматтар масштабдуу жана сиздин конкреттүү талаптарыңызга жана бюджетиңизге ылайыкталган.',
            faq3Q: 'Кайсыл тилдерде сүйлөйсүз?',
            faq3A: 'Биз Кыргызстандагы ишканаларды жана эл аралык кардарларды жакшыраак тейлөө үчүн кыргызча, орусча жана англисче кызматтарды көрсөтөбүз.',
            faq4Q: 'Кантип баштоого болот?',
            faq4A: 'Консультация макулдашуу үчүн телефон, электрондук почта же WhatsApp аркылуу биз менен байланышыңыз. Биз сиздин бизнесиңиздин муктаждыктарын талкуулайбыз жана сизге ылайыктуу жекелештирилген планды сунуштайбыз.',
            faq5Q: 'Сиз кайда жайгашкансыз?',
            faq5A: 'Биздин кеңсе Токтоналиев көчөсү 103, Октябрь шаар району, Бишкек 720044, Кыргызстан дарегинде жайгашкан. Биз Кыргызстан боюнча ишканаларга кызмат көрсөтөбүз.',
            faq6Q: 'Сиздин кызматтарыңыз канча турат?',
            faq6A: 'Биздин тарифтер сиздин бухгалтердик муктаждыктарыңыздын көлөмүнө жана татаалдыгына жараша болот. Биз атаандаш баалардыбыз жана алгачкы консультациядан кийин деталдуу эсептөөлөрдү беребиз. Жекелештирилген баа үчүн биз менен байланышыңыз.',
            // Footer
            footerDescription: 'Кыргызстандагы ар кандай өлчөмдөгү ишканалар үчүн кесиптик бухгалтердик кызматтар. Ишенимдүү жана комплекстүү бухгалтердик чечимдер. Ээси: Назгул Кадыралиева.',
            quickLinks: 'Тез шилтемелер',
            contactInfo: 'Байланыш маалыматтары',
            footerAddress: 'Токтоналиев көчөсү 103, Бишкек',
            allRightsReserved: 'Бардык укуктар корголгон. Ээси: Назгул Кадыралиева',
            privacyPolicy: 'Купуялык саясаты',
            termsOfService: 'Кызмат көрсөтүү шарттары',
            langCode: 'KY'
        }
    };
    
    // Get current language from localStorage or default to English
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Initialize language switcher
    if (langButton && langDropdown && languageSwitcher) {
        // Set initial language
        updateLanguage(currentLang);
        
        // Toggle dropdown
        langButton.addEventListener('click', function(e) {
            e.stopPropagation();
            languageSwitcher.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = languageSwitcher.classList.contains('active');
            langButton.setAttribute('aria-expanded', isExpanded);
        });
        
        // Keyboard navigation
        langButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                langButton.click();
            } else if (e.key === 'Escape') {
                languageSwitcher.classList.remove('active');
                langButton.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Handle language selection
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const selectedLang = this.getAttribute('data-lang');
                if (selectedLang !== currentLang) {
                    currentLang = selectedLang;
                    updateLanguage(selectedLang);
                    localStorage.setItem('preferredLanguage', selectedLang);
                }
                
                languageSwitcher.classList.remove('active');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!languageSwitcher.contains(event.target)) {
                languageSwitcher.classList.remove('active');
            }
        });
    }
    
    function updateLanguage(lang) {
        const translation = translations[lang];
        if (!translation) return;
        
        // Update current language display
        if (currentLangSpan) {
            currentLangSpan.textContent = translation.langCode;
        }
        
        // Update navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        const navTargets = ['home', 'services', 'about', 'contact'];
        
        navLinks.forEach((link, index) => {
            if (navTargets[index] && translation[navTargets[index]]) {
                link.style.opacity = '0.7';
                setTimeout(() => {
                    link.textContent = translation[navTargets[index]];
                    link.style.opacity = '1';
                }, 150);
            }
        });
        
        // Update hero section
        const heroTitle = document.querySelector('.hero-title');
        const heroDescription = document.querySelector('.hero-description');
        
        if (heroTitle && translation.heroTitle) {
            heroTitle.textContent = translation.heroTitle;
        }
        
        if (heroDescription && translation.heroSubtitle) {
            heroDescription.textContent = translation.heroSubtitle;
        }
        
        // Update hero buttons
        const primaryBtn = document.querySelector('.hero-buttons .btn-primary');
        const secondaryBtn = document.querySelector('.hero-buttons .btn-secondary');
        
        if (primaryBtn && translation.ourServices) {
            primaryBtn.textContent = translation.ourServices;
        }
        
        if (secondaryBtn && translation.getQuote) {
            secondaryBtn.textContent = translation.getQuote;
        }
        
        // Update Services section header
        const servicesHeader = document.querySelector('.services .section-header h2');
        const servicesSubheader = document.querySelector('.services .section-header p');
        
        if (servicesHeader && translation.ourServices) {
            servicesHeader.textContent = translation.ourServices;
        }
        
        if (servicesSubheader && translation.servicesSubtitle) {
            servicesSubheader.textContent = translation.servicesSubtitle;
        }
        
        // Update Service Cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            const title = card.querySelector('h3');
            const desc = card.querySelector('p');
            const serviceNum = index + 1;
            
            if (title && translation[`service${serviceNum}Title`]) {
                title.textContent = translation[`service${serviceNum}Title`];
            }
            
            if (desc && translation[`service${serviceNum}Desc`]) {
                desc.textContent = translation[`service${serviceNum}Desc`];
            }
        });
        
        // Update About section header
        const aboutHeader = document.querySelector('.about .section-header h2');
        const aboutSubheader = document.querySelector('.about .section-header p');
        
        if (aboutHeader && translation.aboutTitle) {
            aboutHeader.textContent = translation.aboutTitle;
        }
        
        if (aboutSubheader && translation.aboutSubtitle) {
            aboutSubheader.textContent = translation.aboutSubtitle;
        }
        
        // Update About description
        const aboutDescPs = document.querySelectorAll('.about-description p');
        if (aboutDescPs.length >= 5) {
            // Update Owner label
            if (translation.owner) {
                aboutDescPs[0].innerHTML = `<strong>${translation.owner}:</strong> Nazgul Kadyralieva`;
            }
            // Update Location label
            if (translation.location && translation.locationValue) {
                aboutDescPs[1].innerHTML = `<strong>${translation.location}:</strong> ${translation.locationValue}`;
            }
            // Update main description paragraphs
            if (translation.aboutDesc1) {
                aboutDescPs[2].textContent = translation.aboutDesc1;
            }
            if (translation.aboutDesc2) {
                aboutDescPs[3].textContent = translation.aboutDesc2;
            }
            // Update Languages
            if (translation.languages && translation.languagesValue) {
                aboutDescPs[4].innerHTML = `<em>${translation.languages}:</em> ${translation.languagesValue}`;
            }
        }
        
        // Update "Why choose us?" heading and list
        const whyChooseHeading = document.querySelector('.about-description h4');
        if (whyChooseHeading && translation.whyChoose) {
            whyChooseHeading.textContent = translation.whyChoose;
        }
        
        const whyChooseList = document.querySelectorAll('.about-description ul li');
        whyChooseList.forEach((item, index) => {
            const itemNum = index + 1;
            if (translation[`whyItem${itemNum}`]) {
                item.textContent = translation[`whyItem${itemNum}`];
            }
        });
        
        // Update Contact section header
        const contactHeader = document.querySelector('.contact .section-header h2');
        const contactSubheader = document.querySelector('.contact .section-header p');
        const contactGetInTouch = document.querySelector('.contact-info h3');
        const contactReady = document.querySelector('.contact-info > p');
        
        if (contactHeader && translation.contactTitle) {
            contactHeader.textContent = translation.contactTitle;
        }
        
        if (contactSubheader && translation.contactSubtitle) {
            contactSubheader.textContent = translation.contactSubtitle;
        }
        
        if (contactGetInTouch && translation.getInTouch) {
            contactGetInTouch.textContent = translation.getInTouch;
        }
        
        if (contactReady && translation.readyToDiscuss) {
            contactReady.textContent = translation.readyToDiscuss;
        }
        
        // Update contact details labels and address
        const contactLabels = document.querySelectorAll('.contact-text h4');
        const labelKeys = ['address', 'phone', 'email', 'businessHours'];
        
        contactLabels.forEach((label, index) => {
            if (labelKeys[index] && translation[labelKeys[index]]) {
                label.textContent = translation[labelKeys[index]];
            }
        });
        
        // Update address value
        const addressP = document.querySelector('.contact-item:first-child .contact-text p');
        if (addressP && translation.addressValue) {
            addressP.innerHTML = translation.addressValue;
        }
        
        // Update business hours value
        const hoursP = document.querySelector('.contact-item:nth-child(4) .contact-text p');
        if (hoursP && translation.mondayFriday) {
            hoursP.textContent = translation.mondayFriday;
        }
        
        // Update social links
        const socialHeading = document.querySelector('.social-links h4');
        if (socialHeading && translation.followUs) {
            socialHeading.textContent = translation.followUs;
        }
        
        // Update FAQ section
        const faqHeading = document.querySelector('.contact-faq h3');
        if (faqHeading && translation.faqTitle) {
            faqHeading.textContent = translation.faqTitle;
        }
        
        // Update FAQ items
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach((item, index) => {
            const faqNum = index + 1;
            const question = item.querySelector('.faq-question h4');
            const answer = item.querySelector('.faq-answer p');
            
            if (question && translation[`faq${faqNum}Q`]) {
                question.textContent = translation[`faq${faqNum}Q`];
            }
            
            if (answer && translation[`faq${faqNum}A`]) {
                answer.textContent = translation[`faq${faqNum}A`];
            }
        });
        
        // Update Footer
        const footerSections = document.querySelectorAll('.footer-section');
        
        footerSections.forEach((section, index) => {
            const heading = section.querySelector('h3, h4');
            if (index === 0) {
                // Company info section
                const description = section.querySelector('p');
                if (description && translation.footerDescription) {
                    description.textContent = translation.footerDescription;
                }
            } else if (index === 1 && heading) {
                // Quick Links
                if (translation.quickLinks) {
                    heading.textContent = translation.quickLinks;
                }
                const links = section.querySelectorAll('.footer-links a');
                const linkKeys = ['home', 'services', 'about', 'contact'];
                links.forEach((link, i) => {
                    if (linkKeys[i] && translation[linkKeys[i]]) {
                        link.textContent = translation[linkKeys[i]];
                    }
                });
            } else if (index === 2 && heading) {
                // Services section in footer
                if (translation.services) {
                    heading.textContent = translation.services;
                }
                const links = section.querySelectorAll('.footer-links a');
                const serviceKeys = ['service1Title', 'service2Title', 'service3Title', 'service4Title'];
                links.forEach((link, i) => {
                    if (serviceKeys[i] && translation[serviceKeys[i]]) {
                        link.textContent = translation[serviceKeys[i]];
                    }
                });
            } else if (index === 3 && heading) {
                // Contact Info
                if (translation.contactInfo) {
                    heading.textContent = translation.contactInfo;
                }
                // Update footer address
                const footerAddressP = section.querySelector('.footer-contact p:first-child');
                if (footerAddressP && translation.footerAddress) {
                    footerAddressP.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translation.footerAddress}`;
                }
            }
        });
        
        // Update footer copyright
        const footerBottom = document.querySelector('.footer-bottom p');
        if (footerBottom && translation.allRightsReserved) {
            const year = new Date().getFullYear();
            const privacyText = translation.privacyPolicy || 'Privacy Policy';
            const termsText = translation.termsOfService || 'Terms of Service';
            
            footerBottom.innerHTML = `&copy; ${year} Balance4Profit. ${translation.allRightsReserved} | 
               <a href="privacy.html">${privacyText}</a> | 
               <a href="#">${termsText}</a>`;
        }
        
        // Update page title
        if (translation.heroTitle) {
            document.title = `Balance4Profit - ${translation.heroTitle}`;
        }
        
        // Update active state in dropdown
        langOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
        
        // Update document language attribute
        document.documentElement.setAttribute('lang', lang);
    }
}

// ===== CONTACT FORM HANDLING =====
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });

        // Add real-time validation
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

// ===== FORM VALIDATION =====
function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    clearFieldError(field);

    // Required field validation
    if (field.hasAttribute('required') && !fieldValue) {
        isValid = false;
        errorMessage = `${getFieldLabel(field)} is required.`;
    }
    
    // Email validation
    else if (fieldName === 'email' && fieldValue) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fieldValue)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
    }
    
    // Phone validation (optional but if provided, should be valid)
    else if (fieldName === 'phone' && fieldValue) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(fieldValue.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number.';
        }
    }

    // Show error if validation failed
    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

// ===== FORM HELPER FUNCTIONS =====
function getFieldLabel(field) {
    const label = field.parentElement.querySelector('label');
    return label ? label.textContent.replace('*', '').trim() : field.name;
}

function showFieldError(field, message) {
    field.style.borderColor = 'var(--danger-color)';
    
    // Remove existing error message
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Add error message
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = 'var(--danger-color)';
    errorElement.style.fontSize = 'var(--font-size-sm)';
    errorElement.style.marginTop = 'var(--spacing-1)';
    errorElement.textContent = message;
    
    field.parentElement.appendChild(errorElement);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    const errorMessage = field.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// ===== FORM SUBMISSION HANDLER =====
function handleFormSubmission(form) {
    const formData = new FormData(form);
    const formObject = {};
    let isFormValid = true;

    // Validate all fields
    const formInputs = form.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
        formObject[input.name] = input.value;
    });

    if (!isFormValid) {
        showFormMessage('Please correct the errors above and try again.', 'error');
        return;
    }

    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        try {
            // TODO: Replace this with actual form submission to your server
            console.log('Form submission data:', formObject);
            
            // For now, show success message
            showFormMessage('Thank you for your message! We will get back to you within 24 hours.', 'success');
            form.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            showFormMessage('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
        } finally {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    }, 2000);
}

// ===== FORM MESSAGE DISPLAY =====
function showFormMessage(message, type) {
    const form = document.getElementById('contact-form');
    
    // Remove existing message
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = 'form-message';
    messageElement.style.padding = 'var(--spacing-4)';
    messageElement.style.marginBottom = 'var(--spacing-4)';
    messageElement.style.borderRadius = 'var(--border-radius)';
    messageElement.style.fontSize = 'var(--font-size-sm)';
    messageElement.style.fontWeight = '500';
    messageElement.textContent = message;

    if (type === 'success') {
        messageElement.style.backgroundColor = '#d1fae5';
        messageElement.style.color = '#065f46';
        messageElement.style.border = '1px solid #a7f3d0';
    } else {
        messageElement.style.backgroundColor = '#fee2e2';
        messageElement.style.color = '#991b1b';
        messageElement.style.border = '1px solid #fca5a5';
    }

    // Insert message at the beginning of the form
    form.insertBefore(messageElement, form.firstChild);

    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            if (messageElement && messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }
}

// ===== SCROLL ANIMATIONS =====
function initializeAnimations() {
    // Simple intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe service cards and other elements for animation
    const animateElements = document.querySelectorAll('.service-card, .about-content, .contact-form, .stat-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Add CSS for animations if not already defined
    if (!document.querySelector('#animation-styles')) {
        const style = document.createElement('style');
        style.id = 'animation-styles';
        style.textContent = `
            .service-card,
            .about-content,
            .contact-form,
            .stat-item {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            
            .animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            @media (prefers-reduced-motion: reduce) {
                .service-card,
                .about-content,
                .contact-form,
                .stat-item {
                    opacity: 1;
                    transform: none;
                    transition: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== FAQ ACCORDION FUNCTIONALITY =====
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        if (question && answer && icon) {
            // Initially hide all answers
            answer.style.maxHeight = '0';
            answer.style.overflow = 'hidden';
            answer.style.transition = 'max-height 0.4s ease-out, padding 0.4s ease-out';
            answer.style.padding = '0 20px';
            
            // Add click event to question
            question.addEventListener('click', function() {
                const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-question i');
                        
                        if (otherAnswer && otherIcon) {
                            otherAnswer.style.maxHeight = '0';
                            otherAnswer.style.padding = '0 20px';
                            otherIcon.classList.remove('fa-minus');
                            otherIcon.classList.add('fa-plus');
                            otherItem.classList.remove('active');
                        }
                    }
                });
                
                // Toggle current item
                if (isOpen) {
                    // Close current item
                    answer.style.maxHeight = '0';
                    answer.style.padding = '0 20px';
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                    item.classList.remove('active');
                } else {
                    // Open current item - first set padding, then calculate height
                    answer.style.padding = '16px 20px';
                    answer.style.maxHeight = (answer.scrollHeight + 40) + 'px'; // Add extra space for padding
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                    item.classList.add('active');
                    
                    // Double-check height after a brief delay to ensure content is measured properly
                    setTimeout(() => {
                        if (item.classList.contains('active')) {
                            answer.style.maxHeight = (answer.scrollHeight + 40) + 'px';
                        }
                    }, 50);
                }
            });
            
            // Add hover effect and cursor pointer
            question.style.cursor = 'pointer';
            question.style.transition = 'background-color 0.2s ease';
            
            question.addEventListener('mouseenter', function() {
                if (!item.classList.contains('active')) {
                    question.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                }
            });
            
            question.addEventListener('mouseleave', function() {
                question.style.backgroundColor = '';
            });
        }
    });

    // Add CSS styles for FAQ if not already defined
    if (!document.querySelector('#faq-styles')) {
        const style = document.createElement('style');
        style.id = 'faq-styles';
        style.textContent = `
            .faq-item {
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                margin-bottom: 12px;
                overflow: hidden;
            }
            
            .faq-question {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 20px;
                background-color: #f9fafb;
                border-bottom: 1px solid transparent;
                transition: all 0.2s ease;
            }
            
            .faq-question:hover {
                background-color: #f3f4f6 !important;
            }
            
            .faq-question h4 {
                margin: 0;
                font-size: 16px;
                font-weight: 600;
                color: #374151;
            }
            
            .faq-question i {
                color: #6b7280;
                font-size: 14px;
                transition: transform 0.2s ease, color 0.2s ease;
            }
            
            .faq-item.active .faq-question {
                background-color: #eff6ff;
                border-bottom-color: #e5e7eb;
            }
            
            .faq-item.active .faq-question h4 {
                color: #1d4ed8;
            }
            
            .faq-item.active .faq-question i {
                color: #1d4ed8;
                transform: rotate(180deg);
            }
            
            .faq-answer {
                background-color: white;
                box-sizing: border-box;
            }
            
            .faq-answer p {
                margin: 0;
                color: #6b7280;
                line-height: 1.7;
                font-size: 15px;
                word-wrap: break-word;
                overflow-wrap: break-word;
            }
            
            .contact-faq {
                flex: 1;
                max-width: 100%;
            }
            
            .contact-faq h3 {
                color: #1f2937;
                margin-bottom: 24px;
                font-size: 24px;
                font-weight: 700;
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('keydown', function(e) {
    // Handle escape key to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ===== PERFORMANCE OPTIMIZATIONS =====

// Optimize scroll event listener
const optimizedScrollHandler = throttle(function() {
    // Handle scroll-based functionality here if needed
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error occurred:', e.error);
    // You could send error reports to your analytics service here
});

// ===== ANALYTICS AND TRACKING =====
function trackEvent(eventName, eventData = {}) {
    // TODO: Implement analytics tracking
    // Example: Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', eventName, eventData);
    
    // Example implementation:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// Track form submissions
document.addEventListener('submit', function(e) {
    if (e.target.id === 'contact-form') {
        trackEvent('form_submission', {
            form_name: 'contact_form',
            page_location: window.location.href
        });
    }
});

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        trackEvent('button_click', {
            button_text: e.target.textContent.trim(),
            button_location: e.target.closest('section')?.id || 'unknown'
        });
    }
});

// ===== PLACEHOLDER IMAGE HANDLER =====
// Handle missing images gracefully
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a placeholder if image fails to load
            this.style.backgroundColor = 'var(--gray-100)';
            this.style.color = 'var(--gray-500)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.minHeight = '200px';
            this.innerHTML = '<span>Image Placeholder</span>';
            this.alt = 'Image placeholder - please add your image';
        });
    });
});

// ===== EXPORT FOR TESTING (if needed) =====
// Uncomment if you need to test functions individually
// window.ProgressAudit = {
//     validateField,
//     handleFormSubmission,
//     trackEvent
// };