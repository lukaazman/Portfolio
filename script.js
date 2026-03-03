const translations = {
  english: {
      projects: "Projects",
      skills: "Skills",
      resume: "Résumé",
      contact: "Contact",
      welcome: "Welcome to my Portfolio! My name is Luka Ažman and I am <br> a future <span class='job'>Software Programmer</span> and <span class='job'>Game Developer</span>.",
      projectsTitle: "PROJECTS",
      skillsTitle: "SKILLS",
      contactTitle: "CONTACT ME",
      backroomsDesc: "Horror 3D video game made in Unreal Engine with Visual Scripting for my highschool graduation project.",
      pixeLifeDesc: "Pixel art walking simulator 2D video game made in Unity and Aseprite.",
      simpleDesc: "Chrome Browser Extension made for simpler browsing using custom commands.",
      upnoteDesc: "Minimalistic and slick Markdown file Text Editor.",
      cinescoreDesc: "Movie review site, made in a two-man group for a university project.",
      cdDesc: "Doom clone 3D game made in WebGPU with a three-man group for a university project.",
      gcDesc: "Fitness arcade fighting 3D game made in Unity.",
      emailMe: "Email me",
      colorScheme: {
          primary: "#0052cc",
          secondary: "#00d4ff",
          text: "#1a1a1a",
          background: "#f8f9fa",
          accent: "#e74c3c"
      }
  },
  slovenian: {
      projects: "Projekti",
      skills: "Veščine",
      resume: "Življenjepis",
      contact: "Kontakt",
      welcome: "Dobrodošli v mojem portfelju! Moje ime je Luka Ažman in sem <br> bodoči <span class='job'>Programer programske opreme</span> in <span class='job'>Razvijalec iger</span>.",
      projectsTitle: "PROJEKTI",
      skillsTitle: "VEŠČINE",
      contactTitle: "KONTAKTIRAJTE ME",
      backroomsDesc: "Grozljiva 3D video igra, narejena v Unreal Engine z vizualnim skriptiranjem za moj maturitetni projekt.",
      pixeLifeDesc: "Pixel art simulator hoje 2D video igra izdelana v Unity in Aseprite.",
      simpleDesc: "Razširitev brskalnika Chrome za preprostejše brskanje z ukazi po meri.",
      upnoteDesc: "Minimalističen in eleganten urejevalnik besedila datoteke Markdown.",
      cinescoreDesc: "Spletna stran za ocenjevanje filmov, narejeno v dvo-osebni skupini za univerzitetni projekt.",
      cdDesc: "Doom klon 3D igra narejena v WebGPU s tri-osebno skupino za univerzitetni projekt.",
      gcDesc: "Fitnes arkadna borbena 3D igra narejena v Unity.",
      emailMe: "Pišite mi",
      colorScheme: {
          primary: "#0052cc",
          secondary: "#00d4ff",
          text: "#1a1a1a",
          background: "#f8f9fa",
          accent: "#e74c3c"
      }
  }
};
 
let currentLanguage = 'english';

function toggleLanguage() {
  currentLanguage = currentLanguage === 'english' ? 'slovenian' : 'english';
  updateContent();
  updateColorScheme();
}

function updateContent() {
  document.querySelector('nav a[href="#projects"]').textContent = translations[currentLanguage].projects;
  document.querySelector('nav a[href="#skills"]').textContent = translations[currentLanguage].skills;
  document.querySelector('nav a[href="résumé.pdf"]').textContent = translations[currentLanguage].resume;
  document.querySelector('nav a[href="#contact"]').textContent = translations[currentLanguage].contact;

  document.querySelector('#home p').innerHTML = translations[currentLanguage].welcome;

  document.querySelector('#projekt').textContent = translations[currentLanguage].projectsTitle;
  document.querySelector('h2:nth-of-type(2)').textContent = translations[currentLanguage].skillsTitle;
  document.querySelector('h2:nth-of-type(3)').textContent = translations[currentLanguage].contactTitle;

  document.querySelector('[data-project="backrooms"]').textContent = translations[currentLanguage].backroomsDesc;
  document.querySelector('[data-project="pixelife"]').textContent = translations[currentLanguage].pixeLifeDesc;
  document.querySelector('[data-project="simplesearch"]').textContent = translations[currentLanguage].simpleDesc;
  document.querySelector('[data-project="upnote"]').textContent = translations[currentLanguage].upnoteDesc;
  document.querySelector('[data-project="cinescore"]').textContent = translations[currentLanguage].cinescoreDesc;
  document.querySelector('[data-project="crimsondawn"]').textContent = translations[currentLanguage].cdDesc;
  document.querySelector('[data-project="gymchaos"]').textContent = translations[currentLanguage].gcDesc;

  document.querySelector('#mail a').textContent = translations[currentLanguage].emailMe;
}

function updateColorScheme() {
  const colors = translations[currentLanguage].colorScheme;
  document.documentElement.style.setProperty('--primary-color', colors.primary);
  document.documentElement.style.setProperty('--secondary-color', colors.secondary);
  document.documentElement.style.setProperty('--text-color', colors.text);
  document.documentElement.style.setProperty('--background-color', colors.background);
  document.documentElement.style.setProperty('--accent-color', colors.accent);
  document.body.classList.add('theme-light');
  document.body.classList.remove('theme-dark');
}

document.addEventListener('DOMContentLoaded', function() {
  // A-Z sorting
  const skillsList = document.getElementById('skili');
  const skills = Array.from(skillsList.getElementsByTagName('li'));
  skills.sort((a, b) => a.textContent.localeCompare(b.textContent));
  skillsList.innerHTML = '';
  skills.forEach(skill => skillsList.appendChild(skill));

  const languageToggle = document.getElementById('ime');
  if (languageToggle) {
      languageToggle.addEventListener('click', toggleLanguage);
  }

  updateColorScheme();
});