// Tether scene geometry, in the wall's own 1200 x 1500 space. Pure functions,
// shared by motion.js and tools/rope-check.mjs.

// Ledges with their stalactites (shadows are not obstacles): [left, top, right, bottom].
export const OBSTACLES = [
    [0, 170, 105, 410],
    [470, 70, 650, 285],
    [780, 415, 1100, 660],
    [130, 955, 435, 1160],
    [1115, 1115, 1200, 1165]
];

// The second climber's drawn body around his harness, and the leader's around hers.
export const PARTNER_BODY = [-89, -156, 42, 121];
export const LEADER_BODY = [-79, -209, 86, 104];

// How far the simulated swing may leave the planned line, in radians.
export const SWING_LIMIT = 0.16;

// How much of the rope's lean the hanging body follows.
export const LEAN = 0.3;

// The leader's harness: she climbs 620 units over the scene.
export const anchor = (progress) => ({ x: 590, y: 960 - 620 * progress });

// Where the second climber hangs below the anchor: [progress, right of it, below it, slack].
// He starts low on the right, swings under the leader between her feet and the
// lower-left ledge, and ends on the left. Slack is how much spare rope sags.
const ROUTE = [
    [0, 253, 212, 1],
    [0.25, 222, 285, 0.25],
    [0.45, 140, 315, 0],
    [0.62, 30, 305, 0],
    [0.7, -40, 294, 0],
    [0.78, -120, 292, 0],
    [0.88, -215, 330, 0],
    [1, -260, 360, 0]
];

// Catmull-Rom through the route, so the planned line has no corners.
function along(progress, column) {
    const p = Math.min(1, Math.max(0, progress));
    let i = ROUTE.findIndex((key, index) => index > 0 && p <= key[0]);
    if (i < 1) i = ROUTE.length - 1;
    const k0 = ROUTE[Math.max(i - 2, 0)][column];
    const k1 = ROUTE[i - 1][column];
    const k2 = ROUTE[i][column];
    const k3 = ROUTE[Math.min(i + 1, ROUTE.length - 1)][column];
    const t = (p - ROUTE[i - 1][0]) / (ROUTE[i][0] - ROUTE[i - 1][0]);
    return 0.5 * (2 * k1 + (k2 - k0) * t + (2 * k0 - 5 * k1 + 4 * k2 - k3) * t * t + (3 * k1 - k0 - 3 * k2 + k3) * t * t * t);
}

// The rope as a pendulum: angle from straight down (positive to the right),
// length, and slack, for a scroll progress of 0..1.
export function plan(progress) {
    const dx = along(progress, 1);
    const dy = along(progress, 2);
    return { angle: Math.atan2(dx, dy), length: Math.hypot(dx, dy), slack: Math.max(0, along(progress, 3)) };
}

// Positions for a progress and a swing (radians added to the planned angle).
export function hang(progress, swing = 0) {
    const top = anchor(progress);
    const { angle, length, slack } = plan(progress);
    const tilt = angle + swing;
    const x = top.x + Math.sin(tilt) * length;
    const y = top.y + Math.cos(tilt) * length;
    // Spare rope hangs below the straight line; a taut rope keeps a slight belly.
    const sag = 8 + slack * 70;
    const rope = { x: (top.x + x) / 2 - Math.cos(tilt) * sag * 0.35, y: (top.y + y) / 2 + sag };
    return { top, x, y, tilt, rope };
}

// Bounding box of a body turned around its harness, the way motion.js draws it.
export function box(shape, x, y, turn) {
    const corners = [[shape[0], shape[1]], [shape[2], shape[1]], [shape[0], shape[3]], [shape[2], shape[3]]]
        .map(([cx, cy]) => [x + cx * Math.cos(turn) - cy * Math.sin(turn), y + cx * Math.sin(turn) + cy * Math.cos(turn)]);
    const xs = corners.map((corner) => corner[0]);
    const ys = corners.map((corner) => corner[1]);
    return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}

const touches = (a, b, margin) => a[0] < b[2] + margin && a[2] > b[0] - margin && a[1] < b[3] + margin && a[3] > b[1] - margin;

// True when the second climber, hanging at this swing, touches a ledge or the leader.
export function blocked(progress, swing, margin = 4) {
    const pose = hang(progress, swing);
    const body = box(PARTNER_BODY, pose.x, pose.y, -pose.tilt * LEAN);
    return OBSTACLES.some((ledge) => touches(body, ledge, margin))
        || touches(body, box(LEADER_BODY, pose.top.x, pose.top.y, 0), margin);
}

// Collision: the largest swing towards the wanted one that touches nothing.
// The planned line (swing 0) is always free, see tools/rope-check.mjs.
export function settle(progress, swing) {
    let free = Math.max(-SWING_LIMIT, Math.min(SWING_LIMIT, swing));
    for (let tries = 0; tries < 8 && blocked(progress, free); tries += 1) free *= 0.5;
    return blocked(progress, free) ? 0 : free;
}
