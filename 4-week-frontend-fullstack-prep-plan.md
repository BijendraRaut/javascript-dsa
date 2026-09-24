# 4-Week Frontend Interview + Full-Stack Prep Plan
**Start: Thursday, Sep 3, 2026 → End: Wednesday, Sep 30, 2026 (then rolls into October using the same template)**

---

## Why this plan is structured this way

You've cleared #1–55 on your array/string list, but froze on "normal" Coderbyte questions. That's not a knowledge gap — it's a **transfer gap**: solving a known, ordered list trains recognition, not improvisation. So this plan does three things your current routine doesn't:

1. **Finishes the list fast** (it's still useful for reflexes) but caps it at ~45 min/day so it doesn't eat your whole day.
2. **Adds one unseen/random problem daily** — pulled fresh from Coderbyte's actual challenge list (not your pre-made list), timed, no looking at solutions for 20 minutes minimum. This is what actually fixes "I froze on a normal question."
3. **Runs frontend + full-stack building in parallel**, every single day, because interview prep in isolation from building things doesn't transfer to an interview room either.

---

## Daily Template (use this every day, adjust times to your rhythm)

| Time | Block | What |
|---|---|---|
| 8:00–8:15 | Warm-up | Re-read yesterday's mistake notes (5 min) + skim today's goal |
| 8:15–9:00 | **DSA — list problems** | Next batch from your 200-problem list (see week tables) |
| 9:00–9:45 | **DSA — unseen problem** | 1 random/unfamiliar Coderbyte or LeetCode-Easy problem, timed 25 min, then review |
| 9:45–10:00 | Break | |
| 10:00–11:15 | **JS Core Concepts** | Study + write your own notes (see topic list below) |
| 11:15–12:30 | **Frontend build/practice** | HTML/CSS/JS or React, hands-on (see week plan) |
| 12:30–1:30 | Lunch / rest | |
| 1:30–2:45 | **Project work** | Continue one running portfolio project (see below) |
| 2:45–3:00 | Break | |
| 3:00–4:00 | **Mock/interview-style practice** | Explain-out-loud a problem, whiteboard-style, or mock question |
| 4:00–4:45 | **Weak-spot review** | Redo anything you got wrong today; add to your mistake log |
| 4:45–5:30 | Reading/video | One article or short video on a concept you're shaky on |
| Evening | Rest | Genuinely rest — this is a marathon, not a sprint |

**Weekends**: same structure, but swap the 3:00–4:00 mock-interview slot for a **timed 45-minute mini mock interview** (2 DSA-style questions + 1 "explain a project" question), and use extra weekend hours for catching up or going deeper on the project.

**Keep a single running doc**: "Mistake Log" — every time you get something wrong or freeze, write: what the problem was, what you didn't know, and the fix. Review this daily in the warm-up block. This log is your actual interview prep — more than the problems themselves.

---

## Week 1 (Sep 3–9): Fix the Foundation

**Goal:** Finish array basics, lock down core JS concepts, start rebuilding confidence with unseen problems.

| Day | DSA List | Unseen Problem | JS Concept | Frontend/Build |
|---|---|---|---|---|
| Thu Sep 3 | #56–60 (finish pending) | 1 easy array problem, cold | Hoisting, `var`/`let`/`const`, scope | Review HTML semantics + CSS box model (notes) |
| Fri Sep 4 | #61–70 | 1 easy string problem, cold | `this`, arrow functions vs regular | Flexbox: build 3 layouts from scratch (no tutorial) |
| Sat Sep 5 | #71–80 | 1 medium-easy array problem | Closures (write 3 examples yourself) | CSS Grid: rebuild a simple page layout |
| Sun Sep 6 | #81–90 | 1 easy problem, cold | Event loop, microtask vs macrotask | JS DOM: manipulate DOM without any library (todo list, vanilla JS) |
| Mon Sep 7 | #91–100 | 1 unseen problem | Prototypes & prototypal inheritance | Continue vanilla JS todo app — add localStorage |
| Tue Sep 8 | #101–110 | 1 unseen problem | `map`/`filter`/`reduce` — rewrite 5 array problems using only these | Finish + polish the vanilla JS todo app |
| Wed Sep 9 | Review all of #1–110, redo any flagged | Mock: 2 timed problems back-to-back | **Review day**: rewrite your mistake log into a summary sheet | Push vanilla todo app to GitHub with README |

**Weekend note (Sep 5–6):** you have extra hours — use them to also read one article on "how to think about interview problems" (pattern recognition: two pointers, sliding window, frequency maps) so Week 2's harder problems aren't a surprise.

---

## Week 2 (Sep 10–16): Build Real Frontend Skills + Push DSA to 150

**Goal:** Get comfortable with React, keep DSA moving, start recognizing problem *patterns* instead of memorizing solutions.

| Day | DSA List | Unseen Problem | JS/React Concept | Frontend/Build |
|---|---|---|---|---|
| Thu Sep 10 | #111–120 | 1 unseen (frequency/duplicates pattern) | React basics: components, JSX, props | Set up a new React project, build 3 static components |
| Fri Sep 11 | #121–127 | 1 unseen | React state: `useState` | Make components interactive (counter, toggle, form input) |
| Sat Sep 12 | #128–135 | 1 unseen (two-pointer pattern) | React `useEffect`, side effects | Build a small React app: fetch data from a public API, display list |
| Sun Sep 13 | #136–140 | 1 unseen | Controlled vs uncontrolled forms | Add a form to your React app (with validation) |
| Mon Sep 14 | #141–150 (strings) | 1 unseen (string pattern) | CSS-in-JS or CSS modules (pick one, learn basics) | Style the React app properly (no plain unstyled divs) |
| Tue Sep 15 | Review #141–150 | Mock: 2 timed problems | Responsive design: media queries, mobile-first | Make your React app responsive |
| Wed Sep 16 | Review week's weak spots | Mock: 2 timed problems | **Review day**: update mistake log summary | Deploy the React app (Vercel/Netlify) — get a live link |

**By end of Week 2** you should have: a deployed React app with a live URL, and comfort explaining `useState`/`useEffect`/props out loud.

---

## Week 3 (Sep 17–23): Full-Stack Layer + Searching/Sorting + Interview Problems

**Goal:** Add a backend so you can genuinely say "full-stack," finish DSA list through #200, start real interview-style problems.

| Day | DSA List | Unseen Problem | Backend/Full-stack | Frontend/Build |
|---|---|---|---|---|
| Thu Sep 17 | #151–160 (strings) | 1 unseen | Node.js basics: what is Express, set up a basic server | — |
| Fri Sep 18 | #161–170 (search/sort) | 1 unseen (binary search pattern) | Build a simple REST API (CRUD) with Express | Connect your React app to call this API instead of the public one |
| Sat Sep 19 | #171–180 (search/sort) | 1 unseen (sorting pattern) | Add a database (start simple — JSON file or SQLite) | Full CRUD working end-to-end: React ↔ Express ↔ DB |
| Sun Sep 20 | #181–190 (Two Sum, Missing Number, etc.) | 1 unseen | Debug/polish the full-stack app | Add error handling + loading states in React |
| Mon Sep 21 | #191–200 (finish the list!) | 1 unseen | Auth basics (optional, if time: simple login) | Polish UI (this is now your #2 portfolio project) |
| Tue Sep 22 | Redo any flagged problems from #181–200 | Mock: 2 timed problems + explain your full-stack app out loud | — | Write README, push to GitHub |
| Wed Sep 23 | Full review of 151–200 | Mock: 2 timed problems | **Review day** | Deploy full-stack app (frontend + backend) |

**Milestone:** by tonight you've finished the entire 200-problem list *and* have two live, deployed projects (a frontend-only app and a full-stack app).

---

## Week 4 (Sep 24–30): Medium DSA, Mock Interviews, Interview Readiness

**Goal:** Shift fully from "learning" to "performing" — timed mixed practice, mock interviews, resume/portfolio polish.

| Day | DSA Focus | Mock/Practice | Other |
|---|---|---|---|
| Thu Sep 24 | 2 medium-level array/string problems (LeetCode Easy→Medium) | Explain your projects out loud, 5 min each, as if to an interviewer | Update resume with both projects |
| Fri Sep 25 | 2 medium problems (two-pointer/sliding window focus) | Full mock interview: 1 DSA question (45 min) simulated | Polish GitHub profile/READMEs |
| Sat Sep 26 | 2 medium problems (hash map/frequency focus) | Full mock interview: 1 frontend-concept Q&A round (props, state, re-renders, event loop) | Review common frontend interview questions list |
| Sun Sep 27 | 2 medium problems (array manipulation) | Full mock interview: build a small component live, timed 30 min | Rest more today — recovery matters |
| Mon Sep 28 | Review weakest topic from mistake log all month | Full mock interview: behavioral questions (tell me about a project, a challenge, etc.) | Prepare 3 stories using STAR method |
| Tue Sep 29 | Mixed timed round: 3 problems, 60 min total, no notes | Full mock: DSA + frontend concept combined round | Final resume/portfolio review |
| Wed Sep 30 | Light review only — don't cram | Reflect: read your entire mistake log start to finish | Rest, you're ready for interviews |

---

## Ongoing structure for October and beyond

Once you finish Sep 30, don't stop the machine — just shift the ratio:
- **DSA:** move fully into LeetCode Easy → Medium, ~2–3 problems/day, timed, mixed topics (no more sequential lists — pick random from Easy/Medium filtered by pattern: arrays, strings, hashing, two pointers, sliding window, then move to trees/graphs in November).
- **Frontend/Full-stack:** start a third, more ambitious project (something with auth, multiple pages, real state management) — this becomes your flagship portfolio piece.
- **Weekly mock interview:** keep doing at least one timed mock interview every week, indefinitely, until you're actually interviewing.
- **Keep the mistake log alive** — it's the single highest-leverage habit in this whole plan.

---

## Notes on your specific weak point (freezing on "normal" questions)

- Never look at a solution before **20 minutes** of your own attempt — even if you get nowhere. The struggle is the training.
- After solving (or failing) a problem, spend 2 minutes writing: *"What pattern was this?"* (e.g., "this was a frequency-map problem," "this was two-pointer"). Naming the pattern is what makes it transfer to the next unfamiliar problem.
- If you freeze in a mock/real interview: talk out loud. Say what you're thinking, even if it's "I don't immediately see the pattern, let me try a brute-force approach first." Interviewers almost always care more about process than instant answers.
