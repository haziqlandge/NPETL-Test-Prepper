import re, json, glob, os, sys

# Reads <src>/week-N.md (one file per week, three "Mock K" blocks each)
# and writes the mock data file in the same shape the site expects.
# Run with --check to validate the sources without writing anything.
here = os.path.dirname(os.path.abspath(__file__))
COURSES = [
    ('mock_src', 'mock_data.js', 'MOCK_DATA'),
    ('ebiz_mock_src', 'ebiz_mock_data.js', 'EBIZ_MOCK_DATA'),
]
check_only = '--check' in sys.argv
failed = False

for src, out, const in COURSES:
    weeks = []
    errors = []

    for path in sorted(glob.glob(os.path.join(here, src, 'week-*.md')), key=lambda p: int(re.search(r'week-(\d+)', p).group(1))):
        name = f'{src}/{os.path.basename(path)}'
        cur = None; mock = None; q = None
        week_no = None
        for raw in open(path, encoding='utf-8'):
            line = raw.strip()
            if not line: continue
            m = re.match(r'^Week (\d+)$', line)
            if m:
                week_no = int(m.group(1)); cur = {'week': week_no, 'mocks': []}; weeks.append(cur); continue
            m = re.match(r'^Mock (\d+)$', line)
            if m and cur:
                mock = {'mock': int(m.group(1)), 'questions': []}; cur['mocks'].append(mock); q = None; continue
            m = re.match(r'^Q(\d+)\)\s*(.*)$', line)
            if m and mock:
                q = {'n': int(m.group(1)), 'text': m.group(2), 'options': [], 'correct': None}
                mock['questions'].append(q); continue
            m = re.match(r'^([A-Z])\)\s*(.*)$', line)
            if m and q:
                q['options'].append({'letter': m.group(1), 'text': m.group(2)}); continue
            m = re.match(r'^Correct:\s*([A-Z])$', line)
            if m and q:
                q['correct'] = m.group(1); continue
            errors.append(f'{name}: unparsed line: {line}')

        # structural checks
        if week_no is None:
            errors.append(f'{name}: missing "Week N" header')
        for md in (cur['mocks'] if cur else []):
            if len(md['questions']) != 15:
                errors.append(f'{name} Mock {md["mock"]}: {len(md["questions"])} questions (expected 15)')
            for qq in md['questions']:
                letters = [o['letter'] for o in qq['options']]
                true_false = letters == ['A', 'B'] and [o['text'].lower() for o in qq['options']] == ['true', 'false']
                if letters != ['A', 'B', 'C', 'D'] and not true_false:
                    errors.append(f'{name} Mock {md["mock"]} Q{qq["n"]}: options are {letters}')
                if qq['correct'] not in letters:
                    errors.append(f'{name} Mock {md["mock"]} Q{qq["n"]}: Correct={qq["correct"]} not among options')
        if cur and [md['mock'] for md in cur['mocks']] != [1, 2, 3]:
            errors.append(f'{name}: mocks found {[md["mock"] for md in cur["mocks"]]}, expected [1, 2, 3]')

    # Questions must be unique within each week (across its three mocks)
    for w in weeks:
        seen = {}
        for md in w['mocks']:
            for qq in md['questions']:
                t = re.sub(r'\W+', ' ', qq['text'].lower()).strip()
                if t in seen:
                    errors.append(f'{src} Week {w["week"]}: duplicate question in Mock {seen[t]} and Mock {md["mock"]}: {qq["text"][:70]}')
                else:
                    seen[t] = md['mock']

    if errors:
        print('\n'.join(errors))
        print(f'{len(errors)} problem(s); {out} not written')
        failed = True
        continue

    print(src, [(w['week'], [len(md['questions']) for md in w['mocks']]) for w in weeks])
    if not check_only:
        with open(os.path.join(here, out), 'w', encoding='utf-8') as f:
            f.write(f'const {const} = ' + json.dumps(weeks, ensure_ascii=False, indent=1) + ';\n')

if failed:
    raise SystemExit(1)
