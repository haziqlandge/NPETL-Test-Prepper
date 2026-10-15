import re, json
weeks = []
cur = None; q = None
for raw in open('qna.md', encoding='utf-8'):
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
    raise SystemExit('unparsed: ' + line)
with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const QNA_DATA = ' + json.dumps(weeks, ensure_ascii=False, indent=1) + ';\n')
print([ (w['week'], len(w['questions'])) for w in weeks])
