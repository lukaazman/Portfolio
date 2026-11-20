// Self-check for js/rope.js: on the planned line the second climber and the rope
// never touch a ledge or the leader, and the collision step keeps any swing
// free as well. Run: node tools/rope-check.mjs
import assert from 'node:assert/strict';
import { OBSTACLES, PARTNER_BODY, SWING_LIMIT, LEAN, blocked, box, hang, settle } from '../js/rope.js';

let closest = Infinity;
for (let step = 0; step <= 400; step += 1) {
    const progress = step / 400;
    const where = 'progress ' + progress.toFixed(3);
    assert.ok(!blocked(progress, 0, 8), 'planned line is blocked at ' + where);

    for (const wanted of [-0.4, -SWING_LIMIT, -0.05, 0.05, SWING_LIMIT, 0.4]) {
        const swing = settle(progress, wanted);
        assert.ok(Math.abs(swing) <= SWING_LIMIT + 1e-9, 'swing past the limit at ' + where);
        assert.ok(!blocked(progress, swing), 'collision let the climber into a ledge at ' + where + ' swing ' + wanted);

        const pose = hang(progress, swing);
        const body = box(PARTNER_BODY, pose.x, pose.y, -pose.tilt * LEAN);
        assert.ok(body[0] > 0 && body[2] < 1200, 'climber leaves the wall at ' + where);
        for (const ledge of OBSTACLES) {
            // The rope as drawn: a quadratic curve from the anchor to the harness.
            for (let t = 0; t <= 1; t += 0.05) {
                const rx = (1 - t) ** 2 * pose.top.x + 2 * (1 - t) * t * pose.rope.x + t * t * pose.x;
                const ry = (1 - t) ** 2 * pose.top.y + 2 * (1 - t) * t * pose.rope.y + t * t * pose.y;
                assert.ok(rx < ledge[0] || rx > ledge[2] || ry < ledge[1] || ry > ledge[3], 'rope crosses ledge ' + ledge + ' at ' + where);
            }
            if (swing === 0 || wanted === 0.05) closest = Math.min(closest, Math.max(ledge[0] - body[2], body[0] - ledge[2], ledge[1] - body[3], body[1] - ledge[3]));
        }
    }
}
console.log('rope-check ok, closest ledge ' + closest.toFixed(1) + ' units');
