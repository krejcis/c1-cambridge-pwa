// ========================================================
// C1 Cambridge Master - Learning Database (Studovna & Teorie)
// Kompletní vysvětlení a taháky ke všem klíčovým C1 oblastem
// ========================================================

const C1_THEORY_DATABASE = [
  {
    id: "inversions",
    title: "Záporné inverze (Negative Inversions)",
    icon: "🔥",
    shortDesc: "Obrácený slovosled po záporných a omezujících výrazech. Garantovaný přísun bodů v Part 4 a esejích.",
    summary: "Inverze znamená, že pomocné sloveso předběhne podmět (přesně jako v otázce). Používá se pro dramatický důraz a ve formálním stylu C1.",
    formula: "Záporný výraz + POMOCNÉ SLOVESO + PODMĚT + HLAVNÍ SLOVESO",
    sections: [
      {
        heading: "1. Časové inverze s předminulým časem (Hardly / Scarcely / No sooner)",
        content: `Tyto tři vazby znamenají <em>„Sotvaže se stalo X, stalo se Y“</em>. Vyskytují se v testech neustále.
        
        <div class="rule-box">
          <strong>Vzorec:</strong><br>
          • <code>Hardly had + podmět + V3 ... WHEN ...</code><br>
          • <code>Scarcely had + podmět + V3 ... WHEN ...</code><br>
          • <code>No sooner had + podmět + V3 ... THAN ...</code>
        </div>
        
        <div class="example-item">
          <div class="en"><strong>Hardly had I stepped</strong> into the shower <strong>when</strong> the phone rang.</div>
          <div class="cz">Sotva jsem vlezl do sprchy, zazvonil telefon.</div>
        </div>
        <div class="example-item">
          <div class="en"><strong>No sooner had the plane landed than</strong> the passengers stood up.</div>
          <div class="cz">Sotva letadlo dosedlo na zem, cestující vstali.</div>
        </div>
        <div class="trap-box">
          ⚠️ <strong>Největší chyták u C1:</strong> U <em>No sooner</em> se VŽDY píše <strong>THAN</strong> (protože 'sooner' je 2. stupeň od soon). U <em>Hardly</em> a <em>Scarcely</em> se VŽDY píše <strong>WHEN</strong>! Nikdy ne 'Hardly... than' ani 'No sooner... when'.
        </div>`
      },
      {
        heading: "2. Striktní zákazy a podmínky (Under no circumstances, On no account)",
        content: `Tyto vazby vyjadřují absolutní zákaz nebo striktní vyloučení něčeho.
        
        <div class="rule-box">
          <strong>Klíčové výrazy:</strong><br>
          • <strong>Under no circumstances</strong> (Za žádných okolností)<br>
          • <strong>On no account</strong> (V žádném případě)<br>
          • <strong>At no time / At no point</strong> (V žádném okamžiku / Nikdy)<br>
          • <strong>In no way</strong> (V žádném směru / Vůbec ne)
        </div>
        
        <div class="example-item">
          <div class="en"><strong>Under no circumstances should you</strong> open the emergency exit.</div>
          <div class="cz">Za žádných okolností nesmíte otevřít nouzový východ. (NIKDY: Under no circumstances you should...)</div>
        </div>
        <div class="example-item">
          <div class="en"><strong>On no account must visitors</strong> touch the exhibited paintings.</div>
          <div class="cz">V žádném případě se návštěvníci nesmí dotýkat vystavených obrazů.</div>
        </div>
        <div class="example-item">
          <div class="en"><strong>At no point did he mention</strong> the financial deficit.</div>
          <div class="cz">V žádném okamžiku se nezmínil o finančním schodku.</div>
        </div>`
      },
      {
        heading: "3. Omezující příslovce míry a četnosti (Seldom, Rarely, Little)",
        content: `Když věta začíná slovy vyjadřujícími vzácnost nebo nevědomost:
        
        <div class="example-item">
          <div class="en"><strong>Seldom have I witnessed</strong> such extraordinary bravery.</div>
          <div class="cz">Zřídka jsem byl svědkem tak mimořádné odvahy.</div>
        </div>
        <div class="example-item">
          <div class="en"><strong>Little did they know</strong> that the conversation was being recorded.</div>
          <div class="cz">Neměli ani tušení (ani potuchy), že je rozhovor nahráván.</div>
        </div>
        <div class="example-item">
          <div class="en"><strong>Nowhere will you find</strong> a more hospitable community.</div>
          <div class="cz">Nikde nenajdete pohostinnější komunitu.</div>
        </div>`
      },
      {
        heading: "4. Zrádná skupina: Inverze až v HLAVNÍ (druhé) větě!",
        content: `Pozor! U výrazů <strong>Only when, Only after, Only if, Not until</strong> je první část věty v běžném slovosledu. Inverze nastává až v hlavní větě za čárkou!
        
        <div class="rule-box">
          <strong>Vzorec:</strong><br>
          <code>Only when / Not until [běžná věta] ➔ [POMOCNÉ SLOVESO + PODMĚT + HLAVNÍ SLOVESO]</code>
        </div>
        
        <div class="example-item">
          <div class="en">Only when she took off her sunglasses <strong>did I realize</strong> who she was.</div>
          <div class="cz">Teprve když si sundala brýle, uvědomil jsem si, kdo to je. (Inverze je až u 'did I realize'!)</div>
        </div>
        <div class="example-item">
          <div class="en">Not until the letter arrived <strong>did they understand</strong> the gravity of the situation.</div>
          <div class="cz">Až když dopis dorazil, pochopili vážnost situace.</div>
        </div>
        <div class="example-item">
          <div class="en">Only by working together <strong>can we achieve</strong> long-term success.</div>
          <div class="cz">Pouze společnou prací můžeme dosáhnout dlouhodobého úspěchu.</div>
        </div>`
      },
      {
        heading: "5. Invertované kondicionály (Kondicionály bez 'IF')",
        content: `Ve formální C1 angličtině můžeš vypustit spojku <em>if</em> a větu invertovat. Působí to mimořádně kultivovaně.
        
        <div class="table-container">
          <table class="theory-table">
            <tr><th>Běžný tvar s IF</th><th>C1 Invertovaný tvar</th></tr>
            <tr><td><strong>If you should need</strong> any help...</td><td><strong>Should you need</strong> any help...</td></tr>
            <tr><td><strong>If I were</strong> in your position...</td><td><strong>Were I</strong> in your position...</td></tr>
            <tr><td><strong>If you were to accept</strong> the job...</td><td><strong>Were you to accept</strong> the job...</td></tr>
            <tr><td><strong>If I had known</strong> the truth...</td><td><strong>Had I known</strong> the truth...</td></tr>
            <tr><td><strong>If it had not been for</strong> your help...</td><td><strong>Had it not been for</strong> your help...</td></tr>
          </table>
        </div>`
      }
    ]
  },

  {
    id: "word_formation",
    title: "Tvoření slov (Word Formation - Part 3)",
    icon: "✏️",
    shortDesc: "Přípony, záporné předpony a odvozování. Zásady, jak u zkoušky nepřijít o body.",
    summary: "V Part 3 máš zadané kořenové slovo velkými písmeny. Zhruba v 50 % případů zkoušející testují zápornou předponu nebo přechod na přídavné jméno/příslovce.",
    formula: "Předpona (často záporná) + KOŘEN + Přípona (určuje slovní druh)",
    sections: [
      {
        heading: "1. Záporné předpony – pravidlo první volby",
        content: `Pokud text mluví o problému, selhání nebo kritice, téměř jistě musíš přidat zápornou předponu:
        
        <div class="table-container">
          <table class="theory-table">
            <tr><th>Předpona</th><th>Pravidlo použití</th><th>C1 Příklady</th></tr>
            <tr><td><strong>IN-</strong></td><td>Běžná záporná předpona u slov latinského původu</td><td><em>inexcusable</em> (neomluvitelný), <em>inconclusive</em> (neprůkazný), <em>insignificant</em> (nevýznamný)</td></tr>
            <tr><td><strong>IM-</strong></td><td>Před písmeny <strong>M</strong> a <strong>P</strong></td><td><em>imperceptible</em> (nepostřehnutelný), <em>improbable</em> (nepravděpodobný), <em>immature</em></td></tr>
            <tr><td><strong>IL-</strong></td><td>Před písmenem <strong>L</strong></td><td><em>illogical</em> (nelogický), <em>illegible</em> (nečitelný), <em>illiterate</em></td></tr>
            <tr><td><strong>IR-</strong></td><td>Před písmenem <strong>R</strong></td><td><em>irresistible</em> (neodolatelný), <em>irresolute</em> (nerozhodný), <em>irresponsible</em></td></tr>
            <tr><td><strong>UN-</strong></td><td>Univerzální germánská předpona</td><td><em>unpredictable</em> (nepředvídatelný), <em>unprecedented</em> (bezprecedentní)</td></tr>
            <tr><td><strong>DIS-</strong></td><td>Vyjadřuje opak nebo odmítnutí</td><td><em>disreputable</em> (nevalné pověsti), <em>dissatisfied</em>, <em>discourteous</em> (nezdvořilý)</td></tr>
            <tr><td><strong>MIS-</strong></td><td>Znamená „špatně / mylně / chybně“</td><td><em>misconception</em> (mylná představa), <em>misunderstand</em>, <em>misjudge</em></td></tr>
          </table>
        </div>`
      },
      {
        heading: "2. Přídavná jména: Nejpoužívanější C1 koncovky",
        content: `Místo intuitivního přidávání <em>-ing</em> (např. chybné 'detrimenting', 'contradicting') vyžaduje C1 přesné formální přípony:
        
        <div class="rule-box">
          • <strong>-ORY:</strong> contradict ➔ <strong>contradictory</strong>, satisfy ➔ <strong>satisfactory</strong>, explain ➔ <strong>explanatory</strong><br>
          • <strong>-MENTAL:</strong> detriment ➔ <strong>detrimental</strong> (škodlivý), judge ➔ <strong>judgmental</strong><br>
          • <strong>-ABLE / -IBLE:</strong> excuse ➔ <strong>inexcusable</strong>, defend ➔ <strong>indefensible</strong>, perceive ➔ <strong>imperceptible</strong><br>
          • <strong>-OUS:</strong> disaster ➔ <strong>disastrous</strong>, suspect ➔ <strong>suspicious</strong>, courage ➔ <strong>courageous</strong>
        </div>`
      },
      {
        heading: "3. Tvorba sloves (Časté chytáky v testech)",
        content: `Často je v závorce přídavné nebo podstatné jméno a do věty potřebuješ sloveso za podmět nebo za infinitivní 'to':
        
        <div class="rule-box">
          • <strong>Přípona -EN:</strong><br>
          &nbsp;&nbsp;wide ➔ <strong>widen</strong> (rozšířit)<br>
          &nbsp;&nbsp;broad ➔ <strong>broaden</strong> (prohloubit obzory)<br>
          &nbsp;&nbsp;deep ➔ <strong>deepen</strong> (prohloubit)<br>
          &nbsp;&nbsp;strong ➔ <strong>strengthen</strong> (posílit)<br>
          &nbsp;&nbsp;threat ➔ <strong>threaten</strong> (vyhrožovat)<br><br>
          • <strong>Přípona -IFY:</strong><br>
          &nbsp;&nbsp;just ➔ <strong>justify</strong> (ospravedlnit)<br>
          &nbsp;&nbsp;clear ➔ <strong>clarify</strong> (objasnit)<br>
          &nbsp;&nbsp;simple ➔ <strong>simplify</strong> (zjednodušit)<br><br>
          • <strong>Předpona EN-:</strong><br>
          &nbsp;&nbsp;able ➔ <strong>enable</strong> (umožnit)<br>
          &nbsp;&nbsp;courage ➔ <strong>encourage</strong> (povzbudit)
        </div>`
      },
      {
        heading: "4. Zlatý tahák 15 nejčastějších zkouškových C1 přeměn",
        content: `
        <div class="table-container">
          <table class="theory-table">
            <tr><th>Základní slovo</th><th>C1 Tvar</th><th>Význam / Příklad</th></tr>
            <tr><td>CONTRADICT</td><td><strong>contradictory</strong></td><td>contradictory evidence (rozporuplné důkazy)</td></tr>
            <tr><td>DETRIMENT</td><td><strong>detrimental</strong></td><td>detrimental effect on health (neblahý vliv)</td></tr>
            <tr><td>RELUCTANT</td><td><strong>reluctance</strong></td><td>initial reluctance to sign (počáteční neochota)</td></tr>
            <tr><td>EXCUSE</td><td><strong>inexcusable</strong></td><td>inexcusable delay (neomluvitelné zpoždění)</td></tr>
            <tr><td>CONCEIVE</td><td><strong>misconception</strong></td><td>widespread misconception (mylná představa)</td></tr>
            <tr><td>CONCLUDE</td><td><strong>inconclusive</strong></td><td>inconclusive test results (neprůkazné výsledky)</td></tr>
            <tr><td>DISMISS</td><td><strong>dismissal</strong></td><td>unfair dismissal (neoprávněná výpověď)</td></tr>
            <tr><td>EXPAND</td><td><strong>expansion</strong></td><td>rapid market expansion (rychlá expanze)</td></tr>
            <tr><td>DEFEND</td><td><strong>indefensible</strong></td><td>indefensible behaviour (neobhajitelné chování)</td></tr>
            <tr><td>ESTIMATE</td><td><strong>inestimable</strong></td><td>inestimable value (nevyčíslitelná hodnota)</td></tr>
            <tr><td>PRICE</td><td><strong>priceless</strong></td><td>priceless artwork (klenot k nezaplacení)</td></tr>
            <tr><td>PREDICT</td><td><strong>unpredictable</strong></td><td>unpredictable weather (nepředvídatelné počasí)</td></tr>
            <tr><td>CONVENIENT</td><td><strong>inconvenience</strong></td><td>cause inconvenience (způsobit nepohodlí)</td></tr>
            <tr><td>SIGNIFY</td><td><strong>insignificant</strong></td><td>insignificant difference (zanedbatelný rozdíl)</td></tr>
            <tr><td>PERSIST</td><td><strong>persistence</strong></td><td>admirable persistence (obdivuhodná vytrvalost)</td></tr>
          </table>
        </div>`
      }
    ]
  },

  {
    id: "transformations",
    title: "Transformace vět (Key Word Transformations - Part 4)",
    icon: "🔄",
    shortDesc: "Nejvíce bodovaná část Use of English (až 2 body za větu). Pevné šablony a vazby.",
    summary: "Musíš doplnit 3 až 6 slov včetně zadaného klíčového slova. Klíčové slovo se NIKDY nesmí změnit. Každá věta se skládá ze 2 bodovaných částí (např. 1 bod za správnou vazbu + 1 bod za správný gramatický tvar).",
    formula: "Původní věta ➔ [DOPLŇ 3-6 SLOV SE ZADANÝM SLOVEM] ➔ Význam zůstává 100% stejný",
    sections: [
      {
        heading: "1. Pasivní reporting s minulým časem (is thought to have been)",
        content: `Typický úkol: Nahradit větu typu <em>„Lidé věří, že X udělal Y v minulosti“</em>.
        
        <div class="rule-box">
          <strong>Pravidlo:</strong><br>
          Pokud mluvíme v přítomnosti o tom, co se stalo v minulosti, MUSÍME použít <strong>minulý pasivní infinitiv (TO HAVE BEEN + V3)</strong>:
        </div>
        
        <div class="example-item">
          <div class="en">People believe that the thief escaped via the roof. (THOUGHT)<br>
          ➔ The thief <strong>is thought to have escaped</strong> via the roof.</div>
          <div class="cz">Věří se, že zloděj utekl přes střechu.</div>
        </div>
        <div class="example-item">
          <div class="en">Experts say the painting was stolen centuries ago. (SAID)<br>
          ➔ The painting <strong>is said to have been stolen</strong> centuries ago.</div>
          <div class="cz">Říká se, že obraz byl ukraden před staletími.</div>
        </div>
        <div class="trap-box">
          ⚠️ <strong>Chyba, která stojí bod:</strong> Napsat pouze <em>„is thought to be stolen“</em>. To znamená přítomný děj (právě teď je kraden)! Pro minulost musí být <strong>TO HAVE BEEN</strong>!
        </div>`
      },
      {
        heading: "2. Podmínkové zkratky: BUT FOR a HAD IT NOT BEEN FOR",
        content: `Tyto vazby znamenají <em>„Nebýt něčeho / Kdyby nebylo...“</em> a nahrazují dlouhé souvětí 3. kondicionálu:
        
        <div class="rule-box">
          <code>If it hadn't been for [podstatné jméno]</code><br>
          = <code>Had it not been for [podstatné jméno]</code><br>
          = <code>But for [podstatné jméno]</code>
        </div>
        
        <div class="example-item">
          <div class="en">If it hadn't been for your timely help, we would have failed. (BUT)<br>
          ➔ <strong>But for your timely help</strong>, we would have failed.</div>
          <div class="cz">Nebýt tvé včasné pomoci, byli bychom neuspěli.</div>
        </div>
        <div class="example-item">
          <div class="en">If the weather hadn't delayed us, we would be home. (NOT)<br>
          ➔ <strong>Had it not been for the weather</strong>, we would be home.</div>
          <div class="cz">Kdyby nebylo počasí, byli bychom doma.</div>
        </div>`
      },
      {
        heading: "3. Unreal Past (Wish / Would rather / If only)",
        content: `Lítost nad přítomností vs. lítost nad minulostí:
        
        <div class="rule-box">
          • <strong>Lítost nad přítomností:</strong> Wish + Past Simple<br>
          &nbsp;&nbsp;<em>I wish I were taller.</em> (Kéž bych byl vyšší – teď)<br><br>
          • <strong>Lítost nad minulostí:</strong> Wish + Past Perfect (HAD + V3)<br>
          &nbsp;&nbsp;<em>I really regret not learning Spanish. (WISH)</em><br>
          &nbsp;&nbsp;➔ <em>I really <strong>wish I had learned</strong> Spanish.</em><br><br>
          • <strong>Preference chování jiné osoby (WOULD RATHER):</strong><br>
          &nbsp;&nbsp;Pokud chci, aby NĚKDO JINÝ něco (ne)dělal, použiji minulý čas:<br>
          &nbsp;&nbsp;<em>I would prefer you not to smoke here. (RATHER)</em><br>
          &nbsp;&nbsp;➔ <em>I <strong>would rather you did not smoke</strong> here.</em>
        </div>`
      },
      {
        heading: "4. Modální dedukce v minulosti (Could not have been / Must have been)",
        content: `
        <div class="example-item">
          <div class="en">It is impossible that Sarah saw Mark; he was in Paris. (HAVE)<br>
          ➔ Sarah <strong>could not have seen</strong> Mark; he was in Paris.</div>
          <div class="cz">Sarah Marka určitě nemohla vidět (vyloučená možnost v minulosti).</div>
        </div>
        <div class="trap-box">
          ⚠️ <strong>Pozor:</strong> Pro vyjádření nemožnosti v minulosti se v angličtině VŽDY používá <strong>could not have / cannot have</strong>. Výraz <em>must not have done</em> se v britské C1 angličtině nepoužívá pro nemožnost, ale pro zákaz nebo nezvyklou domněnku!
        </div>`
      },
      {
        heading: "5. Pevné C1 frázové konstrukce",
        content: `
        <div class="rule-box">
          • <strong>There is no point in doing sth</strong> ➔ <em>It is not worth doing sth</em><br>
          • <strong>He managed to finish</strong> ➔ <em>He succeeded in finishing</em><br>
          • <strong>She found it hard to understand</strong> ➔ <em>She had difficulty (in) understanding</em><br>
          • <strong>They postponed the match</strong> ➔ <em>The match was put off</em><br>
          • <strong>He ignored the advice</strong> ➔ <em>He took no notice of the advice</em>
        </div>`
      }
    ]
  },

  {
    id: "register",
    title: "Formální styl, Sloh & Eseje (Writing & Discourse)",
    icon: "📝",
    shortDesc: "Jak psát jako rodilý akademik a vyhnout se ztrátě bodů za neformální slovník.",
    summary: "Při zkoušce C1 Cambridge se v esejích, reportech a proposals přísně hodnotí tzv. Communicative Achievement. Použití hovorových spojek (so, but, anyway) a zkrácenin (don't) srazí tvou známku na 2 až 3.",
    formula: "Formální konektory + Subjunktiv + Vytýkací věty + Pasivní vazby (bez zkrácenin!)",
    sections: [
      {
        heading: "1. Tabulka hříchů: Čemu se ve formálním textu vyhnout",
        content: `
        <div class="table-container">
          <table class="theory-table">
            <tr><th>Neformální hřích (B1/B2)</th><th>C1 Formální náhrada</th><th>Příklad použití</th></tr>
            <tr><td><strong>So...</strong> (na začátku věty)</td><td><strong>Consequently, / As a consequence, / Thus,</strong></td><td><em>Consequently, the company suffered major losses.</em></td></tr>
            <tr><td><strong>But...</strong> (na začátku věty)</td><td><strong>However, / Nevertheless, / Nonethless,</strong></td><td><em>Nevertheless, there is substantial evidence to suggest...</em></td></tr>
            <tr><td><strong>Besides that / Anyway</strong></td><td><strong>Furthermore, / Moreover, / In addition,</strong></td><td><em>Furthermore, recent studies highlight...</em></td></tr>
            <tr><td><strong>A lot of / Tons of</strong></td><td><strong>A substantial amount of / Numerous / A multitude of</strong></td><td><em>A substantial proportion of the population...</em></td></tr>
            <tr><td><strong>Get rid of</strong></td><td><strong>Eliminate / Eradicate / Dispense with</strong></td><td><em>Measures to eliminate plastic waste...</em></td></tr>
            <tr><td><strong>In my opinion, I think that...</strong></td><td><strong>It is widely contended / argued that...</strong></td><td><em>It is widely acknowledged that literature fosters empathy.</em></td></tr>
            <tr><td><strong>Don't / Can't / Won't</strong></td><td><strong>Do not / Cannot / Will not</strong></td><td><em>Ve formálním C1 textu NIKDY nepoužívej zkráceniny!</em></td></tr>
          </table>
        </div>`
      },
      {
        heading: "2. Formální subjunktiv (Mandative Subjunctive)",
        content: `Subjunktiv je absolutní klenot pro psaní esejí a reportů. Používá se po slovesech doporučení a požadavků (<em>recommend, suggest, insist, demand, propose that...</em>). Sloveso za podmětem zůstává v <strong>základním infinitivním tvaru bez 'to'</strong> bez ohledu na osobu a čas!
        
        <div class="example-item">
          <div class="en">The committee recommended that the facility <strong>be shut</strong> down immediately.</div>
          <div class="cz">Výbor doporučil, aby zařízení <strong>bylo</strong> okamžitě uzavřeno. (NIKOLIV: was shut down / is shut down).</div>
        </div>
        <div class="example-item">
          <div class="en">The doctor insisted that the patient <strong>take</strong> a week off.</div>
          <div class="cz">Lékař trval na tom, aby si pacient vzal týden volno. (NIKOLIV: takes a week off).</div>
        </div>
        <div class="example-item">
          <div class="en">It is imperative that every citizen <strong>have</strong> access to clean water.</div>
          <div class="cz">Je nezbytné, aby každý občan měl přístup k čisté vodě. (NIKOLIV: has access).</div>
        </div>`
      },
      {
        heading: "3. Smíšené kondicionály (Mixed Conditionals)",
        content: `Smíšený kondicionál kombinuje děj v minulosti s následkem v přítomnosti (nebo naopak):
        
        <div class="rule-box">
          <strong>Minulá podmínka ➔ Přítomný následek:</strong><br>
          <code>IF + Past Perfect (had + V3) ... WOULD + základní tvar slovesa</code>
        </div>
        
        <div class="example-item">
          <div class="en">If she <strong>had accepted</strong> the job in London three years ago, she <strong>would be</strong> a director right now.</div>
          <div class="cz">Kdyby tu práci před 3 lety vzala (minulost), byla by teď ředitelkou (přítomnost – 'right now'). Proto 'would be', nikoli 'would have been'!</div>
        </div>`
      },
      {
        heading: "4. Vytýkací věty (Cleft Sentences) pro wow-efekt",
        content: `Cleft sentence rozloží větu tak, aby zdůraznila klíčovou informaci. Rodilí mluvčí je milují pro úvody esejí:
        
        <div class="example-item">
          <div class="en"><em>Běžná věta:</em> The lack of communication caused the failure.<br>
          ➔ <em>C1 Cleft věta:</em> <strong>What caused the failure was</strong> the complete lack of communication.</div>
        </div>
        <div class="example-item">
          <div class="en"><em>Běžná věta:</em> We understood the problem only after the audit.<br>
          ➔ <em>C1 Cleft věta:</em> <strong>It was not until the audit was completed that</strong> we understood the problem.</div>
        </div>`
      }
    ]
  },

  {
    id: "collocations",
    title: "Kolokace, Idiomy & Předložkové vazby (Use of English)",
    icon: "🧩",
    shortDesc: "Ustálená spojení slov, kde selhává doslovný překlad a rozhoduje přesnost rodilého mluvčího.",
    summary: "V C1 se testují jemné významové nuance – slova, která znamenají téměř totéž, ale pojí se s jinými podstatnými jmény nebo předložkami.",
    formula: "Pevné vazby: Předložka + Jméno + Předložka / Sloveso + Příslušná předložka",
    sections: [
      {
        heading: "1. Klíčové předložkové vazby z testů",
        content: `
        <div class="table-container">
          <table class="theory-table">
            <tr><th>Předložková vazba</th><th>Překlad a význam</th><th>Příklad ve větě</th></tr>
            <tr><td><strong>come into effect / force</strong></td><td>vstoupit v platnost (zákon, pravidlo)</td><td><em>The new regulations come into effect in January.</em></td></tr>
            <tr><td><strong>on the grounds of</strong></td><td>na základě / z důvodu něčeho</td><td><em>His claim was rejected on the grounds of fraud.</em></td></tr>
            <tr><td><strong>at the expense of</strong></td><td>na úkor něčeho (kvality, bezpečí)</td><td><em>Speed should not come at the expense of safety.</em></td></tr>
            <tr><td><strong>with a view to (+ -ing)</strong></td><td>za účelem / s vyhlídkou na</td><td><em>He invested with a view to expanding the firm.</em></td></tr>
            <tr><td><strong>on the verge / brink of</strong></td><td>na pokraji / na prahu průlomu či krachu</td><td><em>The team is on the verge of a major discovery.</em></td></tr>
            <tr><td><strong>by no means</strong></td><td>v žádném případě / ani v nejmenším</td><td><em>This task is by no means easy.</em></td></tr>
            <tr><td><strong>take sth for granted</strong></td><td>brát něco jako samozřejmost</td><td><em>Do not take good health for granted.</em></td></tr>
            <tr><td><strong>in the light of</strong></td><td>ve světle nových skutečností</td><td><em>In light of recent events, we must reconsider.</em></td></tr>
          </table>
        </div>`
      },
      {
        heading: "2. C1 Zkouškové kolokace a idiomy",
        content: `
        <div class="rule-box">
          • <strong>a minute fraction</strong> [maɪˈnjuːt] = zcela nepatrný zlomek (nikoli 'minimal fraction')<br>
          • <strong>to be taken aback</strong> = být šokován / vyveden z míry / zaskočen<br>
          • <strong>to fall short of expectations</strong> = zklamat očekávání / nedosáhnout na cíl<br>
          • <strong>to give rise to sth</strong> = vyvolat / zavdat příčinu k něčemu (debatám, protestům)<br>
          • <strong>refused to be drawn into</strong> = odmítl se nechat zatáhnout do diskuze<br>
          • <strong>Much as I [verb]...</strong> = Ačkoli velmi obdivuji/souhlasím... (přípustková věta)<br>
          • <strong>prone to sth / prone to doing sth</strong> = náchylný k něčemu (zranění, chybám)
        </div>`
      },
      {
        heading: "3. Nejdůležitější frázová slovesa pro C1",
        content: `
        <div class="rule-box">
          • <strong>put up with</strong> = snášet / tolerovat nepříjemné chování<br>
          • <strong>come across</strong> = náhodou narazit na někoho / něco<br>
          • <strong>put off</strong> = odložit na později (postpone)<br>
          • <strong>bring about</strong> = způsobit / zapříčinit změnu (cause)<br>
          • <strong>account for</strong> = vysvětlovat / tvořit procentuální podíl<br>
          • <strong>carry out</strong> = provést / uskutečnit (výzkum, experiment)
        </div>`
      }
    ]
  }
];

if (typeof module !== "undefined") {
  module.exports = { C1_THEORY_DATABASE };
}
