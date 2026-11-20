// Runs before first paint and tells the CSS whether motion is welcome.
// Motion is on by default. ?motion=off turns it off, ?motion=on turns it back on,
// and the choice is remembered. Without a choice, a system set to reduce motion wins.
(function () {
    var match = /[?&]motion=(on|off)/.exec(location.search);
    var choice = match && match[1];
    try {
        if (choice) localStorage.setItem('motion', choice);
        else choice = localStorage.getItem('motion');
    } catch (error) { /* private mode: not remembered */ }
    if (choice ? choice === 'on' : !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('motion');
    }
})();
