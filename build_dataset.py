# -*- coding: utf-8 -*-
"""
Generátor 1080 C1 Cambridge otázek (54 dní x 20 otázek na den).
Od 08.11.2026 do 31.12.2026.
"""

import json
from datetime import date, timedelta

# Základní data pro generování
# Každý den bude mít 20 otázek:
# 4x Záporné inverze
# 4x Tvoření slov (Word Formation)
# 4x Transformace vět (Key Word Transformations)
# 4x Kolokace & Idiomy
# 4x Formální styl & eseye

# 1. Zásobník inverzí
INVERSIONS_POOL = [
    # Template: (question, options, ans_idx, explanation, tip)
    ("Hardly ______ stepped into the shower when the fire alarm began to wail.", ["I had", "had I", "did I", "have I"], 1, "Pravidlo inverze s HARDLY: 'Hardly had + podmět + past participle... when...'.", "Hardly / Scarcely se vždy pojí s WHEN."),
    ("Under no circumstances ______ allow unauthorized personnel into the control room.", ["you should", "are you to", "should you", "you must"], 2, "Po 'Under no circumstances' (Za žádných okolností) musí následovat inverze pomocného slovesa a podmětu.", "Nikdy nezačínej větu 'Under no circumstances you...'"),
    ("No sooner had the keynote speaker begun ______ the power went out.", ["when", "than", "that", "then"], 1, "'No sooner had... THAN...'. Druhý stupeň 'sooner' vyžaduje spojku 'than'.", "Hardly = when, No sooner = than."),
    ("Seldom ______ witnessed such an extraordinary display of athletic prowess.", ["we have", "have we", "did we", "we did"], 1, "Příslovce 'Seldom' (Zřídka) na začátku věty vyžaduje obrácený slovosled (inverzi).", "Seldom / Rarely + have we / do we."),
    ("Only when she removed her disguise ______ who she actually was.", ["we recognized", "did we recognize", "had we recognized", "we did recognize"], 1, "U vazeb 'Only when / Only after / Only if' dochází k inverzi až v hlavní (druhé) větě.", "Inverze u 'Only when' je až ve druhé větě!"),
    ("Not only ______ win the national tournament, but she also broke the record.", ["she did", "did she", "was she", "had she"], 1, "Vazba 'Not only did she... but she also...'. První věta má inverzi s 'did'.", "Not only did he do X, but he also did Y."),
    ("Little ______ they realize the catastrophic consequences of their decision.", ["did", "had", "have", "do"], 0, "Idiom 'Little did they know/realize' = Neměli ani tušení.", "Little funguje jako záporné příslovce s inverzí."),
    ("At no point during the audit ______ able to verify the missing funds.", ["the accountants were", "were the accountants", "had the accountants", "did the accountants"], 1, "'At no point' (V žádném okamžiku) vyžaduje inverzi slovesa 'to be': were the accountants.", "At no point / At no time were they..."),
    ("Not until midnight ______ return from his secret mission.", ["he did", "did he", "he had", "had he"], 1, "U 'Not until + čas' dochází k inverzi až v hlavní větě: 'did he return'.", "Not until then did I understand."),
    ("Only by streamlining our logistics ______ remain competitive in the global market.", ["we can", "can we", "we will", "are we"], 1, "'Only by + gerund' vyžaduje v hlavní větě inverzi: 'can we remain'.", "Only by doing X can we achieve Y."),
    ("Rarely ______ seen such dedication among first-year university students.", ["professors have", "have professors", "did professors", "were professors"], 1, "'Rarely' na začátku věty vyžaduje inverzi s pomocným slovesem 'have'.", "Rarely have I seen such brilliance."),
    ("Nowhere ______ a more picturesque medieval village in all of Europe.", ["you will find", "will you find", "you can find", "did you find"], 1, "'Nowhere' (Nikde) vyžaduje inverzi modálního slovesa a podmětu: 'will you find'.", "Nowhere else will you encounter this."),
    ("On no account ______ leave your luggage unattended at the terminal.", ["passengers must", "must passengers", "should passengers to", "passengers are"], 1, "'On no account' (V žádném případě) vyžaduje inverzi: 'must passengers leave'.", "On no account must you sign without reading."),
    ("Scarcely had the debate started ______ the candidates began shouting at each other.", ["when", "than", "as", "while"], 0, "'Scarcely had... WHEN...' funguje totožně jako 'Hardly had... when...'.", "Scarcely se vždy pojí s WHEN."),
    ("Only after reviewing the security footage ______ what had actually happened.", ["the detective knew", "did the detective know", "the detective had known", "was the detective knowing"], 1, "'Only after...' přesouvá inverzi do hlavní věty: 'did the detective know'.", "Only after reading it did I sign."),
    ("Had I known about the changes in the schedule, I ______ the meeting earlier.", ["would attend", "would have attended", "will attend", "had attended"], 1, "Invertovaný 3. kondicionál: 'Had I known' = 'If I had known'. Následek v minulosti: 'would have attended'.", "Had I known = If I had known."),
    ("Were you to reconsider your resignation, the board ______ delighted to keep you.", ["will be", "would be", "is", "had been"], 1, "Invertovaný 2. kondicionál: 'Were you to reconsider' = 'If you were to reconsider'. Následek: 'would be'.", "Were you to do sth = If you were to do sth."),
    ("Should you require any further assistance, please ______ the reception desk.", ["contact", "to contact", "contacting", "will contact"], 0, "Invertovaný 1. kondicionál: 'Should you require' = 'If you should require'. V rozkaze následuje infinitiv 'contact'.", "Should you need help = If you happen to need help."),
    ("In no way ______ be held responsible for damages caused by the storm.", ["the landlord can", "can the landlord", "the landlord should", "will the landlord to"], 1, "'In no way' (V žádném případě) vyžaduje inverzi: 'can the landlord be held'.", "In no way can we accept this proposal."),
    ("Barely had the teacher left the classroom ______ the children started talking.", ["than", "when", "that", "then"], 1, "'Barely had... WHEN...' se pojí se spojkou when.", "Barely had I arrived when the phone rang.")
]

# 2. Zásobník Word Formation
WORD_FORMATION_POOL = [
    ("The witness gave a completely ________ account of the robbery. (CONTRADICT)", "contradictory", "Od 'contradict' tvoříme přídavné jméno 'contradictory' (protiřečící si).", "Přípona -ory: contradict ➔ contradictory."),
    ("Lack of sleep can have a highly ________ impact on cognitive function. (DETRIMENT)", "detrimental", "Od 'detriment' (újma) je přídavné jméno 'detrimental' (škodlivý).", "Detrimental effect on sth."),
    ("Arriving two hours late for an interview is utterly ________. (EXCUSE)", "inexcusable", "Z kontextu vyplývá zápor: neomluvitelný = in-excus-able.", "Záporná předpona in- + přípona -able."),
    ("Despite her initial ________, she accepted the promotion. (RELUCTANT)", "reluctance", "Podstatné jméno od 'reluctant' (zdráhavý) je 'reluctance' (neochota).", "Koncovka -ance u podstatných jmen."),
    ("The engineers plan to ________ the tunnel to allow larger trains. (WIDE)", "widen", "Sloveso od 'wide' je 'widen' (rozšířit).", "Přípona -en tvoří slovesa: widen, lengthen, deepen."),
    ("The laboratory tests were ________, so the trial was postponed. (CONCLUDE)", "inconclusive", "Výsledky byly neprůkazné = in-conclusive.", "Conclude ➔ conclusive ➔ inconclusive."),
    ("She is an ________ gifted pianist who performs worldwide. (EXCEPTION)", "exceptionally", "Před přídavným jménem 'gifted' potřebujeme příslovce: exceptionally.", "Exception ➔ exceptional ➔ exceptionally."),
    ("There is a common ________ that all carbohydrates cause weight gain. (CONCEIVE)", "misconception", "Mylná představa = mis-conception.", "Předpona mis- značí omyl/chybu."),
    ("The Himalayan weather is notoriously ________ in winter. (PREDICT)", "unpredictable", "Nepředvídatelný = un-predict-able.", "Unpredictable weather."),
    ("He tried to ________ his excessive spending by claiming it was an investment. (JUST)", "justify", "Sloveso od 'just' je 'justify' (ospravedlnit).", "Přípona -ify tvoří slovesa: justify, clarify, purify."),
    ("His repeated misconduct led to his summary ________ from the university. (DISMISS)", "dismissal", "Podstatné jméno od 'dismiss' je 'dismissal' (vyloučení / propuštění).", "Dismiss ➔ dismissal."),
    ("The business underwent a remarkable ________ over the last decade. (EXPAND)", "expansion", "Podstatné jméno od 'expand' je 'expansion' (rozšíření).", "Expand ➔ expansion (se 's')."),
    ("His contribution to the project was virtually ________, yet he took all credit. (SIGNIFY)", "insignificant", "Nepatrný / nevýznamný = in-significant.", "Significant ➔ insignificant."),
    ("She was deeply ________ of his motives after his sudden change of heart. (SUSPECT)", "suspicious", "Podezřívavý = suspicious.", "Suspect ➔ suspicious."),
    ("The museum acquired a manuscript of ________ historical importance. (ESTIMATE)", "inestimable", "Nevyčíslitelný / nesmírný = in-estim-able.", "Inestimable value / importance."),
    ("The mountains in the background were almost ________ due to heavy fog. (PERCEIVE)", "imperceptible", "Téměř nepostřehnutelný = im-perceptible.", "Perceive ➔ perceptible ➔ imperceptible."),
    ("His argument was utterly ________ and lacked any supporting evidence. (DEFEND)", "indefensible", "Neobhajitelný = in-defensible.", "Defend ➔ defensible ➔ indefensible."),
    ("The antique vase was of ________ value and could not be replaced. (PRICE)", "priceless", "Klenot k nezaplacení = price-less.", "Priceless = nevyčíslitelné hodnoty (nikoli bezcenný!)."),
    ("Her explanation was ________ and solved the mystery completely. (SATISFY)", "satisfactory", "Uspokojivý = satisfactory.", "Satisfy ➔ satisfactory."),
    ("The sudden cancellation of the flight caused extreme ________ to passengers. (CONVENIENT)", "inconvenience", "Nepohodlí / potíže = in-convenience.", "Convenient ➔ inconvenience.")
]

# 3. Zásobník Transformací (Key Word Transformations)
TRANSFORMATIONS_POOL = [
    ("People believe that the ancient artifact was smuggled out of Egypt.", "THOUGHT", "The ancient artifact ______________________________ smuggled out of Egypt.", ["is thought to have been"], "Pasivní reporting s minulým časem: 'is thought to have been stolen/smuggled'.", "is said/thought TO HAVE BEEN + 3. tvar."),
    ("If it hadn't been for your generous donation, the shelter would have closed.", "BUT", "______________________________ generous donation, the shelter would have closed.", ["but for your", "But for your"], "'But for + noun' nahrazuje 3. kondicionál ('Kdyby nebylo...').", "But for your help = Had it not been for your help."),
    ("I really regret not accepting the scholarship when I was twenty.", "WISH", "I really ______________________________ the scholarship when I was twenty.", ["wish i had accepted", "wish I had accepted"], "Lítost nad minulostí: 'wish + past perfect'.", "I wish I had done it = Kéž bych to býval udělal."),
    ("Under no circumstances should visitors touch the exhibits.", "ACCOUNT", "On ______________________________ touch the exhibits.", ["no account should visitors", "no account must visitors"], "'On no account' vyžaduje zápornou inverzi: 'should visitors touch'.", "On no account + pomocné sloveso + podmět."),
    ("It is certain that Sarah didn't take the car keys because she was with me.", "HAVE", "Sarah ______________________________ the car keys because she was with me.", ["could not have taken", "cannot have taken", "couldn't have taken", "can't have taken"], "Záporná dedukce v minulosti: nemohla to vzít = could not have taken.", "Can't have done / Couldn't have done."),
    ("There is no point in arguing about something that cannot be changed.", "WORTH", "It is ______________________________ about something that cannot be changed.", ["not worth arguing", "hardly worth arguing"], "Vazba 'It is not worth + ing' = Nemá smysl dělat...", "It is not worth doing sth."),
    ("I would prefer you not to play loud music after 10 PM.", "RATHER", "I ______________________________ loud music after 10 PM.", ["would rather you did not play", "would rather you didn't play", "'d rather you didn't play"], "'Would rather you DID NOT do sth' (Unreal past pro druhou osobu).", "I'd rather you did sth = Byl bych raději, kdybys..."),
    ("Experts predict that solar technology will dominate the energy sector.", "EXPECTED", "Solar technology ______________________________ the energy sector.", ["is expected to dominate"], "Trpná vazba očekávání do budoucna: 'is expected to dominate'.", "Subject + is expected to + infinitive."),
    ("I haven't seen my cousin since his wedding three years ago.", "LAST", "The ______________________________ my cousin was at his wedding three years ago.", ["last time i saw", "last time I saw"], "Nahrazení předpřítomného času minulým: 'The last time I saw... was...'.", "The last time I saw him was..."),
    ("He managed to complete the marathon despite suffering a knee injury.", "SUCCEEDED", "He ______________________________ the marathon despite a knee injury.", ["succeeded in completing"], "Vazba: 'succeed in doing sth' (dokázat/uspět v něčem).", "Succeed in + ing."),
    ("It came as no surprise to hear that the company had filed for bankruptcy.", "SURPRISED", "Nobody ______________________________ hear that the company had filed for bankruptcy.", ["was surprised to"], "Vazba 'Nobody was surprised to hear...' = nikoho to nepřekvapilo.", "Be surprised to hear/learn."),
    ("They postponed the outdoor concert because of torrential rain.", "PUT", "The outdoor concert ______________________________ because of torrential rain.", ["was put off"], "Frázové sloveso pro odložit: 'put off'. V trpném rodě: 'was put off'.", "Put off = postpone."),
    ("She found it difficult to understand his thick Scottish accent.", "DIFFICULTY", "She ______________________________ his thick Scottish accent.", ["had difficulty in understanding", "had difficulty understanding"], "Vazba: 'have difficulty (in) doing sth'.", "Have difficulty in + ing."),
    ("As soon as we arrived at the hotel, it started pouring with rain.", "SOONER", "No ______________________________ at the hotel than it started pouring with rain.", ["sooner had we arrived"], "Inverze s NO SOONER: 'No sooner had we arrived... than...'.", "No sooner had + subject + past participle."),
    ("He didn't pay any attention to the doctor's explicit warnings.", "NOTICE", "He took ______________________________ the doctor's explicit warnings.", ["no notice of"], "Ustálená vazba: 'take no notice of sth' = nevšímat si něčeho.", "Take notice of = věnovat pozornost.")
]

# 4. Zásobník Kolokací a Idiomů
COLLOCATIONS_POOL = [
    ("The new environmental legislation will come ______ effect on January 1st.", ["to", "into", "in", "with"], 1, "Zákon vstoupí v platnost = 'come into effect'.", "Come into effect / come into force."),
    ("Only a ______ fraction of the respondents admitted to cheating on the survey.", ["minute", "minimal", "miniature", "minor"], 0, "Nepatrný zlomek = 'a minute fraction' [maɪˈnjuːt].", "Minute fraction = nepatrný zlomek."),
    ("She was completely ______ aback by his sudden decision to resign.", ["taken", "set", "held", "brought"], 0, "Idiom: 'taken aback' = zaskočený / vyvedený z míry.", "I was taken aback by..."),
    ("Much ______ I appreciate your advice, I have decided to follow my intuition.", ["more", "as", "than", "like"], 1, "Přípustková věta: 'Much as I appreciate...' = Ačkoliv velmi oceňuji...", "Much as I'd love to..."),
    ("The diplomat refused to be ______ into answering the provocative question.", ["drawn", "pushed", "pulled", "dragged"], 0, "Formální kolokace: 'drawn into an argument/discussion' = vtažen do debaty.", "Be drawn into doing sth."),
    ("The startup's revenue fell ______ of the ambitious targets set by venture capitalists.", ["short", "down", "low", "back"], 0, "Kolokace: 'fall short of expectations/targets' = zklamat očekávání.", "Fall short of a target."),
    ("The unexpected policy change gave ______ to intense debates across the nation.", ["birth", "rise", "place", "way"], 1, "Kolokace: 'give rise to' = zavdat příčinu / vyvolat.", "Give rise to speculation/debates."),
    ("Students often take free university healthcare ______ granted.", ["for", "as", "in", "to"], 0, "Idiom: 'take something FOR granted' = brát něco jako samozřejmost.", "Take for granted."),
    ("His visa application was turned down ______ the grounds of criminal history.", ["on", "in", "under", "by"], 0, "Předložková vazba: 'on the grounds of' = na základě / z důvodu.", "On the grounds of = na základě."),
    ("I cannot ______ up with your persistent unpunctuality any longer.", ["put", "stand", "keep", "hold"], 0, "Frázové sloveso: 'put up with' = snášet / tolerovat.", "Put up with bad behavior."),
    ("The research team is on the ______ of making a breakthrough in cancer therapy.", ["edge", "verge", "brink", "border"], 1, "Kolokace: 'on the verge of' = na pokraji / na prahu průlomu.", "On the verge of doing sth."),
    ("By no ______ should this confidential memo be shared outside executive management.", ["way", "means", "matter", "sense"], 1, "Pevný výraz: 'by no means' = v žádném případě.", "By no means easy = v žádném případě snadné."),
    ("The CEO emphasized that safety must not come at the ______ of productivity.", ["expense", "cost", "charge", "penalty"], 0, "Ustálená vazba: 'at the expense of' = na úkor něčeho.", "At the expense of quality/safety."),
    ("He attended the international conference with a ______ to networking with publishers.", ["hope", "view", "aim", "point"], 1, "Formální vazba: 'with a view to + ing' = za účelem / s vyhlídkou na.", "With a view to expanding."),
    ("The elderly are particularly ______ to respiratory infections during winter.", ["prone", "apt", "inclined", "liable"], 0, "Přídavné jméno s předložkou: 'prone to sth' = náchylný k něčemu.", "Prone to illness / prone to errors.")
]

# 5. Zásobník Formální styl a Psaní (Register & Writing)
REGISTER_POOL = [
    ("The auditor recommended that the outdated financial system ______ upgraded immediately.", ["is", "be", "was", "would be"], 1, "Subjunktiv (Subjunctive mood): 'recommended that it BE upgraded'.", "Recommend / Insist / Demand that [subject] BE + 3. tvar."),
    ("Jak nejlépe vyjádřit příčinu a následek ve formální eseji?", ["So, because of this, the budget ran out.", "Consequently, the allocated budget was depleted.", "And so they didn't have any money left anyway.", "Due to this, tons of cash was totally wasted."], 1, "Formální konektor 'Consequently' a trpná formální vazba 'was depleted'.", "Vyhýbej se 'so', 'anyway', 'tons of'."),
    ("If she ______ the train this morning, she wouldn't be stranded here right now.", ["caught", "had caught", "would catch", "has caught"], 1, "Smíšený kondicionál: Minulá podmínka ('this morning' ➔ had caught) + přítomný následek ('right now' ➔ wouldn't be).", "Past condition (had + 3.) ➔ Present result (would be)."),
    ("Který z konektorů je ZCELA NEVHODNÝ pro formální C1 esej?", ["Furthermore,", "Nevertheless,", "Besides that,", "Consequently,"], 2, "'Besides that' (A mimochodem / krom toho) je příliš hovorové pro esej.", "Místo Besides piš: Furthermore, Moreover, In addition."),
    ("What truly astonished the research team ______ the speed of the chemical reaction.", ["were", "was", "are", "had been"], 1, "Vytýkací věta (Cleft sentence): 'What astonished... was the speed' (shoda se 'speed').", "What impressed me was..."),
    ("Jak formálně nahradit hovorové sloveso 'get rid of' ve formálním textu?", ["throw away", "eradicate / eliminate", "dump off", "toss out"], 1, "Ve formálním stylu nahrazujeme hovorová slovesa akademickými ekvivalenty jako 'eliminate' nebo 'eradicate'.", "Get rid of ➔ eliminate / abolish / eradicate."),
    ("Jak nejlépe uvést obecně přijímaný názor v úvodu C1 eseje?", ["In my personal opinion, everyone knows that...", "It is widely contended that sustainable energy is crucial.", "Like people always say, green energy is awesome.", "Basically, everyone thinks clean energy is good."], 1, "Neosobní pasivní vazba: 'It is widely contended / argued that...'.", "Impersonal passive: It is argued / acknowledged that..."),
    ("The board insisted that every board member ______ present at the emergency summit.", ["is", "be", "was", "must be"], 1, "Subjunktiv po slovesu 'insist that': 'insisted that every member BE present'.", "Insist that someone be present."),
    ("Albeit ______ by the harsh weather, the rescue team successfully reached the summit.", ["slowed", "slowing", "they slowed", "was slowed"], 0, "Pokročilá spojka 'Albeit' (ačkoli): 'Albeit slowed by...' = ačkoli byli zpomaleni.", "Albeit + adjective / participle (Albeit expensive, it works)."),
    ("Hardly any evidence was presented, ______ undermining the prosecution's case.", ["thereby", "so", "anyway", "whereas"], 0, "Formální participiální konektor 'thereby + ing' = čímž / tímto způsobem.", "Thereby reducing costs / thereby improving efficiency.")
]

def generate_1080_questions():
    start_date = date(2026, 11, 8) # Od zítřka
    total_days = 54 # do 31.12.2026
    questions = []

    q_counter = 1

    for day_idx in range(total_days):
        current_date = start_date + timedelta(days=day_idx)
        date_str = current_date.strftime("%Y-%m-%d")
        day_num = day_idx + 1

        # Pro každý den vezmeme:
        # 4x Inverze
        # 4x Word Formation
        # 4x Transformace
        # 4x Kolokace
        # 4x Formální styl
        
        # 1. 4x Inverze
        for i in range(4):
            item = INVERSIONS_POOL[(day_idx * 4 + i) % len(INVERSIONS_POOL)]
            questions.append({
                "id": f"c1-d{day_num:02d}-q{i+1:02d}",
                "dayNumber": day_num,
                "date": date_str,
                "category": "inversions",
                "categoryLabel": "Záporné inverze",
                "type": "choice",
                "instruction": "Vyber správnou možnost (Záporná inverze):",
                "question": item[0],
                "options": item[1],
                "answer": item[2],
                "explanation": item[3],
                "tip": item[4]
            })

        # 2. 4x Word Formation
        for i in range(4):
            item = WORD_FORMATION_POOL[(day_idx * 4 + i) % len(WORD_FORMATION_POOL)]
            questions.append({
                "id": f"c1-d{day_num:02d}-q{i+5:02d}",
                "dayNumber": day_num,
                "date": date_str,
                "category": "word_formation",
                "categoryLabel": "Tvoření slov (Word Formation)",
                "type": "text",
                "instruction": "Uprav slovo v závorce do správného tvaru:",
                "question": item[0],
                "answer": [item[1]],
                "explanation": item[2],
                "tip": item[3]
            })

        # 3. 4x Transformace
        for i in range(4):
            item = TRANSFORMATIONS_POOL[(day_idx * 4 + i) % len(TRANSFORMATIONS_POOL)]
            questions.append({
                "id": f"c1-d{day_num:02d}-q{i+9:02d}",
                "dayNumber": day_num,
                "date": date_str,
                "category": "transformations",
                "categoryLabel": "Transformace vět (Part 4)",
                "type": "text",
                "instruction": "Doplň 3 až 6 slov včetně zadaného slova:",
                "promptContext": item[0],
                "keyWord": item[1],
                "question": item[2],
                "answer": item[3],
                "explanation": item[4],
                "tip": item[5]
            })

        # 4. 4x Kolokace & Idiomy
        for i in range(4):
            item = COLLOCATIONS_POOL[(day_idx * 4 + i) % len(COLLOCATIONS_POOL)]
            questions.append({
                "id": f"c1-d{day_num:02d}-q{i+13:02d}",
                "dayNumber": day_num,
                "date": date_str,
                "category": "collocations",
                "categoryLabel": "Kolokace & Idiomy (Use of English)",
                "type": "choice",
                "instruction": "Vyber správnou kolokaci / předložku:",
                "question": item[0],
                "options": item[1],
                "answer": item[2],
                "explanation": item[3],
                "tip": item[4]
            })

        # 5. 4x Formální styl
        for i in range(4):
            item = REGISTER_POOL[(day_idx * 4 + i) % len(REGISTER_POOL)]
            questions.append({
                "id": f"c1-d{day_num:02d}-q{i+17:02d}",
                "dayNumber": day_num,
                "date": date_str,
                "category": "register",
                "categoryLabel": "Formální styl (Writing & Essays)",
                "type": "choice",
                "instruction": "Vyber nejvhodnější C1 formální variantu:",
                "question": item[0],
                "options": item[1],
                "answer": item[2],
                "explanation": item[3],
                "tip": item[4]
            })

    return questions

if __name__ == "__main__":
    qs = generate_1080_questions()
    print(f"Generated {len(qs)} questions across 54 days.")
    
    js_content = "// Databáze otázek pro C1 Cambridge Advanced (CAE)\n"
    js_content += f"// Celkem {len(qs)} otázek: 54 dní (od 08.11.2026 do 31.12.2026) x 20 otázek denně\n\n"
    js_content += "const C1_QUESTIONS = " + json.dumps(qs, ensure_ascii=False, indent=2) + ";\n\n"
    js_content += 'if (typeof module !== "undefined") {\n  module.exports = { C1_QUESTIONS };\n}\n'

    with open("c1-cambridge-pwa/questions.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    print("Successfully wrote c1-cambridge-pwa/questions.js")
