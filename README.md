# NPETL Test Prepper

## Features

- **Practice:** Go through each week's questions and reveal the answer whenever you want. Jump to any week or move with the previous and next buttons.
- **Test:** Pick the weeks you want, shuffle them and submit. You get a score card, and you can filter your answers into all, correct or incorrect.
- **Mock:** Each week has three mock exams of 15 questions each. Your progress and best score are saved in the browser, and a mock with full marks is marked as such.
- **Study guide:** A separate page at `/guide/` (the "Study guide" button appears when the E-Business course is selected). Pick any week from 1 to 12 with the buttons, the dropdown or Prev/Next. Each week shows what not to mix up, the facts to remember and the "if the question says" rules, with a filter box. Tables turn into stacked cards on phones, so nothing scrolls sideways.
- **Themes:** Switch between light and dark from the toggle in the header.

## Running it

The site runs on GitHub Pages: https://haziqlandge.github.io/NPETL-Test-Prepper/

## Project layout

| Path | What it holds |
| --- | --- |
| `index.html` | The whole site: markup, styles and script |
| `qna.md` | IoT question bank, the source for `data.js` |
| `ebiz_qna.md` | E-Business question bank, the source for `ebiz_data.js` |
| `mock_src/` | IoT mock sources, one file per week (`week-1.md` to `week-12.md`) |
| `ebiz_mock_src/` | E-Business mock sources, one file per week |
| `data.js`, `ebiz_data.js` | Generated practice and test data |
| `mock_data.js`, `ebiz_mock_data.js` | Generated mock data |
| `guide/index.html` | The E-Business study guide page |
| `ebiz_guide/` | Full study guide notes, one file per week (`week-01.md` to `week-12.md`) |
| `ebiz_guide_data.js` | Generated guide data (the three sections the page shows) |
| `build_guide.py` | Builds `ebiz_guide_data.js` from `ebiz_guide/` (run `python build_guide.py` after editing the notes) |
| `build_data.py` | Builds the practice data from the question banks |
| `build_mock.py` | Builds the mock data from the mock sources |
| `tests/` | Node tests for the mock progress logic |

## Updating the questions

Practice and test questions use this format:

```
Week 1
Q1) Question text
A) First option
B) Second option
Correct: B
```

After editing `qna.md` or `ebiz_qna.md`, run:

```bash
python build_data.py
```

The script stops with a message if an answer letter does not match one of the options.

Mock sources use the same question format, with a `Mock 1`, `Mock 2` and `Mock 3` header under each week. Every mock needs exactly 15 questions, and each question has either four options (A to D) or True and False. Questions must not repeat within a week.

Check the mock sources without writing anything:

```bash
python build_mock.py --check
```

Then build the mock data:

```bash
python build_mock.py
```

## Tests

```bash
node --test tests/mock-progress.test.cjs
```

## Notes

- `server.log` is ignored by git, so local server logs stay out of the repo.
- The site has no packages to install. Python is only needed for the build scripts.
