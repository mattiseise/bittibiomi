(function () {
  "use strict";

  const STORAGE_KEY = "bittibiomi-progress-v1";
  const EVIDENCE_KEY = "bittibiomi-evidence-v1";
  const LOG_KEY = "bittibiomi-ai-log-v1";
  const JOURNAL_KEY = "bittibiomi-journal-v1";
  const PLAN_KEY = "bittibiomi-asset-pack-plan-v1";
  const taskBoxes = [...document.querySelectorAll("[data-task]")];
  const evidenceBoxes = [...document.querySelectorAll("[data-evidence]")];
  const weekCards = [...document.querySelectorAll(".week-card")];

  // Viikkotyyppien kehystekstit: asset-viikot puhuvat viikon assetista,
  // muut viikot viikon havaittavasta lopputuloksesta (pedagoginen runko §4).
  const weekFraming = {
    feature: {
      kicker: "Viikon asset",
      connectionLabel: "Näin asset rakentuu:",
      deliverableLabel: "Pakettiin valmistuu",
      skillsLabel: "Assetin tekniikka: arvioidaan näytössä"
    },
    pohjustus: {
      kicker: "Paketin pohjustus",
      connectionLabel: "Näin viikko vie pakettia eteenpäin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    katselmointi: {
      kicker: "Katselmointi: paketti testissä",
      connectionLabel: "Näin viikko vie pakettia eteenpäin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    laatu: {
      kicker: "Paketin laatu",
      connectionLabel: "Näin viikko vie pakettia eteenpäin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    julkaisu: {
      kicker: "Paketin julkaisu",
      connectionLabel: "Näin viikko vie pakettia eteenpäin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    naytto: {
      kicker: "Näyttöviikko",
      connectionLabel: "Näin viikko vie näytön maaliin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    }
  };

  const weekGuidance = {
    34: {
      type: "pohjustus",
      feature: "Viikon jälkeen tiedät, millainen paketti tehdään ja kenelle. Tyhjä paketti näkyy pelin valikossa.",
      connection: "Asset-työkierto alkaa toimeksiannosta: ennen yhtäkään pikseliä päätät, mitä teemaa paketti toteuttaa, kenelle se tehdään ja millä Minecraft-versiolla se toimii.",
      deliverable: "Tarvekartoitus, pelin valikossa näkyvä tyhjä resurssipaketti ja Git-repository.",
      why: "Jos avoimet asiat jäävät oletuksiksi, voit rakentaa väärän paketin. Varhainen pakettitesti varmistaa, että pack_format-arvo ja kansiorakenne toimivat ennen varsinaista asset-työtä.",
      done: "Ohjaajan vastaukset, avoimet asiat ja oletukset on eroteltu. Toinen henkilö löytää julkisen repositoryn README:stä projektin tavoitteen, ja tyhjä paketti näkyy pelin pakettivalikossa.",
      record: "Kirjoita Vko 34 -merkintään keskustelun päivä, osallistujien roolit, 8 kysymystä vastauksineen, avoimet asiat, kahden tutkitun paketin havainnot ja oma kohdeyleisö, sovittu Minecraft-versio ja lisenssi, ensimmäisen commitin tunniste ja kuva paketista pelin valikossa.",
      skills: ["toimeksianto", "pakettirunko", "Git"],
      steps: [
        ["Selvitä tarve", "Merkitse toimeksiannon pakolliset asiat, laadi vähintään 8 päätökseen johtavaa kysymystä ja kirjaa keskustelun vastaukset, avoimet asiat ja oletukset. Avaa lisäksi kaksi julkaistua teemapakettia Modrinthissa tai Planet Minecraftissa: kenelle ne on tehty, mitä ne sisältävät ja mitä sinun pakettisi tekee toisin? Tästä syntyy kuvaus omasta kohdeyleisöstä."],
        ["Tee pakettitesti", "Luo resourcepack-kansioon pack.mcmeta ja pack.png ja tarkista, että paketti näkyy pelin valikossa oikealla kuvauksella. Kirjaa sovittu Minecraft-versio ja pack_format."],
        ["Perusta julkinen Git", "Käy ensin läpi, mitä julkiseen repositoryyn ei laiteta: henkilötiedot, kotiosoite, koulun tunnisteet eikä muiden nimiä tai käyttäjänimiä kuvakaappauksissa. Git-historia on pysyvä. Sovi tekijänimi ohjaajan kanssa, ja alaikäisenä sovi julkisesta repositorystä myös huoltajan kanssa. Lisää sitten README, .gitignore ja kansiot resourcepack, datapack ja project-docs, aseta repository julkiseksi ja tee ensimmäinen commit."]
      ],
      help: {
        title: "Luo pakettirunko ja Git-repository",
        tree: "teemapaketti/ (julkinen repository)\n├─ resourcepack/\n│  ├─ pack.mcmeta\n│  ├─ pack.png\n│  └─ assets/\n├─ datapack/           (täytetään viikolla 43)\n├─ project-docs/\n│  └─ projektipaivakirja.md\n├─ .gitignore\n├─ README.md\n└─ LICENSE             (lisätään heti kun lisenssi on sovittu, vko 35)",
        actions: [
          "Luo repositoryn juureen kansiot resourcepack, datapack ja project-docs. Kansioiden nimet pienillä kirjaimilla ilman ääkkösiä.",
          "Kirjoita VS Codella resourcepack/pack.mcmeta. Kopioi rakenne alta ja vaihda description omaan teemaasi.",
          "Tee pack.png: 64×64 pikselin neliökuva paketin tunnukseksi. Piskelin export riittää.",
          "Avaa pelissä Options → Resource Packs → Open Pack Folder ja kopioi resourcepack-kansio sinne. Paketti näkyy valikossa ilman zippausta.",
          "Luo GitHubiin tyhjä repository ja valitse näkyvyydeksi Public — tarkista ennen ensimmäistä pushia, ettei mukana ole henkilötietoja. Lisää README ja .gitignore ja tee ensimmäinen commit. Varmista, että kaikki kolme kansiota näkyvät GitHubissa."
        ],
        code: "{\n  \"pack\": {\n    \"pack_format\": 34,\n    \"description\": \"Kotikylä – oma teemapaketti\"\n  }\n}\n\npack_format 34 vastaa Java-versiota 1.21.\nTarkista sovitun version arvo Minecraft Wikin\nsivulta Pack format ja kirjaa se README:hen.",
        test: "Sulje peli ja avaa se uudelleen. Paketti näkyy Resource Packs -valikossa omalla kuvalla ja kuvauksella, eikä peli näytä varoitusta väärästä versiosta.",
        links: [
          ["Minecraft Wiki: Pack format -taulukko", "https://minecraft.wiki/w/Pack_format"]
        ]
      },
      example: "Kysymys: Mikä Minecraft-versio ja millä avoimella lisenssillä paketti julkaistaan? Vastaus: [ohjaajan vastaus]. Päätös: versio, pack_format ja lisenssi kirjattu README:hen.",
      notEnough: "Kahdeksan lähes samaa tekoälykysymystä tai itse keksityt vastaukset eivät osoita, että olet selvittänyt toimeksiannon."
    },
    35: {
      type: "pohjustus",
      feature: "Viikon jälkeen paketti on paperilla: teema, väripaletti, lisenssi ja sisältölista tekojärjestyksessä. Ohjaaja on hyväksynyt rajauksen.",
      excerpt: "Siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
      connection: "Nyt muutat toimeksiannon näkyväksi suunnitelmaksi: teema, paletti, sisältölista, tehtävät ja valmiin työn ehdot. Viikon 34 vastaukset ohjaajalta ovat suunnitelman pohja.",
      deliverable: "Hyväksytty pakollinen perusversio, sovittu lisenssi, pieni backlog, moodboard ja kolme tekstuuriluonnosta.",
      why: "Rajaus estää pakettia kasvamasta liian suureksi. Kun jokaisella tehtävällä on selvä valmis kun -ehto, tiedät, mitä seuraavaksi tehdään ja milloin työ voidaan testata.",
      done: "Pakollinen perusversio on hyväksytty. Jokaisella P0-tehtävällä on 0,5–1 päivän arvio ja havaittava valmis kun -ehto. Moodboardissa näkyvät paletti ja referenssit.",
      record: "Kirjoita Vko 35 -merkintään, mitkä Asset-pack-suunnitelman päätökset teit ja miksi, hyväksyjän rooli ja päivä sekä mitkä asiat jäivät ohjaajalle avoimiksi. Lisää linkit suunnitelmaan, backlogiin ja moodboardiin.",
      skills: ["rajaus", "moodboard", "työn pilkkominen"],
      resources: [
        ["Täytä Asset-pack-suunnitelma tällä sivulla", "#gdd", false],
        ["Avaa koko toimeksianto", "#toimeksianto", false]
      ],
      steps: [
        ["Täytä suunnitelma", "Täytä Asset-pack-suunnitelman omat päätökset tällä sivulla: teema ja kohdeyleisö omin sanoin, resoluutio, paletti ja P0-määrät perusteluineen. Kirjaa myös ohjaajan kanssa sovittu lisenssi ja lisää LICENSE-tiedosto repositoryn juureen heti, kun lisenssi on selvä — viimeistään tällä viikolla. Lataa asset-pack-suunnitelma.md ja vie se project-docs-kansioon."],
        ["Tee pieni backlog", "Kirjoita jokainen P0-asset omaksi 0,5–1 päivän issueksi. Lisää prioriteetti ja havaittava valmis kun -ehto."],
        ["Kokoa moodboard", "Valitse väripaletti, kerää referenssikuvat ja piirrä kolme tekstuuriluonnosta paperille tai Piskeliin. Tallenna kuvat project-docs-kansioon."]
      ],
      help: {
        title: "Tee issue, moodboard ja sisältölista",
        tree: "project-docs/evidence/week-35/\n├─ moodboard.png\n├─ paletti.png\n└─ luonnokset/\n   ├─ luonnos-1.png\n   ├─ luonnos-2.png\n   └─ luonnos-3.png",
        actions: [
          "Kirjoita ensin projektipäiväkirjaan teema, kohdeyleisö, rajaus ja pakollinen perusversio. Käytä ohjaajan vastauksia; älä keksi vastauksia avoimiin asioihin.",
          "Avaa GitHubissa repository → Issues → New issue. Tee yksi issue jokaisesta P0-assetista. Kirjoita otsikko verbillä, esimerkiksi Piirrä kolme blokkitekstuuria.",
          "Lisää issueen työmääräarvio ja valmis kun -ehto, jonka toinen ihminen voi testata pelissä. Jaa yli päivän mittainen issue pienempiin osiin.",
          "Valitse paletti Lospecista tai rakenna oma 5–8 värin paletti. Sama paletti kaikkiin tekstuureihin — se pitää paketin yhtenäisenä.",
          "Piirrä kolme luonnosta ja pyydä hyväksyntä ennen pikselityötä. Luonnos saa olla karkea; sen tehtävä on lukita suunta."
        ],
        code: "ISSUE-POHJA\nOtsikko: [verbi + näkyvä asset]\n\nMiksi tämä tarvitaan:\n[linkki toimeksiannon vaatimukseen]\n\nToteutan:\n[rajattu muutos]\n\nValmis kun:\n[havaittava testitulos pelissä]\n\nArvio:\n[0,5 tai 1 työpäivä]",
        test: "Valitse yksi P0-issue sattumanvaraisesti. Toinen henkilö pystyy kertomaan sen tekstin perusteella, mikä pakettiin muuttuu, miten tulos testataan pelissä ja milloin tehtävä on valmis."
      },
      example: "Issue: Piirrä kolme blokkitekstuuria / P0 / 4 h / Valmis kun blokit näkyvät pelissä 3×3-ruudukossa ilman saumavirheitä.",
      notEnough: "Tehtävä nimeltä Tee paketti tai tekoälyn generoima teemalista ilman omaa valintaa ja perustelua ei ole toteutuskelpoinen suunnitelma."
    },
    36: {
      type: "feature",
      feature: "Pelin maailma näyttää ensimmäistä kertaa sinun teemaltasi: kolme omaa blokkitekstuuria on pelissä.",
      excerpt: "Siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
      connection: "Tämä on asset-työkierron ensimmäinen täysi kierros: luonnos, pikselityö, tiedosto oikeaan polkuun, paketti peliin ja testi. Sama kierto toistuu jokaisena asset-viikkona.",
      deliverable: "Kolme omaa 16×16-blokkitekstuuria pelissä, oikea kansiorakenne ja ensimmäiset testimerkinnät.",
      why: "Blokkitekstuuri on paketin perusyksikkö. Kun korvausperiaate ja kansiorakenne ovat hallussa, loput assetit ovat saman kaavan toistoa eri sisällöllä.",
      done: "Kolme omaa blokkitekstuuria näkyy pelissä ilman virheilmoituksia. Vierekkäisten blokkien saumat toimivat 3×3-ruudukossa, ja tiedostot ovat Gitissä.",
      record: "Kirjoita Vko 36 -merkintään, mitkä blokit korvasit ja miksi juuri ne, paletin käyttö sekä testitulokset saumoista. Lisää commit-tunniste ja kuvakaappaus pelistä.",
      skills: ["pikseligrafiikka", "resurssipaketin rakenne", "pelitesti"],
      resources: [
        ["Piskel – piirrä pikselitekstuurit selaimessa", "https://www.piskelapp.com/", false],
        ["Lospec – väripaletit", "https://lospec.com/palette-list", false],
        ["Minecraft Wiki – resurssipaketin rakenne", "https://minecraft.wiki/w/Resource_pack", false]
      ],
      steps: [
        ["Piirrä paletilla", "Piirrä kolme 16×16-tekstuuria moodboardin paletilla. Valo tulee ylhäältä: yläreuna vaaleampi, alareuna tummempi."],
        ["Vie oikeaan polkuun", "Tallenna png-tiedostot polkuun assets/minecraft/textures/block/ täsmälleen samalla nimellä kuin korvattava tekstuuri."],
        ["Testaa pelissä", "Lataa paketti F3 + T -näppäimillä, aseta blokkeja 3×3-ruudukkoon ja tarkista saumat, toisto ja etäisyysnäkymä."]
      ],
      help: {
        title: "Korvaa blokkitekstuuri omalla",
        tree: "resourcepack/assets/minecraft/textures/block/\n├─ stone.png        (korvaa kiven)\n├─ oak_planks.png   (korvaa tammilankut)\n└─ dirt.png         (korvaa mullan)\n\nSama tiedostonimi kuin pelissä = tekstuuri korvautuu.\nTiedostonimet löydät Minecraft Wikistä tai pelin\nversio-jar-tiedoston assets-kansiosta.",
        actions: [
          "Piirrä Piskelissä 16×16-kuva ja vie se png-muodossa (Export → PNG). Yksi kuva per blokki.",
          "Nimeä tiedosto täsmälleen korvattavan mukaan: esimerkiksi kiven tekstuuri on stone.png. Iso ja pieni kirjain ovat eri asia.",
          "Luo kansiopolku assets/minecraft/textures/block/ resourcepack-kansion sisään ja siirrä kuvat sinne.",
          "Paina pelissä F3 + T. Peli lataa resurssipaketit uudelleen ilman uudelleenkäynnistystä.",
          "Aseta korvattuja blokkeja 3×3-ruudukkoon ja katso saumakohtia. Jos toisto häiritsee, riko kuvion symmetria muutamalla pikselillä."
        ],
        code: "TEKSTUURIN TARKISTUS\n[ ] koko täsmälleen 16×16\n[ ] tiedostonimi sama kuin korvattavalla\n[ ] polku assets/minecraft/textures/block/\n[ ] F3 + T lataa paketin uudelleen\n[ ] saumat testattu 3×3-ruudukossa\n[ ] commit ja push tehty",
        test: "Poista paketti käytöstä ja ota se uudelleen käyttöön pelin valikosta. Omat tekstuurit ilmestyvät ja katoavat — silloin korvaus tulee paketista, ei sattumasta."
      },
      example: "T36-01 / stone.png 16×16 / odotus: kiviseinä yhtenäinen / havainto: sauma näkyy → paletti korjattu → uusintatesti ok.",
      notEnough: "Netistä ladattu tai tekoälyllä generoitu tekstuuri ei ole oma työnäyte. Piirrä itse — luonnokset ja välivaiheet todistavat sen."
    },
    37: {
      type: "feature",
      feature: "Esineet saavat oman ilmeen ja teeman mukaiset suomenkieliset nimet.",
      excerpt: "Siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
      connection: "Viikolla 36 korvasit blokkitekstuurit — sama korvausperiaate pätee esineisiin, kansio vain vaihtuu. Uutena asiana kirjoitat ensimmäisen JSON-tiedoston: kielitiedoston, joka nimeää sisällön uudelleen.",
      deliverable: "Kolme esinetekstuuria, fi_fi.json-kielitiedosto ja testit myös rikkinäisellä JSONilla.",
      why: "Kielitiedosto on ensimmäinen tekstimuotoinen määrittely paketissasi. JSONin tarkkuus — pilkut, lainausmerkit, avaimet — on sama taito, jota reseptit ja saavutus vaativat viikolla 44.",
      done: "Esineet näkyvät omilla tekstuureilla ja suomenkielisillä nimillä tavaraluettelossa ja kädessä. Rikkinäisen JSONin vaikutus on testattu ja kirjattu.",
      record: "Kirjoita Vko 37 -merkintään uudelleennimetyt esineet ja blokit, käännösavainten kaava sekä rikkinäisen JSONin testitulos. Lisää commit-linkki ja kuvakaappaus.",
      skills: ["item-tekstuurit", "lang-tiedosto", "JSON"],
      steps: [
        ["Piirrä esineet", "Piirrä kolme 16×16-esinetekstuuria ja vie ne polkuun assets/minecraft/textures/item/ korvattavan esineen nimellä."],
        ["Kirjoita kielitiedosto", "Luo assets/minecraft/lang/fi_fi.json ja anna teeman mukaiset nimet muokkaamillesi blokeille ja esineille."],
        ["Riko tarkoituksella", "Poista JSONista pilkku, lataa paketti ja katso, mitä tapahtuu. Palauta pilkku ja varmista, että nimet palaavat."]
      ],
      help: {
        title: "Nimeä sisältö uudelleen kielitiedostolla",
        tree: "resourcepack/assets/minecraft/\n├─ textures/item/\n│  ├─ bread.png\n│  └─ iron_sword.png\n└─ lang/\n   └─ fi_fi.json",
        actions: [
          "Piirrä esinetekstuurit samalla paletilla kuin blokit. Esine piirretään läpinäkyvälle taustalle — täytä vain esineen ala.",
          "Luo lang-kansio ja fi_fi.json VS Codella. Tiedostonimi pienillä kirjaimilla, alaviiva keskellä.",
          "Kirjoita avaimet kaavalla block.minecraft.stone tai item.minecraft.bread ja arvoksi oma nimi lainausmerkeissä.",
          "Vaihda pelin kieleksi suomi (Options → Language), lataa paketti F3 + T ja tarkista nimet tavaraluettelosta.",
          "Testaa esinetekstuuri sekä tummaa että vaaleaa taustaa vasten: kädessä yöllä ja tavaraluettelon ruudussa."
        ],
        code: "{\n  \"block.minecraft.stone\": \"Kylänkivi\",\n  \"item.minecraft.bread\": \"Kyläleipä\"\n}\n\nAvaimen kaava: block.minecraft.<id> tai\nitem.minecraft.<id>. Id:n löydät pelissä\nF3 + H -näppäimillä esineen kuvauksesta.",
        test: "Poista fi_fi.json-tiedostosta yksi pilkku ja lataa paketti. Nimet palautuvat oletuksiin. Palauta pilkku — omat nimet palaavat. Kirjaa molemmat havainnot testilokiin."
      },
      example: "fi_fi.json: block.minecraft.stone → Kylänkivi. Nimi näkyy pelissä, kun kieleksi on valittu suomi.",
      notEnough: "Pelkkä tiedosto repositoryssa ei riitä: nimen pitää näkyä pelissä ja rikkinäisen JSONin vaikutuksen pitää olla testattu."
    },
    38: {
      type: "feature",
      feature: "Pelissä on ensimmäinen oma 3D-malli — blokki, jota ei ole kenelläkään muulla.",
      excerpt: "Siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
      connection: "Tekstuuri muuttaa blokin pinnan; malli muuttaa sen muodon. Blockbenchissä rakennat kuutioista oman muodon ja korvaat sillä valitun blokin mallin — sama korvausperiaate kuin viikoilla 36 ja 37.",
      deliverable: "Blockbenchillä tehty ja teksturoitu blokkimalli, joka toimii pelissä maassa ja kädessä.",
      why: "3D-malli on paketin vaativin asset-tyyppi. Pieni onnistunut malli opettaa koordinaatiston, UV-teksturoinnin ja mallitiedoston rakenteen ennen viikon 39 isompaa työtä.",
      done: "Oma malli näkyy pelissä oikein maassa, kädessä ja eri suunnista katsottuna ilman virheilmoituksia. Malli ja tekstuuri ovat Gitissä.",
      record: "Kirjoita Vko 38 -merkintään korvattu blokki, mallin kuutiomäärä, UV-teksturoinnin havainnot ja pelitestin tulokset. Lisää Blockbench-tiedosto, commit ja kuvakaappaukset.",
      skills: ["Blockbench-mallinnus", "mallin korvaus", "UV-teksturointi"],
      resources: [
        ["Blockbench – lataa tai käytä selaimessa", "https://www.blockbench.net/", false],
        ["Blockbench Wiki – aloitusohjeet", "https://www.blockbench.net/wiki", false]
      ],
      steps: [
        ["Mallinna pienestä", "Luo Blockbenchissä Java Block/Item -projekti ja rakenna muoto 2–4 kuutiosta blokin mittojen sisään."],
        ["Teksturoi mallissa", "Maalaa tekstuuri suoraan mallin pintaan Blockbenchin paint-tilassa ja tallenna kuva textures-kansioon."],
        ["Korvaa ja testaa", "Vie malli valitun blokin mallitiedoston paikalle ja testaa pelissä maassa, kädessä ja eri suunnista."]
      ],
      help: {
        title: "Tee blokkimalli Blockbenchillä",
        tree: "Blockbench: File → New → Java Block/Item\n\nresourcepack/assets/minecraft/\n├─ models/block/flower_pot.json   (korvattu malli)\n└─ textures/block/oma_koriste.png (mallin tekstuuri)\n\nValitse korvattavaksi koristeblokki, jonka muoto\nsaa muuttua — esimerkiksi kukkaruukku tai lyhty.",
        actions: [
          "Avaa Blockbench ja valitse File → New → Java Block/Item. Anna projektille teeman mukainen nimi.",
          "Rakenna muoto Add Cube -painikkeella. Pysy 16×16×16-ruudukon sisällä, niin blokki istuu maailmaan.",
          "Maalaa pinnat paint-tilassa moodboardin paletilla. Blockbench hoitaa UV-kartan eli kuvan ja pintojen vastaavuuden puolestasi.",
          "Vie malli: File → Export → Java Block/Item Model. Tallenna korvattavan blokin nimellä models/block-kansioon ja tekstuuri textures/block-kansioon.",
          "Lataa paketti pelissä F3 + T ja aseta blokki maahan. Tarkista muoto joka suunnasta ja kädessä."
        ],
        code: "{\n  \"textures\": { \"0\": \"block/oma_koriste\" },\n  \"elements\": [\n    {\n      \"from\": [5, 0, 5],\n      \"to\": [11, 8, 11],\n      \"faces\": {\n        \"north\": { \"texture\": \"#0\" },\n        \"south\": { \"texture\": \"#0\" },\n        \"east\":  { \"texture\": \"#0\" },\n        \"west\":  { \"texture\": \"#0\" },\n        \"up\":    { \"texture\": \"#0\" },\n        \"down\":  { \"texture\": \"#0\" }\n      }\n    }\n  ]\n}\n\nBlockbench kirjoittaa tämän puolestasi — lue silti\nrakenne: elements ovat kuutioita from–to-koordinaateilla.",
        test: "Aseta blokki maahan, katso sitä neljästä ilmansuunnasta ja ota se käteen. Muoto ja tekstuuri pysyvät oikeina joka näkymässä, eikä lokissa ole puuttuvan tekstuurin varoituksia."
      },
      example: "Koristelyhty: 3 kuutiota, oma tekstuuri, korvaa kukkaruukun mallin. Kuvat pelistä maassa ja kädessä.",
      notEnough: "Blockbenchin kuvakaappaus ilman peliin vietyä mallia ei osoita, että malli toimii paketissa."
    },
    39: {
      type: "feature",
      feature: "Paketti saa näyttävimmän yksittäisen assetinsa: ison mallin tai hahmon uuden ilmeen.",
      excerpt: "Siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
      connection: "Viikon 38 pieni malli opetti työkalut. Nyt valitset kahdesta isommasta työstä perustellusti toisen: monimutkaisempi blokkimalli tai hahmon (mobin) uusi tekstuuri. Vertailu ja päätös ovat osa näyttöä.",
      deliverable: "Kahden vaihtoehdon vertailu, perusteltu päätös ja valmis toteutus pelissä.",
      why: "Vertailu osoittaa, ettet valinnut ratkaisua sattumalta. Työmäärän, näkyvyyden ja riskin punnitseminen ennen toteutusta on sama taito, jota käytät jokaisessa tulevassa projektissa.",
      done: "Valittu kokonaisuus toimii pelissä ja näyttää hyvältä läheltä, kaukaa ja pimeässä. Vertailumuistio päätöksineen on kirjattu.",
      record: "Kirjoita Vko 39 -merkintään vaihtoehdot A ja B, vertailuperusteet, keskustelukumppanin rooli, valittu ratkaisu ja pelitestin tulokset eri etäisyyksiltä. Lisää commit-linkki.",
      skills: ["vaihtoehtojen vertailu", "entity-tekstuuri", "mallinnus"],
      steps: [
        ["Vertaa ja valitse", "Vertaa toisen henkilön kanssa vaihtoehtoja A (isompi blokkimalli) ja B (mobin uusi tekstuuri) työmäärän, näkyvyyden ja riskin perusteella. Kirjaa päätös."],
        ["Toteuta kahdessa osassa", "Tee runko ensimmäisenä päivänä ja yksityiskohdat toisena. Committaa molemmat vaiheet erikseen."],
        ["Testaa aidossa tilanteessa", "Katso työtä pelissä läheltä, kaukaa ja yöllä — ei vain Blockbenchin esikatselussa."]
      ],
      help: {
        title: "Valitse isompi malli tai mobin ilme",
        tree: "Vaihtoehto A — isompi blokkimalli:\nresourcepack/assets/minecraft/models/block/<blokki>.json\n\nVaihtoehto B — mobin uusi tekstuuri:\nresourcepack/assets/minecraft/textures/entity/\n└─ creeper/creeper.png (esimerkki)\n\nMobin tekstuurikuvassa jokainen ruumiinosa on\nomassa kohdassaan — pohja kannattaa avata\nBlockbenchiin, jotta näet mikä kohta piirtyy mihin.",
        actions: [
          "Kirjaa vertailu ennen toteutusta: työmäärä päivinä, näkyvyys pelissä ja riski epäonnistua. Päätä yhdessä vertaisen tai ohjaajan kanssa.",
          "Vaihtoehto A: rakenna malli kuten viikolla 38, mutta varaa kaksi päivää ja committaa runko ja yksityiskohdat erikseen.",
          "Vaihtoehto B: avaa mobin tekstuuripohja Blockbenchissä (File → New → valitse entity-pohja), niin näet ruumiinosien sijainnit kuvassa.",
          "Piirrä samalla paletilla kuin muutkin assetit — hahmon pitää istua teemaan, ei erottua siitä.",
          "Vie tekstuuri polkuun assets/minecraft/textures/entity/ oikealla alikansiolla ja tiedostonimellä, ja etsi mobi pelissä testiä varten."
        ],
        code: "VAIHTOEHTOJEN VERTAILU\nA: [isompi blokkimalli]\nB: [mobin uusi tekstuuri]\n\nTyömäärä:        A [ ] pv   B [ ] pv\nNäkyvyys pelissä: A [    ]  B [    ]\nRiski:            A [    ]  B [    ]\n\nValinta ja peruste:\n[oma perustelu, 2–3 virkettä]\n\nKeskustelukumppani ja pvm: [rooli, päivä]",
        test: "Etsi tai kutsu muokattu kohde pelissä ja ota kuvakaappaukset läheltä, 20 blokin päästä ja yöllä. Teema tunnistuu joka kuvasta."
      },
      example: "A: kaivostorni-malli 2 pv / B: creeperin kylävartija-ilme 1 pv. Valinta B: näkyy joka pelikerralla. Sovittu vertaisen kanssa 23.9.",
      notEnough: "Tekoälyn tekemä valinta ilman kahden vaihtoehdon vertailua ja omaa perustelua ei osoita päätösosaamista."
    },
    40: {
      type: "feature",
      feature: "Paketti saa äänen: oma tai uudelleenjulkaisun sallivalla lisenssillä hankittu ääni kuuluu pelissä.",
      excerpt: "Kaiken sisällön pitää olla itse tehtyä tai lisensoitu niin, että sen saa julkaista uudelleen.",
      connection: "Tekstuurit ja mallit näkyvät — ääni tuo teeman tunnelman. Ääni lisätään omaan nimiavaruuteen eli paketin omaan nimettyyn lokeroon, jottei se sotke pelin omia ääniä. Huomaa lisenssin kaksi suuntaa: tässä kysymys on sisään tulevasta lisenssistä (saanko käyttää tätä ääntä?), kun taas viikolla 35 sovittu oma lisenssi on ulos menevä (mitä muut saavat tehdä paketillasi?).",
      deliverable: "Ogg-muotoinen ääni omassa nimiavaruudessa, sounds.json-määrittely ja kirjattu lisenssi.",
      why: "Äänen mukana opit kaksi julkaisun kannalta pakollista asiaa: tiedostomuodon vaatimukset ja lisenssikirjaukset. Avoimessa julkaisussa riittämätön lisenssi on julkaisueste, vaikka tekniikka toimisi.",
      done: "Oma ääni kuuluu pelissä /playsound-komennolla, tekstitys näkyy ja äänen lähde sekä lisenssi on kirjattu CREDITS-tiedostoon.",
      record: "Kirjoita Vko 40 -merkintään äänen lähde, lisenssi ja se, salliiko lisenssi uudelleenjulkaisun, sekä muunnosvaiheet ja /playsound-testin tulos. Lisää sounds.json-commit ja CREDITS-kirjauksen linkki.",
      skills: ["äänet", "sounds.json", "lisenssit"],
      resources: [
        ["Freesound – CC-lisensoituja ääniä, tarkista lisenssi", "https://freesound.org/", false],
        ["Minecraft Wiki – sounds.json", "https://minecraft.wiki/w/Sounds.json", false]
      ],
      steps: [
        ["Valitse lähde", "Äänitä itse puhelimella tai valitse ääni, jonka lisenssi sallii uudelleenjulkaisun (esimerkiksi CC0 tai CC BY). Kirjaa lähde ja lisenssi CREDITS-tiedostoon heti, älä jälkikäteen."],
        ["Muunna ja määrittele", "Muunna ääni ogg-muotoon (esimerkiksi Audacityllä) ja tallenna omaan nimiavaruuteen. Kirjoita sounds.json."],
        ["Testaa komennolla", "Soita ääni /playsound-komennolla, tarkista tekstitys ja säädä voimakkuus sopivaksi."]
      ],
      help: {
        title: "Lisää oma ääni pakettiin",
        tree: "resourcepack/assets/teema/\n├─ sounds.json\n└─ sounds/\n   └─ kyla_kello.ogg\n\nKansio teema on oma nimiavaruutesi: vaihda siihen\noman pakettisi nimi pienillä kirjaimilla. Omat äänet\nlisätään omaan nimiavaruuteen — pelin ääniä ei korvata.",
        actions: [
          "Äänitä lyhyt ääni puhelimella tai lataa CC-lisensoitu ääni. Tarkista, että lisenssi sallii uudelleenjulkaisun, ja tallenna lisenssitieto ennen kuin teet mitään muuta.",
          "Avaa ääni Audacityssä, leikkaa se enintään pariin sekuntiin ja vie ogg-muodossa (File → Export → OGG).",
          "Nimeä tiedosto pienillä kirjaimilla ilman ääkkösiä ja välilyöntejä, esimerkiksi kyla_kello.ogg.",
          "Kirjoita sounds.json oman nimiavaruuden juureen alla olevan mallin mukaan.",
          "Lataa paketti F3 + T ja soita ääni komennolla /playsound teema:kyla.kello master @s."
        ],
        code: "{\n  \"kyla.kello\": {\n    \"sounds\": [ { \"name\": \"teema:kyla_kello\" } ],\n    \"subtitle\": \"Kylän kello\"\n  }\n}\n\nÄänitapahtuman nimi on kyla.kello ja tiedostoviite\nteema:kyla_kello — pisteet nimessä, alaviivat tiedostossa.",
        test: "Aja /playsound teema:kyla.kello master @s ja kytke tekstitykset päälle (Options → Accessibility). Ääni kuuluu ja tekstitys Kylän kello näkyy ruudun kulmassa."
      },
      example: "kyla_kello.ogg, oma äänitys 28.9. / sounds.json teema:kyla.kello / testattu /playsound-komennolla, tekstitys näkyy.",
      notEnough: "Ääni ilman lähde- ja lisenssikirjausta on julkaisueste, vaikka se toimisi pelissä. Lisenssi, joka kieltää uudelleenjulkaisun, ei kelpaa avoimeen pakettiin. Tekoälyllä tuotettu ääni käy vain opettajan luvalla ja AI-lokiin kirjattuna — sama sääntö kuin grafiikassa."
    },
    41: {
      type: "katselmointi",
      feature: "Ensimmäiset testaajat kokeilevat pakettia ja antavat palautteen. Yksi muutos sovitaan.",
      excerpt: "Haluan nähdä paketista toimivan väliversion vähintään kerran ennen lopullista versiota, jotta voin pyytää muutoksia.",
      connection: "Testaajat pelaavat nyt oikealla paketilla. Sinä tarkkailet, mikä teemasta välittyy ja mikä jää huomaamatta — omalle työlle sokeutuu, ja juuri siksi katselmointi tehdään.",
      deliverable: "Testattu väliversio, katselmointimuistio ja yksi hyväksytty muutostehtävä.",
      why: "Palaute tarvitaan ennen viimeistelyä, jotta muutokselle jää aikaa. Testaajan alkuperäisen havainnon erottaminen omasta tulkinnastasi tekee päätöksestä luotettavan.",
      done: "Ohjaaja ja vertaistestaaja ovat pelanneet paketin kanssa. Muistiossa näkyvät alkuperäinen palaute, oma tulkinta, päätös, hyväksyjä ja yksi rajattu issue.",
      record: "Kirjoita Vko 41 -merkintään väliversion tunniste, katselmoinnin päivä, osallistujien roolit, esittelyssä kertomasi kolme valintaa, testaajien sanat, oma tulkinta ja linkki hyväksyttyyn muutostehtävään.",
      skills: ["palautteen keruu", "katselmointi", "priorisointi"],
      steps: [
        ["Valmistele väliversio", "Kokoa resurssipaketista zip, jossa tähänastinen sisältö toimii: tekstuurit, nimet, mallit ja ääni. Asenna se itse puhtaaseen peliin ennen testaajia."],
        ["Anna testaajien kokeilla", "Testaajat ovat ohjaaja ja yksi vertainen. Pyydä heitä pelaamaan vapaasti; älä neuvo heti — kirjaa alkuperäinen havainto ja kysy tarkentava kysymys. Kun he ovat kokeilleet, käy 5–10 minuutissa läpi paketin sisältö ja kolme omaa valintaa perusteluineen."],
        ["Päätä yksi muutos", "Yhdistä palaute yhteen rajattuun issueen, arvioon ja hyväksymisehtoon. Päivitä backlog vasta päätöksen jälkeen."]
      ],
      help: {
        title: "Kokoa väliversio ja asennusohje",
        tree: "project-docs/evidence/week-41/\n├─ kotikyla-resurssipaketti-rc0.zip\n└─ asennusohje.md\n\nZipatessa pakkaa kansion SISÄLTÖ, ei kansiota:\npack.mcmeta pitää olla zipin juuressa. Sama sääntö\npätee viikkojen 47–48 julkaisuzippeihin. Datapaketti\nsyntyy vasta viikolla 43 — se tulee zipiin ja\nohjeeseen mukaan viikosta 47 alkaen.",
        actions: [
          "Avaa resourcepack-kansio, valitse sen sisältö (pack.mcmeta, pack.png, assets) ja pakkaa zipiksi.",
          "Tarkista zip avaamalla se: jos ensimmäinen taso on kansio eikä pack.mcmeta, peli ei tunnista pakettia.",
          "Kirjoita lyhyt asennusohje alla olevan pohjan mukaan ja tallenna se zipin viereen.",
          "Asenna väliversio itse puhtaaseen peliin pelkän oman ohjeesi avulla — korjaa ohje, jos jouduit poikkeamaan siitä.",
          "Vasta sitten anna paketti testaajille. Katselmoinnissa testaaja asentaa itse tai sinä asennat — kirjaa kumpi."
        ],
        code: "ASENNUSOHJE-POHJA (viikon 41 väliversio)\n1. Lataa resurssipaketti-zip.\n2. Avaa pelissä Options → Resource Packs →\n   Open Pack Folder ja siirrä zip kansioon.\n3. Ota paketti käyttöön valikosta.\nVaatii Minecraft Java -version: [x.y.z]\n\nViikolla 47 ohjeeseen lisätään datapaketti:\nzip maailman kansioon .minecraft/saves/\n<maailma>/datapacks/ ja pelissä /reload.",
        test: "Anna ohje ja zipit henkilölle, joka ei ole nähnyt projektiasi. Hän saa paketin toimimaan ilman suullista apua — tai kirjaat kohdan, johon hän jumittui, ja korjaat ohjeen."
      },
      example: "Palaute: Lyhtyä ei erota tavallisesta. Päätös: kirkkaampi hehkutekstuuri / P0 / 2 h / hyväksytty 8.10.",
      notEnough: "Itse tai tekoälyllä keksitty palaute ei ole katselmointi. Tallenna testaajan alkuperäinen havainto erilleen omasta tulkinnastasi."
    },
    43: {
      type: "feature",
      feature: "Palautteessa pyydetty muutos on pelissä, ja paketilla on nyt myös toimiva datapaketti.",
      excerpt: "Haluan nähdä paketista toimivan väliversion vähintään kerran ennen lopullista versiota, jotta voin pyytää muutoksia.",
      connection: "Palautemuutos tehdään omassa Git-haarassa, jotta toimiva main säilyy. Samalla viikolla paketti saa toisen puoliskonsa: datapaketin, jonka rakenne on sama kuin viikon 34 resurssipaketissa — vain pack_format-arvo ja kansiot eroavat.",
      deliverable: "Testattu palautemuutos mainissa ja datapaketin runko, jonka funktio toimii /reload- ja /function-komennoilla.",
      why: "Erillinen Git-haara pitää toimivan version turvassa ja näyttää, miten palaute muuttui tehtäväksi, toteutukseksi ja testiksi. Datapaketin runko avaa viikon 44 skriptityöt.",
      done: "Main sisältää testatun palautemuutoksen. Datapaketti latautuu /reload-komennolla ilman virheitä ja funktio vastaa /function-kutsuun.",
      record: "Kirjoita Vko 43 -merkintään ketju: palaute → issue → Git-haara → merge → testi. Lisää datapaketin ensimmäisen funktion commit ja /reload-testin tulos.",
      skills: ["issue", "feature-branch", "mcfunction"],
      steps: [
        ["Toteuta palautemuutos", "Kirjoita palaute issueksi hyväksymisehtoineen, tee muutos feature-branchissa ja yhdistä mainiin vasta testin jälkeen."],
        ["Rakenna datapaketin runko", "Luo datapack-kansioon pack.mcmeta ja oman nimiavaruuden function-kansio. Kirjoita load-funktio, joka tervehtii pelaajaa."],
        ["Testaa komennoilla", "Asenna datapaketti testimaailmaan, aja /reload ja /datapack list ja varmista vihreä latausviesti."]
      ],
      help: {
        title: "Luo datapaketin runko",
        tree: "datapack/\n├─ pack.mcmeta\n└─ data/\n   ├─ teema/\n   │  └─ function/\n   │     ├─ load.mcfunction\n   │     └─ tervehdys.mcfunction\n   └─ minecraft/\n      └─ tags/\n         └─ function/\n            └─ load.json\n\nVersiosta 1.21 alkaen kansiot ovat yksikössä\n(function, recipe, advancement). Vanhemmissa\nversioissa nimet ovat monikossa.",
        actions: [
          "Luo haara ennen palautemuutosta: git checkout -b korjaus/kuvaava-nimi tai GitHubissa Branches → New branch. Tee muutos tässä haarassa pieninä committeina.",
          "Yhdistä testin jälkeen: GitHubissa Compare & pull request → Merge pull request, tai komennoilla git checkout main ja git merge korjaus/kuvaava-nimi.",
          "Kirjoita datapack/pack.mcmeta. Datapaketilla on eri pack_format-arvo kuin resurssipaketilla — tarkista molemmat samasta wikitaulukosta.",
          "Luo kansiot data/teema/function/ ja kirjoita load.mcfunction: yksi tellraw-rivi riittää.",
          "Kirjoita data/minecraft/tags/function/load.json, joka kertoo pelille, mikä funktio ajetaan latauksessa.",
          "Kopioi datapack-kansio testimaailman datapacks-kansioon: .minecraft/saves/<maailma>/datapacks/.",
          "Aja pelissä /reload ja /datapack list. Vihreä viesti ja paketti listassa = runko toimii."
        ],
        code: "# Feature-branchin työnkulku\ngit checkout -b korjaus/lyhdyn-hehku\ngit add .\ngit commit -m \"Kirkasta lyhdyn hehku\"\ngit push -u origin korjaus/lyhdyn-hehku\n# GitHubissa: Compare & pull request → Merge\n\n# datapack/pack.mcmeta\n{ \"pack\": { \"pack_format\": 48, \"description\": \"Kotikylä – datapaketti\" } }\n\n# data/minecraft/tags/function/load.json\n{ \"values\": [ \"teema:load\" ] }\n\n# data/teema/function/load.mcfunction\ntellraw @a {\"text\":\"Kotikylä-paketti ladattu.\",\"color\":\"green\"}\n\npack_format 48 vastaa 1.21:tä — resurssi- ja\ndatapaketilla on ERI arvot samalle peliversiolle.",
        test: "Aja /reload. Vihreä latausviesti näkyy chatissa. Aja /function teema:tervehdys — funktion viesti tulostuu. Jos komento ei löydä funktiota, tarkista kansioiden yksikkö/monikko-muoto versiosi mukaan.",
        links: [
          ["Minecraft Wiki: Data pack", "https://minecraft.wiki/w/Data_pack"]
        ]
      },
      example: "Issue: Kirkasta lyhdyn hehku → branch fix/lyhty-hehku → merge. /reload lataa datapaketin ilman virheitä.",
      notEnough: "Suuri suora muutos mainiin tai yksi massacommit katkaisee yhteyden palautteen, toteutuksen ja testin välillä."
    },
    44: {
      type: "feature",
      feature: "Paketti saa pelillisen lisän: omat reseptit, saavutuksen ja palkintofunktion.",
      excerpt: "Pakettiin kuuluu myös pelillinen lisä: omia valmistusreseptejä, vähintään yksi saavutus ja komentoskripti, jotka toimivat tavallisessa selviytymismaailmassa ilman modeja.",
      connection: "Viikon 43 datapakettirunko saa nyt sisällön. Reseptit ja saavutus ovat JSON-tiedostoja — sama tarkkuus kuin viikon 37 kielitiedostossa — ja palkinto on mcfunction-skripti, jollaisia kirjoitit jo viikolla 43.",
      deliverable: "Kaksi omaa reseptiä, saavutus laukaisimineen ja palkintofunktio, testattuna selviytymistilassa.",
      why: "Tämä viikko on paketin skriptausosuuden ydin. Resepti, laukaisin ja funktio muodostavat ketjun, jossa data ohjaa pelin toimintaa — ilman riviäkään ohjelmointikieltä.",
      done: "Reseptit löytyvät reseptikirjasta ja tuottavat esineet. Saavutus laukeaa oikeasta teosta ja palkintofunktio toimii. Koko polku on testattu tuoreessa selviytymismaailmassa.",
      record: "Kirjoita Vko 44 -merkintään reseptien sisältö, saavutuksen laukaisin, palkinnon toiminta ja selviytymistestin kulku. Lisää commitit ja kuvasarja tai video.",
      skills: ["reseptit", "advancement", "funktiot"],
      resources: [
        ["Misode – reseptigeneraattori, tarkista rakenne", "https://misode.github.io/recipe/", false],
        ["Misode – advancement-generaattori", "https://misode.github.io/advancement/", false]
      ],
      steps: [
        ["Kirjoita reseptit pohjasta", "Muokkaa toimivaa reseptipohjaa: vaihda ainekset, tulos ja määrä omiin. Kaksi reseptiä, kaksi tiedostoa."],
        ["Kytke saavutus funktioon", "Valitse laukaisin (esimerkiksi oman reseptin valmistus), kirjoita palkintofunktio ja yhdistä ne advancement-tiedostossa."],
        ["Testaa selviytymistilassa", "Luo uusi maailma ja tee koko polku pelaajana: hanki ainekset, valmista, saa saavutus ja palkinto."]
      ],
      help: {
        title: "Tee resepti, saavutus ja palkintofunktio",
        tree: "datapack/data/teema/\n├─ recipe/\n│  ├─ teemalyhty.json\n│  └─ kylaleipa.json\n├─ advancement/\n│  └─ kylan_valot.json\n└─ function/\n   └─ palkinto.mcfunction",
        actions: [
          "Kirjoita ensimmäinen resepti alla olevan mallin pohjalta. Pattern on 3×3-ruudukko riveinä; key kertoo, mitä kukin merkki tarkoittaa.",
          "Tarkista JSON-rakenne tarvittaessa Misoden generaattorilla — kirjoita silti itse ja ymmärrä jokainen kenttä.",
          "Kirjoita advancement: display näyttää saavutuksen, criteria määrää laukaisimen ja rewards ajaa funktion.",
          "Kirjoita palkinto.mcfunction: tellraw-viesti ja pieni xp-palkinto riittävät.",
          "Aja /reload ja testaa. Saavutuksen voi nollata uusintatestiä varten komennolla /advancement revoke @s only teema:kylan_valot."
        ],
        code: "# recipe/teemalyhty.json\n{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"pattern\": [ \" R \", \"RLR\", \" R \" ],\n  \"key\": { \"R\": \"minecraft:redstone\", \"L\": \"minecraft:lantern\" },\n  \"result\": { \"id\": \"minecraft:soul_lantern\", \"count\": 1 }\n}\n\n# advancement/kylan_valot.json\n{\n  \"display\": {\n    \"icon\": { \"id\": \"minecraft:soul_lantern\" },\n    \"title\": \"Kylän valot\",\n    \"description\": \"Valmista teemalyhty\",\n    \"frame\": \"task\"\n  },\n  \"criteria\": {\n    \"lyhty_tehty\": {\n      \"trigger\": \"minecraft:recipe_crafted\",\n      \"conditions\": { \"recipe_id\": \"teema:teemalyhty\" }\n    }\n  },\n  \"rewards\": { \"function\": \"teema:palkinto\" }\n}\n\n# function/palkinto.mcfunction\ntellraw @s {\"text\":\"Saavutus avattu: Kylän valot\",\"color\":\"gold\"}\nxp add @s 10 points\n\nHuom: versioissa 1.21–1.21.1 sekä key-ainekset\nettä result kirjoitetaan {\"item\": ...} -muodossa;\nyllä oleva muoto toimii 1.21.2:sta alkaen.\nTarkista sovitun version rakenne Misodesta tai wikistä.",
        test: "Luo uusi selviytymismaailma. Hanki ainekset, valmista teemalyhty työpöydällä, ja saavutus ponnahtaa ruutuun palkintoviestin kera. Komennoilla annettu esine ei kelpaa testiksi.",
        links: [
          ["Minecraft Wiki: Recipe", "https://minecraft.wiki/w/Recipe"],
          ["Minecraft Wiki: Advancement", "https://minecraft.wiki/w/Advancement_definition"]
        ]
      },
      example: "Resepti teema:teemalyhty → saavutus Kylän valot laukeaa → palkintofunktio antaa 10 xp. Testattu tuoreessa maailmassa.",
      notEnough: "Komennoilla itselle annettu esine ei todista reseptiä. Koko polun pitää toimia selviytymistilassa."
    },
    45: {
      type: "laatu",
      feature: "Paketti kestää käyttöä: asennus, sisältö ja virhetilanteet on testattu järjestelmällisesti.",
      excerpt: "Paketin pitää latautua ilman virheilmoituksia sillä Minecraft-versiolla, joka sovitaan projektin alussa.",
      connection: "Testaat koko paketin järjestelmällisesti: asennuksen, jokaisen asset-tyypin ja virhetilanteet. Sama kirjaamisen kaava kuin viikon 36 ensimmäisissä testeissä — nyt kattavuus ratkaisee.",
      deliverable: "Vähintään 12 testitapauksen testausmatriisi ja kolme täydellistä virheenkorjausketjua.",
      why: "Järjestelmällinen testaus näyttää, että paketti toimii myös rajoilla ja virhetilanteissa. Korjausketju todistaa, että osaat löytää syyn etkä vain peittää oiretta.",
      done: "Kaikissa 12 testissä näkyvät lähtötila, toiminta, odotus, havainto ja tulos. Kolmessa ketjussa näkyvät havainto, syy, korjauscommit ja onnistunut uusintatesti.",
      record: "Kirjoita Vko 45 -merkintään testit T01–T12 ja linkki testausmatriisiin. Nimeä kolme ketjua muodossa havainto tai merkitty vikatehtävä → syy → commit → uusintatesti.",
      skills: ["testitapaus", "virheenkorjaus", "pack_format"],
      resources: [
        ["Avaa näyttöaineisto", "#todisteet", false]
      ],
      steps: [
        ["Kirjoita 12 testiä ennen ajoa", "Jaa ne kolmeen luokkaan: normaali käyttö (asennus ja jokainen asset), rajat (tekstitykset, eri kieli) sekä virhetilanteet (väärä pack_format, puuttuva tiedosto, rikottu JSON)."],
        ["Tutki aito havainto", "Kirjaa lähtötila, toistamisohje, odotus, havainto, syy ja korjaus. Älä keksi bugeja jälkikäteen."],
        ["Riko ja aja uudelleen", "Muuta pack_format vääräksi, poista tiedosto ja riko JSON. Opettele lukemaan pelin lokia: launcherin Output-näkymä tai logs/latest.log."]
      ],
      help: {
        title: "Rakenna 12 testin matriisi",
        tree: "project-docs/evidence/week-45/\n├─ testimatriisi.md\n└─ bugit/\n   ├─ bugi-1.md\n   ├─ bugi-2.md\n   └─ bugi-3.md",
        actions: [
          "Jaa 12 testiä kolmeen luokkaan: normaali käyttö T01–T04, rajat T05–T08 ja virhetilanteet T09–T12.",
          "Kirjoita jokaiselle riville lähtötila, toiminta ja odotettu tulos ENNEN yhtäkään testiajoa.",
          "Aja testit järjestyksessä ja kirjaa havainto ja tulos (ok / ei ok) heti, älä muistista jälkikäteen.",
          "Kun testi paljastaa virheen, avaa sille oma bugitiedosto: havainto, toistamisohje, syy, korjauscommit ja uusintatestin tulos.",
          "Aja korjauksen jälkeen uudelleen myös vähintään yksi viereinen testi, jota et muuttanut — se on regressiotesti."
        ],
        code: "TESTIMATRIISIN POHJA (testimatriisi.md)\n\nT01 | lähtötila | toiminta | odotus | havainto | tulos\n\nEsimerkkirivit:\nT01 / puhdas peli / asenna molemmat paketit ohjeella / ei virheilmoituksia / [havainto] / ok\nT05 / paketti käytössä / vaihda kieli suomeksi / omat nimet näkyvät / [havainto] / ok\nT09 / pack_format väärä / käynnistä peli / varoitus vanhentuneesta paketista / [havainto] / ok\n\nLuokat: T01–T04 normaali · T05–T08 rajat · T09–T12 virheet",
        test: "Anna matriisi toiselle henkilölle: hän pystyy ajamaan testin T05 pelkän rivin perusteella ja päätymään samaan tulokseen."
      },
      example: "T09 / väärä pack_format / odotus: peli varoittaa vanhentuneesta paketista / havainto: vastasi odotusta / ok.",
      notEnough: "Tekoälyn ehdottamaa testiä ei saa merkitä ajetuksi eikä bugia löytyneeksi ilman omaa testiajoa."
    },
    46: {
      type: "laatu",
      feature: "Paketti toimii kuten ennen, mutta rakenne on siisti ja jokainen tiedosto on lisenssiltään julkaisukelpoinen.",
      excerpt: "Kaiken sisällön pitää olla itse tehtyä tai lisensoitu niin, että sen saa julkaista uudelleen.",
      connection: "Avoimessa julkaisussa paketin avaa joku muu kuin sinä — ja lisenssi antaa hänelle luvan jatkaa työtä. Kansiorakenne, tiedostonimet ja README kertovat, mistä mikäkin löytyy; LICENSE ja CREDITS kertovat, mitä paketilla saa tehdä.",
      deliverable: "Siistitty kansiorakenne, ihmisen tekemä katselmointi sekä tarkistetut LICENSE- ja CREDITS-tiedostot.",
      why: "Selkeä rakenne helpottaa virheiden löytämistä ja myöhempiä muutoksia. Ilman LICENSE-tiedostoa julkinen paketti ei ole avoin, vaikka koodi näkyisi kaikille: oletuksena kaikki oikeudet jäävät sinulle eikä kukaan saa käyttää työtäsi.",
      done: "Sama testi menee läpi ennen siivousta ja sen jälkeen. Katselmointikommenttiin on vastattu, LICENSE on repositoryn juuressa ja vastaa sovittua, ja CREDITS listaa jokaisen ulkopuolisen lähteen lisensseineen — tai toteaa, että kaikki on itse tehtyä. Katselmoija pystyy myös osoittamaan, mihin uusi tekstuuri lisättäisiin ja mistä lähdetiedostot kuten .bbmodel löytyvät: silloin toinen tekijä voi jatkaa työtä.",
      record: "Kirjoita Vko 46 -merkintään havaitut laatuhaitat, tehdyt siivoukset, katselmoijan rooli ja kommentti sekä lisenssitarkistuksen tulos. Vastaa oman LICENSE-tiedostosi perusteella kahteen kysymykseen: saako toinen pelaaja julkaista muokatun version paketistasi, ja mitä hänen pitää tehdä? Kerro, mistä kohdasta lisenssitekstiä vastaus löytyy. Kirjaa myös, miten selitit katselmoijalle yhden oman ja yhden tekoälyavusteisen ratkaisun. Lisää siivouscommitin linkki.",
      skills: ["rakenteen laatu", "avoin lisenssi", "CREDITS"],
      steps: [
        ["Etsi kolme laatuhaittaa", "Tarkista epäselvät tiedostonimet, väärässä paikassa olevat tiedostot ja kuolleet viittaukset — esimerkiksi sounds.json-rivi, jonka tiedosto puuttuu."],
        ["Siisti toimintaa muuttamatta", "Tee yksi rajattu siivous kerrallaan ja aja paketin latautumistesti jokaisen jälkeen."],
        ["Tarkista lisenssit", "Varmista, että LICENSE on repositoryn juuressa ja vastaa viikolla 35 sovittua. Käy sitten läpi jokainen tekstuuri, malli ja ääni: itse tehty vai lisensoitu? Täydennä CREDITS niin, että jokainen ulkopuolinen lähde on siinä lisenssin nimellä. Lue lopuksi oma LICENSE-teksti ja vastaa sen perusteella: saako toinen pelaaja julkaista muokatun version paketistasi, ja mitä hänen pitää tehdä?"],
        ["Selitä ratkaisusi", "Käy paketti läpi katselmoijan kanssa ja selitä omin sanoin yksi oma ja yksi tekoälyavusteinen ratkaisu. Näytä samalla, mistä lähdetiedostot löytyvät ja mihin uusi tekstuuri lisättäisiin."]
      ],
      example: "Ennen: uusi_kansio2/temp.png. Jälkeen: assets/teema/textures/block/kylan_kivi.png — nimi kertoo sisällön.",
      notEnough: "Pelkkä tiedostojen siirtely ilman testiä tai lisenssitarkistus ”kaikki ok” ilman läpikäyntiä ei ole laatutyötä. Julkinen repository ilman LICENSE-tiedostoa ei ole avoin paketti."
    },
    47: {
      type: "julkaisu",
      feature: "Koko paketti on testikäytössä täsmälleen siinä muodossa, jossa se julkaistaan.",
      excerpt: "Valmis paketti julkaistaan niin, että kuka tahansa pelaaja löytää sen, lataa ja asentaa kirjallisen ohjeen avulla.",
      connection: "Release candidate 1 eli RC1 on paketin ensimmäinen julkaisuehdokas: zipit ja asennusohje testataan sellaisina kuin ne aiotaan julkaista. Asennusohje on yhtä tärkeä testattava kuin paketti itse.",
      deliverable: "Jäädytetty RC1 (zipit + asennusohje), kahden henkilön testipalaute ja päätetty julkaisun korjauslista.",
      why: "Sisältöjäädytys estää uusia muutoksia rikkomasta lähes valmista pakettia. Palautteen luokittelu kohdistaa ajan vain julkaisuun vaikuttaviin virheisiin.",
      done: "RC1 on sidottu yhteen committiin. Ohjaaja ja toinen käyttäjä ovat asentaneet paketin pelkän ohjeen avulla, ja jokaisella havainnolla on vakavuus, toistettavuus ja päätös.",
      record: "Kirjoita Vko 47 -merkintään RC1:n commit, testaajien roolit, heidän havaintonsa ja päätökset: korjataan nyt, tunnettu puute tai myöhemmin. Kirjaa erikseen, onnistuiko asennus pelkällä ohjeella.",
      skills: ["release candidate", "palautteen luokittelu", "julkaisupäätös"],
      steps: [
        ["Nimeä RC1", "Kokoa molemmat zipit yhdestä main-commitista ja päivitä asennusohje (zip-sääntö ja ohjepohja: viikon 41 toteutusapu). Lopeta uuden sisällön lisääminen."],
        ["Anna kahden ihmisen testata", "Ohjaaja ja toinen käyttäjä asentavat paketin itse ohjeen avulla ja käyvät koko sisällön läpi. Jos toista käyttäjää ei löydy omasta ryhmästä, testaaja voi olla toisen ryhmän opiskelija tai toinen ohjaaja."],
        ["Tee julkaisupäätökset", "Kirjaa jokaiselle havainnolle vakavuus, toistettavuus ja päätös: korjataan, tunnettu puute tai myöhemmin."]
      ],
      example: "Lyhdyn hehku ei näy yöllä / vakava / toistuu aina / korjataan ennen julkaisua / testi T47-03.",
      notEnough: "Opiskelija tai tekoäly ei voi esiintyä kahtena testaajana, eikä sisältöjäädytyksen jälkeen lisätä uutta sisältöä."
    },
    48: {
      type: "julkaisu",
      feature: "Paketti on julkaistu avoimella lisenssillä. Kuka tahansa lataa ja asentaa sen itse ohjeen avulla.",
      excerpt: "Valmis paketti julkaistaan niin, että kuka tahansa pelaaja löytää sen, lataa ja asentaa kirjallisen ohjeen avulla.",
      connection: "Paketti siirtyy nyt omalta koneelta GitHub-releaseen eli repositoryn viralliseen julkaisuun. Testaat julkaistua latausta, et omaa työkansiota.",
      deliverable: "Julkinen GitHub-release v1.0: zip-paketit, asennusohje, LICENSE, CHANGELOG, kuvakaappaukset ja tunnettujen puutteiden lista.",
      why: "Lataajan pitää pystyä asentamaan paketti ilman sinua. Vain julkaistun latauksen testaaminen osoittaa, että zipit, ohje ja tiedostorakenne toimivat oikeassa ympäristössä.",
      done: "v1.0-tagin commit vastaa julkaistua versiota. Toinen henkilö lataa releasen ja asentaa paketin puhtaaseen peliin pelkän ohjeen avulla.",
      record: "Kirjoita Vko 48 -merkintään ketju v1.0-tagi → commit → release-linkki. Lisää testattu peliversio, ulkopuolisen asentajan rooli ja päivä, testitulos ja tunnetut puutteet. Jos julkaisit lisäksi Modrinthissa tai Planet Minecraftissa, kirjaa linkki ja se, mitä ehtoja palvelu vaati.",
      skills: ["GitHub-release", "versiointi", "asennusohje"],
      steps: [
        ["Korjaa vain estävät virheet", "Aja viikon 47 korjauslistan uusintatestit ja lopeta, kun hyväksytty lista on tyhjä."],
        ["Julkaise release", "Tee v1.0-tagi, luo GitHub-release ja liitä zipit, julkaisuteksti ja kuvat. Kirjoita CHANGELOG, joka kertoo mitä v1.0 sisältää, ja varmista että LICENSE näkyy repositoryn etusivulla. Valinnainen bonus: Modrinth tai Planet Minecraft opettajan kanssa sovitusti."],
        ["Testaa oikea lataus", "Lataa julkaistu release itse, asenna puhtaaseen peliin ohjeen mukaan ja korjaa ohjeen epäselvyydet."],
        ["Anna ulkopuolisen asentaa", "Pyydä yksi henkilö, joka ei ole tekijä, lataamaan v1.0 release-sivulta ja asentamaan se pelkän ohjeen avulla. Kirjaa hänen roolinsa, päivä ja jokainen kohta, jossa hän epäröi — ne ovat ohjeen korjauslista."]
      ],
      help: {
        title: "Julkaise GitHub-release",
        tree: "GitHub → Releases → Draft a new release\n\nv1.0\n├─ kotikyla-resurssipaketti-v1.0.zip\n├─ kotikyla-datapaketti-v1.0.zip\n└─ julkaisuteksti + kuvakaappaukset\n\nZipatessa pakkaa kansion SISÄLTÖ, ei kansiota:\npack.mcmeta pitää olla zipin juuressa.",
        actions: [
          "Tee zipit: avaa resourcepack-kansio, valitse sen sisältö (pack.mcmeta, pack.png, assets) ja pakkaa. Toista datapack-kansiolle.",
          "Tarkista zip avaamalla se: jos ensimmäinen taso on kansio eikä pack.mcmeta, peli ei tunnista pakettia.",
          "Luo GitHubissa Releases → Draft a new release → tag v1.0. Liitä molemmat zipit ja kirjoita julkaisuteksti: mitä paketti sisältää, mille versiolle, miten asennetaan ja millä lisenssillä paketti julkaistaan.",
          "Lisää 2–4 kuvakaappausta pelistä releaseen tai README:hen — lataaja päättää kuvien perusteella, ottaako paketin käyttöön.",
          "Lataa julkaistu release itse toisella koneella tai puhtaalla pelillä ja asenna pelkän ohjeen avulla."
        ],
        code: "JULKAISUN TARKISTUSLISTA\n[ ] pack.mcmeta on zipin juuressa\n[ ] resurssi- ja datapaketti omina zippeinä\n[ ] v1.0-tagi vastaa julkaistua committia\n[ ] julkaisuteksti: sisältö, peliversio, asennus, lisenssi\n[ ] LICENSE ja CREDITS repositoryn juuressa\n[ ] CHANGELOG kertoo mitä v1.0 sisältää\n[ ] README: tunnetut puutteet ja lisenssi\n[ ] lataus testattu puhtaaseen peliin ohjeella",
        test: "Lataa release yksityisen selainikkunan kautta ja asenna ohjeen mukaan puhtaaseen peliin. Jos joudut poikkeamaan ohjeesta yhdessäkin kohdassa, korjaa ohje ja testaa uudelleen.",
        links: [
          ["GitHub: Releasen luominen", "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository"],
          ["Minecraft Wiki: Pack format", "https://minecraft.wiki/w/Pack_format"]
        ]
      },
      example: "README: Lataa zipit → siirrä resourcepacks- ja datapacks-kansioihin → ota käyttöön. Testattu 1.21 / v1.0 / lisenssi CC BY 4.0 / tunnettu puute: [asia].",
      notEnough: "”Toimii omalla koneella” ei osoita, että ulkopuolinen lataaja pystyy asentamaan julkaistun paketin ohjeen avulla."
    },
    49: {
      type: "naytto",
      feature: "Paketti, repository ja projektipäiväkirja todistavat osaamisesi ilman suullista selitystä.",
      excerpt: "Valmis paketti julkaistaan niin, että kuka tahansa pelaaja löytää sen, lataa ja asentaa kirjallisen ohjeen avulla.",
      connection: "Pakettiin ei enää lisätä sisältöä. Yhdistät jokaisen vaatimuksen täsmälliseen tiedostoon, testiin, releaseen ja Gitin työnäytteeseen.",
      deliverable: "Valmis projektipäiväkirja, näyttömatriisi, itsearviointi, jäädytetty v1.0 ja harjoiteltu demo.",
      why: "Arvioija voi arvioida vain näkyvän ja löydettävän osaamisen. Täsmälliset linkit säästävät aikaa ja osoittavat, miten vaatimus muuttui suunnitelmaksi, toteutukseksi ja testiksi.",
      done: "Jokaisella arviointikohdalla on avautuva täsmälinkki tai tunniste. Projektipäiväkirja ja AI-loki ovat repositoryssa, ja demo käyttää samaa jäädytettyä v1.0-versiota.",
      record: "Kirjoita Vko 49 -merkintään itsearviointi: kolme vahvuutta työnäytteineen ja yksi seuraava kehitysaskel. Lisää linkit näyttömatriisiin, AI-lokiin, v1.0-releaseen ja demon runkoon.",
      skills: ["näyttömatriisi", "itsearviointi", "demo"],
      resources: [
        ["Avaa näyttömatriisi", "#todisteet", false],
        ["Avaa ja lataa AI-loki", "#tekoaly", false]
      ],
      steps: [
        ["Viimeistele päiväkirja", "Jäädytä v1.0, tarkista jokaisen viikon merkintä, lataa koko projektipäiväkirja project-docs-kansioon ja kirjoita itsearviointi omaan aineistoon nojaten."],
        ["Tee syvälinkit", "Liitä jokainen näyttömatriisin vaatimus suoraan issueen, tiedostoon, commitiin, testiriviin tai palautepäätökseen."],
        ["Harjoittele ja luovuta", "Näytä 8–10 minuutissa paketti pelissä, yksi tekninen ratkaisu, yksi korjattu bugi, Git-historia ja tekoälyn tarkistettu käyttö. Anna toisen henkilön avata palautus ennen 4.12."]
      ],
      example: "P3 Toimintojen testaus → project-docs/projektipaivakirja.md#vko-45 → testit T01–T12 → release v1.0 → tarkka linkki.",
      notEnough: "Pelkkä rastitettu matriisi, repositoryn etusivulinkki tai tekoälyn kirjoittama, omakohtaiselta kuulostava itsearviointi ei riitä."
    }
  };

  function enhanceWeekCards() {
    weekCards.forEach((card) => {
      const guide = weekGuidance[card.dataset.week];
      if (!guide) return;
      const content = card.querySelector(".week-content");
      const firstTask = content?.querySelector("label");
      const lesson = content?.querySelector(".lesson-instructions");
      const evidence = content?.querySelector(".evidence");
      if (!content || !firstTask || !lesson || !evidence) return;

      const framing = weekFraming[guide.type] || weekFraming.feature;
      const context = document.createElement("section");
      context.className = "assignment-context";
      const excerptBlock = guide.excerpt ? `
          <div class="assignment-context-heading"><span>Toimeksianto tässä vaiheessa</span><a href="#toimeksianto">Koko toimeksianto ↑</a></div>
          <p class="assignment-excerpt">“${guide.excerpt}”</p>` : "";
      context.innerHTML = `
          <p class="feature-statement"><span>${framing.kicker}</span>${guide.feature}</p>
          ${excerptBlock}
          <p class="game-connection"><strong>${framing.connectionLabel}</strong> ${guide.connection}</p>
          <div class="week-purpose-grid">
            <article><span>${framing.deliverableLabel}</span><p>${guide.deliverable}</p></article>
            <article><span>Miksi tämä tehdään</span><p>${guide.why}</p></article>
          </div>
          <p class="skill-tags-label">${framing.skillsLabel}</p>
          <ul class="skill-tags" aria-label="${framing.skillsLabel}">${guide.skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>`;
      content.insertBefore(context, firstTask);

      lesson.querySelector(".lesson-label").innerHTML = `<span>${guide.steps.length} askelta</span> Tee näin, yksi askel kerrallaan`;
      lesson.querySelector("ol").innerHTML = guide.steps.map(([title, description]) => `<li><strong>${title}</strong>${description}</li>`).join("");
      lesson.querySelector(".checkpoint").innerHTML = `<strong>Valmis kun:</strong> ${guide.done}`;

      if (guide.resources?.length) {
        const resources = document.createElement("nav");
        resources.className = "resource-actions";
        resources.setAttribute("aria-label", "Tämän viikon pohjat ja työkalut");
        resources.innerHTML = `<strong>Tarvitset nämä:</strong>${guide.resources.map(([label, href, download]) => `<a href="${href}"${download ? " download" : ""}>${label}</a>`).join("")}`;
        lesson.insertAdjacentElement("beforebegin", resources);
      }

      if (guide.help) {
        const help = document.createElement("details");
        help.className = "unity-help";
        const helpLinks = guide.help.links?.length ? `<p class="unity-help-links">${guide.help.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>`).join("")}</p>` : "";
        const helpImages = guide.help.images?.length ? `<div class="unity-help-images">${guide.help.images.map(([src, alt, caption]) => `<figure><img src="${src}" alt="${escapeText(alt)}" loading="lazy">${caption ? `<figcaption>${escapeText(caption)}</figcaption>` : ""}</figure>`).join("")}</div>` : "";
        help.innerHTML = `
          <summary>Tarvitsen toteutusapua pakettiin <small>${guide.help.title}</small></summary>
          <div class="unity-help-content">
            <div class="unity-help-tree"><p class="help-label">Luo tämä rakenne</p><pre><code>${escapeText(guide.help.tree)}</code></pre></div>
            <div class="unity-help-actions"><p class="help-label">Kytke näin</p><ol>${guide.help.actions.map((action) => `<li>${escapeText(action)}</li>`).join("")}</ol></div>
            <div class="unity-help-code"><p class="help-label">Käytä tätä työpohjaa tai tarkistuslistaa</p><pre><code>${escapeText(guide.help.code)}</code></pre></div>
            <p class="unity-help-test"><strong>Tarkistustesti:</strong> ${escapeText(guide.help.test)}</p>
            ${helpImages}
            ${helpLinks}
          </div>`;
        lesson.insertAdjacentElement("afterend", help);
      }

      const expectations = document.createElement("div");
      expectations.className = "expectation-grid";
      expectations.innerHTML = `
        <article class="expected-example"><p class="expectation-label">Esimerkki odotetusta tarkkuudesta · älä kopioi sisältöä</p><p>${guide.example}</p></article>
        <article class="not-enough"><p class="expectation-label">Tämä ei vielä riitä</p><p>${guide.notEnough}</p></article>`;
      content.insertBefore(expectations, evidence);

      const journal = document.createElement("section");
      journal.className = "week-journal";
      journal.dataset.weekJournal = card.dataset.week;
      journal.innerHTML = `
        <div class="journal-heading">
          <div><p class="expectation-label">Kirjoita tähän ennen kuin rastitat viikon valmiiksi</p><h4>Projektipäiväkirja · viikko ${card.dataset.week}</h4></div>
          <span data-journal-status>Ei vielä kirjattu</span>
        </div>
        <p class="journal-record"><strong>Tallenna nämä tiedot:</strong> ${guide.record}</p>
        <div class="journal-fields">
          <label>Mitä teit ja miten?
            <textarea rows="4" data-journal-field="work" placeholder="Kerro konkreettiset tiedostot, tekstuurit, komennot, Git-tehtävät ja testit."></textarea>
          </label>
          <label>Miksi teit näin?
            <textarea rows="4" data-journal-field="reason" placeholder="Kerro päätös, vaihtoehdot, perustelu ja mitä opit."></textarea>
          </label>
          <label>Työnäytteen täsmällinen sijainti
            <input type="text" data-journal-field="evidence" placeholder="Esim. commit-linkki, issue #12, testi T05 tai project-docs/evidence/week-${card.dataset.week}/kuva.png">
          </label>
          <label>Seuraava pieni askel
            <input type="text" data-journal-field="next" placeholder="Mikä on ensimmäinen asia, josta jatkat seuraavalla kerralla?">
          </label>
        </div>
        <div class="journal-actions">
          <button class="button button-secondary" type="button" data-export-week="${card.dataset.week}">Lataa vain tämä viikko (.md)</button>
          <button class="button button-ghost" type="button" data-export-journal>Lataa koko projektipäiväkirja</button>
        </div>`;
      expectations.insertAdjacentElement("afterend", journal);

      evidence.querySelector("strong").textContent = "Työnäyte Git-repositoryyn ennen rastia:";
    });
  }

  function readStorage(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch (_) { return fallback; }
  }

  function writeStorage(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (_) { /* Sivusto toimii myös ilman pysyvää tallennusta. */ }
  }

  const savedTasks = readStorage(STORAGE_KEY, {});
  taskBoxes.forEach((box) => { box.checked = Boolean(savedTasks[box.dataset.task]); });

  const savedEvidence = readStorage(EVIDENCE_KEY, {});
  evidenceBoxes.forEach((box) => { box.checked = Boolean(savedEvidence[box.dataset.evidence]); });

  let journalEntries = readStorage(JOURNAL_KEY, {});

  function journalEntryIsComplete(entry = {}) {
    return [entry.work, entry.reason, entry.evidence].every((value) => String(value || "").trim().length > 0);
  }

  function weekTitle(week) {
    return document.querySelector(`#week-${week} .week-title strong`)?.textContent?.trim() || `Viikko ${week}`;
  }

  function updateJournalStatus() {
    let completeCount = 0;
    document.querySelectorAll("[data-week-journal]").forEach((journal) => {
      const week = journal.dataset.weekJournal;
      const entry = journalEntries[week] || {};
      const complete = journalEntryIsComplete(entry);
      const hasText = Object.values(entry).some((value) => String(value || "").trim());
      if (complete) completeCount += 1;
      const status = journal.querySelector("[data-journal-status]");
      if (status) {
        status.textContent = complete ? "Pääkentät kirjattu" : (hasText ? "Kesken – täydennä 3 pääkenttää" : "Ei vielä kirjattu");
        status.classList.toggle("complete", complete);
      }
    });
    document.querySelectorAll("[data-journal-summary]").forEach((summary) => {
      summary.textContent = `${completeCount} / ${weekCards.length} viikkoa kirjattu`;
    });
  }

  function saveJournalField(field) {
    const journal = field.closest("[data-week-journal]");
    if (!journal) return;
    const week = journal.dataset.weekJournal;
    journalEntries[week] = {
      ...(journalEntries[week] || {}),
      [field.dataset.journalField]: field.value,
      updatedAt: new Date().toISOString()
    };
    writeStorage(JOURNAL_KEY, journalEntries);
    updateJournalStatus();
    updateProgress();
  }

  function weekMarkdown(week) {
    const entry = journalEntries[week] || {};
    const guide = weekGuidance[week];
    return [
      `## Vko ${week} – ${weekTitle(week)}`,
      "",
      `**Viikon kärki:** ${guide?.feature || ""}`,
      "",
      `**Viikon tuotos:** ${guide?.deliverable || ""}`,
      "",
      "### Mitä tein ja miten?",
      String(entry.work || "Ei vielä kirjattu."),
      "",
      "### Miksi tein näin?",
      String(entry.reason || "Ei vielä kirjattu."),
      "",
      "### Työnäytteen täsmällinen sijainti",
      String(entry.evidence || "Ei vielä kirjattu."),
      "",
      "### Seuraava pieni askel",
      String(entry.next || "Ei vielä kirjattu."),
      ""
    ].join("\n");
  }

  function aiLogMarkdown() {
    const entries = readStorage(LOG_KEY, []);
    if (!entries.length) return "## AI-loki\n\nEi merkintöjä.\n";
    return ["## AI-loki", "", ...entries.flatMap((entry, index) => [
      `### ${index + 1}. ${entry.tool}`,
      `- **Tehtävä tai kysymys:** ${entry.question}`,
      `- **Käytin, muutin tai hylkäsin:** ${entry.used}`,
      `- **Tarkistus ja oppi:** ${entry.checked}`,
      `- **Aineistoviite:** ${entry.reference || "ei viitettä"}`,
      entry.privacy ? "- **Tietosuojavahvistus:** En syöttänyt henkilötietoja, salaisuuksia tai luottamuksellista aineistoa." : "- **Tietosuojavahvistus:** vahvistamatta (vanha merkintä)",
      ""
    ])].join("\n");
  }

  function downloadMarkdown(filename, documentText) {
    const url = URL.createObjectURL(new Blob([documentText], { type: "text/markdown;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportJournal() {
    const weeks = Object.keys(weekGuidance);
    const documentText = [
      "# BittiBiomi – projektipäiväkirja",
      "",
      "Tallenna tämä tiedosto polkuun `project-docs/projektipaivakirja.md` ja tee commit jokaisen viikon lopussa.",
      "",
      ...weeks.map((week) => weekMarkdown(week)),
      aiLogMarkdown()
    ].join("\n");
    downloadMarkdown("projektipaivakirja.md", documentText);
  }

  function initJournal() {
    document.querySelectorAll("[data-journal-field]").forEach((field) => {
      const week = field.closest("[data-week-journal]")?.dataset.weekJournal;
      field.value = journalEntries[week]?.[field.dataset.journalField] || "";
      field.addEventListener("input", () => saveJournalField(field));
    });
    document.querySelectorAll("[data-export-week]").forEach((button) => button.addEventListener("click", () => {
      const week = button.dataset.exportWeek;
      downloadMarkdown(`projektipaivakirja-vko-${week}.md`, `# BittiBiomi – viikko ${week}\n\n${weekMarkdown(week)}`);
    }));
    document.querySelectorAll("[data-export-journal]").forEach((button) => button.addEventListener("click", exportJournal));
    updateJournalStatus();
  }

  let planData = readStorage(PLAN_KEY, {});
  const planRequired = ["name", "author", "goal", "resolution", "palette", "minTextures", "minModels", "reasoning"];

  function planFilled(fieldName) {
    return String(planData[fieldName] || "").trim().length > 0;
  }

  function planValue(fieldName, fallback = "_(ei vielä täytetty)_") {
    return planFilled(fieldName) ? String(planData[fieldName]).trim() : fallback;
  }

  function updatePlanStatus() {
    const status = document.querySelector("[data-gdd-status]");
    if (!status) return;
    const done = planRequired.filter(planFilled).length;
    status.textContent = done === 0 ? "Ei vielä aloitettu" : (done < planRequired.length ? `Kesken — ${done} / ${planRequired.length} kenttää täytetty` : "Suunnitelma valmis ✓");
    status.classList.toggle("complete", done === planRequired.length);
  }

  function planMarkdown() {
    const versionLine = planFilled("mcVersion")
      ? `Minecraft-versio: ${String(planData.mcVersion).trim()} (sovittu ohjaajan kanssa${planFilled("mcAgreed") ? ` — ${String(planData.mcAgreed).trim()}` : ""})`
      : "Minecraft-versio: EI VIELÄ SOVITTU — avoin asia";
    const licenseLine = planFilled("license")
      ? `Lisenssi: ${String(planData.license).trim()} — LICENSE-tiedosto lisätään repositoryyn heti, viimeistään viikolla 35`
      : "Lisenssi: EI VIELÄ SOVITTU — avoin asia";
    return [
      `# Asset-pack-suunnitelma – ${planValue("name", "_(paketin nimi puuttuu)_")}`,
      "",
      `Tekijä: ${planValue("author")} · Päivitetty: ${new Date().toLocaleDateString("fi-FI")} · Pohja: BittiBiomi-toimeksianto 17.8.2026`,
      "",
      "## 1. Konsepti",
      "",
      "Avoimella lisenssillä julkaistava teemapaketti Minecraft Java Editioniin: resurssipaketti muuttaa pelin ilmettä ja datapaketti lisää reseptit, saavutuksen ja funktiot.",
      "",
      "## 2. Teema ja kohde omin sanoin",
      "",
      planValue("goal"),
      "",
      "## 3. Asset-työkierto",
      "",
      "Luonnos → Blockbench tai Piskel → pakettiin → peliin → testi → commit.",
      "",
      "## 4. Omat suunnittelupäätökset",
      "",
      `- **Tekstuuriresoluutio:** ${planValue("resolution")}`,
      `- **Väripaletti ja työkalut:** ${planValue("palette")}`,
      `- **P0-sisältö:** vähintään ${planValue("minTextures", "_?_")} tekstuuria ja ${planValue("minModels", "_?_")} mallia, omat nimet, 2 reseptiä, 1 funktio ja 1 saavutus`,
      "",
      "### Perustelut",
      "",
      planValue("reasoning"),
      "",
      "## 5. Ohjaajan kanssa sovittavat asiat",
      "",
      `- ${versionLine}`,
      `- ${licenseLine}`,
      "- Mitä oppilaitos sallii julkisessa julkaisemisessa: tekijänimi, kuvat ja jakelupalvelut? — kirjaa vastaus tai jätä avoimeksi",
      "- Julkaistaanko paketti myös Modrinthissa tai Planet Minecraftissa, ja kuka luo tilin? — kirjaa vastaus tai jätä avoimeksi",
      "- Kuka hyväksyy rajauksen ja väliversion? — kirjaa vastaus tai jätä avoimeksi",
      "",
      "## 6. Assetit tekojärjestyksessä",
      "",
      "1. Ensimmäiset blokkitekstuurit (vko 36)",
      "2. Esinetekstuurit ja omat nimet (vko 37)",
      "3. Ensimmäinen Blockbench-malli (vko 38)",
      "4. Isompi malli tai hahmon uusi ilme (vko 39)",
      "5. Äänet ja tunnelma (vko 40)",
      "6. Testaajan toivoma parannus + datapaketin runko (vko 43 — sisältö selviää katselmoinnissa vkolla 41)",
      "7. Skriptattu ominaisuus: reseptit, funktio ja saavutus (vko 44)",
      "",
      "Huomautus: tämä lista ei ole valmis suunnitelma. Assettien pilkkominen 0,5–1 päivän issueiksi ja P0/P1/P2-priorisointi on omaa työtä (tehtävä 35-2).",
      "",
      "## 7. Teknologia",
      "",
      "Minecraft Java Edition, resurssipaketti + datapaketti, Blockbench ja Piskel, skriptaus mcfunction-komennoilla ja JSONilla, julkaisu julkisena GitHub-releasena avoimella lisenssillä.",
      "",
      "## 8. Rajaus – mitä ei tehdä",
      "",
      "Ei modeja, ei palvelinpluginejä, ei uusia pelimekaniikkoja eikä maksullista sisältöä. Ensin toimiva P0-versio.",
      "",
      "---",
      "",
      "Tallenna tämä tiedosto polkuun `project-docs/asset-pack-suunnitelma.md` ja tee commit. Päivitä tiedostoa, kun ohjaaja vastaa avoimiin asioihin.",
      ""
    ].join("\n");
  }

  function initPlan() {
    const form = document.querySelector("[data-gdd-form]");
    if (!form) return;
    form.addEventListener("submit", (event) => event.preventDefault());
    form.querySelectorAll("[data-gdd-field]").forEach((field) => {
      field.value = planData[field.dataset.gddField] || "";
      field.addEventListener("input", () => {
        planData[field.dataset.gddField] = field.value;
        writeStorage(PLAN_KEY, planData);
        updatePlanStatus();
      });
    });
    document.querySelectorAll("[data-gdd-export]").forEach((button) => button.addEventListener("click", () => downloadMarkdown("asset-pack-suunnitelma.md", planMarkdown())));
    updatePlanStatus();
  }

  function isoWeek(date) {
    const copy = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    copy.setUTCDate(copy.getUTCDate() + 4 - (copy.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(copy.getUTCFullYear(), 0, 1));
    return Math.ceil((((copy - yearStart) / 86400000) + 1) / 7);
  }

  function buildWeekNavigation() {
    const holder = document.querySelector("[data-week-links]");
    if (!holder) return;
    const weekNames = {
      34: "Aloitus",
      35: "Asset-pack-suunnitelma",
      36: "Blokkitekstuurit",
      37: "Esineet ja nimet",
      38: "Ensimmäinen malli",
      39: "Isompi malli tai ilme",
      40: "Äänet ja tunnelma",
      41: "Ensimmäiset testaajat",
      42: "Syysloma",
      43: "Palautemuutos + datapaketti",
      44: "Skriptattu ominaisuus",
      45: "Paketti kestää käyttöä",
      46: "Rakenteen laatu",
      47: "Julkaisuehdokas RC1",
      48: "Julkaisu v1.0",
      49: "Näyttö ja luovutus"
    };
    const phaseStarts = {
      34: { key: "a", label: "Paketin ydin" },
      38: { key: "b", label: "Paketin featuret" },
      43: { key: "c", label: "Paketti valmiiksi" },
      47: { key: "d", label: "Julkaisu ja näyttö" }
    };
    function phaseKey(week) {
      if (week >= 47) return "d";
      if (week >= 43) return "c";
      if (week >= 38) return "b";
      return "a";
    }
    for (let week = 34; week <= 49; week += 1) {
      const phaseStart = phaseStarts[week];
      if (phaseStart) {
        const heading = document.createElement("p");
        heading.className = `week-nav-phase phase-${phaseStart.key}`;
        heading.innerHTML = `<span>${phaseStart.key.toUpperCase()}</span>${phaseStart.label}`;
        holder.appendChild(heading);
      }
      const link = document.createElement("a");
      link.href = `#week-${week}`;
      link.className = "week-link";
      link.dataset.weekLink = String(week);
      const smallLabel = week === 42 ? `Viikko ${week}` : `${phaseKey(week).toUpperCase()} · Viikko ${week}`;
      link.innerHTML = `<span class="week-nav-node">${week}</span><span class="week-nav-copy"><small>${smallLabel}</small><strong>${weekNames[week]}</strong></span><span class="week-nav-check" aria-hidden="true">✓</span>`;
      link.setAttribute("aria-label", week === 42 ? "Viikko 42, syysloma" : `Viikko ${week}, vaihe ${phaseKey(week).toUpperCase()}`);
      if (week === 42) link.classList.add("holiday");
      else link.classList.add(`phase-${phaseKey(week)}`);
      holder.appendChild(link);
    }
  }

  function updateProgress() {
    const done = taskBoxes.filter((box) => box.checked).length;
    const total = taskBoxes.length;
    const percent = total ? Math.round((done / total) * 100) : 0;
    document.querySelectorAll("[data-progress-number]").forEach((el) => { el.textContent = `${percent}%`; });
    document.querySelectorAll("[data-progress-copy]").forEach((el) => { el.textContent = `${done} / ${total} tehtävää valmiina`; });
    document.querySelectorAll("[data-progress-bar]").forEach((el) => { el.style.width = `${percent}%`; });
    document.querySelectorAll(".progress-ring").forEach((el) => { el.style.setProperty("--progress", `${percent * 3.6}deg`); });

    weekCards.forEach((card) => {
      const boxes = [...card.querySelectorAll("[data-task]")];
      const complete = boxes.filter((box) => box.checked).length;
      card.querySelector(".week-status").textContent = `${complete} / ${boxes.length}`;
      card.classList.toggle("complete", complete === boxes.length);
      card.classList.toggle("journal-missing", complete === boxes.length && !journalEntryIsComplete(journalEntries[card.dataset.week]));
      const weekLink = document.querySelector(`[data-week-link="${card.dataset.week}"]`);
      if (weekLink) weekLink.classList.toggle("done", complete === boxes.length);
    });

    const firstIncomplete = taskBoxes.find((box) => !box.checked);
    document.querySelectorAll("[data-continue]").forEach((button) => {
      button.textContent = firstIncomplete ? (done ? "Jatka seuraavasta tehtävästä" : "Aloita paketin rakentaminen") : "Kaikki tehtävät valmiina";
    });
  }

  function saveTasks() {
    const state = Object.fromEntries(taskBoxes.map((box) => [box.dataset.task, box.checked]));
    writeStorage(STORAGE_KEY, state);
    updateProgress();
  }

  taskBoxes.forEach((box) => box.addEventListener("change", () => {
    saveTasks();
    if (!box.checked) return;
    const card = box.closest(".week-card");
    const status = card?.querySelector("[data-journal-status]");
    if (status && !journalEntryIsComplete(journalEntries[card.dataset.week])) {
      status.textContent = "Muista projektipäiväkirjan 3 pääkenttää";
      status.classList.add("attention");
    }
  }));

  function updateEvidence() {
    const state = Object.fromEntries(evidenceBoxes.map((box) => [box.dataset.evidence, box.checked]));
    writeStorage(EVIDENCE_KEY, state);
    const done = evidenceBoxes.filter((box) => box.checked).length;
    const count = document.querySelector("[data-evidence-count]");
    if (count) count.textContent = `${done} / ${evidenceBoxes.length}`;
  }
  evidenceBoxes.forEach((box) => box.addEventListener("change", updateEvidence));

  function openWeekTarget(hash) {
    if (!hash || !hash.startsWith("#week-")) return;
    const target = document.querySelector(hash);
    if (target instanceof HTMLDetailsElement) target.open = true;
  }
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href*="#week-"]');
    if (link) openWeekTarget(new URL(link.href, window.location.href).hash);
  });
  window.addEventListener("hashchange", () => openWeekTarget(window.location.hash));

  function continuePath() {
    const firstIncomplete = taskBoxes.find((box) => !box.checked);
    const target = firstIncomplete ? firstIncomplete.closest(".week-card") : document.querySelector("#week-49");
    if (!target) return;
    target.open = true;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => firstIncomplete?.focus({ preventScroll: true }), 500);
  }
  document.querySelectorAll("[data-continue]").forEach((button) => button.addEventListener("click", continuePath));
  document.querySelectorAll("[data-print]").forEach((button) => button.addEventListener("click", () => window.print()));

  document.querySelector("[data-reset]")?.addEventListener("click", () => {
    if (!window.confirm("Nollataanko tehtävät, projektipäiväkirja, Asset-pack-suunnitelma, näyttöaineiston rastit ja AI-loki tästä selaimesta? Lataa projektipäiväkirja ja asset-pack-suunnitelma.md ensin, jos haluat säilyttää vastaukset.")) return;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(EVIDENCE_KEY);
    localStorage.removeItem(LOG_KEY);
    localStorage.removeItem(JOURNAL_KEY);
    localStorage.removeItem(PLAN_KEY);
    journalEntries = {};
    planData = {};
    taskBoxes.forEach((box) => { box.checked = false; });
    evidenceBoxes.forEach((box) => { box.checked = false; });
    document.querySelectorAll("[data-journal-field]").forEach((field) => { field.value = ""; });
    document.querySelectorAll("[data-gdd-field]").forEach((field) => { field.value = ""; });
    renderLog();
    updateJournalStatus();
    updatePlanStatus();
    updateProgress();
    updateEvidence();
  });

  let aiLog = readStorage(LOG_KEY, []);
  const logHolder = document.querySelector("[data-ai-entries]");
  const logCount = document.querySelector("[data-log-count]");

  function escapeText(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  }

  function renderLog() {
    aiLog = readStorage(LOG_KEY, []);
    if (logCount) logCount.textContent = `${aiLog.length} ${aiLog.length === 1 ? "merkintä" : "merkintää"}`;
    if (!logHolder) return;
    if (!aiLog.length) {
      logHolder.innerHTML = '<p class="empty-state">Ei merkintöjä vielä.</p>';
      return;
    }
    logHolder.innerHTML = aiLog.map((entry, index) => `
      <article class="log-entry">
        <strong>${escapeText(entry.tool)}</strong>
        <span>${escapeText(entry.question)}</span>
        <span>${escapeText(entry.used)}</span>
        <span>${escapeText(entry.checked)}<small class="log-reference">Aineisto: ${escapeText(entry.reference || "ei viitettä")}</small></span>
        <button type="button" data-remove-log="${index}" aria-label="Poista lokimerkintä">Poista</button>
      </article>`).join("");
    logHolder.querySelectorAll("[data-remove-log]").forEach((button) => button.addEventListener("click", () => {
      aiLog.splice(Number(button.dataset.removeLog), 1);
      writeStorage(LOG_KEY, aiLog);
      renderLog();
    }));
  }

  document.querySelector("[data-ai-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    aiLog.push({
      tool: form.get("tool"),
      question: form.get("question"),
      used: form.get("used"),
      checked: form.get("checked"),
      reference: form.get("reference"),
      privacy: form.get("privacy") === "on"
    });
    writeStorage(LOG_KEY, aiLog);
    event.currentTarget.reset();
    renderLog();
  });

  document.querySelector("[data-export-log]")?.addEventListener("click", () => {
    const entries = readStorage(LOG_KEY, []);
    const rows = entries.length ? entries.map((entry, index) => [
      `## ${index + 1}. ${entry.tool}`,
      `- **Tehtävä tai kysymys:** ${entry.question}`,
      `- **Käytin, muutin tai hylkäsin:** ${entry.used}`,
      `- **Tarkistus ja oppi:** ${entry.checked}`,
      `- **Aineistoviite:** ${entry.reference || "ei viitettä"}`,
      entry.privacy ? "- **Tietosuojavahvistus:** En syöttänyt henkilötietoja, salaisuuksia tai luottamuksellista aineistoa." : "- **Tietosuojavahvistus:** vahvistamatta (vanha merkintä)",
      ""
    ].join("\n")).join("\n") : "Ei merkintöjä.\n";
    const documentText = `# BittiBiomi – AI-loki\n\n${rows}`;
    downloadMarkdown("AI-loki.md", documentText);
  });

  function markCurrentWeek() {
    const now = new Date();
    if (now.getFullYear() !== 2026) return;
    const current = isoWeek(now);
    if (current < 34 || current > 49) return;
    document.querySelector(`#week-${current}`)?.classList.add("current");
    document.querySelector(`[data-week-link="${current}"]`)?.classList.add("current");
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: "0px 0px -30px" });
    items.forEach((item) => observer.observe(item));
  }

  enhanceWeekCards();
  initJournal();
  initPlan();
  buildWeekNavigation();
  openWeekTarget(window.location.hash);
  markCurrentWeek();
  updateProgress();
  updateEvidence();
  renderLog();
  setupReveal();
})();
