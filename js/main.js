import { getLanguage, t } from './i18n.js';

// Phone menu
const bar = document.querySelector('.bar');
const menuToggle = document.getElementById('menuToggle');

function setMenu(open) {
    bar.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
}

if (menuToggle) {
    menuToggle.addEventListener('click', () => setMenu(!bar.classList.contains('is-open')));
    document.getElementById('nav').addEventListener('click', (event) => {
        if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setMenu(false);
    });
}

// Archive drawer: filter by kind, switch view
const drawer = document.getElementById('drawer');

function projectCount(count) {
    if (getLanguage() !== 'sl') return count + (count === 1 ? ' project' : ' projects');
    if (count === 1) return '1 projekt';
    if (count === 2) return '2 projekta';
    if (count === 3 || count === 4) return count + ' projekti';
    return count + ' projektov';
}

function press(group, selected) {
    group.forEach((button) => button.setAttribute('aria-pressed', String(button === selected)));
}

function filterDrawer(kind) {
    const buttons = Array.from(drawer.querySelectorAll('[data-filter]'));
    let shown = 0;
    drawer.querySelectorAll('.item').forEach((item) => {
        item.hidden = kind !== 'all' && item.dataset.kind !== kind;
        if (!item.hidden) shown += 1;
    });
    press(buttons, buttons.find((button) => button.dataset.filter === kind));
    document.getElementById('drawerCount').textContent = projectCount(shown);
    document.dispatchEvent(new CustomEvent('drawer:change'));
}

if (drawer) {
    drawer.addEventListener('click', (event) => {
        const filter = event.target.closest('[data-filter]');
        const view = event.target.closest('button[data-view]');
        if (filter) filterDrawer(filter.dataset.filter);
        if (view) {
            drawer.dataset.view = view.dataset.view;
            press(Array.from(drawer.querySelectorAll('button[data-view]')), view);
            document.dispatchEvent(new CustomEvent('drawer:change'));
        }
    });

    // A skill link may point at a project the current filter hides.
    const revealTarget = () => {
        const target = location.hash.startsWith('#p-') && document.getElementById(location.hash.slice(1));
        if (target && target.hidden) {
            filterDrawer('all');
            target.scrollIntoView();
        }
    };
    window.addEventListener('hashchange', revealTarget);
    document.addEventListener('i18n:change', () => {
        document.getElementById('drawerCount').textContent = projectCount(drawer.querySelectorAll('.item:not([hidden])').length);
    });
    revealTarget();
}

// Contact: copy the address
const copyButton = document.getElementById('copyEmail');

if (copyButton) {
    copyButton.addEventListener('click', async () => {
        const email = document.getElementById('email');
        const status = document.getElementById('copyStatus');
        try {
            await navigator.clipboard.writeText(email.textContent.trim());
            status.textContent = t('contact.copied');
        } catch (error) {
            // Clipboard blocked: select the address so Ctrl+C works.
            getSelection().selectAllChildren(email);
        }
    });
    document.addEventListener('i18n:change', () => { document.getElementById('copyStatus').textContent = ''; });
}

// Looping clips stay still for people who asked for less motion.
if (!document.documentElement.classList.contains('motion')) {
    document.querySelectorAll('video[autoplay]').forEach((video) => {
        video.removeAttribute('autoplay');
        video.pause();
        video.controls = true;
    });
}

// The load animation can be skipped with a click or a key.
['pointerdown', 'keydown'].forEach((type) => {
    document.addEventListener(type, () => document.getAnimations().forEach((animation) => animation.finish()), { once: true });
});
