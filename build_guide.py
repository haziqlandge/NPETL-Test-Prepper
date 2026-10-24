import re, json, sys

# Pulls three sections out of each E-Business study guide week into ebiz_guide_data.js:
#   "Don't mix these up", "Must-remember facts" and the "If the question says" rules.
SRC = 'ebiz_guide/week-{:02d}.md'
OUT = 'ebiz_guide_data.js'
WEEKS = range(1, 13)

def split_row(line):
    # Cells are split on "|" but an escaped "\|" stays inside the cell.
    cells = re.split(r'(?<!\\)\|', line.strip())[1:-1]
    return [c.strip().replace('\\|', '|') for c in cells]

def section(lines, title_re):
    """Lines of the `## ` section whose heading matches title_re."""
    out, on = [], False
    for ln in lines:
        if ln.startswith('## '):
            if on: break
            on = bool(re.match(title_re, ln[3:].strip()))
            continue
        if on: out.append(ln)
    return out

def table(body):
    """First table in the section, plus any later tables (with their ### heading) as extras."""
    tables, cur, title = [], None, None
    for l in body:
        if l.startswith('### '): title = l[4:].strip()
        if l.startswith('|'):
            if cur is None: cur = {'title': title, 'rows': []}; tables.append(cur)
            cur['rows'].append(split_row(l))
        else: cur = None
    if not tables: raise SystemExit('no table')
    built = []
    for t in tables:
        rows = t['rows']
        if len(rows) < 3: raise SystemExit('table too short')
        head, rows = rows[0], rows[2:]  # rows[1] is the |---| divider
        for r in rows:
            if len(r) != len(head): raise SystemExit(f'bad row width {len(r)} vs {len(head)}: {r[0]}')
        built.append({'title': t['title'], 'head': head, 'rows': rows})
    main = {'head': built[0]['head'], 'rows': built[0]['rows']}
    if len(built) > 1: main['extra'] = built[1:]
    return main

def rules(lines):
    """Numbered "If the question says" items; None when the week has no such list."""
    out, on = [], False
    for ln in lines:
        s = ln.strip()
        if re.match(r'^(\*\*|###\s*)(If the question says|Rules to use in the exam)', s):
            on = True; continue
        if on and (ln.startswith('## ') or ln.startswith('### ') or re.match(r'^\*\*[^*]+\*\*\s*$', s)):
            break
        if on:
            m = re.match(r'^\d+\.\s+(.*)$', s)
            if m: out.append(m.group(1))
            elif s and out: out[-1] += ' ' + s  # wrapped line
    return out or None

def patterns(lines):
    """Week 8 has no rules list; its question patterns are used instead."""
    return [re.sub(r'^-\s+', '', l.strip()) for l in lines if l.strip().startswith('- ')] or None

weeks = []
for w in WEEKS:
    lines = open(SRC.format(w), encoding='utf-8').read().split('\n')
    title = re.sub(r'^# Week \d+\s*[—-]\s*', '', lines[0]).strip()
    ask = section(lines, r'How this week gets asked')
    r = rules(ask)
    entry = {
        'week': w, 'title': title,
        'mix': table(section(lines, r"Don.t mix these up")),
        'facts': table(section(lines, r'Must-remember facts')),
    }
    if r: entry['rules'] = r
    else:
        entry['patterns'] = patterns(ask)
        if not entry['patterns']: raise SystemExit(f'week {w}: no rules or patterns found')
    weeks.append(entry)
    print(w, title, '| mix', len(entry['mix']['rows']), '| facts', len(entry['facts']['rows']),
          '| extras', len(entry['facts'].get('extra', [])) + len(entry['mix'].get('extra', [])), '| rules', len(r) if r else f"none, {len(entry['patterns'])} patterns")

with open(OUT, 'w', encoding='utf-8') as f:
    f.write('const EBIZ_GUIDE_DATA = ' + json.dumps(weeks, ensure_ascii=False, indent=1) + ';\n')
