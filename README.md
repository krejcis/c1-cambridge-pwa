# C1 Cambridge Master – PWA Tréninková Mobilní Aplikace 🎓🔥

Jednoduchá offline mobilní aplikace fungující na principu **Autoškoly a Duolinga**, vytvořená na míru pro tvou přípravu na zkoušku **Cambridge C1 Advanced (CAE)** a uznání k maturitě.

---

## 🌐 Živá aplikace online (GitHub Pages)

Aplikace je nasazena a připravena k použití na mobilu i počítači:
👉 **[https://krejcis.github.io/c1-cambridge-pwa/](https://krejcis.github.io/c1-cambridge-pwa/)**

---

## 🚀 Co aplikace umí:

1. **Testy ve stylu Autoškoly a Duolinga**:
   * **Klikací otázky A, B, C, D** (Kolokace, Záporné inverze, Formální styl).
   * **Psaní odpovědí** (Open Cloze, Word Formation, Key Word Transformations).
   * Okamžitá odezva (zelená / červená).

2. **Podrobné české vysvětlení u každé chyby**:
   * Proč je vybraná odpověď správná.
   * Jaké gramatické pravidlo (inverze, subjunktiv, minulý infinitiv...) se uplatňuje.
   * **Tahák a tip pro zkoušku** u každé otázky.

3. **Denní streak & cíl (20 otázek denně)**:
   * Počítadlo plamínků **🔥 Streak** (přičte se +1 den, když za den správně odpovíš na **20 otázek**).
   * Ukládání postupu přímo do paměti telefonu/prohlížeče (LocalStorage).

4. **100% Offline podpora (PWA)**:
   * Obsahuje `Service Worker` (`sw.js`). Po prvním načtení funguje kdekoli bez internetu (v autobuse, vlaku, metru).
   * Syntetizované zvuky přes Web Audio API (nepotřebuje stahovat žádné externí MP3 soubory).

5. **Chybovník (Moje chyby)**:
   * Otázky, kde uděláš chybu, se automaticky uloží do záložky **„Moje chyby“**, takže si je můžeš cyklicky docvičovat, dokud je nezvládneš bez zaváhání.

6. **Procvičování podle témat**:
   * Kompletní C1 Mix (jako reálná zkouška)
   * Záporné inverze (*Hardly had I...*, *Under no circumstances...*)
   * Tvoření slov / Word Formation (*contradictory, detrimental, inexcusable...*)
   * Transformace vět (*is thought to have been, but for your...*)
   * Formální styl & sloh pro esej (*subjunktiv, cleft sentences, eliminace hovorových spojek*)
   * Kolokace & idiomy (*minute fraction, taken aback, come into effect...*)

---

## 📱 Jak aplikaci otevřít a nainstalovat na mobil:

### Možnost A: Přes domácí Wi-Fi (nejjednodušší na vyzkoušení hned)
1. Na počítači dvakrát klikni na soubor **`start.bat`** ve složce `c1-cambridge-pwa`.
2. V příkazovém řádku uvidíš, že server běží na portu `8080`.
3. Zjisti IP adresu svého PC v domácí Wi-Fi síti (v powershellu příkazem `ipconfig`, např. `192.168.1.50`).
4. Na svém mobilu (připojeném na stejnou Wi-Fi) otevři prohlížeč a zadej:
   `http://192.168.1.50:8080` (dosaď svou IP).

### Možnost B: Nahrání na bezplatný hosting (doporučeno pro trvalé používání)
Aplikace se skládá z čistých souborů HTML, CSS a JS bez nutnosti databáze. Můžeš ji za 1 minutu zdarma nahrát na:
* **GitHub Pages** (vytvoř veřejný repo, vlož tam složku a v Settings zapni Pages).
* nebo **Vercel** / **Netlify** / **Cloudflare Pages** (stačí přetáhnout složku myší).
Získáš tak zabezpečenou `https://` adresu pro svůj telefon na stálo.

### Jak z ní udělat opravdovou ikonu na mobilu:
* **iPhone (Safari):** Klepni na tlačítko Sdílet (čtvereček se šipkou nahoru) ➔ zvol **„Přidat na plochu“** (Add to Home Screen).
* **Android (Chrome):** Klepni na tři tečky vpravo nahoře ➔ zvol **„Přidat na plochu“** nebo **„Nainstalovat aplikaci“**.
Aplikace se pak spouští na celou obrazovku bez adresního řádku přesně jako nativní appka z App Storu / Google Play!
