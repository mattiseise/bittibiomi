// Ajo: npm install docx && node tyokalut/tee_lataukset.js
// PDF: Chrome headless --print-to-pdf tyokalut/tyopaketti-print.html-tiedostosta (ks. README).
// BittiBiomin ladattavat docx-materiaalit. Viikkodata luetaan suoraan
// index.html:stä ja app.js:stä, jotta paperiversio pysyy sivuston kanssa synkassa.
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, PageBreak,
} = require("docx");

const SITE = path.join(__dirname, "..");
const OUT = path.join(SITE, "downloads");
fs.mkdirSync(OUT, { recursive: true });

// ---------- Sivuston datan poiminta ----------
const html = fs.readFileSync(path.join(SITE, "index.html"), "utf8");
const appjs = fs.readFileSync(path.join(SITE, "app.js"), "utf8");

function stripTags(s) {
  return s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/\s+/g, " ").trim();
}

// weekGuidance-objekti app.js:stä (IIFE:n sisällä → poimitaan ja evaloidaan erikseen)
const gm = appjs.match(/const weekGuidance = (\{[\s\S]*?\n  \});\n/);
if (!gm) throw new Error("weekGuidance ei löytynyt");
const weekGuidance = eval("(" + gm[1] + ")");

// Viikkokortit index.html:stä
const weeks = [];
const cardRe = /<details class="week-card" id="week-(\d+)"[\s\S]*?<small>([^<]+)<\/small><strong>([^<]+)<\/strong>[\s\S]*?<\/details>/g;
let m;
while ((m = cardRe.exec(html))) {
  const [block, num, dates, title] = m;
  const tasks = [...block.matchAll(/data-task="[\d-]+"> <span>([\s\S]*?)<\/span><\/label>/g)].map((t) => stripTags(t[1]).replace(/tällä sivulla/g, "sivustolla"));
  const ev = block.match(/<p class="evidence"><strong>[^<]*<\/strong>\s*([\s\S]*?)<\/p>/);
  weeks.push({ num: +num, dates, title, tasks, evidence: ev ? stripTags(ev[1]) : "" });
}
if (weeks.length !== 15) throw new Error("viikkoja " + weeks.length);

// Näyttömatriisi
const matrices = [];
const matRe = /<details class="matrix[^>]*>\s*<summary>([^<]+)<\/summary>([\s\S]*?)<\/details>/g;
while ((m = matRe.exec(html))) {
  const items = [...m[2].matchAll(/data-evidence="[a-z0-9]+"><span><strong>([^<]+)<\/strong>\s*([\s\S]*?)<\/span>/g)]
    .map((i) => ({ title: stripTags(i[1]), hint: stripTags(i[2]) }));
  matrices.push({ title: stripTags(m[1]), items });
}

const PHASES = [
  { key: "A", label: "Paketin ydin: teema, työkalut ja ensimmäiset omat tekstuurit", weeks: [34, 35, 36, 37], color: "8D5A2B" },
  { key: "B", label: "Paketin featuret: 3D-mallit, äänet ja katselmointi", weeks: [38, 39, 40, 41], color: "1A6FAE" },
  { key: "C", label: "Paketti valmiiksi: skriptit, palautemuutos ja laatu", weeks: [43, 44, 45, 46], color: "C03434" },
  { key: "D", label: "Julkaisu ja näyttö", weeks: [47, 48, 49], color: "7C3AED" },
];
const GREEN = "1B5E20";
const PAGE = { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } };
const CW = 11906 - 2 * 1134; // sisältöleveys DXA

// ---------- docx-apurit ----------
const p = (text, opts = {}) => new Paragraph({
  children: [new TextRun({ text, size: opts.size || 21, bold: opts.bold, italics: opts.italics, color: opts.color })],
  spacing: { after: opts.after ?? 120, before: opts.before ?? 0 },
  alignment: opts.align,
});
const h1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text, color: GREEN, bold: true })], spacing: { before: 320, after: 160 } });
const h2 = (text, color = GREEN) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text, color, bold: true })], spacing: { before: 260, after: 120 } });
const box = (text) => p("☐  " + text, { after: 80 });
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });

function cell(text, { w, bold, fill, size = 19, color } = {}) {
  return new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: fill ? { type: ShadingType.CLEAR, fill } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [new Paragraph({ children: [new TextRun({ text, bold, size, color })], spacing: { after: 0 } })],
  });
}
function table(colWidths, rows) {
  return new Table({
    width: { size: colWidths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    columnWidths: colWidths,
    rows,
  });
}

// ---------- 1. Työpaketti ----------
const tp = [];
tp.push(new Paragraph({ children: [new TextRun({ text: "BittiBiomi", size: 72, bold: true, color: GREEN })], spacing: { before: 2400, after: 200 }, alignment: AlignmentType.CENTER }));
tp.push(p("Paperinen työpaketti · ohjattu näyttöprojekti", { size: 28, align: AlignmentType.CENTER, after: 60 }));
tp.push(p("Oma Minecraft-teemapaketti: tekstuurit, mallit, äänet ja skriptit", { size: 24, align: AlignmentType.CENTER, after: 400, color: "555555" }));
tp.push(p("Viikot 34–49 · syysloma vko 42 · luovutus pe 4.12.2026", { size: 24, bold: true, align: AlignmentType.CENTER, after: 2000 }));
tp.push(p("Tämä paketti on aikataulu ja tarkistuslista tilanteisiin, joissa sivusto ei ole auki. Projektipäiväkirja kirjoitetaan sivustolla ja viedään repositorion project-docs-kansioon. Rasti tässä vihossa ei ole palautus — työnäyte on aina Git-repositoryssa.", { size: 21, align: AlignmentType.CENTER, color: "555555" }));
tp.push(p('Paketti julkaistaan avoimella lisenssillä ja repository on julkinen ensimmäisestä commitista. Älä laita julkiseen repositoryyn henkilötietoja, kotiosoitetta, koulun tunnisteita tai muiden nimiä — Git-historia on pysyvä. Sovi tekijänimi ohjaajan kanssa, ja alaikäisenä sovi julkisesta repositorystä myös huoltajan kanssa.', { size: 21, align: AlignmentType.CENTER, color: "555555", before: 200 }));
tp.push(pageBreak());

tp.push(h1("Aikataulu yhdellä aukeamalla"));
const schedRows = [new TableRow({ tableHeader: true, children: [
  cell("Vko", { w: 900, bold: true, fill: "E8F5E9" }),
  cell("Pvm", { w: 1800, bold: true, fill: "E8F5E9" }),
  cell("Viikon aihe", { w: 5138, bold: true, fill: "E8F5E9" }),
  cell("Vaihe", { w: 1800, bold: true, fill: "E8F5E9" }),
]})];
for (const ph of PHASES) {
  for (const wn of ph.weeks) {
    if (wn === 43) schedRows.push(new TableRow({ children: [
      cell("42", { w: 900 }), cell("12.–16.10.", { w: 1800 }), cell("Syysloma — ei projektityötä", { w: 5138 }), cell("—", { w: 1800 }),
    ]}));
    const wk = weeks.find((x) => x.num === wn);
    schedRows.push(new TableRow({ children: [
      cell(String(wk.num), { w: 900, bold: true }),
      cell(wk.dates, { w: 1800 }),
      cell(wk.title, { w: 5138 }),
      cell(ph.key + " · " + ph.label.split(":")[0], { w: 1800 }),
    ]}));
  }
}
tp.push(table([900, 1800, 5138, 1800], schedRows));
tp.push(p("Palautus viimeistään pe 4.12.2026. Sivusto: tehtävien tarkat ohjeet, toteutusavut ja projektipäiväkirja.", { before: 160, italics: true, color: "555555" }));
tp.push(pageBreak());

for (const ph of PHASES) {
  tp.push(h1("Vaihe " + ph.key + " — " + ph.label));
  for (const wn of ph.weeks) {
    if (wn === 43) {
      tp.push(h2("Vko 42 · 12.–16.10. — Syysloma", "8A6D00"));
      tp.push(p("Ei projektityötä eikä korvaavia tehtäviä. Jatka viikolla 43 viimeisimmästä toimivasta main-versiosta.", { after: 200 }));
    }
    const wk = weeks.find((x) => x.num === wn);
    const g = weekGuidance[wn] || {};
    tp.push(h2("Vko " + wk.num + " · " + wk.dates + " — " + wk.title));
    if (g.feature) tp.push(p(g.feature, { italics: true, color: "555555" }));
    wk.tasks.forEach((t) => tp.push(box(t)));
    if (g.done) tp.push(p("Valmis kun: " + g.done, { size: 19, color: GREEN, after: 60 }));
    if (wk.evidence) tp.push(p("Työnäyte Git-repositoryyn ennen rastia: " + wk.evidence, { size: 19, color: "555555", after: 240 }));
  }
}

tp.push(pageBreak());
tp.push(h1("Viimeiset viisi päivää"));
[["Ma 30.11.", "Sisältöjäädytys — viimeinen hyväksytty versio"],
 ["Ti 1.12.", "Aineisto — päiväkirja, testit ja linkit"],
 ["Ke 2.12.", "Harjoittelu — 8–10 min demo ja itsearviointi"],
 ["To 3.12.", "Puskuri — tarkistus toisen henkilön kanssa"],
 ["Pe 4.12.", "LUOVUTUS — paketti, repository, projektipäiväkirja ja näyttö"],
].forEach(([d, t]) => tp.push(p(d + "  ·  " + t, { bold: d.startsWith("Pe"), after: 80 })));

tp.push(pageBreak());
tp.push(h1("Näyttömatriisi — 32 osaamisvaatimusta"));
tp.push(p("Rasti vasta, kun vaatimukselle on täsmällinen työnäyte: linkki, commit, kuva, testirivi tai muistio. Sama työnäyte voi kelvata useaan kohtaan.", { color: "555555" }));
for (const mat of matrices) {
  tp.push(h2(mat.title));
  mat.items.forEach((i) => tp.push(p("☐  " + i.title + " — " + i.hint, { size: 19, after: 60 })));
}
tp.push(p("Muista: sivuston rastit ja kentät tallentuvat vain selaimeen. Ne eivät siirry opettajalle eivätkä korvaa Gitissä olevaa työnäytettä.", { before: 240, italics: true, color: "555555" }));

// ---------- 2. Teemaideat ----------
const THEMES = [
  ["Kotikylä", "Lämmin suomalainen kylä: puutalot, sauna ja pihapiiri.", "hirsiseinä, pärekatto, saunankiuas", "kiulu, vihta, kahvipannu", "pihakeinu tai kaivonvintti", "saunan kiukaan sihahdus", "kiulun resepti + saavutus Löylynheittäjä"],
  ["Avaruusasema", "Kylmä metalli ja neonvalot kiertoradalla.", "metallipaneeli, valolattia, kaapelikouru", "happipullo, työkalu, avaruusruoka", "antenni tai ohjauspaneeli", "ilmalukon suhina", "happipullon resepti + saavutus Ulkoavaruudessa"],
  ["Satumetsä", "Sammaleinen, utuinen ja vähän taianomainen metsä.", "sammalkivi, sienirunko, hehkulehvästö", "taikasauva, sienikori, hohtomarja", "jättisieni", "metsän kuiskaus", "hohtomarjan resepti + saavutus Metsänhenki"],
  ["Talviselkonen", "Lumi, jää ja revontulet Lapissa.", "hankilumi, jääkuutio, honkaseinä", "sukset, lapaset, kuksa", "kota tai pulkka", "pakkasen narske", "kuksan resepti + saavutus Kaamoksen valo"],
  ["Merenalainen", "Sukellus koralliriutalle ja hylylle.", "koralli, merilevä, hylkylankku", "sukelluslasit, harppuuna, helmi", "ruostunut ankkuri", "kuplien pulputus", "sukelluslasien resepti + saavutus Syvyyksien tutkija"],
  ["Villi länsi", "Pölyinen preeriakaupunki ja kultaryntäys.", "hiekkakivi, saluunalauta, kaktus", "lasso, kultahippu, stetson", "tuulimylly tai vesitorni", "saluunan ovi", "kultahipun resepti + saavutus Kullankaivaja"],
  ["Muinainen temppeli", "Hiekkaan hautautunut raunio ja hieroglyfit.", "hieroglyfikivi, kultatiili, hiekkalattia", "soihtu, aarrekartta, skarabee", "sfinksipatsas", "kiviluukun jyrinä", "soihdun resepti + saavutus Haudanryöstäjä"],
  ["Kauhukartano", "Naristva vanha talo — sopivan pelottava, ei liian.", "lahopuu, hämähäkinseitti-ikkuna, kellariportaat", "lyhty, vanha avain, hämäränaamio", "kummitusveistos", "narisevat portaat", "lyhdyn resepti + saavutus Rohkea vieras"],
  ["Kyberkaupunki", "Neonvalot, hologrammit ja sadekadut.", "neonseinä, hologrammilattia, piirilevy", "datalevy, neonlasit, energiajuoma", "mainoskyltti", "syntetisaattoripiippaus", "datalevyn resepti + saavutus Verkossa"],
  ["Koulun oma teema", "Oman koulun värit, tilat ja sisäpiirin jutut.", "koulun seinätiili, liitutaulu, käytävälaatta", "läppäri, ruokalan tarjotin, avainnauha", "koulun logo -veistos", "välituntikello", "tarjottimen resepti + saavutus Ysiluokkalainen"],
];
const ti = [];
ti.push(new Paragraph({ children: [new TextRun({ text: "Teemaideat", size: 56, bold: true, color: GREEN })], spacing: { before: 200, after: 120 } }));
ti.push(p("BittiBiomi · 10 teemaa sisältölistoineen. Nämä ovat lähtökohtia — oma idea on aina paras, kunhan se kestää 15 viikkoa. Valitse teema, jonka jaksat katsoa joulukuuhun asti.", { size: 22, after: 300, color: "555555" }));
for (const [name, desc, blocks, items, model, sound, script] of THEMES) {
  ti.push(h2(name));
  ti.push(p(desc, { italics: true, after: 100 }));
  ti.push(table([2200, 7438], [
    new TableRow({ children: [cell("Blokkitekstuurit", { w: 2200, bold: true, fill: "F1F8E9" }), cell(blocks, { w: 7438 })] }),
    new TableRow({ children: [cell("Esinetekstuurit", { w: 2200, bold: true, fill: "F1F8E9" }), cell(items, { w: 7438 })] }),
    new TableRow({ children: [cell("3D-malli", { w: 2200, bold: true, fill: "F1F8E9" }), cell(model, { w: 7438 })] }),
    new TableRow({ children: [cell("Ääni", { w: 2200, bold: true, fill: "F1F8E9" }), cell(sound, { w: 7438 })] }),
    new TableRow({ children: [cell("Skriptattu lisä", { w: 2200, bold: true, fill: "F1F8E9" }), cell(script, { w: 7438 })] }),
  ]));
  ti.push(p("", { after: 160 }));
}
ti.push(p("Muista rajaus: P0 ensin — 8 tekstuuria, 2 mallia, omat nimet, 2 reseptiä, 1 funktio ja 1 saavutus. Lisäideat ovat P1/P2-listaa.", { bold: true, before: 120 }));

// ---------- 3. Dokumentointipohjat ----------
const dp = [];
dp.push(new Paragraph({ children: [new TextRun({ text: "Näytön dokumentointipohjat", size: 48, bold: true, color: GREEN })], spacing: { before: 200, after: 120 } }));
dp.push(p("BittiBiomi · kopioi tarvitsemasi pohja project-docs-kansioon tai täytä paperilla ja skannaa. Jokainen pohja vastaa sivuston viikkotehtävää.", { size: 22, after: 300, color: "555555" }));

dp.push(h1("1 · Aloituskeskustelun muistiinpanot (vko 34)"));
dp.push(p("Päivä ja osallistujien roolit: ______________________________", { after: 160 }));
const qRows = [new TableRow({ tableHeader: true, children: [
  cell("#", { w: 600, bold: true, fill: "E8F5E9" }),
  cell("Kysymys", { w: 4300, bold: true, fill: "E8F5E9" }),
  cell("Vastaus / avoin / oletus", { w: 4738, bold: true, fill: "E8F5E9" }),
]})];
for (let i = 1; i <= 8; i++) qRows.push(new TableRow({ children: [cell(String(i), { w: 600 }), cell("", { w: 4300 }), cell("", { w: 4738 })] }));
dp.push(table([600, 4300, 4738], qRows));
dp.push(pageBreak());

dp.push(h1("2 · Vaihtoehtojen vertailumuistio (vko 39)"));
[["Vaihtoehto A", ""], ["Vaihtoehto B", ""], ["Työmäärä (pv): A / B", ""], ["Näkyvyys pelissä: A / B", ""], ["Riski: A / B", ""], ["Valinta ja perustelu (2–3 virkettä)", ""], ["Keskustelukumppani, rooli ja pvm", ""]].forEach(([k]) => {
  dp.push(p(k + ":", { bold: true, after: 40 }));
  dp.push(p("________________________________________________________________", { after: 160, color: "888888" }));
});
dp.push(pageBreak());

dp.push(h1("3 · Katselmointiloki (vkot 41 ja 47)"));
const kRows = [
  ["Päivä ja versio (commit)", ""], ["Osallistujat ja roolit", ""], ["Testaajan alkuperäinen havainto (hänen sanoillaan)", ""],
  ["Oma tulkinta", ""], ["Päätös ja hyväksyjä", ""], ["Sovittu muutos (issue + arvio + valmis kun -ehto)", ""],
].map(([k]) => new TableRow({ children: [cell(k, { w: 3400, bold: true, fill: "F1F8E9" }), cell("", { w: 6238 })] }));
dp.push(table([3400, 6238], kRows));
dp.push(p("Testaajat ovat ohjaaja ja vertaistestaaja. Erota aina testaajan sanat omasta tulkinnastasi.", { before: 120, italics: true, color: "555555" }));
dp.push(pageBreak());

dp.push(h1("4 · Testimatriisi (vko 45)"));
const tRows = [new TableRow({ tableHeader: true, children: [
  cell("T#", { w: 700, bold: true, fill: "E8F5E9" }),
  cell("Lähtötila", { w: 2100, bold: true, fill: "E8F5E9" }),
  cell("Toiminta", { w: 2400, bold: true, fill: "E8F5E9" }),
  cell("Odotus", { w: 2100, bold: true, fill: "E8F5E9" }),
  cell("Havainto", { w: 1600, bold: true, fill: "E8F5E9" }),
  cell("Tulos", { w: 738, bold: true, fill: "E8F5E9" }),
]})];
for (let i = 1; i <= 12; i++) {
  const label = "T" + String(i).padStart(2, "0");
  tRows.push(new TableRow({ children: [cell(label, { w: 700 }), cell("", { w: 2100 }), cell("", { w: 2400 }), cell("", { w: 2100 }), cell("", { w: 1600 }), cell("", { w: 738 })] }));
}
dp.push(table([700, 2100, 2400, 2100, 1600, 738], tRows));
dp.push(p("Luokat: T01–T04 normaali käyttö · T05–T08 rajat · T09–T12 virhetilanteet. Kirjoita odotus ennen testiajoa.", { before: 120, italics: true, color: "555555" }));
dp.push(pageBreak());

dp.push(h1("5 · Virheenkorjausketju (vko 45, 3 kpl)"));
[["Havainto tai merkitty vikatehtävä", ""], ["Toistamisohje", ""], ["Syy", ""], ["Korjaus (commit)", ""], ["Uusintatestin tulos", ""], ["Regressiotesti (mitä muuta testattiin)", ""]].forEach(([k]) => {
  dp.push(p(k + ":", { bold: true, after: 40 }));
  dp.push(p("________________________________________________________________", { after: 160, color: "888888" }));
});
dp.push(pageBreak());

dp.push(h1("6 · Lisenssi- ja CREDITS-kirjaus (vko 46)"));
dp.push(p("Paketin oma lisenssi: ____________________  ·  sovittu ohjaajan kanssa (pvm): ____________", { after: 160 }));
const cRows = [new TableRow({ tableHeader: true, children: [
  cell("Tiedosto tai asset", { w: 3000, bold: true, fill: "E8F5E9" }),
  cell("Lähde: itse tehty vai mistä?", { w: 3400, bold: true, fill: "E8F5E9" }),
  cell("Lisenssi ja salliiko uudelleenjulkaisun", { w: 3238, bold: true, fill: "E8F5E9" }),
]})];
for (let i = 0; i < 8; i++) cRows.push(new TableRow({ children: [cell("", { w: 3000 }), cell("", { w: 3400 }), cell("", { w: 3238 })] }));
dp.push(table([3000, 3400, 3238], cRows));
dp.push(p("Siirrä tämän taulukon sisältö CREDITS-tiedostoon repositoryyn. Jos kaikki on itse tehtyä, kirjaa se yhdellä rivillä.", { before: 120, italics: true, color: "555555" }));
dp.push(pageBreak());

dp.push(h1("7 · AI-lokin paperiversio"));
dp.push(p("Sivuston AI-loki on ensisijainen. Käytä tätä, jos kirjaat merkinnän ilman selainta — siirrä se sivustolle saman päivän aikana.", { color: "555555" }));
const aRows = [new TableRow({ tableHeader: true, children: [
  cell("Päivä ja työkalu", { w: 1900, bold: true, fill: "E8F5E9" }),
  cell("Mihin pyysit apua?", { w: 2400, bold: true, fill: "E8F5E9" }),
  cell("Mitä käytit, muutit tai hylkäsit?", { w: 2700, bold: true, fill: "E8F5E9" }),
  cell("Miten tarkistit ja mitä opit?", { w: 2638, bold: true, fill: "E8F5E9" }),
]})];
for (let i = 0; i < 6; i++) aRows.push(new TableRow({ children: [cell("", { w: 1900 }), cell("", { w: 2400 }), cell("", { w: 2700 }), cell("", { w: 2638 })] }));
dp.push(table([1900, 2400, 2700, 2638], aRows));
dp.push(p("Vahvista jokaisesta merkinnästä: en syöttänyt henkilötietoja, salaisuuksia tai luottamuksellista aineistoa. Lisää aineistoviite (issue, commit tai testi).", { before: 120, italics: true, color: "555555" }));

// ---------- Tallennus ----------
async function saveDoc(name, children) {
  const doc = new Document({
    styles: { default: { document: { run: { font: "Calibri", size: 21 } } } },
    sections: [{ properties: { page: PAGE }, children }],
  });
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(path.join(OUT, name), buf);
  console.log(name, buf.length, "B");
}

(async () => {
  await saveDoc("bittibiomi-tyopaketti.docx", tp);
  await saveDoc("teemaideat.docx", ti);
  await saveDoc("nayton-dokumentointipohjat.docx", dp);
})();

// ---------- Print-HTML samasta datasta (Chrome headless → PDF) ----------
function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
const H = [];
H.push(`<!doctype html><html lang="fi"><head><meta charset="utf-8"><title>BittiBiomi – työpaketti</title><style>
@page { size: A4; margin: 16mm; }
body { font-family: -apple-system, 'Segoe UI', sans-serif; font-size: 10pt; line-height: 1.45; color: #1a1a1a; margin: 0; }
h1 { color: #1b5e20; font-size: 17pt; margin: 0 0 8pt; page-break-after: avoid; }
h2 { color: #1b5e20; font-size: 12pt; margin: 14pt 0 5pt; page-break-after: avoid; }
.cover { text-align: center; padding-top: 70mm; page-break-after: always; }
.cover h1 { font-size: 34pt; }
.cover p { color: #555; }
table { border-collapse: collapse; width: 100%; margin: 6pt 0; page-break-inside: avoid; }
td, th { border: 0.5pt solid #bbb; padding: 3pt 5pt; text-align: left; vertical-align: top; font-size: 9pt; }
th { background: #e8f5e9; }
.wk { page-break-inside: avoid; margin-bottom: 8pt; }
.feature { color: #555; font-style: italic; margin: 0 0 4pt; }
.task { margin: 2pt 0; }
.done { color: #1b5e20; font-size: 9pt; margin: 3pt 0 0; }
.ev { color: #555; font-size: 9pt; margin: 2pt 0 0; }
.page { page-break-before: always; }
.muted { color: #555; }
.item { font-size: 9pt; margin: 2pt 0; }
</style></head><body>`);
H.push(`<div class="cover"><h1>BittiBiomi</h1><p style="font-size:14pt">Paperinen työpaketti · ohjattu näyttöprojekti</p><p>Oma Minecraft-teemapaketti: tekstuurit, mallit, äänet ja skriptit</p><p style="font-size:12pt"><strong>Viikot 34–49 · syysloma vko 42 · luovutus pe 4.12.2026</strong></p><p style="max-width:120mm;margin:18pt auto 0">Tämä paketti on aikataulu ja tarkistuslista tilanteisiin, joissa sivusto ei ole auki. Projektipäiväkirja kirjoitetaan sivustolla ja viedään repositorion project-docs-kansioon. Rasti tässä vihossa ei ole palautus — työnäyte on aina Git-repositoryssa.</p>
<p style="max-width:120mm;margin:10pt auto 0">Paketti julkaistaan avoimella lisenssillä ja repository on julkinen ensimmäisestä commitista. Älä laita julkiseen repositoryyn henkilötietoja, kotiosoitetta, koulun tunnisteita tai muiden nimiä — Git-historia on pysyvä. Sovi tekijänimi ohjaajan kanssa, ja alaikäisenä sovi julkisesta repositorystä myös huoltajan kanssa.</p></div>`);
H.push(`<h1>Aikataulu</h1><table><tr><th>Vko</th><th>Pvm</th><th>Viikon aihe</th><th>Vaihe</th></tr>`);
for (const ph of PHASES) for (const wn of ph.weeks) {
  if (wn === 43) H.push(`<tr><td>42</td><td>12.–16.10.</td><td>Syysloma — ei projektityötä</td><td>—</td></tr>`);
  const wk = weeks.find((x) => x.num === wn);
  H.push(`<tr><td><strong>${wk.num}</strong></td><td>${wk.dates}</td><td>${esc(wk.title)}</td><td>${ph.key}</td></tr>`);
}
H.push(`</table><p class="muted">Palautus viimeistään pe 4.12.2026. Tehtävien tarkat ohjeet, toteutusavut ja projektipäiväkirja ovat sivustolla.</p>`);
for (const ph of PHASES) {
  H.push(`<h1 class="page">Vaihe ${ph.key} — ${esc(ph.label)}</h1>`);
  for (const wn of ph.weeks) {
    if (wn === 43) H.push(`<div class="wk"><h2>Vko 42 · 12.–16.10. — Syysloma</h2><p>Ei projektityötä eikä korvaavia tehtäviä. Jatka viikolla 43 viimeisimmästä toimivasta main-versiosta.</p></div>`);
    const wk = weeks.find((x) => x.num === wn);
    const g = weekGuidance[wn] || {};
    H.push(`<div class="wk"><h2>Vko ${wk.num} · ${wk.dates} — ${esc(wk.title)}</h2>`);
    if (g.feature) H.push(`<p class="feature">${esc(g.feature)}</p>`);
    wk.tasks.forEach((t) => H.push(`<p class="task">☐&nbsp; ${esc(t)}</p>`));
    if (g.done) H.push(`<p class="done"><strong>Valmis kun:</strong> ${esc(g.done)}</p>`);
    if (wk.evidence) H.push(`<p class="ev"><strong>Työnäyte Git-repositoryyn ennen rastia:</strong> ${esc(wk.evidence)}</p>`);
    H.push(`</div>`);
  }
}
H.push(`<h1 class="page">Viimeiset viisi päivää</h1>`);
[["Ma 30.11.", "Sisältöjäädytys — viimeinen hyväksytty versio"],["Ti 1.12.", "Aineisto — päiväkirja, testit ja linkit"],["Ke 2.12.", "Harjoittelu — 8–10 min demo ja itsearviointi"],["To 3.12.", "Puskuri — tarkistus toisen henkilön kanssa"],["Pe 4.12.", "LUOVUTUS — paketti, repository, projektipäiväkirja ja näyttö"]].forEach(([d, t]) => H.push(`<p class="task"><strong>${d}</strong> · ${t}</p>`));
H.push(`<h1 class="page">Näyttömatriisi — 32 osaamisvaatimusta</h1><p class="muted">Rasti vasta, kun vaatimukselle on täsmällinen työnäyte: linkki, commit, kuva, testirivi tai muistio. Sama työnäyte voi kelvata useaan kohtaan.</p>`);
for (const mat of matrices) {
  H.push(`<h2>${esc(mat.title)}</h2>`);
  mat.items.forEach((i) => H.push(`<p class="item">☐&nbsp; <strong>${esc(i.title)}</strong> — ${esc(i.hint)}</p>`));
}
H.push(`<p class="muted" style="margin-top:10pt"><em>Muista: sivuston rastit ja kentät tallentuvat vain selaimeen. Ne eivät siirry opettajalle eivätkä korvaa Gitissä olevaa työnäytettä.</em></p>`);
H.push(`</body></html>`);
fs.writeFileSync(path.join(__dirname, "tyopaketti-print.html"), H.join("\n"));
console.log("tyopaketti-print.html kirjoitettu");
