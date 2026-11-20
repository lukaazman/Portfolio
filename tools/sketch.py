"""Builds assets/sketch/sketches.svg: hand-wobbled line drawings as SVG symbols.

Every stroke is drawn twice with different jitter (like a pencil going over a
line), and every path has pathLength="1" so the page can draw it with
stroke-dashoffset. Run: python tools/sketch.py
"""
import math
import random
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "assets" / "sketch" / "sketches.svg"


def resample(points, step=24):
    out = [points[0]]
    for (x0, y0), (x1, y1) in zip(points, points[1:]):
        n = max(1, round(math.hypot(x1 - x0, y1 - y0) / step))
        out += [(x0 + (x1 - x0) * i / n, y0 + (y1 - y0) * i / n) for i in range(1, n + 1)]
    return out


def wobble(points, rng, amp):
    pts = resample(points)
    drift_x = drift_y = 0.0
    out = []
    for x, y in pts:
        drift_x = drift_x * 0.6 + rng.gauss(0, amp)
        drift_y = drift_y * 0.6 + rng.gauss(0, amp)
        out.append((x + drift_x, y + drift_y))
    return out


def smooth_path(pts):
    """Catmull-Rom through the points, written as cubic beziers."""
    d = "M%.0f %.0f" % pts[0]
    for i in range(len(pts) - 1):
        p0 = pts[max(i - 1, 0)]
        p1, p2 = pts[i], pts[i + 1]
        p3 = pts[min(i + 2, len(pts) - 1)]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += "C%.0f %.0f %.0f %.0f %.0f %.0f" % (*c1, *c2, *p2)
    return d


def arc(cx, cy, rx, ry, start=0, end=360, n=10):
    return [(cx + rx * math.cos(math.radians(start + (end - start) * i / n)),
             cy + ry * math.sin(math.radians(start + (end - start) * i / n))) for i in range(n + 1)]


def rounded(x, y, w, h, r):
    return (arc(x + r, y + r, r, r, 180, 270, 5) + arc(x + w - r, y + r, r, r, 270, 360, 5)
            + arc(x + w - r, y + h - r, r, r, 0, 90, 5) + arc(x + r, y + h - r, r, r, 90, 180, 5)
            + [(x, y + r)])


def symbol(name, box, strokes, seed, amp=1.1, passes=2, stretch=False):
    rng = random.Random(seed)
    paths = []
    for stroke in strokes:
        for index in range(passes):
            pts = wobble(stroke, rng, amp * (1 if index == 0 else 1.5))
            paths.append('<path pathLength="1" d="%s"/>' % smooth_path(pts))
    fit = ' preserveAspectRatio="none"' if stretch else ''
    return ('<symbol id="%s" viewBox="0 0 %d %d"%s><g fill="none" stroke="currentColor" stroke-width="3.2" '
            'stroke-linecap="round" stroke-linejoin="round">%s</g></symbol>' % (name, box[0], box[1], fit, "".join(paths)))


def frame(name, w, h, seed):
    m = 9
    strokes = [
        [(m, m + 4), (w - m, m)], [(w - m, m), (w - m - 2, h - m)],
        [(w - m - 2, h - m), (m + 3, h - m - 3)], [(m + 3, h - m - 3), (m, m + 4)],
    ]
    return symbol(name, (w, h), strokes, seed, amp=1.4, passes=2, stretch=True)



def barbell():
    """The GymChaos chalk barbell: the bar and six plate pairs, each its own
    symbol on the same 1000 x 200 canvas so the page can load them one by one."""
    y = 110
    parts = [symbol("barbell-bar", (1000, 200), [
        [(30, y - 5), (970, y - 5)], [(30, y + 5), (970, y + 5)],
        [(280, y - 16), (280, y + 16)], [(720, y - 16), (720, y + 16)],
    ], seed=131, amp=1.3)]
    left, right = 268, 732
    for index, (half, width) in enumerate([(78, 26), (78, 26), (66, 22), (66, 22), (52, 18), (40, 16)]):
        parts.append(symbol("barbell-plate-%d" % (index + 1), (1000, 200), [
            rounded(left - width, y - half, width, 2 * half, 6),
            rounded(right, y - half, width, 2 * half, 6),
        ], seed=137 + index, amp=1.0))
        left -= width + 4
        right += width + 4
    return parts


SYMBOLS = [
    symbol("controller", (200, 200), [
        [(38, 78), (62, 62), (138, 62), (162, 78), (178, 128), (166, 150), (146, 146), (128, 118), (72, 118),
         (54, 146), (34, 150), (22, 128), (38, 78)],
        [(58, 90), (82, 90)], [(70, 78), (70, 102)],
        arc(134, 82, 6, 6), arc(150, 96, 6, 6),
        arc(88, 112, 8, 8), arc(118, 112, 8, 8),
    ], seed=11),
    symbol("code", (200, 200), [
        rounded(22, 38, 156, 124, 10),
        [(22, 64), (178, 64)],
        arc(38, 51, 3, 3), arc(50, 51, 3, 3),
        [(78, 92), (56, 112), (78, 132)], [(122, 92), (144, 112), (122, 132)], [(108, 86), (92, 138)],
    ], seed=23),
    symbol("cube", (200, 200), [
        [(100, 24), (166, 62), (166, 138), (100, 176), (34, 138), (34, 62), (100, 24)],
        [(34, 62), (100, 100), (166, 62)], [(100, 100), (100, 176)],
        [(100, 58), (132, 77)], [(68, 77), (100, 58)],
    ], seed=37),
    symbol("phone", (200, 200), [
        rounded(62, 20, 76, 160, 12),
        [(90, 34), (110, 34)],
        [(76, 62), (124, 62)], [(76, 80), (112, 80)], [(76, 98), (120, 98)],
        rounded(76, 118, 48, 30, 5),
        arc(100, 164, 5, 5),
    ], seed=41),
    symbol("arrow", (200, 200), [
        [(46, 30), (72, 78), (120, 104), (150, 150)],
        [(120, 150), (152, 154), (158, 122)],
    ], seed=53, amp=1.6),
    symbol("tally", (200, 200), [
        [(40, 44), (44, 156)], [(72, 42), (70, 158)], [(102, 46), (104, 154)], [(134, 42), (132, 158)],
        [(22, 132), (158, 62)],
    ], seed=67, amp=1.8),
    symbol("underline", (400, 40), [
        [(8, 22), (120, 14), (250, 24), (392, 12)], [(30, 30), (200, 34), (370, 26)],
    ], seed=71, amp=1.3, passes=1, stretch=True),
    symbol("drawer", (400, 120), [
        [(10, 14), (390, 10)], [(390, 10), (388, 110)], [(388, 110), (12, 108)], [(12, 108), (10, 14)],
        rounded(168, 46, 64, 26, 12),
    ], seed=83, amp=1.3, stretch=True),
    symbol("line", (40, 600), [[(20, 6), (18, 200), (23, 400), (20, 594)]], seed=89, amp=1.6, stretch=True),
    frame("frame-square", 400, 400, 101),
    frame("frame-wide", 640, 360, 103),
] + barbell()

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text('<svg xmlns="http://www.w3.org/2000/svg">%s</svg>\n' % "".join(SYMBOLS), encoding="utf-8", newline="\n")
print(OUT, OUT.stat().st_size, "bytes")
