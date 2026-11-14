// Scroll motion. Everything here is an enhancement: without GSAP, or with
// reduced motion, the page keeps its static CSS state with all content visible.
import { t } from './i18n.js';
import { LEAN, hang, plan, settle } from './rope.js';

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

// GymChaos: scrolling is one set. The frames behind go from the bare Unity
// scene to the living game, while the chalk barbell is drawn, deadlifted off
// the floor and loaded with one plate pair for every frame after the first.
function gymchaos(desktop) {
    const scene = document.getElementById('gymchaos');
    const shots = gsap.utils.toArray('.shot', scene);
    const barbell = scene.querySelector('.barbell');
    const bar = barbell.querySelector('.bar');
    const plates = gsap.utils.toArray('.plate', barbell);

    const timeline = sceneTimeline(scene, desktop, 230)
        // One slow push-in across all frames keeps the cuts feeling like one move.
        .fromTo(scene.querySelector('.shots'), { scale: 1.14 }, { scale: 1, duration: 1, ease: 'none' }, 0)
        .fromTo(bar, draw[0], { ...draw[1], duration: 0.1 }, 0)
        // Floor to hips: the bar stays in the bottom band of the frame.
        .fromTo(barbell, { yPercent: 0 }, { yPercent: -35, duration: 0.88, ease: 'power1.inOut' }, 0.1);

    const gap = 0.86 / (shots.length - 1);
    gsap.set(plates, { opacity: 0 });
    shots.slice(1).forEach((shot, index) => {
        const at = 0.12 + index * gap;
        timeline.fromTo(shot, { opacity: 0 }, { opacity: 1, duration: gap * 0.4, ease: 'none' }, at);
        if (plates[index]) {
            timeline.fromTo(plates[index], { opacity: 0, scaleY: 0.4, transformOrigin: '50% 55%' }, { opacity: 1, scaleY: 1, duration: gap * 0.3, ease: 'back.out(2)' }, at)
                .fromTo(plates[index], draw[0], { ...draw[1], duration: gap * 0.3 }, at);
        }
    });
}

// Tether: the rope is the scroll indicator. The leader climbs ahead and the
// second climber hangs from her on the rope: he swings under her and around
// the ledges (route in rope.js), while the Blender outline fills in and the day ends.
function tether(desktop) {
    const scene = document.getElementById('tether');
    const rope = scene.querySelector('.rope');
    const player = scene.querySelector('.climber--player');
    const partner = scene.querySelector('.climber--partner');
    const climb = { progress: 0 };
    const swing = { angle: plan(0).angle, speed: 0 };

    const slackRope = rope.getAttribute('d');

    const pull = () => {
        const progress = climb.progress;
        const party = 320 * (1 - progress); // the .party group is still sliding in by this much
        const pose = hang(progress, swing.angle - plan(progress).angle);
        const x = pose.x;
        const y = pose.y - party;
        gsap.set(player, { y: -300 * progress });
        // 204, 799 is the harness in the partner image as it sits in the SVG:
        // move it to the rope's end, then lean the body around it.
        partner.setAttribute('transform', 'translate(' + (x - 204).toFixed(1) + ' ' + (y - 799).toFixed(1) + ') rotate('
            + (-pose.tilt * LEAN * 180 / Math.PI).toFixed(2) + ' 204 799)');
        rope.setAttribute('d', 'M' + x.toFixed(1) + ' ' + y.toFixed(1)
            + 'Q' + pose.rope.x.toFixed(1) + ' ' + (pose.rope.y - party).toFixed(1) + ' 590 ' + (640 - 300 * progress).toFixed(1));
    };

    // A lightly damped pendulum chases the planned angle, so he keeps swinging
    // for a moment after the scroll stops. settle() is the collision: a swing
    // that would put him into a ledge stops at it and bounces back.
    const sway = (time, deltaTime) => {
        const target = plan(climb.progress).angle;
        if (Math.abs(target - swing.angle) < 0.0005 && Math.abs(swing.speed) < 0.0005) return;
        const dt = Math.min(deltaTime, 50) / 1000;
        swing.speed += ((target - swing.angle) * 8 - swing.speed * 1.5) * dt;
        swing.angle += swing.speed * dt;
        const wanted = swing.angle - target;
        const free = settle(climb.progress, wanted);
        if (free !== wanted) {
            swing.angle = target + free;
            swing.speed *= -0.35;
        }
        pull();
    };
    gsap.ticker.add(sway);
    pull();

    sceneTimeline(scene, desktop, 120)
        .fromTo(scene.querySelector('.party'), { y: 320 }, { y: 0, duration: 1, ease: 'none' }, 0)
        .to(climb, { progress: 1, duration: 1, ease: 'none', onUpdate: pull }, 0)
        .fromTo(scene.querySelector('.lines'), { opacity: 1 }, { opacity: 0, duration: 0.35, ease: 'none' }, 0.15)
        .fromTo(scene.querySelector('.colour'), { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'none' }, 0.15)
        .fromTo(scene.querySelector('.dusk'), { opacity: 0 }, { opacity: 0.55, duration: 0.4, ease: 'none' }, 0.6);

    return () => {
        gsap.ticker.remove(sway);
        partner.removeAttribute('transform');
        rope.setAttribute('d', slackRope);
    };
}

// Cuts through the in-game frames stacked in a monitor, evenly between two
// timeline positions. The first frame is already showing.
function reel(timeline, scene, from, to) {
    const frames = gsap.utils.toArray('.reel picture + picture img', scene);
    const gap = (to - from) / frames.length;
    frames.forEach((frame, index) => {
        timeline.fromTo(frame, { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: gap * 0.35, ease: 'none' }, from + index * gap);
    });
}

// CrimsonDawn: the red sun rises behind the monitor while the frame is drawn,
// then the monitor plays the game room by room.
function crimson(desktop) {
    const scene = document.getElementById('crimsondawn');

    const timeline = sceneTimeline(scene, desktop, 120)
        .fromTo(scene.querySelector('.dawn'), { yPercent: 70, scale: 0.55 }, { yPercent: 0, scale: 1, duration: 1, ease: 'power2.out' }, 0)
        .fromTo(scene.querySelector('.frame-sketch'), draw[0], { ...draw[1], duration: 0.15 }, 0)
        .fromTo(scene.querySelector('.reel'), { scale: 0.86 }, { scale: 1, duration: 0.15 }, 0);
    // The logo only opens the scene; the game is on the monitor almost at once.
    reel(timeline, scene, 0.1, 1);
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
        // Phones: the levels pass while the monitor crosses the screen.
        reel(gsap.timeline({
            scrollTrigger: { trigger: backrooms.querySelector('.frame'), start: 'top 70%', end: 'bottom 25%', scrub: 0.5 }
        }), backrooms, 0, 1);
        return undefined;
    }

    stage.classList.add('is-stacked');
    // One timeline unit is 180% of the screen: PixeLife and the swap keep
    // their short stretch, then Backrooms walks through its levels.
    const length = 2.3;
    const timeline = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: { trigger: stage, start: 'top top', end: '+=' + length * 180 + '%', pin: true, scrub: 0.5 }
    });

    timeline
        .fromTo(pixelife.querySelector('.frame-sketch'), draw[0], { ...draw[1], duration: 0.25 }, 0)
        .to(pixelife.querySelector('.frame'), { xPercent: -70, rotation: -8, duration: 0.3 }, 0.38)
        .to(pixelife.querySelector('.scene-copy'), { autoAlpha: 0, duration: 0.15, ease: 'none' }, 0.38)
        .fromTo(backrooms, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2, ease: 'none' }, 0.46)
        .fromTo(backrooms.querySelector('.frame'), { xPercent: 70, rotation: 8 }, { xPercent: 0, rotation: 0, duration: 0.3 }, 0.46)
        .fromTo(backrooms.querySelector('.frame-sketch'), draw[0], { ...draw[1], duration: 0.25 }, 0.62);
    reel(timeline, backrooms, 0.95, length);

    // A link to #backrooms should land after the swap, not on PixeLife.
    const jump = (event) => {
        if (!event.target.closest('a[href="#backrooms"]')) return;
        event.preventDefault();
        const trigger = timeline.scrollTrigger;
        window.scrollTo(0, trigger.start + (trigger.end - trigger.start) * 0.9 / length);
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
        const undoTether = tether(desktop);
        crimson(desktop);
        const undoPair = pair(desktop);
        const undoSections = sections();
        return () => {
            undoTether();
            if (undoPair) undoPair();
            undoSections();
        };
    });
    media.add('(pointer: fine)', cursor);

    document.fonts.ready.then(() => ScrollTrigger.refresh());
}
