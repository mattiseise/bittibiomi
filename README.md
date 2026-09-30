# BittiBiomi – ohjattu näyttöprojekti

Selainpohjainen oppimispolku oman Minecraft-teemapaketin toteuttamiseen ja julkaisemiseen avoimella lisenssillä: itse piirretyt tekstuurit, Blockbench-mallit, äänet ja kevyt datapaketti (reseptit, saavutus ja mcfunction-skriptit). Opiskelija julkaisee valmiin paketin julkisena GitHub-releasena, jonka kuka tahansa voi ladata, asentaa ja lisenssin puitteissa jatkaa. Sivusto sisältää viikot 34–49, syysloman viikolla 42, 4.12.2026 päättyvän aikataulun, lisenssi- ja julkaisuohjeet, tekoälyn vastuullisen käytön ohjeet, AI-lokin, testauksen vähimmäistavoitteet ja näyttöaineiston tarkistuslistat.

Sivusto on [KahvilaKoodi-näyttöprojektin](https://github.com/mattiseise/pelinayttoprojektit) sisarprojekti: sama runko ja viikkorytmi, eri sisältö ja ryhmä.

## GitHub Pages

Sivusto on täysin staattinen. Julkaise repositoryn juuresta `main`-branchista GitHub Pagesiin.

## Paikallinen esikatselu

Voit avata `index.html`-tiedoston selaimessa tai käynnistää minkä tahansa paikallisen HTTP-palvelimen repositoryn juuressa.

## Tiedot ja yksityisyys

Tehtävien tila, projektipäiväkirja, Asset-pack-suunnitelma ja AI-loki tallentuvat vain käyttäjän selaimen paikalliseen tallennustilaan. Sivusto ei lähetä tietoja palvelimelle.

## Tavaramerkit

BittiBiomi ei ole virallinen Minecraft-tuote, eikä se ole Mojangin tai Microsoftin hyväksymä tai niihin liittyvä. Sivuston kuvitukset ovat itse tehtyjä, eikä sivusto sisällä Mojangin aineistoa.

## Rakenne (moottori v2.7, selkeytetty 30.9.2026)

Sivusto käyttää yhtenäisiä viikko-ohjeita (`yhtenaisetViikot: true`): viisi numeroitua vaihetta,
jokaisen viikon yhteys kokonaisprojektiin ja tavoite sekä rastitettavat työvaiheet (`tehtavat`).
Projekti on käynnissä, joten osatehtävien järjestystä ja määrää ei muuteta: rastit tallentuvat
osan järjestysnumerolla. Uusi osa lisätään vain loppuun.

Käsin kirjoitetut havainnekuvat (muokkaa suoraan SVG:tä):
`assets/tyonkulku.svg` (pelaajan työnkulku), `assets/sovelluksen-osat.svg` (paketin osat),
`assets/kansiot-peliin.svg` (viikko 43) ja `assets/datapaketin-ketju.svg` (viikko 44).
Vaihekuva `assets/projektin-vaiheet.svg` generoidaan `sisalto.js`:n vaiheista komennolla
`node tyokalut/tee_vaihekuva.js`.

## Materiaalien generointi

Ladattavat docx-tiedostot ja kuvitukset generoidaan `tyokalut/`-kansion skripteillä:

```
npm install docx
node tyokalut/tee_lataukset.js        # docx-tiedostot + tyopaketti-print.html
python3 tyokalut/tee_kuvitukset.py    # SVG-kuvitukset + faviconit (vaatii Pillow)
```

Työpaketin PDF: tulosta `tyokalut/tyopaketti-print.html` Chromen headless-tilassa
(`--print-to-pdf`) tiedostoksi `downloads/bittibiomi-tyopaketti.pdf`.
