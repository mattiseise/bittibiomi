# BittiBiomin pikselityyliset SVG-kuvitukset + faviconit.
# Tyyli: litteät värit, rect-pohjainen pikseligrafiikka, biomipaletti.
import os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets")
os.makedirs(OUT, exist_ok=True)

# Biomipaletti
BG = "#26323b"; PANEL = "#33424d"; PANEL2 = "#3c4d5a"
GRASS = "#43a047"; GRASSL = "#66bb6a"; DIRT = "#8d5a2b"; DIRTD = "#5c3b1e"; DIRTL = "#a5713a"
STONE = "#90a4ae"; STONED = "#78909c"; SKY = "#4fc3f7"; BLUE = "#1a6fae"
GOLD = "#ffb800"; RED = "#e05b45"; TXT = "#eceff1"; TXT2 = "#b0bec5"
FONT = "font-family=\"Inter,'Segoe UI',sans-serif\""

# 8x8 ruohoblokin pikselikartta
CUBE_MAP = [
    "HGGHGGHG",
    "GGGGGGGG",
    "GDGGDGGD",
    "DDLDDKDD",
    "DKDDLDDD",
    "DDDKDDLD",
    "LDDDDDDK",
    "DDKDDLDD",
]
CUBE_COLORS = {"G": GRASS, "H": GRASSL, "D": DIRT, "K": DIRTD, "L": DIRTL}

def R(x, y, w, h, fill, extra=""):
    return f'<rect x="{x:g}" y="{y:g}" width="{w:g}" height="{h:g}" fill="{fill}" {extra}/>'

def cube(x, y, s, cmap=CUBE_MAP, colors=CUBE_COLORS):
    """Pikseliblokki: 8x8 kartta skaalattuna kokoon s."""
    p = s / 8
    parts = []
    for r, row in enumerate(cmap):
        for c, ch in enumerate(row):
            parts.append(R(x + c * p, y + r * p, p + 0.5, p + 0.5, colors[ch]))
    return "".join(parts)

GRAY_MAP = ["ssSssSss","ssssssss","sSssSssS","ssssssss","Sssss Ss".replace(" ","s"),"ssSsssss","sssSssSs","ssssssss"]
GRAY_COLORS = {"s": STONED, "S": STONE}

def arrow(x, y, s, color=GOLD):
    """Kulmikas pikselinuoli oikealle, korkeus s."""
    u = s / 5
    parts = [R(x, y + 2 * u, 3 * u, u, color)]
    parts.append(R(x + 3 * u, y + u, u, 3 * u, color))
    parts.append(R(x + 4 * u, y + 2 * u, u, u, color))
    return "".join(parts)

def label(cx, y, text, size=26, fill=TXT, weight=800, anchor="middle", spacing="0.12em"):
    return (f'<text x="{cx:g}" y="{y:g}" {FONT} font-size="{size}" font-weight="{weight}" '
            f'fill="{fill}" text-anchor="{anchor}" letter-spacing="{spacing}">{text}</text>')

def num_badge(x, y, s, n, color=GRASS):
    return (R(x, y, s, s, color) +
            label(x + s / 2, y + s * 0.72, str(n), size=s * 0.6, fill="#ffffff", spacing="0"))

def svg(w, h, body, title):
    return (f'<svg viewBox="0 0 {w} {h}" width="{w}" height="{h}" xmlns="http://www.w3.org/2000/svg" role="img">'
            f'<title>{title}</title>{R(0, 0, w, h, BG)}{body}</svg>')

def save(name, content):
    path = os.path.join(OUT, name)
    with open(path, "w") as f:
        f.write(content)
    print(f"{name}: {os.path.getsize(path)} B")

# ---------- 1. asset-tyokierto.svg (1672x941) — hero ----------
W, H = 1672, 941
b = []
b.append(label(W/2, 110, "ASSET-TYÖKIERTO", 44, TXT))
b.append(label(W/2, 160, "SAMA KIERTO JOKA VIIKKO", 24, TXT2))
panels = [
    ("LUONNOS", "PAPERILLE"),
    ("BLOCKBENCH", "TAI PISKEL"),
    ("PAKETTIIN", "OIKEA POLKU"),
    ("PELIIN", "F3 + T"),
    ("TESTI", "JA COMMIT"),
]
pw, ph, gap = 264, 420, 60
total = 5 * pw + 4 * gap
x0 = (W - total) / 2
py = 250
for i, (t1, t2) in enumerate(panels):
    x = x0 + i * (pw + gap)
    b.append(R(x, py, pw, ph, PANEL))
    b.append(R(x, py, pw, 8, GRASS))
    cx = x + pw / 2
    icy = py + 70
    if i == 0:  # luonnospaperi: ruudukko + kynäviiva
        b.append(R(cx - 80, icy, 160, 190, "#eceff1"))
        for gx in range(4):
            for gy in range(4):
                if (gx + gy) % 2 == 0:
                    b.append(R(cx - 60 + gx * 30, icy + 25 + gy * 30, 26, 26, "#cfd8dc"))
        b.append(R(cx - 60, icy + 55, 86, 26, GRASSL))
        b.append(R(cx - 30, icy + 85, 56, 26, DIRT))
    elif i == 1:  # blockbench: kuutio + kahvat
        b.append(cube(cx - 70, icy + 10, 140))
        for hx, hy in [(-92, -12), (78, -12), (-92, 158), (78, 158)]:
            b.append(R(cx + hx, icy + hy, 14, 14, SKY))
        b.append(R(cx - 92, icy - 5, 184, 3, "#546e7a"))
        b.append(R(cx - 92, icy + 165, 184, 3, "#546e7a"))
    elif i == 2:  # kansio + tiedosto
        b.append(R(cx - 85, icy + 30, 170, 130, GOLD))
        b.append(R(cx - 85, icy + 14, 70, 20, GOLD))
        b.append(R(cx - 65, icy + 50, 130, 94, "#fff7dc"))
        b.append(label(cx, icy + 105, "pack.mcmeta", 20, DIRTD, spacing="0"))
    elif i == 3:  # pelinäkymä: taivas + maa + blokit
        b.append(R(cx - 90, icy, 180, 180, SKY))
        b.append(R(cx - 90, icy + 120, 180, 60, GRASS))
        b.append(R(cx - 90, icy + 140, 180, 40, DIRT))
        b.append(cube(cx - 35, icy + 50, 70))
        b.append(R(cx + 55, icy + 20, 22, 22, "#fff59d"))
    else:  # testi: check + lokirivit
        b.append(R(cx - 85, icy, 170, 120, "#1f2a33"))
        for li, lw in enumerate([120, 90, 105]):
            b.append(R(cx - 70, icy + 20 + li * 28, lw, 12, "#546e7a"))
        b.append(R(cx - 50, icy + 150, 24, 24, GRASS))
        b.append(R(cx - 26, icy + 166, 20, 24, GRASS))
        b.append(R(cx - 6, icy + 142, 20, 24, GRASS))
        b.append(R(cx + 14, icy + 118, 20, 24, GRASS))
    b.append(num_badge(x + 18, py + ph - 120, 44, i + 1))
    b.append(label(cx, py + ph - 52, t1, 30, TXT))
    b.append(label(cx, py + ph - 20, t2, 19, TXT2))
    if i < 4:
        b.append(arrow(x + pw + 8, py + ph / 2 - 22, 45))
# paluunuoli alas: testistä takaisin luonnokseen
loop_y = py + ph + 80
b.append(R(x0 + pw / 2, loop_y, total - pw, 10, PANEL2))
b.append(R(x0 + pw / 2, loop_y - 40, 10, 50, PANEL2))
b.append(R(x0 + total - pw / 2 - 10, loop_y - 40, 10, 50, PANEL2))
b.append(label(W / 2, loop_y + 45, "SEURAAVA ASSET → SAMA KIERTO", 22, TXT2))
save("asset-tyokierto.svg", svg(W, H, "".join(b), "Asset-työkierto viidessä vaiheessa"))

# ---------- 2. tekstuuri-vaiheet.svg (508x703) — pysty ----------
W, H = 508, 703
b = []
stages = ["LUONNOS RUUDUKKOON", "PIKSELIT PALETILLA", "VALMIS PELISSÄ"]
sy = [40, 265, 490]
for i, (t, y) in enumerate(zip(stages, sy)):
    b.append(R(30, y, 448, 180, PANEL))
    b.append(num_badge(46, y + 16, 34, i + 1))
    b.append(label(254 + 40, y + 40, t, 20, TXT, anchor="middle"))
    cy = y + 62
    if i == 0:
        for gx in range(8):
            for gy in range(4):
                shade = STONE if (gx + gy) % 2 else STONED
                b.append(R(150 + gx * 26, cy + gy * 26, 24, 24, shade))
    elif i == 1:
        b.append(cube(150, cy - 4, 108))
        for si, c in enumerate([GRASS, GRASSL, DIRT, DIRTL, DIRTD]):
            b.append(R(290 + (si % 2) * 40, cy + (si // 2) * 40 - 4, 34, 34, c))
        b.append(R(330 + 2, cy + 76, 22, 8, TXT2))
    else:
        b.append(R(120, cy - 8, 268, 118, SKY))
        b.append(R(120, cy + 74, 268, 36, GRASS))
        b.append(cube(200, cy + 6, 68))
        b.append(cube(268, cy + 6, 68))
save("tekstuuri-vaiheet.svg", svg(W, H, "".join(b), "Tekstuurin kolme vaihetta luonnoksesta peliin"))

# ---------- 3. suunnitelma-luonnos.svg (1128x540) ----------
W, H = 1128, 540
b = []
b.append(label(W/2, 66, "ASSET-PACK-SUUNNITELMA ALKAA PAPERILTA", 30, TXT))
# moodboard-arkki
b.append(R(80, 110, 400, 360, "#eceff1"))
b.append(label(280, 150, "MOODBOARD", 22, DIRTD))
pics = [(110, 175, GRASS), (240, 175, SKY), (110, 285, DIRT), (240, 285, GOLD)]
for px, pyy, c in pics:
    b.append(R(px, pyy, 110, 90, c))
    b.append(R(px, pyy + 70, 110, 20, PANEL2 if c != PANEL2 else STONE))
b.append(R(370, 175, 80, 200, "#cfd8dc"))
# palettiliuska
b.append(R(540, 110, 100, 360, "#eceff1"))
b.append(label(590, 150, "PALETTI", 16, DIRTD))
for si, c in enumerate([GRASS, GRASSL, DIRTL, DIRT, DIRTD, STONE]):
    b.append(R(560, 170 + si * 48, 60, 40, c))
# sisältölista
b.append(R(700, 110, 350, 360, "#eceff1"))
b.append(label(875, 150, "SISÄLTÖLISTA · P0", 20, DIRTD))
items = [(GRASS, 200), (GRASS, 250), (GOLD, 300), (STONE, 350), (STONE, 400)]
for c, iy in items:
    b.append(R(724, iy - 16, 22, 22, c))
    b.append(R(760, iy - 12, 240, 14, "#b0bec5"))
save("suunnitelma-luonnos.svg", svg(W, H, "".join(b), "Moodboard, paletti ja sisältölista"))

# ---------- 4. paketti-vaiheet.svg (1129x369) ----------
W, H = 1129, 369
b = []
panels = ["TYHJÄ PAKETTI", "OMAT TEKSTUURIT", "MALLIT JA SKRIPTIT", "JULKAISTU V1.0"]
pw, ph, gap = 240, 260, 42
x0 = (W - (4 * pw + 3 * gap)) / 2
py = 46
for i, t in enumerate(panels):
    x = x0 + i * (pw + gap)
    b.append(R(x, py, pw, ph, PANEL))
    b.append(R(x, py, pw, 7, [STONE, GRASS, BLUE, GOLD][i]))
    cx = x + pw / 2
    icy = py + 46
    if i == 0:
        b.append(cube(cx - 55, icy, 110, GRAY_MAP, GRAY_COLORS))
    elif i == 1:
        b.append(cube(cx - 55, icy, 110))
    elif i == 2:
        b.append(cube(cx - 78, icy, 92))
        b.append(R(cx + 2, icy + 8, 86, 62, "#1f2a33"))
        b.append(label(cx + 45, icy + 47, "&gt;_", 30, GRASSL, spacing="0"))
        b.append(R(cx + 2, icy + 78, 86, 14, BLUE))
    else:
        b.append(R(cx - 60, icy + 6, 120, 90, DIRTL))
        b.append(R(cx - 60, icy + 42, 120, 14, DIRTD))
        b.append(R(cx - 14, icy + 20, 28, 56, GOLD))
        b.append(R(cx - 26, icy + 62, 52, 18, GOLD))
    b.append(num_badge(x + 14, py + ph - 92, 34, i + 1))
    b.append(label(cx, py + ph - 26, t, 19, TXT))
    if i < 3:
        b.append(arrow(x + pw + 4, py + ph / 2 - 18, 36))
save("paketti-vaiheet.svg", svg(W, H, "".join(b), "Paketin neljä vaihetta tyhjästä julkaisuun"))

# ---------- 5. testauskierros.svg (1500x1000) ----------
W, H = 1500, 1000
b = []
b.append(label(W/2, 90, "TESTAUSKIERROS", 42, TXT))
nodes = [
    ("SUUNNITTELE TESTI", "ODOTETTU TULOS YLÖS", 750, 210, PANEL),
    ("AJA PELISSÄ", "TUORE MAAILMA", 1170, 430, PANEL),
    ("LUE LOKI", "SYY, EI VAIN OIRE", 940, 720, PANEL),
    ("KORJAA TIEDOSTO", "YKSI MUUTOS KERRALLAAN", 560, 720, PANEL),
    ("UUSINTATESTI", "VASTA NYT VALMIS", 330, 430, PANEL),
]
nw, nh = 320, 130
for t1, t2, cx, cy, col in nodes:
    b.append(R(cx - nw/2, cy - nh/2, nw, nh, col))
    b.append(R(cx - nw/2, cy - nh/2, nw, 6, GOLD))
    b.append(label(cx, cy - 8, t1, 26, TXT))
    b.append(label(cx, cy + 30, t2, 17, TXT2))
# nuolet solmujen välillä (suorakulmaiset)
def elbow(x1, y1, x2, y2, c=GOLD, t=10):
    parts = [R(min(x1, x2), y1, abs(x2 - x1) + t, t, c)]
    parts.append(R(x2, min(y1, y2), t, abs(y2 - y1) + t, c))
    return "".join(parts)
b.append(elbow(915, 240, 1170, 355, GOLD))
b.append(elbow(1170, 500, 1105, 645, GOLD))
b.append(R(725, 715, 150, 10, RED))   # loki -> korjaa
b.append(elbow(560, 645, 395, 500, GOLD))
b.append(elbow(330, 355, 585, 240, GRASS))
# keskellä: bugi-pikseli ja check
b.append(R(700, 430, 100, 100, "#1f2a33"))
b.append(R(722, 452, 16, 16, RED)); b.append(R(762, 452, 16, 16, RED))
b.append(R(722, 492, 56, 16, RED))
b.append(label(750, 585, "BUGI ON LÖYTÖ — KIRJAA SE", 20, TXT2))
save("testauskierros.svg", svg(W, H, "".join(b), "Testauskierros suunnittelusta uusintatestiin"))

# ---------- 6. tekoalyapu.svg (1500x1000) ----------
W, H = 1500, 1000
b = []
b.append(label(W/2, 90, "TEKOÄLY ON APUVÄLINE — SINÄ PÄÄTÄT", 38, TXT))
panels = [
    ("KYSY", "RAJATTU KYSYMYS"),
    ("TARKISTA", "MINECRAFT WIKI"),
    ("TESTAA", "ITSE PELISSÄ"),
    ("KIRJAA", "AI-LOKIIN"),
]
pw, ph, gap = 300, 560, 60
x0 = (W - (4 * pw + 3 * gap)) / 2
py = 180
for i, (t1, t2) in enumerate(panels):
    x = x0 + i * (pw + gap)
    b.append(R(x, py, pw, ph, PANEL))
    b.append(R(x, py, pw, 8, [SKY, GOLD, GRASS, STONE][i]))
    cx = x + pw / 2
    icy = py + 90
    if i == 0:  # puhekupla
        b.append(R(cx - 90, icy, 180, 120, "#eceff1"))
        b.append(R(cx - 60, icy + 120, 40, 30, "#eceff1"))
        b.append(label(cx, icy + 82, "?", 64, BLUE, spacing="0"))
    elif i == 1:  # wiki-sivu
        b.append(R(cx - 80, icy - 10, 160, 200, "#eceff1"))
        b.append(R(cx - 60, icy + 14, 120, 16, GOLD))
        for li in range(5):
            b.append(R(cx - 60, icy + 48 + li * 26, 120 if li % 2 == 0 else 90, 10, "#90a4ae"))
    elif i == 2:  # pelitesti
        b.append(R(cx - 90, icy - 10, 180, 150, SKY))
        b.append(R(cx - 90, icy + 100, 180, 40, GRASS))
        b.append(cube(cx - 32, icy + 34, 64))
        b.append(R(cx - 20, icy + 170, 18, 18, GRASS))
        b.append(R(cx - 2, icy + 182, 14, 18, GRASS))
        b.append(R(cx + 12, icy + 162, 14, 18, GRASS))
    else:  # loki
        b.append(R(cx - 80, icy - 10, 160, 200, "#1f2a33"))
        for li, lw in enumerate([120, 96, 110, 84]):
            b.append(R(cx - 62, icy + 14 + li * 30, lw, 12, "#546e7a"))
        b.append(R(cx - 62, icy + 134, 120, 12, GRASSL))
    b.append(num_badge(x + 16, py + ph - 150, 40, i + 1))
    b.append(label(cx, py + ph - 74, t1, 32, TXT))
    b.append(label(cx, py + ph - 38, t2, 19, TXT2))
    if i < 3:
        b.append(arrow(x + pw + 6, py + ph / 2 - 20, 44))
b.append(label(W/2, 830, "TEKSTUURIT, MALLIT JA ÄÄNET TEET ITSE — MUU VAIN AVOIMELLA LISENSSILLÄ", 24, GOLD))
save("tekoalyapu.svg", svg(W, H, "".join(b), "Tekoälyn käytön neljä askelta"))

# ---------- Faviconit (PIL) ----------
from PIL import Image

def cube_img(px):
    img = Image.new("RGB", (8, 8))
    for r, row in enumerate(CUBE_MAP):
        for c, ch in enumerate(row):
            img.putpixel((c, r), tuple(int(CUBE_COLORS[ch][i:i+2], 16) for i in (1, 3, 5)))
    return img.resize((px, px), Image.NEAREST)

cube_img(16).save(f"{OUT}/favicon-16.png")
cube_img(32).save(f"{OUT}/favicon-32.png")
cube_img(180).save(f"{OUT}/apple-touch-icon.png")
cube_img(48).save(f"{OUT}/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("faviconit ok")
