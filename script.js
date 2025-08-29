function revealOnScroll() {
  const elements = document.querySelectorAll('.card, .video-item');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach((el, index) => {
    if (index < 2) {
      el.classList.add('reveal');
      return;
    }

    const elTop = el.getBoundingClientRect().top;
    const elBottom = el.getBoundingClientRect().bottom;

    if (elTop < triggerBottom && elBottom > 100) {
      el.classList.add('reveal');
    } else {
      el.classList.remove('reveal');
    }
  });
}

function showPlaylist(topic, clickedCard = null) {
  clickedCard = clickedCard || event.currentTarget;
  const existingIframe = clickedCard.querySelector("iframe");

  if (existingIframe) {
    existingIframe.classList.add("closing");
    setTimeout(() => {
      existingIframe.remove();
    }, 300);
    return;
  }

  document.querySelectorAll(".card iframe").forEach(iframe => {
    iframe.classList.add("closing");
    setTimeout(() => {
      iframe.remove();
    }, 300);
  });

  const videos = {
    tut: "https://www.youtube.com/embed/yV8qYZ7cTBc",
    html: "https://www.youtube.com/embed/cvNTgKw8VlY?si=-pP_HtH5nt6FQTa8",
    css: "https://www.youtube.com/embed/h1mNPEjva8U?si=VdXnCKSupW63BKJI",
    js: "https://www.youtube.com/embed/PWuTLTFMtYw?si=fxik8pi8uE7rXMbr",
    react: "https://www.youtube.com/embed/ihRRf3EjTV8?si=Rdy1pFCxgJFoSjmg",
    angular: "https://www.youtube.com/embed/q0coNra92_g?si=1ublG18wICFVmKbV",
    py: "https://www.youtube.com/embed/eeRw__TlgmQ?si=RlsPyDkh5-_KEE1g",
    node: "https://www.youtube.com/embed/Bzzp0q0T5oM?si=yG4Rcbh_gcBQB5np",
    express: "https://www.youtube.com/embed/DURM6yft8RU?si=1876TAQaiCskuTfN",
    mongodb: "https://www.youtube.com/embed/rWQyb1RCLI4?si=-s1wXLfmZpwS229Q",
    mysql: "https://www.youtube.com/embed/izZppcbP18k?si=TM_N2BXH5_2b3BEK",
    git: "https://www.youtube.com/embed/PsXDzwBW2Ls?si=JyPyZebPQkBJ8xMk",
    docker: "https://www.youtube.com/embed/yRkE-1Lq0qo?si=mnHRV43Uml1X13Rg",
    rest: "https://www.youtube.com/embed/ghUg5jo23Rc?si=5Qur8wfg6M77DWTJ",
    auth: "https://www.youtube.com/embed/CVClHLwv-4I"
  };
  const videoURL = videos[topic.toLowerCase()];
  
  if (videoURL) {
    const iframe = document.createElement("iframe");
    iframe.src = videoURL;
    iframe.width = "100%";
    iframe.height = "300";
    iframe.style.marginTop = "10px";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    clickedCard.appendChild(iframe);
  }
}

window.addEventListener('load', () => {
  revealOnScroll();

  const tutCard = document.querySelector('.card[data-topic="tut"]');
  if (tutCard) {
    showPlaylist("tut", tutCard);
  }
});

window.addEventListener('scroll', revealOnScroll);


let translated = false;

function toggleTranslation() {
  if (!translated) {
    translated = true;

    document.title = "مسار تعلم البرمجة الكاملة";

    document.querySelector(".settings-dropdown button:nth-child(1)").innerHTML = `<i class="fas fa-home"></i> الرئيسية`;
    document.querySelector(".settings-dropdown button:nth-child(2)").innerHTML = `<i class="fas fa-language"></i> الانجليزية `;

    const translations = {
      "Tutorial": "الشرح",
      "What will we do ?": "ماذا سنفعل؟",
      "HTML": "لغة HTML",
      "Structure your website using semantic tags and clean layout elements.": "قم ببناء موقعك باستخدام رسوم منطقية وعناصر نظيفة.",
      "CSS": "لغة CSS",
      "Style your site with colors, fonts, layout tools like Flexbox and Grid.": "نسّق موقعك باستخدام الألوان، الخطوط، و أدوات التخطيط.",
      "JavaScript": "جافاسكريبت",
      "Add interactivity using events, DOM manipulation, and core logic.": "أضف التفاعلية باستخدام الأحداث ومعالجة DOM والمنطق البرمجي.",
      "React": "مكتبة React",
      "Build component-based UIs using React, JSX, state, and routing.": "أنشئ واجهات تعتمد على المكونات باستخدام React وJSX.",
      "Angular": "إطار Angular",
      "Develop dynamic web apps using TypeScript, services, and RxJS.": "طوّر تطبيقات ديناميكية باستخدام TypeScript وRxJS.",
      "Python": "بايثون",
      "Learn programming fundamentals, OOP, data structures, and automation.": "تعلم أساسيات البرمجة وهياكل البيانات والأتمتة.",
      "Node.js": "Node.js",
      "JavaScript runtime for building scalable back-end services.": "بيئة لتشغيل جافاسكريبت على الخادم.",
      "Express.js": "Express.js",
      "Web framework for Node.js to handle routes, middleware, and APIs.": "إطار ويب لـ Node.js لمعالجة المسارات وAPIs.",
      "MongoDB": "MongoDB",
      "NoSQL database using collections and documents for flexible storage.": "قاعدة بيانات NoSQL مرنة وسهلة التوسيع.",
      "MySQL": "MySQL",
      "Relational database system using tables and structured schemas.": "قاعدة بيانات علائقية تعتمد على الجداول والمخططات.",
      "Git & GitHub": "Git و GitHub",
      "Track code changes, collaborate, and manage projects efficiently.": "تابع تغييرات الكود وتعاون بفعالية.",
      "Docker": "Docker",
      "Package applications into containers for consistent deployment.": "احزم التطبيقات في حاويات لنشر ثابت.",
      "REST APIs": "واجهات REST",
      "Create and consume APIs to connect front-end and back-end logic.": "أنشئ APIs لربط الواجهة الأمامية بالخلفية.",
      "Authentication": "المصادقة",
      "Implement secure user login with JWT, sessions, or OAuth.": "قم بتنفيذ تسجيل دخول آمن للمستخدم."
    };

    document.querySelectorAll(".card").forEach(card => {
      const title = card.querySelector("h3");
      const desc = card.querySelector("p");

      if (title && translations[title.textContent.trim()]) {
        title.textContent = translations[title.textContent.trim()];
      }

      if (desc && translations[desc.textContent.trim()]) {
        desc.textContent = translations[desc.textContent.trim()];
      }

      card.style.borderLeft = "none";
      card.style.borderRight = "6px solid #2d526a";
    });

    document.body.setAttribute('dir', 'rtl');
    
    document.body.style.direction = "rtl";
  } else {
    location.reload();
  }
}




 function gohome() {
  document.body.style.transition = 'transform 1s ease';
    document.body.style.transform = 'translateX(-8000px)';
  setTimeout(function () {
    window.location.assign('/Home/index.html');
  }, 500);
};


let darkbtn = document.querySelector('.darkbtn') ;
let lightbtn = document.querySelector('.lightbtn') ;
 
darkbtn.addEventListener('click' , function(){
    darkbtn.classList.remove('show');
    darkbtn.classList.add('hide');
    lightbtn.classList.remove('hide');
    lightbtn.classList.add('show');

    document.body.classList.add('dark');
    document.body.classList.remove('light');


});

lightbtn.addEventListener('click' , function(){
  lightbtn.classList.remove('show');
  lightbtn.classList.add('hide');
  darkbtn.classList.remove('hide');
  darkbtn.classList.add('show');

  document.body.classList.add('light');
  document.body.classList.remove('dark');
});