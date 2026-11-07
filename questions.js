// Databáze otázek pro C1 Cambridge Advanced (CAE)
// Celkem 1080 otázek: 54 dní (od 08.11.2026 do 31.12.2026) x 20 otázek denně

const C1_QUESTIONS = [
  {
    "id": "c1-d01-q01",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Hardly ______ stepped into the shower when the fire alarm began to wail.",
    "options": [
      "I had",
      "had I",
      "did I",
      "have I"
    ],
    "answer": 1,
    "explanation": "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.",
    "tip": "Hardly / Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d01-q02",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Under no circumstances ______ allow unauthorized personnel into the control room.",
    "options": [
      "you should",
      "are you to",
      "should you",
      "you must"
    ],
    "answer": 2,
    "explanation": "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.",
    "tip": "Nikdy nezačínej větu 'Under no circumstances you...'"
  },
  {
    "id": "c1-d01-q03",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "No sooner had the keynote speaker begun ______ the power went out.",
    "options": [
      "when",
      "than",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.",
    "tip": "Hardly = when, No sooner = than."
  },
  {
    "id": "c1-d01-q04",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Seldom ______ witnessed such an extraordinary display of athletic prowess.",
    "options": [
      "we have",
      "have we",
      "did we",
      "we did"
    ],
    "answer": 1,
    "explanation": "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).",
    "tip": "Seldom / Rarely + have we / do we."
  },
  {
    "id": "c1-d01-q05",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The witness gave a completely ________ account of the robbery. (CONTRADICT)",
    "answer": [
      "contradictory"
    ],
    "explanation": "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).",
    "tip": "Přípona -ory: contradict ➔ contradictory."
  },
  {
    "id": "c1-d01-q06",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)",
    "answer": [
      "detrimental"
    ],
    "explanation": "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).",
    "tip": "Detrimental effect on sth."
  },
  {
    "id": "c1-d01-q07",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Arriving two hours late for an interview is utterly ________. (EXCUSE)",
    "answer": [
      "inexcusable"
    ],
    "explanation": "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.",
    "tip": "Záporná předpona in- + přípona -able."
  },
  {
    "id": "c1-d01-q08",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Despite her initial ________, she accepted the promotion. (RELUCTANT)",
    "answer": [
      "reluctance"
    ],
    "explanation": "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).",
    "tip": "Koncovka -ance u podstatných jmen."
  },
  {
    "id": "c1-d01-q09",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d01-q10",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d01-q11",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d01-q12",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d01-q13",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d01-q14",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d01-q15",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d01-q16",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d01-q17",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d01-q18",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d01-q19",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d01-q20",
    "dayNumber": 1,
    "date": "2026-11-08",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d02-q01",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only when she removed her disguise ______ who she actually was.",
    "options": [
      "we recognized",
      "did we recognize",
      "had we recognized",
      "we did recognize"
    ],
    "answer": 1,
    "explanation": "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.",
    "tip": "Inverze u 'Only when' je až ve druhé větě!"
  },
  {
    "id": "c1-d02-q02",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not only ______ win the national tournament, but she also broke the record.",
    "options": [
      "she did",
      "did she",
      "was she",
      "had she"
    ],
    "answer": 1,
    "explanation": "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.",
    "tip": "Not only did he do X, but he also did Y."
  },
  {
    "id": "c1-d02-q03",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Little ______ they realize the catastrophic consequences of their decision.",
    "options": [
      "did",
      "had",
      "have",
      "do"
    ],
    "answer": 0,
    "explanation": "Idiom 'Little did they know/realize' = Neměli ani tušení.",
    "tip": "Little funguje jako záporné příslovce s inverzí."
  },
  {
    "id": "c1-d02-q04",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "At no point during the audit ______ able to verify the missing funds.",
    "options": [
      "the accountants were",
      "were the accountants",
      "had the accountants",
      "did the accountants"
    ],
    "answer": 1,
    "explanation": "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.",
    "tip": "At no point / At no time were they..."
  },
  {
    "id": "c1-d02-q05",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The engineers plan to ________ the tunnel to allow larger trains. (WIDE)",
    "answer": [
      "widen"
    ],
    "explanation": "Sloveso od 'wide' je 'widen' (rozšířit).",
    "tip": "Přípona -en tvoří slovesa: widen, lengthen, deepen."
  },
  {
    "id": "c1-d02-q06",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The laboratory tests were ________, so the trial was postponed. (CONCLUDE)",
    "answer": [
      "inconclusive"
    ],
    "explanation": "Výsledky byly neprůkazné = in-conclusive.",
    "tip": "Conclude ➔ conclusive ➔ inconclusive."
  },
  {
    "id": "c1-d02-q07",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She is an ________ gifted pianist who performs worldwide. (EXCEPTION)",
    "answer": [
      "exceptionally"
    ],
    "explanation": "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.",
    "tip": "Exception ➔ exceptional ➔ exceptionally."
  },
  {
    "id": "c1-d02-q08",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)",
    "answer": [
      "misconception"
    ],
    "explanation": "Mylná představa = mis-conception.",
    "tip": "Předpona mis- značí omyl/chybu."
  },
  {
    "id": "c1-d02-q09",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d02-q10",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d02-q11",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d02-q12",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d02-q13",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d02-q14",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d02-q15",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d02-q16",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d02-q17",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d02-q18",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d02-q19",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d02-q20",
    "dayNumber": 2,
    "date": "2026-11-09",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d03-q01",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not until midnight ______ return from his secret mission.",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answer": 1,
    "explanation": "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.",
    "tip": "Not until then did I understand."
  },
  {
    "id": "c1-d03-q02",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only by streamlining our logistics ______ remain competitive in the global market.",
    "options": [
      "we can",
      "can we",
      "we will",
      "are we"
    ],
    "answer": 1,
    "explanation": "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.",
    "tip": "Only by doing X can we achieve Y."
  },
  {
    "id": "c1-d03-q03",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Rarely ______ seen such dedication among first-year university students.",
    "options": [
      "professors have",
      "have professors",
      "did professors",
      "were professors"
    ],
    "answer": 1,
    "explanation": "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.",
    "tip": "Rarely have I seen such brilliance."
  },
  {
    "id": "c1-d03-q04",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Nowhere ______ a more picturesque medieval village in all of Europe.",
    "options": [
      "you will find",
      "will you find",
      "you can find",
      "did you find"
    ],
    "answer": 1,
    "explanation": "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.",
    "tip": "Nowhere else will you encounter this."
  },
  {
    "id": "c1-d03-q05",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The Himalayan weather is notoriously ________ in winter. (PREDICT)",
    "answer": [
      "unpredictable"
    ],
    "explanation": "Nepředvídatelný = un-predict-able.",
    "tip": "Unpredictable weather."
  },
  {
    "id": "c1-d03-q06",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "He tried to ________ his excessive spending by claiming it was an investment. (JUST)",
    "answer": [
      "justify"
    ],
    "explanation": "Sloveso od 'just' je 'justify' (ospravedlnit).",
    "tip": "Přípona -ify tvoří slovesa: justify, clarify, purify."
  },
  {
    "id": "c1-d03-q07",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His repeated misconduct led to his summary ________ from the university. (DISMISS)",
    "answer": [
      "dismissal"
    ],
    "explanation": "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).",
    "tip": "Dismiss ➔ dismissal."
  },
  {
    "id": "c1-d03-q08",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The business underwent a remarkable ________ over the last decade. (EXPAND)",
    "answer": [
      "expansion"
    ],
    "explanation": "Podstatné jméno od 'expand' je 'expansion' (rozšíření).",
    "tip": "Expand ➔ expansion (se 's')."
  },
  {
    "id": "c1-d03-q09",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d03-q10",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d03-q11",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d03-q12",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d03-q13",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d03-q14",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d03-q15",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d03-q16",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d03-q17",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d03-q18",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d03-q19",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d03-q20",
    "dayNumber": 3,
    "date": "2026-11-10",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d04-q01",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "On no account ______ leave your luggage unattended at the terminal.",
    "options": [
      "passengers must",
      "must passengers",
      "should passengers to",
      "passengers are"
    ],
    "answer": 1,
    "explanation": "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.",
    "tip": "On no account must you sign without reading."
  },
  {
    "id": "c1-d04-q02",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Scarcely had the debate started ______ the candidates began shouting at each other.",
    "options": [
      "when",
      "than",
      "as",
      "while"
    ],
    "answer": 0,
    "explanation": "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.",
    "tip": "Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d04-q03",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only after reviewing the security footage ______ what had actually happened.",
    "options": [
      "the detective knew",
      "did the detective know",
      "the detective had known",
      "was the detective knowing"
    ],
    "answer": 1,
    "explanation": "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.",
    "tip": "Only after reading it did I sign."
  },
  {
    "id": "c1-d04-q04",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Had I known about the changes in the schedule, I ______ the meeting earlier.",
    "options": [
      "would attend",
      "would have attended",
      "will attend",
      "had attended"
    ],
    "answer": 1,
    "explanation": "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.",
    "tip": "Had I known = If I had known."
  },
  {
    "id": "c1-d04-q05",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)",
    "answer": [
      "insignificant"
    ],
    "explanation": "Nepatrný / nevýznamný = in-significant.",
    "tip": "Significant ➔ insignificant."
  },
  {
    "id": "c1-d04-q06",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)",
    "answer": [
      "suspicious"
    ],
    "explanation": "Podezřívavý = suspicious.",
    "tip": "Suspect ➔ suspicious."
  },
  {
    "id": "c1-d04-q07",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The museum acquired a manuscript of ________ historical importance. (ESTIMATE)",
    "answer": [
      "inestimable"
    ],
    "explanation": "Nevyčíslitelný / nesmírný = in-estim-able.",
    "tip": "Inestimable value / importance."
  },
  {
    "id": "c1-d04-q08",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)",
    "answer": [
      "imperceptible"
    ],
    "explanation": "Téměř nepostřehnutelný = im-perceptible.",
    "tip": "Perceive ➔ perceptible ➔ imperceptible."
  },
  {
    "id": "c1-d04-q09",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d04-q10",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d04-q11",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d04-q12",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d04-q13",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d04-q14",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d04-q15",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d04-q16",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d04-q17",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d04-q18",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d04-q19",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d04-q20",
    "dayNumber": 4,
    "date": "2026-11-11",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d05-q01",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Were you to reconsider your resignation, the board ______ delighted to keep you.",
    "options": [
      "will be",
      "would be",
      "is",
      "had been"
    ],
    "answer": 1,
    "explanation": "Invertovaný 2. kondicionál: 'Were you to reconsider' = 'If you were to reconsider'. Následek: 'would be'.",
    "tip": "Were you to do sth = If you were to do sth."
  },
  {
    "id": "c1-d05-q02",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Should you require any further assistance, please ______ the reception desk.",
    "options": [
      "contact",
      "to contact",
      "contacting",
      "will contact"
    ],
    "answer": 0,
    "explanation": "Invertovaný 1. kondicionál: 'Should you require' = 'If you should require'. V rozkaze následuje infinitiv 'contact'.",
    "tip": "Should you need help = If you happen to need help."
  },
  {
    "id": "c1-d05-q03",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "In no way ______ be held responsible for damages caused by the storm.",
    "options": [
      "the landlord can",
      "can the landlord",
      "the landlord should",
      "will the landlord to"
    ],
    "answer": 1,
    "explanation": "'In no way' (V žádném případě) vyžaduje inverzi: 'can the landlord be held'.",
    "tip": "In no way can we accept this proposal."
  },
  {
    "id": "c1-d05-q04",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Barely had the teacher left the classroom ______ the children started talking.",
    "options": [
      "than",
      "when",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'Barely had... WHEN...' se pojí se spojkou when.",
    "tip": "Barely had I arrived when the phone rang."
  },
  {
    "id": "c1-d05-q05",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His argument was utterly ________ and lacked any supporting evidence. (DEFEND)",
    "answer": [
      "indefensible"
    ],
    "explanation": "Neobhajitelný = in-defensible.",
    "tip": "Defend ➔ defensible ➔ indefensible."
  },
  {
    "id": "c1-d05-q06",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The antique vase was of ________ value and could not be replaced. (PRICE)",
    "answer": [
      "priceless"
    ],
    "explanation": "Klenot k nezaplacení = price-less.",
    "tip": "Priceless = nevyčíslitelné hodnoty (nikoli bezcenný!)."
  },
  {
    "id": "c1-d05-q07",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Her explanation was ________ and solved the mystery completely. (SATISFY)",
    "answer": [
      "satisfactory"
    ],
    "explanation": "Uspokojivý = satisfactory.",
    "tip": "Satisfy ➔ satisfactory."
  },
  {
    "id": "c1-d05-q08",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The sudden cancellation of the flight caused extreme ________ to passengers. (CONVENIENT)",
    "answer": [
      "inconvenience"
    ],
    "explanation": "Nepohodlí / potíže = in-convenience.",
    "tip": "Convenient ➔ inconvenience."
  },
  {
    "id": "c1-d05-q09",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d05-q10",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d05-q11",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d05-q12",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d05-q13",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d05-q14",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d05-q15",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d05-q16",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d05-q17",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d05-q18",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d05-q19",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d05-q20",
    "dayNumber": 5,
    "date": "2026-11-12",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d06-q01",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Hardly ______ stepped into the shower when the fire alarm began to wail.",
    "options": [
      "I had",
      "had I",
      "did I",
      "have I"
    ],
    "answer": 1,
    "explanation": "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.",
    "tip": "Hardly / Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d06-q02",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Under no circumstances ______ allow unauthorized personnel into the control room.",
    "options": [
      "you should",
      "are you to",
      "should you",
      "you must"
    ],
    "answer": 2,
    "explanation": "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.",
    "tip": "Nikdy nezačínej větu 'Under no circumstances you...'"
  },
  {
    "id": "c1-d06-q03",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "No sooner had the keynote speaker begun ______ the power went out.",
    "options": [
      "when",
      "than",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.",
    "tip": "Hardly = when, No sooner = than."
  },
  {
    "id": "c1-d06-q04",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Seldom ______ witnessed such an extraordinary display of athletic prowess.",
    "options": [
      "we have",
      "have we",
      "did we",
      "we did"
    ],
    "answer": 1,
    "explanation": "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).",
    "tip": "Seldom / Rarely + have we / do we."
  },
  {
    "id": "c1-d06-q05",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The witness gave a completely ________ account of the robbery. (CONTRADICT)",
    "answer": [
      "contradictory"
    ],
    "explanation": "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).",
    "tip": "Přípona -ory: contradict ➔ contradictory."
  },
  {
    "id": "c1-d06-q06",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)",
    "answer": [
      "detrimental"
    ],
    "explanation": "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).",
    "tip": "Detrimental effect on sth."
  },
  {
    "id": "c1-d06-q07",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Arriving two hours late for an interview is utterly ________. (EXCUSE)",
    "answer": [
      "inexcusable"
    ],
    "explanation": "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.",
    "tip": "Záporná předpona in- + přípona -able."
  },
  {
    "id": "c1-d06-q08",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Despite her initial ________, she accepted the promotion. (RELUCTANT)",
    "answer": [
      "reluctance"
    ],
    "explanation": "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).",
    "tip": "Koncovka -ance u podstatných jmen."
  },
  {
    "id": "c1-d06-q09",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d06-q10",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d06-q11",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d06-q12",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d06-q13",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d06-q14",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d06-q15",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d06-q16",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d06-q17",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d06-q18",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d06-q19",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d06-q20",
    "dayNumber": 6,
    "date": "2026-11-13",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d07-q01",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only when she removed her disguise ______ who she actually was.",
    "options": [
      "we recognized",
      "did we recognize",
      "had we recognized",
      "we did recognize"
    ],
    "answer": 1,
    "explanation": "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.",
    "tip": "Inverze u 'Only when' je až ve druhé větě!"
  },
  {
    "id": "c1-d07-q02",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not only ______ win the national tournament, but she also broke the record.",
    "options": [
      "she did",
      "did she",
      "was she",
      "had she"
    ],
    "answer": 1,
    "explanation": "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.",
    "tip": "Not only did he do X, but he also did Y."
  },
  {
    "id": "c1-d07-q03",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Little ______ they realize the catastrophic consequences of their decision.",
    "options": [
      "did",
      "had",
      "have",
      "do"
    ],
    "answer": 0,
    "explanation": "Idiom 'Little did they know/realize' = Neměli ani tušení.",
    "tip": "Little funguje jako záporné příslovce s inverzí."
  },
  {
    "id": "c1-d07-q04",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "At no point during the audit ______ able to verify the missing funds.",
    "options": [
      "the accountants were",
      "were the accountants",
      "had the accountants",
      "did the accountants"
    ],
    "answer": 1,
    "explanation": "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.",
    "tip": "At no point / At no time were they..."
  },
  {
    "id": "c1-d07-q05",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The engineers plan to ________ the tunnel to allow larger trains. (WIDE)",
    "answer": [
      "widen"
    ],
    "explanation": "Sloveso od 'wide' je 'widen' (rozšířit).",
    "tip": "Přípona -en tvoří slovesa: widen, lengthen, deepen."
  },
  {
    "id": "c1-d07-q06",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The laboratory tests were ________, so the trial was postponed. (CONCLUDE)",
    "answer": [
      "inconclusive"
    ],
    "explanation": "Výsledky byly neprůkazné = in-conclusive.",
    "tip": "Conclude ➔ conclusive ➔ inconclusive."
  },
  {
    "id": "c1-d07-q07",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She is an ________ gifted pianist who performs worldwide. (EXCEPTION)",
    "answer": [
      "exceptionally"
    ],
    "explanation": "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.",
    "tip": "Exception ➔ exceptional ➔ exceptionally."
  },
  {
    "id": "c1-d07-q08",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)",
    "answer": [
      "misconception"
    ],
    "explanation": "Mylná představa = mis-conception.",
    "tip": "Předpona mis- značí omyl/chybu."
  },
  {
    "id": "c1-d07-q09",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d07-q10",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d07-q11",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d07-q12",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d07-q13",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d07-q14",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d07-q15",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d07-q16",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d07-q17",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d07-q18",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d07-q19",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d07-q20",
    "dayNumber": 7,
    "date": "2026-11-14",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d08-q01",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not until midnight ______ return from his secret mission.",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answer": 1,
    "explanation": "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.",
    "tip": "Not until then did I understand."
  },
  {
    "id": "c1-d08-q02",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only by streamlining our logistics ______ remain competitive in the global market.",
    "options": [
      "we can",
      "can we",
      "we will",
      "are we"
    ],
    "answer": 1,
    "explanation": "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.",
    "tip": "Only by doing X can we achieve Y."
  },
  {
    "id": "c1-d08-q03",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Rarely ______ seen such dedication among first-year university students.",
    "options": [
      "professors have",
      "have professors",
      "did professors",
      "were professors"
    ],
    "answer": 1,
    "explanation": "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.",
    "tip": "Rarely have I seen such brilliance."
  },
  {
    "id": "c1-d08-q04",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Nowhere ______ a more picturesque medieval village in all of Europe.",
    "options": [
      "you will find",
      "will you find",
      "you can find",
      "did you find"
    ],
    "answer": 1,
    "explanation": "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.",
    "tip": "Nowhere else will you encounter this."
  },
  {
    "id": "c1-d08-q05",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The Himalayan weather is notoriously ________ in winter. (PREDICT)",
    "answer": [
      "unpredictable"
    ],
    "explanation": "Nepředvídatelný = un-predict-able.",
    "tip": "Unpredictable weather."
  },
  {
    "id": "c1-d08-q06",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "He tried to ________ his excessive spending by claiming it was an investment. (JUST)",
    "answer": [
      "justify"
    ],
    "explanation": "Sloveso od 'just' je 'justify' (ospravedlnit).",
    "tip": "Přípona -ify tvoří slovesa: justify, clarify, purify."
  },
  {
    "id": "c1-d08-q07",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His repeated misconduct led to his summary ________ from the university. (DISMISS)",
    "answer": [
      "dismissal"
    ],
    "explanation": "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).",
    "tip": "Dismiss ➔ dismissal."
  },
  {
    "id": "c1-d08-q08",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The business underwent a remarkable ________ over the last decade. (EXPAND)",
    "answer": [
      "expansion"
    ],
    "explanation": "Podstatné jméno od 'expand' je 'expansion' (rozšíření).",
    "tip": "Expand ➔ expansion (se 's')."
  },
  {
    "id": "c1-d08-q09",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d08-q10",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d08-q11",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d08-q12",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d08-q13",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d08-q14",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d08-q15",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d08-q16",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d08-q17",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d08-q18",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d08-q19",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d08-q20",
    "dayNumber": 8,
    "date": "2026-11-15",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d09-q01",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "On no account ______ leave your luggage unattended at the terminal.",
    "options": [
      "passengers must",
      "must passengers",
      "should passengers to",
      "passengers are"
    ],
    "answer": 1,
    "explanation": "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.",
    "tip": "On no account must you sign without reading."
  },
  {
    "id": "c1-d09-q02",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Scarcely had the debate started ______ the candidates began shouting at each other.",
    "options": [
      "when",
      "than",
      "as",
      "while"
    ],
    "answer": 0,
    "explanation": "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.",
    "tip": "Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d09-q03",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only after reviewing the security footage ______ what had actually happened.",
    "options": [
      "the detective knew",
      "did the detective know",
      "the detective had known",
      "was the detective knowing"
    ],
    "answer": 1,
    "explanation": "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.",
    "tip": "Only after reading it did I sign."
  },
  {
    "id": "c1-d09-q04",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Had I known about the changes in the schedule, I ______ the meeting earlier.",
    "options": [
      "would attend",
      "would have attended",
      "will attend",
      "had attended"
    ],
    "answer": 1,
    "explanation": "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.",
    "tip": "Had I known = If I had known."
  },
  {
    "id": "c1-d09-q05",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)",
    "answer": [
      "insignificant"
    ],
    "explanation": "Nepatrný / nevýznamný = in-significant.",
    "tip": "Significant ➔ insignificant."
  },
  {
    "id": "c1-d09-q06",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)",
    "answer": [
      "suspicious"
    ],
    "explanation": "Podezřívavý = suspicious.",
    "tip": "Suspect ➔ suspicious."
  },
  {
    "id": "c1-d09-q07",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The museum acquired a manuscript of ________ historical importance. (ESTIMATE)",
    "answer": [
      "inestimable"
    ],
    "explanation": "Nevyčíslitelný / nesmírný = in-estim-able.",
    "tip": "Inestimable value / importance."
  },
  {
    "id": "c1-d09-q08",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)",
    "answer": [
      "imperceptible"
    ],
    "explanation": "Téměř nepostřehnutelný = im-perceptible.",
    "tip": "Perceive ➔ perceptible ➔ imperceptible."
  },
  {
    "id": "c1-d09-q09",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d09-q10",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d09-q11",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d09-q12",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d09-q13",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d09-q14",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d09-q15",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d09-q16",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d09-q17",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d09-q18",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d09-q19",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d09-q20",
    "dayNumber": 9,
    "date": "2026-11-16",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d10-q01",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Were you to reconsider your resignation, the board ______ delighted to keep you.",
    "options": [
      "will be",
      "would be",
      "is",
      "had been"
    ],
    "answer": 1,
    "explanation": "Invertovaný 2. kondicionál: 'Were you to reconsider' = 'If you were to reconsider'. Následek: 'would be'.",
    "tip": "Were you to do sth = If you were to do sth."
  },
  {
    "id": "c1-d10-q02",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Should you require any further assistance, please ______ the reception desk.",
    "options": [
      "contact",
      "to contact",
      "contacting",
      "will contact"
    ],
    "answer": 0,
    "explanation": "Invertovaný 1. kondicionál: 'Should you require' = 'If you should require'. V rozkaze následuje infinitiv 'contact'.",
    "tip": "Should you need help = If you happen to need help."
  },
  {
    "id": "c1-d10-q03",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "In no way ______ be held responsible for damages caused by the storm.",
    "options": [
      "the landlord can",
      "can the landlord",
      "the landlord should",
      "will the landlord to"
    ],
    "answer": 1,
    "explanation": "'In no way' (V žádném případě) vyžaduje inverzi: 'can the landlord be held'.",
    "tip": "In no way can we accept this proposal."
  },
  {
    "id": "c1-d10-q04",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Barely had the teacher left the classroom ______ the children started talking.",
    "options": [
      "than",
      "when",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'Barely had... WHEN...' se pojí se spojkou when.",
    "tip": "Barely had I arrived when the phone rang."
  },
  {
    "id": "c1-d10-q05",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His argument was utterly ________ and lacked any supporting evidence. (DEFEND)",
    "answer": [
      "indefensible"
    ],
    "explanation": "Neobhajitelný = in-defensible.",
    "tip": "Defend ➔ defensible ➔ indefensible."
  },
  {
    "id": "c1-d10-q06",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The antique vase was of ________ value and could not be replaced. (PRICE)",
    "answer": [
      "priceless"
    ],
    "explanation": "Klenot k nezaplacení = price-less.",
    "tip": "Priceless = nevyčíslitelné hodnoty (nikoli bezcenný!)."
  },
  {
    "id": "c1-d10-q07",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Her explanation was ________ and solved the mystery completely. (SATISFY)",
    "answer": [
      "satisfactory"
    ],
    "explanation": "Uspokojivý = satisfactory.",
    "tip": "Satisfy ➔ satisfactory."
  },
  {
    "id": "c1-d10-q08",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The sudden cancellation of the flight caused extreme ________ to passengers. (CONVENIENT)",
    "answer": [
      "inconvenience"
    ],
    "explanation": "Nepohodlí / potíže = in-convenience.",
    "tip": "Convenient ➔ inconvenience."
  },
  {
    "id": "c1-d10-q09",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d10-q10",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d10-q11",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d10-q12",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d10-q13",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d10-q14",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d10-q15",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d10-q16",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d10-q17",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d10-q18",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d10-q19",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d10-q20",
    "dayNumber": 10,
    "date": "2026-11-17",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d11-q01",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Hardly ______ stepped into the shower when the fire alarm began to wail.",
    "options": [
      "I had",
      "had I",
      "did I",
      "have I"
    ],
    "answer": 1,
    "explanation": "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.",
    "tip": "Hardly / Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d11-q02",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Under no circumstances ______ allow unauthorized personnel into the control room.",
    "options": [
      "you should",
      "are you to",
      "should you",
      "you must"
    ],
    "answer": 2,
    "explanation": "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.",
    "tip": "Nikdy nezačínej větu 'Under no circumstances you...'"
  },
  {
    "id": "c1-d11-q03",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "No sooner had the keynote speaker begun ______ the power went out.",
    "options": [
      "when",
      "than",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.",
    "tip": "Hardly = when, No sooner = than."
  },
  {
    "id": "c1-d11-q04",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Seldom ______ witnessed such an extraordinary display of athletic prowess.",
    "options": [
      "we have",
      "have we",
      "did we",
      "we did"
    ],
    "answer": 1,
    "explanation": "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).",
    "tip": "Seldom / Rarely + have we / do we."
  },
  {
    "id": "c1-d11-q05",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The witness gave a completely ________ account of the robbery. (CONTRADICT)",
    "answer": [
      "contradictory"
    ],
    "explanation": "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).",
    "tip": "Přípona -ory: contradict ➔ contradictory."
  },
  {
    "id": "c1-d11-q06",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)",
    "answer": [
      "detrimental"
    ],
    "explanation": "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).",
    "tip": "Detrimental effect on sth."
  },
  {
    "id": "c1-d11-q07",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Arriving two hours late for an interview is utterly ________. (EXCUSE)",
    "answer": [
      "inexcusable"
    ],
    "explanation": "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.",
    "tip": "Záporná předpona in- + přípona -able."
  },
  {
    "id": "c1-d11-q08",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Despite her initial ________, she accepted the promotion. (RELUCTANT)",
    "answer": [
      "reluctance"
    ],
    "explanation": "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).",
    "tip": "Koncovka -ance u podstatných jmen."
  },
  {
    "id": "c1-d11-q09",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d11-q10",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d11-q11",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d11-q12",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d11-q13",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d11-q14",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d11-q15",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d11-q16",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d11-q17",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d11-q18",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d11-q19",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d11-q20",
    "dayNumber": 11,
    "date": "2026-11-18",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d12-q01",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only when she removed her disguise ______ who she actually was.",
    "options": [
      "we recognized",
      "did we recognize",
      "had we recognized",
      "we did recognize"
    ],
    "answer": 1,
    "explanation": "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.",
    "tip": "Inverze u 'Only when' je až ve druhé větě!"
  },
  {
    "id": "c1-d12-q02",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not only ______ win the national tournament, but she also broke the record.",
    "options": [
      "she did",
      "did she",
      "was she",
      "had she"
    ],
    "answer": 1,
    "explanation": "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.",
    "tip": "Not only did he do X, but he also did Y."
  },
  {
    "id": "c1-d12-q03",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Little ______ they realize the catastrophic consequences of their decision.",
    "options": [
      "did",
      "had",
      "have",
      "do"
    ],
    "answer": 0,
    "explanation": "Idiom 'Little did they know/realize' = Neměli ani tušení.",
    "tip": "Little funguje jako záporné příslovce s inverzí."
  },
  {
    "id": "c1-d12-q04",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "At no point during the audit ______ able to verify the missing funds.",
    "options": [
      "the accountants were",
      "were the accountants",
      "had the accountants",
      "did the accountants"
    ],
    "answer": 1,
    "explanation": "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.",
    "tip": "At no point / At no time were they..."
  },
  {
    "id": "c1-d12-q05",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The engineers plan to ________ the tunnel to allow larger trains. (WIDE)",
    "answer": [
      "widen"
    ],
    "explanation": "Sloveso od 'wide' je 'widen' (rozšířit).",
    "tip": "Přípona -en tvoří slovesa: widen, lengthen, deepen."
  },
  {
    "id": "c1-d12-q06",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The laboratory tests were ________, so the trial was postponed. (CONCLUDE)",
    "answer": [
      "inconclusive"
    ],
    "explanation": "Výsledky byly neprůkazné = in-conclusive.",
    "tip": "Conclude ➔ conclusive ➔ inconclusive."
  },
  {
    "id": "c1-d12-q07",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She is an ________ gifted pianist who performs worldwide. (EXCEPTION)",
    "answer": [
      "exceptionally"
    ],
    "explanation": "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.",
    "tip": "Exception ➔ exceptional ➔ exceptionally."
  },
  {
    "id": "c1-d12-q08",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)",
    "answer": [
      "misconception"
    ],
    "explanation": "Mylná představa = mis-conception.",
    "tip": "Předpona mis- značí omyl/chybu."
  },
  {
    "id": "c1-d12-q09",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d12-q10",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d12-q11",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d12-q12",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d12-q13",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d12-q14",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d12-q15",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d12-q16",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d12-q17",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d12-q18",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d12-q19",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d12-q20",
    "dayNumber": 12,
    "date": "2026-11-19",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d13-q01",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not until midnight ______ return from his secret mission.",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answer": 1,
    "explanation": "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.",
    "tip": "Not until then did I understand."
  },
  {
    "id": "c1-d13-q02",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only by streamlining our logistics ______ remain competitive in the global market.",
    "options": [
      "we can",
      "can we",
      "we will",
      "are we"
    ],
    "answer": 1,
    "explanation": "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.",
    "tip": "Only by doing X can we achieve Y."
  },
  {
    "id": "c1-d13-q03",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Rarely ______ seen such dedication among first-year university students.",
    "options": [
      "professors have",
      "have professors",
      "did professors",
      "were professors"
    ],
    "answer": 1,
    "explanation": "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.",
    "tip": "Rarely have I seen such brilliance."
  },
  {
    "id": "c1-d13-q04",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Nowhere ______ a more picturesque medieval village in all of Europe.",
    "options": [
      "you will find",
      "will you find",
      "you can find",
      "did you find"
    ],
    "answer": 1,
    "explanation": "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.",
    "tip": "Nowhere else will you encounter this."
  },
  {
    "id": "c1-d13-q05",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The Himalayan weather is notoriously ________ in winter. (PREDICT)",
    "answer": [
      "unpredictable"
    ],
    "explanation": "Nepředvídatelný = un-predict-able.",
    "tip": "Unpredictable weather."
  },
  {
    "id": "c1-d13-q06",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "He tried to ________ his excessive spending by claiming it was an investment. (JUST)",
    "answer": [
      "justify"
    ],
    "explanation": "Sloveso od 'just' je 'justify' (ospravedlnit).",
    "tip": "Přípona -ify tvoří slovesa: justify, clarify, purify."
  },
  {
    "id": "c1-d13-q07",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His repeated misconduct led to his summary ________ from the university. (DISMISS)",
    "answer": [
      "dismissal"
    ],
    "explanation": "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).",
    "tip": "Dismiss ➔ dismissal."
  },
  {
    "id": "c1-d13-q08",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The business underwent a remarkable ________ over the last decade. (EXPAND)",
    "answer": [
      "expansion"
    ],
    "explanation": "Podstatné jméno od 'expand' je 'expansion' (rozšíření).",
    "tip": "Expand ➔ expansion (se 's')."
  },
  {
    "id": "c1-d13-q09",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d13-q10",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d13-q11",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d13-q12",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d13-q13",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d13-q14",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d13-q15",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d13-q16",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d13-q17",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d13-q18",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d13-q19",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d13-q20",
    "dayNumber": 13,
    "date": "2026-11-20",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d14-q01",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "On no account ______ leave your luggage unattended at the terminal.",
    "options": [
      "passengers must",
      "must passengers",
      "should passengers to",
      "passengers are"
    ],
    "answer": 1,
    "explanation": "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.",
    "tip": "On no account must you sign without reading."
  },
  {
    "id": "c1-d14-q02",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Scarcely had the debate started ______ the candidates began shouting at each other.",
    "options": [
      "when",
      "than",
      "as",
      "while"
    ],
    "answer": 0,
    "explanation": "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.",
    "tip": "Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d14-q03",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only after reviewing the security footage ______ what had actually happened.",
    "options": [
      "the detective knew",
      "did the detective know",
      "the detective had known",
      "was the detective knowing"
    ],
    "answer": 1,
    "explanation": "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.",
    "tip": "Only after reading it did I sign."
  },
  {
    "id": "c1-d14-q04",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Had I known about the changes in the schedule, I ______ the meeting earlier.",
    "options": [
      "would attend",
      "would have attended",
      "will attend",
      "had attended"
    ],
    "answer": 1,
    "explanation": "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.",
    "tip": "Had I known = If I had known."
  },
  {
    "id": "c1-d14-q05",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)",
    "answer": [
      "insignificant"
    ],
    "explanation": "Nepatrný / nevýznamný = in-significant.",
    "tip": "Significant ➔ insignificant."
  },
  {
    "id": "c1-d14-q06",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)",
    "answer": [
      "suspicious"
    ],
    "explanation": "Podezřívavý = suspicious.",
    "tip": "Suspect ➔ suspicious."
  },
  {
    "id": "c1-d14-q07",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The museum acquired a manuscript of ________ historical importance. (ESTIMATE)",
    "answer": [
      "inestimable"
    ],
    "explanation": "Nevyčíslitelný / nesmírný = in-estim-able.",
    "tip": "Inestimable value / importance."
  },
  {
    "id": "c1-d14-q08",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)",
    "answer": [
      "imperceptible"
    ],
    "explanation": "Téměř nepostřehnutelný = im-perceptible.",
    "tip": "Perceive ➔ perceptible ➔ imperceptible."
  },
  {
    "id": "c1-d14-q09",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d14-q10",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d14-q11",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d14-q12",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d14-q13",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d14-q14",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d14-q15",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d14-q16",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d14-q17",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d14-q18",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d14-q19",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d14-q20",
    "dayNumber": 14,
    "date": "2026-11-21",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d15-q01",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Were you to reconsider your resignation, the board ______ delighted to keep you.",
    "options": [
      "will be",
      "would be",
      "is",
      "had been"
    ],
    "answer": 1,
    "explanation": "Invertovaný 2. kondicionál: 'Were you to reconsider' = 'If you were to reconsider'. Následek: 'would be'.",
    "tip": "Were you to do sth = If you were to do sth."
  },
  {
    "id": "c1-d15-q02",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Should you require any further assistance, please ______ the reception desk.",
    "options": [
      "contact",
      "to contact",
      "contacting",
      "will contact"
    ],
    "answer": 0,
    "explanation": "Invertovaný 1. kondicionál: 'Should you require' = 'If you should require'. V rozkaze následuje infinitiv 'contact'.",
    "tip": "Should you need help = If you happen to need help."
  },
  {
    "id": "c1-d15-q03",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "In no way ______ be held responsible for damages caused by the storm.",
    "options": [
      "the landlord can",
      "can the landlord",
      "the landlord should",
      "will the landlord to"
    ],
    "answer": 1,
    "explanation": "'In no way' (V žádném případě) vyžaduje inverzi: 'can the landlord be held'.",
    "tip": "In no way can we accept this proposal."
  },
  {
    "id": "c1-d15-q04",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Barely had the teacher left the classroom ______ the children started talking.",
    "options": [
      "than",
      "when",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'Barely had... WHEN...' se pojí se spojkou when.",
    "tip": "Barely had I arrived when the phone rang."
  },
  {
    "id": "c1-d15-q05",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His argument was utterly ________ and lacked any supporting evidence. (DEFEND)",
    "answer": [
      "indefensible"
    ],
    "explanation": "Neobhajitelný = in-defensible.",
    "tip": "Defend ➔ defensible ➔ indefensible."
  },
  {
    "id": "c1-d15-q06",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The antique vase was of ________ value and could not be replaced. (PRICE)",
    "answer": [
      "priceless"
    ],
    "explanation": "Klenot k nezaplacení = price-less.",
    "tip": "Priceless = nevyčíslitelné hodnoty (nikoli bezcenný!)."
  },
  {
    "id": "c1-d15-q07",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Her explanation was ________ and solved the mystery completely. (SATISFY)",
    "answer": [
      "satisfactory"
    ],
    "explanation": "Uspokojivý = satisfactory.",
    "tip": "Satisfy ➔ satisfactory."
  },
  {
    "id": "c1-d15-q08",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The sudden cancellation of the flight caused extreme ________ to passengers. (CONVENIENT)",
    "answer": [
      "inconvenience"
    ],
    "explanation": "Nepohodlí / potíže = in-convenience.",
    "tip": "Convenient ➔ inconvenience."
  },
  {
    "id": "c1-d15-q09",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d15-q10",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d15-q11",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d15-q12",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d15-q13",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d15-q14",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d15-q15",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d15-q16",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d15-q17",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d15-q18",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d15-q19",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d15-q20",
    "dayNumber": 15,
    "date": "2026-11-22",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d16-q01",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Hardly ______ stepped into the shower when the fire alarm began to wail.",
    "options": [
      "I had",
      "had I",
      "did I",
      "have I"
    ],
    "answer": 1,
    "explanation": "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.",
    "tip": "Hardly / Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d16-q02",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Under no circumstances ______ allow unauthorized personnel into the control room.",
    "options": [
      "you should",
      "are you to",
      "should you",
      "you must"
    ],
    "answer": 2,
    "explanation": "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.",
    "tip": "Nikdy nezačínej větu 'Under no circumstances you...'"
  },
  {
    "id": "c1-d16-q03",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "No sooner had the keynote speaker begun ______ the power went out.",
    "options": [
      "when",
      "than",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.",
    "tip": "Hardly = when, No sooner = than."
  },
  {
    "id": "c1-d16-q04",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Seldom ______ witnessed such an extraordinary display of athletic prowess.",
    "options": [
      "we have",
      "have we",
      "did we",
      "we did"
    ],
    "answer": 1,
    "explanation": "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).",
    "tip": "Seldom / Rarely + have we / do we."
  },
  {
    "id": "c1-d16-q05",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The witness gave a completely ________ account of the robbery. (CONTRADICT)",
    "answer": [
      "contradictory"
    ],
    "explanation": "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).",
    "tip": "Přípona -ory: contradict ➔ contradictory."
  },
  {
    "id": "c1-d16-q06",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)",
    "answer": [
      "detrimental"
    ],
    "explanation": "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).",
    "tip": "Detrimental effect on sth."
  },
  {
    "id": "c1-d16-q07",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Arriving two hours late for an interview is utterly ________. (EXCUSE)",
    "answer": [
      "inexcusable"
    ],
    "explanation": "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.",
    "tip": "Záporná předpona in- + přípona -able."
  },
  {
    "id": "c1-d16-q08",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Despite her initial ________, she accepted the promotion. (RELUCTANT)",
    "answer": [
      "reluctance"
    ],
    "explanation": "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).",
    "tip": "Koncovka -ance u podstatných jmen."
  },
  {
    "id": "c1-d16-q09",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d16-q10",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d16-q11",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d16-q12",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d16-q13",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d16-q14",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d16-q15",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d16-q16",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d16-q17",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d16-q18",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d16-q19",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d16-q20",
    "dayNumber": 16,
    "date": "2026-11-23",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d17-q01",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only when she removed her disguise ______ who she actually was.",
    "options": [
      "we recognized",
      "did we recognize",
      "had we recognized",
      "we did recognize"
    ],
    "answer": 1,
    "explanation": "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.",
    "tip": "Inverze u 'Only when' je až ve druhé větě!"
  },
  {
    "id": "c1-d17-q02",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not only ______ win the national tournament, but she also broke the record.",
    "options": [
      "she did",
      "did she",
      "was she",
      "had she"
    ],
    "answer": 1,
    "explanation": "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.",
    "tip": "Not only did he do X, but he also did Y."
  },
  {
    "id": "c1-d17-q03",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Little ______ they realize the catastrophic consequences of their decision.",
    "options": [
      "did",
      "had",
      "have",
      "do"
    ],
    "answer": 0,
    "explanation": "Idiom 'Little did they know/realize' = Neměli ani tušení.",
    "tip": "Little funguje jako záporné příslovce s inverzí."
  },
  {
    "id": "c1-d17-q04",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "At no point during the audit ______ able to verify the missing funds.",
    "options": [
      "the accountants were",
      "were the accountants",
      "had the accountants",
      "did the accountants"
    ],
    "answer": 1,
    "explanation": "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.",
    "tip": "At no point / At no time were they..."
  },
  {
    "id": "c1-d17-q05",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The engineers plan to ________ the tunnel to allow larger trains. (WIDE)",
    "answer": [
      "widen"
    ],
    "explanation": "Sloveso od 'wide' je 'widen' (rozšířit).",
    "tip": "Přípona -en tvoří slovesa: widen, lengthen, deepen."
  },
  {
    "id": "c1-d17-q06",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The laboratory tests were ________, so the trial was postponed. (CONCLUDE)",
    "answer": [
      "inconclusive"
    ],
    "explanation": "Výsledky byly neprůkazné = in-conclusive.",
    "tip": "Conclude ➔ conclusive ➔ inconclusive."
  },
  {
    "id": "c1-d17-q07",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She is an ________ gifted pianist who performs worldwide. (EXCEPTION)",
    "answer": [
      "exceptionally"
    ],
    "explanation": "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.",
    "tip": "Exception ➔ exceptional ➔ exceptionally."
  },
  {
    "id": "c1-d17-q08",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)",
    "answer": [
      "misconception"
    ],
    "explanation": "Mylná představa = mis-conception.",
    "tip": "Předpona mis- značí omyl/chybu."
  },
  {
    "id": "c1-d17-q09",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d17-q10",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d17-q11",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d17-q12",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d17-q13",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d17-q14",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d17-q15",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d17-q16",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d17-q17",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d17-q18",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d17-q19",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d17-q20",
    "dayNumber": 17,
    "date": "2026-11-24",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d18-q01",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not until midnight ______ return from his secret mission.",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answer": 1,
    "explanation": "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.",
    "tip": "Not until then did I understand."
  },
  {
    "id": "c1-d18-q02",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only by streamlining our logistics ______ remain competitive in the global market.",
    "options": [
      "we can",
      "can we",
      "we will",
      "are we"
    ],
    "answer": 1,
    "explanation": "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.",
    "tip": "Only by doing X can we achieve Y."
  },
  {
    "id": "c1-d18-q03",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Rarely ______ seen such dedication among first-year university students.",
    "options": [
      "professors have",
      "have professors",
      "did professors",
      "were professors"
    ],
    "answer": 1,
    "explanation": "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.",
    "tip": "Rarely have I seen such brilliance."
  },
  {
    "id": "c1-d18-q04",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Nowhere ______ a more picturesque medieval village in all of Europe.",
    "options": [
      "you will find",
      "will you find",
      "you can find",
      "did you find"
    ],
    "answer": 1,
    "explanation": "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.",
    "tip": "Nowhere else will you encounter this."
  },
  {
    "id": "c1-d18-q05",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The Himalayan weather is notoriously ________ in winter. (PREDICT)",
    "answer": [
      "unpredictable"
    ],
    "explanation": "Nepředvídatelný = un-predict-able.",
    "tip": "Unpredictable weather."
  },
  {
    "id": "c1-d18-q06",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "He tried to ________ his excessive spending by claiming it was an investment. (JUST)",
    "answer": [
      "justify"
    ],
    "explanation": "Sloveso od 'just' je 'justify' (ospravedlnit).",
    "tip": "Přípona -ify tvoří slovesa: justify, clarify, purify."
  },
  {
    "id": "c1-d18-q07",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His repeated misconduct led to his summary ________ from the university. (DISMISS)",
    "answer": [
      "dismissal"
    ],
    "explanation": "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).",
    "tip": "Dismiss ➔ dismissal."
  },
  {
    "id": "c1-d18-q08",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The business underwent a remarkable ________ over the last decade. (EXPAND)",
    "answer": [
      "expansion"
    ],
    "explanation": "Podstatné jméno od 'expand' je 'expansion' (rozšíření).",
    "tip": "Expand ➔ expansion (se 's')."
  },
  {
    "id": "c1-d18-q09",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d18-q10",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d18-q11",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d18-q12",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d18-q13",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d18-q14",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d18-q15",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d18-q16",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d18-q17",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d18-q18",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d18-q19",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d18-q20",
    "dayNumber": 18,
    "date": "2026-11-25",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d19-q01",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "On no account ______ leave your luggage unattended at the terminal.",
    "options": [
      "passengers must",
      "must passengers",
      "should passengers to",
      "passengers are"
    ],
    "answer": 1,
    "explanation": "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.",
    "tip": "On no account must you sign without reading."
  },
  {
    "id": "c1-d19-q02",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Scarcely had the debate started ______ the candidates began shouting at each other.",
    "options": [
      "when",
      "than",
      "as",
      "while"
    ],
    "answer": 0,
    "explanation": "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.",
    "tip": "Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d19-q03",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only after reviewing the security footage ______ what had actually happened.",
    "options": [
      "the detective knew",
      "did the detective know",
      "the detective had known",
      "was the detective knowing"
    ],
    "answer": 1,
    "explanation": "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.",
    "tip": "Only after reading it did I sign."
  },
  {
    "id": "c1-d19-q04",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Had I known about the changes in the schedule, I ______ the meeting earlier.",
    "options": [
      "would attend",
      "would have attended",
      "will attend",
      "had attended"
    ],
    "answer": 1,
    "explanation": "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.",
    "tip": "Had I known = If I had known."
  },
  {
    "id": "c1-d19-q05",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)",
    "answer": [
      "insignificant"
    ],
    "explanation": "Nepatrný / nevýznamný = in-significant.",
    "tip": "Significant ➔ insignificant."
  },
  {
    "id": "c1-d19-q06",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)",
    "answer": [
      "suspicious"
    ],
    "explanation": "Podezřívavý = suspicious.",
    "tip": "Suspect ➔ suspicious."
  },
  {
    "id": "c1-d19-q07",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The museum acquired a manuscript of ________ historical importance. (ESTIMATE)",
    "answer": [
      "inestimable"
    ],
    "explanation": "Nevyčíslitelný / nesmírný = in-estim-able.",
    "tip": "Inestimable value / importance."
  },
  {
    "id": "c1-d19-q08",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)",
    "answer": [
      "imperceptible"
    ],
    "explanation": "Téměř nepostřehnutelný = im-perceptible.",
    "tip": "Perceive ➔ perceptible ➔ imperceptible."
  },
  {
    "id": "c1-d19-q09",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d19-q10",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d19-q11",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d19-q12",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d19-q13",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d19-q14",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d19-q15",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d19-q16",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d19-q17",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d19-q18",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d19-q19",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d19-q20",
    "dayNumber": 19,
    "date": "2026-11-26",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d20-q01",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Were you to reconsider your resignation, the board ______ delighted to keep you.",
    "options": [
      "will be",
      "would be",
      "is",
      "had been"
    ],
    "answer": 1,
    "explanation": "Invertovaný 2. kondicionál: 'Were you to reconsider' = 'If you were to reconsider'. Následek: 'would be'.",
    "tip": "Were you to do sth = If you were to do sth."
  },
  {
    "id": "c1-d20-q02",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Should you require any further assistance, please ______ the reception desk.",
    "options": [
      "contact",
      "to contact",
      "contacting",
      "will contact"
    ],
    "answer": 0,
    "explanation": "Invertovaný 1. kondicionál: 'Should you require' = 'If you should require'. V rozkaze následuje infinitiv 'contact'.",
    "tip": "Should you need help = If you happen to need help."
  },
  {
    "id": "c1-d20-q03",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "In no way ______ be held responsible for damages caused by the storm.",
    "options": [
      "the landlord can",
      "can the landlord",
      "the landlord should",
      "will the landlord to"
    ],
    "answer": 1,
    "explanation": "'In no way' (V žádném případě) vyžaduje inverzi: 'can the landlord be held'.",
    "tip": "In no way can we accept this proposal."
  },
  {
    "id": "c1-d20-q04",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Barely had the teacher left the classroom ______ the children started talking.",
    "options": [
      "than",
      "when",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'Barely had... WHEN...' se pojí se spojkou when.",
    "tip": "Barely had I arrived when the phone rang."
  },
  {
    "id": "c1-d20-q05",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His argument was utterly ________ and lacked any supporting evidence. (DEFEND)",
    "answer": [
      "indefensible"
    ],
    "explanation": "Neobhajitelný = in-defensible.",
    "tip": "Defend ➔ defensible ➔ indefensible."
  },
  {
    "id": "c1-d20-q06",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The antique vase was of ________ value and could not be replaced. (PRICE)",
    "answer": [
      "priceless"
    ],
    "explanation": "Klenot k nezaplacení = price-less.",
    "tip": "Priceless = nevyčíslitelné hodnoty (nikoli bezcenný!)."
  },
  {
    "id": "c1-d20-q07",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Her explanation was ________ and solved the mystery completely. (SATISFY)",
    "answer": [
      "satisfactory"
    ],
    "explanation": "Uspokojivý = satisfactory.",
    "tip": "Satisfy ➔ satisfactory."
  },
  {
    "id": "c1-d20-q08",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The sudden cancellation of the flight caused extreme ________ to passengers. (CONVENIENT)",
    "answer": [
      "inconvenience"
    ],
    "explanation": "Nepohodlí / potíže = in-convenience.",
    "tip": "Convenient ➔ inconvenience."
  },
  {
    "id": "c1-d20-q09",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d20-q10",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d20-q11",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d20-q12",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d20-q13",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d20-q14",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d20-q15",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d20-q16",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d20-q17",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d20-q18",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d20-q19",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d20-q20",
    "dayNumber": 20,
    "date": "2026-11-27",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d21-q01",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Hardly ______ stepped into the shower when the fire alarm began to wail.",
    "options": [
      "I had",
      "had I",
      "did I",
      "have I"
    ],
    "answer": 1,
    "explanation": "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.",
    "tip": "Hardly / Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d21-q02",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Under no circumstances ______ allow unauthorized personnel into the control room.",
    "options": [
      "you should",
      "are you to",
      "should you",
      "you must"
    ],
    "answer": 2,
    "explanation": "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.",
    "tip": "Nikdy nezačínej větu 'Under no circumstances you...'"
  },
  {
    "id": "c1-d21-q03",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "No sooner had the keynote speaker begun ______ the power went out.",
    "options": [
      "when",
      "than",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.",
    "tip": "Hardly = when, No sooner = than."
  },
  {
    "id": "c1-d21-q04",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Seldom ______ witnessed such an extraordinary display of athletic prowess.",
    "options": [
      "we have",
      "have we",
      "did we",
      "we did"
    ],
    "answer": 1,
    "explanation": "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).",
    "tip": "Seldom / Rarely + have we / do we."
  },
  {
    "id": "c1-d21-q05",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The witness gave a completely ________ account of the robbery. (CONTRADICT)",
    "answer": [
      "contradictory"
    ],
    "explanation": "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).",
    "tip": "Přípona -ory: contradict ➔ contradictory."
  },
  {
    "id": "c1-d21-q06",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)",
    "answer": [
      "detrimental"
    ],
    "explanation": "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).",
    "tip": "Detrimental effect on sth."
  },
  {
    "id": "c1-d21-q07",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Arriving two hours late for an interview is utterly ________. (EXCUSE)",
    "answer": [
      "inexcusable"
    ],
    "explanation": "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.",
    "tip": "Záporná předpona in- + přípona -able."
  },
  {
    "id": "c1-d21-q08",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Despite her initial ________, she accepted the promotion. (RELUCTANT)",
    "answer": [
      "reluctance"
    ],
    "explanation": "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).",
    "tip": "Koncovka -ance u podstatných jmen."
  },
  {
    "id": "c1-d21-q09",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d21-q10",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d21-q11",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d21-q12",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d21-q13",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d21-q14",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d21-q15",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d21-q16",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d21-q17",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d21-q18",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d21-q19",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d21-q20",
    "dayNumber": 21,
    "date": "2026-11-28",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d22-q01",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only when she removed her disguise ______ who she actually was.",
    "options": [
      "we recognized",
      "did we recognize",
      "had we recognized",
      "we did recognize"
    ],
    "answer": 1,
    "explanation": "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.",
    "tip": "Inverze u 'Only when' je až ve druhé větě!"
  },
  {
    "id": "c1-d22-q02",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not only ______ win the national tournament, but she also broke the record.",
    "options": [
      "she did",
      "did she",
      "was she",
      "had she"
    ],
    "answer": 1,
    "explanation": "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.",
    "tip": "Not only did he do X, but he also did Y."
  },
  {
    "id": "c1-d22-q03",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Little ______ they realize the catastrophic consequences of their decision.",
    "options": [
      "did",
      "had",
      "have",
      "do"
    ],
    "answer": 0,
    "explanation": "Idiom 'Little did they know/realize' = Neměli ani tušení.",
    "tip": "Little funguje jako záporné příslovce s inverzí."
  },
  {
    "id": "c1-d22-q04",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "At no point during the audit ______ able to verify the missing funds.",
    "options": [
      "the accountants were",
      "were the accountants",
      "had the accountants",
      "did the accountants"
    ],
    "answer": 1,
    "explanation": "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.",
    "tip": "At no point / At no time were they..."
  },
  {
    "id": "c1-d22-q05",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The engineers plan to ________ the tunnel to allow larger trains. (WIDE)",
    "answer": [
      "widen"
    ],
    "explanation": "Sloveso od 'wide' je 'widen' (rozšířit).",
    "tip": "Přípona -en tvoří slovesa: widen, lengthen, deepen."
  },
  {
    "id": "c1-d22-q06",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The laboratory tests were ________, so the trial was postponed. (CONCLUDE)",
    "answer": [
      "inconclusive"
    ],
    "explanation": "Výsledky byly neprůkazné = in-conclusive.",
    "tip": "Conclude ➔ conclusive ➔ inconclusive."
  },
  {
    "id": "c1-d22-q07",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She is an ________ gifted pianist who performs worldwide. (EXCEPTION)",
    "answer": [
      "exceptionally"
    ],
    "explanation": "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.",
    "tip": "Exception ➔ exceptional ➔ exceptionally."
  },
  {
    "id": "c1-d22-q08",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)",
    "answer": [
      "misconception"
    ],
    "explanation": "Mylná představa = mis-conception.",
    "tip": "Předpona mis- značí omyl/chybu."
  },
  {
    "id": "c1-d22-q09",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d22-q10",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d22-q11",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d22-q12",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d22-q13",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d22-q14",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d22-q15",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d22-q16",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d22-q17",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d22-q18",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d22-q19",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d22-q20",
    "dayNumber": 22,
    "date": "2026-11-29",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d23-q01",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not until midnight ______ return from his secret mission.",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answer": 1,
    "explanation": "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.",
    "tip": "Not until then did I understand."
  },
  {
    "id": "c1-d23-q02",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only by streamlining our logistics ______ remain competitive in the global market.",
    "options": [
      "we can",
      "can we",
      "we will",
      "are we"
    ],
    "answer": 1,
    "explanation": "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.",
    "tip": "Only by doing X can we achieve Y."
  },
  {
    "id": "c1-d23-q03",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Rarely ______ seen such dedication among first-year university students.",
    "options": [
      "professors have",
      "have professors",
      "did professors",
      "were professors"
    ],
    "answer": 1,
    "explanation": "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.",
    "tip": "Rarely have I seen such brilliance."
  },
  {
    "id": "c1-d23-q04",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Nowhere ______ a more picturesque medieval village in all of Europe.",
    "options": [
      "you will find",
      "will you find",
      "you can find",
      "did you find"
    ],
    "answer": 1,
    "explanation": "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.",
    "tip": "Nowhere else will you encounter this."
  },
  {
    "id": "c1-d23-q05",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The Himalayan weather is notoriously ________ in winter. (PREDICT)",
    "answer": [
      "unpredictable"
    ],
    "explanation": "Nepředvídatelný = un-predict-able.",
    "tip": "Unpredictable weather."
  },
  {
    "id": "c1-d23-q06",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "He tried to ________ his excessive spending by claiming it was an investment. (JUST)",
    "answer": [
      "justify"
    ],
    "explanation": "Sloveso od 'just' je 'justify' (ospravedlnit).",
    "tip": "Přípona -ify tvoří slovesa: justify, clarify, purify."
  },
  {
    "id": "c1-d23-q07",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His repeated misconduct led to his summary ________ from the university. (DISMISS)",
    "answer": [
      "dismissal"
    ],
    "explanation": "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).",
    "tip": "Dismiss ➔ dismissal."
  },
  {
    "id": "c1-d23-q08",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The business underwent a remarkable ________ over the last decade. (EXPAND)",
    "answer": [
      "expansion"
    ],
    "explanation": "Podstatné jméno od 'expand' je 'expansion' (rozšíření).",
    "tip": "Expand ➔ expansion (se 's')."
  },
  {
    "id": "c1-d23-q09",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d23-q10",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d23-q11",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d23-q12",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d23-q13",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d23-q14",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d23-q15",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d23-q16",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d23-q17",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d23-q18",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d23-q19",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d23-q20",
    "dayNumber": 23,
    "date": "2026-11-30",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d24-q01",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "On no account ______ leave your luggage unattended at the terminal.",
    "options": [
      "passengers must",
      "must passengers",
      "should passengers to",
      "passengers are"
    ],
    "answer": 1,
    "explanation": "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.",
    "tip": "On no account must you sign without reading."
  },
  {
    "id": "c1-d24-q02",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Scarcely had the debate started ______ the candidates began shouting at each other.",
    "options": [
      "when",
      "than",
      "as",
      "while"
    ],
    "answer": 0,
    "explanation": "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.",
    "tip": "Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d24-q03",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only after reviewing the security footage ______ what had actually happened.",
    "options": [
      "the detective knew",
      "did the detective know",
      "the detective had known",
      "was the detective knowing"
    ],
    "answer": 1,
    "explanation": "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.",
    "tip": "Only after reading it did I sign."
  },
  {
    "id": "c1-d24-q04",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Had I known about the changes in the schedule, I ______ the meeting earlier.",
    "options": [
      "would attend",
      "would have attended",
      "will attend",
      "had attended"
    ],
    "answer": 1,
    "explanation": "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.",
    "tip": "Had I known = If I had known."
  },
  {
    "id": "c1-d24-q05",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)",
    "answer": [
      "insignificant"
    ],
    "explanation": "Nepatrný / nevýznamný = in-significant.",
    "tip": "Significant ➔ insignificant."
  },
  {
    "id": "c1-d24-q06",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)",
    "answer": [
      "suspicious"
    ],
    "explanation": "Podezřívavý = suspicious.",
    "tip": "Suspect ➔ suspicious."
  },
  {
    "id": "c1-d24-q07",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The museum acquired a manuscript of ________ historical importance. (ESTIMATE)",
    "answer": [
      "inestimable"
    ],
    "explanation": "Nevyčíslitelný / nesmírný = in-estim-able.",
    "tip": "Inestimable value / importance."
  },
  {
    "id": "c1-d24-q08",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)",
    "answer": [
      "imperceptible"
    ],
    "explanation": "Téměř nepostřehnutelný = im-perceptible.",
    "tip": "Perceive ➔ perceptible ➔ imperceptible."
  },
  {
    "id": "c1-d24-q09",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d24-q10",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d24-q11",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d24-q12",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d24-q13",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d24-q14",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d24-q15",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d24-q16",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d24-q17",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d24-q18",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d24-q19",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d24-q20",
    "dayNumber": 24,
    "date": "2026-12-01",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d25-q01",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Were you to reconsider your resignation, the board ______ delighted to keep you.",
    "options": [
      "will be",
      "would be",
      "is",
      "had been"
    ],
    "answer": 1,
    "explanation": "Invertovaný 2. kondicionál: 'Were you to reconsider' = 'If you were to reconsider'. Následek: 'would be'.",
    "tip": "Were you to do sth = If you were to do sth."
  },
  {
    "id": "c1-d25-q02",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Should you require any further assistance, please ______ the reception desk.",
    "options": [
      "contact",
      "to contact",
      "contacting",
      "will contact"
    ],
    "answer": 0,
    "explanation": "Invertovaný 1. kondicionál: 'Should you require' = 'If you should require'. V rozkaze následuje infinitiv 'contact'.",
    "tip": "Should you need help = If you happen to need help."
  },
  {
    "id": "c1-d25-q03",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "In no way ______ be held responsible for damages caused by the storm.",
    "options": [
      "the landlord can",
      "can the landlord",
      "the landlord should",
      "will the landlord to"
    ],
    "answer": 1,
    "explanation": "'In no way' (V žádném případě) vyžaduje inverzi: 'can the landlord be held'.",
    "tip": "In no way can we accept this proposal."
  },
  {
    "id": "c1-d25-q04",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Barely had the teacher left the classroom ______ the children started talking.",
    "options": [
      "than",
      "when",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'Barely had... WHEN...' se pojí se spojkou when.",
    "tip": "Barely had I arrived when the phone rang."
  },
  {
    "id": "c1-d25-q05",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His argument was utterly ________ and lacked any supporting evidence. (DEFEND)",
    "answer": [
      "indefensible"
    ],
    "explanation": "Neobhajitelný = in-defensible.",
    "tip": "Defend ➔ defensible ➔ indefensible."
  },
  {
    "id": "c1-d25-q06",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The antique vase was of ________ value and could not be replaced. (PRICE)",
    "answer": [
      "priceless"
    ],
    "explanation": "Klenot k nezaplacení = price-less.",
    "tip": "Priceless = nevyčíslitelné hodnoty (nikoli bezcenný!)."
  },
  {
    "id": "c1-d25-q07",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Her explanation was ________ and solved the mystery completely. (SATISFY)",
    "answer": [
      "satisfactory"
    ],
    "explanation": "Uspokojivý = satisfactory.",
    "tip": "Satisfy ➔ satisfactory."
  },
  {
    "id": "c1-d25-q08",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The sudden cancellation of the flight caused extreme ________ to passengers. (CONVENIENT)",
    "answer": [
      "inconvenience"
    ],
    "explanation": "Nepohodlí / potíže = in-convenience.",
    "tip": "Convenient ➔ inconvenience."
  },
  {
    "id": "c1-d25-q09",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d25-q10",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d25-q11",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d25-q12",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d25-q13",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d25-q14",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d25-q15",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d25-q16",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d25-q17",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d25-q18",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d25-q19",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d25-q20",
    "dayNumber": 25,
    "date": "2026-12-02",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d26-q01",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Hardly ______ stepped into the shower when the fire alarm began to wail.",
    "options": [
      "I had",
      "had I",
      "did I",
      "have I"
    ],
    "answer": 1,
    "explanation": "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.",
    "tip": "Hardly / Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d26-q02",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Under no circumstances ______ allow unauthorized personnel into the control room.",
    "options": [
      "you should",
      "are you to",
      "should you",
      "you must"
    ],
    "answer": 2,
    "explanation": "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.",
    "tip": "Nikdy nezačínej větu 'Under no circumstances you...'"
  },
  {
    "id": "c1-d26-q03",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "No sooner had the keynote speaker begun ______ the power went out.",
    "options": [
      "when",
      "than",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.",
    "tip": "Hardly = when, No sooner = than."
  },
  {
    "id": "c1-d26-q04",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Seldom ______ witnessed such an extraordinary display of athletic prowess.",
    "options": [
      "we have",
      "have we",
      "did we",
      "we did"
    ],
    "answer": 1,
    "explanation": "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).",
    "tip": "Seldom / Rarely + have we / do we."
  },
  {
    "id": "c1-d26-q05",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The witness gave a completely ________ account of the robbery. (CONTRADICT)",
    "answer": [
      "contradictory"
    ],
    "explanation": "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).",
    "tip": "Přípona -ory: contradict ➔ contradictory."
  },
  {
    "id": "c1-d26-q06",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)",
    "answer": [
      "detrimental"
    ],
    "explanation": "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).",
    "tip": "Detrimental effect on sth."
  },
  {
    "id": "c1-d26-q07",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Arriving two hours late for an interview is utterly ________. (EXCUSE)",
    "answer": [
      "inexcusable"
    ],
    "explanation": "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.",
    "tip": "Záporná předpona in- + přípona -able."
  },
  {
    "id": "c1-d26-q08",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Despite her initial ________, she accepted the promotion. (RELUCTANT)",
    "answer": [
      "reluctance"
    ],
    "explanation": "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).",
    "tip": "Koncovka -ance u podstatných jmen."
  },
  {
    "id": "c1-d26-q09",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d26-q10",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d26-q11",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d26-q12",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d26-q13",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d26-q14",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d26-q15",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d26-q16",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d26-q17",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d26-q18",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d26-q19",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d26-q20",
    "dayNumber": 26,
    "date": "2026-12-03",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d27-q01",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only when she removed her disguise ______ who she actually was.",
    "options": [
      "we recognized",
      "did we recognize",
      "had we recognized",
      "we did recognize"
    ],
    "answer": 1,
    "explanation": "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.",
    "tip": "Inverze u 'Only when' je až ve druhé větě!"
  },
  {
    "id": "c1-d27-q02",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not only ______ win the national tournament, but she also broke the record.",
    "options": [
      "she did",
      "did she",
      "was she",
      "had she"
    ],
    "answer": 1,
    "explanation": "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.",
    "tip": "Not only did he do X, but he also did Y."
  },
  {
    "id": "c1-d27-q03",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Little ______ they realize the catastrophic consequences of their decision.",
    "options": [
      "did",
      "had",
      "have",
      "do"
    ],
    "answer": 0,
    "explanation": "Idiom 'Little did they know/realize' = Neměli ani tušení.",
    "tip": "Little funguje jako záporné příslovce s inverzí."
  },
  {
    "id": "c1-d27-q04",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "At no point during the audit ______ able to verify the missing funds.",
    "options": [
      "the accountants were",
      "were the accountants",
      "had the accountants",
      "did the accountants"
    ],
    "answer": 1,
    "explanation": "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.",
    "tip": "At no point / At no time were they..."
  },
  {
    "id": "c1-d27-q05",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The engineers plan to ________ the tunnel to allow larger trains. (WIDE)",
    "answer": [
      "widen"
    ],
    "explanation": "Sloveso od 'wide' je 'widen' (rozšířit).",
    "tip": "Přípona -en tvoří slovesa: widen, lengthen, deepen."
  },
  {
    "id": "c1-d27-q06",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The laboratory tests were ________, so the trial was postponed. (CONCLUDE)",
    "answer": [
      "inconclusive"
    ],
    "explanation": "Výsledky byly neprůkazné = in-conclusive.",
    "tip": "Conclude ➔ conclusive ➔ inconclusive."
  },
  {
    "id": "c1-d27-q07",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She is an ________ gifted pianist who performs worldwide. (EXCEPTION)",
    "answer": [
      "exceptionally"
    ],
    "explanation": "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.",
    "tip": "Exception ➔ exceptional ➔ exceptionally."
  },
  {
    "id": "c1-d27-q08",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)",
    "answer": [
      "misconception"
    ],
    "explanation": "Mylná představa = mis-conception.",
    "tip": "Předpona mis- značí omyl/chybu."
  },
  {
    "id": "c1-d27-q09",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d27-q10",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d27-q11",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d27-q12",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d27-q13",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d27-q14",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d27-q15",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d27-q16",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d27-q17",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d27-q18",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d27-q19",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d27-q20",
    "dayNumber": 27,
    "date": "2026-12-04",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d28-q01",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not until midnight ______ return from his secret mission.",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answer": 1,
    "explanation": "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.",
    "tip": "Not until then did I understand."
  },
  {
    "id": "c1-d28-q02",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only by streamlining our logistics ______ remain competitive in the global market.",
    "options": [
      "we can",
      "can we",
      "we will",
      "are we"
    ],
    "answer": 1,
    "explanation": "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.",
    "tip": "Only by doing X can we achieve Y."
  },
  {
    "id": "c1-d28-q03",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Rarely ______ seen such dedication among first-year university students.",
    "options": [
      "professors have",
      "have professors",
      "did professors",
      "were professors"
    ],
    "answer": 1,
    "explanation": "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.",
    "tip": "Rarely have I seen such brilliance."
  },
  {
    "id": "c1-d28-q04",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Nowhere ______ a more picturesque medieval village in all of Europe.",
    "options": [
      "you will find",
      "will you find",
      "you can find",
      "did you find"
    ],
    "answer": 1,
    "explanation": "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.",
    "tip": "Nowhere else will you encounter this."
  },
  {
    "id": "c1-d28-q05",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The Himalayan weather is notoriously ________ in winter. (PREDICT)",
    "answer": [
      "unpredictable"
    ],
    "explanation": "Nepředvídatelný = un-predict-able.",
    "tip": "Unpredictable weather."
  },
  {
    "id": "c1-d28-q06",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "He tried to ________ his excessive spending by claiming it was an investment. (JUST)",
    "answer": [
      "justify"
    ],
    "explanation": "Sloveso od 'just' je 'justify' (ospravedlnit).",
    "tip": "Přípona -ify tvoří slovesa: justify, clarify, purify."
  },
  {
    "id": "c1-d28-q07",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His repeated misconduct led to his summary ________ from the university. (DISMISS)",
    "answer": [
      "dismissal"
    ],
    "explanation": "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).",
    "tip": "Dismiss ➔ dismissal."
  },
  {
    "id": "c1-d28-q08",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The business underwent a remarkable ________ over the last decade. (EXPAND)",
    "answer": [
      "expansion"
    ],
    "explanation": "Podstatné jméno od 'expand' je 'expansion' (rozšíření).",
    "tip": "Expand ➔ expansion (se 's')."
  },
  {
    "id": "c1-d28-q09",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d28-q10",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d28-q11",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d28-q12",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d28-q13",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d28-q14",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d28-q15",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d28-q16",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d28-q17",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d28-q18",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d28-q19",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d28-q20",
    "dayNumber": 28,
    "date": "2026-12-05",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d29-q01",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "On no account ______ leave your luggage unattended at the terminal.",
    "options": [
      "passengers must",
      "must passengers",
      "should passengers to",
      "passengers are"
    ],
    "answer": 1,
    "explanation": "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.",
    "tip": "On no account must you sign without reading."
  },
  {
    "id": "c1-d29-q02",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Scarcely had the debate started ______ the candidates began shouting at each other.",
    "options": [
      "when",
      "than",
      "as",
      "while"
    ],
    "answer": 0,
    "explanation": "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.",
    "tip": "Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d29-q03",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only after reviewing the security footage ______ what had actually happened.",
    "options": [
      "the detective knew",
      "did the detective know",
      "the detective had known",
      "was the detective knowing"
    ],
    "answer": 1,
    "explanation": "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.",
    "tip": "Only after reading it did I sign."
  },
  {
    "id": "c1-d29-q04",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Had I known about the changes in the schedule, I ______ the meeting earlier.",
    "options": [
      "would attend",
      "would have attended",
      "will attend",
      "had attended"
    ],
    "answer": 1,
    "explanation": "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.",
    "tip": "Had I known = If I had known."
  },
  {
    "id": "c1-d29-q05",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)",
    "answer": [
      "insignificant"
    ],
    "explanation": "Nepatrný / nevýznamný = in-significant.",
    "tip": "Significant ➔ insignificant."
  },
  {
    "id": "c1-d29-q06",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)",
    "answer": [
      "suspicious"
    ],
    "explanation": "Podezřívavý = suspicious.",
    "tip": "Suspect ➔ suspicious."
  },
  {
    "id": "c1-d29-q07",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The museum acquired a manuscript of ________ historical importance. (ESTIMATE)",
    "answer": [
      "inestimable"
    ],
    "explanation": "Nevyčíslitelný / nesmírný = in-estim-able.",
    "tip": "Inestimable value / importance."
  },
  {
    "id": "c1-d29-q08",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)",
    "answer": [
      "imperceptible"
    ],
    "explanation": "Téměř nepostřehnutelný = im-perceptible.",
    "tip": "Perceive ➔ perceptible ➔ imperceptible."
  },
  {
    "id": "c1-d29-q09",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d29-q10",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d29-q11",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d29-q12",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d29-q13",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d29-q14",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d29-q15",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d29-q16",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d29-q17",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d29-q18",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d29-q19",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d29-q20",
    "dayNumber": 29,
    "date": "2026-12-06",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d30-q01",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Were you to reconsider your resignation, the board ______ delighted to keep you.",
    "options": [
      "will be",
      "would be",
      "is",
      "had been"
    ],
    "answer": 1,
    "explanation": "Invertovaný 2. kondicionál: 'Were you to reconsider' = 'If you were to reconsider'. Následek: 'would be'.",
    "tip": "Were you to do sth = If you were to do sth."
  },
  {
    "id": "c1-d30-q02",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Should you require any further assistance, please ______ the reception desk.",
    "options": [
      "contact",
      "to contact",
      "contacting",
      "will contact"
    ],
    "answer": 0,
    "explanation": "Invertovaný 1. kondicionál: 'Should you require' = 'If you should require'. V rozkaze následuje infinitiv 'contact'.",
    "tip": "Should you need help = If you happen to need help."
  },
  {
    "id": "c1-d30-q03",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "In no way ______ be held responsible for damages caused by the storm.",
    "options": [
      "the landlord can",
      "can the landlord",
      "the landlord should",
      "will the landlord to"
    ],
    "answer": 1,
    "explanation": "'In no way' (V žádném případě) vyžaduje inverzi: 'can the landlord be held'.",
    "tip": "In no way can we accept this proposal."
  },
  {
    "id": "c1-d30-q04",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Barely had the teacher left the classroom ______ the children started talking.",
    "options": [
      "than",
      "when",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'Barely had... WHEN...' se pojí se spojkou when.",
    "tip": "Barely had I arrived when the phone rang."
  },
  {
    "id": "c1-d30-q05",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His argument was utterly ________ and lacked any supporting evidence. (DEFEND)",
    "answer": [
      "indefensible"
    ],
    "explanation": "Neobhajitelný = in-defensible.",
    "tip": "Defend ➔ defensible ➔ indefensible."
  },
  {
    "id": "c1-d30-q06",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The antique vase was of ________ value and could not be replaced. (PRICE)",
    "answer": [
      "priceless"
    ],
    "explanation": "Klenot k nezaplacení = price-less.",
    "tip": "Priceless = nevyčíslitelné hodnoty (nikoli bezcenný!)."
  },
  {
    "id": "c1-d30-q07",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Her explanation was ________ and solved the mystery completely. (SATISFY)",
    "answer": [
      "satisfactory"
    ],
    "explanation": "Uspokojivý = satisfactory.",
    "tip": "Satisfy ➔ satisfactory."
  },
  {
    "id": "c1-d30-q08",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The sudden cancellation of the flight caused extreme ________ to passengers. (CONVENIENT)",
    "answer": [
      "inconvenience"
    ],
    "explanation": "Nepohodlí / potíže = in-convenience.",
    "tip": "Convenient ➔ inconvenience."
  },
  {
    "id": "c1-d30-q09",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d30-q10",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d30-q11",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d30-q12",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d30-q13",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d30-q14",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d30-q15",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d30-q16",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d30-q17",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d30-q18",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d30-q19",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d30-q20",
    "dayNumber": 30,
    "date": "2026-12-07",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d31-q01",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Hardly ______ stepped into the shower when the fire alarm began to wail.",
    "options": [
      "I had",
      "had I",
      "did I",
      "have I"
    ],
    "answer": 1,
    "explanation": "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.",
    "tip": "Hardly / Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d31-q02",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Under no circumstances ______ allow unauthorized personnel into the control room.",
    "options": [
      "you should",
      "are you to",
      "should you",
      "you must"
    ],
    "answer": 2,
    "explanation": "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.",
    "tip": "Nikdy nezačínej větu 'Under no circumstances you...'"
  },
  {
    "id": "c1-d31-q03",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "No sooner had the keynote speaker begun ______ the power went out.",
    "options": [
      "when",
      "than",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.",
    "tip": "Hardly = when, No sooner = than."
  },
  {
    "id": "c1-d31-q04",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Seldom ______ witnessed such an extraordinary display of athletic prowess.",
    "options": [
      "we have",
      "have we",
      "did we",
      "we did"
    ],
    "answer": 1,
    "explanation": "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).",
    "tip": "Seldom / Rarely + have we / do we."
  },
  {
    "id": "c1-d31-q05",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The witness gave a completely ________ account of the robbery. (CONTRADICT)",
    "answer": [
      "contradictory"
    ],
    "explanation": "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).",
    "tip": "Přípona -ory: contradict ➔ contradictory."
  },
  {
    "id": "c1-d31-q06",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)",
    "answer": [
      "detrimental"
    ],
    "explanation": "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).",
    "tip": "Detrimental effect on sth."
  },
  {
    "id": "c1-d31-q07",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Arriving two hours late for an interview is utterly ________. (EXCUSE)",
    "answer": [
      "inexcusable"
    ],
    "explanation": "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.",
    "tip": "Záporná předpona in- + přípona -able."
  },
  {
    "id": "c1-d31-q08",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Despite her initial ________, she accepted the promotion. (RELUCTANT)",
    "answer": [
      "reluctance"
    ],
    "explanation": "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).",
    "tip": "Koncovka -ance u podstatných jmen."
  },
  {
    "id": "c1-d31-q09",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d31-q10",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d31-q11",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d31-q12",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d31-q13",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d31-q14",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d31-q15",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d31-q16",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d31-q17",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d31-q18",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d31-q19",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d31-q20",
    "dayNumber": 31,
    "date": "2026-12-08",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d32-q01",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only when she removed her disguise ______ who she actually was.",
    "options": [
      "we recognized",
      "did we recognize",
      "had we recognized",
      "we did recognize"
    ],
    "answer": 1,
    "explanation": "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.",
    "tip": "Inverze u 'Only when' je až ve druhé větě!"
  },
  {
    "id": "c1-d32-q02",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not only ______ win the national tournament, but she also broke the record.",
    "options": [
      "she did",
      "did she",
      "was she",
      "had she"
    ],
    "answer": 1,
    "explanation": "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.",
    "tip": "Not only did he do X, but he also did Y."
  },
  {
    "id": "c1-d32-q03",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Little ______ they realize the catastrophic consequences of their decision.",
    "options": [
      "did",
      "had",
      "have",
      "do"
    ],
    "answer": 0,
    "explanation": "Idiom 'Little did they know/realize' = Neměli ani tušení.",
    "tip": "Little funguje jako záporné příslovce s inverzí."
  },
  {
    "id": "c1-d32-q04",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "At no point during the audit ______ able to verify the missing funds.",
    "options": [
      "the accountants were",
      "were the accountants",
      "had the accountants",
      "did the accountants"
    ],
    "answer": 1,
    "explanation": "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.",
    "tip": "At no point / At no time were they..."
  },
  {
    "id": "c1-d32-q05",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The engineers plan to ________ the tunnel to allow larger trains. (WIDE)",
    "answer": [
      "widen"
    ],
    "explanation": "Sloveso od 'wide' je 'widen' (rozšířit).",
    "tip": "Přípona -en tvoří slovesa: widen, lengthen, deepen."
  },
  {
    "id": "c1-d32-q06",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The laboratory tests were ________, so the trial was postponed. (CONCLUDE)",
    "answer": [
      "inconclusive"
    ],
    "explanation": "Výsledky byly neprůkazné = in-conclusive.",
    "tip": "Conclude ➔ conclusive ➔ inconclusive."
  },
  {
    "id": "c1-d32-q07",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She is an ________ gifted pianist who performs worldwide. (EXCEPTION)",
    "answer": [
      "exceptionally"
    ],
    "explanation": "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.",
    "tip": "Exception ➔ exceptional ➔ exceptionally."
  },
  {
    "id": "c1-d32-q08",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)",
    "answer": [
      "misconception"
    ],
    "explanation": "Mylná představa = mis-conception.",
    "tip": "Předpona mis- značí omyl/chybu."
  },
  {
    "id": "c1-d32-q09",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d32-q10",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d32-q11",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d32-q12",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d32-q13",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d32-q14",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d32-q15",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d32-q16",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d32-q17",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d32-q18",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d32-q19",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d32-q20",
    "dayNumber": 32,
    "date": "2026-12-09",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d33-q01",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not until midnight ______ return from his secret mission.",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answer": 1,
    "explanation": "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.",
    "tip": "Not until then did I understand."
  },
  {
    "id": "c1-d33-q02",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only by streamlining our logistics ______ remain competitive in the global market.",
    "options": [
      "we can",
      "can we",
      "we will",
      "are we"
    ],
    "answer": 1,
    "explanation": "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.",
    "tip": "Only by doing X can we achieve Y."
  },
  {
    "id": "c1-d33-q03",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Rarely ______ seen such dedication among first-year university students.",
    "options": [
      "professors have",
      "have professors",
      "did professors",
      "were professors"
    ],
    "answer": 1,
    "explanation": "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.",
    "tip": "Rarely have I seen such brilliance."
  },
  {
    "id": "c1-d33-q04",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Nowhere ______ a more picturesque medieval village in all of Europe.",
    "options": [
      "you will find",
      "will you find",
      "you can find",
      "did you find"
    ],
    "answer": 1,
    "explanation": "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.",
    "tip": "Nowhere else will you encounter this."
  },
  {
    "id": "c1-d33-q05",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The Himalayan weather is notoriously ________ in winter. (PREDICT)",
    "answer": [
      "unpredictable"
    ],
    "explanation": "Nepředvídatelný = un-predict-able.",
    "tip": "Unpredictable weather."
  },
  {
    "id": "c1-d33-q06",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "He tried to ________ his excessive spending by claiming it was an investment. (JUST)",
    "answer": [
      "justify"
    ],
    "explanation": "Sloveso od 'just' je 'justify' (ospravedlnit).",
    "tip": "Přípona -ify tvoří slovesa: justify, clarify, purify."
  },
  {
    "id": "c1-d33-q07",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His repeated misconduct led to his summary ________ from the university. (DISMISS)",
    "answer": [
      "dismissal"
    ],
    "explanation": "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).",
    "tip": "Dismiss ➔ dismissal."
  },
  {
    "id": "c1-d33-q08",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The business underwent a remarkable ________ over the last decade. (EXPAND)",
    "answer": [
      "expansion"
    ],
    "explanation": "Podstatné jméno od 'expand' je 'expansion' (rozšíření).",
    "tip": "Expand ➔ expansion (se 's')."
  },
  {
    "id": "c1-d33-q09",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d33-q10",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d33-q11",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d33-q12",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d33-q13",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d33-q14",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d33-q15",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d33-q16",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d33-q17",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d33-q18",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d33-q19",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d33-q20",
    "dayNumber": 33,
    "date": "2026-12-10",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d34-q01",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "On no account ______ leave your luggage unattended at the terminal.",
    "options": [
      "passengers must",
      "must passengers",
      "should passengers to",
      "passengers are"
    ],
    "answer": 1,
    "explanation": "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.",
    "tip": "On no account must you sign without reading."
  },
  {
    "id": "c1-d34-q02",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Scarcely had the debate started ______ the candidates began shouting at each other.",
    "options": [
      "when",
      "than",
      "as",
      "while"
    ],
    "answer": 0,
    "explanation": "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.",
    "tip": "Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d34-q03",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only after reviewing the security footage ______ what had actually happened.",
    "options": [
      "the detective knew",
      "did the detective know",
      "the detective had known",
      "was the detective knowing"
    ],
    "answer": 1,
    "explanation": "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.",
    "tip": "Only after reading it did I sign."
  },
  {
    "id": "c1-d34-q04",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Had I known about the changes in the schedule, I ______ the meeting earlier.",
    "options": [
      "would attend",
      "would have attended",
      "will attend",
      "had attended"
    ],
    "answer": 1,
    "explanation": "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.",
    "tip": "Had I known = If I had known."
  },
  {
    "id": "c1-d34-q05",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)",
    "answer": [
      "insignificant"
    ],
    "explanation": "Nepatrný / nevýznamný = in-significant.",
    "tip": "Significant ➔ insignificant."
  },
  {
    "id": "c1-d34-q06",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)",
    "answer": [
      "suspicious"
    ],
    "explanation": "Podezřívavý = suspicious.",
    "tip": "Suspect ➔ suspicious."
  },
  {
    "id": "c1-d34-q07",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The museum acquired a manuscript of ________ historical importance. (ESTIMATE)",
    "answer": [
      "inestimable"
    ],
    "explanation": "Nevyčíslitelný / nesmírný = in-estim-able.",
    "tip": "Inestimable value / importance."
  },
  {
    "id": "c1-d34-q08",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)",
    "answer": [
      "imperceptible"
    ],
    "explanation": "Téměř nepostřehnutelný = im-perceptible.",
    "tip": "Perceive ➔ perceptible ➔ imperceptible."
  },
  {
    "id": "c1-d34-q09",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d34-q10",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d34-q11",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d34-q12",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d34-q13",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d34-q14",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d34-q15",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d34-q16",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d34-q17",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d34-q18",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d34-q19",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d34-q20",
    "dayNumber": 34,
    "date": "2026-12-11",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d35-q01",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Were you to reconsider your resignation, the board ______ delighted to keep you.",
    "options": [
      "will be",
      "would be",
      "is",
      "had been"
    ],
    "answer": 1,
    "explanation": "Invertovaný 2. kondicionál: 'Were you to reconsider' = 'If you were to reconsider'. Následek: 'would be'.",
    "tip": "Were you to do sth = If you were to do sth."
  },
  {
    "id": "c1-d35-q02",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Should you require any further assistance, please ______ the reception desk.",
    "options": [
      "contact",
      "to contact",
      "contacting",
      "will contact"
    ],
    "answer": 0,
    "explanation": "Invertovaný 1. kondicionál: 'Should you require' = 'If you should require'. V rozkaze následuje infinitiv 'contact'.",
    "tip": "Should you need help = If you happen to need help."
  },
  {
    "id": "c1-d35-q03",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "In no way ______ be held responsible for damages caused by the storm.",
    "options": [
      "the landlord can",
      "can the landlord",
      "the landlord should",
      "will the landlord to"
    ],
    "answer": 1,
    "explanation": "'In no way' (V žádném případě) vyžaduje inverzi: 'can the landlord be held'.",
    "tip": "In no way can we accept this proposal."
  },
  {
    "id": "c1-d35-q04",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Barely had the teacher left the classroom ______ the children started talking.",
    "options": [
      "than",
      "when",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'Barely had... WHEN...' se pojí se spojkou when.",
    "tip": "Barely had I arrived when the phone rang."
  },
  {
    "id": "c1-d35-q05",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His argument was utterly ________ and lacked any supporting evidence. (DEFEND)",
    "answer": [
      "indefensible"
    ],
    "explanation": "Neobhajitelný = in-defensible.",
    "tip": "Defend ➔ defensible ➔ indefensible."
  },
  {
    "id": "c1-d35-q06",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The antique vase was of ________ value and could not be replaced. (PRICE)",
    "answer": [
      "priceless"
    ],
    "explanation": "Klenot k nezaplacení = price-less.",
    "tip": "Priceless = nevyčíslitelné hodnoty (nikoli bezcenný!)."
  },
  {
    "id": "c1-d35-q07",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Her explanation was ________ and solved the mystery completely. (SATISFY)",
    "answer": [
      "satisfactory"
    ],
    "explanation": "Uspokojivý = satisfactory.",
    "tip": "Satisfy ➔ satisfactory."
  },
  {
    "id": "c1-d35-q08",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The sudden cancellation of the flight caused extreme ________ to passengers. (CONVENIENT)",
    "answer": [
      "inconvenience"
    ],
    "explanation": "Nepohodlí / potíže = in-convenience.",
    "tip": "Convenient ➔ inconvenience."
  },
  {
    "id": "c1-d35-q09",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d35-q10",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d35-q11",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d35-q12",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d35-q13",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d35-q14",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d35-q15",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d35-q16",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d35-q17",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d35-q18",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d35-q19",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d35-q20",
    "dayNumber": 35,
    "date": "2026-12-12",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d36-q01",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Hardly ______ stepped into the shower when the fire alarm began to wail.",
    "options": [
      "I had",
      "had I",
      "did I",
      "have I"
    ],
    "answer": 1,
    "explanation": "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.",
    "tip": "Hardly / Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d36-q02",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Under no circumstances ______ allow unauthorized personnel into the control room.",
    "options": [
      "you should",
      "are you to",
      "should you",
      "you must"
    ],
    "answer": 2,
    "explanation": "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.",
    "tip": "Nikdy nezačínej větu 'Under no circumstances you...'"
  },
  {
    "id": "c1-d36-q03",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "No sooner had the keynote speaker begun ______ the power went out.",
    "options": [
      "when",
      "than",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.",
    "tip": "Hardly = when, No sooner = than."
  },
  {
    "id": "c1-d36-q04",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Seldom ______ witnessed such an extraordinary display of athletic prowess.",
    "options": [
      "we have",
      "have we",
      "did we",
      "we did"
    ],
    "answer": 1,
    "explanation": "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).",
    "tip": "Seldom / Rarely + have we / do we."
  },
  {
    "id": "c1-d36-q05",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The witness gave a completely ________ account of the robbery. (CONTRADICT)",
    "answer": [
      "contradictory"
    ],
    "explanation": "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).",
    "tip": "Přípona -ory: contradict ➔ contradictory."
  },
  {
    "id": "c1-d36-q06",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)",
    "answer": [
      "detrimental"
    ],
    "explanation": "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).",
    "tip": "Detrimental effect on sth."
  },
  {
    "id": "c1-d36-q07",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Arriving two hours late for an interview is utterly ________. (EXCUSE)",
    "answer": [
      "inexcusable"
    ],
    "explanation": "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.",
    "tip": "Záporná předpona in- + přípona -able."
  },
  {
    "id": "c1-d36-q08",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Despite her initial ________, she accepted the promotion. (RELUCTANT)",
    "answer": [
      "reluctance"
    ],
    "explanation": "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).",
    "tip": "Koncovka -ance u podstatných jmen."
  },
  {
    "id": "c1-d36-q09",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d36-q10",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d36-q11",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d36-q12",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d36-q13",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d36-q14",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d36-q15",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d36-q16",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d36-q17",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d36-q18",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d36-q19",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d36-q20",
    "dayNumber": 36,
    "date": "2026-12-13",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d37-q01",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only when she removed her disguise ______ who she actually was.",
    "options": [
      "we recognized",
      "did we recognize",
      "had we recognized",
      "we did recognize"
    ],
    "answer": 1,
    "explanation": "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.",
    "tip": "Inverze u 'Only when' je až ve druhé větě!"
  },
  {
    "id": "c1-d37-q02",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not only ______ win the national tournament, but she also broke the record.",
    "options": [
      "she did",
      "did she",
      "was she",
      "had she"
    ],
    "answer": 1,
    "explanation": "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.",
    "tip": "Not only did he do X, but he also did Y."
  },
  {
    "id": "c1-d37-q03",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Little ______ they realize the catastrophic consequences of their decision.",
    "options": [
      "did",
      "had",
      "have",
      "do"
    ],
    "answer": 0,
    "explanation": "Idiom 'Little did they know/realize' = Neměli ani tušení.",
    "tip": "Little funguje jako záporné příslovce s inverzí."
  },
  {
    "id": "c1-d37-q04",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "At no point during the audit ______ able to verify the missing funds.",
    "options": [
      "the accountants were",
      "were the accountants",
      "had the accountants",
      "did the accountants"
    ],
    "answer": 1,
    "explanation": "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.",
    "tip": "At no point / At no time were they..."
  },
  {
    "id": "c1-d37-q05",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The engineers plan to ________ the tunnel to allow larger trains. (WIDE)",
    "answer": [
      "widen"
    ],
    "explanation": "Sloveso od 'wide' je 'widen' (rozšířit).",
    "tip": "Přípona -en tvoří slovesa: widen, lengthen, deepen."
  },
  {
    "id": "c1-d37-q06",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The laboratory tests were ________, so the trial was postponed. (CONCLUDE)",
    "answer": [
      "inconclusive"
    ],
    "explanation": "Výsledky byly neprůkazné = in-conclusive.",
    "tip": "Conclude ➔ conclusive ➔ inconclusive."
  },
  {
    "id": "c1-d37-q07",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She is an ________ gifted pianist who performs worldwide. (EXCEPTION)",
    "answer": [
      "exceptionally"
    ],
    "explanation": "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.",
    "tip": "Exception ➔ exceptional ➔ exceptionally."
  },
  {
    "id": "c1-d37-q08",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)",
    "answer": [
      "misconception"
    ],
    "explanation": "Mylná představa = mis-conception.",
    "tip": "Předpona mis- značí omyl/chybu."
  },
  {
    "id": "c1-d37-q09",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d37-q10",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d37-q11",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d37-q12",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d37-q13",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d37-q14",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d37-q15",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d37-q16",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d37-q17",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d37-q18",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d37-q19",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d37-q20",
    "dayNumber": 37,
    "date": "2026-12-14",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d38-q01",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not until midnight ______ return from his secret mission.",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answer": 1,
    "explanation": "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.",
    "tip": "Not until then did I understand."
  },
  {
    "id": "c1-d38-q02",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only by streamlining our logistics ______ remain competitive in the global market.",
    "options": [
      "we can",
      "can we",
      "we will",
      "are we"
    ],
    "answer": 1,
    "explanation": "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.",
    "tip": "Only by doing X can we achieve Y."
  },
  {
    "id": "c1-d38-q03",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Rarely ______ seen such dedication among first-year university students.",
    "options": [
      "professors have",
      "have professors",
      "did professors",
      "were professors"
    ],
    "answer": 1,
    "explanation": "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.",
    "tip": "Rarely have I seen such brilliance."
  },
  {
    "id": "c1-d38-q04",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Nowhere ______ a more picturesque medieval village in all of Europe.",
    "options": [
      "you will find",
      "will you find",
      "you can find",
      "did you find"
    ],
    "answer": 1,
    "explanation": "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.",
    "tip": "Nowhere else will you encounter this."
  },
  {
    "id": "c1-d38-q05",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The Himalayan weather is notoriously ________ in winter. (PREDICT)",
    "answer": [
      "unpredictable"
    ],
    "explanation": "Nepředvídatelný = un-predict-able.",
    "tip": "Unpredictable weather."
  },
  {
    "id": "c1-d38-q06",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "He tried to ________ his excessive spending by claiming it was an investment. (JUST)",
    "answer": [
      "justify"
    ],
    "explanation": "Sloveso od 'just' je 'justify' (ospravedlnit).",
    "tip": "Přípona -ify tvoří slovesa: justify, clarify, purify."
  },
  {
    "id": "c1-d38-q07",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His repeated misconduct led to his summary ________ from the university. (DISMISS)",
    "answer": [
      "dismissal"
    ],
    "explanation": "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).",
    "tip": "Dismiss ➔ dismissal."
  },
  {
    "id": "c1-d38-q08",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The business underwent a remarkable ________ over the last decade. (EXPAND)",
    "answer": [
      "expansion"
    ],
    "explanation": "Podstatné jméno od 'expand' je 'expansion' (rozšíření).",
    "tip": "Expand ➔ expansion (se 's')."
  },
  {
    "id": "c1-d38-q09",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d38-q10",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d38-q11",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d38-q12",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d38-q13",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d38-q14",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d38-q15",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d38-q16",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d38-q17",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d38-q18",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d38-q19",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d38-q20",
    "dayNumber": 38,
    "date": "2026-12-15",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d39-q01",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "On no account ______ leave your luggage unattended at the terminal.",
    "options": [
      "passengers must",
      "must passengers",
      "should passengers to",
      "passengers are"
    ],
    "answer": 1,
    "explanation": "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.",
    "tip": "On no account must you sign without reading."
  },
  {
    "id": "c1-d39-q02",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Scarcely had the debate started ______ the candidates began shouting at each other.",
    "options": [
      "when",
      "than",
      "as",
      "while"
    ],
    "answer": 0,
    "explanation": "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.",
    "tip": "Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d39-q03",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only after reviewing the security footage ______ what had actually happened.",
    "options": [
      "the detective knew",
      "did the detective know",
      "the detective had known",
      "was the detective knowing"
    ],
    "answer": 1,
    "explanation": "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.",
    "tip": "Only after reading it did I sign."
  },
  {
    "id": "c1-d39-q04",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Had I known about the changes in the schedule, I ______ the meeting earlier.",
    "options": [
      "would attend",
      "would have attended",
      "will attend",
      "had attended"
    ],
    "answer": 1,
    "explanation": "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.",
    "tip": "Had I known = If I had known."
  },
  {
    "id": "c1-d39-q05",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)",
    "answer": [
      "insignificant"
    ],
    "explanation": "Nepatrný / nevýznamný = in-significant.",
    "tip": "Significant ➔ insignificant."
  },
  {
    "id": "c1-d39-q06",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)",
    "answer": [
      "suspicious"
    ],
    "explanation": "Podezřívavý = suspicious.",
    "tip": "Suspect ➔ suspicious."
  },
  {
    "id": "c1-d39-q07",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The museum acquired a manuscript of ________ historical importance. (ESTIMATE)",
    "answer": [
      "inestimable"
    ],
    "explanation": "Nevyčíslitelný / nesmírný = in-estim-able.",
    "tip": "Inestimable value / importance."
  },
  {
    "id": "c1-d39-q08",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)",
    "answer": [
      "imperceptible"
    ],
    "explanation": "Téměř nepostřehnutelný = im-perceptible.",
    "tip": "Perceive ➔ perceptible ➔ imperceptible."
  },
  {
    "id": "c1-d39-q09",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d39-q10",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d39-q11",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d39-q12",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d39-q13",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d39-q14",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d39-q15",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d39-q16",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d39-q17",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d39-q18",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d39-q19",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d39-q20",
    "dayNumber": 39,
    "date": "2026-12-16",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d40-q01",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Were you to reconsider your resignation, the board ______ delighted to keep you.",
    "options": [
      "will be",
      "would be",
      "is",
      "had been"
    ],
    "answer": 1,
    "explanation": "Invertovaný 2. kondicionál: 'Were you to reconsider' = 'If you were to reconsider'. Následek: 'would be'.",
    "tip": "Were you to do sth = If you were to do sth."
  },
  {
    "id": "c1-d40-q02",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Should you require any further assistance, please ______ the reception desk.",
    "options": [
      "contact",
      "to contact",
      "contacting",
      "will contact"
    ],
    "answer": 0,
    "explanation": "Invertovaný 1. kondicionál: 'Should you require' = 'If you should require'. V rozkaze následuje infinitiv 'contact'.",
    "tip": "Should you need help = If you happen to need help."
  },
  {
    "id": "c1-d40-q03",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "In no way ______ be held responsible for damages caused by the storm.",
    "options": [
      "the landlord can",
      "can the landlord",
      "the landlord should",
      "will the landlord to"
    ],
    "answer": 1,
    "explanation": "'In no way' (V žádném případě) vyžaduje inverzi: 'can the landlord be held'.",
    "tip": "In no way can we accept this proposal."
  },
  {
    "id": "c1-d40-q04",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Barely had the teacher left the classroom ______ the children started talking.",
    "options": [
      "than",
      "when",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'Barely had... WHEN...' se pojí se spojkou when.",
    "tip": "Barely had I arrived when the phone rang."
  },
  {
    "id": "c1-d40-q05",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His argument was utterly ________ and lacked any supporting evidence. (DEFEND)",
    "answer": [
      "indefensible"
    ],
    "explanation": "Neobhajitelný = in-defensible.",
    "tip": "Defend ➔ defensible ➔ indefensible."
  },
  {
    "id": "c1-d40-q06",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The antique vase was of ________ value and could not be replaced. (PRICE)",
    "answer": [
      "priceless"
    ],
    "explanation": "Klenot k nezaplacení = price-less.",
    "tip": "Priceless = nevyčíslitelné hodnoty (nikoli bezcenný!)."
  },
  {
    "id": "c1-d40-q07",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Her explanation was ________ and solved the mystery completely. (SATISFY)",
    "answer": [
      "satisfactory"
    ],
    "explanation": "Uspokojivý = satisfactory.",
    "tip": "Satisfy ➔ satisfactory."
  },
  {
    "id": "c1-d40-q08",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The sudden cancellation of the flight caused extreme ________ to passengers. (CONVENIENT)",
    "answer": [
      "inconvenience"
    ],
    "explanation": "Nepohodlí / potíže = in-convenience.",
    "tip": "Convenient ➔ inconvenience."
  },
  {
    "id": "c1-d40-q09",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d40-q10",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d40-q11",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d40-q12",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d40-q13",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d40-q14",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d40-q15",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d40-q16",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d40-q17",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d40-q18",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d40-q19",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d40-q20",
    "dayNumber": 40,
    "date": "2026-12-17",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d41-q01",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Hardly ______ stepped into the shower when the fire alarm began to wail.",
    "options": [
      "I had",
      "had I",
      "did I",
      "have I"
    ],
    "answer": 1,
    "explanation": "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.",
    "tip": "Hardly / Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d41-q02",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Under no circumstances ______ allow unauthorized personnel into the control room.",
    "options": [
      "you should",
      "are you to",
      "should you",
      "you must"
    ],
    "answer": 2,
    "explanation": "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.",
    "tip": "Nikdy nezačínej větu 'Under no circumstances you...'"
  },
  {
    "id": "c1-d41-q03",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "No sooner had the keynote speaker begun ______ the power went out.",
    "options": [
      "when",
      "than",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.",
    "tip": "Hardly = when, No sooner = than."
  },
  {
    "id": "c1-d41-q04",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Seldom ______ witnessed such an extraordinary display of athletic prowess.",
    "options": [
      "we have",
      "have we",
      "did we",
      "we did"
    ],
    "answer": 1,
    "explanation": "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).",
    "tip": "Seldom / Rarely + have we / do we."
  },
  {
    "id": "c1-d41-q05",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The witness gave a completely ________ account of the robbery. (CONTRADICT)",
    "answer": [
      "contradictory"
    ],
    "explanation": "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).",
    "tip": "Přípona -ory: contradict ➔ contradictory."
  },
  {
    "id": "c1-d41-q06",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)",
    "answer": [
      "detrimental"
    ],
    "explanation": "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).",
    "tip": "Detrimental effect on sth."
  },
  {
    "id": "c1-d41-q07",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Arriving two hours late for an interview is utterly ________. (EXCUSE)",
    "answer": [
      "inexcusable"
    ],
    "explanation": "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.",
    "tip": "Záporná předpona in- + přípona -able."
  },
  {
    "id": "c1-d41-q08",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Despite her initial ________, she accepted the promotion. (RELUCTANT)",
    "answer": [
      "reluctance"
    ],
    "explanation": "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).",
    "tip": "Koncovka -ance u podstatných jmen."
  },
  {
    "id": "c1-d41-q09",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d41-q10",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d41-q11",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d41-q12",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d41-q13",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d41-q14",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d41-q15",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d41-q16",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d41-q17",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d41-q18",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d41-q19",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d41-q20",
    "dayNumber": 41,
    "date": "2026-12-18",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d42-q01",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only when she removed her disguise ______ who she actually was.",
    "options": [
      "we recognized",
      "did we recognize",
      "had we recognized",
      "we did recognize"
    ],
    "answer": 1,
    "explanation": "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.",
    "tip": "Inverze u 'Only when' je až ve druhé větě!"
  },
  {
    "id": "c1-d42-q02",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not only ______ win the national tournament, but she also broke the record.",
    "options": [
      "she did",
      "did she",
      "was she",
      "had she"
    ],
    "answer": 1,
    "explanation": "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.",
    "tip": "Not only did he do X, but he also did Y."
  },
  {
    "id": "c1-d42-q03",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Little ______ they realize the catastrophic consequences of their decision.",
    "options": [
      "did",
      "had",
      "have",
      "do"
    ],
    "answer": 0,
    "explanation": "Idiom 'Little did they know/realize' = Neměli ani tušení.",
    "tip": "Little funguje jako záporné příslovce s inverzí."
  },
  {
    "id": "c1-d42-q04",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "At no point during the audit ______ able to verify the missing funds.",
    "options": [
      "the accountants were",
      "were the accountants",
      "had the accountants",
      "did the accountants"
    ],
    "answer": 1,
    "explanation": "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.",
    "tip": "At no point / At no time were they..."
  },
  {
    "id": "c1-d42-q05",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The engineers plan to ________ the tunnel to allow larger trains. (WIDE)",
    "answer": [
      "widen"
    ],
    "explanation": "Sloveso od 'wide' je 'widen' (rozšířit).",
    "tip": "Přípona -en tvoří slovesa: widen, lengthen, deepen."
  },
  {
    "id": "c1-d42-q06",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The laboratory tests were ________, so the trial was postponed. (CONCLUDE)",
    "answer": [
      "inconclusive"
    ],
    "explanation": "Výsledky byly neprůkazné = in-conclusive.",
    "tip": "Conclude ➔ conclusive ➔ inconclusive."
  },
  {
    "id": "c1-d42-q07",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She is an ________ gifted pianist who performs worldwide. (EXCEPTION)",
    "answer": [
      "exceptionally"
    ],
    "explanation": "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.",
    "tip": "Exception ➔ exceptional ➔ exceptionally."
  },
  {
    "id": "c1-d42-q08",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)",
    "answer": [
      "misconception"
    ],
    "explanation": "Mylná představa = mis-conception.",
    "tip": "Předpona mis- značí omyl/chybu."
  },
  {
    "id": "c1-d42-q09",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d42-q10",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d42-q11",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d42-q12",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d42-q13",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d42-q14",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d42-q15",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d42-q16",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d42-q17",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d42-q18",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d42-q19",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d42-q20",
    "dayNumber": 42,
    "date": "2026-12-19",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d43-q01",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not until midnight ______ return from his secret mission.",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answer": 1,
    "explanation": "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.",
    "tip": "Not until then did I understand."
  },
  {
    "id": "c1-d43-q02",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only by streamlining our logistics ______ remain competitive in the global market.",
    "options": [
      "we can",
      "can we",
      "we will",
      "are we"
    ],
    "answer": 1,
    "explanation": "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.",
    "tip": "Only by doing X can we achieve Y."
  },
  {
    "id": "c1-d43-q03",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Rarely ______ seen such dedication among first-year university students.",
    "options": [
      "professors have",
      "have professors",
      "did professors",
      "were professors"
    ],
    "answer": 1,
    "explanation": "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.",
    "tip": "Rarely have I seen such brilliance."
  },
  {
    "id": "c1-d43-q04",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Nowhere ______ a more picturesque medieval village in all of Europe.",
    "options": [
      "you will find",
      "will you find",
      "you can find",
      "did you find"
    ],
    "answer": 1,
    "explanation": "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.",
    "tip": "Nowhere else will you encounter this."
  },
  {
    "id": "c1-d43-q05",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The Himalayan weather is notoriously ________ in winter. (PREDICT)",
    "answer": [
      "unpredictable"
    ],
    "explanation": "Nepředvídatelný = un-predict-able.",
    "tip": "Unpredictable weather."
  },
  {
    "id": "c1-d43-q06",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "He tried to ________ his excessive spending by claiming it was an investment. (JUST)",
    "answer": [
      "justify"
    ],
    "explanation": "Sloveso od 'just' je 'justify' (ospravedlnit).",
    "tip": "Přípona -ify tvoří slovesa: justify, clarify, purify."
  },
  {
    "id": "c1-d43-q07",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His repeated misconduct led to his summary ________ from the university. (DISMISS)",
    "answer": [
      "dismissal"
    ],
    "explanation": "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).",
    "tip": "Dismiss ➔ dismissal."
  },
  {
    "id": "c1-d43-q08",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The business underwent a remarkable ________ over the last decade. (EXPAND)",
    "answer": [
      "expansion"
    ],
    "explanation": "Podstatné jméno od 'expand' je 'expansion' (rozšíření).",
    "tip": "Expand ➔ expansion (se 's')."
  },
  {
    "id": "c1-d43-q09",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d43-q10",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d43-q11",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d43-q12",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d43-q13",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d43-q14",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d43-q15",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d43-q16",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d43-q17",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d43-q18",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d43-q19",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d43-q20",
    "dayNumber": 43,
    "date": "2026-12-20",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d44-q01",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "On no account ______ leave your luggage unattended at the terminal.",
    "options": [
      "passengers must",
      "must passengers",
      "should passengers to",
      "passengers are"
    ],
    "answer": 1,
    "explanation": "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.",
    "tip": "On no account must you sign without reading."
  },
  {
    "id": "c1-d44-q02",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Scarcely had the debate started ______ the candidates began shouting at each other.",
    "options": [
      "when",
      "than",
      "as",
      "while"
    ],
    "answer": 0,
    "explanation": "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.",
    "tip": "Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d44-q03",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only after reviewing the security footage ______ what had actually happened.",
    "options": [
      "the detective knew",
      "did the detective know",
      "the detective had known",
      "was the detective knowing"
    ],
    "answer": 1,
    "explanation": "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.",
    "tip": "Only after reading it did I sign."
  },
  {
    "id": "c1-d44-q04",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Had I known about the changes in the schedule, I ______ the meeting earlier.",
    "options": [
      "would attend",
      "would have attended",
      "will attend",
      "had attended"
    ],
    "answer": 1,
    "explanation": "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.",
    "tip": "Had I known = If I had known."
  },
  {
    "id": "c1-d44-q05",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)",
    "answer": [
      "insignificant"
    ],
    "explanation": "Nepatrný / nevýznamný = in-significant.",
    "tip": "Significant ➔ insignificant."
  },
  {
    "id": "c1-d44-q06",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)",
    "answer": [
      "suspicious"
    ],
    "explanation": "Podezřívavý = suspicious.",
    "tip": "Suspect ➔ suspicious."
  },
  {
    "id": "c1-d44-q07",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The museum acquired a manuscript of ________ historical importance. (ESTIMATE)",
    "answer": [
      "inestimable"
    ],
    "explanation": "Nevyčíslitelný / nesmírný = in-estim-able.",
    "tip": "Inestimable value / importance."
  },
  {
    "id": "c1-d44-q08",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)",
    "answer": [
      "imperceptible"
    ],
    "explanation": "Téměř nepostřehnutelný = im-perceptible.",
    "tip": "Perceive ➔ perceptible ➔ imperceptible."
  },
  {
    "id": "c1-d44-q09",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d44-q10",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d44-q11",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d44-q12",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d44-q13",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d44-q14",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d44-q15",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d44-q16",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d44-q17",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d44-q18",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d44-q19",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d44-q20",
    "dayNumber": 44,
    "date": "2026-12-21",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d45-q01",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Were you to reconsider your resignation, the board ______ delighted to keep you.",
    "options": [
      "will be",
      "would be",
      "is",
      "had been"
    ],
    "answer": 1,
    "explanation": "Invertovaný 2. kondicionál: 'Were you to reconsider' = 'If you were to reconsider'. Následek: 'would be'.",
    "tip": "Were you to do sth = If you were to do sth."
  },
  {
    "id": "c1-d45-q02",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Should you require any further assistance, please ______ the reception desk.",
    "options": [
      "contact",
      "to contact",
      "contacting",
      "will contact"
    ],
    "answer": 0,
    "explanation": "Invertovaný 1. kondicionál: 'Should you require' = 'If you should require'. V rozkaze následuje infinitiv 'contact'.",
    "tip": "Should you need help = If you happen to need help."
  },
  {
    "id": "c1-d45-q03",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "In no way ______ be held responsible for damages caused by the storm.",
    "options": [
      "the landlord can",
      "can the landlord",
      "the landlord should",
      "will the landlord to"
    ],
    "answer": 1,
    "explanation": "'In no way' (V žádném případě) vyžaduje inverzi: 'can the landlord be held'.",
    "tip": "In no way can we accept this proposal."
  },
  {
    "id": "c1-d45-q04",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Barely had the teacher left the classroom ______ the children started talking.",
    "options": [
      "than",
      "when",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'Barely had... WHEN...' se pojí se spojkou when.",
    "tip": "Barely had I arrived when the phone rang."
  },
  {
    "id": "c1-d45-q05",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His argument was utterly ________ and lacked any supporting evidence. (DEFEND)",
    "answer": [
      "indefensible"
    ],
    "explanation": "Neobhajitelný = in-defensible.",
    "tip": "Defend ➔ defensible ➔ indefensible."
  },
  {
    "id": "c1-d45-q06",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The antique vase was of ________ value and could not be replaced. (PRICE)",
    "answer": [
      "priceless"
    ],
    "explanation": "Klenot k nezaplacení = price-less.",
    "tip": "Priceless = nevyčíslitelné hodnoty (nikoli bezcenný!)."
  },
  {
    "id": "c1-d45-q07",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Her explanation was ________ and solved the mystery completely. (SATISFY)",
    "answer": [
      "satisfactory"
    ],
    "explanation": "Uspokojivý = satisfactory.",
    "tip": "Satisfy ➔ satisfactory."
  },
  {
    "id": "c1-d45-q08",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The sudden cancellation of the flight caused extreme ________ to passengers. (CONVENIENT)",
    "answer": [
      "inconvenience"
    ],
    "explanation": "Nepohodlí / potíže = in-convenience.",
    "tip": "Convenient ➔ inconvenience."
  },
  {
    "id": "c1-d45-q09",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d45-q10",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d45-q11",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d45-q12",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d45-q13",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d45-q14",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d45-q15",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d45-q16",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d45-q17",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d45-q18",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d45-q19",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d45-q20",
    "dayNumber": 45,
    "date": "2026-12-22",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d46-q01",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Hardly ______ stepped into the shower when the fire alarm began to wail.",
    "options": [
      "I had",
      "had I",
      "did I",
      "have I"
    ],
    "answer": 1,
    "explanation": "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.",
    "tip": "Hardly / Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d46-q02",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Under no circumstances ______ allow unauthorized personnel into the control room.",
    "options": [
      "you should",
      "are you to",
      "should you",
      "you must"
    ],
    "answer": 2,
    "explanation": "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.",
    "tip": "Nikdy nezačínej větu 'Under no circumstances you...'"
  },
  {
    "id": "c1-d46-q03",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "No sooner had the keynote speaker begun ______ the power went out.",
    "options": [
      "when",
      "than",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.",
    "tip": "Hardly = when, No sooner = than."
  },
  {
    "id": "c1-d46-q04",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Seldom ______ witnessed such an extraordinary display of athletic prowess.",
    "options": [
      "we have",
      "have we",
      "did we",
      "we did"
    ],
    "answer": 1,
    "explanation": "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).",
    "tip": "Seldom / Rarely + have we / do we."
  },
  {
    "id": "c1-d46-q05",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The witness gave a completely ________ account of the robbery. (CONTRADICT)",
    "answer": [
      "contradictory"
    ],
    "explanation": "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).",
    "tip": "Přípona -ory: contradict ➔ contradictory."
  },
  {
    "id": "c1-d46-q06",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)",
    "answer": [
      "detrimental"
    ],
    "explanation": "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).",
    "tip": "Detrimental effect on sth."
  },
  {
    "id": "c1-d46-q07",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Arriving two hours late for an interview is utterly ________. (EXCUSE)",
    "answer": [
      "inexcusable"
    ],
    "explanation": "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.",
    "tip": "Záporná předpona in- + přípona -able."
  },
  {
    "id": "c1-d46-q08",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Despite her initial ________, she accepted the promotion. (RELUCTANT)",
    "answer": [
      "reluctance"
    ],
    "explanation": "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).",
    "tip": "Koncovka -ance u podstatných jmen."
  },
  {
    "id": "c1-d46-q09",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d46-q10",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d46-q11",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d46-q12",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d46-q13",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d46-q14",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d46-q15",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d46-q16",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d46-q17",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d46-q18",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d46-q19",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d46-q20",
    "dayNumber": 46,
    "date": "2026-12-23",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d47-q01",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only when she removed her disguise ______ who she actually was.",
    "options": [
      "we recognized",
      "did we recognize",
      "had we recognized",
      "we did recognize"
    ],
    "answer": 1,
    "explanation": "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.",
    "tip": "Inverze u 'Only when' je až ve druhé větě!"
  },
  {
    "id": "c1-d47-q02",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not only ______ win the national tournament, but she also broke the record.",
    "options": [
      "she did",
      "did she",
      "was she",
      "had she"
    ],
    "answer": 1,
    "explanation": "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.",
    "tip": "Not only did he do X, but he also did Y."
  },
  {
    "id": "c1-d47-q03",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Little ______ they realize the catastrophic consequences of their decision.",
    "options": [
      "did",
      "had",
      "have",
      "do"
    ],
    "answer": 0,
    "explanation": "Idiom 'Little did they know/realize' = Neměli ani tušení.",
    "tip": "Little funguje jako záporné příslovce s inverzí."
  },
  {
    "id": "c1-d47-q04",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "At no point during the audit ______ able to verify the missing funds.",
    "options": [
      "the accountants were",
      "were the accountants",
      "had the accountants",
      "did the accountants"
    ],
    "answer": 1,
    "explanation": "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.",
    "tip": "At no point / At no time were they..."
  },
  {
    "id": "c1-d47-q05",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The engineers plan to ________ the tunnel to allow larger trains. (WIDE)",
    "answer": [
      "widen"
    ],
    "explanation": "Sloveso od 'wide' je 'widen' (rozšířit).",
    "tip": "Přípona -en tvoří slovesa: widen, lengthen, deepen."
  },
  {
    "id": "c1-d47-q06",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The laboratory tests were ________, so the trial was postponed. (CONCLUDE)",
    "answer": [
      "inconclusive"
    ],
    "explanation": "Výsledky byly neprůkazné = in-conclusive.",
    "tip": "Conclude ➔ conclusive ➔ inconclusive."
  },
  {
    "id": "c1-d47-q07",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She is an ________ gifted pianist who performs worldwide. (EXCEPTION)",
    "answer": [
      "exceptionally"
    ],
    "explanation": "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.",
    "tip": "Exception ➔ exceptional ➔ exceptionally."
  },
  {
    "id": "c1-d47-q08",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)",
    "answer": [
      "misconception"
    ],
    "explanation": "Mylná představa = mis-conception.",
    "tip": "Předpona mis- značí omyl/chybu."
  },
  {
    "id": "c1-d47-q09",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d47-q10",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d47-q11",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d47-q12",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d47-q13",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d47-q14",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d47-q15",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d47-q16",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d47-q17",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d47-q18",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d47-q19",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d47-q20",
    "dayNumber": 47,
    "date": "2026-12-24",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d48-q01",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not until midnight ______ return from his secret mission.",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answer": 1,
    "explanation": "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.",
    "tip": "Not until then did I understand."
  },
  {
    "id": "c1-d48-q02",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only by streamlining our logistics ______ remain competitive in the global market.",
    "options": [
      "we can",
      "can we",
      "we will",
      "are we"
    ],
    "answer": 1,
    "explanation": "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.",
    "tip": "Only by doing X can we achieve Y."
  },
  {
    "id": "c1-d48-q03",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Rarely ______ seen such dedication among first-year university students.",
    "options": [
      "professors have",
      "have professors",
      "did professors",
      "were professors"
    ],
    "answer": 1,
    "explanation": "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.",
    "tip": "Rarely have I seen such brilliance."
  },
  {
    "id": "c1-d48-q04",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Nowhere ______ a more picturesque medieval village in all of Europe.",
    "options": [
      "you will find",
      "will you find",
      "you can find",
      "did you find"
    ],
    "answer": 1,
    "explanation": "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.",
    "tip": "Nowhere else will you encounter this."
  },
  {
    "id": "c1-d48-q05",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The Himalayan weather is notoriously ________ in winter. (PREDICT)",
    "answer": [
      "unpredictable"
    ],
    "explanation": "Nepředvídatelný = un-predict-able.",
    "tip": "Unpredictable weather."
  },
  {
    "id": "c1-d48-q06",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "He tried to ________ his excessive spending by claiming it was an investment. (JUST)",
    "answer": [
      "justify"
    ],
    "explanation": "Sloveso od 'just' je 'justify' (ospravedlnit).",
    "tip": "Přípona -ify tvoří slovesa: justify, clarify, purify."
  },
  {
    "id": "c1-d48-q07",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His repeated misconduct led to his summary ________ from the university. (DISMISS)",
    "answer": [
      "dismissal"
    ],
    "explanation": "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).",
    "tip": "Dismiss ➔ dismissal."
  },
  {
    "id": "c1-d48-q08",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The business underwent a remarkable ________ over the last decade. (EXPAND)",
    "answer": [
      "expansion"
    ],
    "explanation": "Podstatné jméno od 'expand' je 'expansion' (rozšíření).",
    "tip": "Expand ➔ expansion (se 's')."
  },
  {
    "id": "c1-d48-q09",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d48-q10",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d48-q11",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d48-q12",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d48-q13",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d48-q14",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d48-q15",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d48-q16",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d48-q17",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d48-q18",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d48-q19",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d48-q20",
    "dayNumber": 48,
    "date": "2026-12-25",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d49-q01",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "On no account ______ leave your luggage unattended at the terminal.",
    "options": [
      "passengers must",
      "must passengers",
      "should passengers to",
      "passengers are"
    ],
    "answer": 1,
    "explanation": "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.",
    "tip": "On no account must you sign without reading."
  },
  {
    "id": "c1-d49-q02",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Scarcely had the debate started ______ the candidates began shouting at each other.",
    "options": [
      "when",
      "than",
      "as",
      "while"
    ],
    "answer": 0,
    "explanation": "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.",
    "tip": "Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d49-q03",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only after reviewing the security footage ______ what had actually happened.",
    "options": [
      "the detective knew",
      "did the detective know",
      "the detective had known",
      "was the detective knowing"
    ],
    "answer": 1,
    "explanation": "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.",
    "tip": "Only after reading it did I sign."
  },
  {
    "id": "c1-d49-q04",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Had I known about the changes in the schedule, I ______ the meeting earlier.",
    "options": [
      "would attend",
      "would have attended",
      "will attend",
      "had attended"
    ],
    "answer": 1,
    "explanation": "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.",
    "tip": "Had I known = If I had known."
  },
  {
    "id": "c1-d49-q05",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)",
    "answer": [
      "insignificant"
    ],
    "explanation": "Nepatrný / nevýznamný = in-significant.",
    "tip": "Significant ➔ insignificant."
  },
  {
    "id": "c1-d49-q06",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)",
    "answer": [
      "suspicious"
    ],
    "explanation": "Podezřívavý = suspicious.",
    "tip": "Suspect ➔ suspicious."
  },
  {
    "id": "c1-d49-q07",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The museum acquired a manuscript of ________ historical importance. (ESTIMATE)",
    "answer": [
      "inestimable"
    ],
    "explanation": "Nevyčíslitelný / nesmírný = in-estim-able.",
    "tip": "Inestimable value / importance."
  },
  {
    "id": "c1-d49-q08",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)",
    "answer": [
      "imperceptible"
    ],
    "explanation": "Téměř nepostřehnutelný = im-perceptible.",
    "tip": "Perceive ➔ perceptible ➔ imperceptible."
  },
  {
    "id": "c1-d49-q09",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d49-q10",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d49-q11",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d49-q12",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d49-q13",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d49-q14",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d49-q15",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d49-q16",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d49-q17",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d49-q18",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d49-q19",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d49-q20",
    "dayNumber": 49,
    "date": "2026-12-26",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d50-q01",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Were you to reconsider your resignation, the board ______ delighted to keep you.",
    "options": [
      "will be",
      "would be",
      "is",
      "had been"
    ],
    "answer": 1,
    "explanation": "Invertovaný 2. kondicionál: 'Were you to reconsider' = 'If you were to reconsider'. Následek: 'would be'.",
    "tip": "Were you to do sth = If you were to do sth."
  },
  {
    "id": "c1-d50-q02",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Should you require any further assistance, please ______ the reception desk.",
    "options": [
      "contact",
      "to contact",
      "contacting",
      "will contact"
    ],
    "answer": 0,
    "explanation": "Invertovaný 1. kondicionál: 'Should you require' = 'If you should require'. V rozkaze následuje infinitiv 'contact'.",
    "tip": "Should you need help = If you happen to need help."
  },
  {
    "id": "c1-d50-q03",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "In no way ______ be held responsible for damages caused by the storm.",
    "options": [
      "the landlord can",
      "can the landlord",
      "the landlord should",
      "will the landlord to"
    ],
    "answer": 1,
    "explanation": "'In no way' (V žádném případě) vyžaduje inverzi: 'can the landlord be held'.",
    "tip": "In no way can we accept this proposal."
  },
  {
    "id": "c1-d50-q04",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Barely had the teacher left the classroom ______ the children started talking.",
    "options": [
      "than",
      "when",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'Barely had... WHEN...' se pojí se spojkou when.",
    "tip": "Barely had I arrived when the phone rang."
  },
  {
    "id": "c1-d50-q05",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His argument was utterly ________ and lacked any supporting evidence. (DEFEND)",
    "answer": [
      "indefensible"
    ],
    "explanation": "Neobhajitelný = in-defensible.",
    "tip": "Defend ➔ defensible ➔ indefensible."
  },
  {
    "id": "c1-d50-q06",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The antique vase was of ________ value and could not be replaced. (PRICE)",
    "answer": [
      "priceless"
    ],
    "explanation": "Klenot k nezaplacení = price-less.",
    "tip": "Priceless = nevyčíslitelné hodnoty (nikoli bezcenný!)."
  },
  {
    "id": "c1-d50-q07",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Her explanation was ________ and solved the mystery completely. (SATISFY)",
    "answer": [
      "satisfactory"
    ],
    "explanation": "Uspokojivý = satisfactory.",
    "tip": "Satisfy ➔ satisfactory."
  },
  {
    "id": "c1-d50-q08",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The sudden cancellation of the flight caused extreme ________ to passengers. (CONVENIENT)",
    "answer": [
      "inconvenience"
    ],
    "explanation": "Nepohodlí / potíže = in-convenience.",
    "tip": "Convenient ➔ inconvenience."
  },
  {
    "id": "c1-d50-q09",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d50-q10",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d50-q11",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d50-q12",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d50-q13",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d50-q14",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d50-q15",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d50-q16",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d50-q17",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d50-q18",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d50-q19",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d50-q20",
    "dayNumber": 50,
    "date": "2026-12-27",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d51-q01",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Hardly ______ stepped into the shower when the fire alarm began to wail.",
    "options": [
      "I had",
      "had I",
      "did I",
      "have I"
    ],
    "answer": 1,
    "explanation": "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.",
    "tip": "Hardly / Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d51-q02",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Under no circumstances ______ allow unauthorized personnel into the control room.",
    "options": [
      "you should",
      "are you to",
      "should you",
      "you must"
    ],
    "answer": 2,
    "explanation": "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.",
    "tip": "Nikdy nezačínej větu 'Under no circumstances you...'"
  },
  {
    "id": "c1-d51-q03",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "No sooner had the keynote speaker begun ______ the power went out.",
    "options": [
      "when",
      "than",
      "that",
      "then"
    ],
    "answer": 1,
    "explanation": "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.",
    "tip": "Hardly = when, No sooner = than."
  },
  {
    "id": "c1-d51-q04",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Seldom ______ witnessed such an extraordinary display of athletic prowess.",
    "options": [
      "we have",
      "have we",
      "did we",
      "we did"
    ],
    "answer": 1,
    "explanation": "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).",
    "tip": "Seldom / Rarely + have we / do we."
  },
  {
    "id": "c1-d51-q05",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The witness gave a completely ________ account of the robbery. (CONTRADICT)",
    "answer": [
      "contradictory"
    ],
    "explanation": "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).",
    "tip": "Přípona -ory: contradict ➔ contradictory."
  },
  {
    "id": "c1-d51-q06",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)",
    "answer": [
      "detrimental"
    ],
    "explanation": "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).",
    "tip": "Detrimental effect on sth."
  },
  {
    "id": "c1-d51-q07",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Arriving two hours late for an interview is utterly ________. (EXCUSE)",
    "answer": [
      "inexcusable"
    ],
    "explanation": "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.",
    "tip": "Záporná předpona in- + přípona -able."
  },
  {
    "id": "c1-d51-q08",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "Despite her initial ________, she accepted the promotion. (RELUCTANT)",
    "answer": [
      "reluctance"
    ],
    "explanation": "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).",
    "tip": "Koncovka -ance u podstatných jmen."
  },
  {
    "id": "c1-d51-q09",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d51-q10",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I would prefer you not to play loud music after 10 PM.",
    "keyWord": "RATHER",
    "question": "I ______________________________ loud music after 10 PM.",
    "answer": [
      "would rather you did not play",
      "would rather you didn't play",
      "'d rather you didn't play"
    ],
    "explanation": "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).",
    "tip": "I'd rather you did sth = Byl bych raději, kdybys..."
  },
  {
    "id": "c1-d51-q11",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Experts predict that solar technology will dominate the energy sector.",
    "keyWord": "EXPECTED",
    "question": "Solar technology ______________________________ the energy sector.",
    "answer": [
      "is expected to dominate"
    ],
    "explanation": "Trpná vazba očekávání do budoucna: 'is expected to dominate'.",
    "tip": "Subject + is expected to + infinitive."
  },
  {
    "id": "c1-d51-q12",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I haven't seen my cousin since his wedding three years ago.",
    "keyWord": "LAST",
    "question": "The ______________________________ my cousin was at his wedding three years ago.",
    "answer": [
      "last time i saw",
      "last time I saw"
    ],
    "explanation": "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.",
    "tip": "The last time I saw him was..."
  },
  {
    "id": "c1-d51-q13",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d51-q14",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The unexpected policy change gave ______ to intense debates across the nation.",
    "options": [
      "birth",
      "rise",
      "place",
      "way"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.",
    "tip": "Give rise to speculation/debates."
  },
  {
    "id": "c1-d51-q15",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Students often take free university healthcare ______ granted.",
    "options": [
      "for",
      "as",
      "in",
      "to"
    ],
    "answer": 0,
    "explanation": "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.",
    "tip": "Take for granted."
  },
  {
    "id": "c1-d51-q16",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "His visa application was turned down ______ the grounds of criminal history.",
    "options": [
      "on",
      "in",
      "under",
      "by"
    ],
    "answer": 0,
    "explanation": "Předložková vazba: 'on the grounds of' = na základě / z důvodu.",
    "tip": "On the grounds of = na základě."
  },
  {
    "id": "c1-d51-q17",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d51-q18",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d51-q19",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d51-q20",
    "dayNumber": 51,
    "date": "2026-12-28",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d52-q01",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only when she removed her disguise ______ who she actually was.",
    "options": [
      "we recognized",
      "did we recognize",
      "had we recognized",
      "we did recognize"
    ],
    "answer": 1,
    "explanation": "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.",
    "tip": "Inverze u 'Only when' je až ve druhé větě!"
  },
  {
    "id": "c1-d52-q02",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not only ______ win the national tournament, but she also broke the record.",
    "options": [
      "she did",
      "did she",
      "was she",
      "had she"
    ],
    "answer": 1,
    "explanation": "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.",
    "tip": "Not only did he do X, but he also did Y."
  },
  {
    "id": "c1-d52-q03",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Little ______ they realize the catastrophic consequences of their decision.",
    "options": [
      "did",
      "had",
      "have",
      "do"
    ],
    "answer": 0,
    "explanation": "Idiom 'Little did they know/realize' = Neměli ani tušení.",
    "tip": "Little funguje jako záporné příslovce s inverzí."
  },
  {
    "id": "c1-d52-q04",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "At no point during the audit ______ able to verify the missing funds.",
    "options": [
      "the accountants were",
      "were the accountants",
      "had the accountants",
      "did the accountants"
    ],
    "answer": 1,
    "explanation": "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.",
    "tip": "At no point / At no time were they..."
  },
  {
    "id": "c1-d52-q05",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The engineers plan to ________ the tunnel to allow larger trains. (WIDE)",
    "answer": [
      "widen"
    ],
    "explanation": "Sloveso od 'wide' je 'widen' (rozšířit).",
    "tip": "Přípona -en tvoří slovesa: widen, lengthen, deepen."
  },
  {
    "id": "c1-d52-q06",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The laboratory tests were ________, so the trial was postponed. (CONCLUDE)",
    "answer": [
      "inconclusive"
    ],
    "explanation": "Výsledky byly neprůkazné = in-conclusive.",
    "tip": "Conclude ➔ conclusive ➔ inconclusive."
  },
  {
    "id": "c1-d52-q07",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She is an ________ gifted pianist who performs worldwide. (EXCEPTION)",
    "answer": [
      "exceptionally"
    ],
    "explanation": "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.",
    "tip": "Exception ➔ exceptional ➔ exceptionally."
  },
  {
    "id": "c1-d52-q08",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)",
    "answer": [
      "misconception"
    ],
    "explanation": "Mylná představa = mis-conception.",
    "tip": "Předpona mis- značí omyl/chybu."
  },
  {
    "id": "c1-d52-q09",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He managed to complete the marathon despite suffering a knee injury.",
    "keyWord": "SUCCEEDED",
    "question": "He ______________________________ the marathon despite a knee injury.",
    "answer": [
      "succeeded in completing"
    ],
    "explanation": "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).",
    "tip": "Succeed in + ing."
  },
  {
    "id": "c1-d52-q10",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It came as no surprise to hear that the company had filed for bankruptcy.",
    "keyWord": "SURPRISED",
    "question": "Nobody ______________________________ hear that the company had filed for bankruptcy.",
    "answer": [
      "was surprised to"
    ],
    "explanation": "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.",
    "tip": "Be surprised to hear/learn."
  },
  {
    "id": "c1-d52-q11",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "They postponed the outdoor concert because of torrential rain.",
    "keyWord": "PUT",
    "question": "The outdoor concert ______________________________ because of torrential rain.",
    "answer": [
      "was put off"
    ],
    "explanation": "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.",
    "tip": "Put off = postpone."
  },
  {
    "id": "c1-d52-q12",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "She found it difficult to understand his thick Scottish accent.",
    "keyWord": "DIFFICULTY",
    "question": "She ______________________________ his thick Scottish accent.",
    "answer": [
      "had difficulty in understanding",
      "had difficulty understanding"
    ],
    "explanation": "Vazba: 'have difficulty (in) doing sth'.",
    "tip": "Have difficulty in + ing."
  },
  {
    "id": "c1-d52-q13",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "I cannot ______ up with your persistent unpunctuality any longer.",
    "options": [
      "put",
      "stand",
      "keep",
      "hold"
    ],
    "answer": 0,
    "explanation": "Frázové sloveso: 'put up with' = snášet / tolerovat.",
    "tip": "Put up with bad behavior."
  },
  {
    "id": "c1-d52-q14",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The research team is on the ______ of making a breakthrough in cancer therapy.",
    "options": [
      "edge",
      "verge",
      "brink",
      "border"
    ],
    "answer": 1,
    "explanation": "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.",
    "tip": "On the verge of doing sth."
  },
  {
    "id": "c1-d52-q15",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "By no ______ should this confidential memo be shared outside executive management.",
    "options": [
      "way",
      "means",
      "matter",
      "sense"
    ],
    "answer": 1,
    "explanation": "Pevný výraz: 'by no means' = v žádném případě.",
    "tip": "By no means easy = v žádném případě snadné."
  },
  {
    "id": "c1-d52-q16",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The CEO emphasized that safety must not come at the ______ of productivity.",
    "options": [
      "expense",
      "cost",
      "charge",
      "penalty"
    ],
    "answer": 0,
    "explanation": "Ustálená vazba: 'at the expense of' = na úkor něčeho.",
    "tip": "At the expense of quality/safety."
  },
  {
    "id": "c1-d52-q17",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d52-q18",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  },
  {
    "id": "c1-d52-q19",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?",
    "options": [
      "In my personal opinion, everyone knows that...",
      "It is widely contended that sustainable energy is crucial.",
      "Like people always say, green energy is awesome.",
      "Basically, everyone thinks clean energy is good."
    ],
    "answer": 1,
    "explanation": "Neosobní pasivní vazba: 'It is widely contended / argued that...'.",
    "tip": "Impersonal passive: It is argued / acknowledged that..."
  },
  {
    "id": "c1-d52-q20",
    "dayNumber": 52,
    "date": "2026-12-29",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The board insisted that every board member ______ present at the emergency summit.",
    "options": [
      "is",
      "be",
      "was",
      "must be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.",
    "tip": "Insist that someone be present."
  },
  {
    "id": "c1-d53-q01",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Not until midnight ______ return from his secret mission.",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answer": 1,
    "explanation": "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.",
    "tip": "Not until then did I understand."
  },
  {
    "id": "c1-d53-q02",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only by streamlining our logistics ______ remain competitive in the global market.",
    "options": [
      "we can",
      "can we",
      "we will",
      "are we"
    ],
    "answer": 1,
    "explanation": "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.",
    "tip": "Only by doing X can we achieve Y."
  },
  {
    "id": "c1-d53-q03",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Rarely ______ seen such dedication among first-year university students.",
    "options": [
      "professors have",
      "have professors",
      "did professors",
      "were professors"
    ],
    "answer": 1,
    "explanation": "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.",
    "tip": "Rarely have I seen such brilliance."
  },
  {
    "id": "c1-d53-q04",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Nowhere ______ a more picturesque medieval village in all of Europe.",
    "options": [
      "you will find",
      "will you find",
      "you can find",
      "did you find"
    ],
    "answer": 1,
    "explanation": "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.",
    "tip": "Nowhere else will you encounter this."
  },
  {
    "id": "c1-d53-q05",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The Himalayan weather is notoriously ________ in winter. (PREDICT)",
    "answer": [
      "unpredictable"
    ],
    "explanation": "Nepředvídatelný = un-predict-able.",
    "tip": "Unpredictable weather."
  },
  {
    "id": "c1-d53-q06",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "He tried to ________ his excessive spending by claiming it was an investment. (JUST)",
    "answer": [
      "justify"
    ],
    "explanation": "Sloveso od 'just' je 'justify' (ospravedlnit).",
    "tip": "Přípona -ify tvoří slovesa: justify, clarify, purify."
  },
  {
    "id": "c1-d53-q07",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His repeated misconduct led to his summary ________ from the university. (DISMISS)",
    "answer": [
      "dismissal"
    ],
    "explanation": "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).",
    "tip": "Dismiss ➔ dismissal."
  },
  {
    "id": "c1-d53-q08",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The business underwent a remarkable ________ over the last decade. (EXPAND)",
    "answer": [
      "expansion"
    ],
    "explanation": "Podstatné jméno od 'expand' je 'expansion' (rozšíření).",
    "tip": "Expand ➔ expansion (se 's')."
  },
  {
    "id": "c1-d53-q09",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "As soon as we arrived at the hotel, it started pouring with rain.",
    "keyWord": "SOONER",
    "question": "No ______________________________ at the hotel than it started pouring with rain.",
    "answer": [
      "sooner had we arrived"
    ],
    "explanation": "Inverze s NO SOONER: 'No sooner had we arrived... than...'.",
    "tip": "No sooner had + subject + past participle."
  },
  {
    "id": "c1-d53-q10",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "He didn't pay any attention to the doctor's explicit warnings.",
    "keyWord": "NOTICE",
    "question": "He took ______________________________ the doctor's explicit warnings.",
    "answer": [
      "no notice of"
    ],
    "explanation": "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.",
    "tip": "Take notice of = věnovat pozornost."
  },
  {
    "id": "c1-d53-q11",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "People believe that the ancient artifact was smuggled out of Egypt.",
    "keyWord": "THOUGHT",
    "question": "The ancient artifact ______________________________ smuggled out of Egypt.",
    "answer": [
      "is thought to have been"
    ],
    "explanation": "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.",
    "tip": "is said/thought TO HAVE BEEN + 3. tvar."
  },
  {
    "id": "c1-d53-q12",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "If it hadn't been for your generous donation, the shelter would have closed.",
    "keyWord": "BUT",
    "question": "______________________________ generous donation, the shelter would have closed.",
    "answer": [
      "but for your",
      "But for your"
    ],
    "explanation": "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').",
    "tip": "But for your help = Had it not been for your help."
  },
  {
    "id": "c1-d53-q13",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "He attended the international conference with a ______ to networking with publishers.",
    "options": [
      "hope",
      "view",
      "aim",
      "point"
    ],
    "answer": 1,
    "explanation": "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.",
    "tip": "With a view to expanding."
  },
  {
    "id": "c1-d53-q14",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The elderly are particularly ______ to respiratory infections during winter.",
    "options": [
      "prone",
      "apt",
      "inclined",
      "liable"
    ],
    "answer": 0,
    "explanation": "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.",
    "tip": "Prone to illness / prone to errors."
  },
  {
    "id": "c1-d53-q15",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The new environmental legislation will come ______ effect on January 1st.",
    "options": [
      "to",
      "into",
      "in",
      "with"
    ],
    "answer": 1,
    "explanation": "Zákon vstoupí v platnost = 'come into effect'.",
    "tip": "Come into effect / come into force."
  },
  {
    "id": "c1-d53-q16",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Only a ______ fraction of the respondents admitted to cheating on the survey.",
    "options": [
      "minute",
      "minimal",
      "miniature",
      "minor"
    ],
    "answer": 0,
    "explanation": "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].",
    "tip": "Minute fraction = nepatrný zlomek."
  },
  {
    "id": "c1-d53-q17",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Albeit ______ by the harsh weather, the rescue team successfully reached the summit.",
    "options": [
      "slowed",
      "slowing",
      "they slowed",
      "was slowed"
    ],
    "answer": 0,
    "explanation": "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.",
    "tip": "Albeit + adjective / participle (Albeit expensive, it works)."
  },
  {
    "id": "c1-d53-q18",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Hardly any evidence was presented, ______ undermining the prosecution's case.",
    "options": [
      "thereby",
      "so",
      "anyway",
      "whereas"
    ],
    "answer": 0,
    "explanation": "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.",
    "tip": "Thereby reducing costs / thereby improving efficiency."
  },
  {
    "id": "c1-d53-q19",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "The auditor recommended that the outdated financial system ______ upgraded immediately.",
    "options": [
      "is",
      "be",
      "was",
      "would be"
    ],
    "answer": 1,
    "explanation": "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.",
    "tip": "Recommend / Insist / Demand that [subject] BE + 3. tvar."
  },
  {
    "id": "c1-d53-q20",
    "dayNumber": 53,
    "date": "2026-12-30",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak nejlépe vyjádřit příčinu a následek ve formální eseji?",
    "options": [
      "So, because of this, the budget ran out.",
      "Consequently, the allocated budget was depleted.",
      "And so they didn't have any money left anyway.",
      "Due to this, tons of cash was totally wasted."
    ],
    "answer": 1,
    "explanation": "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.",
    "tip": "Vyhýbej se 'so', 'anyway', 'tons of'."
  },
  {
    "id": "c1-d54-q01",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "On no account ______ leave your luggage unattended at the terminal.",
    "options": [
      "passengers must",
      "must passengers",
      "should passengers to",
      "passengers are"
    ],
    "answer": 1,
    "explanation": "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.",
    "tip": "On no account must you sign without reading."
  },
  {
    "id": "c1-d54-q02",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Scarcely had the debate started ______ the candidates began shouting at each other.",
    "options": [
      "when",
      "than",
      "as",
      "while"
    ],
    "answer": 0,
    "explanation": "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.",
    "tip": "Scarcely se vždy pojí s WHEN."
  },
  {
    "id": "c1-d54-q03",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Only after reviewing the security footage ______ what had actually happened.",
    "options": [
      "the detective knew",
      "did the detective know",
      "the detective had known",
      "was the detective knowing"
    ],
    "answer": 1,
    "explanation": "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.",
    "tip": "Only after reading it did I sign."
  },
  {
    "id": "c1-d54-q04",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "inversions",
    "categoryLabel": "Záporné inverze",
    "type": "choice",
    "instruction": "Vyber správnou možnost (Záporná inverze):",
    "question": "Had I known about the changes in the schedule, I ______ the meeting earlier.",
    "options": [
      "would attend",
      "would have attended",
      "will attend",
      "had attended"
    ],
    "answer": 1,
    "explanation": "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.",
    "tip": "Had I known = If I had known."
  },
  {
    "id": "c1-d54-q05",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)",
    "answer": [
      "insignificant"
    ],
    "explanation": "Nepatrný / nevýznamný = in-significant.",
    "tip": "Significant ➔ insignificant."
  },
  {
    "id": "c1-d54-q06",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)",
    "answer": [
      "suspicious"
    ],
    "explanation": "Podezřívavý = suspicious.",
    "tip": "Suspect ➔ suspicious."
  },
  {
    "id": "c1-d54-q07",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The museum acquired a manuscript of ________ historical importance. (ESTIMATE)",
    "answer": [
      "inestimable"
    ],
    "explanation": "Nevyčíslitelný / nesmírný = in-estim-able.",
    "tip": "Inestimable value / importance."
  },
  {
    "id": "c1-d54-q08",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "word_formation",
    "categoryLabel": "Tvoření slov (Word Formation)",
    "type": "text",
    "instruction": "Uprav slovo v závorce do správného tvaru:",
    "question": "The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)",
    "answer": [
      "imperceptible"
    ],
    "explanation": "Téměř nepostřehnutelný = im-perceptible.",
    "tip": "Perceive ➔ perceptible ➔ imperceptible."
  },
  {
    "id": "c1-d54-q09",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "I really regret not accepting the scholarship when I was twenty.",
    "keyWord": "WISH",
    "question": "I really ______________________________ the scholarship when I was twenty.",
    "answer": [
      "wish i had accepted",
      "wish I had accepted"
    ],
    "explanation": "Lítost nad minulostí: 'wish + past perfect'.",
    "tip": "I wish I had done it = Kéž bych to býval udělal."
  },
  {
    "id": "c1-d54-q10",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "Under no circumstances should visitors touch the exhibits.",
    "keyWord": "ACCOUNT",
    "question": "On ______________________________ touch the exhibits.",
    "answer": [
      "no account should visitors",
      "no account must visitors"
    ],
    "explanation": "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.",
    "tip": "On no account + pomocné sloveso + podmět."
  },
  {
    "id": "c1-d54-q11",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "It is certain that Sarah didn't take the car keys because she was with me.",
    "keyWord": "HAVE",
    "question": "Sarah ______________________________ the car keys because she was with me.",
    "answer": [
      "could not have taken",
      "cannot have taken",
      "couldn't have taken",
      "can't have taken"
    ],
    "explanation": "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.",
    "tip": "Can't have done / Couldn't have done."
  },
  {
    "id": "c1-d54-q12",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "transformations",
    "categoryLabel": "Transformace vět (Part 4)",
    "type": "text",
    "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
    "promptContext": "There is no point in arguing about something that cannot be changed.",
    "keyWord": "WORTH",
    "question": "It is ______________________________ about something that cannot be changed.",
    "answer": [
      "not worth arguing",
      "hardly worth arguing"
    ],
    "explanation": "Vazba 'It is not worth + ing' = Nemá smysl dělat...",
    "tip": "It is not worth doing sth."
  },
  {
    "id": "c1-d54-q13",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "She was completely ______ aback by his sudden decision to resign.",
    "options": [
      "taken",
      "set",
      "held",
      "brought"
    ],
    "answer": 0,
    "explanation": "Idiom: 'taken aback' = zaskočený / vyvedený z míry.",
    "tip": "I was taken aback by..."
  },
  {
    "id": "c1-d54-q14",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "Much ______ I appreciate your advice, I have decided to follow my intuition.",
    "options": [
      "more",
      "as",
      "than",
      "like"
    ],
    "answer": 1,
    "explanation": "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...",
    "tip": "Much as I'd love to..."
  },
  {
    "id": "c1-d54-q15",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The diplomat refused to be ______ into answering the provocative question.",
    "options": [
      "drawn",
      "pushed",
      "pulled",
      "dragged"
    ],
    "answer": 0,
    "explanation": "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.",
    "tip": "Be drawn into doing sth."
  },
  {
    "id": "c1-d54-q16",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "collocations",
    "categoryLabel": "Kolokace & Idiomy (Use of English)",
    "type": "choice",
    "instruction": "Vyber správnou kolokaci / předložku:",
    "question": "The startup's revenue fell ______ of the ambitious targets set by venture capitalists.",
    "options": [
      "short",
      "down",
      "low",
      "back"
    ],
    "answer": 0,
    "explanation": "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.",
    "tip": "Fall short of a target."
  },
  {
    "id": "c1-d54-q17",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "If she ______ the train this morning, she wouldn't be stranded here right now.",
    "options": [
      "caught",
      "had caught",
      "would catch",
      "has caught"
    ],
    "answer": 1,
    "explanation": "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).",
    "tip": "Past condition (had + 3.) ➔ Present result (would be)."
  },
  {
    "id": "c1-d54-q18",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?",
    "options": [
      "Furthermore,",
      "Nevertheless,",
      "Besides that,",
      "Consequently,"
    ],
    "answer": 2,
    "explanation": "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.",
    "tip": "Místo Besides piš: Furthermore, Moreover, In addition."
  },
  {
    "id": "c1-d54-q19",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "What truly astonished the research team ______ the speed of the chemical reaction.",
    "options": [
      "were",
      "was",
      "are",
      "had been"
    ],
    "answer": 1,
    "explanation": "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').",
    "tip": "What impressed me was..."
  },
  {
    "id": "c1-d54-q20",
    "dayNumber": 54,
    "date": "2026-12-31",
    "category": "register",
    "categoryLabel": "Formální styl (Writing & Essays)",
    "type": "choice",
    "instruction": "Vyber nejvhodnější C1 formální variantu:",
    "question": "Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?",
    "options": [
      "throw away",
      "eradicate / eliminate",
      "dump off",
      "toss out"
    ],
    "answer": 1,
    "explanation": "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.",
    "tip": "Get rid of ➔ eliminate / abolish / eradicate."
  }
];

if (typeof module !== "undefined") {
  module.exports = { C1_QUESTIONS };
}
