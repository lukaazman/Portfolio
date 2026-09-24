const translations = {
    english: {
        menu: { experience: "[ EXPERIENCE ]", projects: "[ PROJECTS ]", skills: "[ SKILLS ]", contact: "[ CONTACT ]", resume: "[ RÉSUMÉ ]" },
        welcome: 'Welcome to my Portfolio! My name is Luka Ažman and I am <br> a <span class="accent">Software Programmer</span> and <span class="accent">Game Developer</span>.',
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
            iskraemeco: "IT Department Intern — IT maintenance and company website management."
        },
    },
    slovenian: {
        menu: { experience: "[ IZKUŠNJE ]", projects: "[ PROJEKTI ]", skills: "[ VEŠČINE ]", contact: "[ KONTAKT ]", resume: "[ ŽIVLJENJEPIS ]" },
        welcome: 'Dobrodošli v mojem portfelju! Moje ime je Luka Ažman in sem <br> <span class="accent">Programer programske opreme</span> in <span class="accent">Razvijalec iger</span>.',
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
            iskraemeco: "Delovna praksa v IT oddelku — vzdrževanje IT-sistemov in upravljanje spletne strani podjetja."
        },
    }
};

let currentLanguage = 'english';

const projectCategoryData = [
    { id: 'all', tone: 'all', label: { english: 'All Projects', slovenian: 'Vsi projekti' } },
    { id: 'game-dev', tone: 'game', label: { english: 'Game Dev', slovenian: 'Razvoj iger' } },
    { id: 'mobile-dev', tone: 'mobile', label: { english: 'Mobile Dev', slovenian: 'Mobilni razvoj' } },
    { id: 'ai', tone: 'ai', label: { english: 'AI', slovenian: 'AI' } },
    { id: 'web-dev', tone: 'web', label: { english: 'Web Dev', slovenian: 'Spletni razvoj' } },
    { id: 'tools', tone: 'tools', label: { english: 'Tools', slovenian: 'Orodja' } }
];

const projectData = [
    { id: 'backrooms', category: 'game-dev', name: 'Backrooms', year: '2022–2023', path: '~/projects/backrooms', url: 'https://github.com/lukaazman/Backrooms', icon: 'assets/projects/backrooms-analog-v2.png', iconClass: 'backrooms', description: { english: 'Horror 3D video game made in Unreal Engine with Visual Scripting for my highschool graduation project.', slovenian: 'Grozljiva 3D video igra, narejena v Unreal Engine z vizualnim skriptiranjem za moj maturitetni projekt.' }, tags: ['Unreal Engine', 'Blueprints'] },
    { id: 'pixelife', category: 'game-dev', name: 'PixeLife', year: '2024', path: '~/projects/pixelife', url: 'https://github.com/lukaazman/PixeLife', icon: 'assets/projects/pixelife-mainmenu.gif', iconClass: 'pixelife', description: { english: 'Pixel art walking simulator 2D video game made in Unity and Aseprite.', slovenian: 'Pixel art simulator hoje 2D video igra izdelana v Unity in Aseprite.' }, tags: ['Unity', 'C#', 'Aseprite', 'Ink'] },
    { id: 'crimsondawn', category: 'game-dev', name: 'CrimsonDawn', year: '2025', path: '~/projects/crimsondawn', url: 'https://github.com/lukaazman/RG_igra', icon: 'assets/projects/crimsondawn-icon.png', iconClass: 'crimsondawn', description: { english: 'Doom clone 3D game made in WebGPU with a three-man group for a university project.', slovenian: 'Doom klon 3D igra narejena v WebGPU s tri-člansko skupino za univerzitetni projekt.' }, tags: ['WebGPU', 'JavaScript', 'Blender'] },
    { id: 'gymchaos', category: 'game-dev', name: 'GymChaos', year: '2026', path: '~/projects/gymchaos', url: 'https://github.com/lukaazman/GymChaos', icon: 'assets/projects/gymchaos-gameplay-enhanced.png', iconClass: 'gymchaos', description: { english: 'Fitness arcade fighting 3D game made in Unity.', slovenian: 'Fitnes arkadna borbena 3D igra narejena v Unity.' }, tags: ['Unity', 'C#', 'Blender'] },
    { id: 'fullscansecurity', category: 'mobile-dev', name: 'FullScanSecurity', year: '2026', path: '~/projects/fullscansecurity', url: 'https://github.com/lukaazman/FullScanSecurity', icon: 'assets/projects/fullscan-suite-v2.png', iconClass: 'suite fullscan', description: { english: 'Free Android security scanner that reviews app access, device settings and other security signals without root access.', slovenian: 'Brezplačen Android varnostni pregledovalnik, ki brez root dostopa preverja dovoljenja aplikacij, nastavitve naprave in druge varnostne signale.' }, tags: ['Android', 'Java', 'No root'] },
    { id: 'tabtensor', category: 'mobile-dev', name: 'TabTensor', year: '2026', path: '~/projects/tabtensor', url: 'https://github.com/lukaazman/TabTensor', icon: 'assets/projects/tabtensor-suite-v5.png', iconClass: 'suite', description: { english: 'Cross-platform guitar utility app for Android and iOS with a native microphone tuner, Guitar Pro, MusicXML and MIDI notation, practice playback, loops and mixing.', slovenian: 'Večplatformska kitarska aplikacija za Android in iOS z izvornim uglaševalnikom prek mikrofona, notacijo Guitar Pro, MusicXML in MIDI, vadbenim predvajanjem, zankami in mešanjem.' }, tags: ['Expo', 'React Native', 'TypeScript'] },
    { id: 'coderouter', category: 'ai', name: 'CodeRouter', year: '2026', path: '~/projects/coderouter', url: 'https://github.com/lukaazman/CodeRouter', icon: 'assets/projects/code-router.svg', iconClass: 'coderouter', description: { english: 'Python desktop code-agent wrapper that recreates the Codex and Claude Code workflow with free AI models through OpenRouter.', slovenian: 'Namizni Python ovijalnik za kodirne agente, ki posnema potek Codexa in Claude Code ter prek OpenRouterja uporablja brezplačne modele.' }, tags: ['Python', 'OpenRouter API', 'Windows Batch', 'JSON config'] },
    { id: 'cinescore', category: 'web-dev', name: 'CineScore', year: '2025', path: '~/projects/cinescore', url: 'https://github.com/lukaazman/CineScore', icon: 'assets/projects/cinescore-logo.svg', iconClass: 'cinescore', description: { english: 'Movie review site, made in a two-man group for a university project.', slovenian: 'Spletna stran za ocenjevanje filmov, narejena v dvo-članski skupini za univerzitetni projekt.' }, tags: ['.NET', 'C#', 'JavaScript', 'Azure'] },
    { id: 'mdikranj', category: 'web-dev', name: 'MDI Kranj', year: '2026', path: '~/projects/mdi-kranj', url: 'https://mdikranj.si', icon: 'assets/projects/mdi-logo.webp', iconClass: 'mdi', description: { english: 'Website made for Medobčinsko društvo invalidov Kranj as a part of student work.', slovenian: 'Spletna stran narejena za Medobčinsko društvo invalidov Kranj kot del študentskega dela.' }, tags: ['JavaScript', 'TypeScript', 'Cloudfare', 'Decap CMS'] },
    { id: 'simplesearch', category: 'tools', name: 'SimpleSearch', year: '2024', path: '~/projects/simplesearch', url: 'https://github.com/lukaazman/SimpleSearch', icon: 'assets/projects/simplesearch-repo-icon.png', iconClass: 'simplesearch', description: { english: 'Chrome Browser Extension made for simpler browsing using custom commands.', slovenian: 'Razširitev brskalnika Chrome za preprostejše brskanje z ukazi po meri.' }, tags: ['JavaScript', 'HTML', 'CSS'] },
    { id: 'upnote', category: 'tools', name: 'UpNote', year: '2025', path: '~/projects/upnote', url: 'https://github.com/lukaazman/UpNote', icon: 'assets/projects/upnote-background.png', iconClass: 'upnote', description: { english: 'Minimalistic and slick Markdown file Text Editor.', slovenian: 'Minimalističen in eleganten urejevalnik besedila datoteke Markdown.' }, tags: ['Python', 'CSS', 'HTML'] }
];

const skillGroups = [
    { id: 'languages', label: { english: 'Languages', slovenian: 'Jeziki' }, items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'C', 'SQL'] },
    { id: 'frameworks', label: { english: 'Frameworks & engines', slovenian: 'Frameworki in pogoni' }, items: ['React Native', 'Expo', '.NET', 'Unity', 'Unreal Engine', 'WebGPU', 'Ink'] },
    { id: 'tooling', label: { english: 'Tools & platforms', slovenian: 'Orodja in platforme' }, items: ['Android Studio', 'GitHub', 'OpenRouter', 'Codex', 'Claude Code', 'Blender', 'Aseprite', 'Decap CMS', 'Linux', 'Windows'] }
];

const projectUi = {
    english: {
        favorites: 'FAVORITES',
        collections: 'COLLECTIONS',
        sidebar: 'Project folders',
        viewGroup: 'Project view',
        project: 'project',
        projects: 'projects',
        item: 'item',
        items: 'items',
        iconView: 'Icon view',
        listView: 'List view',
        columnView: 'Column view',
        openRepository: 'Open {name} repository'
    },
    slovenian: {
        favorites: 'PRILJUBLJENO',
        collections: 'ZBIRKE',
        sidebar: 'Projektne mape',
        viewGroup: 'Pogled projektov',
        project: 'projekt',
        projects: 'projektov',
        item: 'element',
        items: 'elementov',
        iconView: 'Ikonski pogled',
        listView: 'Seznam',
        columnView: 'Stolpci',
        openRepository: 'Odpri repozitorij projekta {name}'
    }
};

let currentProjectCategory = 'all';
let currentProjectView = 'icons';

function escapeProjectText(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function localizedProjectText(value) {
    return value && typeof value === 'object' ? value[currentLanguage] : (value || '');
}

function getProjectCategory(categoryId) {
    return projectCategoryData.find((category) => category.id === categoryId) || projectCategoryData[0];
}

function getProjectsForCategory(categoryId) {
    return categoryId === 'all' ? projectData : projectData.filter((project) => project.category === categoryId);
}

function formatProjectCount(count) {
    const labels = projectUi[currentLanguage];
    if (currentLanguage === 'english') {
        return count + ' ' + (count === 1 ? labels.project : labels.projects);
    }
    if (count === 1) return '1 projekt';
    if (count === 2) return '2 projekta';
    if (count === 3 || count === 4) return count + ' projekti';
    return count + ' projektov';
}

function projectFolderIcon() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5h6l1.7 2h9.3v9h-17zM3.5 7.5v-2h5l1.7 2" /></svg>';
}

function renderProjectCategories() {
    const labels = projectUi[currentLanguage];
    const makeButton = (category) => {
        const selected = category.id === currentProjectCategory;
        return '<button class="project-category-button' + (selected ? ' is-selected' : '') + '" type="button" data-project-category="' + escapeProjectText(category.id) + '" aria-pressed="' + selected + '">' +
            '<span class="project-category-icon project-category-icon--' + escapeProjectText(category.tone) + '" aria-hidden="true">' + projectFolderIcon() + '</span>' +
            '<span class="project-category-name">' + escapeProjectText(localizedProjectText(category.label)) + '</span>' +
            '</button>';
    };
    const favoriteRoot = document.getElementById('projectFavorites');
    const categoryRoot = document.getElementById('projectCategories');
    if (!favoriteRoot || !categoryRoot) return;
    favoriteRoot.innerHTML = makeButton(projectCategoryData[0]);
    categoryRoot.innerHTML = projectCategoryData.slice(1).map(makeButton).join('');
}

function renderProjectEntry(project) {
    const labels = projectUi[currentLanguage];
    const category = getProjectCategory(project.category);
    const categoryLabel = localizedProjectText(category.label);
    const yearMarkup = project.year ? '<span class="project-entry-year">' + escapeProjectText(project.year) + '</span>' : '';
    const tagsMarkup = project.tags.map((tag) => '<span>' + escapeProjectText(tag) + '</span>').join('');
    const iconClasses = project.iconClass.split(' ').map((name) => 'project-entry-icon--' + escapeProjectText(name)).join(' ');
    const ariaLabel = labels.openRepository.replace('{name}', project.name);
    return '<a class="project-entry" href="' + escapeProjectText(project.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + escapeProjectText(ariaLabel) + '">' +
        '<span class="project-entry-icon ' + iconClasses + '"><img src="' + escapeProjectText(project.icon) + '" alt="" width="160" height="160" loading="lazy"></span>' +
        '<span class="project-entry-copy">' +
            '<span class="project-entry-meta"><span class="project-entry-category">' + escapeProjectText(categoryLabel) + '</span>' + yearMarkup + '</span>' +
            '<strong class="project-entry-title">' + escapeProjectText(project.name) + '</strong>' +
            '<span class="project-entry-path">' + escapeProjectText(project.path) + '</span>' +
            '<span class="project-entry-description">' + escapeProjectText(localizedProjectText(project.description)) + '</span>' +
            '<span class="project-entry-tags" aria-label="' + (currentLanguage === 'english' ? 'Technologies' : 'Tehnologije') + '">' + tagsMarkup + '</span>' +
        '</span>' +
        '<span class="project-entry-open" aria-hidden="true">↗</span>' +
        '</a>';
}

function renderProjectBrowser() {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;

    const labels = projectUi[currentLanguage];
    const category = getProjectCategory(currentProjectCategory);
    const projects = getProjectsForCategory(currentProjectCategory);
    const countText = formatProjectCount(projects.length);
    const viewLabels = { icons: labels.iconView, list: labels.listView, columns: labels.columnView };

    document.getElementById('projectFavoritesLabel').textContent = labels.favorites;
    document.getElementById('projectCollectionsLabel').textContent = labels.collections;
    document.getElementById('projectSidebar').setAttribute('aria-label', labels.sidebar);
    document.getElementById('projectViewGroup').setAttribute('aria-label', labels.viewGroup);
    document.querySelectorAll('[data-project-view]').forEach((button) => {
        button.setAttribute('aria-label', viewLabels[button.dataset.projectView]);
        button.title = viewLabels[button.dataset.projectView];
        const selected = button.dataset.projectView === currentProjectView;
        button.classList.toggle('is-selected', selected);
        button.setAttribute('aria-pressed', String(selected));
    });

    renderProjectCategories();
    grid.dataset.view = currentProjectView;
    grid.setAttribute('aria-label', localizedProjectText(category.label) + ' — ' + countText);
    grid.innerHTML = projects.map(renderProjectEntry).join('');

    document.getElementById('projectPath').textContent = currentProjectCategory === 'all' ? '~/projects' : '~/projects/' + currentProjectCategory;
    document.getElementById('projectHeading').textContent = localizedProjectText(category.label);
    document.getElementById('projectStatus').textContent = projects.length + ' ' + (projects.length === 1 ? labels.item : labels.items);
}

function renderSkillGroups() {
    const root = document.getElementById('skillsGrid');
    if (!root) return;
    root.setAttribute('aria-label', currentLanguage === 'english' ? 'Skill groups' : 'Skupine veščin');
    root.innerHTML = skillGroups.map((group) => {
        const headingId = 'skill-group-' + group.id;
        return '<section class="skill-group" aria-labelledby="' + headingId + '">' +
            '<div class="skill-group-heading"><h3 id="' + headingId + '">' + escapeProjectText(localizedProjectText(group.label)) + '</h3><span class="skill-group-count">' + group.items.length + '</span></div>' +
            '<ul class="skill-group-list tag-list tag-list--big">' + group.items.map((skill) => '<li>[ ' + escapeProjectText(skill) + ' ]</li>').join('') + '</ul>' +
            '</section>';
    }).join('');
}

function applyTranslations() {
    const t = translations[currentLanguage];

    document.querySelectorAll('[data-resume-link]').forEach((link) => {
        link.href = currentLanguage === 'english' ? 'r\u00e9sum\u00e9.pdf_eng' : 'r\u00e9sum\u00e9.pdf';
    });

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

    renderProjectBrowser();
    renderSkillGroups();
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

    const projectFinder = document.getElementById('projectFinder');
    projectFinder.addEventListener('click', (event) => {
        const viewButton = event.target.closest('[data-project-view]');
        if (viewButton) {
            currentProjectView = viewButton.dataset.projectView;
            renderProjectBrowser();
            return;
        }
        const categoryButton = event.target.closest('[data-project-category]');
        if (categoryButton) {
            currentProjectCategory = categoryButton.dataset.projectCategory;
            renderProjectBrowser();
            const selectedCategory = Array.from(projectFinder.querySelectorAll('[data-project-category]')).find((button) => button.dataset.projectCategory === currentProjectCategory);
            if (selectedCategory) selectedCategory.focus();
        }
    });
    renderProjectBrowser();
    renderSkillGroups();
});
