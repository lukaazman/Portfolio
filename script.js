const translations = {
  english: {
      projects: "Projects",
      skills: "Skills",
      resume: "Résumé",
      contact: "Contact",
      welcome: "Welcome to my Portfolio! My name is Luka Ažman and I am <br> a future <span class='job'>Software Programmer</span> and <span class='job'>Game Developer</span>",
      projectsTitle: "PROJECTS",
      skillsTitle: "SKILLS",
      contactTitle: "CONTACT ME",
      backroomsDesc: "Horror video game made in Unreal Engine with Visual Scripting for my highschool graduation project.",
      pixeLifeDesc: "Pixel art walking simulator, video game made in Unity and Aseprite.",
      simpleDesc: "Chrome Browser Extension made for simpler browsing using custom commands.",
      upnoteDesc: "Minimalistic and slick Markdown file Text Editor.",
      emailMe: "Email me",
      colorScheme: {
          primary: "#ffcc00",
          secondary: "#ff6600",
          text: "#333"
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
      backroomsDesc: "Grozljiva video igra, narejena v Unreal Engine z vizualnim skriptiranjem za moj maturitetni projekt.",
      pixeLifeDesc: "Pixel art simulator hoje, video igra, izdelana v Unity in Aseprite.",
      simpleDesc: "Razširitev brskalnika Chrome za preprostejše brskanje z ukazi po meri.",
      upnoteDesc: "Minimalističen in eleganten urejevalnik besedila datoteke Markdown.",
      emailMe: "Pišite mi",
      colorScheme: {
          primary: "#2978b5",
          secondary: "#54a0de",
          text: "#0a2472"
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
  document.querySelector('nav a[href="résumé.docx"]').textContent = translations[currentLanguage].resume;
  document.querySelector('nav a[href="#contact"]').textContent = translations[currentLanguage].contact;

  document.querySelector('#home p').innerHTML = translations[currentLanguage].welcome;

  document.querySelector('#projekt').textContent = translations[currentLanguage].projectsTitle;
  document.querySelector('h2:nth-of-type(2)').textContent = translations[currentLanguage].skillsTitle;
  document.querySelector('h2:nth-of-type(3)').textContent = translations[currentLanguage].contactTitle;

  document.querySelector('#projects table tr:first-child td:first-child p').textContent = translations[currentLanguage].backroomsDesc;
  document.querySelector('#projects table tr:first-child td:nth-child(2) p').textContent = translations[currentLanguage].pixeLifeDesc;
  document.querySelector('#projects table tr:first-child td:nth-child(3) p').textContent = translations[currentLanguage].simpleDesc;
  document.querySelector('#projects table tr:first-child td:last-child p').textContent = translations[currentLanguage].upnoteDesc;

  document.querySelector('#mail a').textContent = translations[currentLanguage].emailMe;
}

function updateColorScheme() {
  const colors = translations[currentLanguage].colorScheme;
  document.documentElement.style.setProperty('--primary-color', colors.primary);
  document.documentElement.style.setProperty('--secondary-color', colors.secondary);
  document.documentElement.style.setProperty('--text-color', colors.text);
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