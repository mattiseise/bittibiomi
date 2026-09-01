/*
 * BittiBiomi – projektin koko sisältödata.
 *
 * Migroitu vanhasta app.js-pohjaisesta toteutuksesta (weekGuidance/weekFraming)
 * uuteen sisalto.js + geneerinen app.js -rakenteeseen. Sisältö on kopioitu
 * sellaisenaan vanhasta sivustosta; vain rakenne on muutettu skeeman mukaiseksi.
 *
 * app.js on geneerinen moottori eikä sisällä projektikohtaista tekstiä.
 */
window.NAYTTOPROJEKTI = {
  /* ---- perustiedot ---- */
  slug: "bittibiomi",
  nimi: "BittiBiomi",
  vuosi: 2026,
  viikot: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  lomaViikot: [42],
  aloitusNappi: "Aloita paketin rakentaminen",
  apuOtsikko: "Tarvitsen toteutusapua pakettiin",

  paletti: {
    aksentti: "#2e7d32",
    aksenttiTumma: "#1b5e20",
    taulukkoSavy: "#e8f5e9",
    riviSavy: "#f1f8e9"
  },

  /* ---- vaiheet ---- */
  vaiheet: [
    { tunnus: "A", lyhyt: "Paketin ydin", otsikko: "Paketin ydin: teema, työkalut ja ensimmäiset omat tekstuurit", viikot: [34, 35, 36, 37], vari: "#8d5a2b" },
    { tunnus: "B", lyhyt: "Paketin featuret", otsikko: "Paketin featuret: 3D-mallit, äänet ja katselmointi", viikot: [38, 39, 40, 41, 42], vari: "#1a6fae" },
    { tunnus: "C", lyhyt: "Paketti valmiiksi", otsikko: "Paketti valmiiksi: skriptit, palautemuutos ja laatu", viikot: [43, 44, 45, 46], vari: "#c03434" },
    { tunnus: "D", lyhyt: "Julkaisu ja näyttö", otsikko: "Julkaisu ja näyttö", viikot: [47, 48, 49], vari: "#7c3aed" }
  ],

  /* ---- viikkonavigaation lyhyet nimet (myös lomaviikolle) ---- */
  viikkoNimet: {
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
  },

  /* ---- viikkotyyppien kehykset ---- */
  kehykset: {
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
  },

  /* ---- projektipäiväkirja ---- */
  paivakirja: {
    tiedostonimi: "projektipaivakirja.md",
    polku: "project-docs/projektipaivakirja.md",
    vihjeet: {
      work: "Kerro konkreettiset tiedostot, tekstuurit, komennot, Git-tehtävät ja testit.",
      reason: "Kerro päätös, vaihtoehdot, perustelu ja mitä opit.",
      evidence: "Esim. commit-linkki, issue #12, testi T05 tai project-docs/evidence/week-N/kuva.png."
    }
  },

  /* ---- Asset-pack-suunnitelma ---- */
  suunnitelma: {
    otsikko: "Asset-pack-suunnitelma",
    tiedostonimi: "asset-pack-suunnitelma.md",
    pakolliset: ["name", "author", "goal", "resolution", "palette", "minTextures", "minModels", "reasoning"],
    markdown: ({ arvo, onTäytetty, pvm }) => {
      const versionLine = onTäytetty("mcVersion")
        ? `Minecraft-versio: ${arvo("mcVersion")} (sovittu ohjaajan kanssa${onTäytetty("mcAgreed") ? ` – ${arvo("mcAgreed")}` : ""})`
        : "Minecraft-versio: EI VIELÄ SOVITTU – avoin asia";
      const licenseLine = onTäytetty("license")
        ? `Lisenssi: ${arvo("license")} – LICENSE-tiedosto lisätään repositoryyn heti, viimeistään viikolla 35`
        : "Lisenssi: EI VIELÄ SOVITTU – avoin asia";
      return [
        `# Asset-pack-suunnitelma – ${arvo("name", "_(paketin nimi puuttuu)_")}`,
        "",
        `Tekijä: ${arvo("author")} · Päivitetty: ${pvm} · Pohja: BittiBiomi-toimeksianto 17.8.2026`,
        "",
        "## 1. Konsepti",
        "",
        "Avoimella lisenssillä julkaistava teemapaketti Minecraft Java Editioniin: resurssipaketti muuttaa pelin ilmettä ja datapaketti lisää reseptit, saavutuksen ja funktiot.",
        "",
        "## 2. Teema ja kohde omin sanoin",
        "",
        arvo("goal"),
        "",
        "## 3. Asset-työkierto",
        "",
        "Luonnos → Blockbench tai Piskel → pakettiin → peliin → testi → commit.",
        "",
        "## 4. Omat suunnittelupäätökset",
        "",
        `- **Tekstuuriresoluutio:** ${arvo("resolution")}`,
        `- **Väripaletti ja työkalut:** ${arvo("palette")}`,
        `- **P0-sisältö:** vähintään ${arvo("minTextures", "_?_")} tekstuuria ja ${arvo("minModels", "_?_")} mallia, omat nimet, 2 reseptiä, 1 funktio ja 1 saavutus`,
        "",
        "### Perustelut",
        "",
        arvo("reasoning"),
        "",
        "## 5. Ohjaajan kanssa sovittavat asiat",
        "",
        `- ${versionLine}`,
        `- ${licenseLine}`,
        "- Mitä oppilaitos sallii julkisessa julkaisemisessa: tekijänimi, kuvat ja jakelupalvelut? – kirjaa vastaus tai jätä avoimeksi",
        "- Julkaistaanko paketti myös Modrinthissa tai Planet Minecraftissa, ja kuka luo tilin? – kirjaa vastaus tai jätä avoimeksi",
        "- Kuka hyväksyy rajauksen ja väliversion? – kirjaa vastaus tai jätä avoimeksi",
        "",
        "## 6. Assetit tekojärjestyksessä",
        "",
        "1. Ensimmäiset blokkitekstuurit (vko 36)",
        "2. Esinetekstuurit ja omat nimet (vko 37)",
        "3. Ensimmäinen Blockbench-malli (vko 38)",
        "4. Isompi malli tai hahmon uusi ilme (vko 39)",
        "5. Äänet ja tunnelma (vko 40)",
        "6. Testaajan toivoma parannus + datapaketin runko (vko 43 – sisältö selviää katselmoinnissa vkolla 41)",
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
  },

  /* ---- viikkojen ohjaava sisältö ---- */
  viikkoOhjeet: {
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
      notEnough: "Kahdeksan lähes samaa tekoälykysymystä tai itse keksityt vastaukset eivät osoita, että olet selvittänyt toimeksiannon.",
      paivat: [
        ["Tarve", "Lue toimeksianto. Kirjoita 8 kysymystä ja pidä aloituskeskustelu."],
        ["Rajaus", "Sovi Minecraft-versio, teema, P0-sisältö ja valmis kun -ehdot."],
        ["Työkaluperusta", "Asenna Blockbench ja VS Code. Luo tyhjä resurssipaketti, joka näkyy pelin pakettivalikossa. Perusta Git-repository."],
        ["Suunnittele", "Tee sisältölista, moodboard ja paketin kansiorakenne."],
        ["Ensimmäinen asset", "Vie yksi oma tekstuuri peliin asti ja committaa se."]
      ]
    },
    35: {
      type: "pohjustus",
      feature: "Viikon jälkeen paketti on paperilla: teema, väripaletti, lisenssi ja sisältölista tekojärjestyksessä. Ohjaaja on hyväksynyt rajauksen.",
      excerpt: "Paketti muuttaa pelin ilmettä valitun teeman mukaiseksi: siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
      connection: "Nyt muutat toimeksiannon näkyväksi suunnitelmaksi: teema, paletti, sisältölista, tehtävät ja valmiin työn ehdot. Viikon 34 vastaukset ohjaajalta ovat suunnitelman pohja.",
      deliverable: "Hyväksytty pakollinen perusversio, sovittu lisenssi, pieni backlog, moodboard ja kolme tekstuuriluonnosta.",
      why: "Rajaus estää pakettia kasvamasta liian suureksi. Kun jokaisella tehtävällä on selvä valmis kun -ehto, tiedät, mitä seuraavaksi tehdään ja milloin työ voidaan testata.",
      done: "Pakollinen perusversio on hyväksytty. Jokaisella P0-tehtävällä on 0,5–1 päivän arvio ja havaittava valmis kun -ehto. Moodboardissa näkyvät paletti ja referenssit, ja sovittu LICENSE-tiedosto on repositoryn juuressa.",
      record: "Kirjoita Vko 35 -merkintään, mitkä Asset-pack-suunnitelman päätökset teit ja miksi, hyväksyjän rooli ja päivä sekä mitkä asiat jäivät ohjaajalle avoimiksi. Lisää linkit suunnitelmaan, backlogiin ja moodboardiin.",
      skills: ["rajaus", "moodboard", "työn pilkkominen"],
      resources: [
        ["Täytä Asset-pack-suunnitelma tällä sivulla", "#view-suunnitelma", false],
        ["Avaa koko toimeksianto", "#view-toimeksianto", false]
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
      excerpt: "Paketti muuttaa pelin ilmettä valitun teeman mukaiseksi: siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
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
      excerpt: "Paketti muuttaa pelin ilmettä valitun teeman mukaiseksi: siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
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
      excerpt: "Paketti muuttaa pelin ilmettä valitun teeman mukaiseksi: siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
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
      excerpt: "Paketti muuttaa pelin ilmettä valitun teeman mukaiseksi: siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
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
        ["Avaa näyttöaineisto", "#view-naytto", false]
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
      excerpt: "Valmis paketti julkaistaan niin, että kuka tahansa pelaaja löytää sen, lataa ja asentaa kirjallisen ohjeen avulla — ja niin, että toinen tekijä voi lisenssin puitteissa jatkaa työtä siitä eteenpäin.",
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
      excerpt: "Valmis paketti julkaistaan niin, että kuka tahansa pelaaja löytää sen, lataa ja asentaa kirjallisen ohjeen avulla — ja niin, että toinen tekijä voi lisenssin puitteissa jatkaa työtä siitä eteenpäin.",
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
      excerpt: "Valmis paketti julkaistaan niin, että kuka tahansa pelaaja löytää sen, lataa ja asentaa kirjallisen ohjeen avulla — ja niin, että toinen tekijä voi lisenssin puitteissa jatkaa työtä siitä eteenpäin.",
      connection: "Pakettiin ei enää lisätä sisältöä. Yhdistät jokaisen vaatimuksen täsmälliseen tiedostoon, testiin, releaseen ja Gitin työnäytteeseen.",
      deliverable: "Valmis projektipäiväkirja, näyttömatriisi, itsearviointi, jäädytetty v1.0 ja harjoiteltu demo.",
      why: "Arvioija voi arvioida vain näkyvän ja löydettävän osaamisen. Täsmälliset linkit säästävät aikaa ja osoittavat, miten vaatimus muuttui suunnitelmaksi, toteutukseksi ja testiksi.",
      done: "Jokaisella arviointikohdalla on avautuva täsmälinkki tai tunniste. Projektipäiväkirja ja AI-loki ovat repositoryssa, ja demo käyttää samaa jäädytettyä v1.0-versiota.",
      record: "Kirjoita Vko 49 -merkintään itsearviointi: kolme vahvuutta työnäytteineen ja yksi seuraava kehitysaskel. Lisää linkit näyttömatriisiin, AI-lokiin, v1.0-releaseen ja demon runkoon.",
      skills: ["näyttömatriisi", "itsearviointi", "demo"],
      resources: [
        ["Avaa näyttömatriisi", "#view-naytto", false],
        ["Avaa ja lataa AI-loki", "#view-ailoki", false]
      ],
      steps: [
        ["Viimeistele päiväkirja", "Jäädytä v1.0, tarkista jokaisen viikon merkintä, lataa koko projektipäiväkirja project-docs-kansioon ja kirjoita itsearviointi omaan aineistoon nojaten."],
        ["Tee syvälinkit", "Liitä jokainen näyttömatriisin vaatimus suoraan issueen, tiedostoon, commitiin, testiriviin tai palautepäätökseen."],
        ["Harjoittele ja luovuta", "Näytä 8–10 minuutissa paketti pelissä, yksi tekninen ratkaisu, yksi korjattu bugi, Git-historia ja tekoälyn tarkistettu käyttö. Anna toisen henkilön avata palautus ennen 4.12."]
      ],
      example: "P3 Toimintojen testaus → project-docs/projektipaivakirja.md#vko-45 → testit T01–T12 → release v1.0 → tarkka linkki.",
      notEnough: "Pelkkä rastitettu matriisi, repositoryn etusivulinkki tai tekoälyn kirjoittama, omakohtaiselta kuulostava itsearviointi ei riitä.",
      paivat: [
        ["Ma 30.11.", "Sisältöjäädytys: viimeinen hyväksytty versio."],
        ["Ti 1.12.", "Aineisto: päiväkirja, testit ja linkit."],
        ["Ke 2.12.", "Harjoittelu: 8–10 min demo ja itsearviointi."],
        ["To 3.12.", "Puskuri: tarkistus toisen henkilön kanssa."],
        ["Pe 4.12.", "Luovutus: paketti, repository, projektipäiväkirja ja näyttö."]
      ]
    }
  },

  /* ---- opettajan lähdeaineisto (tee_lataukset.js) ---- */
  opettaja: {
    jakso: "Viikot 34–49 · syysloma vko 42",
    deadline: "pe 4.12.2026",
    kansiKuvaus: "Oma Minecraft-teemapaketti: tekstuurit, mallit, äänet ja skriptit",
    kansiHuomiot: [
      "Paketti julkaistaan avoimella lisenssillä ja repository on julkinen ensimmäisestä commitista. Älä laita julkiseen repositoryyn henkilötietoja, kotiosoitetta, koulun tunnisteita tai muiden nimiä — Git-historia on pysyvä. Sovi tekijänimi ohjaajan kanssa, ja alaikäisenä sovi julkisesta repositorystä myös huoltajan kanssa."
    ],
    viimeisetPaivat: [
      ["Ma 30.11.", "Sisältöjäädytys — viimeinen hyväksytty versio"],
      ["Ti 1.12.", "Aineisto — päiväkirja, testit ja linkit"],
      ["Ke 2.12.", "Harjoittelu — 8–10 min demo ja itsearviointi"],
      ["To 3.12.", "Puskuri — tarkistus toisen henkilön kanssa"],
      ["Pe 4.12.", "LUOVUTUS — paketti, repository, projektipäiväkirja ja näyttö"]
    ],

    pohjat: {
      aloitusVko: 34,
      kysymyksia: 8,
      vertailuVko: 39,
      katselmointiVkot: "41 ja 47",
      testiVko: 45,
      testeja: 12,
      ketjuja: 3,
      lisenssiVko: 46
    },

    ideapankki: {
      otsikko: "Teemaideat",
      tiedosto: "teemaideat",
      johdanto: "BittiBiomi · 10 teemaa sisältölistoineen. Nämä ovat lähtökohtia — oma idea on aina paras, kunhan se kestää 15 viikkoa. Valitse teema, jonka jaksat katsoa joulukuuhun asti.",
      sarakkeet: ["Blokkitekstuurit", "Esinetekstuurit", "3D-malli", "Ääni", "Skriptattu lisä"],
      ideat: [
        ["Kotikylä", "Lämmin suomalainen kylä: puutalot, sauna ja pihapiiri.", "hirsiseinä, pärekatto, saunankiuas", "kiulu, vihta, kahvipannu", "pihakeinu tai kaivonvintti", "saunan kiukaan sihahdus", "kiulun resepti + saavutus Löylynheittäjä"],
        ["Avaruusasema", "Kylmä metalli ja neonvalot kiertoradalla.", "metallipaneeli, valolattia, kaapelikouru", "happipullo, työkalu, avaruusruoka", "antenni tai ohjauspaneeli", "ilmalukon suhina", "happipullon resepti + saavutus Ulkoavaruudessa"],
        ["Satumetsä", "Sammaleinen, utuinen ja vähän taianomainen metsä.", "sammalkivi, sienirunko, hehkulehvästö", "taikasauva, sienikori, hohtomarja", "jättisieni", "metsän kuiskaus", "hohtomarjan resepti + saavutus Metsänhenki"],
        ["Talviselkonen", "Lumi, jää ja revontulet Lapissa.", "hankilumi, jääkuutio, honkaseinä", "sukset, lapaset, kuksa", "kota tai pulkka", "pakkasen narske", "kuksan resepti + saavutus Kaamoksen valo"],
        ["Merenalainen", "Sukellus koralliriutalle ja hylylle.", "koralli, merilevä, hylkylankku", "sukelluslasit, harppuuna, helmi", "ruostunut ankkuri", "kuplien pulputus", "sukelluslasien resepti + saavutus Syvyyksien tutkija"],
        ["Villi länsi", "Pölyinen preeriakaupunki ja kultaryntäys.", "hiekkakivi, saluunalauta, kaktus", "lasso, kultahippu, stetson", "tuulimylly tai vesitorni", "saluunan ovi", "kultahipun resepti + saavutus Kullankaivaja"],
        ["Muinainen temppeli", "Hiekkaan hautautunut raunio ja hieroglyfit.", "hieroglyfikivi, kultatiili, hiekkalattia", "soihtu, aarrekartta, skarabee", "sfinksipatsas", "kiviluukun jyrinä", "soihdun resepti + saavutus Haudanryöstäjä"],
        ["Kauhukartano", "Naristva vanha talo — sopivan pelottava, ei liian.", "lahopuu, hämähäkinseitti-ikkuna, kellariportaat", "lyhty, vanha avain, hämäränaamio", "kummitusveistos", "narisevat portaat", "lyhdyn resepti + saavutus Rohkea vieras"],
        ["Kyberkaupunki", "Neonvalot, hologrammit ja sadekadut.", "neonseinä, hologrammilattia, piirilevy", "datalevy, neonlasit, energiajuoma", "mainoskyltti", "syntetisaattoripiippaus", "datalevyn resepti + saavutus Verkossa"],
        ["Koulun oma teema", "Oman koulun värit, tilat ja sisäpiirin jutut.", "koulun seinätiili, liitutaulu, käytävälaatta", "läppäri, ruokalan tarjotin, avainnauha", "koulun logo -veistos", "välituntikello", "tarjottimen resepti + saavutus Ysiluokkalainen"]
      ],
      loppu: "Muista rajaus: P0 ensin — 8 tekstuuria, 2 mallia, omat nimet, 2 reseptiä, 1 funktio ja 1 saavutus. Lisäideat ovat P1/P2-listaa."
    },

    nayttosuunnitelma: {
      otsikko: "Näyttösuunnitelma",
      tiedosto: "nayttosuunnitelma.docx",
      johdanto: "Opettajan lähdeaineisto. Vaatimukset on luettu sivuston näyttömatriisista, joten tämä asiakirja pysyy sivuston kanssa yhdenmukaisena.",
      kohde: [
        "Opiskelija suunnittelee, toteuttaa ja julkaisee oman teemapaketin Minecraft Java Editioniin. Paketti koostuu resurssipaketista (itse piirretyt tekstuurit, Blockbench-mallit, äänet ja suomenkieliset nimet) ja kevyestä datapaketista (reseptit, saavutus ja mcfunction-skriptit). Skriptaus tehdään komennoilla ja JSONilla, ei ohjelmointikielellä.",
        "Paketti julkaistaan avoimella lisenssillä julkisena GitHub-releasena. Repository on julkinen ensimmäisestä commitista. Näyttöympäristö on siis kaksiosainen: oppilaitoksen työtila ja julkinen jakelukanava."
      ],
      p0: "Pakollinen perusversio (P0): 8 omaa tekstuuria, 2 Blockbench-mallia, omat suomenkieliset nimet, 2 reseptiä, 1 funktio ja 1 saavutus.",
      roolit: [
        ["Opiskelija", "Toteuttaa paketin, kirjoittaa dokumentaation lataajalle, julkaisee ja kokoaa näyttöaineiston."],
        ["Ohjaaja / opettaja", "Antaa toimeksiannon, päättää lisenssistä ja oppilaitoksen linjasta julkaisemisessa, tarkistaa laadun ja antaa palautetta katselmoinneissa. Ei ole paketin käyttäjä."],
        ["Vertaistestaaja", "Kokeilee väliversion (vko 41) ja asentaa julkaistun paketin ohjeen avulla (vkot 47–48)."],
        ["Lataaja", "Kuka tahansa, joka lataa paketin julkaisun jälkeen. Dokumentaatio kirjoitetaan hänelle."]
      ],
      tarkistuspisteet: [
        [34, "Toimeksianto ja lisenssi", "Kysymykset, kohdeyleisö, sovittu Minecraft-versio ja lisenssi, julkisen repositoryn yksityisyys ja tekijänimi"],
        [35, "Rajaus", "P0-rajaus, moodboard, backlog ja LICENSE-tiedosto repositoryn juuressa"],
        [41, "Väliversion katselmointi", "Asennusohje toimii ilman apua, palaute kirjattu erillään omasta tulkinnasta, yksi muutos sovittu"],
        [46, "Laatukatselmointi", "Rakenne, LICENSE ja CREDITS, lisenssin ymmärrys, selitys omasta ja tekoälyavusteisesta ratkaisusta"],
        [47, "RC1", "Sisältöjäädytys, kahden testaajan asennus ohjeella, palautteen luokittelu"],
        [49, "Luovutus", "Näyttömatriisin täsmälinkit, projektipäiväkirja, AI-loki, demo ja jäädytetty v1.0"]
      ],
      tyonaytteet: {
        p1: ["34, 38", "Kuva paketista pelin valikossa, Blockbench-projektitiedosto ja julkisen repositoryn linkki"],
        p2: ["45", "Kolme täydellistä virheenkorjausketjua: havainto, syy, korjauscommit ja uusintatesti"],
        p3: ["45", "Testimatriisi T01–T12 lähtötiloineen, odotuksineen ja tuloksineen"],
        p4: ["43, 44", "Datapaketin funktiot omassa nimiavaruudessa, reseptit erillisinä tiedostoina, advancement kutsuu palkintofunktiota"],
        p5: ["46", "Siivouscommit: selkeät tiedostonimet, siisti JSON, poistetut kuolleet viittaukset"],
        p6: ["36, 37", "Pelinäkymän luettavuus: tekstuurien ja suomenkielisten nimien ennen/jälkeen-kuvat"],
        p7: ["36–44", "Assetit 1–7 issueina, valmis kun -ehtoina ja committeina"],
        p8: ["35, 41", "Priorisoitu backlog hyväksyntöineen ja katselmoinnissa sovittu muutostehtävä"],
        p9: ["39", "Kahden toteutusvaihtoehdon vertailumuistio ja perusteltu päätös"],
        p10: ["41, 46", "Katselmointilokit: palaute, oma tulkinta, päätös ja vastaus kommentteihin"],
        p11: ["49", "Itsearviointi: kolme vahvuutta työnäytteineen ja yksi kehitysaskel"],
        s1: ["34", "Kysymyslista ohjaajalle vastauksineen, kahden julkaistun paketin vertailu ja kuvaus omasta kohdeyleisöstä"],
        s2: ["41, 47, 48", "Lataajalle kirjoitettu asennusohje, jonka ulkopuolinen läpäisee ilman apua; 5–10 min esittely ja julkaisuteksti"],
        s3: ["41, 47", "Väliversion ja RC1:n katselmointilokit osallistujineen"],
        s4: ["35, 41, 43", "P0/P1/P2-backlog ennen ja jälkeen palautteen"],
        s5: ["35", "Issuet, joiden työmäärä on 0,5–1 päivää, hyväksymisehtoineen"],
        s6: ["35, 43", "Työmääräarvio verrattuna toteumaan"],
        s7: ["44", "Reseptit, palkintofunktio ja saavutus laukaisimineen, testattuna selviytymistilassa"],
        s8: ["37, 44", "JSON-rakenteiden valinta ja perustelu: lang, reseptit, advancement"],
        s9: ["36–38, 40", "Tekstuurien, mallien ja äänten kytkentä pelin resursseihin nimiavaruuksien kautta"],
        s10: ["34, 43", "Pakettirajapinta: pack.mcmeta, tiedostopolut ja load.json niitä vastaavine tiedostoineen"],
        s11: ["34, 46", "Julkisen repositoryn yksityisyystarkistus, oma LICENSE ja kolmansien osapuolten lisenssit CREDITSissä"],
        s12: ["34–49", "Jatkuva Git-historia ja toimiva main koko projektin ajan"],
        s13: ["43", "Feature-branch ja testattu merge tai pull request"],
        s14: ["48", "Julkinen GitHub-release v1.0 zip-paketteineen ja LICENSEineen"],
        k1: ["34, 38", "Blockbench, VS Code, sovittu Minecraft-versio ja paketin lataus peliin"],
        k2: ["45, 48", "Kirjaus pakettijärjestelmän rajoituksista ja julkaisupäätökset tunnettuine puutteineen"],
        k3: ["38, 39", "Blockbenchin mallinnus ja UV-teksturointi committeina ja kuvina"],
        k4: ["35, 40", "Paletit, äänet ja referenssit lähteineen ja lisensseineen CREDITSissä"],
        k5: ["35–45", "Asset-pack-suunnitelma, assetit 1–7 committeina ja testiloki T01–T12"],
        k6: ["48", "Ulkopuolinen henkilö on asentanut julkaistun v1.0:n release-sivulta pelkän ohjeen avulla (tehtävä 48-4)"],
        k7: ["46, 48, 49", "Lataajalle: README, asennusohje, LICENSE, CREDITS ja CHANGELOG. Arviointiin: asset-pack-suunnitelma.md ja projektipäiväkirja"]
      },
      dokumentaatio: {
        kayttajalle: "README, asennusohje, LICENSE, CREDITS, CHANGELOG ja julkaisuteksti releasessa.",
        arviointiin: "Asset-pack-suunnitelma (project-docs/asset-pack-suunnitelma.md), projektipäiväkirja, AI-loki, testimatriisi ja näyttömatriisin täsmälinkit.",
        vaatimus: "Asennusohjeen vaatimus on kova: ulkopuolinen henkilö asentaa paketin pelkän ohjeen avulla ilman suullista apua (vkot 41, 47 ja 48). Tämä on samalla asiakaslähtöisen viestinnän työnäyte."
      },
      tekoaly: [
        "Tekoäly on sallittu apuväline ideointiin, selityksiin, JSON- ja komentovirheiden tutkimiseen ja testitapausten ehdottamiseen. Tekstuurit, mallit ja äänet opiskelija tekee itse tai hankkii lisenssillä, joka sallii uudelleenjulkaisun. P0-ydinsisältö piirretään aina itse; P1/P2-lisäsisällössä tekoäly käy vain opettajan erillisellä luvalla.",
        "Merkittävä tekoälyapu kirjataan AI-lokiin: työkalu, kysymys, mitä käytettiin tai hylättiin, miten tarkistettiin ja aineistoviite. Viikolla 46 opiskelija selittää katselmoijalle yhden oman ja yhden tekoälyavusteisen ratkaisun omin sanoin."
      ],
      palautuspaketti: [
        ["Julkaistu paketti", "Julkinen GitHub-release v1.0: resurssipaketti- ja datapakettizipit, LICENSE, CREDITS, CHANGELOG ja asennusohje"],
        ["Repository", "Julkinen repository jatkuvalla Git-historialla ja toimivalla main-haaralla"],
        ["Projektipäiväkirja", "project-docs/projektipaivakirja.md, kaikki 15 viikkoa kirjattuina"],
        ["Näyttömatriisi", "32 arviointikohdetta täsmälinkeillä työnäytteisiin"],
        ["Demo", "8–10 minuuttia: paketti pelissä, yksi tekninen ratkaisu, yksi korjattu bugi, Git-historia ja tekoälyn käyttö"]
      ],
      huomiot: [
        ["Rakenteinen ohjelmointi ilman ohjelmointikieltä", "Vaatimus todennetaan datapaketin rakenteesta: funktiot omassa nimiavaruudessa, reseptit ja advancement erillisinä tiedostoina, ja advancement kutsuu palkintofunktiota. Vastuiden jako ja nimeäminen ovat arvioitavissa samoin kuin koodissa."],
        ["Julkinen repository ja alaikäisyys", "Julkisuudesta ja tekijänimestä sovitaan viikolla 34, alaikäisellä myös huoltajan kanssa. Sivusto ohjeistaa, mitä julkiseen repositoryyn ei laiteta, ja muistuttaa Git-historian pysyvyydestä."],
        ["Lisenssi on ohjaajan päätös", "Opiskelija ei päätä lisenssiä yksin. Viikolla 46 hän osoittaa ymmärtäneensä valinnan vastaamalla oman LICENSE-tiedostonsa tekstin perusteella, mitä muut saavat paketilla tehdä."],
        ["Tekoälyn kestävyys", "Jokainen viikko vaatii oman konkreettisen kontekstin, havainnoitavan artefaktin tai nimetyn ihmisen osallistumisen. Yhtäkään viikkoa ei voi kuitata kopioimalla tehtävänanto kielimalliin."],
        ["Valinnainen julkinen jakelu", "Modrinth tai Planet Minecraft on bonus, ei vaatimus. Tili luodaan opettajan ja huoltajan kanssa sovitusti."]
      ]
    }
  }
};
