// Small interactive behaviors: nav toggle, accordion, contact form => mailto
document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = y;

  // --- i18n: translations for Kyrgyz (ky) and Russian (ru)
  const translations = {
    ky: {
      'nav.services': 'Кызматтар',
      'nav.about': 'Биз жөнүндө',
      'nav.contact': 'Байланыш',
      'hero.title': 'Кыргызстандын ишканалары үчүн бухгалтердик жана салык кызматы',
      'hero.lead': 'Надежное ведение учета, подготовка налоговой отчетности и финансовые консультации от Назгул Кадыралиевой и команды Balance4Profit.',
      'hero.cta1': 'Кеңеш алуу',
      'hero.cta2': 'Кызматтарга көз жүгүртүү',
      'services.title': 'Биздин кызматтар',
      'services.lead': 'Кыргызстандагы кичи жана орто бизнес үчүн ыңгайлаштырылган кызматтар.',
      'services.bookkeeping.title': 'Бухгалтерия',
      'services.bookkeeping.desc': 'Айлык бухгалтерия, тызимдештирүүлөр жана жергиликтүү стандарттарга ылайык даярдалган отчеттор.',
      'services.tax.title': 'Салыктык документтерди даярдоо',
      'services.tax.desc': 'Салык декларациялары, КҚС отчеттуулугу жана салык оптимизациясы.',
      'services.payroll.title': 'Эмгек акы',
      'services.payroll.desc': 'Эмгек акы эсептөө, социалдык катышуулар жана эмгек отчетторуна жардам.',
      'services.advisory.title': 'Кеңешчилик',
      'services.advisory.desc': 'Каржылык пландаштыруу, накталай акча агымынын прогноздору жана бизнес каттоо боюнча жардам.',
      'services.more.title': 'Процесси тууралуу кенен',
      'services.more.desc': 'Биз ишке киришүү үчүн чакыруу менен баштайбыз, документтерди карап чыгып, айлык/кварталдык/жылдык план сунуштайбыз. Баа транзакциялардын көлөмүнө жараша болот.',
      'about.title': 'Balance4Profit жөнүндө',
      'about.owner.label': 'Ээси:',
      'about.owner.name': 'Назгул Кадыралиева',
      'about.location.label': 'Орду:',
      'about.location.value': 'Бишкек, Кыргызстан (өлкөгө кызмат)',
      'about.desc': 'Balance4Profit бизнес ээлерине каржыларын тартипке келтирүүгө жардам берет, ошондо алар өсүүгө көңүл бура алышат. Биз ачыктыкты, мыйзамдуулукту жана жылуу мамилени артык көрөбүз.',
      'about.languages.label': 'Тилдер:',
      'about.languages.value': 'Кыргызча / Орусча / Англисче',
      'about.why.title': 'Эмне үчүн бизди тандаңыз?',
      'about.why.item1': 'Жергиликтүү салык билими',
      'about.why.item2': 'Жеке мамиле',
      'about.why.item3': 'Каржылык маалыматты коопсуз иштетүү',
      'contact.title': 'Байланыш',
      'contact.lead': 'Келишип сүйлөшөбүзбү? Хабар жазыңыз же консультацияга жазылыңыз.',
      'contact.form.name.label': 'Сиздин атыңыз',
      'contact.form.name.placeholder': 'Толук аты-жону',
      'contact.form.email.label': 'Электрондук почта',
      'contact.form.email.placeholder': 'сиз@мисал.ком',
      'contact.form.phone.label': 'Телефон',
      'contact.form.phone.placeholder': '+996 7XX XXX XXX',
      'contact.form.message.label': 'Хабар',
      'contact.form.message.placeholder': 'Сиздин муктаждык жөнүндө айтып бериңиз',
      'contact.form.submit': 'Хабар жиберүү',
      'contact.form.callback': 'Чакыруу суранычы',
      'contact.note': 'Же почта жөнөтүңүз: hello@balance4profit.example',
      'contact.office.title': 'Офис',
      'contact.office.address.label': 'Дареги:',
      'contact.office.address.value': 'Бишкек, Кыргызстан',
      'contact.office.phone.label': 'Телефон:',
      'contact.office.phone.value': '+996 (fill)',
      'contact.office.email.label': 'Электрондук почта:',
      'contact.findus.title': 'Бизди табыңыз',
      'contact.findus.desc': 'Google же Yandex картасын киргизиңиз. Төмөндө ыңгайлуу орун.',
      'contact.map.placeholder': 'Map placeholder — add iframe here',
      'contact.hours.title': 'Иш сааттары',
      'contact.hours.value': 'Дүш–Жума: 09:00 – 18:00',
      'footer.privacy': 'Купуялык',
      'footer.terms': 'Шарттар',
      'footer.copyright': '© <span id="year"></span> Balance4Profit — Бардык укуктар корголгон. Ээси: Назгул Кадыралиева'
    },
    ru: {
      'nav.services': 'Услуги',
      'nav.about': 'О нас',
      'nav.contact': 'Контакты',
      'hero.title': 'Бухгалтерские и налоговые услуги для бизнеса в Кыргызстане',
      'hero.lead': 'Ведение бухгалтерии, подготовка налоговой отчетности и финансовые консультации от Назгул Кадыралиевой и команды Balance4Profit.',
      'hero.cta1': 'Получить консультацию',
      'hero.cta2': 'Узнать услуги',
      'services.title': 'Наши услуги',
      'services.lead': 'Простые и понятные услуги для малого и среднего бизнеса в Кыргызстане.',
      'services.bookkeeping.title': 'Бухгалтерия',
      'services.bookkeeping.desc': 'Ежемесячное ведение учета, сверки и финансовая отчетность в соответствии с местными стандартами.',
      'services.tax.title': 'Налоговая отчетность',
      'services.tax.desc': 'Налоговые декларации, отчетность по НДС и стратегии по оптимизации налогов.',
      'services.payroll.title': 'Зарплата',
      'services.payroll.desc': 'Расчет зарплаты, социальные взносы и помощь с трудовой отчетностью.',
      'services.advisory.title': 'Консалтинг',
      'services.advisory.desc': 'Финансовое планирование, прогнозы движения денежных средств и поддержка при регистрации бизнеса.',
      'services.more.title': 'Подробнее о процессе',
      'services.more.desc': 'Мы начинаем с вводного звонка, проверяем документы и предлагаем план (ежемесячно/ежеквартально/ежегодно). Цена зависит от объема транзакций.',
      'about.title': 'О Balance4Profit',
      'about.owner.label': 'Владелец:',
      'about.owner.name': 'Назгул Кадыралиева',
      'about.location.label': 'Местоположение:',
      'about.location.value': 'Бишкек, Кыргызстан (работаем по всей стране)',
      'about.desc': 'Balance4Profit помогает предпринимателям привести финансы в порядок, чтобы они могли сосредоточиться на развитии бизнеса. Мы ценим прозрачность, соблюдение законодательства и дружелюбный сервис.',
      'about.languages.label': 'Языки:',
      'about.languages.value': 'Кыргызский / Русский / Английский',
      'about.why.title': 'Почему выбирают нас?',
      'about.why.item1': 'Местные знания налогового законодательства',
      'about.why.item2': 'Персонализированный сервис',
      'about.why.item3': 'Безопасная обработка финансовых данных',
      'contact.title': 'Контакты',
      'contact.lead': 'Готовы обсудить? Отправьте сообщение или запишитесь на консультацию.',
      'contact.form.name.label': 'Ваше имя',
      'contact.form.name.placeholder': 'ФИО',
      'contact.form.email.label': 'Электронная почта',
      'contact.form.email.placeholder': 'you@example.com',
      'contact.form.phone.label': 'Телефон',
      'contact.form.phone.placeholder': '+996 7XX XXX XXX',
      'contact.form.message.label': 'Сообщение',
      'contact.form.message.placeholder': 'Расскажите о ваших потребностях',
      'contact.form.submit': 'Отправить',
      'contact.form.callback': 'Заказать звонок',
      'contact.note': 'Или напишите на почту: hello@balance4profit.example',
      'contact.office.title': 'Офис',
      'contact.office.address.label': 'Адрес:',
      'contact.office.address.value': 'Бишкек, Кыргызстан',
      'contact.office.phone.label': 'Телефон:',
      'contact.office.phone.value': '+996 (fill)',
      'contact.office.email.label': 'Электронная почта:',
      'contact.findus.title': 'Где нас найти',
      'contact.findus.desc': 'Вставьте Google или Yandex карту. Пример ниже.',
      'contact.map.placeholder': 'Map placeholder — add iframe here',
      'contact.hours.title': 'Часы работы',
      'contact.hours.value': 'Пн–Пт: 09:00 – 18:00',
      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Условия',
      'footer.copyright': '© <span id="year"></span> Balance4Profit — Все права защищены. Владелец: Назгул Кадыралиева'
    }
    ,
    en: {
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.title': 'Accounting & Tax Services for businesses in Kyrgyzstan',
      'hero.lead': 'Trusted bookkeeping, tax preparation, financial reporting and advisory services by Nazgul Kadyralieva and the Balance4Profit team.',
      'hero.cta1': 'Get a Consultation',
      'hero.cta2': 'See Services',
      'services.title': 'Our Services',
      'services.lead': 'A clear, simple set of services tailored for small and medium enterprises in Kyrgyzstan.',
      'services.bookkeeping.title': 'Bookkeeping',
      'services.bookkeeping.desc': 'Monthly bookkeeping, reconciliations, and financial statements prepared to local standards.',
      'services.tax.title': 'Tax Preparation',
      'services.tax.desc': 'Tax filings, VAT reporting, and tax optimization strategies for KIC and corporate taxpayers.',
      'services.payroll.title': 'Payroll',
      'services.payroll.desc': 'Payroll processing, social contributions, payslips and labor-report assistance.',
      'services.advisory.title': 'Advisory',
      'services.advisory.desc': 'Financial planning, cashflow forecasts and business registration support.',
      'services.more.title': 'More about our process',
      'services.more.desc': 'We start with an onboarding call, review your records, then propose a tailored plan (monthly/quarterly/annual). Pricing depends on transaction volume and scope.',
      'about.title': 'About Balance4Profit',
      'about.owner.label': 'Owner:',
      'about.owner.name': 'Nazgul Kadyralieva',
      'about.location.label': 'Location:',
      'about.location.value': 'Bishkek, Kyrgyzstan (serving nationwide)',
      'about.desc': 'Balance4Profit helps businesses get their finances in order so owners can focus on growth. We prioritize clarity, compliance and friendly customer service.',
      'about.languages.label': 'Languages:',
      'about.languages.value': 'Kyrgyz / Russian / English',
      'about.why.title': 'Why choose us?',
      'about.why.item1': 'Local tax knowledge',
      'about.why.item2': 'Personalized service',
      'about.why.item3': 'Secure handling of financial data',
      'contact.title': 'Contact',
      'contact.lead': 'Ready to talk? Send a message or schedule a consultation.',
      'contact.form.name.label': 'Your name',
      'contact.form.name.placeholder': 'Full name',
      'contact.form.email.label': 'Email',
      'contact.form.email.placeholder': 'you@example.com',
      'contact.form.phone.label': 'Phone',
      'contact.form.phone.placeholder': '+996 7XX XXX XXX',
      'contact.form.message.label': 'Message',
      'contact.form.message.placeholder': 'Tell us about your needs',
      'contact.form.submit': 'Send Message',
      'contact.form.callback': 'Request a Callback',
      'contact.note': 'Or email: hello@balance4profit.example',
      'contact.office.title': 'Office',
      'contact.office.address.label': 'Address:',
      'contact.office.address.value': 'Bishkek, Kyrgyzstan',
      'contact.office.phone.label': 'Phone:',
      'contact.office.phone.value': '+996 (fill)',
      'contact.office.email.label': 'Email:',
      'contact.findus.title': 'Find us',
      'contact.findus.desc': 'Embed a Google Map or Yandex Map here. Example placeholder below.',
      'contact.map.placeholder': 'Map placeholder — add iframe here',
      'contact.hours.title': 'Hours',
      'contact.hours.value': 'Mon–Fri: 09:00 – 18:00',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.copyright': '© <span id="year"></span> Balance4Profit — All rights reserved. Owner: Nazgul Kadyralieva'
    }
  };

  // current language (persist in localStorage)
  const defaultLang = localStorage.getItem('lang') || 'ky';
  let currentLang = defaultLang;

  function translatePage(lang){
    // set document lang attribute
    document.documentElement.lang = lang;
    // translate elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const txt = (translations[lang] && translations[lang][key]) || el.textContent;
      el.innerHTML = txt;
    });
    // translate labels (data-i18n-label) and placeholders
    document.querySelectorAll('[data-i18n-label]').forEach(el=>{
      const key = el.getAttribute('data-i18n-label');
      const txt = (translations[lang] && translations[lang][key]) || el.textContent;
      el.textContent = txt;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      const txt = (translations[lang] && translations[lang][key]);
      if(txt) el.setAttribute('placeholder', txt);
    });
    // update aria-pressed on lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn=>{
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  // wire language switcher
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const lang = btn.getAttribute('data-lang');
      if(!lang || lang === currentLang) return;
      currentLang = lang;
      localStorage.setItem('lang', lang);
      translatePage(lang);
    });
  });

  // initial translate
  translatePage(currentLang);

  // nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', ()=>{
    if(siteNav.style.display === 'block') siteNav.style.display = '';
    else siteNav.style.display = 'block';
  });

  // accordion
  document.querySelectorAll('.accordion-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const panel = btn.nextElementSibling;
      const open = panel.style.display === 'block';
      document.querySelectorAll('.accordion-panel').forEach(p=>p.style.display = 'none');
      if(!open) panel.style.display = 'block';
    });
  });

  // contact form: open mailto with filled values (simple, client-side)
  const form = document.getElementById('contact-form');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const phone = encodeURIComponent(document.getElementById('phone').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    const recipient = 'hello@balance4profit.example'; // replace with real email
    const subject = encodeURIComponent('Website contact from ' + (name || 'website visitor'));
    const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\nPhone: ${decodeURIComponent(phone)}\n\nMessage:\n${decodeURIComponent(message)}`);

    // open mail client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });

  // request callback button placeholder
  const cb = document.getElementById('call-btn');
  cb && cb.addEventListener('click', ()=>{
    alert('Thanks — please leave your phone number and we will call you.');
    document.getElementById('phone').focus();
  });
});