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
  yhtenaisetViikot: true,
  aloitusNappi: "Aloita paketin rakentaminen",
  apuOtsikko: "Tarvitsen toteutusapua pakettiin",

  /* ---- käyttäjän työnkulku (moottori v2.6/v2.7) ----
   * Näkyy Projektin kokonaiskuva -näkymän alussa. Kuva on käsin kirjoitettu havainnekuva
   * (assets/tyonkulku.svg), ei kuvakaappaus: se näyttää, miten pelaaja käyttää valmista pakettia.
   * Numerot ovat kuvassa, joten kohdilla ei ole alue-kehyksiä.
   */
  lopputulos: {
    otsikko: "Mitä pelaaja tekee valmiilla paketilla?",
    kuvaus: "Valmis teemapaketti on julkinen GitHub-release, jonka kuka tahansa pelaaja lataa ja asentaa ohjeesi avulla. Asennuksen jälkeen peli näyttää ja kuulostaa teemaltasi, ja oma resepti avaa saavutuksen ja palkinnon.",
    /* Aloituksen johdanto kertoo saman, joten kuvauslause näkyy vain työpaketissa. */
    naytaKuvaus: false,
    kuva: "assets/tyonkulku.svg",
    leveys: 880,
    korkeus: 470,
    alt: "Havainnekuva pelaajan työnkulusta neljänä numeroituna vaiheena. 1: pelaaja lataa GitHub-releasesta kaksi zip-pakettia ja lukee README-ohjeen. 2: hän asentaa resurssipaketin pelin resourcepacks-kansioon, datapaketin maailman datapacks-kansioon ja vaihtaa pelin kieleksi suomen. 3: pelissä näkyvät omat tekstuurit, 3D-malli ja suomenkieliset nimet, ja paketin oma ääni kuuluu. 4: kun pelaaja valmistaa teemasi reseptin työpöydällä, saavutus laukeaa ja palkintofunktio antaa palkinnon. Alarivillä kerrotaan, että LICENSE ja CREDITS kertovat, mitä toinen tekijä saa paketilla tehdä.",
    kohdat: [
      { n: 1, teksti: "Pelaaja löytää paketin julkisesta GitHub-releasesta ja lataa kaksi zip-pakettia. README kertoo peliversion, lisenssin ja asennuksen." },
      { n: 2, teksti: "Hän asentaa resurssipaketin pelin resourcepacks-kansioon ja datapaketin maailman datapacks-kansioon pelkän ohjeesi avulla." },
      { n: 3, teksti: "Pelissä näkyvät omat tekstuurit, 3D-mallit ja suomenkieliset nimet, ja paketin oma ääni kuuluu." },
      { n: 4, teksti: "Kun pelaaja valmistaa teemasi reseptin, saavutus laukeaa ja palkintofunktio antaa palkinnon. LICENSE ja CREDITS kertovat, mitä toinen tekijä saa paketilla tehdä." }
    ]
  },

  paletti: {
    aksentti: "#2e7d32",
    aksenttiTumma: "#1b5e20",
    taulukkoSavy: "#e8f5e9",
    riviSavy: "#f1f8e9"
  },

  /* ---- paperiaineiston kielisäädöt (moottori v2.7) ---- */
  lataukset: {
    aloitusHuomio: "Viikon työvaihe on tämän sivuston työohje. Yhden assetin tai muutoksen teet Työtapa-sivun asset-työkierrolla, ja sen arvio ja Valmis kun -ehto ovat GitHub-issuessa. Testien tulokset ja päätökset kirjaat projektipäiväkirjaan, ja valmiin issuen kommenttiin lisäät commit-linkin."
  },

  /* ---- vaiheet (moottori v2.7: numeroidut vaiheet, kuvaus näkyy aloituksessa ja vaihekuvassa) ----
   * Viikot ja loma ovat ennallaan. Vanhat A–D-vaiheet ryhmiteltiin tulosten mukaan uudelleen 30.9.2026.
   */
  vaiheet: [
    { tunnus: "1", lyhyt: "Valmistelu", otsikko: "Valmistelu ja rajaus", kuvaus: "Selvität toimeksiannon, teet tyhjän paketin, joka näkyy pelissä, ja perustat julkisen repositoryn. Asset-pack-suunnitelma, lisenssi ja GitHub-issueiksi pilkottu sisältö rajaavat paketin ennen ensimmäistä pikseliä.", kuvassa: ["Kysymykset → tyhjä paketti → repository → suunnitelma", "Rajaus on hyväksytty ja tyhjä paketti näkyy pelissä."], viikot: [34, 35], vari: "#8d5a2b" },
    { tunnus: "2", lyhyt: "Paketin ilme", otsikko: "Paketin ilme ja ääni", kuvaus: "Piirrät blokki- ja esinetekstuurit, annat sisällölle omat nimet, mallinnat Blockbenchillä ja lisäät äänen. Jokainen asset kulkee saman asset-työkierron läpi, ja resurssipaketti on koossa ennen katselmointia.", kuvassa: ["Tekstuurit → nimet → mallit → ääni", "Peli näyttää ja kuulostaa sinun teemaltasi."], viikot: [36, 37, 38, 39, 40], vari: "#1a6fae" },
    { tunnus: "3", lyhyt: "Palaute ja datapaketti", otsikko: "Palaute ja pelillinen lisä", kuvaus: "Testaajat kokeilevat väliversiota, ja teet heidän palautteestaan sovitun muutoksen omassa haarassa. Datapaketti tuo reseptin, saavutuksen ja palkintofunktion, joten paketin koko pakollinen sisältö on valmis.", kuvassa: ["Väliversio testiin → palautemuutos → datapaketti", "Resepti avaa saavutuksen: pakollinen sisältö on koossa."], viikot: [41, 42, 43, 44], vari: "#c03434" },
    { tunnus: "4", lyhyt: "Testaus ja laatu", otsikko: "Testaus ja laatu", kuvaus: "Testaat koko paketin kirjatuilla testitapauksilla, korjaat kolme virhettä ketjuna ja siistit rakenteen. Lisenssi ja lähteet tarkistetaan, jotta paketin saa julkaista avoimena.", kuvassa: ["Testitapaukset → korjausketjut → rakenne ja lisenssi", "Paketti kestää käyttöä, ja sen saa julkaista."], viikot: [45, 46], vari: "#7c3aed" },
    { tunnus: "5", lyhyt: "Julkaisu ja näyttö", otsikko: "Julkaisu ja näyttö", kuvaus: "Kaksi testaajaa asentaa julkaisuehdokkaan pelkän ohjeen avulla, ja v1.0 julkaistaan GitHub-releasena. Lopuksi kokoat näyttöaineiston ja esittelet työsi demossa.", kuvassa: ["Julkaisuehdokas → v1.0-release → näyttö", "Kuka tahansa voi ladata ja asentaa paketin."], viikot: [47, 48, 49], vari: "#0f766e" }
  ],
  poikkeamat: {
    vaiheita: "viisi vaihetta: toimeksiannon vaatima väliversion katselmointi ja pelillinen lisä (datapaketti) muodostavat oman vaiheensa resurssipaketin ja laatuviikkojen välissä; neljällä vaiheella katselmointi hukkuisi ilmeen tai laadun alle"
  },
  vaihekuva: {
    kuva: "assets/projektin-vaiheet.svg", leveys: 880, korkeus: 874,
    alt: "BittiBiomin viisi vaihetta: 1 valmistelu ja rajaus viikoilla 34–35, 2 paketin ilme ja ääni viikoilla 36–40, 3 palaute ja pelillinen lisä viikoilla 41–44, jonka keskellä on syysloma viikolla 42, 4 testaus ja laatu viikoilla 45–46 sekä 5 julkaisu ja näyttö viikoilla 47–49."
  },
  vaiheetJohdanto: "Ensin rajaat paketin ja varmistat, että tyhjä paketti toimii pelissä. Sitten rakennat paketin ilmeen asset kerrallaan, koska testaajat tarvitsevat viikon 41 väliversioon näkyvää sisältöä. Palautteen jälkeen lisäät datapaketin, testaat kokonaisuuden ja julkaiset vasta, kun ulkopuolinen saa paketin asennettua pelkän ohjeen avulla.",
  vaiheetHuomio: "Syysloma on viikolla 42: silloin ei tehdä projektityötä, ja viikolla 43 jatkat viimeisimmästä toimivasta versiosta. Aloituskeskustelu ohjaajan kanssa on viikolla 34, katselmoinnit viikoilla 41 ja 46, julkaisuehdokkaan testaus viikolla 47 ja luovutus viimeistään pe 4.12.2026.",

  /* ---- opiskelijalle näkyvä työn tasojen nimeäminen (moottori v2.7) ----
   * Työvaihe = tämän sivun viikko-ohjeen kohta. GitHub-issue = yksi asset tai muutos repositoryssa.
   * Asset-työkierto = Työtapa-sivun kuusi askelta, joilla yksi issue tehdään valmiiksi.
   */
  tekstit: {
    goalListLabel: "Pelaajan työnkulku",
    goalNote: "Havainnekuva näyttää pelaajan työnkulun. Se ei ole kuvakaappaus valmiista paketista.",
    taskWords: "Sanat tässä työvaiheessa",
    tasksLead: "Tee työvaiheet järjestyksessä. Ensimmäinen keskeneräinen työvaihe on auki. Rastita osatehtävä heti, kun olet tehnyt sen. Kun teet assetin tai muutoksen pakettiin, käytä Työtapa-sivun asset-työkiertoa ja kuittaa valmis työ sen GitHub-issueen."
  },

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

  /* Sanasto: vain tämän projektin oikeasti käyttämät termit. Renderöidään
     Termit-näkymään ja viikkojen "Uudet termit" -laatikoihin. Termit, jotka
     tulevat ensimmäisen kerran vastaan aloitussivuilla (Näin käytät sivua,
     Toimeksianto, Työtapa, Suunnitelma), ovat ilman viikkoa. */
  termisto: [
    { termi: "asset", nimi: "Paketin osa", selite: "Pelissä näkyvä tai kuuluva paketin osa: tekstuuri, 3D-malli, ääni tai skriptattu lisä. Tämä projekti etenee yksi asset kerrallaan." },
    { termi: "asset pack", nimi: "Assettien kokoelma", selite: "Assettien kokoelma, joka asennetaan peliin yhtenä pakettina. Tässä projektissa asset pack tarkoittaa resurssipakettia ja datapakettia yhdessä." },
    { termi: "resurssipaketti", nimi: "Resource pack", selite: "Paketin osa, joka muuttaa sitä, miltä peli näyttää ja kuulostaa: tekstuurit, mallit, äänet ja nimet. Kansion nimi levyllä on resourcepack." },
    { termi: "datapaketti", nimi: "Data pack", selite: "Paketin osa, joka lisää peliin sääntöjä: reseptit, saavutukset ja funktiot. Kansion nimi levyllä on datapack." },
    { termi: "pack.mcmeta", nimi: "Paketin käyntikortti", selite: "Pieni JSON-tiedosto paketin juuressa. Se kertoo pelille paketin kuvauksen ja pack_format-arvon. Ilman sitä peli ei tunnista pakettia." },
    { termi: "pack_format", nimi: "Paketin versionumero", selite: "Numero pack.mcmeta-tiedostossa. Se kertoo pelille, mille Minecraft-versiolle paketti on tehty. Resurssipaketilla ja datapaketilla on eri arvo samalle peliversiolle." },
    { termi: "mcfunction", nimi: "Komentotiedosto", selite: "Tekstitiedosto, jossa on pelin omia komentoja rivi riviltä. Peli ajaa rivit järjestyksessä /function-komennolla. Tämän projektin skriptaus tehdään näin, ei ohjelmointikielellä." },
    { termi: "JSON", nimi: "Tekstimuotoinen määrittely", selite: "Yksinkertainen tekstimuoto, jolla paketin määrittelyt kirjoitetaan: kielitiedosto, mallit, reseptit ja saavutukset. Pilkku tai lainausmerkki väärässä paikassa rikkoo koko tiedoston." },
    { termi: "nimiavaruus", nimi: "Paketin oma lokero", selite: "Kansio, jonka nimi on paketin oma nimi. Sen sisällä ovat sinun tiedostosi. Se erottaa oman sisällön pelin omasta sisällöstä, esimerkiksi teema:kyla.kello.", viikko: 40 },
    { termi: "repository", nimi: "Projektin varasto GitHubissa", selite: "Projektin koko tiedosto- ja versiohistoria GitHubissa. Tämän projektin repository on julkinen ensimmäisestä commitista asti." },
    { termi: "commit", nimi: "Tallennettu muutos", selite: "Yksi Gitiin tallennettu muutos, jolla on oma viesti ja tunniste. Commit-linkki on tämän projektin tavallisin työnäyte." },
    { termi: "push", nimi: "Lähetys GitHubiin", selite: "Omalla koneella tehtyjen committien lähettäminen GitHubiin. Ennen ensimmäistä pushia tarkistetaan, ettei mukana ole henkilötietoja – Git-historia on pysyvä.", viikko: 34 },
    { termi: "GitHub-issue", nimi: "Yksi asset tai muutos repositoryssa", selite: "Repositoryn Issues-listaan kirjattu yksi rajattu työ, esimerkiksi ”Piirrä kolme blokkitekstuuria”: otsikko, arvio, prioriteetti ja Valmis kun -ehto. Yksi issue on noin puolen tai yhden päivän työ. Issue ei ole sama kuin sivun työvaihe: yksi työvaihe voi koskea useaa issueta." },
    { termi: "asset-työkierto", nimi: "Yhden assetin työtapa", selite: "Työtapa-sivun kuusi askelta, joilla teet yhden assetin tai issuen valmiiksi: valitse, suunnittele, toteuta, testaa pelissä, tallenna commitiksi ja kirjaa. Viikon työvaiheet kertovat, mitä teet; kierto kertoo, miten teet jokaisen assetin." },
    { termi: "haara", nimi: "Branch", selite: "Rinnakkainen kopio projektista, jossa yksi muutos tehdään rauhassa valmiiksi. Main-haara pysyy koko ajan toimivana.", viikko: 43 },
    { termi: "merge", nimi: "Haarojen yhdistäminen", selite: "Haaran muutosten yhdistäminen takaisin main-haaraan. Merge tehdään vasta, kun muutos on testattu.", viikko: 43 },
    { termi: "pull request", nimi: "Pyyntö yhdistää haara", selite: "GitHubin tapa tehdä merge: pyyntö yhdistää haara main-haaraan. Pyynnössä muutokset voi lukea läpi ja kommentoida ennen hyväksymistä.", viikko: 43 },
    { termi: "tagi", nimi: "Version nimilappu", selite: "Gitin nimilappu, joka kiinnitetään yhteen committiin, esimerkiksi v1.0. Tagi kertoo, mikä versio julkaistiin.", viikko: 48 },
    { termi: "GitHub-release", nimi: "Julkaistu versio", selite: "GitHubissa julkaistu versio, jonka kuka tahansa voi ladata. Tässä projektissa releaseen liitetään zip-paketit, asennusohje ja kuvat." },
    { termi: "P0", nimi: "Pakollinen ydin", selite: "Pakollinen (P0) on sisältö, jonka on valmistuttava ennen mitään lisäsisältöä. Tämän projektin pakollinen sisältö on 5 tekstuuria (3 blokkia ja 2 esinettä), omat nimet, 1 Blockbench-malli, 1 isompi malli tai mobin uusi ilme, 1 resepti, 1 saavutus ja 1 palkintofunktio.", viikko: 35 },
    { termi: "P1", nimi: "Tärkeä jatkosisältö", selite: "Sisältö, joka tehdään vasta, kun P0 toimii. P1 on tärkeää mutta ei estä julkaisua." },
    { termi: "P2", nimi: "Valinnainen lisä", selite: "Sisältö, joka voidaan jättää kokonaan pois, jos aika loppuu. P2 ei vaikuta näytön läpimenoon." },
    { termi: "T01", nimi: "Testitapauksen tunnus", selite: "T tarkoittaa testitapausta ja numero sen järjestystä: T01 on ensimmäinen testitapaus, T02 toinen. Tunnukset T01–T12 annetaan viikon 45 testaustaulukossa. Viikkojen omat testit ovat vain testi 1, testi 2 ja niin edelleen.", viikko: 45 },
    { termi: "UV-kartta", nimi: "Tekstuurin ja mallin pintojen vastaavuus", selite: "UV-kartta kertoo, mikä kohta tekstuurikuvasta piirtyy mihinkin mallin pintaan. Blockbench tekee sen puolestasi, kun maalaat Paint-tilassa.", viikko: 38 },
    { termi: "mobi", nimi: "Pelin hahmo tai eläin", selite: "Mobi on Minecraftin liikkuva olento, esimerkiksi creeper, lehmä tai kyläläinen. Mobin ilmeen voi muuttaa piirtämällä sille uuden tekstuurin.", viikko: 39 },
    { termi: "vertainen", nimi: "Toinen opiskelija", selite: "Vertainen on toinen opiskelija, joka keskustelee kanssasi, testaa pakettiasi tai katselmoi työtäsi.", viikko: 39 },
    { termi: "CREDITS", nimi: "Lähdeluettelo", selite: "CREDITS.md on repositoryn juuressa oleva luettelo kaikesta, mitä pakettiin on tuotu muualta: tekijä, lähde ja lisenssi. Jos kaikki on itse tehtyä, CREDITS kertoo senkin.", viikko: 40 },
    { termi: "katselmointi", nimi: "Työn yhteinen tarkastus", selite: "Katselmoinnissa toinen ihminen kokeilee pakettia tai käy sen rakenteen läpi ja antaa palautetta. Viikolla 41 testaajat katselmoivat väliversion, viikolla 46 ohjaaja tai vertainen katselmoi rakenteen.", viikko: 41 },
    { termi: "advancement", nimi: "Saavutus", selite: "Advancement eli saavutus on datapaketin JSON-tiedosto. Se näyttää pelaajalle ilmoituksen, kun hän tekee jotain tiettyä, ja voi ajaa palkintofunktion.", viikko: 44 },
    { termi: "regressiotesti", nimi: "Vanhan toiminnan uusintatesti", selite: "Regressiotesti on toinen testitapaus, joka koskee samaa tiedostoa kuin korjaus. Kun se menee läpi, tiedät, ettei korjaus rikkonut muuta.", viikko: 45 },
    { termi: "RC", nimi: "Release candidate, julkaisuehdokas", selite: "Lähes valmis versio, jota testataan sellaisena kuin se aiotaan julkaista. RC1 on ensimmäinen julkaisuehdokas. Siihen ei enää lisätä uutta sisältöä.", viikko: 47 },
    { termi: "backlog", nimi: "Priorisoitu issue-lista", selite: "Repositoryn kaikki tekemättömät GitHub-issuet tärkeysjärjestyksessä. Jokaisella issuella on prioriteetti (P0, P1 tai P2), työmääräarvio ja Valmis kun -ehto.", viikko: 35 },
    { termi: "moodboard", nimi: "Ilmeen kuvakollaasi", selite: "Kooste väripaletista ja referenssikuvista, joka lukitsee paketin ilmeen ennen pikselityötä. Moodboardiin palataan aina, kun mietit, sopiiko uusi asset teemaan.", viikko: 35 },
    { termi: "CC", nimi: "Creative Commons", selite: "Lisenssiperhe kuville, äänille ja muulle sisällölle. CC BY vaatii tekijän mainitsemisen. CC BY-SA vaatii lisäksi, että muokatut versiot julkaistaan samalla lisenssillä. CC0 luovuttaa työn vapaaseen käyttöön." },
    { termi: "MIT", nimi: "MIT-lisenssi", selite: "Yleinen ja salliva ohjelmistolisenssi. Sopii datapaketin skripteille: muut saavat käyttää ja muokata koodia, kunhan lisenssiteksti pysyy mukana." }
  ],

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
      work: "Kerro konkreettiset tiedostot, tekstuurit, komennot, GitHub-issuet ja testit.",
      reason: "Kerro päätös, vaihtoehdot, perustelu ja mitä opit.",
      evidence: "Esim. commit-linkki, GitHub-issue #12, testitapaus T05 tai project-docs/evidence/week-N/kuva.png."
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
        "Merkinnät: **vaatimus** tulee toimeksiannosta, eikä sitä muuteta · **sovittu toteutustapa** on lukittu projektin alussa · **ehdotus** on oletus, josta voit poiketa perustellusti · **oma päätös** on sinun päätöksesi perusteluineen · **ohjaaja** = sovitaan ohjaajan kanssa.",
        "",
        "## 1. Konsepti (vaatimus)",
        "",
        "Avoimella lisenssillä julkaistava teemapaketti Minecraft Java Editioniin: resurssipaketti muuttaa pelin ilmettä ja datapaketti lisää reseptit, saavutuksen ja funktiot.",
        "",
        "## 2. Teema ja kohde omin sanoin (oma päätös)",
        "",
        arvo("goal"),
        "",
        "## 3. Asset-työkierto (sovittu työtapa)",
        "",
        "Luonnos → Blockbench tai Piskel → pakettiin → peliin → testi → commit.",
        "",
        "## 4. Omat suunnittelupäätökset (oma päätös)",
        "",
        `- **Tekstuuriresoluutio:** ${arvo("resolution")}`,
        `- **Väripaletti ja työkalut:** ${arvo("palette")}`,
        `- **Pakollinen sisältö (P0):** vähintään ${arvo("minTextures", "_?_")} tekstuuria ja ${arvo("minModels", "_?_")} Blockbench-malli (oma päätös, vähintään toimeksiannon minimi) sekä vaatimuksena isompi malli tai mobin uusi ilme, omat nimet, 1 resepti, 1 saavutus ja 1 palkintofunktio`,
        "",
        "### Perustelut",
        "",
        arvo("reasoning"),
        "",
        "## 5. Ohjaajan kanssa sovittavat asiat (ohjaaja)",
        "",
        `- ${versionLine}`,
        `- ${licenseLine}`,
        "- Mitä oppilaitos sallii julkisessa julkaisemisessa: tekijänimi, kuvat ja jakelupalvelut? – kirjaa vastaus tai jätä avoimeksi",
        "- Julkaistaanko paketti myös Modrinthissa tai Planet Minecraftissa, ja kuka luo tilin? – kirjaa vastaus tai jätä avoimeksi",
        "- Kuka hyväksyy rajauksen ja väliversion? – kirjaa vastaus tai jätä avoimeksi",
        "",
        "## 6. Assetit tekojärjestyksessä (ehdotus: viikkoaikataulun järjestys)",
        "",
        "1. Ensimmäiset blokkitekstuurit (vko 36)",
        "2. Esinetekstuurit ja omat nimet (vko 37)",
        "3. Ensimmäinen Blockbench-malli (vko 38)",
        "4. Isompi malli tai hahmon uusi ilme (vko 39)",
        "5. Äänet ja tunnelma (vko 40)",
        "6. Testaajan toivoma parannus + datapaketin runko (vko 43 – sisältö selviää katselmoinnissa vkolla 41)",
        "7. Skriptattu ominaisuus: reseptit, funktio ja saavutus (vko 44)",
        "",
        "Huomautus: tämä lista ei ole valmis suunnitelma. Assettien pilkkominen pieniksi GitHub-issueiksi ja niiden priorisointi on oma päätöksesi (viikon 35 työvaihe 3): pakollinen (P0), tärkeä (P1) tai lisä (P2).",
        "",
        "## 7. Teknologia (sovittu toteutustapa)",
        "",
        "Minecraft Java Edition, resurssipaketti + datapaketti, Blockbench-mallit, skriptaus mcfunction-komennoilla ja JSON-tiedostoilla, julkaisu julkisena GitHub-releasena avoimella lisenssillä. Ehdotus: Piskel tekstuureille ja Audacity äänille. Oma työkaluvalinta kirjataan kohtaan 4.",
        "",
        "## 8. Rajaus – mitä ei tehdä (vaatimus)",
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

  /* ---- viikkojen ohjaava sisältö (moottori v2.5 + v2.7 yhtenäiset viikot) ----
     Jokainen index.html:n tehtävärivi (data-task) on työvaihe, jonka sisältö on
     tehtavat-objektissa samalla tunnuksella. perii = vanhan tehtävän tunnus, jonka rasti
     siirtyy osatehtäviin kerran (syksy 2026).
     KÄYNNISSÄ OLEVA PROJEKTI: osatehtävien rastit tallentuvat osan järjestysnumerolla.
     Älä poista, järjestä uudelleen tai lisää väliin osatehtäviä; uusi osa vain loppuun.
     Viikkojen 34–39 osat ovat ennallaan (merkkijonoja), viikoista 40 alkaen osilla on otsikko. */
  viikkoOhjeet: {
    34: {
      type: "pohjustus",
      termit: ["pack.mcmeta", "pack_format", "push", "repository", "commit"],
      feature: "Oma tyhjä paketti näkyy pelin Resource Packs -valikossa omalla kuvallaan, ja julkinen repository on perustettu.",
      connection: "Tämä on projektin ensimmäinen viikko, joten pohjana on vain toimeksianto. Selvität ohjaajalta, mille peliversiolle ja kenelle paketti tehdään, ja teet tyhjän paketin, joka näkyy pelissä. Kun kansiorakenne ja pack_format toimivat nyt, jokainen tuleva asset voidaan viedä samaan pakettiin ja testata heti.",
      deliverable: "Kysymykset ja ohjaajan vastaukset, yhden julkaistun paketin tutkimus, pelin valikossa näkyvä tyhjä resurssipaketti ja julkinen Git-repository.",
      why: "Jos avoimet asiat jäävät oletuksiksi, voit rakentaa väärän paketin. Varhainen pakettitesti varmistaa, että pack_format-arvo ja kansiorakenne toimivat ennen varsinaista asset-työtä.",
      done: "Ohjaajan vastaukset ja avoimet asiat ovat päiväkirjassa, tyhjä paketti näkyy pelin pakettivalikossa ja ensimmäinen commit näkyy GitHubissa.",
      record: "Kirjoita Vko 34 -merkintään keskustelun päivä, osallistujien roolit, kuusi kysymystä vastauksineen ja avoimet asiat. Lisää tutkitun paketin havainnot, oma kohdeyleisö, sovittu Minecraft-versio, ensimmäisen commitin tunniste ja kuvan polku. Rastita lopuksi Näyttömatriisi-näkymässä kohdat Kehitysympäristö, Asiakkaan tarpeet ja Kehittämisympäristön käyttöönotto.",
      skills: ["toimeksianto", "pakettirunko", "Git"],
      tehtavat: {
        "34-1": {
          perii: ["34-1"],
          miksi: "Toimeksianto ei kerro kaikkea. Kysymyksillä selvität, millainen paketti oikeasti tehdään, ennen kuin piirrät yhtään pikseliä.",
          osat: [
            "Avaa sivun Toimeksianto-näkymä ja lue teksti kerran alusta loppuun.",
            "Kirjoita muistiin jokainen asia, joka paketissa on pakko olla, esimerkiksi omat tekstuurit, 3D-malli ja omat nimet.",
            "Kirjoita muistiin asiat, joita teksti ei kerro. Esimerkiksi: mille Minecraft-versiolle paketti tehdään?",
            "Kirjoita kuusi kysymystä ohjaajalle. Jokaisen vastauksen pitää auttaa sinua päättämään jotain paketista.",
            "Kirjoita jokaisen kysymyksen perään, mitä päätät vastauksen perusteella."
          ],
          valmis: "Sinulla on kuusi erilaista kysymystä, ja jokaisen perässä lukee, mitä päätät vastauksen perusteella.",
          tallenna: "Kysymyslista viikon 34 päiväkirjaan, kenttään Mitä tein ja miten?",
          esimerkki: "Kysymys: Mille Minecraft-versiolle paketti tehdään? → Päätös: pack_format-arvo ja testiversio.",
          eiRiita: "Kuusi lähes samaa kysymystä tai tekoälyn tekemä valmis lista, jota et ole käynyt itse läpi."
        },
        "34-2": {
          perii: ["34-1"],
          miksi: "Ohjaaja on tämän projektin toimeksiantaja. Kun vastaukset on kirjattu, voit myöhemmin näyttää, mihin päätöksesi perustuvat.",
          osat: [
            "Sovi ohjaajan kanssa aloituskeskustelun aika.",
            "Kysy kysymykset yksi kerrallaan. Kirjoita vastaus heti ylös ohjaajan omin sanoin.",
            "Jos ohjaaja ei vielä tiedä vastausta, kirjoita kohtaan sana ”avoin”. Älä keksi vastausta itse tai tekoälyllä.",
            "Sovi, mille Minecraft Java -versiolle paketti tehdään. Kirjaa versio, esimerkiksi 1.21.8.",
            "Kirjaa päiväkirjaan keskustelun päivä ja osallistujien roolit. Älä kirjoita muiden ihmisten nimiä."
          ],
          valmis: "Päiväkirjassa on jokaiselle kuudelle kysymykselle joko ohjaajan vastaus tai merkintä ”avoin”, ja Minecraft-versio on kirjattu.",
          tallenna: "Vastaukset ja avoimet asiat viikon 34 päiväkirjaan.",
          eiRiita: "Itse keksityt vastaukset eivät osoita, että olet selvittänyt toimeksiannon."
        },
        "34-3": {
          perii: ["34-1"],
          miksi: "Kun katsot, mitä muut ovat jo tehneet, löydät oman paketin kohdeyleisön ja sen, mikä tekee paketistasi erilaisen.",
          osat: [
            "Avaa Modrinth tai Planet Minecraft ja etsi yksi julkaistu teemapaketti eli resurssipaketti, joka muuttaa pelin ilmettä yhden teeman mukaan.",
            "Kirjoita paketista kolme asiaa: kenelle se on tehty, mitä se sisältää ja millä lisenssillä se on julkaistu.",
            "Kirjoita yksi asia, jonka sinun pakettisi tekee toisin.",
            "Kirjoita yhdellä virkkeellä, kenelle oma pakettisi on tehty. Tämä on paketin kohdeyleisö."
          ],
          valmis: "Päiväkirjassa on linkki tutkittuun pakettiin, kolme havaintoa, yksi ero ja oman paketin kohdeyleisö.",
          tallenna: "Linkki ja havainnot viikon 34 päiväkirjaan.",
          eiRiita: "Tekoälyn yleinen kuvaus teemapaketeista ilman linkkiä oikeaan pakettiin."
        },
        "34-4": {
          perii: ["34-2"],
          miksi: "Kun tyhjä paketti näkyy pelissä heti alussa, tiedät jo ennen varsinaista työtä, että kansiorakenne ja versio toimivat.",
          osat: [
            "Asenna Blockbench, VS Code ja GitHub Desktop. Tarkista Minecraft Launcherista, että sovittu Minecraft Java -versio käynnistyy.",
            "Luo koneellesi kansio resourcepack. Tee sinne VS Codella tiedosto pack.mcmeta avun mallin mukaan.",
            "Tarkista Minecraft Wikin Pack format -sivulta, mikä pack_format-arvo kuuluu sovitulle versiolle. Kirjoita se pack.mcmeta-tiedostoon.",
            "Piirrä Piskelillä 64 × 64 pikselin kuva paketin kuvakkeeksi ja tallenna se resourcepack-kansioon nimellä pack.png.",
            "Avaa pelissä Options → Resource Packs → Open Pack Folder. Kopioi resourcepack-kansio sinne.",
            "Valitse paketti valikossa ja siirrä se nuolella Selected-puolelle. Ota kuvakaappaus valikosta."
          ],
          valmis: "Paketti näkyy pelin Resource Packs -valikossa omalla kuvalla ja kuvauksella, eikä peli varoita väärästä versiosta.",
          tallenna: "Kuvakaappaus valikosta. Viet sen työvaiheessa 5 polkuun project-docs/evidence/week-34/valikko.png.",
          sanat: ["pack.mcmeta", "pack_format"],
          apu: {
            title: "pack.mcmeta-malli",
            code: "{\n  \"pack\": {\n    \"pack_format\": 34,\n    \"description\": \"Kotikylä – oma teemapaketti\"\n  }\n}\n\npack_format 34 vastaa Java-versiota 1.21.\nTarkista sovitun version arvo Minecraft Wikin\nsivulta Pack format.",
            vinkit: [
              "Kirjoita kansioiden ja tiedostojen nimet pienillä kirjaimilla ilman ääkkösiä.",
              "Paketti näkyy valikossa ilman zippausta, kun kansio on resourcepacks-kansiossa.",
              "Versiosta 1.21.9 alkaen pack.mcmeta voi tarvita myös kentät min_format ja max_format. Tarkista sovitun version muoto Minecraft Wikin Pack format -sivulta."
            ],
            test: "Sulje peli ja avaa se uudelleen. Paketti näkyy yhä valikossa omalla kuvallaan.",
            links: [
              ["Minecraft Wiki: Pack format -taulukko", "https://minecraft.wiki/w/Pack_format"]
            ]
          }
        },
        "34-5": {
          perii: ["34-3"],
          miksi: "Repository eli koodivarasto on tässä projektissa julkinen alusta asti. Siksi tarkistat ensin, ettei sinne päädy mitään henkilökohtaista.",
          osat: [
            "Lue avun lista siitä, mitä julkiseen repositoryyn ei laiteta. Git-historia on pysyvä. Piilota sähköpostisi: GitHubissa Settings → Emails → Keep my email addresses private ja GitHub Desktopissa Options (Macissa Settings) → Git → Email-kohtaan noreply-osoite.",
            "Sovi ohjaajan kanssa, millä tekijänimellä julkaiset. Jos olet alaikäinen, sovi julkisesta repositorysta myös huoltajan kanssa.",
            "Luo GitHubiin uusi repository, valitse näkyvyydeksi Public ja valitse luontisivulla README-tiedoston lisäys (Add a README file). Kirjaudu GitHub Desktopiin ja kloonaa eli kopioi repository koneellesi: File → Clone repository.",
            "Siirrä resourcepack-kansio repositoryn kansioon. Luo sinne myös kansiot datapack ja project-docs.",
            "Lisää datapack-kansioon tiedosto README.md, jossa lukee ”Datapaketti tehdään viikolla 43.” Tiedosto tarvitaan, koska Git ei tallenna tyhjää kansiota.",
            "Kirjoita repositoryn juuren README.md-tiedostoon paketin nimi ja yksi virke siitä, mitä se tekee. Lisää valikon kuva polkuun project-docs/evidence/week-34/valikko.png.",
            "Tee commit ja push: kirjoita GitHub Desktopin Summary-kenttään ”Pakettirunko”, paina Commit to main ja sitten Push origin."
          ],
          valmis: "Julkinen repository näkyy GitHubissa, ja siinä ovat resourcepack, datapack, project-docs ja README.md. Henkilötietoja ei ole mukana.",
          tallenna: "Repositoryn linkki ja ensimmäisen commitin tunniste (7 merkin koodi GitHubin commit-listassa) viikon 34 päiväkirjaan.",
          sanat: ["repository", "commit", "push"],
          apu: {
            title: "Mitä julkiseen repositoryyn ei laiteta",
            tree: "teemapaketti/ (julkinen repository)\n├─ resourcepack/\n│  ├─ pack.mcmeta\n│  └─ pack.png\n├─ datapack/\n│  └─ README.md       (datapaketti viikolla 43)\n├─ project-docs/\n│  └─ evidence/week-34/valikko.png\n└─ README.md",
            code: "EI JULKISEEN REPOSITORYYN\n[ ] oma tai muiden oikea nimi, jos sitä ei ole sovittu\n[ ] kotiosoite, puhelinnumero, sähköposti\n[ ] koulun tai luokan tunnisteet\n[ ] muiden käyttäjänimet kuvakaappauksissa\n[ ] salasanat ja kirjautumistiedot",
            vinkit: [
              "Pelin resourcepacks-kansio on pelin oma. Työkansiosi on repositoryn resourcepack-kansio: kun testaat, kopioit sen pelin kansioon. Viikosta 43 alkaen datapack-kansio kopioidaan samalla tavalla testimaailman datapacks-kansioon."
            ]
          }
        }
      },
      paivat: [
        ["Kysymykset", "Työvaihe 1: lue toimeksianto ja kirjoita kuusi kysymystä."],
        ["Keskustelu", "Työvaiheet 2 ja 3: aloituskeskustelu ja yhden julkaistun paketin tutkiminen."],
        ["Pakettirunko", "Työvaihe 4: asenna työkalut ja luo tyhjä resurssipaketti."],
        ["Repository", "Työvaihe 5: turvallisuustarkistus, julkinen repository ja ensimmäinen commit."],
        ["Kirjaus", "Täydennä päiväkirja, lataa se ja vie se project-docs-kansioon."]
      ]
    },

    35: {
      type: "pohjustus",
      termit: ["asset", "backlog", "moodboard", "P0", "P1", "P2", "GitHub-issue", "CC", "MIT"],
      feature: "Ohjaaja hyväksyy paketin rajauksen: jokainen pakollinen asset on GitHubissa omana issuenaan.",
      excerpt: "Paketti muuttaa pelin ilmettä valitun teeman mukaiseksi: siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
      connection: "Viikon 34 vastaukset ohjaajalta ovat suunnitelman pohja. Nyt päätät teeman, paletin ja lisenssin ja pilkot pakollisen sisällön GitHub-issueiksi. Hyväksytty rajaus kertoo jokaisena asset-viikkona, mitä teet seuraavaksi ja mistä voit luopua, jos aika loppuu.",
      deliverable: "Asset-pack-suunnitelma, sovittu lisenssi ja LICENSE-tiedosto, issue-lista GitHubissa, moodboard ja kaksi tekstuuriluonnosta.",
      why: "Rajaus estää pakettia kasvamasta liian suureksi. Kun jokaisella issuella on selvä Valmis kun -ehto, tiedät, mitä seuraavaksi tehdään ja milloin työ voidaan testata.",
      done: "Pakollinen sisältö (P0) on hyväksytty. Jokaisella issuella on arvio, prioriteetti ja Valmis kun -ehto. Moodboardissa näkyvät paletti ja referenssit, ja LICENSE-tiedosto on repositoryn juuressa.",
      record: "Kirjoita Vko 35 -merkintään, mitkä asset-pack-suunnitelman päätökset teit ja miksi. Lisää hyväksyjän rooli ja päivä sekä asiat, jotka jäivät ohjaajalle avoimiksi. Lisää linkit suunnitelmaan, backlogiin ja moodboardiin. Rastita lopuksi Näyttömatriisi-näkymässä kohdat Tehtävistä sopiminen ja Tehtäviksi jakaminen.",
      skills: ["rajaus", "moodboard", "työn pilkkominen"],
      resources: [
        ["Täytä Asset-pack-suunnitelma tällä sivulla", "#view-suunnitelma", false],
        ["Avaa koko toimeksianto", "#view-toimeksianto", false]
      ],
      tehtavat: {
        "35-1": {
          perii: ["35-1"],
          miksi: "Asset-pack-suunnitelma kokoaa paketin päätökset yhteen paikkaan. Palaat siihen jokaisena asset-viikkona.",
          osat: [
            "Avaa Suunnitelma-näkymä ja lue esitäytetty osa: se tulee toimeksiannosta.",
            "Kirjoita paketin työnimi. Kuvaa kahdella tai kolmella virkkeellä teema, tunnelma, kohdeyleisö ja oma roolisi.",
            "Valitse tekstuuriresoluutio. Pelin oma koko on 16 × 16 pikseliä, ja sillä on helpointa aloittaa.",
            "Kirjoita väripaletti ja työkalut, esimerkiksi Lospecin paletti, Piskel ja Blockbench.",
            "Kirjoita pakollisen sisällön (P0) määrät: vähintään 5 tekstuuria (3 blokkia ja 2 esinettä) ja 1 Blockbench-malli. Muu pakollinen (P0) sisältö tulee suunnitelmaan valmiina. Perustele valintasi yhdellä tai kahdella virkkeellä.",
            "Paina painiketta Lataa asset-pack-suunnitelma.md. Siirrä tiedosto project-docs-kansioon, tee commit ja push."
          ],
          valmis: "project-docs/asset-pack-suunnitelma.md näkyy GitHubissa, eikä yhdessäkään OMA-merkityssä kentässä ole tyhjää kohtaa.",
          tallenna: "project-docs/asset-pack-suunnitelma.md ja commit-linkki viikon 35 päiväkirjaan.",
          sanat: ["P0", "asset"],
          esimerkki: "Valitsin 16 × 16 -resoluution ja viiden värin paletin, koska kylän puut ja kivet erottuvat silloin selvästi myös kaukaa.",
          eiRiita: "”Koska se näyttää hyvältä” tai tekoälyn yleinen perustelu, joka ei liity omaan teemaan."
        },
        "35-2": {
          perii: ["35-1"],
          miksi: "Julkinen paketti ilman lisenssiä ei ole avoin: silloin kukaan ei saa käyttää sitä. Lisenssi eli käyttölupa kertoo, mitä muut saavat paketillasi tehdä.",
          osat: [
            "Lue Toimeksianto-näkymästä lisenssivaihtoehdot: CC BY, CC BY-SA, CC0 ja MIT.",
            "Sovi ohjaajan kanssa, millä lisenssillä paketti julkaistaan. Kirjaa valinta Suunnitelma-näkymän OHJAAJA-kenttään.",
            "Luo GitHubissa repositoryn juureen uusi tiedosto: Add file → Create new file. Anna nimeksi LICENSE. Jos lisenssi on MIT, valitse Choose a license template.",
            "Jos lisenssi on CC-lisenssi, kopioi sen teksti Creative Commonsin sivulta LICENSE-tiedostoon. Paina lopuksi Commit changes ja GitHub Desktopissa Fetch origin ja Pull origin, jotta LICENSE tulee myös koneellesi."
          ],
          valmis: "LICENSE-tiedosto on repositoryn juuressa ja vastaa ohjaajan kanssa sovittua lisenssiä.",
          tallenna: "Linkki LICENSE-tiedostoon ja sovittu lisenssi viikon 35 päiväkirjaan.",
          sanat: ["CC", "MIT"]
        },
        "35-3": {
          perii: ["35-2"],
          miksi: "Kun pakollinen sisältö on pilkottu enintään päivän mittaisiksi issueiksi, tiedät joka päivä, mitä teet seuraavaksi. Jos aika loppuu, tiedät, mistä voit luopua.",
          osat: [
            "Luo GitHubissa kolme labelia eli merkintää: Issues → Labels → New label. Anna nimiksi P0 pakollinen, P1 tärkeä ja P2 lisä.",
            "Tee jokaisesta pakollisesta assetista oma issue: Issues → New issue. Aloita otsikko verbillä, esimerkiksi Piirrä kolme blokkitekstuuria.",
            "Kirjoita jokaiseen issueen arvio (puoli päivää tai päivä) ja Valmis kun -ehto: mitä pelissä näkyy, kun tehtävä on tehty.",
            "Anna pakollisille issueille label P0 pakollinen. Pakollinen (P0) on sisältö, jota ilman pakettia ei voi julkaista.",
            "Kirjoita yksi tai kaksi lisäideaa omiksi issueikseen. Anna niille label P1 tärkeä tai P2 lisä. Tärkeä (P1) tehdään, kun pakolliset toimivat. Lisä (P2) voi jäädä pois.",
            "Näytä lista ohjaajalle ja pyydä hyväksyntä rajaukselle. Kirjaa hyväksyjän rooli ja päivä päiväkirjaan."
          ],
          valmis: "Jokaisella issuella on arvio, Valmis kun -ehto ja yksi label: P0 pakollinen, P1 tärkeä tai P2 lisä. Ohjaaja on hyväksynyt listan.",
          tallenna: "Linkki GitHubin Issues-listaan sekä hyväksyjän rooli ja päivä viikon 35 päiväkirjaan.",
          sanat: ["GitHub-issue", "backlog", "P0", "P1", "P2"],
          apu: {
            title: "Issuen pohja ja pakollinen sisältö",
            code: "ISSUEN POHJA\nOtsikko: [verbi + näkyvä asset]\n\nMiksi tämä tarvitaan:\n[mikä toimeksiannon vaatimus]\n\nValmis kun:\n[mitä pelissä näkyy]\n\nArvio:\n[0,5 tai 1 työpäivä]",
            vinkit: [
              "Pakollinen sisältö (P0): 3 blokkitekstuuria, 2 esinetekstuuria, omat nimet, 1 Blockbench-malli, 1 isompi malli tai mobin uusi ilme, 1 resepti, 1 saavutus ja 1 palkintofunktio.",
              "Ääni (viikko 40) kuuluu projektiin, mutta se ei ole pakollista sisältöä (P0)."
            ],
            test: "Valitse yksi issue sattumalta. Toinen ihminen osaa sen tekstin perusteella kertoa, mitä pakettiin tulee ja miten sen näkee pelissä."
          },
          esimerkki: "Issue: Piirrä kolme blokkitekstuuria · P0 pakollinen · 1 päivä · Valmis kun blokit näkyvät pelissä 3 × 3 -ruudukossa ilman saumavirheitä.",
          eiRiita: "Yksi issue nimeltä ”Tee paketti” tai kaikki issuet merkitty pakollisiksi (P0)."
        },
        "35-4": {
          perii: ["35-3"],
          miksi: "Moodboard lukitsee paketin värit ja tyylin ennen pikselityötä. Kun sama paletti on kaikissa tekstuureissa, paketti näyttää yhtenäiseltä.",
          osat: [
            "Valitse 5–8 värin paletti Lospecista tai kokoa oma. Tallenna paletista kuva nimellä paletti.png.",
            "Kerää 4–6 referenssikuvaa, jotka näyttävät teeman tunnelman. Moodboard menee julkiseen repositoryyn, joten käytä omia kuvia, omia pelikuvia tai CC0-kuvia, joissa ei näy ihmisiä, ja kirjaa lähteet.",
            "Kokoa paletti ja referenssit yhdeksi kuvaksi nimellä moodboard.png. Voit tehdä sen esimerkiksi Piskelissä, Canvassa tai paperille, jonka kuvaat.",
            "Piirrä kaksi karkeaa tekstuuriluonnosta paletin väreillä, paperille tai Piskeliin.",
            "Näytä moodboard ja luonnokset ohjaajalle. Kirjaa hänen kommenttinsa päiväkirjaan.",
            "Siirrä kuvat kansioon project-docs/evidence/week-35/, tee commit ja push."
          ],
          valmis: "Kansiossa project-docs/evidence/week-35/ ovat paletti.png, moodboard.png ja kaksi luonnosta, ja ohjaajan kommentti on päiväkirjassa.",
          tallenna: "Kuvat kansioon project-docs/evidence/week-35/, commit ja push. Polku viikon 35 päiväkirjaan.",
          sanat: ["moodboard"],
          apu: {
            title: "Moodboardin kansio",
            tree: "project-docs/evidence/week-35/\n├─ paletti.png\n├─ moodboard.png\n├─ luonnos-1.png\n└─ luonnos-2.png",
            vinkit: [
              "Luonnos saa olla karkea. Sen tehtävä on lukita suunta, ei olla valmis tekstuuri."
            ]
          }
        }
      }
    },

    36: {
      type: "feature",
      feature: "Pelaaja näkee maailmassa kolme blokkia sinun omilla tekstuureillasi.",
      excerpt: "Paketti muuttaa pelin ilmettä valitun teeman mukaiseksi: siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
      connection: "Viikon 35 moodboard ja paletti lukitsivat ilmeen, ja viikon 34 tyhjä paketti on valmis ottamaan sisältöä. Nyt piirrät kolme blokkitekstuuria ja viet ne peliin ensimmäisellä kokonaisella asset-työkierrolla: luonnos, piirto, oikea polku, peli ja testi. Samalla kierrolla teet jokaisen tulevan assetin.",
      deliverable: "Kolme omaa 16×16-blokkitekstuuria pelissä, oikea kansiorakenne ja ensimmäiset testimerkinnät.",
      why: "Blokkitekstuuri on paketin perusyksikkö. Kun korvausperiaate ja kansiorakenne ovat hallussa, loput assetit ovat saman kaavan toistoa eri sisällöllä.",
      done: "Kolme omaa blokkitekstuuria näkyy pelissä ilman virheilmoituksia. Vierekkäisten blokkien saumat toimivat 3 × 3 -ruudukossa, ja tiedostot ovat Gitissä.",
      record: "Kirjoita Vko 36 -merkintään, mitkä blokit korvasit ja miksi juuri ne. Kirjaa myös paletin käyttö ja saumojen testitulokset. Lisää commit-tunniste ja pelin kuvakaappauksen polku (project-docs/evidence/week-36/). Rastita lopuksi Näyttömatriisi-näkymässä kohta Toimintojen toteutus.",
      skills: ["pikseligrafiikka", "resurssipaketin rakenne", "pelitesti"],
      resources: [
        ["Piskel – piirrä pikselitekstuurit selaimessa", "https://www.piskelapp.com/", false],
        ["Lospec – väripaletit", "https://lospec.com/palette-list", false],
        ["Minecraft Wiki – resurssipaketin rakenne", "https://minecraft.wiki/w/Resource_pack", false]
      ],
      tehtavat: {
        "36-1": {
          perii: ["36-1"],
          miksi: "Blokkitekstuuri on paketin perusyksikkö. Kun tämä onnistuu, loput assetit tehdään samalla kaavalla.",
          osat: [
            "Valitse kolme pelin blokkia, joiden ilmeen teemasi muuttaa, esimerkiksi kivi, tammilankut ja multa.",
            "Etsi blokkien tiedostonimet Minecraft Wikistä, esimerkiksi stone.png. Kirjaa ne päiväkirjaan.",
            "Luo Piskelissä uusi 16 × 16 -kuva ja ota käyttöön moodboardin paletti.",
            "Piirrä ensimmäinen tekstuuri. Valo tulee ylhäältä: yläreuna vaaleampi, alareuna tummempi.",
            "Piirrä kaksi muuta tekstuuria samalla paletilla. Vie jokainen PNG-kuvana: Export → PNG."
          ],
          valmis: "Sinulla on kolme 16 × 16 -kuvaa, jotka on piirretty moodboardin paletilla ja nimetty korvattavien blokkien mukaan.",
          tallenna: "Luonnokset tai välivaiheiden kuvat kansioon project-docs/evidence/week-36/.",
          eiRiita: "Netistä ladattu tai tekoälyllä tehty tekstuuri ei ole oma työnäyte. Välivaiheiden kuvat todistavat, että piirsit itse."
        },
        "36-2": {
          perii: ["36-2"],
          miksi: "Peli korvaa oman tekstuurinsa vain, jos tiedosto on täsmälleen oikeassa kansiossa ja oikealla nimellä.",
          osat: [
            "Luo repositoryn resourcepack-kansion sisään kansiopolku assets/minecraft/textures/block/.",
            "Siirrä kolme kuvaa sinne. Tiedostonimen pitää olla täsmälleen sama kuin korvattavalla blokilla. Iso ja pieni kirjain ovat eri asia.",
            "Kopioi repositoryn resourcepack-kansio pelin resourcepacks-kansioon. Korvaa vanha kansio. Paina pelissä F3 + T. Peli lataa paketin uudelleen.",
            "Luo testimaailma (Game Mode Creative, Allow Commands tai Allow Cheats ON) ja rakenna siihen jokaisesta kolmesta blokista oma 3 × 3 -ruudukko."
          ],
          valmis: "Kolme omaa tekstuuria näkyy pelissä, eikä peli näytä virheilmoitusta.",
          tallenna: "Commit ja push. Kuvakaappaus pelistä kansioon project-docs/evidence/week-36/.",
          apu: {
            title: "Korvaa blokkitekstuuri omalla",
            tree: "resourcepack/assets/minecraft/textures/block/\n├─ stone.png        (korvaa kiven)\n├─ oak_planks.png   (korvaa tammilankut)\n└─ dirt.png         (korvaa mullan)\n\nSama tiedostonimi kuin pelissä = tekstuuri korvautuu.",
            code: "TEKSTUURIN TARKISTUS\n[ ] koko täsmälleen 16 × 16\n[ ] tiedostonimi sama kuin korvattavalla\n[ ] polku assets/minecraft/textures/block/\n[ ] F3 + T lataa paketin uudelleen\n[ ] commit ja push tehty",
            vinkit: [
              "Voit tehdä ohjaajan kanssa kansiolinkin (Windowsissa mklink /J), jolloin peli lukee suoraan repositoryn kansiota eikä kopiointia tarvita. Silloin ohita työvaiheiden kopiointiosat."
            ]
          }
        },
        "36-3": {
          perii: ["36-3"],
          miksi: "Yksittäinen blokki voi näyttää hyvältä. Kun blokit ovat vierekkäin, saumat ja toistuva kuvio paljastuvat. Kun kirjaat testit, näet myöhemmin, mitä korjasit.",
          osat: [
            "Kirjoita päiväkirjaan ennen testiä odotettu tulos: 3 × 3 -ruudukko näyttää yhtenäiseltä pinnalta.",
            "Testi 1: katso jokaista ruudukkoa läheltä. Kirjaa, näkyykö sauma tai häiritsevä toistuva kuvio.",
            "Testi 2: kävele 20 blokin päähän ja katso uudelleen. Kirjaa, erottuuko teema.",
            "Jos testi ei mennyt odotetusti, korjaa kuvaa muutamalla pikselillä ja vie se repositoryn kansioon. Kopioi resourcepack-kansio peliin, paina F3 + T ja testaa uudelleen. Kirjaa molemmat ajot.",
            "Tee commit ja push. Kirjoita GitHubissa jokaiseen tämän viikon valmiiseen issueen kommentti. Lisää kommenttiin linkki siihen commitiin, jossa työ tehtiin. Sulje issuet vasta sen jälkeen."
          ],
          valmis: "Päiväkirjassa on kaksi testiä odotettuine ja todellisine tuloksineen, ja viimeinen ajo meni odotetusti.",
          tallenna: "Testit ja commit-linkki viikon 36 päiväkirjaan.",
          esimerkki: "Testi 1 · kivi 3 × 3 · odotus: yhtenäinen seinä · havainto: sauma näkyy → kaksi pikseliä siirretty → uusintatesti ok.",
          eiRiita: "”Näyttää hyvältä” ilman odotettua tulosta ja pelistä otettua kuvaa."
        }
      }
    },

    37: {
      type: "feature",
      termit: ["JSON"],
      feature: "Pelaaja näkee kaksi omaa esinettä, ja muokattu sisältö näkyy teemasi mukaisilla suomenkielisillä nimillä.",
      excerpt: "Paketti muuttaa pelin ilmettä valitun teeman mukaiseksi: siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
      connection: "Esineet korvataan samalla periaatteella kuin viikon 36 blokit, vain kansio vaihtuu. Uutena kirjoitat ensimmäisen oman JSON-tiedoston, kielitiedoston, joka antaa sisällölle suomenkieliset nimet. Samaa JSON-tarkkuutta tarvitset viikolla 44 reseptissä ja saavutuksessa.",
      deliverable: "Kaksi esinetekstuuria, fi_fi.json-kielitiedosto ja testi rikkinäisellä JSONilla.",
      why: "Kielitiedosto on ensimmäinen tekstimuotoinen määrittely paketissasi. JSONin tarkkuus — pilkut, lainausmerkit, avaimet — on sama taito, jota reseptit ja saavutus vaativat viikolla 44.",
      done: "Esineet näkyvät omilla tekstuureilla. Muokatut blokit ja esineet näkyvät suomenkielisillä nimillä. Rikkinäisen JSONin vaikutus on testattu ja kirjattu.",
      record: "Kirjoita Vko 37 -merkintään uudelleennimetyt esineet ja blokit, käännösavainten kaava sekä rikkinäisen JSONin testitulos. Lisää commit-linkki ja kuvakaappauksen polku (project-docs/evidence/week-37/). Rastita lopuksi Näyttömatriisi-näkymässä kohdat Käyttöliittymä ja Tietovaraston valinta.",
      skills: ["item-tekstuurit", "lang-tiedosto", "JSON"],
      tehtavat: {
        "37-1": {
          perii: ["37-1"],
          miksi: "Esineet piirretään samalla korvausperiaatteella kuin blokit, vain kansio vaihtuu.",
          osat: [
            "Valitse kaksi esinettä, jotka sopivat teemaasi, esimerkiksi leipä ja rautamiekka. Etsi niiden tiedostonimet Minecraft Wikistä.",
            "Piirrä Piskelissä molemmat 16 × 16 -kokoon moodboardin paletilla. Jätä tausta läpinäkyväksi ja väritä vain esine.",
            "Luo resourcepack-kansioon polku assets/minecraft/textures/item/ ja siirrä kuvat sinne korvattavan esineen nimellä.",
            "Kopioi repositoryn resourcepack-kansio pelin resourcepacks-kansioon. Korvaa vanha kansio. Paina pelissä F3 + T. Peli lataa paketin uudelleen.",
            "Tarkista esine tavaraluettelossa. Ota se sitten käteen ja katso sitä."
          ],
          valmis: "Kaksi omaa esinetekstuuria näkyy pelissä tavaraluettelossa ja kädessä.",
          tallenna: "Commit ja push. Välivaiheiden kuvat ja kuvakaappaus pelistä kansioon project-docs/evidence/week-37/."
        },
        "37-2": {
          perii: ["37-2"],
          miksi: "Kielitiedosto on JSON-tiedosto kuten pack.mcmeta, mutta ensimmäinen, jonka kirjoitat itse sisällöksi. Samaa tarkkuutta tarvitset viikolla 44 reseptissä ja saavutuksessa.",
          osat: [
            "Luo VS Codella tiedosto resourcepack/assets/minecraft/lang/fi_fi.json.",
            "Paina pelissä F3 + H. Nyt esineen tunnus näkyy esineen kuvauksessa, esimerkiksi minecraft:bread.",
            "Kirjoita tiedostoon jokaiselle muokkaamallesi blokille ja esineelle rivi avun mallin mukaan. Avain on esimerkiksi block.minecraft.stone, ja arvo on antamasi uusi nimi.",
            "Vaihda pelin kieleksi suomi (Options → Language). Valikot ovat sen jälkeen suomeksi, esimerkiksi Options = Asetukset. Kopioi repositoryn resourcepack-kansio pelin resourcepacks-kansioon. Korvaa vanha kansio. Paina pelissä F3 + T. Peli lataa paketin uudelleen.",
            "Tarkista tavaraluettelosta, että omat nimet näkyvät."
          ],
          valmis: "Muokatut blokit ja esineet näkyvät pelissä omilla suomenkielisillä nimillä.",
          tallenna: "Commit ja push. Kuvakaappaus nimistä kansioon project-docs/evidence/week-37/.",
          sanat: ["JSON"],
          apu: {
            title: "fi_fi.json-malli",
            code: "{\n  \"block.minecraft.stone\": \"Kylänkivi\",\n  \"item.minecraft.bread\": \"Kyläleipä\"\n}\n\nAvaimen kaava: block.minecraft.<tunnus>\ntai item.minecraft.<tunnus>",
            vinkit: [
              "Rivien väliin tulee pilkku, mutta viimeisen rivin perään ei.",
              "VS Code näyttää muotovirheen punaisella aaltoviivalla.",
              "Kun olet tarkistanut nimet, voit vaihtaa kielen takaisin English (US). Tämän sivun ohjeissa valikkojen nimet ovat englanniksi."
            ]
          }
        },
        "37-3": {
          perii: ["37-3"],
          miksi: "JSON-virhe voi hävittää kaikki nimet kerralla. Kun olet nähnyt, miltä virhe näyttää, tunnistat sen myöhemmin.",
          osat: [
            "Kirjoita päiväkirjaan ennen testiä odotettu tulos: rikkinäisellä tiedostolla omat nimet katoavat.",
            "Poista fi_fi.json-tiedostosta yksi pilkku. Kopioi repositoryn resourcepack-kansio pelin resourcepacks-kansioon. Korvaa vanha kansio. Paina pelissä F3 + T. Peli lataa paketin uudelleen.",
            "Kirjaa, mitä pelissä tapahtui.",
            "Palauta pilkku. Kopioi repositoryn resourcepack-kansio pelin resourcepacks-kansioon ja korvaa vanha, paina F3 + T ja kirjaa, palasivatko omat nimet.",
            "Tee commit ja push. Kirjoita GitHubissa jokaiseen tämän viikon valmiiseen issueen kommentti. Lisää kommenttiin linkki siihen commitiin, jossa työ tehtiin. Sulje issuet vasta sen jälkeen."
          ],
          valmis: "Rikkinäisen ja korjatun tiedoston tulokset on kirjattu, ja omat nimet näkyvät taas pelissä.",
          tallenna: "Testin tulokset ja commit-linkki viikon 37 päiväkirjaan.",
          sanat: ["JSON"],
          esimerkki: "Odotus: nimet katoavat · havainto: kaikki nimet palasivat pelin omiksi · pilkku palautettu → omat nimet takaisin.",
          eiRiita: "Pelkkä tiedosto repositoryssa. Nimen pitää näkyä pelissä, ja rikkinäisen JSONin vaikutus pitää testata."
        }
      }
    },

    38: {
      type: "feature",
      termit: ["UV-kartta"],
      feature: "Pelaaja voi asettaa maahan blokin, jolla on sinun Blockbenchissä tekemäsi 3D-muoto.",
      excerpt: "Paketti muuttaa pelin ilmettä valitun teeman mukaiseksi: siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
      connection: "Viikoilla 36 ja 37 muutit blokkien ja esineiden pinnan, nyt muutat muodon samalla korvausperiaatteella. Rakennat Blockbenchissä pienen mallin, teksturoit sen ja korvaat sillä yhden blokin mallin. Pieni malli opettaa työkalun ennen viikon 39 isompaa työtä.",
      deliverable: "Blockbenchillä tehty ja teksturoitu blokkimalli, joka toimii pelissä maassa ja kädessä.",
      why: "3D-malli on paketin vaativin asset-tyyppi. Pieni onnistunut malli opettaa koordinaatiston, mallitiedoston rakenteen ja UV-teksturoinnin – sen määrittelyn, mikä kohta tekstuurikuvasta piirtyy mihinkin mallin pintaan – ennen viikon 39 isompaa työtä.",
      done: "Oma malli näkyy pelissä oikein maassa, kädessä ja eri suunnista katsottuna ilman virheilmoituksia. Malli ja tekstuuri ovat Gitissä.",
      record: "Kirjoita Vko 38 -merkintään korvattu blokki, mallin kuutiomäärä, UV-teksturoinnin havainnot ja pelitestin tulokset. Lisää Blockbench-tiedoston ja kuvakaappausten polut sekä commit-linkki. Rastita lopuksi Näyttömatriisi-näkymässä kohta Kirjaston toiminnot ja työkalut.",
      skills: ["Blockbench-mallinnus", "mallin korvaus", "UV-teksturointi"],
      resources: [
        ["Blockbench – lataa tai käytä selaimessa", "https://www.blockbench.net/", false],
        ["Blockbench Wiki – aloitusohjeet", "https://www.blockbench.net/wiki", false]
      ],
      tehtavat: {
        "38-1": {
          perii: ["38-1"],
          miksi: "3D-malli muuttaa blokin muodon. Pienellä mallilla opit käyttämään Blockbenchiä ennen viikon 39 isompaa työtä.",
          osat: [
            "Valitse koristeblokki, jonka muoto saa muuttua, esimerkiksi kukkaruukku (flower_pot). Kirjaa valinta päiväkirjaan.",
            "Avaa Blockbench ja valitse File → New → Java Block/Item. Anna projektille teeman mukainen nimi.",
            "Rakenna muoto Add Cube -painikkeella 2–4 kuutiosta. Pysy 16 × 16 × 16 -ruudukon sisällä, niin blokki istuu maailmaan.",
            "Tallenna Blockbench-projekti: File → Save Project. Siirrä .bbmodel-tiedosto kansioon project-docs/lahdetiedostot/."
          ],
          valmis: "Blockbenchissä on 2–4 kuution malli, joka mahtuu yhden blokin kokoon, ja .bbmodel-tiedosto on tallennettu.",
          tallenna: "Commit ja push. Kuvakaappaus Blockbenchistä kansioon project-docs/evidence/week-38/.",
          apu: {
            title: "Mallin rakenne",
            tree: "Blockbench: File → New → Java Block/Item\n\nproject-docs/lahdetiedostot/\n└─ oma_koriste.bbmodel   (Blockbenchin lähdetiedosto)",
            vinkit: [
              "Blockbench toimii myös selaimessa, jos ohjelmaa ei voi asentaa."
            ]
          }
        },
        "38-2": {
          perii: ["38-2"],
          miksi: "Malli näkyy pelissä vasta, kun sillä on tekstuuri ja se on viety valitun blokin mallitiedoston paikalle.",
          osat: [
            "Luo tekstuuri Blockbenchin Textures-paneelissa: Create Texture, rastita Template ja paina Confirm. Siirry sitten Paint-tilaan ja maalaa mallin pinnat moodboardin paletilla. Blockbench tekee UV-kartan eli pintojen ja kuvan vastaavuuden puolestasi.",
            "Tallenna tekstuuri polkuun resourcepack/assets/minecraft/textures/block/ omalla nimellä, esimerkiksi oma_koriste.png.",
            "Vie malli: File → Export → Java Block/Item Model. Tallenna se polkuun resourcepack/assets/minecraft/models/block/ korvattavan blokin nimellä, esimerkiksi flower_pot.json.",
            "Kopioi repositoryn resourcepack-kansio pelin resourcepacks-kansioon. Korvaa vanha kansio. Paina pelissä F3 + T. Peli lataa paketin uudelleen."
          ],
          valmis: "Malli ja tekstuuri ovat oikeissa kansioissa, ja peli lataa paketin ilman virheilmoitusta.",
          tallenna: "Commit ja push. Commit-linkki viikon 38 päiväkirjaan.",
          sanat: ["UV-kartta"],
          apu: {
            title: "Mallitiedoston rakenne",
            tree: "resourcepack/assets/minecraft/\n├─ models/block/flower_pot.json   (korvattu malli)\n└─ textures/block/oma_koriste.png (mallin tekstuuri)",
            code: "{\n  \"textures\": { \"0\": \"block/oma_koriste\" },\n  \"elements\": [\n    {\n      \"from\": [5, 0, 5],\n      \"to\": [11, 8, 11],\n      \"faces\": {\n        \"north\": { \"texture\": \"#0\" },\n        \"south\": { \"texture\": \"#0\" },\n        \"east\":  { \"texture\": \"#0\" },\n        \"west\":  { \"texture\": \"#0\" },\n        \"up\":    { \"texture\": \"#0\" },\n        \"down\":  { \"texture\": \"#0\" }\n      }\n    }\n  ]\n}\n\nBlockbench kirjoittaa tämän puolestasi. Lue silti rakenne:\nelements ovat kuutioita from–to-koordinaateilla."
          }
        },
        "38-3": {
          perii: ["38-3"],
          miksi: "Blockbenchin esikatselu ei kerro, toimiiko malli pelissä. Vain pelissä näet, ovatko muoto ja tekstuuri oikein joka suunnasta.",
          osat: [
            "Kirjoita päiväkirjaan ennen testiä odotettu tulos: malli näkyy oikein joka suunnasta, eikä pinnoissa ole violettimustaa ruutukuviota.",
            "Aseta blokki maahan ja katso sitä neljästä ilmansuunnasta. Ota kuvakaappaus.",
            "Ota blokki käteen. Jos esine näkyy kädessä litteänä kuvana, se on normaalia: monella blokilla on oma kuva esineenä. Kirjaa, mitä näit.",
            "Jos jollakin pinnalla näkyy violettimusta ruutukuvio, peli ei löydä tekstuuria. Tarkista tekstuurin nimi ja polku ja korjaa. Kopioi resourcepack-kansio uudelleen peliin, paina F3 + T ja testaa uudelleen.",
            "Tee commit ja push. Kirjoita GitHubissa jokaiseen tämän viikon valmiiseen issueen kommentti. Lisää kommenttiin linkki siihen commitiin, jossa työ tehtiin. Sulje issuet vasta sen jälkeen."
          ],
          valmis: "Päiväkirjassa on testin odotettu ja todellinen tulos, ja malli näkyy pelissä oikein joka suunnasta.",
          tallenna: "Kuvakaappaukset kansioon project-docs/evidence/week-38/ ja testin tulos viikon 38 päiväkirjaan.",
          esimerkki: "Koristelyhty: 3 kuutiota, oma tekstuuri, korvaa kukkaruukun mallin. Kuvat pelistä neljästä suunnasta.",
          eiRiita: "Blockbenchin kuvakaappaus ilman peliin vietyä mallia ei osoita, että malli toimii paketissa."
        }
      }
    },

    39: {
      type: "feature",
      termit: ["mobi", "vertainen"],
      feature: "Paketin näyttävin asset, isompi malli tai mobin uusi ilme, näkyy pelissä läheltä, kaukaa ja yöllä.",
      excerpt: "Paketti muuttaa pelin ilmettä valitun teeman mukaiseksi: siihen kuuluu omia blokki- ja esinetekstuureja, uusia 3D-malleja ja teeman mukaiset suomenkieliset nimet.",
      connection: "Viikon 38 pieni malli opetti Blockbenchin ja mallin viennin pakettiin. Nyt vertaat kahta isompaa vaihtoehtoa ja toteutat perustellusti toisen, koska vertailu ja päätös ovat osa näyttöä. Valmis työ on paketin näyttävin asset, jonka testaajat näkevät viikolla 41.",
      deliverable: "Kahden vaihtoehdon vertailu, perusteltu päätös ja valmis toteutus pelissä.",
      why: "Vertailu osoittaa, ettet valinnut ratkaisua sattumalta. Työmäärän, näkyvyyden ja riskin punnitseminen ennen toteutusta on sama taito, jota käytät jokaisessa tulevassa projektissa.",
      done: "Valittu kokonaisuus toimii pelissä ja näyttää hyvältä läheltä, kaukaa ja pimeässä. Vertailumuistio päätöksineen on kirjattu.",
      record: "Kirjoita Vko 39 -merkintään vaihtoehdot A ja B, vertailuperusteet, keskustelukumppanin rooli, valittu ratkaisu ja pelitestin tulokset eri etäisyyksiltä. Lisää commit-linkki. Rastita lopuksi Näyttömatriisi-näkymässä kohta Ratkaisuvaihtoehdot.",
      skills: ["vaihtoehtojen vertailu", "hahmon eli mobin tekstuuri", "mallinnus"],
      tehtavat: {
        "39-1": {
          perii: ["39-1"],
          miksi: "Kun vertaat kahta vaihtoehtoa ennen työtä, osaat perustella valintasi, eikä ratkaisu jää sattuman varaan.",
          osat: [
            "Lue kaksi vaihtoehtoa: A = isompi blokkimalli, B = mobin eli pelin hahmon uusi tekstuuri, esimerkiksi creeperin uusi ilme.",
            "Pyydä ohjaajaa tai vertaista eli toista opiskelijaa keskustelemaan kanssasi kymmeneksi minuutiksi.",
            "Arvioikaa kumpaakin vaihtoehtoa kolmella kysymyksellä: montako päivää työ vie, kuinka usein se näkyy pelissä ja mikä voi mennä pieleen?",
            "Valitse A tai B. Kirjoita päiväkirjaan valinta, kaksi perustelua ja keskustelukumppanin rooli."
          ],
          valmis: "Päiväkirjassa ovat molemmat vaihtoehdot, kolmen kysymyksen vastaukset, valinta, kaksi perustelua ja keskustelukumppanin rooli.",
          tallenna: "Vertailu viikon 39 päiväkirjaan.",
          sanat: ["mobi", "vertainen"],
          apu: {
            title: "Vertailun pohja",
            code: "VAIHTOEHTOJEN VERTAILU\nA: [isompi blokkimalli]\nB: [mobin uusi tekstuuri]\n\nTyömäärä:         A [ ] pv   B [ ] pv\nNäkyvyys pelissä: A [    ]  B [    ]\nRiski:            A [    ]  B [    ]\n\nValinta ja perustelu:\n[2–3 virkettä]\n\nKeskustelukumppani ja päivä: [rooli, päivä]"
          },
          esimerkki: "Creeperin kylävartija-ilme · odotus: teema tunnistuu · läheltä ok · 20 blokin päästä ok · yöllä vihreä katoaa → reunaan vaaleampi sävy → uusintatesti ok.",
          eiRiita: "Tekoälyn tekemä valinta ilman omaa vertailua ja keskustelua."
        },
        "39-2": {
          perii: ["39-2"],
          miksi: "Tämä on paketin näyttävin yksittäinen asset. Kun teet sen kahdessa vaiheessa, keskeneräinenkin versio on tallessa.",
          osat: [
            "Päivä 1: tee runko. Vaihtoehdossa A rakenna muoto Blockbenchissä. Vaihtoehdossa B avaa mobin tekstuuripohja Blockbenchissä ja piirrä pääväritys.",
            "Tee commit ja push viestillä ”Runko”.",
            "Päivä 2: piirrä yksityiskohdat samalla paletilla kuin muut assetit.",
            "Vie työ pakettiin. Vaihtoehdossa A vie malli kuten viikolla 38. Vaihtoehdossa B vie tekstuuri polkuun resourcepack/assets/minecraft/textures/entity/, esimerkiksi creeper/creeper.png.",
            "Tarkista mobin tekstuurin polku versiosi mukaan Minecraft Wikistä: esimerkiksi lehmän ja sian tiedostonimet muuttuivat versiossa 1.21.5.",
            "Tee commit ja push viestillä ”Yksityiskohdat”."
          ],
          valmis: "Valittu työ on paketissa, ja repositoryssa on kaksi erillistä committia: runko ja yksityiskohdat.",
          tallenna: "Kahden commitin linkit viikon 39 päiväkirjaan.",
          apu: {
            title: "Isompi malli tai mobin ilme",
            tree: "Vaihtoehto A — isompi blokkimalli:\nresourcepack/assets/minecraft/models/block/<blokki>.json\n\nVaihtoehto B — mobin uusi tekstuuri:\nresourcepack/assets/minecraft/textures/entity/\n└─ creeper/creeper.png (esimerkki)",
            vinkit: [
              "Mobin tekstuurikuvassa jokainen ruumiinosa on omassa kohdassaan. Kun avaat pohjan Blockbenchissä (File → New → Minecraft Skin ja Model-listasta mobi, esimerkiksi Creeper), näet, mikä kohta piirtyy mihin. Piirrä kaikki pikselit itse: pelin alkuperäistä tekstuuria ei julkaista.",
              "Vaihtoehdossa A varaa kaksi päivää. Isompi tarkoittaa enemmän kuutioita ja yksityiskohtia, ei suurempaa kokoa: pysy 16 × 16 × 16 -ruudukon sisällä."
            ]
          }
        },
        "39-3": {
          perii: ["39-3"],
          miksi: "Esikatselusta ei näe, miltä työ näyttää oikeassa pelitilanteessa: kaukaa, pimeässä ja liikkeessä.",
          osat: [
            "Kirjoita päiväkirjaan ennen testiä odotettu tulos: teema tunnistuu läheltä, kaukaa ja yöllä.",
            "Kopioi repositoryn resourcepack-kansio pelin resourcepacks-kansioon. Korvaa vanha kansio. Paina pelissä F3 + T. Peli lataa paketin uudelleen.",
            "Etsi tai kutsu muokattu kohde pelissä. Ota kuvakaappaus läheltä, 20 blokin päästä ja yöllä.",
            "Kirjaa jokaisesta kuvasta, tunnistuuko teema. Jos ei tunnistu, korjaa, kopioi resourcepack-kansio uudelleen peliin, paina F3 + T ja testaa uudelleen.",
            "Tee commit ja push. Kirjoita GitHubissa jokaiseen tämän viikon valmiiseen issueen kommentti. Lisää kommenttiin linkki siihen commitiin, jossa työ tehtiin. Sulje issuet vasta sen jälkeen."
          ],
          valmis: "Kolme kuvaa ja testin tulos on kirjattu, ja teema tunnistuu jokaisesta kuvasta.",
          tallenna: "Kuvat kansioon project-docs/evidence/week-39/ ja testin tulos viikon 39 päiväkirjaan."
        }
      }
    },

    40: {
      type: "feature",
      termit: ["nimiavaruus", "CREDITS"],
      feature: "Pelaaja kuulee paketin oman äänen ja näkee sen tekstityksen, ja äänen lisenssi sallii julkaisun.",
      excerpt: "Kaiken sisällön pitää olla itse tehtyä tai lisensoitu niin, että sen saa julkaista uudelleen.",
      connection: "Paketti näyttää jo teemaltasi, ja nyt se saa äänen. Lisäät äänen paketin omaan nimiavaruuteen ja kirjaat sen lähteen ja lisenssin CREDITS-tiedostoon, koska avoimessa julkaisussa luvaton ääni estää julkaisun. Tämän viikon jälkeen resurssipaketti on koossa, ja viikolla 41 testaajat kokeilevat sitä.",
      deliverable: "Ogg-muotoinen ääni omassa nimiavaruudessa, sounds.json-määrittely ja kirjattu lisenssi.",
      why: "Äänen mukana opit kaksi julkaisun kannalta pakollista asiaa: tiedostomuodon vaatimukset ja lisenssikirjaukset. Avoimessa julkaisussa riittämätön lisenssi on julkaisueste, vaikka tekniikka toimisi.",
      done: "Oma ääni kuuluu pelissä /playsound-komennolla, tekstitys näkyy ja äänen lähde sekä lisenssi on kirjattu CREDITS-tiedostoon.",
      record: "Kirjoita Vko 40 -merkintään äänen lähde ja lisenssi sekä se, salliiko lisenssi uudelleenjulkaisun. Kirjaa myös muunnosvaiheet ja /playsound-testin tulos. Lisää sounds.json-commit ja CREDITS-kirjauksen linkki. Rastita lopuksi Näyttömatriisi-näkymässä kohdat Ulkoiset komponentit ja Yhteys tietovarastoon.",
      skills: ["äänet", "sounds.json", "lisenssit"],
      resources: [
        ["Freesound – CC-lisensoituja ääniä, tarkista lisenssi", "https://freesound.org/", false],
        ["Minecraft Wiki – sounds.json", "https://minecraft.wiki/w/Sounds.json", false]
      ],
      tehtavat: {
        "40-1": {
          perii: ["40-2"],
          miksi: "Avoimeen pakettiin saa laittaa vain sellaista, jonka saa julkaista uudelleen. Tässä kysyt, saatko käyttää ääntä. Viikolla 35 sovittu oma lisenssi kertoo toiseen suuntaan, mitä muut saavat tehdä paketillasi.",
          osat: [
            ["Hanki ääni", "Äänitä puhelimella lyhyt teemaan sopiva ääni, jossa ei kuulu kenenkään puhetta, tai etsi ääni Freesoundista. Freesoundin lataus vaatii tilin: sovi tilistä ohjaajan kanssa."],
            ["Tarkista lisenssi", "Jos ääni ei ole oma, tarkista sen lisenssi. Kelpaa vain CC0 tai CC BY. Jos lisenssissä on NC (ei kaupalliseen käyttöön) tai ND (ei muokkauksia), valitse toinen ääni."],
            ["Luo CREDITS.md", "Luo repositoryn juureen tiedosto CREDITS.md, jos sitä ei vielä ole. CREDITS on luettelo pakettiin tuoduista lähteistä."],
            ["Kirjaa äänen lähde", "Kirjoita CREDITS.md-tiedostoon äänen nimi, tekijä, linkki ja lisenssi. Jos äänitit itse, kirjoita ”oma äänitys” ja päivä."],
            ["Tallenna Gitiin", "Tee commit ja push."]
          ],
          valmis: "CREDITS.md-tiedostossa on äänen tekijä, lähde ja lisenssi, ja lisenssi sallii uudelleenjulkaisun.",
          tallenna: "Linkki CREDITS.md-tiedostoon viikon 40 päiväkirjaan.",
          sanat: ["CREDITS", "CC"],
          eiRiita: "Ääni ilman lähde- ja lisenssikirjausta on julkaisueste, vaikka se toimisi pelissä. Tekoälyllä tehty ääni käy vain ohjaajan luvalla ja AI-lokiin kirjattuna."
        },
        "40-2": {
          perii: ["40-1"],
          miksi: "Peli soittaa vain ogg-muotoisia ääniä. Oma nimiavaruus pitää sinun äänesi erillään pelin äänistä.",
          osat: [
            ["Asenna Audacity", "Asenna Audacity, jos sitä ei vielä ole koneella. Koulun koneella asennuksen voi joutua tekemään ohjaaja."],
            ["Leikkaa ja vie ogg-muotoon", "Leikkaa ääni Audacityssä enintään kahden sekunnin mittaiseksi. Vie se: File → Export Audio, muodoksi Ogg Vorbis, ei Opus (vanhemmassa Audacityssä File → Export → Export as OGG)."],
            ["Nimeä tiedosto", "Käytä pieniä kirjaimia ilman ääkkösiä ja välilyöntejä, esimerkiksi kyla_kello.ogg."],
            ["Luo oma nimiavaruus", "Luo resourcepack-kansioon kansio assets/teema/sounds/ ja siirrä ääni sinne. Vaihda sana teema oman pakettisi nimeksi pienillä kirjaimilla ilman ääkkösiä, esimerkiksi kotikyla."],
            ["Kirjoita sounds.json", "Kirjoita tiedosto assets/teema/sounds.json avun mallin mukaan."],
            ["Tallenna Gitiin", "Tee commit ja push."]
          ],
          valmis: "Ogg-tiedosto ja sounds.json ovat oman nimiavaruuden kansiossa.",
          tallenna: "Commit-linkki viikon 40 päiväkirjaan.",
          sanat: ["nimiavaruus"],
          apu: {
            title: "Äänen kansio ja sounds.json",
            tree: "resourcepack/assets/teema/\n├─ sounds.json\n└─ sounds/\n   └─ kyla_kello.ogg",
            code: "{\n  \"kyla.kello\": {\n    \"sounds\": [ { \"name\": \"teema:kyla_kello\" } ],\n    \"subtitle\": \"Kylän kello\"\n  }\n}\n\nÄänitapahtuman nimi on kyla.kello ja tiedostoviite\nteema:kyla_kello — pisteet nimessä, alaviivat tiedostossa.",
            vinkit: [
              "Jos Audacity ei avaa puhelimen m4a-tiedostoa, äänitä suoraan Audacityllä tietokoneen mikrofonilla (punainen Record-painike) tai lataa ääni Freesoundista wav- tai ogg-muodossa."
            ],
            links: [
              ["Minecraft Wiki – sounds.json", "https://minecraft.wiki/w/Sounds.json"]
            ]
          }
        },
        "40-3": {
          perii: ["40-3"],
          miksi: "Ääni on valmis vasta, kun se kuuluu pelissä ja tekstitys kertoo, mikä ääni oli.",
          osat: [
            ["Kirjaa odotus", "Kirjoita päiväkirjaan ennen testiä odotettu tulos: ääni kuuluu ja tekstitys näkyy."],
            ["Lataa paketti peliin", "Kopioi repositoryn resourcepack-kansio pelin resourcepacks-kansioon ja korvaa vanha kansio. Paina pelissä F3 + T, niin peli lataa paketin uudelleen."],
            ["Kytke tekstitykset", "Valitse Options → Accessibility Settings → Show Subtitles: ON. Suomenkielisessä pelissä sama kohta on Asetukset-valikossa."],
            ["Soita ääni komennolla", "Kirjoita chattiin /playsound teema:kyla.kello master @s. Vaihda sana teema ja äänen nimi omiksi."],
            ["Varmista komentojen lupa", "Jos komento ei toimi, avaa Esc → Open to LAN, laita Allow Commands (tai Allow Cheats) päälle ja paina Start LAN World. Jos komento toimi, rastita tämä suoraan."],
            ["Kirjaa tulos ja säädä", "Kirjaa tulos. Jos ääni on liian kova tai hiljainen, säädä sitä Audacityssä, vie ogg uudelleen repositoryn kansioon ja lataa paketti peliin ennen uutta testiä."],
            ["Kuittaa issuet", "Tee commit ja push. Kirjoita jokaiseen tämän viikon valmiiseen GitHub-issueen kommentti, jossa on linkki siihen commitiin, jossa työ tehtiin. Sulje issuet vasta sen jälkeen."]
          ],
          valmis: "Ääni kuuluu /playsound-komennolla, tekstitys näkyy, ja testin tulos on päiväkirjassa.",
          tallenna: "Kuvakaappaus tekstityksestä kansioon project-docs/evidence/week-40/. Testin tulos, kuvan polku ja commit-linkki viikon 40 päiväkirjaan.",
          esimerkki: "kyla_kello.ogg · oma äänitys 28.9. · sounds.json teema:kyla.kello · /playsound toimii, tekstitys Kylän kello näkyy."
        }
      }
    },

    41: {
      type: "katselmointi",
      termit: ["katselmointi"],
      feature: "Ohjaaja ja vertainen asentavat väliversion ohjeesi avulla, ja heidän palautteestaan sovitaan yksi muutos.",
      excerpt: "Haluan nähdä paketista toimivan väliversion vähintään kerran ennen lopullista versiota, jotta voin pyytää muutoksia.",
      connection: "Viikoilla 36–40 rakensit resurssipaketin, jossa on tekstuurit, nimet, mallit ja ääni. Nyt testaajat kokeilevat väliversiota, koska toimeksiantaja haluaa nähdä toimivan version ennen lopullista ja omalle työlle sokeutuu. Palautteesta sovittu muutos tehdään loman jälkeen viikolla 43.",
      deliverable: "Testattu väliversio, katselmointimuistio ja yksi hyväksytty muutosissue.",
      why: "Palaute tarvitaan ennen viimeistelyä, jotta muutokselle jää aikaa. Testaajan alkuperäisen havainnon erottaminen omasta tulkinnastasi tekee päätöksestä luotettavan.",
      done: "Ohjaaja ja vertaistestaaja ovat kokeilleet pakettia pelissä. Muistiossa näkyvät testaajien havainnot roolin mukaan ilman nimiä, oma tulkinta, päätös, hyväksyjä ja yksi rajattu issue.",
      record: "Kirjoita Vko 41 -merkintään väliversion commit-tunniste, katselmoinnin päivä ja osallistujien roolit. Kirjaa myös esittelyssä kertomasi kolme valintaa, testaajien havainnot roolin mukaan (ohjaaja, testaaja A), oma tulkinta ja linkki hyväksyttyyn muutosissueen. Rastita lopuksi Näyttömatriisi-näkymässä kohdat Asiakaslähtöinen viestintä, Priorisointi ja Suunnittelu ja arviointi.",
      skills: ["palautteen keruu", "katselmointi", "priorisointi"],
      tehtavat: {
        "41-1": {
          perii: ["41-1"],
          miksi: "Testaajat voivat antaa hyvää palautetta vain paketista, jonka he saavat itse asennettua ja joka toimii.",
          osat: [
            ["Pakkaa väliversio", "Avaa repositoryn resourcepack-kansio ja valitse sen sisältö: pack.mcmeta, pack.png ja assets. Pakkaa ne zipiksi. Älä pakkaa itse kansiota, muuten peli ei tunnista pakettia."],
            ["Tarkista zip", "Avaa zip ja tarkista, että ensimmäisellä tasolla on pack.mcmeta eikä kansio."],
            ["Kirjoita asennusohje", "Kirjoita ohje avun pohjan mukaan tiedostoon project-docs/evidence/week-41/asennusohje.md."],
            ["Kokeile puhtaassa pelissä", "Tee Minecraft Launcherissa Installations → New installation: sama versio ja Game Directory -kohtaan uusi tyhjä kansio. Asenna zip siihen ohjeen avulla ja korjaa ohje, jos poikkesit siitä."],
            ["Sovi katselmointi", "Sovi ohjaajan kanssa katselmoinnin aika. Katselmointi on tapaaminen, jossa testaajat kokeilevat keskeneräistä pakettia ja antavat palautetta."],
            ["Tallenna Gitiin", "Tee commit ja push."]
          ],
          valmis: "Väliversion zip asentuu pelkän ohjeen avulla, ja katselmoinnin aika on sovittu.",
          tallenna: "Zip ja asennusohje kansioon project-docs/evidence/week-41/, commit ja push.",
          sanat: ["katselmointi"],
          apu: {
            title: "Väliversion zip ja asennusohje",
            tree: "project-docs/evidence/week-41/\n├─ kotikyla-resurssipaketti-valiversio.zip\n└─ asennusohje.md",
            code: "ASENNUSOHJEEN POHJA (viikon 41 väliversio)\n1. Lataa resurssipaketti-zip.\n2. Avaa pelissä Options → Resource Packs →\n   Open Pack Folder ja siirrä zip kansioon.\n3. Ota paketti käyttöön valikosta.\n4. Vaihda pelin kieleksi suomi: Options →\n   Language. Omat nimet näkyvät vain suomeksi.\nVaatii Minecraft Java -version: [x.y.z]",
            vinkit: [
              "Datapaketti syntyy vasta viikolla 43. Se tulee zipiin ja ohjeeseen viikolla 47."
            ]
          }
        },
        "41-2": {
          perii: ["41-2"],
          miksi: "Omalle työlle sokeutuu. Kun katsot testaajia neuvomatta, näet, mikä teemasta välittyy ja mikä jää huomaamatta.",
          osat: [
            ["Pyydä testaajat", "Testaajat ovat ohjaaja ja yksi vertainen eli toinen opiskelija. Pyydä heitä asentamaan paketti ohjeesi avulla ja pelaamaan vapaasti."],
            ["Kirjaa havainnot roolin mukaan", "Älä neuvo, ellei testaaja pyydä apua. Kirjoita ylös, mitä testaaja sanoo ja tekee, roolin mukaan: ohjaaja tai testaaja A. Älä kirjoita nimiä."],
            ["Kirjaa omat havainnot", "Kirjoita erikseen, mitä itse näit: mitä testaaja huomasi ja mitä hän ohitti."],
            ["Esittele valintasi", "Kerro testauksen jälkeen viidessä minuutissa paketin sisältö ja kolme omaa valintaasi perusteluineen."],
            ["Kysy tärkein muutos", "Kysy lopuksi: mikä yksi asia pitäisi muuttaa ensin?"]
          ],
          valmis: "Muistiinpanoissa ovat testaajien havainnot roolin mukaan ja omat havaintosi erikseen sekä kolme selittämääsi valintaa.",
          tallenna: "Muistiinpanot viikon 41 päiväkirjaan roolein, ilman nimiä. Jos ohjaaja tarvitsee nimen tai sanatarkan lausuman, lähetä se hänelle Teamsissa.",
          sanat: ["vertainen"],
          eiRiita: "Itse tai tekoälyllä keksitty palaute ei ole katselmointi."
        },
        "41-3": {
          perii: ["41-2", "41-3"],
          miksi: "Yksi selvästi rajattu muutos ehditään tehdä kunnolla. Monta epämääräistä toivetta jää kesken.",
          osat: [
            ["Valitse muutos", "Valitse palautteesta yhdessä ohjaajan kanssa yksi muutos, jonka ehdit tehdä viikolla 43."],
            ["Tee muutosissue", "Tee muutoksesta GitHub-issue: verbillä alkava otsikko, testaajan havainto roolin kanssa (esimerkiksi testaaja A), arvio ja Valmis kun -ehto."],
            ["Anna prioriteetti", "Jos muutos on välttämätön, se on pakollinen (P0): anna label P0 pakollinen. Muuten se on tärkeä (P1): anna label P1 tärkeä."],
            ["Vertaa arvioita toteumaan", "Valitse viikolla 35 tehdyistä issueista kolme. Vertaa niiden arviota siihen, kauanko työ oikeasti kesti. Kirjaa ero ja sen syy."],
            ["Kirjoita katselmointimuistio", "Kirjaa päiväkirjaan päivä, osallistujien roolit, testaajien havainnot roolin mukaan, oma tulkinta, päätös ja hyväksyjä."]
          ],
          valmis: "GitHubissa on yksi hyväksytty muutosissue, ja katselmointimuistio sekä arvioiden vertailu ovat päiväkirjassa.",
          tallenna: "Issuen linkki ja katselmointimuistio viikon 41 päiväkirjaan.",
          sanat: ["GitHub-issue", "P0", "P1"],
          esimerkki: "Testaaja A: lyhtyä ei erota tavallisesta. Päätös: kirkkaampi hehkutekstuuri · P0 pakollinen · 0,5 päivää · hyväksyjä ohjaaja 8.10."
        }
      }
    },

    43: {
      type: "feature",
      termit: ["haara", "merge", "pull request", "datapaketti", "mcfunction"],
      feature: "Testaajan pyytämä muutos näkyy pelissä, ja datapaketti tervehtii pelaajaa chatissa, kun maailma latautuu.",
      excerpt: "Haluan nähdä paketista toimivan väliversion vähintään kerran ennen lopullista versiota, jotta voin pyytää muutoksia.",
      connection: "Viikon 41 katselmoinnista sovittiin yksi muutos, ja sen issue odottaa. Teet muutoksen omassa haarassa ja yhdistät sen pull requestilla, jotta main-haara pysyy koko ajan toimivana. Samalla paketti saa toisen puoliskonsa, datapaketin rungon, johon viikon 44 resepti ja saavutus rakennetaan.",
      deliverable: "Testattu palautemuutos mainissa ja datapaketin runko, jonka funktio toimii /reload- ja /function-komennoilla.",
      why: "Erillinen haara pitää toimivan version turvassa ja näyttää, miten palaute muuttui issueksi, toteutukseksi ja testiksi. Datapaketin runko avaa viikon 44 skriptityöt.",
      done: "Main-haarassa on testattu palautemuutos. Datapaketti latautuu /reload-komennolla ilman virheitä, ja funktio toimii /function-komennolla.",
      record: "Kirjoita Vko 43 -merkintään ketju: palaute → issue → haara → merge → testi. Lisää datapaketin ensimmäisen funktion commit ja /reload-testin tulos. Rastita lopuksi Näyttömatriisi-näkymässä kohdat Osan liittäminen ja Rajapinnat ja tieto.",
      skills: ["GitHub-issue", "haara ja merge", "mcfunction"],
      tehtavat: {
        "43-1": {
          perii: ["43-1"],
          miksi: "Kun teet muutoksen omassa haarassa, toimiva main-haara pysyy ehjänä, vaikka muutos menisi pieleen.",
          osat: [
            ["Kirjoita hyväksymistesti", "Avaa viikolla 41 tekemäsi muutosissue ja kirjoita siihen, mitä testaaja näkee pelissä, kun muutos on valmis."],
            ["Luo haara", "Luo uusi haara eli branch: GitHub Desktopissa Current Branch → New Branch. Anna nimeksi esimerkiksi korjaus/lyhdyn-hehku."],
            ["Tee muutos pienissä osissa", "Tee commit aina, kun yksi osa toimii."],
            ["Testaa pelissä", "Kopioi repositoryn resourcepack-kansio pelin resourcepacks-kansioon ja korvaa vanha kansio. Paina F3 + T ja testaa muutos pelissä."],
            ["Julkaise haara", "Tee push. Uuden haaran ensimmäisessä pushissa GitHub Desktopin painike on nimeltään Publish branch."]
          ],
          valmis: "Haara näkyy GitHubissa, ja siinä on vähintään kaksi pientä committia.",
          tallenna: "Haaran nimi ja commit-linkit viikon 43 päiväkirjaan.",
          sanat: ["haara", "commit", "push"],
          eiRiita: "Yksi suuri commit suoraan main-haaraan katkaisee yhteyden palautteen, muutoksen ja testin välillä."
        },
        "43-2": {
          perii: ["43-3"],
          miksi: "Pull requestissa toinen ihminen voi katsoa muutoksen, ennen kuin se siirtyy main-haaraan.",
          osat: [
            ["Avaa pull request", "Paina GitHubissa Compare & pull request. Jos painiketta ei näy, valitse Pull requests → New pull request ja compare-kohtaan oma haarasi. Pull request on pyyntö yhdistää haara main-haaraan."],
            ["Kuvaa muutos ja testi", "Kirjoita pull requestiin, mitä muutit ja miten testasit. Lisää rivi Closes #numero, jossa numero on muutosissuen numero."],
            ["Pyydä kommentti", "Pyydä ohjaajaa tai vertaista kommentoimaan. Vastaa kommenttiin tai tee korjaus samaan haaraan ja tee push."],
            ["Yhdistä main-haaraan", "Paina Merge pull request ja Confirm merge. Yhdistämistä kutsutaan mergeksi."],
            ["Päivitä oma main", "Vaihda GitHub Desktopissa haaraksi main ja paina Fetch origin ja Pull origin, jotta koneesi main-haara on ajan tasalla."]
          ],
          valmis: "Pull request on yhdistetty, siinä on kommentti ja vastaus, ja muutosissue on suljettu.",
          tallenna: "Pull requestin linkki viikon 43 päiväkirjaan.",
          sanat: ["pull request", "merge"]
        },
        "43-3": {
          perii: ["43-2"],
          miksi: "Datapaketti on paketin toinen puolisko: se lisää peliin sääntöjä. Rakenne on sama kuin viikon 34 resurssipaketissa, vain pack_format-arvo ja kansiot eroavat. Viikolla 44 rakennat rungon päälle reseptin ja saavutuksen.",
          osat: [
            ["Tee pack.mcmeta", "Tee repositoryn datapack-kansioon pack.mcmeta avun mallin mukaan. Tarkista datapaketin pack_format-arvo samasta wikitaulukosta: se on eri kuin resurssipaketilla."],
            ["Kirjoita load.mcfunction", "Luo kansiot data/teema/function/ ja kirjoita sinne load.mcfunction: yksi tellraw-komento, joka tulostaa tervehdyksen chattiin. Käytä samaa nimiavaruutta kuin äänissä, esimerkiksi kotikyla."],
            ["Kirjoita load.json", "Kirjoita tiedosto data/minecraft/tags/function/load.json. Se kertoo pelille, mikä funktio ajetaan, kun datapaketti latautuu."],
            ["Kopioi testimaailmaan", "Luo maailma: Game Mode Creative, Allow Commands (tai Allow Cheats) ON. Poistu Save and Quit to Title, kopioi datapack-kansio maailman datapacks-kansioon (Edit → Open World Folder) ja avaa maailma."],
            ["Tarkista lataus", "Aja pelissä /reload ja /datapack list. Vihreä tervehdys chatissa ja paketti listassa tarkoittavat, että runko toimii."],
            ["Tallenna Gitiin", "Tee commit ja push."]
          ],
          valmis: "/reload näyttää tervehdyksen, ja /datapack list näyttää paketin ilman virheitä.",
          tallenna: "Kuvakaappaus chatista kansioon project-docs/evidence/week-43/. Kuvan polku ja commit-linkki viikon 43 päiväkirjaan.",
          sanat: ["datapaketti", "mcfunction", "pack_format"],
          apu: {
            title: "Datapaketin runko",
            tree: "datapack/\n├─ pack.mcmeta\n└─ data/\n   ├─ teema/\n   │  └─ function/\n   │     └─ load.mcfunction\n   └─ minecraft/\n      └─ tags/\n         └─ function/\n            └─ load.json\n\nVersiosta 1.21 alkaen kansiot ovat yksikössä\n(function, recipe, advancement).",
            code: "# datapack/pack.mcmeta\n{ \"pack\": { \"pack_format\": 48, \"description\": \"Kotikylä – datapaketti\" } }\n\n# data/minecraft/tags/function/load.json\n{ \"values\": [ \"teema:load\" ] }\n\n# data/teema/function/load.mcfunction\ntellraw @a {\"text\":\"Kotikylä-paketti ladattu.\",\"color\":\"green\"}\n\npack_format 48 vastaa 1.21:tä — resurssi- ja\ndatapaketilla on ERI arvot samalle peliversiolle.\nVersiosta 1.21.9 alkaen tarkista wikistä myös\nkentät min_format ja max_format.",
            vinkit: [
              "Voit poistaa viikolla 34 tehdyn datapack/README.md-tiedoston, kun pack.mcmeta on paikallaan."
            ],
            test: "Aja /function teema:load. Tervehdys tulostuu chattiin. Jos komento ei löydä funktiota, tarkista kansioiden nimet.",
            images: [
              ["assets/kansiot-peliin.svg", "Havainnekuva: repositoryn resourcepack-kansio kopioidaan pelin resourcepacks-kansioon ja ladataan näppäimillä F3 + T. Datapack-kansio kopioidaan testimaailman datapacks-kansioon ja ladataan komennolla /reload. Muokkaat aina repositoryn kansiota, ja commit tehdään sieltä.", "Havainnekuva: repository on työkansio, pelin kansiot ovat testikopioita."]
            ],
            links: [
              ["Minecraft Wiki: Data pack", "https://minecraft.wiki/w/Data_pack"]
            ]
          }
        }
      }
    },

    44: {
      type: "feature",
      termit: ["advancement"],
      feature: "Pelaaja valmistaa teemasi reseptin selviytymistilassa ja saa siitä saavutuksen ja palkinnon.",
      excerpt: "Pakettiin kuuluu myös pelillinen lisä: omia valmistusreseptejä, vähintään yksi saavutus ja komentoskripti, jotka toimivat tavallisessa selviytymismaailmassa ilman modeja.",
      connection: "Viikon 43 datapaketin runko latautuu ja ajaa funktion, mutta pelillistä sisältöä siinä ei vielä ole. Nyt lisäät reseptin, saavutuksen ja palkintofunktion, jotka muodostavat ketjun: valmistus laukaisee saavutuksen, ja saavutus ajaa palkinnon. Kun ketju toimii, paketin koko pakollinen sisältö on valmis ja viikolla 45 testataan kokonaisuus.",
      deliverable: "Oma resepti, saavutus laukaisimineen ja palkintofunktio, testattuna selviytymistilassa.",
      why: "Tämä viikko on paketin skriptausosuuden ydin. Resepti, laukaisin ja funktio muodostavat ketjun, jossa data ohjaa pelin toimintaa — ilman riviäkään ohjelmointikieltä.",
      done: "Resepti löytyy reseptikirjasta ja tuottaa esineen. Saavutus laukeaa reseptin valmistuksesta, ja palkintofunktio toimii. Koko polku on testattu uudessa selviytymismaailmassa.",
      record: "Kirjoita Vko 44 -merkintään reseptien sisältö, saavutuksen laukaisin, palkinnon toiminta ja selviytymistestin kulku. Lisää commit-linkit sekä kuvasarjan tai videon polku kansiossa project-docs/evidence/week-44/. Rastita lopuksi Näyttömatriisi-näkymässä kohdat Toimintalogiikka ja Rakenteinen ohjelmointi.",
      skills: ["reseptit", "saavutus eli advancement", "funktiot"],
      resources: [
        ["Misode – reseptigeneraattori, tarkista rakenne", "https://misode.github.io/recipe/", false],
        ["Misode – advancement-generaattori", "https://misode.github.io/advancement/", false]
      ],
      tehtavat: {
        "44-1": {
          perii: ["44-1"],
          miksi: "Resepti on JSON-tiedosto, joka kertoo pelille, mistä aineksista uusi esine valmistetaan.",
          osat: [
            ["Päätä resepti", "Päätä teemaasi sopivat ainekset ja tulos. Valitse ainekset, jotka saa selviytymistilassa noin 15 minuutissa, koska testaat reseptin niin työvaiheessa 3. Kirjaa päätös päiväkirjaan."],
            ["Luo reseptitiedosto", "Luo datapack-kansioon polku data/teema/recipe/ ja sinne tiedosto teemalyhty.json avun mallin pohjalta. Vaihda nimi, ainekset ja tulos omiksi."],
            ["Tarkista rakenne", "Kohta pattern kuvaa 3 × 3 -työpöydän riveittäin, ja key kertoo, mitä kukin kirjain tarkoittaa. Tarkista rakenne sovitun version mukaan Minecraft Wikistä tai Misoden reseptigeneraattorista (valitse ensin peliversio)."],
            ["Lataa datapaketti", "Kopioi repositoryn datapack-kansio testimaailman datapacks-kansioon ja korvaa vanha. Aja /reload."],
            ["Anna resepti itsellesi", "Aja /recipe give @s teema:teemalyhty ja tarkista työpöydän reseptikirjasta, että resepti löytyy. Datapaketin resepti näkyy kirjassa vasta, kun pelaaja on saanut sen."]
          ],
          valmis: "Oma resepti näkyy reseptikirjassa /recipe give -komennon jälkeen, ja työpöytä antaa tuloksen, kun ainekset ovat oikeassa kuviossa.",
          tallenna: "Commit ja push. Commit-linkki viikon 44 päiväkirjaan.",
          sanat: ["JSON"],
          apu: {
            title: "Reseptin malli",
            code: "# data/teema/recipe/teemalyhty.json\n{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"pattern\": [ \" R \", \"RLR\", \" R \" ],\n  \"key\": { \"R\": \"minecraft:redstone\", \"L\": \"minecraft:lantern\" },\n  \"result\": { \"id\": \"minecraft:soul_lantern\", \"count\": 1 }\n}\n\nHuom: versioissa 1.21–1.21.1 key-ainekset\nkirjoitetaan {\"item\": ...} -muodossa;\nyllä oleva muoto toimii 1.21.2:sta alkaen.",
            links: [
              ["Misode – reseptigeneraattori, tarkista rakenne", "https://misode.github.io/recipe/"],
              ["Minecraft Wiki: Recipe", "https://minecraft.wiki/w/Recipe"]
            ]
          }
        },
        "44-2": {
          perii: ["44-2"],
          miksi: "Saavutus eli advancement palkitsee pelaajan, kun hän tekee jotain teemaan sopivaa. Palkinto on mcfunction-skripti.",
          osat: [
            ["Kirjoita palkintofunktio", "Kirjoita data/teema/function/palkinto.mcfunction: yksi tellraw-viesti ja pieni xp-palkinto riittävät."],
            ["Luo saavutus", "Luo tiedosto data/teema/advancement/kylan_valot.json avun mallin pohjalta."],
            ["Tunnista kolme osaa", "Tarkista mallista: display näyttää saavutuksen, criteria kertoo, milloin se laukeaa, ja rewards ajaa palkintofunktion."],
            ["Kytke oma resepti", "Vaihda laukaisimen recipe_id oman reseptisi nimeksi, esimerkiksi teema:teemalyhty."],
            ["Testaa palkinto", "Kopioi datapack-kansio testimaailmaan ja korvaa vanha. Aja /reload ja /function teema:palkinto: viesti ja xp tulevat, jos funktio latautui. JSON-virheet näkyvät vain lokissa, eivät chatissa."]
          ],
          valmis: "/function teema:palkinto antaa viestin ja xp:n, ja kylan_valot näkyy ehdotuksena, kun kirjoitat chattiin /advancement grant @s only teema: (älä paina Enter).",
          tallenna: "Commit ja push. Commit-linkki viikon 44 päiväkirjaan.",
          sanat: ["advancement", "mcfunction", "JSON"],
          apu: {
            title: "Saavutuksen ja palkinnon malli",
            tree: "datapack/data/teema/\n├─ recipe/teemalyhty.json\n├─ advancement/kylan_valot.json\n└─ function/palkinto.mcfunction",
            code: "# advancement/kylan_valot.json\n{\n  \"display\": {\n    \"icon\": { \"id\": \"minecraft:soul_lantern\" },\n    \"title\": \"Kylän valot\",\n    \"description\": \"Valmista teemalyhty\",\n    \"frame\": \"task\"\n  },\n  \"criteria\": {\n    \"lyhty_tehty\": {\n      \"trigger\": \"minecraft:recipe_crafted\",\n      \"conditions\": { \"recipe_id\": \"teema:teemalyhty\" }\n    }\n  },\n  \"parent\": \"minecraft:story/root\",\n  \"rewards\": { \"function\": \"teema:palkinto\" }\n}\n\n# function/palkinto.mcfunction\ntellraw @s {\"text\":\"Saavutus avattu: Kylän valot\",\"color\":\"gold\"}\nxp add @s 10 points",
            images: [
              ["assets/datapaketin-ketju.svg", "Havainnekuva datapaketin ketjusta: resepti teemalyhty.json, pelaaja valmistaa esineen, saavutus kylan_valot.json laukeaa ehdolla recipe_crafted ja recipe_id teema:teemalyhty, ja sen rewards-kohta ajaa funktion teema:palkinto, joka antaa viestin ja xp:n.", "Havainnekuva: tunnisteen pitää olla sama reseptissä ja saavutuksen ehdossa."]
            ],
            links: [
              ["Misode – advancement-generaattori", "https://misode.github.io/advancement/"],
              ["Minecraft Wiki: Advancement", "https://minecraft.wiki/w/Advancement_definition"]
            ]
          }
        },
        "44-3": {
          perii: ["44-3"],
          miksi: "Komennoilla annettu esine ei todista mitään. Koko polun pitää toimia niin kuin tavallinen pelaaja sen pelaa.",
          osat: [
            ["Kirjaa odotus", "Kirjoita päiväkirjaan ennen testiä odotettu tulos: kun valmistat reseptin, saavutus ja palkintoviesti ilmestyvät."],
            ["Luo selviytymismaailma", "Game Mode Survival, Allow Commands (tai Allow Cheats) ON nollausta varten. Poistu Save and Quit to Title, kopioi datapack-kansio maailman datapacks-kansioon (Edit → Open World Folder) ja avaa maailma."],
            ["Pelaa ainekset", "Hanki ainekset pelaamalla, ilman komentoja. Valmista esine työpöydällä."],
            ["Kirjaa tulos", "Kirjaa, laukesiko saavutus ja tuliko palkinto. Uusintatestiä varten saavutuksen voi nollata komennolla /advancement revoke @s only teema:kylan_valot."],
            ["Tallenna kuvat", "Tallenna kuvasarja tai lyhyt video koko polusta. Saavutusilmoitus näyttää chatissa pelaajanimesi: peitä se kuvista, ellei nimeä ole sovittu julkiseksi."],
            ["Kuittaa issuet", "Tee commit ja push. Kirjoita jokaiseen tämän viikon valmiiseen GitHub-issueen kommentti, jossa on linkki siihen commitiin, jossa työ tehtiin. Sulje issuet vasta sen jälkeen."]
          ],
          valmis: "Koko polku ainesten hankinnasta palkintoon toimii selviytymistilassa, ja testin tulos on kirjattu.",
          tallenna: "Kuvat tai video kansioon project-docs/evidence/week-44/ ja testin tulos viikon 44 päiväkirjaan.",
          esimerkki: "Resepti teema:teemalyhty → saavutus Kylän valot laukeaa → palkintofunktio antaa 10 xp. Testattu uudessa maailmassa.",
          eiRiita: "Komennoilla itselle annettu esine ei todista reseptiä. Koko polun pitää toimia selviytymistilassa."
        }
      }
    },

    45: {
      type: "laatu",
      termit: ["T01", "regressiotesti"],
      feature: "Paketti on testattu 12 kirjatulla testitapauksella, ja kolme löydettyä virhettä on korjattu ja testattu uudelleen.",
      excerpt: "Paketin pitää latautua ilman virheilmoituksia sillä Minecraft-versiolla, joka sovitaan projektin alussa.",
      connection: "Kaikki pakollinen sisältö on nyt paketissa, mutta sitä on testattu vain osa kerrallaan. Nyt kirjoitat 12 testitapausta ennen ajoa, ajat ne puhtaassa pelissä ja korjaat kolme virhettä koko ketjuna. Samoja testitapauksia käytät viikoilla 47 ja 48 regressiotesteinä.",
      deliverable: "Vähintään 12 testitapauksen testausmatriisi ja kolme täydellistä virheenkorjausketjua.",
      why: "Järjestelmällinen testaus näyttää, että paketti toimii myös rajoilla ja virhetilanteissa. Korjausketju todistaa, että osaat löytää syyn etkä vain peittää oiretta.",
      done: "Kaikissa 12 testitapauksessa näkyvät lähtötila, toiminta, odotus, havainto ja tulos. Kolmessa ketjussa näkyvät havainto, syy, korjauscommit ja onnistunut uusintatesti.",
      record: "Kirjoita Vko 45 -merkintään testitapaukset T01–T12 ja linkki testaustaulukkoon. Kirjoita kolme ketjua muodossa havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti. Rastita lopuksi Näyttömatriisi-näkymässä kohdat Toimintojen testaus, Virheenkorjaus, Suunnittelu, toteutus ja testaus kirjastolla ja Kirjaston mahdollisuudet ja rajoitteet.",
      skills: ["testitapaus", "virheenkorjaus", "pack_format"],
      resources: [
        ["Avaa näyttöaineisto", "#view-naytto", false]
      ],
      tehtavat: {
        "45-1": {
          perii: ["45-1"],
          miksi: "Kun kirjoitat odotetun tuloksen ennen testiä, et voi jälkikäteen muuttaa mieltäsi siitä, mikä oli oikein.",
          osat: [
            ["Luo testaus.md", "Luo tiedosto project-docs/testaus.md avun taulukkopohjasta."],
            ["Numeroi testitapaukset", "Numeroi ne T01, T02, T03 ja niin edelleen. T tarkoittaa testitapausta ja numero sen järjestystä."],
            ["Kirjoita tavallinen käyttö", "Kirjoita neljä testitapausta: asennus ohjeella, blokkitekstuurit, malli ja omat nimet."],
            ["Kirjoita rajatapaukset", "Kirjoita neljä testitapausta: tekstitykset päällä, englanninkielinen peli, yö ja resepti selviytymistilassa."],
            ["Kirjoita virhetilanteet", "Kirjoita neljä testitapausta: väärä pack_format, puuttuva tekstuuri, rikkinäinen JSON ja datapaketti ilman /reload-komentoa."],
            ["Kirjoita odotukset", "Täytä jokaiseen testitapaukseen lähtötila, mitä teet, ja odotettu tulos. Älä aja vielä yhtään testiä."]
          ],
          valmis: "Tiedostossa on 12 testitapausta T01–T12, ja jokaisella on odotettu tulos.",
          tallenna: "project-docs/testaus.md, commit ja push.",
          sanat: ["JSON", "T01"],
          apu: {
            title: "Testaustaulukon pohja",
            code: "| Tunnus | Lähtötila | Mitä teen | Odotettu tulos | Mitä tapahtui | Läpäisi |\n|---|---|---|---|---|---|\n| T01 | Puhdas peli | Asennan molemmat paketit ohjeella | Ei virheilmoituksia | | |\n| T02 | | | | | |",
            test: "Lue yksi testitapaus toiselle ihmiselle. Hän osaa ajaa testin pelkän rivin perusteella."
          }
        },
        "45-2": {
          perii: ["45-1", "45-3"],
          miksi: "Vain itse ajettu testi kertoo, toimiiko paketti. Puhdas peli paljastaa virheet, joita oma kehityskansio peittää.",
          osat: [
            ["Tee puhdas asennus", "Tee Minecraft Launcherissa uusi asennus: Installations → New installation. Valitse sovittu versio ja Game Directory -kohtaan uusi tyhjä kansio, jotta vanhat paketit eivät näy."],
            ["Aja testitapaukset", "Aja testitapaukset T01–T12 järjestyksessä. Kirjaa jokaisesta heti, mitä tapahtui ja läpäisikö testi."],
            ["Tee virhetestit", "Muuta repositoryssa pack_format vääräksi, poista yksi tekstuuri tai riko JSON ja kopioi kansio puhtaan pelin kansioon. Palauta tiedosto testin jälkeen GitHub Desktopissa: hiiren oikea → Discard changes."],
            ["Lue loki", "Avaa virhetestin jälkeen asennuksen kansiosta tiedosto logs/latest.log VS Codella ja etsi sanoja ERROR ja WARN. Kirjaa, mitä loki kertoi virheestä."],
            ["Merkitse vain ajetut", "Älä merkitse testiä läpäistyksi, jos et ajanut sitä itse."]
          ],
          valmis: "Jokaisella testitapauksella T01–T12 on todellinen tulos ja merkintä, läpäisikö se.",
          tallenna: "Päivitetty project-docs/testaus.md ja virhetestien kuvakaappaukset sekä lokiote kansioon project-docs/evidence/week-45/, commit ja push.",
          sanat: ["JSON", "T01"],
          eiRiita: "Tekoälyn ehdottamaa testitapausta ei saa merkitä ajetuksi eikä virhettä löydetyksi ilman omaa testiajoa."
        },
        "45-3": {
          perii: ["45-2"],
          miksi: "Kun kirjaat koko ketjun, näytät osaavasi löytää virheen syyn etkä vain peittää oiretta.",
          osat: [
            ["Valitse kolme virhettä", "Valitse kolme testitapausta, jotka eivät läpäisseet. Jos aitoja virheitä ei ole kolmea, pyydä ohjaajalta vikatehtävä eli valmisteltu virhe, jonka etsit ja korjaat."],
            ["Kirjaa toistaminen", "Kirjaa jokaisesta, miten virhe toistetaan, mikä oli odotettu tulos ja mitä tapahtui."],
            ["Etsi syy", "Etsi syy ennen kuin korjaat. Kirjoita syy yhdellä virkkeellä."],
            ["Korjaa ja tee commit", "Commitin viestissä on testitapauksen tunnus, esimerkiksi ”Korjaa testitapaus T09: oikea pack_format”."],
            ["Aja uusinta- ja regressiotesti", "Lataa korjattu kansio peliin (F3 + T tai /reload) ja aja sama testitapaus uudelleen. Aja myös regressiotesti: toinen samaa tiedostoa koskeva testitapaus."],
            ["Kirjaa ketju", "Kirjaa jokainen ketju päiväkirjaan: havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti."]
          ],
          valmis: "Päiväkirjassa on kolme täydellistä ketjua, ja jokaisen uusintatesti meni odotetusti.",
          tallenna: "Kolme ketjua commit-linkkeineen viikon 45 päiväkirjaan.",
          sanat: ["T01", "regressiotesti"],
          esimerkki: "Testitapaus T03 · malli · odotus: kukkaruukku näkyy omana mallina · havainto: yksi pinta violettimusta · syy: mallin tekstuuriviite eri kuin tiedoston nimi · korjauscommit [linkki] · uusintatesti ok · regressiotesti ok."
        }
      }
    },

    46: {
      type: "laatu",
      termit: ["CREDITS"],
      feature: "Toinen tekijä löytää paketin tiedostot ilman sinua ja tietää lisenssistä, mitä niillä saa tehdä.",
      excerpt: "Kaiken sisällön pitää olla itse tehtyä tai lisensoitu niin, että sen saa julkaista uudelleen.",
      connection: "Viikolla 45 varmistit, että paketti toimii. Nyt siistit rakenteen ja tarkistat LICENSE- ja CREDITS-tiedostot, koska avoimessa julkaisussa joku muu avaa paketin ja jatkaa sitä lisenssin ehdoilla. Ohjaajan tai vertaisen katselmointi näyttää, löytääkö toinen ihminen tiedostot ilman apuasi.",
      deliverable: "Siistitty kansiorakenne, tarkistetut LICENSE- ja CREDITS-tiedostot ja ihmisen tekemä laatukatselmointi.",
      why: "Selkeä rakenne helpottaa virheiden löytämistä ja myöhempiä muutoksia. Ilman LICENSE-tiedostoa julkinen paketti ei ole avoin, vaikka koodi näkyisi kaikille: oletuksena kaikki oikeudet jäävät sinulle eikä kukaan saa käyttää työtäsi.",
      done: "Sama testi menee läpi ennen siivousta ja sen jälkeen. LICENSE vastaa sovittua, CREDITS listaa jokaisen ulkopuolisen lähteen, ja katselmointikommenttiin on vastattu.",
      record: "Kirjoita Vko 46 -merkintään kaksi laatuhaittaa ja niiden siivous sekä testin tulos ennen ja jälkeen. Kirjaa lisenssitarkistuksen tulos ja vastauksesi lisenssikysymykseen. Kirjaa myös katselmoijan rooli, hänen kommenttinsa ja oma vastauksesi. Lisää siivouscommitin linkki. Rastita lopuksi Näyttömatriisi-näkymässä kohdat Ylläpidettävä koodi, Ratkaisujen arviointi ja Tietoturva.",
      skills: ["rakenteen laatu", "avoin lisenssi", "CREDITS"],
      tehtavat: {
        "46-1": {
          perii: ["46-1"],
          miksi: "Selkeät nimet ja oikeat paikat auttavat sinua ja toista tekijää löytämään tiedostot. Siivous ei saa muuttaa sitä, mitä pelissä näkyy.",
          osat: [
            ["Etsi kaksi laatuhaittaa", "Esimerkiksi epäselvä tiedostonimi, tiedosto väärässä kansiossa tai sounds.json-rivi, jonka äänitiedosto puuttuu."],
            ["Kirjaa testi ennen siivousta", "Kirjaa testi: paketti latautuu ilman virheitä ja kaikki assetit näkyvät pelissä."],
            ["Korjaa yksi haitta kerrallaan", "Kopioi korjattu resourcepack-kansio pelin resourcepacks-kansioon ja paina F3 + T. Jos haitta on datapaketissa, kopioi datapack-kansio testimaailmaan ja aja /reload."],
            ["Aja testi siivouksen jälkeen", "Aja sama testi uudelleen. Tuloksen pitää olla sama kuin ennen."],
            ["Kerro siivous commitissa", "Tee commit, jonka viesti kertoo, mitä siivosit, esimerkiksi ”Siisti tekstuurien nimet”."]
          ],
          valmis: "Kaksi laatuhaittaa on korjattu, ja sama testi menee läpi ennen ja jälkeen.",
          tallenna: "Siivouscommitin linkki ja testin tulokset viikon 46 päiväkirjaan.",
          esimerkki: "Ennen: project-docs/lahdetiedostot/Untitled (2).bbmodel. Jälkeen: project-docs/lahdetiedostot/kukkaruukku.bbmodel – nimi kertoo sisällön, eikä pelissä muutu mitään.",
          eiRiita: "Pelkkä tiedostojen siirtely ilman testiä ennen ja jälkeen."
        },
        "46-2": {
          perii: ["46-3"],
          miksi: "Ilman lisenssiä julkinen paketti ei ole avoin, ja lähteen puuttuminen on julkaisueste.",
          osat: [
            ["Tarkista LICENSE", "Tarkista, että LICENSE on repositoryn juuressa ja vastaa viikolla 35 sovittua."],
            ["Käy assetit läpi", "Käy läpi jokainen tekstuuri, malli ja ääni. Merkitse listaan, onko se itse tehty vai lisensoitu."],
            ["Täydennä CREDITS", "Täydennä CREDITS.md niin, että jokainen ulkopuolinen lähde on siinä tekijän ja lisenssin kanssa."],
            ["Varmista julkaisuoikeus", "Varmista, ettei paketissa ole Mojangin tiedostoja eikä muuta materiaalia, jonka lisenssi ei salli uudelleenjulkaisua."],
            ["Vastaa lisenssikysymykseen", "Lue oma LICENSE-teksti ja vastaa päiväkirjaan: saako toinen pelaaja julkaista muokatun version paketistasi, ja mitä hänen pitää tehdä?"]
          ],
          valmis: "LICENSE ja CREDITS.md ovat ajan tasalla, ja vastauksesi lisenssikysymykseen on päiväkirjassa.",
          tallenna: "Commit ja push. Linkit LICENSE- ja CREDITS.md-tiedostoihin viikon 46 päiväkirjaan.",
          sanat: ["CREDITS", "CC"],
          eiRiita: "Lisenssitarkistus ”kaikki ok” ilman läpikäyntiä. Julkinen repository ilman LICENSE-tiedostoa ei ole avoin paketti."
        },
        "46-3": {
          perii: ["46-2"],
          miksi: "Toinen ihminen huomaa asioita, joita et itse enää näe. Näytössä sinun pitää osata selittää ratkaisusi itse.",
          osat: [
            ["Pyydä katselmoija", "Pyydä ohjaajaa tai vertaista katselmoimaan paketti eli käymään sen rakenne läpi ja kommentoimaan sitä."],
            ["Näytä rakenne", "Näytä hänelle, mistä lähdetiedostot, kuten .bbmodel, löytyvät ja mihin uusi tekstuuri lisättäisiin."],
            ["Vastaa kommenttiin", "Kirjaa kommentin sisältö ja katselmoijan rooli ilman nimeä ja vastaa siihen: korjaa tai perustele, miksi pidät ratkaisun."],
            ["Selitä yksi ratkaisu", "Selitä suullisesti yksi kohta, jossa käytit tekoälyä apuna. Jos et käyttänyt tekoälyä, selitä yksi JSON-tiedosto omin sanoin."],
            ["Tarkista AI-loki", "Tarkista, että tekoälyn käyttö on kirjattu sivuston AI-loki-näkymään."]
          ],
          valmis: "Päiväkirjassa ovat katselmoijan rooli, hänen kommenttinsa, oma vastauksesi ja se, minkä kohdan selitit.",
          tallenna: "Kommentti, vastaus ja selitetty kohta viikon 46 päiväkirjaan.",
          sanat: ["JSON", "katselmointi"]
        }
      }
    },

    47: {
      type: "julkaisu",
      termit: ["RC"],
      feature: "Kaksi testaajaa asentaa julkaisuehdokkaan pelkän asennusohjeen avulla, ja jokaisesta havainnosta on päätös.",
      excerpt: "Valmis paketti julkaistaan niin, että kuka tahansa pelaaja löytää sen, lataa ja asentaa kirjallisen ohjeen avulla — ja niin, että toinen tekijä voi lisenssin puitteissa jatkaa työtä siitä eteenpäin.",
      connection: "Viikoilla 45 ja 46 paketti testattiin ja siistittiin, joten nyt siihen ei enää lisätä sisältöä. Kokoat ensimmäisen julkaisuehdokkaan (RC1, release candidate 1): version, joka julkaistaan, jos testeissä ei löydy vakavia virheitä. Kahden testaajan havainnot ja niiden luokittelu ratkaisevat, mitä viikolla 48 korjataan ennen julkaisua.",
      deliverable: "Jäädytetty RC1 (zipit + asennusohje), kahden henkilön testipalaute ja päätetty julkaisun korjauslista.",
      why: "Sisältöjäädytys estää uusia muutoksia rikkomasta lähes valmista pakettia. Palautteen luokittelu kohdistaa ajan vain julkaisuun vaikuttaviin virheisiin.",
      done: "Ensimmäinen julkaisuehdokas (RC1) on koottu yhdestä commitista. Ohjaaja ja toinen käyttäjä ovat asentaneet paketin pelkän ohjeen avulla, ja jokaisella havainnolla on vakavuus, toistuvuus ja päätös.",
      record: "Kirjoita Vko 47 -merkintään ensimmäisen julkaisuehdokkaan (RC1) commit, testaajien roolit, heidän havaintonsa ja päätökset: korjataan nyt, tunnettu puute tai myöhemmin. Kirjaa erikseen, onnistuiko asennus pelkällä ohjeella. Rastita lopuksi Näyttömatriisi-näkymässä kohta Version katselmointi.",
      skills: ["release candidate", "palautteen luokittelu", "julkaisupäätös"],
      tehtavat: {
        "47-1": {
          perii: ["47-1"],
          miksi: "Kun uutta sisältöä ei enää lisätä, voit testata version, joka oikeasti julkaistaan.",
          osat: [
            ["Jäädytä sisältö", "Kirjaa päiväkirjaan päivä, josta alkaen pakettiin ei lisätä uutta sisältöä, vaan korjataan vain virheitä. Tätä kutsutaan sisältöjäädytykseksi."],
            ["Varmista push", "Varmista, että viimeisin commit on pushattu GitHubiin."],
            ["Pakkaa kaksi zipiä", "Valitse resourcepack-kansion sisältö: pack.mcmeta, pack.png ja assets, ja pakkaa ne zipiksi. Älä pakkaa itse kansiota, muuten peli ei tunnista pakettia. Tee sama datapack-kansiolle."],
            ["Nimeä zipit", "Esimerkiksi kotikyla-resurssipaketti-rc1.zip ja kotikyla-datapaketti-rc1.zip. RC1 tarkoittaa ensimmäistä julkaisuehdokasta (release candidate 1)."],
            ["Täydennä asennusohje", "Kopioi viikon 41 asennusohje kansioon project-docs/evidence/week-47/ ja lisää datapaketin asennus: zip maailman datapacks-kansioon (Singleplayer → Edit → Open World Folder) ennen maailman avaamista."]
          ],
          valmis: "Kaksi zipiä ja asennusohje ovat valmiina, ja ne on koottu samasta commitista.",
          tallenna: "Zipit ja asennusohje kansioon project-docs/evidence/week-47/, commit ja push.",
          sanat: ["RC"]
        },
        "47-2": {
          perii: ["47-2"],
          miksi: "Asennusohje on yhtä tärkeä testattava kuin paketti. Kaksi eri ihmistä löytää eri virheitä.",
          osat: [
            ["Pyydä kaksi testaajaa", "Pyydä ohjaajaa ja yhtä muuta käyttäjää testaamaan julkaisuehdokas (RC1). Muu käyttäjä voi olla toisen ryhmän opiskelija tai toinen ohjaaja."],
            ["Anna vain zipit ja ohje", "Anna molemmille vain zipit ja asennusohje. Älä neuvo suullisesti."],
            ["Pyydä koko sisältö läpi", "Pyydä heitä käymään läpi tekstuurit, nimet, mallit, ääni, resepti ja saavutus."],
            ["Kirjaa havainnot", "Kirjaa jokainen havainto erikseen: testaajan rooli (ohjaaja tai testaaja B, ei nimeä), mitä tapahtui ja missä kohdassa. Kirjaa myös, onnistuiko asennus pelkällä ohjeella."]
          ],
          valmis: "Kahden testaajan havainnot on kirjattu erikseen, ja tiedät, onnistuiko asennus ohjeella.",
          tallenna: "Havainnot viikon 47 päiväkirjaan.",
          sanat: ["RC"],
          eiRiita: "Et voi itse esiintyä toisena testaajana, eikä tekoäly voi olla testaaja."
        },
        "47-3": {
          perii: ["47-3"],
          miksi: "Aikaa on vähän. Kun luokittelet havainnot, käytät ajan vain virheisiin, jotka estävät julkaisun.",
          osat: [
            ["Listaa havainnot", "Kirjoita jokainen havainto omalle rivilleen."],
            ["Merkitse vakavuus", "Vakava (paketti ei toimi tai jokin puuttuu), haitallinen (toimii mutta hankalasti) tai pieni (ulkonäköasia)."],
            ["Merkitse toistuvuus", "Toistuu aina, joskus tai kerran."],
            ["Päätä jokaisesta", "Korjataan nyt, tunnettu puute (kerrotaan README:ssä) tai myöhemmin (parannus, joka ei haittaa käyttäjää)."],
            ["Tee korjattavista issuet", "Tee jokaisesta korjattavasta havainnosta GitHub-issue."]
          ],
          valmis: "Jokaisella havainnolla on vakavuus, toistuvuus ja päätös, ja korjattavista on issuet.",
          tallenna: "Luokiteltu lista ja issueiden linkit viikon 47 päiväkirjaan.",
          esimerkki: "Lyhdyn hehku ei näy yöllä · vakava · toistuu aina · korjataan nyt · testitapaus T04."
        }
      }
    },

    48: {
      type: "julkaisu",
      termit: ["tagi", "GitHub-release"],
      feature: "Kuka tahansa voi ladata paketin GitHub-releasesta ja asentaa sen ohjeesi avulla ilman sinua.",
      excerpt: "Valmis paketti julkaistaan niin, että kuka tahansa pelaaja löytää sen, lataa ja asentaa kirjallisen ohjeen avulla — ja niin, että toinen tekijä voi lisenssin puitteissa jatkaa työtä siitä eteenpäin.",
      connection: "Viikon 47 luokiteltu lista kertoo, mitkä virheet korjataan ennen julkaisua. Korjausten jälkeen kirjoitat lataajalle README- ja CHANGELOG-tiedostot ja julkaiset v1.0:n GitHub-releasena eli repositoryn virallisena julkaisuna, jonka versio merkitään tagilla. Vasta ulkopuolisen onnistunut asennus osoittaa, että kuka tahansa saa paketin toimimaan.",
      deliverable: "Julkinen GitHub-release v1.0: zip-paketit, asennusohje, LICENSE, CHANGELOG, kuvakaappaukset ja tunnettujen puutteiden lista.",
      why: "Lataajan pitää pystyä asentamaan paketti ilman sinua. Vain julkaistun latauksen testaaminen osoittaa, että zipit, ohje ja tiedostorakenne toimivat oikeassa ympäristössä.",
      done: "v1.0-tagin commit vastaa julkaistua versiota. Toinen henkilö on ladannut releasen ja asentanut paketin puhtaaseen peliin pelkän ohjeen avulla. project-docs/nayttomatriisi.md on perustettu.",
      record: "Kirjoita Vko 48 -merkintään ketju v1.0-tagi → commit → release-linkki. Lisää testattu peliversio, ulkopuolisen asentajan rooli ja päivä, testitulos ja tunnetut puutteet. Jos julkaisit lisäksi Modrinthissa tai Planet Minecraftissa, kirjaa linkki ja se, mitä ehtoja palvelu vaati. Lisää linkki tiedostoon project-docs/nayttomatriisi.md. Rastita lopuksi Näyttömatriisi-näkymässä kohdat Versionhallinta, Tuotantojulkaisu, Julkaisu asiakkaan ympäristöön ja Ohjelmiston dokumentointi.",
      skills: ["GitHub-release", "versiointi", "asennusohje"],
      tehtavat: {
        "48-1": {
          perii: ["48-1"],
          miksi: "Sisältöjäädytyksen jälkeen korjataan vain se, mikä estää julkaisun. Muut havainnot jäävät tunnetuiksi puutteiksi tai myöhempään versioon.",
          osat: [
            ["Rajaa korjaukset", "Avaa viikon 47 luokiteltu lista. Ota työn alle vain havainnot, joiden päätös on ”korjataan nyt”."],
            ["Korjaa yksi kerrallaan", "Korjaa yksi virhe kerrallaan ja tee jokaisesta oma commit."],
            ["Testaa jokainen korjaus", "Kopioi korjattu kansio peliin ja aja korjaukseen liittyvä testitapaus sekä regressiotesti eli toinen samaa tiedostoa koskeva testitapaus."],
            ["Sulje issuet", "Lisää korjattuihin GitHub-issueihin linkki korjauscommitiin ja sulje ne."]
          ],
          valmis: "Kaikki ”korjataan nyt” -havainnot on korjattu ja testattu, ja niiden issuet on suljettu.",
          tallenna: "Korjauscommitien linkit viikon 48 päiväkirjaan.",
          sanat: ["T01", "regressiotesti"]
        },
        "48-2": {
          perii: ["48-2"],
          miksi: "Lataaja päättää README:n ja kuvien perusteella, ottaako hän paketin käyttöön. CHANGELOG eli muutosloki kertoo, mitä versio sisältää.",
          osat: [
            ["Kirjoita asennusohje", "Kirjoita README.md-tiedostoon otsikon ”Asennus” alle: resurssipaketti resourcepacks-kansioon, pelin kieleksi suomi ja datapaketti maailman datapacks-kansioon (Singleplayer → Edit → Open World Folder) ennen maailman avaamista."],
            ["Lisää perustiedot", "Lisää README:hen peliversio, lisenssi ja otsikon ”Tunnetut puutteet” alle viikon 47 tunnetut puutteet."],
            ["Lisää kuvat", "Lisää README:hen 2–4 kuvakaappausta pelistä."],
            ["Kirjoita CHANGELOG", "Luo tiedosto CHANGELOG.md ja kirjoita otsikon ”v1.0” alle, mitä paketti sisältää."],
            ["Tallenna Gitiin", "Tee commit ja push."]
          ],
          valmis: "README:ssä ovat asennusohje, peliversio, lisenssi, tunnetut puutteet ja kuvat, ja CHANGELOG.md kertoo, mitä v1.0 sisältää.",
          tallenna: "Linkit README.md- ja CHANGELOG.md-tiedostoihin viikon 48 päiväkirjaan."
        },
        "48-3": {
          perii: ["48-2"],
          miksi: "GitHub-release on repositoryn virallinen julkaisu, josta kuka tahansa voi ladata paketin.",
          osat: [
            ["Pakkaa zipit", "Valitse resourcepack-kansion sisältö: pack.mcmeta, pack.png ja assets, ja pakkaa ne zipiksi. Älä pakkaa itse kansiota, muuten peli ei tunnista pakettia. Tee sama datapack-kansiolle."],
            ["Nimeä zipit versiolla", "Esimerkiksi kotikyla-resurssipaketti-v1.0.zip ja kotikyla-datapaketti-v1.0.zip."],
            ["Luo release ja tagi", "Avaa GitHubissa Releases → Draft a new release. Kirjoita Choose a tag -kenttään v1.0 ja valitse Create new tag. Tagi on nimilappu, joka kiinnittyy yhteen committiin."],
            ["Kirjoita julkaisuteksti", "Liitä molemmat zipit. Kerro, mitä paketti sisältää, mille peliversiolle se on tehty, miten se asennetaan ja millä lisenssillä se julkaistaan."],
            ["Julkaise", "Paina Publish release."],
            ["Asenna itse releasesta", "Lataa julkaistu release ja asenna se puhtaaseen peliin (uusi Installations-asennus omalla Game Directory -kansiolla) pelkän README:n ohjeen avulla. Korjaa ohje, jos jouduit poikkeamaan siitä."],
            ["Perusta näyttömatriisi", "Luo avun pohjasta project-docs/nayttomatriisi.md: jokaista vaatimusta kohti rivi, jossa ovat tunnus, työnäytteen linkki ja viikko. Täytä julkaisun rivit, esimerkiksi s14 ja v1.0-release, ja tee commit."]
          ],
          valmis: "Release v1.0 on julkaistu kahden zipin kanssa, ja olet itse asentanut sen ohjeen avulla puhtaaseen peliin. project-docs/nayttomatriisi.md on perustettu, ja julkaisun rivit on täytetty.",
          tallenna: "Release-linkki viikon 48 päiväkirjaan. project-docs/nayttomatriisi.md commitilla repositoryyn.",
          sanat: ["GitHub-release", "tagi"],
          apu: {
            title: "Julkaisun tarkistuslista",
            code: "JULKAISUN TARKISTUSLISTA\n[ ] pack.mcmeta on zipin juuressa\n[ ] resurssi- ja datapaketti omina zippeinä\n[ ] v1.0-tagi vastaa julkaistua committia\n[ ] julkaisuteksti: sisältö, peliversio, asennus, lisenssi\n[ ] LICENSE ja CREDITS repositoryn juuressa\n[ ] CHANGELOG kertoo mitä v1.0 sisältää\n[ ] lataus testattu puhtaaseen peliin ohjeella\n\nNÄYTTÖMATRIISIN POHJA (project-docs/nayttomatriisi.md)\n| Tunnus | Vaatimus | Työnäyte (linkki) | Viikko |\n|---|---|---|---|\n| s14 | Tuotantojulkaisu | …/releases/tag/v1.0 | 48 |\n| s12 | Versionhallinta | …/commits/main | 34–49 |\nSama työnäyte saa olla usealla rivillä.",
            vinkit: [
              "Valinnainen lisä: voit julkaista paketin myös Modrinthissa tai Planet Minecraftissa ohjaajan kanssa sovitusti."
            ],
            links: [
              ["GitHub: Releasen luominen", "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository"]
            ]
          }
        },
        "48-4": {
          perii: ["48-3", "48-4"],
          miksi: "Vasta ulkopuolisen asennus todistaa, että kuka tahansa saa paketin toimimaan ilman sinua.",
          osat: [
            ["Pyydä ulkopuolinen", "Pyydä yhtä ihmistä, joka ei ole tekijä, lataamaan v1.0 release-sivulta."],
            ["Anna vain README", "Pyydä häntä asentamaan paketti pelkän README:n avulla, ilman suullista apua."],
            ["Kirjaa epäröinnit", "Kirjaa hänen roolinsa, päivä ja jokainen kohta, jossa hän epäröi."],
            ["Korjaa ohje", "Korjaa epäröintikohdat README:hen, tee commit ja push."],
            ["Kuittaa issuet", "Kirjoita jokaiseen tämän viikon valmiiseen GitHub-issueen kommentti, jossa on linkki siihen commitiin, jossa työ tehtiin. Sulje issuet vasta sen jälkeen."]
          ],
          valmis: "Ulkopuolinen on asentanut paketin pelkän ohjeen avulla, ja hänen epäröintikohtansa on korjattu ohjeeseen.",
          tallenna: "Asentajan rooli, päivä ja havainnot viikon 48 päiväkirjaan.",
          eiRiita: "”Toimii omalla koneella” ei osoita, että ulkopuolinen lataaja pystyy asentamaan paketin ohjeen avulla."
        }
      }
    },

    49: {
      type: "naytto",
      feature: "Arvioija löytää jokaisen osaamisvaatimuksen työnäytteen yhdellä tarkalla linkillä.",
      excerpt: "Valmis paketti julkaistaan niin, että kuka tahansa pelaaja löytää sen, lataa ja asentaa kirjallisen ohjeen avulla — ja niin, että toinen tekijä voi lisenssin puitteissa jatkaa työtä siitä eteenpäin.",
      connection: "Paketti on julkaistu, eikä siihen lisätä enää sisältöä. Kokoat viikkojen päiväkirjasta, testeistä ja releasesta näyttöaineiston, jossa jokaisella vaatimuksella on tarkka linkki työnäytteeseen. Demo ja luovutus viimeistään pe 4.12.2026 päättävät projektin.",
      deliverable: "Valmis projektipäiväkirja, näyttömatriisi, itsearviointi, jäädytetty v1.0 ja harjoiteltu demo.",
      why: "Arvioija voi arvioida vain näkyvän ja löydettävän osaamisen. Täsmälliset linkit säästävät aikaa ja osoittavat, miten vaatimus muuttui suunnitelmaksi, toteutukseksi ja testiksi.",
      done: "project-docs/nayttomatriisi.md:ssä jokaisella arviointikohdalla on avautuva tarkka linkki. Projektipäiväkirja ja AI-loki ovat repositoryssa, ja demo käyttää samaa jäädytettyä v1.0-versiota.",
      record: "Kirjoita Vko 49 -merkintään itsearviointi: kolme vahvuutta työnäytteineen ja yksi seuraava kehitysaskel. Lisää linkit tiedostoon project-docs/nayttomatriisi.md, AI-lokiin, v1.0-releaseen ja demon runkoon. Rastita lopuksi Näyttömatriisi-näkymässä kohta Oma toiminta tiimissä.",
      skills: ["näyttömatriisi", "itsearviointi", "demo"],
      resources: [
        ["Avaa näyttömatriisi", "#view-naytto", false],
        ["Avaa ja lataa AI-loki", "#view-ailoki", false]
      ],
      tehtavat: {
        "49-1": {
          perii: ["49-1"],
          miksi: "Projektipäiväkirja on näyttösi hakemisto. Jos viikko puuttuu, sen työnäytteitä ei löydy.",
          osat: [
            ["Tarkista kirjatut viikot", "Avaa Projektipäiväkirja-näkymä ja tarkista, että jokainen viikko on merkitty kirjatuksi."],
            ["Täydennä puuttuvat", "Täydennä puuttuvat kentät viikkonäkymissä."],
            ["Kokeile linkit", "Tarkista jokaisen viikon Missä työnäyte on? -kentästä, että linkki aukeaa."]
          ],
          valmis: "Kaikki 15 viikkoa on kirjattu, ja jokaisen viikon työnäytelinkki aukeaa.",
          tallenna: "Täydennetyt viikkomerkinnät sivuston projektipäiväkirjassa. Lataat tiedoston repositoryyn työvaiheessa 5."
        },
        "49-2": {
          perii: ["49-1"],
          miksi: "Itsearviointi näyttää, että tunnistat oman osaamisesi ja tiedät, mitä opettelet seuraavaksi.",
          osat: [
            ["Valitse kolme vahvuutta", "Valitse projektista kolme asiaa, jotka osaat nyt hyvin."],
            ["Liitä työnäytteet", "Liitä jokaiseen vahvuuteen työnäyte: linkki commitiin, testitapaukseen tai päiväkirjan viikkoon."],
            ["Kirjoita kehitysaskel", "Kirjoita yksi asia, jota haluat kehittää seuraavaksi, ja miten aiot kehittää sitä."],
            ["Kirjoita itse", "Kirjoita itsearviointi itse. Älä käytä tekoälyä tekstin kirjoittamiseen."]
          ],
          valmis: "Viikon 49 päiväkirjassa on kolme vahvuutta työnäytteineen ja yksi kehitysaskel.",
          tallenna: "Itsearviointi viikon 49 päiväkirjaan.",
          eiRiita: "Tekoälyn kirjoittama yleinen itsearviointi, jossa ei ole linkkejä omiin työnäytteisiin."
        },
        "49-3": {
          perii: ["49-2"],
          miksi: "Arvioija löytää jokaisen osaamisen yhdellä klikkauksella, eikä hänen tarvitse etsiä sitä repositorysta.",
          osat: [
            ["Katso puuttuvat kohdat", "Avaa project-docs/nayttomatriisi.md ja sivun Näyttömatriisi-näkymä eli oma muistilistasi osaamisvaatimuksista. Katso, miltä vaatimuksilta rivi tai rasti vielä puuttuu."],
            ["Etsi työnäytteet", "Etsi jokaiselle puuttuvalle kohdalle työnäyte: issue, tiedosto, commit, tagi, kuva tai testitapaus."],
            ["Kirjaa tarkat linkit", "Kirjoita nayttomatriisi.md-tiedostoon jokaiselle vaatimukselle rivi: tunnus, tarkka linkki ja viikko. Linkin pitää avata juuri se kohta, ei repositoryn etusivua."],
            ["Rastita vaatimus", "Rastita vaatimus sivun Näyttömatriisi-näkymässä, kun sen rivi on tiedostossa."]
          ],
          valmis: "project-docs/nayttomatriisi.md:ssä on rivi jokaiselle 32 vaatimukselle, ja jokainen linkki aukeaa oikeaan kohtaan.",
          tallenna: "project-docs/nayttomatriisi.md commitilla repositoryyn. Linkki tiedostoon viikon 49 päiväkirjaan.",
          esimerkki: "Rivi: p3 · Toimintojen testaus · project-docs/testaus.md, testitapaukset T01–T12 · vko 45. Sama testaus.md voi olla myös rivillä p2.",
          eiRiita: "Pelkkä rastitettu matriisi tai linkki repositoryn etusivulle."
        },
        "49-4": {
          perii: ["49-3"],
          miksi: "Demossa näytät osaamisesi itse. Harjoittelu varmistaa, että ehdit näyttää tärkeimmät asiat.",
          osat: [
            ["Kirjoita demon runko", "Kirjoita runko kuutena kohtana: paketti pelissä, yksi tekstuuri- tai mallityö, resepti ja saavutus, yksi virheenkorjaus, Git-historia ja AI-loki."],
            ["Harjoittele kuulijalle", "Esitä demo kerran harjoituksena toiselle ihmiselle ja ota aika. Tavoite on 8–10 minuuttia. Kirjaa kuulijan rooli ja yksi asia hänen palautteestaan."],
            ["Harjoittele selitys", "Harjoittele, miten selität yhden JSON- tai mcfunction-tiedoston omin sanoin."],
            ["Käytä versiota v1.0", "Varmista, että demossa käytät julkaistua versiota v1.0."]
          ],
          valmis: "Demo kestää 8–10 minuuttia ja käy läpi kaikki kuusi kohtaa.",
          tallenna: "Demon runko viikon 49 päiväkirjaan.",
          sanat: ["JSON", "mcfunction"]
        },
        "49-5": {
          perii: ["49-4"],
          miksi: "Luovutus on näytön viimeinen vaihe. Kun toinen ihminen tarkistaa aineiston, et unohda mitään.",
          osat: [
            ["Vie päiväkirja repositoryyn", "Paina Projektipäiväkirja-näkymän painiketta Lataa koko päiväkirja (.md). Korvaa ladatulla tiedostolla repositoryn project-docs/projektipaivakirja.md. Tee commit ja push."],
            ["Tarkista AI-loki", "Avaa ladattu tiedosto ja tarkista, että sen lopussa on otsikko AI-loki ja omat merkintäsi."],
            ["Pyydä tarkistus", "Pyydä toista ihmistä avaamaan release ja repository. Kirjaa, löysikö hän kaiken."],
            ["Luovuta", "Luovuta paketti, repository, projektipäiväkirja ja näyttöaineisto ohjaajalle viimeistään pe 4.12.2026."]
          ],
          valmis: "Aineisto on luovutettu viimeistään pe 4.12.2026, ja toinen ihminen on tarkistanut sen.",
          tallenna: "Luovutuksen päivä viikon 49 päiväkirjaan."
        }
      },
      paivat: [
        ["Ma 30.11.", "Sisältöjäädytys: viimeinen hyväksytty versio."],
        ["Ti 1.12.", "Aineisto: päiväkirja, itsearviointi ja linkit."],
        ["Ke 2.12.", "Harjoittelu: 8–10 minuutin demo."],
        ["To 3.12.", "Puskuri: tarkistus toisen ihmisen kanssa."],
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
      kysymyksia: 6,
      vertailuVko: 39,
      katselmointiVkot: "41 ja 46",
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
      loppu: "Muista rajaus: pakollinen sisältö (P0) ensin — 5 tekstuuria (3 blokkia ja 2 esinettä), omat nimet, 1 Blockbench-malli, 1 isompi malli tai mobin uusi ilme, 1 resepti, 1 saavutus ja 1 palkintofunktio. Lisäideat ovat tärkeää (P1) tai lisää (P2)."
    },

    nayttosuunnitelma: {
      otsikko: "Näyttösuunnitelma",
      tiedosto: "nayttosuunnitelma.docx",
      johdanto: "Opettajan lähdeaineisto. Vaatimukset on luettu sivuston näyttömatriisista, joten tämä asiakirja pysyy sivuston kanssa yhdenmukaisena.",
      kohde: [
        "Opiskelija suunnittelee, toteuttaa ja julkaisee oman teemapaketin Minecraft Java Editioniin. Paketti koostuu resurssipaketista (itse piirretyt tekstuurit, Blockbench-mallit, äänet ja suomenkieliset nimet) ja kevyestä datapaketista (reseptit, saavutus ja mcfunction-skriptit). Skriptaus tehdään komennoilla ja JSONilla, ei ohjelmointikielellä.",
        "Paketti julkaistaan avoimella lisenssillä julkisena GitHub-releasena. Repository on julkinen ensimmäisestä commitista. Näyttöympäristö on siis kaksiosainen: oppilaitoksen työtila ja julkinen jakelukanava."
      ],
      p0: "Pakollinen perusversio (P0): 5 tekstuuria (3 blokkia ja 2 esinettä), omat nimet, 1 Blockbench-malli, 1 isompi malli tai mobin uusi ilme, 1 resepti, 1 saavutus ja 1 palkintofunktio. Kevennetty 28.9.2026 (aiemmin 8 tekstuuria, 2 mallia ja 2 reseptiä).",
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
        [47, "Julkaisuehdokkaan testaus (RC1)", "Sisältöjäädytys, kahden testaajan asennus ohjeella, palautteen luokittelu"],
        [49, "Luovutus", "project-docs/nayttomatriisi.md täsmälinkkeineen, projektipäiväkirja, AI-loki, demo ja jäädytetty v1.0"]
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
        s1: ["34", "Kuuden kysymyksen lista ohjaajalle vastauksineen, yhden julkaistun paketin tutkimus ja kuvaus omasta kohdeyleisöstä"],
        s2: ["41, 47, 48", "Lataajalle kirjoitettu asennusohje, jonka ulkopuolinen läpäisee ilman apua; 5–10 min esittely ja julkaisuteksti"],
        s3: ["41, 47", "Väliversion katselmointimuistio (vko 41) ja julkaisuehdokkaan RC1 testaushavainnot (vko 47) osallistujien rooleineen"],
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
        arviointiin: "Asset-pack-suunnitelma (project-docs/asset-pack-suunnitelma.md), projektipäiväkirja, AI-loki, testimatriisi ja linkitetty näyttömatriisi project-docs/nayttomatriisi.md.",
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
        ["Näyttömatriisi", "project-docs/nayttomatriisi.md: 32 arviointikohdetta täsmälinkeillä työnäytteisiin"],
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
