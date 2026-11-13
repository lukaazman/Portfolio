// Scroll motion. Everything here is an enhancement: without GSAP, or with
// reduced motion, the page keeps its static CSS state with all content visible.
import { t } from './i18n.js';

const { gsap, ScrollTrigger, SplitText } = window;
const root = document.documentElement;
const draw = [{ strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none' }];

// One timeline per scene: pinned and scrubbed on desktop, a short unpinned scrub on phones.
function sceneTimeline(scene, desktop, length) {
    return gsap.timeline({
        defaults: { ease: 'power1.inOut' },
        scrollTrigger: desktop
            ? { trigger: scene, start: 'top top', end: '+=' + length + '%', pin: true, scrub: 0.5 }
            : { trigger: scene.querySelector('.scene-media'), start: 'top 85%', end: 'bottom 60%', scrub: 0.5 }
    });
}

function hero() {
    gsap.to('.hero-tools .tool', {
        yPercent: (index) => -40 - index * 30,
        rotation: (index) => (index % 2 ? '+=14' : '-=14'),
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
}

// GymChaos: scrolling is one set. The chalk outline curls the dumbbell,
// fills with colour, and the tally on the board counts the reps.
function gymchaos(desktop) {
    const scene = document.getElementById('gymchaos');
    const picture = scene.querySelector('picture');
    const lines = scene.querySelector('.lines');
    const art = [picture, lines];

    sceneTimeline(scene, desktop, 120)
        .fromTo(art, { rotation: 10, yPercent: 9, transformOrigin: '35% 100%' }, { rotation: -3, yPercent: 0, duration: 0.4 }, 0)
        .to(art, { rotation: 6, yPercent: 5, duration: 0.25 })
        .to(art, { rotation: 0, yPercent: 0, duration: 0.35 })
        .fromTo(lines, { opacity: 1 }, { opacity: 0, duration: 0.35, ease: 'none' }, 0.3)
        .fromTo(picture, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'none' }, 0.3)
        .fromTo(scene.querySelector('.tally'), draw[0], { ...draw[1], duration: 0.8 }, 0.15);
}

// Tether: the rope is the scroll indicator. The leader climbs ahead, the rope
// goes from slack to taut, the Blender outline fills in and the day ends.
function tether(desktop) {
    const scene = document.getElementById('tether');
    const rope = scene.querySelector('.rope');
    const player = scene.querySelector('.climber--player');
    const partner = scene.querySelector('.climber--partner');
    const climb = { progress: 0 };

    const pull = () => {
        const lead = -300 * climb.progress;
        const follow = -110 * climb.progress;
        const sag = 170 * (1 - climb.progress) + 6;
        gsap.set(player, { y: lead });
        gsap.set(partner, { y: follow });
        rope.setAttribute('d', 'M196 ' + (800 + follow) + 'Q393 ' + (720 + (lead + follow) / 2 + sag) + ' 590 ' + (640 + lead));
    };

    sceneTimeline(scene, desktop, 120)
        .fromTo(scene.querySelector('.party'), { y: 320 }, { y: 0, duration: 1, ease: 'none' }, 0)
        .to(climb, { progress: 1, duration: 1, ease: 'none', onUpdate: pull }, 0)
        .fromTo(scene.querySelector('.lines'), { opacity: 1 }, { opacity: 0, duration: 0.35, ease: 'none' }, 0.15)
        .fromTo(scene.querySelector('.colour'), { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'none' }, 0.15)
        .fromTo(scene.querySelector('.dusk'), { opacity: 0 }, { opacity: 0.55, duration: 0.4, ease: 'none' }, 0.6);
}

// CrimsonDawn: the red sun rises behind the monitor while the frame is drawn.
function crimson(desktop) {
    const scene = document.getElementById('crimsondawn');

    sceneTimeline(scene, desktop, 100)
        .fromTo(scene.querySelector('.dawn'), { yPercent: 70, scale: 0.55 }, { yPercent: 0, scale: 1, duration: 1, ease: 'power2.out' }, 0)
        .fromTo(scene.querySelector('.frame-sketch'), draw[0], { ...draw[1], duration: 0.6 }, 0)
        .fromTo(scene.querySelector('picture'), { scale: 0.86 }, { scale: 1, duration: 0.6 }, 0.1);
}

// PixeLife and Backrooms share one stage: the two framed games swap places.
function pair(desktop) {
    const stage = document.querySelector('.pair');
    const pixelife = document.getElementById('pixelife');
    const backrooms = document.getElementById('backrooms');

    if (!desktop) {
        [pixelife, backrooms].forEach((scene) => {
            gsap.fromTo(scene.querySelector('.frame-sketch'), draw[0], {
                ...draw[1],
                scrollTrigger: { trigger: scene.querySelector('.frame'), start: 'top 85%', end: 'bottom 70%', scrub: 0.5 }
            });
        });
        return undefined;
    }

    stage.classList.add('is-stacked');
    const timeline = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: { trigger: stage, start: 'top top', end: '+=180%', pin: true, scrub: 0.5 }
    });

    timeline
        .fromTo(pixelife.querySelector('.frame-sketch'), draw[0], { ...draw[1], duration: 0.25 }, 0)
        .to(pixelife.querySelector('.frame'), { xPercent: -70, rotation: -8, duration: 0.3 }, 0.38)
        .to(pixelife.querySelector('.scene-copy'), { autoAlpha: 0, duration: 0.15, ease: 'none' }, 0.38)
        .fromTo(backrooms, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2, ease: 'none' }, 0.46)
        .fromTo(backrooms.querySelector('.frame'), { xPercent: 70, rotation: 8 }, { xPercent: 0, rotation: 0, duration: 0.3 }, 0.46)
        .fromTo(backrooms.querySelector('.frame-sketch'), draw[0], { ...draw[1], duration: 0.25 }, 0.62)
        .to({}, { duration: 0.13 });

    // A link to #backrooms should land after the swap, not on PixeLife.
    const jump = (event) => {
        if (!event.target.closest('a[href="#backrooms"]')) return;
        event.preventDefault();
        const trigger = timeline.scrollTrigger;
        window.scrollTo(0, trigger.start + (trigger.end - trigger.start) * 0.92);
    };
    document.addEventListener('click', jump);

    return () => {
        document.removeEventListener('click', jump);
        stage.classList.remove('is-stacked');
    };
}

function sections() {
    const rise = (targets, vars) => {
        gsap.set(targets, { opacity: 0, ...vars });
        ScrollTrigger.batch(targets, {
            start: 'clamp(top 90%)',
            once: true,
            onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.06, overwrite: true })
        });
    };

    rise(gsap.utils.toArray('.scene-copy > *:not(h2), .section-head > *, .job, .footnote, .tools h3, .contact-actions, .channels, .footer-notes > *'), { y: 28 });
    rise(gsap.utils.toArray('.tools li'), { x: -18 });
    rise(gsap.utils.toArray('.drawer'), { y: -36 });
    rise(gsap.utils.toArray('.item'), { y: 18, scale: 0.92 });

    // Names are not translated, so they can be split into letters safely.
    gsap.utils.toArray('.scene h2, .email').forEach((heading) => {
        const split = SplitText.create(heading, { type: 'chars', mask: 'chars' });
        gsap.from(split.chars, {
            yPercent: 105,
            duration: 0.8,
            ease: 'power4.out',
            stagger: 0.03,
            scrollTrigger: { trigger: heading, start: 'top 92%', once: true }
        });
    });

    gsap.fromTo('.timeline-line', draw[0], {
        ...draw[1],
        scrollTrigger: { trigger: '.timeline', start: 'top 75%', end: 'bottom 60%', scrub: 0.5 }
    });

    const footerName = document.querySelector('.name-art--footer text');
    gsap.set(footerName, { strokeDasharray: 1600 });
    gsap.fromTo(footerName, { strokeDashoffset: 1600, fillOpacity: 0 }, {
        strokeDashoffset: 0,
        fillOpacity: 1,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.name-art--footer', start: 'top 92%', once: true }
    });

    // Filtering or switching the view re-deals the visible folders.
    const deal = () => gsap.fromTo('.item:not([hidden])', { opacity: 0, y: 14 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out', stagger: 0.03, overwrite: true });
    document.addEventListener('drawer:change', deal);
    return () => document.removeEventListener('drawer:change', deal);
}

// A small chalk dot follows a mouse and names what a project link will do.
function cursor() {
    const dot = document.createElement('div');
    dot.className = 'cursor';
    dot.setAttribute('aria-hidden', 'true');
    document.body.append(dot);

    const moveX = gsap.quickTo(dot, 'x', { duration: 0.25, ease: 'power3.out' });
    const moveY = gsap.quickTo(dot, 'y', { duration: 0.25, ease: 'power3.out' });
    const move = (event) => {
        moveX(event.clientX);
        moveY(event.clientY);
        const link = event.target.closest('.item a, .links a');
        dot.classList.add('is-live');
        dot.classList.toggle('is-open', Boolean(link));
        dot.textContent = link ? t('cursor.open') : '';
    };
    const leave = () => dot.classList.remove('is-live');

    window.addEventListener('pointermove', move);
    document.addEventListener('pointerleave', leave);
    return () => {
        window.removeEventListener('pointermove', move);
        document.removeEventListener('pointerleave', leave);
        dot.remove();
    };
}

if (gsap && ScrollTrigger && SplitText && root.classList.contains('motion')) {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const media = gsap.matchMedia();
    media.add({ desktop: '(min-width: 861px)', mobile: '(max-width: 860px)' }, (context) => {
        const { desktop } = context.conditions;
        // Created top to bottom so pin spacing is measured in page order.
        hero();
        gymchaos(desktop);
        tether(desktop);
        crimson(desktop);
        const undoPair = pair(desktop);
        const undoSections = sections();
        return () => {
            if (undoPair) undoPair();
            undoSections();
        };
    });
    media.add('(pointer: fine)', cursor);

    document.fonts.ready.then(() => ScrollTrigger.refresh());
}
