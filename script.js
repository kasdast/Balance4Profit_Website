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
  'contact.consent': 'Бул форманы жөнөтүү менен сиз биздин жооп берүү үчүн аты, электрондук почта жана билдирүүнү пайдаланууга макулсуз. Биздин <a href="privacy.html">Купуялык саясаты</a>-н караңыз.',
  'privacy.title': 'Купуялык саясаты',
  'privacy.lead': 'Бул бетте биз кантип сиздин жеке маалыматтарды чогултабыз, сактайбыз жана колдонобуз туралуу көзүңүзгө илебиз.' ,
  'privacy.what.title': 'Биз эмне чогултабыз',
  'privacy.what.desc': 'Биз контакт формасында берген маалыматтарды (аты, электрондук почта, телефон жана билдирүү) чогултабыз. Биз жеке маалыматтарды сатпайбыз.',
  'privacy.how.title': 'Биз аны кантип колдонобуз',
  'privacy.how.desc': 'Биз сиздин байланыш маалыматтарыңызды суроого жооп берүү, консультацияларды уюштуруу жана кызмат көрсөтүү үчүн колдонобуз. Маалымат коопсуз сакталат жана тек гана уруксат берген кызматкерлерге жеткиликтүү.',
  'privacy.contact.title': 'Суроолор',
  'privacy.contact.desc': 'Маалыматтарыңыз боюнча суроолоруңуз болсо же аларды өчүртүүнү кааласаңыз, balance4profit@gmail.com дарегине кат жазыңыз.',
  'contact.note': 'Же почта жөнөтүңүз: balance4profit@gmail.com',
      'contact.office.title': 'Офис',
      'contact.office.address.label': 'Дареги:',
      'contact.office.address.value': '720044, Кыргызстан, Бишкек шаары, Октябрь району, Токтоналиев көчөсү 103',
      'contact.office.phone.label': 'Телефон:',
      'contact.office.phone.value': '+996 559 991 185',
      'contact.office.email.label': 'Электрондук почта:',
      'contact.findus.title': 'Бизди табыңыз',
      'contact.findus.desc': 'Биздин кеңсебизди карталардан табыңыз. Сиз каалаган карта кызматында жайгашкан жерди ачуу үчүн төмөнкү баскычтарды колдонуңуз.',
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
  'contact.consent': 'Отправляя эту форму, вы соглашаетесь, что мы можем использовать ваше имя, электронную почту и сообщение для ответа на ваш запрос. Ознакомьтесь с нашей <a href="privacy.html">Политикой конфиденциальности</a>.',
  'privacy.title': 'Политика конфиденциальности',
  'privacy.lead': 'Здесь описано, как мы собираем, храним и используем ваши персональные данные.',
  'privacy.what.title': 'Что мы собираем',
  'privacy.what.desc': 'Мы собираем информацию, которую вы предоставляете в контактной форме (имя, электронная почта, телефон и сообщение). Мы не продаем персональные данные.',
  'privacy.how.title': 'Как мы используем данные',
  'privacy.how.desc': 'Мы используем ваши контактные данные для ответов на запросы, организации консультаций и оказания услуг. Данные хранятся безопасно и доступны только уполномоченному персоналу.',
  'privacy.contact.title': 'Вопросы',
  'privacy.contact.desc': 'Если у вас есть вопросы о ваших данных или вы хотите удалить их, напишите на balance4profit@gmail.com.',
  'contact.note': 'Или напишите на почту: balance4profit@gmail.com',
      'contact.office.title': 'Офис',
      'contact.office.address.label': 'Адрес:',
      'contact.office.address.value': 'ул. Токтоналиева, 103, Октябрьский городской округ, Бишкек 720044, Кыргызстан',
      'contact.office.phone.label': 'Телефон:',
      'contact.office.phone.value': '+996 559 991 185',
      'contact.office.email.label': 'Электронная почта:',
      'contact.findus.title': 'Где нас найти',
      'contact.findus.desc': 'Найдите наш офис на картах. Используйте кнопки ниже, чтобы открыть местоположение в предпочитаемом вами картографическом сервисе.',
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
  'contact.consent': 'By submitting this form you agree that we may use your name, email and message to respond to your inquiry. Read our <a href="privacy.html">Privacy Policy</a>.',
  'privacy.title': 'Privacy Policy',
  'privacy.lead': 'This page explains how we collect, store and use your personal information.',
  'privacy.what.title': 'What we collect',
  'privacy.what.desc': 'We collect the information you provide in the contact form (name, email, phone and message). We do not sell personal data.',
  'privacy.how.title': 'How we use it',
  'privacy.how.desc': 'We use your contact details to respond to inquiries, schedule consultations and provide our services. Data is stored securely and only accessible to authorized staff.',
  'privacy.contact.title': 'Questions',
  'privacy.contact.desc': 'If you have questions about your data or want it removed, email balance4profit@gmail.com.',
  'contact.note': 'Or email: balance4profit@gmail.com',
      'contact.office.title': 'Office',
      'contact.office.address.label': 'Address:',
      'contact.office.address.value': '103 Toktonaliyev street, Oktyabr City district, Bishkek 720044, Kyrgyzstan',
      'contact.office.phone.label': 'Phone:',
      'contact.office.phone.value': '+996 559 991 185',
      'contact.office.email.label': 'Email:',
      'contact.findus.title': 'Find us',
      'contact.findus.desc': 'Find our office on maps. Use the buttons below to open the location in your preferred map service.',
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

  
  // Configure FORM_ENDPOINT with Formspree form id
  const FORM_ENDPOINT = 'https://formspree.io/f/xblzdzbk'; 

  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');

  form && form.addEventListener('submit', async function(e){
    e.preventDefault();

    // collect values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // basic validation
    if(!name || !email || !message){
      if(statusEl){ statusEl.className = 'visible info'; statusEl.textContent = 'Please fill in name, email and message.'; }
      return;
    }

    // disable submit while sending
    const submitBtn = form.querySelector('button[type="submit"]');
  if(submitBtn) submitBtn.disabled = true;
  if(statusEl){ statusEl.className = 'visible info'; statusEl.textContent = 'Sending...'; }

    try{
      // send JSON to Formspree endpoint.
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          _subject: `Website contact — Balance4Profit` // optional subject for Formspree
        })
      });

      if(res.ok){
        if(statusEl){ statusEl.className = 'visible success'; statusEl.textContent = 'Thanks! Your message was sent.'; }
        form.reset();
      } else {
        const data = await res.json().catch(()=>null);
        const errMsg = (data && data.error) ? data.error : 'Submission failed — please try again later.';
        if(statusEl){ statusEl.className = 'visible error'; statusEl.textContent = errMsg; }
      }
    } catch(err){
      if(statusEl){ statusEl.className = 'visible error'; statusEl.textContent = t('status.network', {email: 'balance4profit@gmail.com'}); }
    } finally{
      if(submitBtn) submitBtn.disabled = false;
    }
  });

  // request callback button placeholder
  const cb = document.getElementById('call-btn');
  cb && cb.addEventListener('click', ()=>{
    alert('Thanks — please leave your phone number and we will call you.');
    document.getElementById('phone').focus();
  });
});