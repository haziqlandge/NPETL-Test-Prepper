import re, json

# Each course has its own question bank: (source .md, output .js, JS constant)
COURSES = [
    ('qna.md', 'data.js', 'QNA_DATA'),
    ('ebiz_qna.md', 'ebiz_data.js', 'EBIZ_DATA'),
]

for src, out, const in COURSES:
    weeks = []
    cur = None; q = None
    for raw in open(src, encoding='utf-8'):
        line = raw.strip()
        if not line: continue
        m = re.match(r'^Week (\d+)$', line)
        if m:
            cur = {'week': int(m.group(1)), 'questions': []}; weeks.append(cur); continue
        m = re.match(r'^Q(\d+)\)\s*(.*)$', line)
        if m:
            q = {'n': int(m.group(1)), 'text': m.group(2), 'options': [], 'correct': None}
            cur['questions'].append(q); continue
        m = re.match(r'^([A-Z])\)\s*(.*)$', line)
        if m:
            q['options'].append({'letter': m.group(1), 'text': m.group(2)}); continue
        m = re.match(r'^Correct:\s*(.*)$', line)
        if m:
            q['correct'] = m.group(1).strip(); continue
        raise SystemExit(src + ': unparsed: ' + line)
    for w in weeks:
        for qq in w['questions']:
            if qq['correct'] not in [o['letter'] for o in qq['options']]:
                raise SystemExit(f'{src} Week {w["week"]} Q{qq["n"]}: Correct={qq["correct"]} not among options')
    with open(out, 'w', encoding='utf-8') as f:
        f.write(f'const {const} = ' + json.dumps(weeks, ensure_ascii=False, indent=1) + ';\n')
    print(src, [(w['week'], len(w['questions'])) for w in weeks])
