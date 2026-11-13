// Runs before first paint and tells the CSS whether motion is welcome.
// ?motion=on overrides an operating system set to reduce motion.
if (/[?&]motion=on/.test(location.search) || !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('motion');
}
