const categoryData = [
    { id: 'all', icon: 'folder-all', tone: 'all', label: { english: 'All Projects', slovenian: 'Vsi projekti' } },
    { id: 'game-dev', icon: 'folder-game', tone: 'game', label: { english: 'Game Dev', slovenian: 'Razvoj iger' } },
    { id: 'mobile-dev', icon: 'folder-mobile', tone: 'mobile', label: { english: 'Mobile Dev', slovenian: 'Mobilni razvoj' } },
    { id: 'ai', icon: 'folder-ai', tone: 'ai', label: { english: 'AI', slovenian: 'AI' } },
    { id: 'web-dev', icon: 'folder-web', tone: 'web', label: { english: 'Web Dev', slovenian: 'Spletni razvoj' } },
    { id: 'tools', icon: 'folder-tools', tone: 'tools', label: { english: 'Tools', slovenian: 'Orodja' } }
];

const projectData = [
    { id: 'backrooms', category: 'game-dev', name: 'Backrooms', year: '2022–2023', path: '~/projects/backrooms', url: 'https://github.com/lukaazman/Backrooms', icon: 'assets/projects/backrooms-analog-v2.png', iconClass: 'project-icon-art--backrooms', alt: 'Clearer analog-horror lost-footage treatment of the original Backrooms creature scene', description: { english: 'Horror 3D video game made in Unreal Engine with Visual Scripting for my highschool graduation project.', slovenian: 'Grozljiva 3D video igra, narejena v Unreal Engine z vizualnim skriptiranjem za moj maturitetni projekt.' }, tags: ['Unreal Engine', 'Blueprints'] },
    { id: 'pixelife', category: 'game-dev', name: 'PixeLife', year: '2024', path: '~/projects/pixelife', url: 'https://github.com/lukaazman/PixeLife', icon: 'assets/projects/pixelife-mainmenu.gif', iconClass: 'project-icon-art--pixelife', alt: 'PixeLife main menu with the player minion character', description: { english: 'Pixel art walking simulator 2D video game made in Unity and Aseprite.', slovenian: 'Pixel art simulator hoje 2D video igra izdelana v Unity in Aseprite.' }, tags: ['Unity', 'C#', 'Aseprite', 'Ink'] },
    { id: 'crimsondawn', category: 'game-dev', name: 'CrimsonDawn', year: '2025', path: '~/projects/crimsondawn', url: 'https://github.com/lukaazman/RG_igra', icon: 'assets/projects/crimsondawn-icon.png', iconClass: 'project-icon-art--crimsondawn', alt: 'Full CrimsonDawn repeated logo on a black app-icon background', description: { english: 'Doom clone 3D game made in WebGPU with a three-man group for a university project.', slovenian: 'Doom klon 3D igra narejena v WebGPU s tri-člansko skupino za univerzitetni projekt.' }, tags: ['WebGPU', 'JavaScript', 'Blender'] },
    { id: 'gymchaos', category: 'game-dev', name: 'GymChaos', year: '2026', path: '~/projects/gymchaos', url: 'https://github.com/lukaazman/GymChaos', icon: 'assets/projects/gymchaos-gameplay-enhanced.png', iconClass: 'project-icon-art--gymchaos', alt: 'AI-enhanced view of the actual GymChaos gym gameplay with a centered weightlifting mark', description: { english: 'Fitness arcade fighting 3D game made in Unity.', slovenian: 'Fitnes arkadna borbena 3D igra narejena v Unity.' }, tags: ['Unity', 'C#', 'Blender'] },
    { id: 'fullscansecurity', category: 'mobile-dev', name: 'FullScanSecurity', year: '2026', path: '~/projects/fullscansecurity', url: 'https://github.com/lukaazman/FullScanSecurity', icon: 'assets/projects/fullscan-suite-v2.png', iconClass: 'project-icon-art--suite project-icon-art--fullscan', alt: 'FullScanSecurity suite icon with a shared dark bezel, large shield and light-green scan marks', description: { english: 'Free Android security scanner that reviews app access, device settings and other security signals without root access.', slovenian: 'Brezplačen Android varnostni pregledovalnik, ki brez root dostopa preverja dovoljenja aplikacij, nastavitve naprave in druge varnostne signale.' }, tags: ['Android', 'Java', 'No root'] },
    { id: 'tabtensor', category: 'mobile-dev', name: 'TabTensor', path: '~/projects/tabtensor', url: 'https://github.com/lukaazman/TabTensor', icon: 'assets/projects/tabtensor-suite-v5.png', iconClass: 'project-icon-art--suite', alt: 'TabTensor suite icon with the same bezel as FullScanSecurity and a black, white and red sensor mark', description: { english: 'Cross-platform guitar utility app for Android and iOS with a native microphone tuner, Guitar Pro, MusicXML and MIDI notation, practice playback, loops and mixing.', slovenian: 'Večplatformska kitarska aplikacija za Android in iOS z izvornim uglaševalnikom prek mikrofona, notacijo Guitar Pro, MusicXML in MIDI, vadbenim predvajanjem, zankami in mešanjem.' }, tags: ['Expo', 'React Native', 'TypeScript'] },
    { id: 'coderouter', category: 'ai', name: 'CodeRouter', path: '~/projects/coderouter', url: 'https://github.com/lukaazman/CodeRouter', icon: 'assets/projects/code-router.svg', iconClass: 'project-icon-art--coderouter', alt: 'Black and white routing nodes icon for CodeRouter', description: { english: 'Python desktop code-agent wrapper that recreates the Codex and Claude Code workflow with free AI models through OpenRouter.', slovenian: 'Namizni Python ovijalnik za kodirne agente, ki posnema potek Codexa in Claude Code ter prek OpenRouterja uporablja brezplačne modele.' }, tags: ['Python', 'OpenRouter API', 'Windows Batch', 'JSON config'] },
    { id: 'cinescore', category: 'web-dev', name: 'CineScore', year: '2025', path: '~/projects/cinescore', url: 'https://github.com/lukaazman/CineScore', icon: 'assets/projects/cinescore-logo.svg', alt: 'CineScore site icon from the project repository', description: { english: 'Movie review site, made in a two-man group for a university project.', slovenian: 'Spletna stran za ocenjevanje filmov, narejena v dvo-članski skupini za univerzitetni projekt.' }, tags: ['.NET', 'C#', 'JavaScript', 'Azure'] },
    { id: 'mdikranj', category: 'web-dev', name: 'MDI Kranj', year: '2026', path: '~/projects/mdi-kranj', url: 'https://mdikranj.si', icon: 'assets/projects/mdi-logo.webp', iconClass: 'project-icon-art--mdi', alt: 'MDI Kranj association logo from the website', description: { english: 'Website made for Medobčinsko društvo invalidov Kranj as a part of student work.', slovenian: 'Spletna stran narejena za Medobčinsko društvo invalidov Kranj kot del študentskega dela.' }, tags: ['JavaScript', 'TypeScript', 'Cloudfare', 'Decap CMS'] },
    { id: 'simplesearch', category: 'tools', name: 'SimpleSearch', year: '2024', path: '~/projects/simplesearch', url: 'https://github.com/lukaazman/SimpleSearch', icon: 'assets/projects/simplesearch-repo-icon.png', iconClass: 'project-icon-art--simplesearch', alt: 'Clean SimpleSearch repository icon with the blue globe, search mark and SIMPLE wordmark', description: { english: 'Chrome Browser Extension made for simpler browsing using custom commands.', slovenian: 'Razširitev brskalnika Chrome za preprostejše brskanje z ukazi po meri.' }, tags: ['JavaScript', 'HTML', 'CSS'] },
    { id: 'upnote', category: 'tools', name: 'UpNote', year: '2025', path: '~/projects/upnote', url: 'https://github.com/lukaazman/UpNote', icon: 'assets/projects/upnote-background.png', iconClass: 'project-icon-art--upnote', alt: 'Zoomed UpNote background logo with the letters U and N', description: { english: 'Minimalistic and slick Markdown file Text Editor.', slovenian: 'Minimalističen in eleganten urejevalnik besedila datoteke Markdown.' }, tags: ['Python', 'CSS', 'HTML'] }
];

const skillGroups = [
    { id: 'languages', label: { english: 'Languages', slovenian: 'Jeziki' }, items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'C', 'SQL'] },
    { id: 'frameworks', label: { english: 'Frameworks & engines', slovenian: 'Frameworki in pogoni' }, items: ['React Native', 'Expo', '.NET', 'Unity', 'Unreal Engine', 'WebGPU', 'Ink'] },
    { id: 'tooling', label: { english: 'Tools & platforms', slovenian: 'Orodja in platforme' }, items: ['Android Studio', 'GitHub', 'OpenRouter', 'Blender', 'Aseprite', 'Decap CMS', 'Linux', 'Windows'] }
];

const appCatalog = [
    { id: 'home', labelKey: 'app.about', descriptionKey: 'spotlight.aboutDescription' },
    { id: 'experience', labelKey: 'app.experience', descriptionKey: 'spotlight.experienceDescription' },
    { id: 'projects', labelKey: 'app.projects', descriptionKey: 'spotlight.projectsDescription' },
    { id: 'skills', labelKey: 'app.skills', descriptionKey: 'spotlight.skillsDescription' },
    { id: 'contact', labelKey: 'app.contact', descriptionKey: 'spotlight.contactDescription' },
    { id: 'resume', labelKey: 'app.resume', descriptionKey: 'spotlight.resumeDescription' }
];

const menuDefinitions = {
    system: { titleKey: 'menu.systemTitle', items: [{ action: 'open-home', labelKey: 'menuItems.about', shortcut: '⌘1' }, { action: 'open-contact', labelKey: 'menuItems.contact', shortcut: '⌘5' }, { action: 'language', labelKey: 'menuItems.language', shortcut: '' }, { action: 'lock', labelKey: 'menuItems.lock', shortcut: '⌃⌘L' }] },
    finder: { titleKey: 'menu.finderTitle', items: [{ action: 'open-projects', labelKey: 'menuItems.openProjects', shortcut: '⌘3' }, { action: 'spotlight', labelKey: 'menuItems.search', shortcut: '⌘K' }] },
    file: { titleKey: 'menu.fileTitle', items: [{ action: 'open-home', labelKey: 'menuItems.newAbout', shortcut: '⌘N' }, { action: 'refresh', labelKey: 'menuItems.refresh', shortcut: '' }] },
    edit: { titleKey: 'menu.editTitle', items: [{ action: 'copy-email', labelKey: 'menuItems.copyEmail', shortcut: '' }, { action: 'language', labelKey: 'menuItems.language', shortcut: '' }] },
    view: { titleKey: 'menu.viewTitle', items: [{ action: 'grid', labelKey: 'menuItems.iconView', shortcut: '⌘1' }, { action: 'list', labelKey: 'menuItems.listView', shortcut: '⌘2' }, { action: 'columns', labelKey: 'menuItems.columnView', shortcut: '⌘3' }, { action: 'spotlight', labelKey: 'menuItems.search', shortcut: '⌘K' }] },
    go: { titleKey: 'menu.goTitle', items: [{ action: 'open-home', labelKey: 'menuItems.about', shortcut: '⌘1' }, { action: 'open-projects', labelKey: 'menuItems.openProjects', shortcut: '⌘3' }, { action: 'open-contact', labelKey: 'menuItems.contact', shortcut: '⌘5' }] },
    window: { titleKey: 'menu.windowTitle', items: [{ action: 'minimize', labelKey: 'menuItems.minimize', shortcut: '⌘M' }, { action: 'zoom', labelKey: 'menuItems.zoom', shortcut: '' }, { action: 'close', labelKey: 'menuItems.close', shortcut: '⌘W' }] },
    help: { titleKey: 'menu.helpTitle', items: [{ action: 'open-home', labelKey: 'menuItems.readme', shortcut: '' }, { action: 'spotlight', labelKey: 'menuItems.search', shortcut: '⌘K' }] }
};

const translations = {
    english: {
        lock: { session: 'LOCAL SESSION', ready: 'READY', kicker: 'PORTFOLIO / 2026', role: 'Software Programmer · Game Developer', roleOne: 'SOFTWARE PROGRAMMER', roleTwo: 'GAME DEVELOPER', enter: 'Enter desktop', hint: 'Press Enter or click to unlock', welcome: 'Welcome to my Portfolio! My name is Luka Ažman and I am a <span class="accent-text">Software Programmer</span> and <span class="accent-text">Game Developer</span>.' },
        menu: { finder: 'Finder', file: 'File', edit: 'Edit', view: 'View', go: 'Go', window: 'Window', help: 'Help', systemTitle: 'PortfolioOS', finderTitle: 'Finder', fileTitle: 'File', editTitle: 'Edit', viewTitle: 'View', goTitle: 'Go', windowTitle: 'Window', helpTitle: 'Help' },
        menuItems: { about: 'Open About', contact: 'Open Contact', language: 'Switch language', lock: 'Lock screen', openProjects: 'Open Projects', search: 'Search portfolio', newAbout: 'Open About', refresh: 'Refresh desktop', iconView: 'Projects as icons', listView: 'Projects as list', columnView: 'Projects as columns', copyEmail: 'Copy email address', minimize: 'Minimize window', zoom: 'Zoom window', close: 'Close window', readme: 'Read README' },
        desktop: { kicker: 'PORTFOLIO / DESKTOP', role: 'Software Programmer / Game Developer', hint: 'Open an app to explore the work.', status: 'SESSION ACTIVE', searchHint: 'Search anywhere' },
        app: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact', resume: 'Résumé', control: 'Control' },
        home: { kicker: '~/portfolio/about', title: 'A programmer who builds worlds.', body: 'I am Luka Ažman — a Software Programmer and Game Developer focused on building useful tools, playable systems and thoughtful digital experiences.', openProjects: 'Open Projects', openContact: 'Contact', factOneLabel: 'Focus', factOneValue: 'Software / Games', factTwoLabel: 'Workspace', factTwoValue: 'Code / Design / Systems', factThreeLabel: 'Current view', factThreeValue: 'Desktop' },
        experience: { kicker: '~/portfolio/experience', title: 'Experience', lede: 'A short record of work, practice and shipped things.', studentWork: '[ STUDENT WORK ]', internship: '[ INTERNSHIP ]', mdi: "Built the organization's website as part of student work for Medobčinsko društvo invalidov Kranj.", iskra: 'IT department internship — IT maintenance and company website management.', footnote: 'Also completed seasonal part-time work in retail, hospitality, and logistics (2020–2025).' },
        projects: { favorites: 'Favorites', all: 'All Projects', collections: 'Collections', localIndex: 'Local project index', storage: '', lede: 'Selected work, experiments and tools.', searchLabel: 'Search projects', searchPlaceholder: 'Search', folderDescription: 'Project folder · {count}', searchResults: 'Search results', project: 'project', projects: 'projects', technologies: 'Technologies', openRepository: 'Open repository', openAria: 'Open {name} repository', emptyTitle: 'No matching projects', emptyBody: 'Try another search or open All Projects.', clearSearch: 'Clear search' },
        sidebar: { owner: 'Luka Ažman', active: 'Active', system: 'System' },
        skills: { kicker: '~/portfolio/skills', title: 'Skills', lede: 'Languages, frameworks and tools used across the work.' },
        contact: { kicker: '~/portfolio/contact', title: 'Open channel.', lede: 'The fastest way to reach me is email. The other links point to the places where I work in public.', email: 'Email', resume: 'Résumé', copy: 'Copy email', copied: 'Copied' },
        resume: { kicker: '~/portfolio/résumé.pdf', title: 'résumé.pdf', role: 'Software Programmer / Game Developer', lede: 'Open the PDF for the full résumé and current project context.', open: 'Open in Preview ↗', fallback: 'Open the full PDF' },
        control: { kicker: 'PORTFOLIO SYSTEM', title: 'Control Center', connected: 'Connected', index: 'Local project index', projects: 'projects indexed', language: 'Language', finder: 'Finder', finderValue: 'Open project window', lock: 'Lock screen', contact: 'Open contact' },
        context: { desktop: 'Desktop', app: '{name}', project: '{name}', open: 'Open', minimize: 'Minimize', zoom: 'Zoom', close: 'Close', openRepository: 'Open repository', copyLink: 'Copy link', openProjects: 'Open Projects', openHome: 'Open About', refresh: 'Refresh desktop', copied: 'Link copied' },
        spotlight: { kicker: 'PORTFOLIO SEARCH', title: 'Search desktop', label: 'Search portfolio', placeholder: 'Search apps and projects', hint: 'Use ↑ ↓ to move · Enter to open', noResults: 'No matching apps or projects', aboutDescription: 'Welcome and profile', experienceDescription: 'Work and practice', projectsDescription: 'Projects and repositories', skillsDescription: 'Languages and tools', contactDescription: 'Email and links', resumeDescription: 'Résumé PDF' },
        footer: { note: 'SOFTWARE PROGRAMMER / GAME DEVELOPER' },
        common: { open: 'Open', selected: 'Selected' }
    },
    slovenian: {
        lock: { session: 'LOKALNA SEJA', ready: 'PRIPRAVLJENO', kicker: 'PORTFOLIO / 2026', role: 'Programer programske opreme · razvijalec iger', roleOne: 'PROGRAMER PROGRAMSKE OPREME', roleTwo: 'RAZVIJALEC IGER', enter: 'Vstopi na namizje', hint: 'Pritisni Enter ali klikni za odklep', welcome: 'Dobrodošli v mojem portfoliu! Moje ime je Luka Ažman in sem <span class="accent-text">programer programske opreme</span> in <span class="accent-text">razvijalec iger</span>.' },
        menu: { finder: 'Finder', file: 'Datoteka', edit: 'Uredi', view: 'Pogled', go: 'Pojdi', window: 'Okno', help: 'Pomoč', systemTitle: 'PortfolioOS', finderTitle: 'Finder', fileTitle: 'Datoteka', editTitle: 'Uredi', viewTitle: 'Pogled', goTitle: 'Pojdi', windowTitle: 'Okno', helpTitle: 'Pomoč' },
        menuItems: { about: 'Odpri About', contact: 'Odpri kontakt', language: 'Zamenjaj jezik', lock: 'Zakleni zaslon', openProjects: 'Odpri projekte', search: 'Išči po portfoliu', newAbout: 'Odpri About', refresh: 'Osveži namizje', iconView: 'Projekti kot ikone', listView: 'Projekti kot seznam', columnView: 'Projekti kot stolpce', copyEmail: 'Kopiraj e-poštni naslov', minimize: 'Minimiziraj okno', zoom: 'Povečaj okno', close: 'Zapri okno', readme: 'Preberi README' },
        desktop: { kicker: 'PORTFOLIO / NAMIZJE', role: 'Programer programske opreme / razvijalec iger', hint: 'Odpri aplikacijo in razišči delo.', status: 'SEJA AKTIVNA', searchHint: 'Išči povsod' },
        app: { about: 'About', experience: 'Izkušnje', projects: 'Projekti', skills: 'Veščine', contact: 'Kontakt', resume: 'Življenjepis', control: 'Nadzor' },
        home: { kicker: '~/portfolio/about', title: 'Programer, ki gradi svetove.', body: 'Sem Luka Ažman — programer programske opreme in razvijalec iger, osredotočen na uporabna orodja, igralne sisteme in premišljene digitalne izkušnje.', openProjects: 'Odpri projekte', openContact: 'Kontakt', factOneLabel: 'Fokus', factOneValue: 'Programska oprema / igre', factTwoLabel: 'Delovno okolje', factTwoValue: 'Koda / dizajn / sistemi', factThreeLabel: 'Trenutni pogled', factThreeValue: 'Namizje' },
        experience: { kicker: '~/portfolio/izkusnje', title: 'Izkušnje', lede: 'Kratek zapis dela, prakse in izdelanih stvari.', studentWork: '[ ŠTUDENTSKO DELO ]', internship: '[ PRAKSA ]', mdi: 'Izdelava spletne strani kot del študentskega dela za Medobčinsko društvo invalidov Kranj.', iskra: 'Delovna praksa v IT oddelku — vzdrževanje IT-sistemov in upravljanje spletne strani podjetja.', footnote: 'Opravljal tudi sezonska študentska dela v trgovini, gostinstvu in logistiki (2020–2025).' },
        projects: { favorites: 'Priljubljeno', all: 'Vsi projekti', collections: 'Zbirke', localIndex: 'Lokalni indeks projektov', storage: '', lede: 'Izbrani projekti, eksperimenti in orodja.', searchLabel: 'Išči projekte', searchPlaceholder: 'Iskanje', folderDescription: 'Mapa projekta · {count}', searchResults: 'Rezultati iskanja', project: 'projekt', projects: 'projektov', technologies: 'Tehnologije', openRepository: 'Odpri repozitorij', openAria: 'Odpri repozitorij projekta {name}', emptyTitle: 'Ni ujemajočih projektov', emptyBody: 'Poskusi drugo iskanje ali odpri vse projekte.', clearSearch: 'Počisti iskanje' },
        sidebar: { owner: 'Luka Ažman', active: 'Aktivno', system: 'Sistem' },
        skills: { kicker: '~/portfolio/vescine', title: 'Veščine', lede: 'Jeziki, frameworki in orodja, uporabljeni pri delu.' },
        contact: { kicker: '~/portfolio/kontakt', title: 'Odprt kanal.', lede: 'Najhitreje me dosežeš po e-pošti. Druge povezave vodijo do mest, kjer delam javno.', email: 'E-pošta', resume: 'Življenjepis', copy: 'Kopiraj e-pošto', copied: 'Kopirano' },
        resume: { kicker: '~/portfolio/zivljenjepis.pdf', title: 'résumé.pdf', role: 'Programer programske opreme / razvijalec iger', lede: 'Odpri PDF za celoten življenjepis in trenutni kontekst projektov.', open: 'Odpri v Preview ↗', fallback: 'Odpri celoten PDF' },
        control: { kicker: 'PORTFOLIO SISTEM', title: 'Nadzorno središče', connected: 'Povezano', index: 'Lokalni indeks projektov', projects: 'indeksiranih projektov', language: 'Jezik', finder: 'Finder', finderValue: 'Odpri projektno okno', lock: 'Zakleni zaslon', contact: 'Odpri kontakt' },
        context: { desktop: 'Namizje', app: '{name}', project: '{name}', open: 'Odpri', minimize: 'Minimiziraj', zoom: 'Povečaj', close: 'Zapri', openRepository: 'Odpri repozitorij', copyLink: 'Kopiraj povezavo', openProjects: 'Odpri projekte', openHome: 'Odpri About', refresh: 'Osveži namizje', copied: 'Povezava kopirana' },
        spotlight: { kicker: 'ISKANJE PO PORTFOLIU', title: 'Išči po namizju', label: 'Išči po portfoliu', placeholder: 'Išči aplikacije in projekte', hint: '↑ ↓ za premik · Enter za odpiranje', noResults: 'Ni ujemajočih aplikacij ali projektov', aboutDescription: 'Dobrodošlica in profil', experienceDescription: 'Delo in praksa', projectsDescription: 'Projekti in repozitoriji', skillsDescription: 'Jeziki in orodja', contactDescription: 'E-pošta in povezave', resumeDescription: 'PDF življenjepisa' },
        footer: { note: 'PROGRAMER PROGRAMSKE OPREME / RAZVIJALEC IGER' },
        common: { open: 'Odpri', selected: 'Izbrano' }
    }
};

let currentLanguage = 'english';
let finderCategoryId = 'all';
let finderView = 'grid';
let finderSearch = '';
let finderHistory = ['all'];
let finderHistoryIndex = 0;
let activeWindowId = null;
let highestWindowZ = 20;
let windowStates = new Map();
let pointerGesture = null;
let spotlightItems = [];
let spotlightSelection = 0;
let clockTimer = null;
let dockFrame = 0;
let dockPointerX = null;
let contextState = { type: 'desktop', id: null, title: '', url: '' };

const windowSpecs = [
    { id: 'home', elementId: 'window-home', defaultWidth: 630, defaultHeight: 430, minWidth: 420, minHeight: 320, offsetX: 58, offsetY: 86 },
    { id: 'experience', elementId: 'window-experience', defaultWidth: 720, defaultHeight: 500, minWidth: 480, minHeight: 350, offsetX: 184, offsetY: 118 },
    { id: 'projects', elementId: 'window-projects', defaultWidth: 1000, defaultHeight: 650, minWidth: 650, minHeight: 420, offsetX: 108, offsetY: 72 },
    { id: 'skills', elementId: 'window-skills', defaultWidth: 740, defaultHeight: 540, minWidth: 500, minHeight: 360, offsetX: 278, offsetY: 164 },
    { id: 'contact', elementId: 'window-contact', defaultWidth: 650, defaultHeight: 520, minWidth: 450, minHeight: 360, offsetX: 354, offsetY: 228 },
    { id: 'resume', elementId: 'window-resume', defaultWidth: 760, defaultHeight: 500, minWidth: 520, minHeight: 360, offsetX: 432, offsetY: 292 }
];

function query(selector, root = document) { return root.querySelector(selector); }
function queryAll(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }

function escapeHTML(value = '') {
    return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function localized(value) {
    if (!value) return '';
    return typeof value === 'object' ? value[currentLanguage] : value;
}

function t(key) {
    return key.split('.').reduce((value, part) => value?.[part], translations[currentLanguage]);
}

function setText(id, value) {
    const element = document.getElementById(id);
    if (element && value !== undefined) element.textContent = value;
}

function formatProjectCount(count) {
    const labels = translations[currentLanguage].projects;
    return `${count} ${count === 1 ? labels.project : labels.projects}`;
}

function categoryById(categoryId) {
    return categoryData.find((category) => category.id === categoryId) || categoryData[0];
}

function projectsForCategory(categoryId) {
    return categoryId === 'all' ? projectData : projectData.filter((project) => project.category === categoryId);
}

function filteredProjects() {
    const queryValue = finderSearch.trim().toLocaleLowerCase();
    const projects = projectsForCategory(finderCategoryId);
    if (!queryValue) return projects;
    return projects.filter((project) => {
        const haystack = [project.name, project.path, project.description?.english, project.description?.slovenian, ...(project.tags || [])].filter(Boolean).join(' ').toLocaleLowerCase();
        return haystack.includes(queryValue);
    });
}

function renderProjectCategories() {
    const root = document.getElementById('projectCategories');
    if (!root) return;
    root.innerHTML = categoryData.slice(1).map((category) => {
        const selected = category.id === finderCategoryId;
        return `<button class="sidebar-item${selected ? ' is-selected' : ''}" type="button" data-category="${escapeHTML(category.id)}" aria-current="${selected ? 'true' : 'false'}"><span class="sidebar-item-icon sidebar-item-icon--${escapeHTML(category.tone)}" aria-hidden="true"><svg viewBox="0 0 160 128" focusable="false"><use href="assets/project-icons.svg#${escapeHTML(category.icon)}"></use></svg></span><span>${escapeHTML(localized(category.label))}</span><span data-category-count="${escapeHTML(category.id)}">${projectsForCategory(category.id).length}</span></button>`;
    }).join('');
    queryAll('[data-category-count]').forEach((element) => { element.textContent = String(projectsForCategory(element.dataset.categoryCount).length); });
}

function renderProjectCard(project) {
    const labels = translations[currentLanguage];
    const description = localized(project.description);
    const tags = project.tags?.length ? project.tags : [localized(categoryById(project.category).label)];
    const iconClass = project.iconClass ? ` ${escapeHTML(project.iconClass)}` : '';
    const year = project.year ? `<span>${escapeHTML(project.year)}</span>` : '';
    const ariaLabel = labels.projects.openAria.replace('{name}', project.name);
    const visualMarkup = `<span class="project-card-visual${iconClass}"><img src="${escapeHTML(project.icon)}" alt="${escapeHTML(project.alt)}" width="180" height="140" loading="lazy"></span>`;
    if (finderView === 'grid') {
        return `<article class="project-card-entry" data-project-id="${escapeHTML(project.id)}" data-project-url="${escapeHTML(project.url)}"><a class="project-card" href="${escapeHTML(project.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(ariaLabel)}">${visualMarkup}<strong class="project-card-title">${escapeHTML(project.name)}</strong></a></article>`;
    }
    const descriptionMarkup = description ? `<span class="project-card-description">${escapeHTML(description)}</span>` : '';
    return `<article class="project-card-entry" data-project-id="${escapeHTML(project.id)}" data-project-url="${escapeHTML(project.url)}"><a class="project-card" href="${escapeHTML(project.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(ariaLabel)}">${visualMarkup}<span class="project-card-content"><span class="project-card-meta"><span>${escapeHTML(project.path || `~/projects/${project.id}`)}</span>${year}</span><strong class="project-card-title">${escapeHTML(project.name)} <span aria-hidden="true">↗</span></strong>${descriptionMarkup}<span class="project-card-tags" aria-label="${escapeHTML(labels.projects.technologies)}">${tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')}</span><span class="project-card-link">${escapeHTML(labels.projects.openRepository)} <span aria-hidden="true">↗</span></span></span></a></article>`;
}

function updateProjectHistoryControls() {
    const back = query('[data-project-action="back"]');
    const forward = query('[data-project-action="forward"]');
    if (back) back.disabled = finderHistoryIndex <= 0;
    if (forward) forward.disabled = finderHistoryIndex >= finderHistory.length - 1;
}

function renderFinder() {
    const root = document.getElementById('projectList');
    if (!root) return;
    const labels = translations[currentLanguage].projects;
    const category = categoryById(finderCategoryId);
    const projects = filteredProjects();
    const count = formatProjectCount(projects.length);
    const path = finderCategoryId === 'all' ? '~/portfolio/projects' : `~/portfolio/projects/${finderCategoryId}`;
    const description = finderSearch.trim() ? `${labels.searchResults} · ${count}` : labels.folderDescription.replace('{count}', count);
    root.dataset.view = finderView;
    root.setAttribute('aria-label', `${localized(category.label)} — ${count}`);
    root.innerHTML = projects.map(renderProjectCard).join('');
    setText('projectPath', path); setText('projectCount', count); setText('projectDescription', description); setText('projectHeading', localized(category.label)); setText('finderResultCount', String(projects.length)); setText('finderStatus', `${projects.length} items`); setText('projectLede', labels.lede);
    const empty = document.getElementById('projectEmpty');
    if (empty) empty.hidden = projects.length > 0;
    queryAll('.sidebar-item').forEach((item) => { const selected = item.dataset.category === finderCategoryId; item.classList.toggle('is-selected', selected); item.setAttribute('aria-current', selected ? 'true' : 'false'); });
    queryAll('[data-project-view]').forEach((button) => { const selected = button.dataset.projectView === finderView; button.classList.toggle('is-selected', selected); button.setAttribute('aria-pressed', selected ? 'true' : 'false'); });
    updateProjectHistoryControls();
    setText('menubarPath', finderCategoryId === 'all' ? '~/portfolio' : path);
}

function renderSkills() {
    const root = document.getElementById('skillsGrid');
    if (!root) return;
    root.innerHTML = skillGroups.map((group) => `<section class="skill-group"><div class="skill-group-heading"><span class="skill-group-mark">${escapeHTML(group.id.slice(0, 2).toUpperCase())}</span><h3>${escapeHTML(localized(group.label))}</h3><span>${group.items.length}</span></div><ul>${group.items.map((skill) => `<li>${escapeHTML(skill)}</li>`).join('')}</ul></section>`).join('');
}

function renderAllContent() {
    renderProjectCategories(); renderFinder(); renderSkills();
    setText('controlProjectCount', String(projectData.length));
}

function pushFinderHistory(categoryId) {
    if (finderHistory[finderHistoryIndex] === categoryId) return;
    finderHistory = finderHistory.slice(0, finderHistoryIndex + 1); finderHistory.push(categoryId); finderHistoryIndex = finderHistory.length - 1;
}

function setFinderCategory(categoryId, { pushHistory = true, focus = false } = {}) {
    const next = categoryById(categoryId).id;
    if (pushHistory) pushFinderHistory(next);
    finderCategoryId = next; finderSearch = '';
    const input = document.getElementById('projectSearch'); if (input) input.value = '';
    renderAllContent(); openWindow('projects');
    if (focus) requestAnimationFrame(() => query(`.sidebar-item[data-category="${CSS.escape(next)}"]`)?.focus());
}

function navigateFinderHistory(direction) {
    const nextIndex = finderHistoryIndex + direction;
    if (nextIndex < 0 || nextIndex >= finderHistory.length) return;
    finderHistoryIndex = nextIndex; finderCategoryId = finderHistory[finderHistoryIndex]; finderSearch = '';
    const input = document.getElementById('projectSearch'); if (input) input.value = '';
    renderAllContent();
}

function getSurfaceRect() {
    const rect = document.getElementById('desktopSurface')?.getBoundingClientRect();
    return { left: rect?.left || 0, top: rect?.top || 0, width: rect?.width || Math.max(320, window.innerWidth - 24), height: rect?.height || Math.max(240, window.innerHeight - 190) };
}

function applyWindowRect(state) {
    if (!state?.element) return;
    state.element.style.setProperty('--window-x', `${Math.round(state.rect.x)}px`); state.element.style.setProperty('--window-y', `${Math.round(state.rect.y)}px`); state.element.style.setProperty('--window-width', `${Math.round(state.rect.width)}px`); state.element.style.setProperty('--window-height', `${Math.round(state.rect.height)}px`);
}

function ensureWindowRect(state) {
    if (!state || state.rectInitialized) return;
    const surface = getSurfaceRect();
    const width = Math.min(state.defaultWidth, Math.max(state.minWidth, surface.width - 24));
    const height = Math.min(state.defaultHeight, Math.max(state.minHeight, surface.height - 24));
    const maxX = Math.max(18, surface.width - width - 18);
    const maxY = Math.max(18, surface.height - height - 18);
    const x = Math.min(Math.max(18, state.offsetX), maxX);
    const y = Math.min(Math.max(18, state.offsetY), maxY);
    state.rect = { x, y, width, height }; state.rectInitialized = true; applyWindowRect(state);
}

function clampWindowRect(state) {
    if (!state || state.maximized) return;
    const surface = getSurfaceRect();
    state.rect.x = Math.min(Math.max(8, state.rect.x), Math.max(8, surface.width - state.rect.width - 8));
    state.rect.y = Math.min(Math.max(8, state.rect.y), Math.max(8, surface.height - state.rect.height - 8));
    applyWindowRect(state);
}

function syncWindowA11y(state) {
    if (!state?.element) return;
    const inaccessible = !state.open || state.minimized;
    state.element.hidden = !state.open;
    state.element.inert = inaccessible;
    state.element.classList.toggle('is-minimized', state.minimized);
    state.element.classList.toggle('is-maximized', state.maximized);
    state.element.classList.toggle('is-active', state.id === activeWindowId && state.open && !state.minimized);
    state.element.setAttribute('aria-hidden', inaccessible ? 'true' : 'false');
    state.element.dataset.windowState = !state.open ? 'closed' : state.minimized ? 'minimized' : 'open';
    state.element.dataset.maximized = state.maximized ? 'true' : 'false';
}

function syncDock() {
    const shell = document.getElementById('desktopShell');
    const finderOpen = Boolean(windowStates.get('projects')?.open && !windowStates.get('projects')?.minimized);
    shell?.classList.toggle('is-finder-open', finderOpen);
    queryAll('[data-dock-app]').forEach((item) => {
        const app = item.dataset.dockApp;
        const state = windowStates.get(app);
        const running = Boolean(state?.open);
        const active = activeWindowId === app;
        item.classList.toggle('is-running', running); item.classList.toggle('is-active', active); item.setAttribute('aria-current', active ? 'true' : 'false');
    });
    queryAll('[data-side-app]').forEach((item) => {
        const app = item.dataset.sideApp;
        const active = app === activeWindowId || (app === 'projects' && finderOpen);
        item.classList.toggle('is-active', active); item.setAttribute('aria-current', active ? 'true' : 'false');
    });
}

function resetDockMagnification() {
    if (dockFrame) { cancelAnimationFrame(dockFrame); dockFrame = 0; }
    dockPointerX = null;
    queryAll('.dock-item').forEach((item) => {
        item.style.setProperty('--dock-scale', '1');
        item.style.setProperty('--dock-lift', '0px');
        item.classList.remove('is-hovered');
    });
    const focusedItem = document.activeElement?.closest?.('#desktopDock .dock-item');
    const dock = document.getElementById('desktopDock');
    if (focusedItem && dock) updateDockMagnification(dock.getBoundingClientRect().left + focusedItem.offsetLeft + focusedItem.offsetWidth / 2);
}

function updateDockMagnification(clientX) {
    const dock = document.getElementById('desktopDock');
    if (!dock || clientX === null) return;
    const dockRect = dock.getBoundingClientRect();
    const items = queryAll('.dock-item', dock);
    const metrics = items.map((item, index) => {
        const center = dockRect.left + item.offsetLeft + item.offsetWidth / 2;
        return { item, index, distance: Math.abs(clientX - center) };
    });
    const nearestMetric = metrics.reduce((nearest, metric) => metric.distance < nearest.distance ? metric : nearest, { distance: Number.POSITIVE_INFINITY });
    const nearestIndex = nearestMetric.index;
    if (nearestIndex === undefined) return;
    metrics.forEach(({ item, index, distance }) => {
        const distanceInfluence = Math.max(0, 1 - distance / 170);
        const indexDistance = Math.abs(index - nearestIndex);
        const neighborFloor = indexDistance === 0 ? 1.34 : indexDistance === 1 ? 1.18 : indexDistance === 2 ? 1.08 : 1;
        const scale = Math.max(neighborFloor, 1 + distanceInfluence * 0.34);
        const lift = (scale - 1) * -8;
        item.style.setProperty('--dock-scale', scale.toFixed(3));
        item.style.setProperty('--dock-lift', `${lift.toFixed(1)}px`);
        item.classList.toggle('is-hovered', item === nearestMetric.item && nearestMetric.distance < 60);
    });
}

function scheduleDockMagnification(event) {
    dockPointerX = event.clientX;
    if (dockFrame) return;
    dockFrame = requestAnimationFrame(() => {
        dockFrame = 0;
        updateDockMagnification(dockPointerX);
    });
}

function focusWindow(id) {
    const state = windowStates.get(id);
    if (!state || !state.open) return;
    activeWindowId = id; state.minimized = false; highestWindowZ += 1; state.element.style.zIndex = String(highestWindowZ); windowStates.forEach(syncWindowA11y); syncDock();
}

function openWindow(id, { focus = true } = {}) {
    const state = windowStates.get(id);
    if (!state) return;
    ensureWindowRect(state); state.open = true; state.minimized = false; state.element.hidden = false;
    closeMenu(); closeContextMenu();
    if (focus) focusWindow(id); else syncWindowA11y(state);
    if (id === 'projects') renderFinder();
    syncDock(); const app = appCatalog.find((candidate) => candidate.id === id); announce(`${app ? t(app.labelKey) : id} ${t('common.open').toLocaleLowerCase()}`);
}

function closeWindow(id) {
    const state = windowStates.get(id); if (!state) return;
    state.open = false; state.minimized = false; state.maximized = false;
    if (activeWindowId === id) activeWindowId = null;
    windowStates.forEach(syncWindowA11y);
    const next = Array.from(windowStates.values()).filter((candidate) => candidate.open && !candidate.minimized).sort((left, right) => Number(right.element.style.zIndex || 0) - Number(left.element.style.zIndex || 0))[0];
    if (next) focusWindow(next.id); syncDock();
}

function minimizeWindow(id) {
    const state = windowStates.get(id); if (!state || !state.open) return;
    state.minimized = true; if (activeWindowId === id) activeWindowId = null; windowStates.forEach(syncWindowA11y);
    const next = Array.from(windowStates.values()).find((candidate) => candidate.open && !candidate.minimized); if (next) focusWindow(next.id); syncDock();
}

function toggleMaximizeWindow(id) {
    const state = windowStates.get(id); if (!state || !state.open) return;
    if (!state.maximized) state.restoreRect = { ...state.rect };
    state.maximized = !state.maximized;
    if (!state.maximized && state.restoreRect) { state.rect = { ...state.restoreRect }; applyWindowRect(state); clampWindowRect(state); }
    syncWindowA11y(state); focusWindow(id);
}

function initializeWindowStates() {
    windowStates = new Map(windowSpecs.map((spec) => {
        const element = document.getElementById(spec.elementId);
        const state = { ...spec, element, open: false, minimized: false, maximized: false, rectInitialized: false, rect: { x: 12, y: 12, width: spec.defaultWidth, height: spec.defaultHeight } };
        if (element) syncWindowA11y(state);
        return [spec.id, state];
    }));
    syncDock();
}

function startWindowDrag(event, state, handle = event.target) {
    if (!state || !state.open || state.maximized || event.button !== 0 || event.target.closest?.('button, input, a, select, textarea')) return;
    const surface = getSurfaceRect(); const rect = state.element.getBoundingClientRect();
    pointerGesture = { type: 'drag', state, pointerId: event.pointerId, offsetX: event.clientX - rect.left, offsetY: event.clientY - rect.top, surface };
    handle?.setPointerCapture?.(event.pointerId); state.element.classList.add('is-dragging'); document.body.classList.add('is-window-dragging'); focusWindow(state.id); event.preventDefault();
}

function startWindowResize(event, state, handle = event.target) {
    if (!state || !state.open || state.maximized || event.button !== 0) return;
    pointerGesture = { type: 'resize', state, pointerId: event.pointerId, surface: getSurfaceRect() };
    handle?.setPointerCapture?.(event.pointerId); state.element.classList.add('is-resizing'); document.body.classList.add('is-window-resizing'); focusWindow(state.id); event.preventDefault();
}

function updateWindowGesture(event) {
    if (!pointerGesture || event.pointerId !== pointerGesture.pointerId) return;
    const { state, surface } = pointerGesture;
    if (pointerGesture.type === 'drag') {
        state.rect.x = event.clientX - surface.left - pointerGesture.offsetX; state.rect.y = event.clientY - surface.top - pointerGesture.offsetY; clampWindowRect(state);
    } else {
        const minWidth = Math.min(state.minWidth, Math.max(280, surface.width - 16)); const minHeight = Math.min(state.minHeight, Math.max(220, surface.height - 16));
        state.rect.width = Math.min(Math.max(minWidth, event.clientX - surface.left - state.rect.x), Math.max(minWidth, surface.width - state.rect.x - 8));
        state.rect.height = Math.min(Math.max(minHeight, event.clientY - surface.top - state.rect.y), Math.max(minHeight, surface.height - state.rect.y - 8)); applyWindowRect(state);
    }
}

function finishWindowGesture(event) {
    if (!pointerGesture || (event && event.pointerId !== pointerGesture.pointerId)) return;
    const { state } = pointerGesture; state.element.classList.remove('is-dragging', 'is-resizing'); document.body.classList.remove('is-window-dragging', 'is-window-resizing'); pointerGesture = null;
}

function isCoarsePointer() {
    return typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;
}

function announce(message) {
    const region = document.getElementById('liveRegion');
    if (region) region.textContent = message;
}

function setControlCenter(open) {
    const panel = document.getElementById('controlCenter'); const trigger = query('[data-desktop-action="control-center"]');
    if (!panel) return;
    panel.hidden = !open; panel.setAttribute('aria-hidden', open ? 'false' : 'true'); trigger?.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) requestAnimationFrame(() => panel.querySelector('.panel-close')?.focus());
}

function toggleControlCenter() {
    const panel = document.getElementById('controlCenter'); setControlCenter(Boolean(panel?.hidden));
}

function closeContextMenu() {
    const menu = document.getElementById('desktopContextMenu'); if (menu) menu.hidden = true;
}

function getContextTarget(target) {
    const projectEntry = target.closest?.('.project-card-entry');
    if (projectEntry) {
        const project = projectData.find((candidate) => candidate.id === projectEntry.dataset.projectId);
        if (project) return { type: 'project', id: project.id, title: project.name, url: project.url };
    }
    const windowElement = target.closest?.('.app-window');
    if (windowElement) {
        const id = windowElement.dataset.windowId;
        const app = appCatalog.find((candidate) => candidate.id === id);
        return { type: 'app', id, title: app ? t(app.labelKey) : id, url: '' };
    }
    const appElement = target.closest?.('[data-app], [data-dock-app]');
    if (appElement) {
        const id = appElement.dataset.app || appElement.dataset.dockApp;
        const app = appCatalog.find((candidate) => candidate.id === id);
        return { type: 'app', id, title: app ? t(app.labelKey) : id, url: '' };
    }
    return { type: 'desktop', id: null, title: t('context.desktop'), url: '' };
}

function contextActionsFor(target) {
    if (target.type === 'project') return [
        { action: 'open-project', label: t('context.openRepository') },
        { action: 'copy-link', label: t('context.copyLink') }
    ];
    if (target.type === 'app') {
        const state = windowStates.get(target.id);
        return [
            { action: 'open-app', label: t('context.open') },
            ...(state?.open ? [
                { action: 'minimize', label: t('context.minimize') },
                { action: 'zoom', label: t('context.zoom') },
                { action: 'close', label: t('context.close') }
            ] : [])
        ];
    }
    return [
        { action: 'open-projects', label: t('context.openProjects') },
        { action: 'open-home', label: t('context.openHome') },
        { action: 'refresh', label: t('context.refresh') }
    ];
}

function openContextMenu(event, target = getContextTarget(event.target)) {
    const menu = document.getElementById('desktopContextMenu');
    const surface = document.getElementById('desktopSurface');
    if (!menu || !surface) return;
    contextState = target;
    const title = target.type === 'desktop' ? t('context.desktop') : t(`context.${target.type}`).replace('{name}', target.title);
    menu.innerHTML = `<p class="context-menu-title" id="contextMenuTitle">${escapeHTML(title)}</p><div id="contextMenuItems">${contextActionsFor(target).map((item) => `<button type="button" role="menuitem" data-context-action="${escapeHTML(item.action)}">${escapeHTML(item.label)}</button>`).join('')}</div>`;
    menu.hidden = false;
    const surfaceRect = surface.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    const left = Math.min(Math.max(8, event.clientX - surfaceRect.left), Math.max(8, surfaceRect.width - menuRect.width - 8));
    const top = Math.min(Math.max(8, event.clientY - surfaceRect.top), Math.max(8, surfaceRect.height - menuRect.height - 8));
    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;
    menu.querySelector('[data-context-action]')?.focus();
}

function closeMenu() {
    const popover = document.getElementById('desktopMenuPopover'); if (popover) popover.hidden = true;
    queryAll('[data-menu-trigger]').forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));
}

function renderMenu(type) {
    const definition = menuDefinitions[type]; const labels = translations[currentLanguage];
    if (!definition) return;
    return `<div class="menu-popover-heading">${escapeHTML(t(definition.titleKey))}</div>${definition.items.map((item) => `<button type="button" role="menuitem" data-menu-action="${escapeHTML(item.action)}"><span>${escapeHTML(labels.menuItems[item.labelKey.split('.').pop()] || t(item.labelKey))}</span><kbd>${escapeHTML(item.shortcut)}</kbd></button>`).join('')}`;
}

function openMenu(type, trigger) {
    const popover = document.getElementById('desktopMenuPopover'); if (!popover) return;
    if (!popover.hidden && popover.dataset.menuType === type) { closeMenu(); return; }
    popover.innerHTML = renderMenu(type); popover.dataset.menuType = type; popover.hidden = false;
    const rect = trigger.getBoundingClientRect(); const shellRect = document.getElementById('desktopShell').getBoundingClientRect();
    popover.style.left = `${Math.max(8, rect.left - shellRect.left)}px`; popover.style.top = `${rect.bottom - shellRect.top + 6}px`;
    queryAll('[data-menu-trigger]').forEach((item) => item.setAttribute('aria-expanded', item === trigger ? 'true' : 'false'));
    popover.querySelector('button')?.focus();
}

function updateSpotlightSelection() {
    queryAll('[data-spotlight-index]').forEach((item) => { const selected = Number(item.dataset.spotlightIndex) === spotlightSelection; item.classList.toggle('is-selected', selected); item.setAttribute('aria-selected', selected ? 'true' : 'false'); });
}

function spotlightResultsFor(queryValue) {
    const normalized = queryValue.trim().toLocaleLowerCase();
    const apps = appCatalog.map((app) => ({ type: 'app', id: app.id, title: t(app.labelKey), description: t(app.descriptionKey) }));
    const projects = projectData.map((project) => ({ type: 'project', id: project.id, title: project.name, description: localized(project.description), project }));
    if (!normalized) return apps;
    return [...apps, ...projects].filter((item) => `${item.title} ${item.description}`.toLocaleLowerCase().includes(normalized));
}

function renderSpotlight() {
    const root = document.getElementById('spotlightResults'); const input = document.getElementById('spotlightSearch');
    if (!root) return;
    spotlightItems = spotlightResultsFor(input?.value || ''); spotlightSelection = Math.min(spotlightSelection, Math.max(0, spotlightItems.length - 1));
    root.innerHTML = spotlightItems.length ? spotlightItems.map((item, index) => `<button class="spotlight-result${index === spotlightSelection ? ' is-selected' : ''}" type="button" role="option" aria-selected="${index === spotlightSelection ? 'true' : 'false'}" data-spotlight-index="${index}"><span class="spotlight-result-mark spotlight-result-mark--${item.type}" aria-hidden="true">${item.type === 'app' ? '⌁' : '↗'}</span><span><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.description)}</small></span><kbd>${item.type === 'app' ? escapeHTML(t('common.open')) : '↗'}</kbd></button>`).join('') : `<div class="spotlight-no-results">${escapeHTML(t('spotlight.noResults'))}</div>`;
    updateSpotlightSelection();
}

function closeSpotlight() {
    const dialog = document.getElementById('spotlightDialog');
    if (!dialog) return;
    if (dialog.open && typeof dialog.close === 'function') dialog.close(); else dialog.hidden = true;
}

function openSpotlight() {
    const dialog = document.getElementById('spotlightDialog'); const input = document.getElementById('spotlightSearch');
    if (!dialog) return;
    closeMenu(); closeContextMenu(); setControlCenter(false); dialog.hidden = false; if (input) input.value = ''; spotlightSelection = 0; renderSpotlight();
    if (typeof dialog.showModal === 'function' && !dialog.open) dialog.showModal(); else dialog.hidden = false;
    requestAnimationFrame(() => input?.focus());
}

function selectSpotlightItem(index = spotlightSelection) {
    const item = spotlightItems[index]; if (!item) return;
    closeSpotlight();
    if (item.type === 'app') openWindow(item.id);
    else { openWindow('projects'); finderSearch = item.title; const input = document.getElementById('projectSearch'); if (input) input.value = item.title; renderFinder(); }
}

function openDesktopApp(id) {
    setControlCenter(false); closeContextMenu(); openWindow(id);
}

function unlockDesktop() {
    const lock = document.getElementById('lockScreen'); const shell = document.getElementById('desktopShell');
    if (!lock || !shell) return;
    lock.hidden = true; lock.setAttribute('aria-hidden', 'true'); shell.hidden = false; shell.setAttribute('aria-hidden', 'false'); document.body.classList.remove('is-locked'); document.body.classList.add('is-unlocked');
    openWindow('home'); query('#desktopSurface')?.focus({ preventScroll: true }); announce('Desktop unlocked');
}

function lockDesktop() {
    closeSpotlight(); closeMenu(); closeContextMenu(); setControlCenter(false);
    windowStates.forEach((state) => { state.open = false; state.minimized = false; state.maximized = false; syncWindowA11y(state); });
    activeWindowId = null; syncDock();
    const lock = document.getElementById('lockScreen'); const shell = document.getElementById('desktopShell');
    if (!lock || !shell) return;
    shell.hidden = true; shell.setAttribute('aria-hidden', 'true'); lock.hidden = false; lock.setAttribute('aria-hidden', 'false'); document.body.classList.remove('is-unlocked'); document.body.classList.add('is-locked'); announce('Desktop locked');
    requestAnimationFrame(() => document.querySelector('[data-lock-action="unlock"]')?.focus());
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'english' ? 'slovenian' : 'english'; applyTranslations(); announce(currentLanguage === 'english' ? 'English selected' : 'Slovenian selected');
}

function applyTranslations() {
    document.documentElement.lang = currentLanguage === 'english' ? 'en' : 'sl';
    queryAll('[data-i18n]').forEach((element) => { const value = t(element.dataset.i18n); if (value !== undefined) element.textContent = value; });
    const lockWelcome = document.getElementById('lockWelcome'); if (lockWelcome) lockWelcome.innerHTML = t('lock.welcome');
    setText('homeBodyText', t('home.body')); setText('homeCurrentView', t('home.factThreeValue'));
    const projectSearch = document.getElementById('projectSearch'); if (projectSearch) { projectSearch.placeholder = t('projects.searchPlaceholder'); projectSearch.setAttribute('aria-label', t('projects.searchLabel')); }
    const spotlightSearch = document.getElementById('spotlightSearch'); if (spotlightSearch) { spotlightSearch.placeholder = t('spotlight.placeholder'); spotlightSearch.setAttribute('aria-label', t('spotlight.label')); }
    const appLabelKeys = { home: 'app.about', experience: 'app.experience', projects: 'app.projects', skills: 'app.skills', contact: 'app.contact', resume: 'app.resume', 'control-center': 'app.control' };
    queryAll('[data-app], [data-dock-app], [data-side-app]').forEach((item) => { const appKey = appLabelKeys[item.dataset.app || item.dataset.dockApp || item.dataset.sideApp]; if (appKey) item.setAttribute('aria-label', `${t('common.open')} ${t(appKey)}`); });
    const spotlightTrigger = query('[data-desktop-action="spotlight"]'); if (spotlightTrigger) { spotlightTrigger.setAttribute('aria-label', t('spotlight.label')); spotlightTrigger.setAttribute('title', t('spotlight.label')); }
    const controlTrigger = query('[data-desktop-action="control-center"]'); if (controlTrigger) { controlTrigger.setAttribute('aria-label', `${t('common.open')} ${t('app.control')}`); controlTrigger.setAttribute('title', t('app.control')); }
    setText('controlLanguageValue', currentLanguage === 'english' ? 'English' : 'Slovenščina'); setText('controlLanguageMark', currentLanguage === 'english' ? 'EN' : 'SL');
    const viewLabels = currentLanguage === 'english' ? { grid: 'Icon view', list: 'List view', columns: 'Column view' } : { grid: 'Ikonski pogled', list: 'Pogled seznama', columns: 'Pogled stolpcev' };
    queryAll('[data-project-view]').forEach((button) => button.setAttribute('aria-label', viewLabels[button.dataset.projectView] || 'Project view'));
    renderAllContent(); if (!document.getElementById('spotlightDialog')?.hidden) renderSpotlight(); updateClock();
}

function updateClock() {
    const now = new Date(); const locale = currentLanguage === 'english' ? 'en-GB' : 'sl-SI'; const time = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).format(now); const title = new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeStyle: 'short' }).format(now);
    queryAll('.system-clock').forEach((clock) => { clock.textContent = time; clock.dateTime = now.toISOString(); clock.title = title; });
    const dateLocale = currentLanguage === 'english' ? 'en-US' : 'sl-SI';
    const date = new Intl.DateTimeFormat(dateLocale, { weekday: 'long', month: 'long', day: 'numeric' }).format(now);
    queryAll('.system-date').forEach((clock) => { clock.textContent = date; clock.dateTime = now.toISOString(); clock.title = title; });
}

function openExternal(url) {
    if (!url) return;
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) window.location.assign(url);
}

async function copyEmail(button) {
    const email = 'luka.azman9@gmail.com'; let copied = false;
    try { if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(email); copied = true; } } catch { copied = false; }
    if (!copied) {
        const helper = document.createElement('textarea'); helper.value = email; helper.setAttribute('readonly', ''); helper.style.position = 'fixed'; helper.style.opacity = '0'; document.body.appendChild(helper); helper.select(); copied = document.execCommand?.('copy') || false; helper.remove();
    }
    button.dataset.state = copied ? 'success' : 'error'; button.textContent = copied ? t('contact.copied') : email; announce(copied ? t('contact.copied') : email);
    window.setTimeout(() => { button.dataset.state = ''; button.textContent = t('contact.copy'); }, 2500);
}

function refreshDesktop() {
    renderAllContent(); closeMenu(); closeContextMenu(); announce('Desktop refreshed');
}

function handleMenuAction(action) {
    closeMenu();
    if (action === 'open-home' || action === 'new-about' || action === 'readme') openDesktopApp('home');
    if (action === 'open-contact') openDesktopApp('contact');
    if (action === 'open-projects') openDesktopApp('projects');
    if (action === 'spotlight' || action === 'search') openSpotlight();
    if (action === 'language') toggleLanguage();
    if (action === 'lock') lockDesktop();
    if (action === 'refresh') refreshDesktop();
    if (action === 'grid') { finderView = 'grid'; renderFinder(); }
    if (action === 'list') { finderView = 'list'; renderFinder(); }
    if (action === 'columns') { finderView = 'columns'; renderFinder(); }
    if (action === 'copy-email') { const copyButton = query('[data-copy-email]'); if (copyButton) copyEmail(copyButton); }
    if (action === 'minimize' && activeWindowId) minimizeWindow(activeWindowId);
    if (action === 'zoom' && activeWindowId) toggleMaximizeWindow(activeWindowId);
    if (action === 'close' && activeWindowId) closeWindow(activeWindowId);
}

async function copyContextLink(url) {
    if (!url) return;
    let copied = false;
    try {
        if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(url); copied = true; }
    } catch { copied = false; }
    announce(copied ? t('context.copied') : url);
}

function handleContextAction(action) {
    const target = { ...contextState };
    closeContextMenu();
    if (action === 'open-app') { if (target.id === 'control-center') toggleControlCenter(); else openDesktopApp(target.id); }
    if (action === 'minimize') minimizeWindow(target.id);
    if (action === 'zoom') toggleMaximizeWindow(target.id);
    if (action === 'close') closeWindow(target.id);
    if (action === 'open-project') openExternal(target.url);
    if (action === 'copy-link') copyContextLink(target.url);
    if (action === 'open-projects') openDesktopApp('projects');
    if (action === 'open-home') openDesktopApp('home');
    if (action === 'refresh') refreshDesktop();
}

function handleClick(event) {
    const target = event.target;
    const lockAction = target.closest?.('[data-lock-action]'); if (lockAction) { if (document.body.classList.contains('is-locked')) unlockDesktop(); return; }
    const menuTrigger = target.closest?.('[data-menu-trigger]'); if (menuTrigger) { event.stopPropagation(); openMenu(menuTrigger.dataset.menuTrigger, menuTrigger); return; }
    const menuAction = target.closest?.('[data-menu-action]'); if (menuAction) { handleMenuAction(menuAction.dataset.menuAction); return; }
    const contextAction = target.closest?.('[data-context-action]'); if (contextAction) { handleContextAction(contextAction.dataset.contextAction); return; }
    const sideApp = target.closest?.('[data-side-app]'); if (sideApp) { const app = sideApp.dataset.sideApp; if (app === 'control-center') toggleControlCenter(); else openDesktopApp(app); return; }
    const windowAction = target.closest?.('[data-window-action]'); if (windowAction) { const element = windowAction.closest('.app-window'); const state = element ? windowStates.get(element.dataset.windowId) : null; if (state) { if (windowAction.dataset.windowAction === 'close') closeWindow(state.id); if (windowAction.dataset.windowAction === 'minimize') minimizeWindow(state.id); if (windowAction.dataset.windowAction === 'maximize') toggleMaximizeWindow(state.id); } return; }
    const panelAction = target.closest?.('[data-panel-action]'); if (panelAction) { const action = panelAction.dataset.panelAction; if (action === 'close') setControlCenter(false); if (action === 'language') toggleLanguage(); if (action === 'lock') lockDesktop(); return; }
    const spotlightAction = target.closest?.('[data-spotlight-action]'); if (spotlightAction) { closeSpotlight(); return; }
    const desktopAction = target.closest?.('[data-desktop-action]'); if (desktopAction) { if (desktopAction.dataset.desktopAction === 'spotlight') openSpotlight(); if (desktopAction.dataset.desktopAction === 'control-center') toggleControlCenter(); if (desktopAction.dataset.desktopAction === 'lock') lockDesktop(); return; }
    const appOpen = target.closest?.('[data-app-open]'); if (appOpen) { openDesktopApp(appOpen.dataset.appOpen); return; }
    const dockItem = target.closest?.('[data-dock-app]'); if (dockItem) { const app = dockItem.dataset.dockApp; if (app === 'control-center') toggleControlCenter(); else openDesktopApp(app); return; }
    const desktopIcon = target.closest?.('[data-app]'); if (desktopIcon) { queryAll('.desktop-icon').forEach((icon) => icon.classList.toggle('is-selected', icon === desktopIcon)); if (isCoarsePointer()) openDesktopApp(desktopIcon.dataset.app); return; }
    const projectAction = target.closest?.('[data-project-action]'); if (projectAction) { const action = projectAction.dataset.projectAction; if (action === 'back') navigateFinderHistory(-1); if (action === 'forward') navigateFinderHistory(1); if (action === 'clear-search') { finderSearch = ''; const input = document.getElementById('projectSearch'); if (input) input.value = ''; renderFinder(); input?.focus(); } return; }
    const projectView = target.closest?.('[data-project-view]'); if (projectView) { finderView = projectView.dataset.projectView; renderFinder(); return; }
    const category = target.closest?.('.finder-sidebar [data-category]'); if (category) { setFinderCategory(category.dataset.category, { focus: true }); return; }
    const spotlightResult = target.closest?.('[data-spotlight-index]'); if (spotlightResult) { selectSpotlightItem(Number(spotlightResult.dataset.spotlightIndex)); return; }
    const copyButton = target.closest?.('[data-copy-email]'); if (copyButton) { copyEmail(copyButton); return; }
    const externalCard = target.closest?.('.external-card'); if (externalCard && !target.closest('a, button')) { openExternal(externalCard.dataset.url); return; }
    if (!target.closest?.('.desktop-menu-popover, [data-menu-trigger]')) closeMenu();
    if (!target.closest?.('.desktop-context-menu')) closeContextMenu();
    if (!target.closest?.('#controlCenter, [data-desktop-action="control-center"]')) setControlCenter(false);
}

function handleKeydown(event) {
    const activeElement = document.activeElement;
    if (document.body.classList.contains('is-locked') && event.key === 'Enter' && activeElement?.tagName !== 'BUTTON') { event.preventDefault(); unlockDesktop(); return; }
    if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === 'k') { event.preventDefault(); openSpotlight(); return; }
    if (event.key === 'Escape') {
        if (document.getElementById('spotlightDialog')?.open) { closeSpotlight(); return; }
        if (!document.getElementById('desktopContextMenu')?.hidden) { closeContextMenu(); return; }
        if (!document.getElementById('desktopMenuPopover')?.hidden) { closeMenu(); return; }
        if (!document.getElementById('controlCenter')?.hidden) { setControlCenter(false); return; }
        if (activeElement?.id === 'projectSearch' && finderSearch) { event.stopPropagation(); finderSearch = ''; activeElement.value = ''; renderFinder(); return; }
        if (activeWindowId) closeWindow(activeWindowId);
    }
    const spotlightInput = document.getElementById('spotlightSearch');
    if (spotlightInput && document.getElementById('spotlightDialog')?.open && document.activeElement === spotlightInput) {
        if (event.key === 'ArrowDown') { event.preventDefault(); spotlightSelection = Math.min(spotlightSelection + 1, Math.max(0, spotlightItems.length - 1)); updateSpotlightSelection(); }
        if (event.key === 'ArrowUp') { event.preventDefault(); spotlightSelection = Math.max(spotlightSelection - 1, 0); updateSpotlightSelection(); }
        if (event.key === 'Enter') { event.preventDefault(); selectSpotlightItem(); }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeWindowStates(); renderAllContent(); applyTranslations(); updateClock(); clockTimer = window.setInterval(updateClock, 30000);
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('pointerdown', (event) => {
        const resizeHandle = event.target.closest?.('.window-resize-handle'); if (resizeHandle) { startWindowResize(event, windowStates.get(resizeHandle.dataset.windowResize), resizeHandle); return; }
        const dragHandle = event.target.closest?.('[data-window-drag-handle]'); if (dragHandle) { const element = dragHandle.closest('.app-window'); startWindowDrag(event, element ? windowStates.get(element.dataset.windowId) : null, dragHandle); return; }
        const windowElement = event.target.closest?.('.app-window'); if (windowElement) { focusWindow(windowElement.dataset.windowId); return; }
    });
    document.addEventListener('pointermove', updateWindowGesture); document.addEventListener('pointerup', finishWindowGesture); document.addEventListener('pointercancel', finishWindowGesture);
    const dock = document.getElementById('desktopDock');
    const unlockButton = document.querySelector('[data-lock-action="unlock"]');
    unlockButton?.addEventListener('pointerdown', (event) => { event.preventDefault(); unlockDesktop(); });
    unlockButton?.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); unlockDesktop(); } });
    dock?.addEventListener('pointermove', scheduleDockMagnification);
    dock?.addEventListener('pointerenter', scheduleDockMagnification);
    dock?.addEventListener('focusin', (event) => { const item = event.target.closest?.('.dock-item'); if (item) updateDockMagnification(dock.getBoundingClientRect().left + item.offsetLeft + item.offsetWidth / 2); });
    dock?.addEventListener('focusout', (event) => { if (!dock.contains(event.relatedTarget)) resetDockMagnification(); });
    dock?.addEventListener('pointerleave', resetDockMagnification);
    dock?.addEventListener('pointercancel', resetDockMagnification);
    document.addEventListener('dblclick', (event) => { const icon = event.target.closest?.('[data-app]'); if (icon) { openDesktopApp(icon.dataset.app); return; } const titlebar = event.target.closest?.('[data-window-drag-handle]'); if (titlebar && !event.target.closest?.('button, input, a')) { const element = titlebar.closest('.app-window'); if (element) toggleMaximizeWindow(element.dataset.windowId); } });
    document.addEventListener('keydown', (event) => { const card = event.target.closest?.('.external-card'); if (card && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openExternal(card.dataset.url); } });
    document.getElementById('projectSearch')?.addEventListener('input', (event) => { finderSearch = event.target.value; renderFinder(); });
    document.getElementById('projectSearch')?.addEventListener('keydown', (event) => { if (event.key === 'Escape' && event.target.value) { event.stopPropagation(); finderSearch = ''; event.target.value = ''; renderFinder(); } });
    document.getElementById('spotlightSearch')?.addEventListener('input', () => { spotlightSelection = 0; renderSpotlight(); });
    document.getElementById('spotlightDialog')?.addEventListener('click', (event) => { if (event.target === event.currentTarget) closeSpotlight(); });
    document.addEventListener('contextmenu', (event) => {
        const surface = document.getElementById('desktopSurface');
        const target = event.target;
        if (!surface || document.body.classList.contains('is-locked')) return;
        if (target.closest?.('.desktop-context-menu, .desktop-menu-popover, #controlCenter, #spotlightDialog')) return;
        if (!surface.contains(target) && !target.closest?.('#desktopDock')) return;
        event.preventDefault();
        openContextMenu(event, getContextTarget(target));
    });
    window.addEventListener('resize', () => windowStates.forEach(clampWindowRect));
    unlockButton?.focus();
    if (window.location.hash && window.location.hash.slice(1) && windowStates.has(window.location.hash.slice(1))) { unlockDesktop(); openDesktopApp(window.location.hash.slice(1)); }
});

if (typeof window !== 'undefined') {
    window.portfolioDesktop = {
        getState: () => ({ language: currentLanguage, category: finderCategoryId, search: finderSearch, view: finderView, activeWindow: activeWindowId, locked: document.body.classList.contains('is-locked'), windows: Array.from(windowStates.values()).map((state) => ({ id: state.id, open: state.open, minimized: state.minimized, maximized: state.maximized, rect: { ...state.rect } })) }),
        openWindow, closeWindow, minimizeWindow, toggleMaximizeWindow, setFinderCategory, openSpotlight, lockDesktop, unlockDesktop, toggleLanguage
    };
}
