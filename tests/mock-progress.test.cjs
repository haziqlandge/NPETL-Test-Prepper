const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const source = html.slice(html.indexOf('/* ---------- MOCK ---------- */'), html.indexOf('/* ---------- THEME ---------- */'));
const data = fs.readFileSync(path.join(root, 'mock_data.js'), 'utf8');
function app(storage = new Map(), failWrites = false, extra = '') {
  const elements = new Map();
  const context = vm.createContext({
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => { if (failWrites) throw Error('Storage unavailable'); storage.set(key, value); }
    },
    $: selector => {
      if (!elements.has(selector)) elements.set(selector, { style: {}, showModal() {} });
      return elements.get(selector);
    },
    esc: text => text,
    window: { scrollTo() {} },
    animateIn() {}
  });
  vm.runInContext(data + '\n' + extra + '\n' + source, context);
  return { storage, elements, run: code => vm.runInContext(code, context) };
}
test('unfinished answers survive page reload, other mocks, and returning home', () => {
  let a = app();
  a.run("openMock('1-1'); mockState.answers['m1-1-1'] = MOCK_BY_KEY['m1-1-1'].correctText; saveMockAttempt(); renderMockHome(); openMock('2-1')");
  a = app(a.storage);
  a.run("openMock('1-1')");
  assert.equal(a.elements.get('#mockCount').textContent, '1 / 15 answered');
  assert.equal(a.run('mockState.submitted'), false);
  assert.equal(JSON.parse(a.storage.get('quizView')), 'mock:1-1');
});
test('submitted answers, score, and locked review survive reload', () => {
  let a = app();
  a.run("openMock('1-1'); mockState.answers['m1-1-1'] = MOCK_BY_KEY['m1-1-1'].correctText; submitMock()");
  a = app(a.storage);
  a.run("openMock('1-1')");
  assert.equal(a.run('mockState.submitted'), true);
  assert.equal(a.elements.get('#mockScore').textContent, 'Score: 1 / 15 (7%)');
  assert.match(a.elements.get('#mockList').innerHTML, /disabled/);
  a.run('renderMockHome()');
  assert.match(a.elements.get('#mockGrid').innerHTML, /Completed · Best 1 \/ 15/);
});
test('retry and lower scores never remove a previous perfect score', () => {
  const a = app();
  a.run("openMock('1-1'); MOCK_SETS['1-1'].keys.forEach(k => mockState.answers[k] = MOCK_BY_KEY[k].correctText); submitMock()");
  // Run the actual Retry handler from the page.
  const retry = html.match(/\$\('#mockRetry'\)\.addEventListener\('click', \(\) => \{([\s\S]*?)\n\}\);/)[1];
  a.run(retry);
  assert.equal(a.elements.get('#mockCount').textContent, '0 / 15 answered');
  a.run('submitMock(); renderMockHome()');
  assert.match(a.elements.get('#mockGrid').innerHTML, /btn completed perfect[^>]+data-id="1-1"/);
  assert.equal(a.run("loadBest()['1-1'].score"), 15);
});
test('existing best scores migrate without loss, including zero scores', () => {
  const a = app(new Map([['mockBest', JSON.stringify({ '1-1': { score: 0, total: 15 }, '1-2': { score: 15, total: 15 } })]]));
  a.run('renderMockHome()');
  const grid = a.elements.get('#mockGrid').innerHTML;
  assert.match(grid, /2 \/ 3 completed/);
  assert.match(grid, /btn completed"[^>]+data-id="1-1"/);
  assert.match(grid, /btn completed perfect"[^>]+data-id="1-2"/);
  assert.match(grid, /Completed · Best 0 \/ 15/);
});
test('a week becomes fully green only after perfect scores on all three mocks', () => {
  const a = app();
  a.run("['1-1','1-2','1-3'].forEach(id => { openMock(id); MOCK_SETS[id].keys.forEach(k => mockState.answers[k] = MOCK_BY_KEY[k].correctText); submitMock(); }); renderMockHome()");
  assert.match(a.elements.get('#mockGrid').innerHTML, /mock-week completed perfect/);
  assert.match(a.elements.get('#mockGrid').innerHTML, /Week 1 · Full marks/);
});
test('corrupt saved values do not crash and invalid answers are ignored', () => {
  const a = app(new Map([['mockBest', 'null'], ['mockAttempt:1-1', JSON.stringify({answers:{'m1-1-1':'invalid','other':'bad'}})]]));
  a.run("renderMockHome(); openMock('1-1')");
  assert.equal(a.elements.get('#mockCount').textContent, '0 / 15 answered');
});
test('unavailable storage warns the user and allows answering', () => {
  const a = app(new Map(), true);
  a.run("openMock('1-1'); mockState.answers['m1-1-1'] = MOCK_BY_KEY['m1-1-1'].correctText; saveMockAttempt(); renderMock()");
  assert.match(a.elements.get('#mockSaveStatus').textContent, /could not save/);
  assert.equal(a.elements.get('#mockCount').textContent, '1 / 15 answered');
});
test('E-Business mocks keep their own ids, progress, and best scores', () => {
  const opts = [{ letter: 'A', text: 'x' }, { letter: 'B', text: 'y' }];
  const ebiz = 'const EBIZ_MOCK_DATA = ' + JSON.stringify([{ week: 1, mocks: [1, 2, 3].map(mock => ({ mock, questions: [{ n: 1, text: 'Q' + mock, options: opts, correct: 'B' }] })) }]) + ';';
  let a = app(new Map(), false, ebiz);
  a.run("openMock('1-1'); mockState.answers['m1-1-1'] = MOCK_BY_KEY['m1-1-1'].correctText; submitMock(); openMock('e1-1'); mockState.answers['me1-1-1'] = 'y'; submitMock()");
  assert.equal(a.run("loadBest()['1-1'].total"), 15);
  assert.equal(a.run("loadBest()['e1-1'].score"), 1);
  a = app(a.storage, false, ebiz);
  a.run("mockCourse = 'ebiz'; renderMockHome()");
  const grid = a.elements.get('#mockGrid').innerHTML;
  assert.match(grid, /data-id="e1-1"/);
  assert.doesNotMatch(grid, /data-id="1-1"/);
  assert.match(grid, /1 \/ 3 completed/);
});
