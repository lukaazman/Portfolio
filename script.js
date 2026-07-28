const translations = {
    english: {
        menu: { experience: "[ EXPERIENCE ]", projects: "[ PROJECTS ]", skills: "[ SKILLS ]", contact: "[ CONTACT ]", resume: "[ RÉSUMÉ ]" },
        welcome: 'Welcome to my Portfolio! My name is Luka Ažman and I am <br> a future <span class="accent">Software Programmer</span> and <span class="accent">Game Developer</span>.',
        cta: "> Explore Portfolio",
        experienceTitle: "EXPERIENCE",
        projectsTitle: "PROJECTS",
        skillsTitle: "SKILLS",
        contactTitle: "CONTACT ME",
        emailLabel: "EMAIL ME",
        resumeLabel: "RÉSUMÉ",
        expFootnote: "Also completed seasonal part-time work in retail, hospitality, and logistics (2020–2025).",
        expTypes: {
            mdikranj: "[ STUDENT WORK ]",
            iskraemeco: "[ INTERNSHIP ]"
        },
        expDescriptions: {
            mdikranj: "Built the organization's website as part of student work for Medobčinsko društvo invalidov Kranj.",
            iskraemeco: "IT department internship — maintained and edited company websites."
        },
        descriptions: {
            backrooms: "Horror 3D video game made in Unreal Engine with Visual Scripting for my highschool graduation project.",
            pixelife: "Pixel art walking simulator 2D video game made in Unity and Aseprite.",
            simplesearch: "Chrome Browser Extension made for simpler browsing using custom commands.",
            upnote: "Minimalistic and slick Markdown file Text Editor.",
            cinescore: "Movie review site, made in a two-man group for a university project.",
            crimsondawn: "Doom clone 3D game made in WebGPU with a three-man group for a university project.",
            gymchaos: "Fitness arcade fighting 3D game made in Unity.",
            fullscansecurity: "Mobile security application made in Android Studio.",
            mdikranjProject: "Website made for Medobčinsko društvo invalidov Kranj as a part of student work."
        }
    },
    slovenian: {
        menu: { experience: "[ IZKUŠNJE ]", projects: "[ PROJEKTI ]", skills: "[ VEŠČINE ]", contact: "[ KONTAKT ]", resume: "[ ŽIVLJENJEPIS ]" },
        welcome: 'Dobrodošli v mojem portfelju! Moje ime je Luka Ažman in sem <br> bodoči <span class="accent">Programer programske opreme</span> in <span class="accent">Razvijalec iger</span>.',
        cta: "> Razišči portfolio",
        experienceTitle: "IZKUŠNJE",
        projectsTitle: "PROJEKTI",
        skillsTitle: "VEŠČINE",
        contactTitle: "KONTAKTIRAJTE ME",
        emailLabel: "PIŠITE MI",
        resumeLabel: "ŽIVLJENJEPIS",
        expFootnote: "Opravljal tudi sezonska študentska dela v trgovini, gostinstvu in logistiki (2020–2025).",
        expTypes: {
            mdikranj: "[ ŠTUDENTSKO DELO ]",
            iskraemeco: "[ PRAKSA ]"
        },
        expDescriptions: {
            mdikranj: "Izdelava spletne strani kot del študentskega dela za Medobčinsko društvo invalidov Kranj.",
            iskraemeco: "Delovna praksa v IT oddelku — urejanje in vzdrževanje spletnih strani podjetja."
        },
        descriptions: {
            backrooms: "Grozljiva 3D video igra, narejena v Unreal Engine z vizualnim skriptiranjem za moj maturitetni projekt.",
            pixelife: "Pixel art simulator hoje 2D video igra izdelana v Unity in Aseprite.",
            simplesearch: "Razširitev brskalnika Chrome za preprostejše brskanje z ukazi po meri.",
            upnote: "Minimalističen in eleganten urejevalnik besedila datoteke Markdown.",
            cinescore: "Spletna stran za ocenjevanje filmov, narejeno v dvo-osebni skupini za univerzitetni projekt.",
            crimsondawn: "Doom klon 3D igra narejena v WebGPU s tri-osebno skupino za univerzitetni projekt.",
            gymchaos: "Fitnes arkadna borbena 3D igra narejena v Unity.",
            fullscansecurity: "Mobilna varnostna aplikacija narejena v Android Studiju.",
            mdikranjProject: "Spletna stran narejena za Medobčinsko društvo invalidov Kranj kot del študentskega dela."
        }
    }
};

let currentLanguage = 'english';

function applyTranslations() {
    const t = translations[currentLanguage];

    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks[0].textContent = t.menu.experience;
    menuLinks[1].textContent = t.menu.projects;
    menuLinks[2].textContent = t.menu.skills;
    menuLinks[3].textContent = t.menu.contact;
    menuLinks[4].textContent = t.menu.resume;

    document.getElementById('welcomeText').innerHTML = t.welcome;
    document.querySelector('.cta').textContent = t.cta;

    document.getElementById('experienceTitle').textContent = t.experienceTitle;
    document.getElementById('projectsTitle').textContent = t.projectsTitle;
    document.getElementById('skillsTitle').textContent = t.skillsTitle;
    document.getElementById('contactTitle').textContent = t.contactTitle;
    document.getElementById('emailLabel').textContent = t.emailLabel;
    document.getElementById('resumeLabel').textContent = t.resumeLabel;
    document.getElementById('expFootnote').textContent = t.expFootnote;

    Object.keys(t.expTypes).forEach((key) => {
        const el = document.querySelector(`[data-exptype="${key}"]`);
        if (el) el.textContent = t.expTypes[key];
    });

    Object.keys(t.expDescriptions).forEach((key) => {
        const el = document.querySelector(`.exp-desc[data-exp="${key}"]`);
        if (el) el.textContent = t.expDescriptions[key];
    });

    document.querySelector('[data-project="backrooms"]').textContent = t.descriptions.backrooms;
    document.querySelector('[data-project="pixelife"]').textContent = t.descriptions.pixelife;
    document.querySelector('[data-project="simplesearch"]').textContent = t.descriptions.simplesearch;
    document.querySelector('[data-project="upnote"]').textContent = t.descriptions.upnote;
    document.querySelector('[data-project="cinescore"]').textContent = t.descriptions.cinescore;
    document.querySelector('[data-project="crimsondawn"]').textContent = t.descriptions.crimsondawn;
    document.querySelector('[data-project="fullscansecurity"]').textContent = t.descriptions.fullscansecurity;
    document.querySelector('[data-project="gymchaos"]').textContent = t.descriptions.gymchaos;
    document.querySelector('[data-project="mdikranj"]').textContent = t.descriptions.mdikranjProject;
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'english' ? 'slovenian' : 'english';
    applyTranslations();
}

function showSection(sectionId) {
    document.querySelectorAll('.page').forEach((page) => {
        page.classList.toggle('active', page.id === sectionId);
    });
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const heroBg = document.getElementById('heroBg');
    heroBg.style.opacity = sectionId === 'home' ? '1' : '0.25';
}

function closeMenu() {
    document.getElementById('menu').classList.add('menu-hidden');
    document.getElementById('menuIcon').classList.remove('open');
}

function navigateToExternalCard(card) {
    const url = card.dataset.url;
    if (url) {
        window.location.assign(url);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-section]').forEach((control) => {
        control.addEventListener('click', (event) => {
            event.preventDefault();
            showSection(control.dataset.section);
        });
    });

    document.querySelectorAll('.external-card').forEach((card) => {
        card.addEventListener('click', () => navigateToExternalCard(card));
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                navigateToExternalCard(card);
            }
        });
    });
    const skillList = document.getElementById('skillList');
    const skills = Array.from(skillList.getElementsByTagName('li'));
    skills.sort((a, b) => a.textContent.localeCompare(b.textContent));
    skillList.innerHTML = '';
    skills.forEach((s) => skillList.appendChild(s));

    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menuIcon');
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('menu-hidden');
        menuIcon.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            closeMenu();
        }
    });

    document.getElementById('languageToggle').addEventListener('click', toggleLanguage);
});
