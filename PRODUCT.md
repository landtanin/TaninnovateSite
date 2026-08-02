# Product

## Register

brand

## Users

Two audiences, deliberately ranked. The hierarchy is the point — the site serves both, but never at the same volume.

**Primary — SME owners and founders (pays the bills today).** UK business owners who need a credible web presence and cannot evaluate code. Prime Procurement (independent energy consultancy) and Blackheath Advisors (board advisory practice) are the reference cases. They arrive by referral or by searching a name. Their real question is not "can he code" — it is "will this look better than what I have, what will it cost, and how long will it take". They judge on evidence, not vocabulary.

**Secondary — operations leaders with a process still on paper (higher value, longer cycle).** People running site inspections, audits, or field reporting on clipboards, spreadsheets, and phone photos reconciled after the fact. Salter Demolition is the reference case: hand-recorded material audits became an iPad app, and auditing time fell by more than 5x. They need a bespoke tool, not a website. This work is worth more and faces less competition, but the only case study is under contract with no public artefact.

## Product Purpose

Turn referral traffic into a booked scoping call.

Success is a call booked by someone who already believes Tanin can do the work before the call starts. The site is not there to explain what software is; it is there to remove the two objections that actually block a referral — "I can't tell if this person is any good" and "I don't know what this costs or how long it takes."

Failure mode to design against: a visitor who reads the whole site and still cannot name a single thing that was built, what it cost, or who they would be talking to.

## Brand Personality

**Direct, accountable, fast.**

The promise is one sentence: *you deal with the person who builds it.* No account manager, no project coordinator, no brief passed down a chain. The person who takes the requirements is the person who writes the code and the person who answers the email. That is why it is fast — there is nobody to brief — and why nothing is lost in translation.

The company is named after him. The site should act like it. Voice is **first person singular** throughout. The March 2026 move to plural voice ("we" nine times on the About page, the name "Tanin" absent from every page's body copy) deleted the differentiator and put the brand in the agency bracket, where it competes on price instead of directness. That decision is reversed.

Tone: plain, specific, unhedged. Name the client, the timeline, the outcome, the number. No "solutions", no "leveraging", no "passionate about". If a sentence would survive on a competitor's site unchanged, it is not saying anything.

**The objection this voice creates, and must answer:** one person reads as a bus factor of one. Pre-empt it rather than ignore it — client-owned platforms (Framer, Wix) they can maintain without him, ownership and domains transferred, work that keeps running if he is hit by a bus. Directness is the pitch; continuity is the reassurance underneath it.

## Anti-references

**Generic AI landing page.** Cream, sand, or warm off-white body background. Thin light-weight headings. Tiny uppercase letter-spaced eyebrows above every section. Repeating identical icon-plus-heading-plus-text card grids. Gradient text. Numbered section markers used as scaffolding. If the layout could be swapped onto any other consultancy's site without editing, it has failed.

**Silicon Valley SaaS.** Dark hero with a purple gradient, floating glass UI mockups, giant metric tiles, a "trusted by" logo bar. Wrong signal entirely for a UK SME owner or a demolition-site ops lead. Worth stealing from it: visible pricing and a visible product. Not worth stealing: any of the look.

**The current taninnovate.com (as of August 2026).** Raleway 200 headings that read as washed-out grey. Generic outline icons standing in for work that was never shown. Zero screenshots of any website or app across four pages, on a site selling websites and apps. No prices, no process, no email address. Plural voice. The four client sites in the portfolio are all more confident than the site presenting them — that inversion is the specific thing being fixed.

## Design Principles

1. **One name, one voice.** First person singular, everywhere a human reads. The founder's name is the product; any copy that hides it is working against the sale.

2. **Show the work or drop the claim.** Every project earns a real screenshot of the real thing. No stock imagery, no abstract illustration standing in for a product. If there is no artefact — Material Audit is under contract with no public site — get one or say plainly why it cannot be shown. An unillustrated claim is weaker than no claim.

3. **Answer the commercial question unprompted.** Cost, timeline, and what happens next are visible without asking. Every client site in this portfolio does this — ToastHost publishes £7.99/month, Blackheath offers a free 60-minute scoping call. "Designed and delivered in one week" is the strongest sales line available and it is currently a bullet on page three.

4. **The portfolio sets the floor.** Nothing ships that would look weaker than the client sites it links to. A prospect clicking through to Prime Procurement must not find better work than the page that sent them.

5. **Fast, static, no dependencies.** Hand-written HTML and CSS on GitHub Pages. No framework, no build step, no third-party runtime scripts. Speed and independence are part of what is being sold, so the site has to demonstrate them.

## Accessibility & Inclusion

**WCAG 2.2 AA**, held as a real constraint on colour and type rather than a retrofit.

- Body text ≥4.5:1; large text and UI components ≥3:1.
- Visible `:focus-visible` styling on every interactive element. The current stylesheet has none.
- `prefers-reduced-motion` alternative for every animation.
- Keyboard-complete: no interaction reachable only by pointer or hover.
- Known existing failures to fix, not carry over: `--color-text-light` (#999999) measures 2.67:1 on the surface tint and is currently used for footer text and product notes.

AA is the UK public-sector procurement baseline, so meeting it is also a commercial asset with any client touching government work.
