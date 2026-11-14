# -*- coding: utf-8 -*-
"""
Certin90 Dataset Builder
Builds separate 910-question banks + 90-day daily schedules + 21-question diagnostic sets
for both B2 First (FCE) and C1 Advanced (CAE).
"""

import json
import os
import random
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
GEN_DIR = os.path.join(BASE_DIR, "generators")
sys.path.insert(0, GEN_DIR)

from b2_conditionals import B2_CONDITIONALS
from b2_tenses_passive import B2_TENSES_PASSIVE
from b2_modals import B2_MODALS
from b2_word_formation import B2_WORD_FORMATION
from b2_transformations import B2_TRANSFORMATIONS
from b2_open_cloze import B2_OPEN_CLOZE
from b2_phrasals import B2_PHRASALS

from c1_inversions import C1_INVERSIONS
from c1_word_formation import C1_WORD_FORMATION
from c1_transformations import C1_TRANSFORMATIONS
from c1_register import C1_REGISTER
from c1_collocations import C1_COLLOCATIONS
from c1_open_cloze import C1_OPEN_CLOZE
from c1_phrasals import C1_PHRASALS


LEVEL_SPECS = {
    "b2": {
        "title": "B2 First (FCE)",
        "subtitle": "Cambridge English: First · Středně pokročilá až vyšší úroveň",
        "out_file": os.path.join(BASE_DIR, "questions-b2.js"),
        "seed": 202602,
        "categories": [
            {
                "id": "conditionals",
                "label": "Podmínkové věty & Přání",
                "shortLabel": "Conditionals",
                "type": "choice",
                "instruction": "Vyber gramaticky správnou variantu podmínky nebo přání:",
                "raw": B2_CONDITIONALS,
            },
            {
                "id": "tenses_passive",
                "label": "Časy, Pasivum & Nepřímá řeč",
                "shortLabel": "Tenses & Passive",
                "type": "choice",
                "instruction": "Vyber správný slovesný tvar / trpný rod / nepřímou řeč:",
                "raw": B2_TENSES_PASSIVE,
            },
            {
                "id": "modals",
                "label": "Modální slovesa & Dedukce",
                "shortLabel": "Modals",
                "type": "choice",
                "instruction": "Vyber správné modální sloveso podle významu:",
                "raw": B2_MODALS,
            },
            {
                "id": "word_formation",
                "label": "Tvoření slov (Part 3)",
                "shortLabel": "Word Formation",
                "type": "text",
                "instruction": "Uprav slovo v závorce do správného tvaru:",
                "raw": B2_WORD_FORMATION,
            },
            {
                "id": "transformations",
                "label": "Transformace vět (Part 4)",
                "shortLabel": "Transformations",
                "type": "text",
                "instruction": "Doplň 2 až 5 slov včetně zadaného klíčového slova (beze změny jeho tvaru):",
                "raw": B2_TRANSFORMATIONS,
            },
            {
                "id": "open_cloze",
                "label": "Open Cloze (Part 2 – 1 slovo)",
                "shortLabel": "Open Cloze",
                "type": "text",
                "instruction": "Doplň JEDNO chybějící gramatické či vazebné slovo:",
                "raw": B2_OPEN_CLOZE,
            },
            {
                "id": "phrasals",
                "label": "Frázová slovesa & Kolokace",
                "shortLabel": "Phrasals & Colloc.",
                "type": "choice",
                "instruction": "Vyber správné sloveso nebo předložku do ustálené vazby:",
                "raw": B2_PHRASALS,
            },
        ],
    },
    "c1": {
        "title": "C1 Advanced (CAE)",
        "subtitle": "Cambridge English: Advanced · Vysoká akademická a profesní úroveň",
        "out_file": os.path.join(BASE_DIR, "questions-c1.js"),
        "seed": 202601,
        "categories": [
            {
                "id": "inversions",
                "label": "Záporné inverze & Emfáze",
                "shortLabel": "Inversions",
                "type": "choice",
                "instruction": "Vyber gramaticky správnou inverzní či vytýkací konstrukci:",
                "raw": C1_INVERSIONS,
            },
            {
                "id": "word_formation",
                "label": "Tvoření slov (Part 3)",
                "shortLabel": "Word Formation",
                "type": "text",
                "instruction": "Uprav slovo v závorce do správného C1 tvaru:",
                "raw": C1_WORD_FORMATION,
            },
            {
                "id": "transformations",
                "label": "Transformace vět (Part 4)",
                "shortLabel": "Transformations",
                "type": "text",
                "instruction": "Doplň 3 až 6 slov včetně zadaného klíčového slova (beze změny jeho tvaru):",
                "raw": C1_TRANSFORMATIONS,
            },
            {
                "id": "register",
                "label": "Formální styl, Subjunktiv & Eseje",
                "shortLabel": "Formal Register",
                "type": "choice",
                "instruction": "Vyber akademicky a stylisticky nejpřesnější C1 variantu:",
                "raw": C1_REGISTER,
            },
            {
                "id": "collocations",
                "label": "Kolokace & Idiomy (Part 1)",
                "shortLabel": "Collocations",
                "type": "choice",
                "instruction": "Vyber správnou kolokaci, předložku nebo idiom:",
                "raw": C1_COLLOCATIONS,
            },
            {
                "id": "open_cloze",
                "label": "Open Cloze (Part 2 – 1 slovo)",
                "shortLabel": "Open Cloze",
                "type": "text",
                "instruction": "Doplň JEDNO přesné slovo na úrovni C1:",
                "raw": C1_OPEN_CLOZE,
            },
            {
                "id": "phrasals",
                "label": "Frázová slovesa & Slovesné vazby",
                "shortLabel": "Phrasals & Patterns",
                "type": "choice",
                "instruction": "Vyber správné frázové sloveso nebo vazbu (-ing / infinitiv):",
                "raw": C1_PHRASALS,
            },
        ],
    },
}


def build_level_bundle(level_key: str, spec: dict) -> dict:
    rng = random.Random(spec["seed"])
    questions = []
    by_category = {}
    topics_meta = []

    for cat_idx, cat in enumerate(spec["categories"]):
        raw_items = cat["raw"]
        assert len(raw_items) == 130, f"{level_key}.{cat['id']} has {len(raw_items)} items, expected 130"

        cat_ids = []
        seen_prompts = set()
        for q_idx, item in enumerate(raw_items):
            qid = f"{level_key}-{cat['id']}-{q_idx + 1:03d}"
            q_obj = {
                "id": qid,
                "level": level_key,
                "category": cat["id"],
                "categoryLabel": cat["label"],
                "type": cat["type"],
                "instruction": cat["instruction"],
            }

            if len(item) == 5:
                # (question, options, ans_idx, explanation, tip)
                prompt, options, ans_idx, explanation, tip = item
                assert len(options) == 4 and 0 <= ans_idx < 4
                q_obj["question"] = prompt
                q_obj["options"] = options
                q_obj["answer"] = ans_idx
                q_obj["explanation"] = explanation
                q_obj["tip"] = tip
            elif len(item) == 4:
                # (question, accepted_list, explanation, tip)
                prompt, accepted, explanation, tip = item
                q_obj["question"] = prompt
                q_obj["answer"] = accepted
                q_obj["explanation"] = explanation
                q_obj["tip"] = tip
            elif len(item) == 6:
                # (promptContext, keyWord, question, accepted_list, explanation, tip)
                ctx, kw, prompt, accepted, explanation, tip = item
                q_obj["promptContext"] = ctx
                q_obj["keyWord"] = kw
                q_obj["question"] = prompt
                q_obj["answer"] = accepted
                q_obj["explanation"] = explanation
                q_obj["tip"] = tip
            else:
                raise ValueError(f"Unexpected tuple length {len(item)} in {qid}")

            dedup_key = f"{q_obj.get('promptContext', '')}::{q_obj['question']}"
            assert dedup_key not in seen_prompts, f"Duplicate prompt in {qid}: {dedup_key}"
            seen_prompts.add(dedup_key)

            questions.append(q_obj)
            cat_ids.append(qid)

        by_category[cat["id"]] = cat_ids
        topics_meta.append({
            "id": cat["id"],
            "label": cat["label"],
            "shortLabel": cat["shortLabel"],
            "type": cat["type"],
            "total": len(cat_ids),
        })

    # Choose 3 evenly spaced diagnostic questions per topic = 21 total, interleaved by round
    diag_buckets = []
    diag_indices = [0, 43, 86]
    for cat in spec["categories"]:
        cids = by_category[cat["id"]]
        diag_buckets.append([cids[i] for i in diag_indices])

    diagnostic_ids = []
    diag_set = set()
    for round_idx in range(3):
        for bucket in diag_buckets:
            qid = bucket[round_idx]
            diagnostic_ids.append(qid)
            diag_set.add(qid)

    for q in questions:
        if q["id"] in diag_set:
            q["isDiagnostic"] = True

    # Build a 90-day daily plan (90 * 20 = 1800 slots)
    # Shuffle each category pool cleanly with seeded PRNG, interleave round-robin across 7 categories
    shuffled_cats = []
    for cat in spec["categories"]:
        pool = list(by_category[cat["id"]])
        rng.shuffle(pool)
        shuffled_cats.append(pool)

    # First pass stream: 910 distinct questions balanced across all 7 categories (round-robin)
    pass1 = []
    for i in range(130):
        for cat_pool in shuffled_cats:
            pass1.append(cat_pool[i])

    assert len(pass1) == 910 and len(set(pass1)) == 910

    # Days 1..45 consume pass1[0..900] -> zero repeats in first 45 days!
    # Pass 2 starts with the remaining 10 unseen questions (pass1[900..910]),
    # followed by a fresh rotated/shuffled cross-category stream of 890 questions -> total 1800 slots.
    pass2_pools = []
    tail_unseen = set(pass1[900:])
    for idx, cat in enumerate(spec["categories"]):
        pool2 = [qid for qid in by_category[cat["id"]] if qid not in tail_unseen]
        rng.shuffle(pool2)
        pass2_pools.append(pool2)

    pass2_balanced = list(pass1[900:])
    max_len = max(len(p) for p in pass2_pools)
    for i in range(max_len):
        for p in pass2_pools:
            if i < len(p):
                pass2_balanced.append(p[i])

    full_stream = pass1[:900] + pass2_balanced[:900]
    assert len(full_stream) == 1800

    daily_plan = []
    for day_idx in range(90):
        chunk = full_stream[day_idx * 20 : (day_idx + 1) * 20]
        assert len(chunk) == 20 and len(set(chunk)) == 20, f"Repeat within day {day_idx + 1}"
        # Sort or lightly shuffle inside day while mixing topics
        day_chunk = list(chunk)
        rng.shuffle(day_chunk)
        daily_plan.append(day_chunk)

    # Verify Days 1..45 have 900 distinct questions
    first_45_ids = [qid for day in daily_plan[:45] for qid in day]
    assert len(set(first_45_ids)) == 900, f"Overlap in days 1..45: {len(set(first_45_ids))}"

    return {
        "level": level_key,
        "title": spec["title"],
        "subtitle": spec["subtitle"],
        "totalQuestions": len(questions),
        "topics": topics_meta,
        "diagnosticIds": diagnostic_ids,
        "dailyPlan": daily_plan,
        "questions": questions,
    }


def write_bundle(level_key: str, bundle: dict, out_path: str):
    payload = json.dumps(bundle, ensure_ascii=False, separators=(",", ":"))
    header = (
        f"// Certin90 – {bundle['title']} Dataset ({bundle['totalQuestions']} unique questions)\n"
        f"// 90-day daily plan (20/day) + 21 diagnostic questions (3 per topic)\n"
        f"(function (global) {{\n"
        f"  global.CERTIN90_DATA = global.CERTIN90_DATA || {{}};\n"
        f"  global.CERTIN90_DATA[\"{level_key}\"] = {payload};\n"
        f"}})(typeof window !== \"undefined\" ? window : globalThis);\n"
    )
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(header)
    size_kb = os.path.getsize(out_path) / 1024
    print(f"Wrote {out_path} ({bundle['totalQuestions']} questions, {len(bundle['dailyPlan'])} days, {size_kb:.1f} KB)")


if __name__ == "__main__":
    for lvl, spec in LEVEL_SPECS.items():
        bundle = build_level_bundle(lvl, spec)
        write_bundle(lvl, bundle, spec["out_file"])
