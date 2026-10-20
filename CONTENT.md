# CONTENT: Mulla Shadra Portfolio

> All website text, section by section, in English. Safe to keep in the public repo.
> **Status:** draft for review · **Last updated:** 20 October 2026
> Rules: client names stay anonymized, no invented metrics, "learning" skills stay labeled, no "remote" claim.

---

## Page meta

- **Tab title:** Mulla Shadra · QA Engineer
- **Meta description:** QA Engineer based in Jakarta. End-to-end testing of banking and distribution systems, SQL data validation and Katalon automation built on the Page Object Model.

## 1. Header

- Logo: **M** · Mulla
- Menu: Home · What I do · Projects · Experience · About · Contact

## 2. Hero

- Tag: `✓ Hi there, I'm Mulla Shadra`
- Status pill: **Open to new QA roles**
- H1: **QA Engineer** based in Jakarta
- Lead: I test banking and distribution systems end to end, from FSD analysis and SQL data checks to Katalon automation.
- Buttons: **Get in touch** (→ #contact) · **Download CV** (→ `assets/cv-mulla-shadra.pdf`)
- Social: "Find me on:" LinkedIn · Email
- Photo alt: Portrait of Mulla Shadra

## 3. Band

Functional Testing ✦ End-to-End Testing ✦ SQL Data Validation ✦ Katalon Automation ✦ UAT Support

## 4. What I do

- Tag: `[ PASSED ] What I do`
- H2: Quality from the requirement down to the database
- Intro: I don't stop at the screen. I follow each business flow through the backend and the data it leaves behind.

| Title | Description | Fact |
|---|---|---|
| Functional & end-to-end testing | Business flows across UI, backend and database, on desktop and mobile. | Banking · Distribution |
| Test design from FSDs | Specifications turned into positive, negative and boundary scenarios. | 139 cases in one project |
| SQL data validation | Each test run traced through the database, from raw file to delivery status. | SQL Server |
| Test automation | Regression suites in Katalon Studio and Groovy, structured with the Page Object Model. | 38 reusable keywords |

## 5. Projects

- Tag: `[ PASSED ] Projects`
- H2: Selected work
- Intro: Client names are anonymized. The details are real.

### 5.1 Featured case study

- Pills: Featured case study · Banking
- H3: Bond e-statement platform
- Description: A monthly statement engine for a multinational bank. It matches three raw files, builds encrypted PDF statements, holds them for a verifier's review, then emails customers. I covered it from the FSD down to the database, and automated the regression.
- Steps: 1 FSD analysis · 2 Test design · 3 SQL validation · 4 Katalon automation
- Story: **How the automation grew:** I started with Katalon's record-and-playback. Exploring Selenium WebDriver with AI as a study partner taught me the Page Object Model, and I brought that idea back to Katalon as reusable custom keywords.
- Buttons: **Read the case study (PDF)** (→ `assets/case-study-bond-estatement.pdf`) · **Automation framework ↓** (scrolls to `#framework`; a GitHub link can replace it later)
- Stats:
  - **139** test cases across 6 modules
  - **1 in 3** cases are negative scenarios
  - **6** pipeline layers checked in SQL
  - **38** reusable Katalon keywords

### 5.2 Inside the automation framework

- H3: Inside the automation framework
- Intro: A Page Object Model built with Katalon custom keywords. Each layer has one job, so a UI change is fixed in one place.

**1 · Locator**: Kept in the Object Repository. One parameterized object finds any row.

```
//td[normalize-space()='${code}']
```

**2 · Page action**: One keyword per page action, built from small steps. Shared steps come from a common package.

```groovy
// EmailTempAction.groovy
def addNewEmailTemplate(...) {
  openForm()
  fillBasicInfo(code, name, type, subject)
  fillEmailBody()
  handleActivePeriod(from, to)  // shared
  handleCriteria()              // shared
  saveForm()                    // shared
}
```

**3 · Test case**: Reads like the business steps. No locators, no waits.

```groovy
openWeb()
login()
goToEmailTemplate()
addNewEmailTemplate(...)
verifyApprovalStatus(code, "New")
```

> Code is simplified from the real project: parameter types and the `CustomKeywords` wrapper are left out. Source files: `Keywords/email_template/EmailTempAction.groovy`, `Scripts/email_template/AddET`, `Object Repository/email_template/table_td_TempCode`.

### 5.3 Other projects I've worked on

| Project | Description | Pill |
|---|---|---|
| Bond confirmation e-statements | Test design, negative scenarios and issue tracking for buy/sell, coupon and maturity confirmations. | Banking |
| Banking file processing & reporting | Raw file intake, consolidation, reconciliation and CSV/XLSX outputs validated against the database. | Banking |
| Distribution Management System | End-to-end testing across a desktop admin app and its mobile sales app. | Distribution |
| Self-service telecom app | Android and iOS functional testing, with UI checks against Figma designs. | Mobile |

## 6. Experience

- Tag: `[ PASSED ] Experience`
- H2: 1 year 9 months in QA, plus a 1-year internship

| When | Role · Company | Description |
|---|---|---|
| Apr 2026 – Sep 2026 | Software QA · PT Bosnet Distribution Indonesia | Test design and end-to-end testing for an enterprise Distribution Management System, desktop and mobile. |
| Dec 2024 – Mar 2026 | Software QA Staff · PT Profescipta Wahanteknik | Banking e-statement, reporting and reconciliation systems. Introduced a keyword-driven Katalon framework, based on the Page Object Model, to the QA team. |
| Feb 2023 – Feb 2024 | QA Intern · PT Phincon | Android and iOS testing of a self-service app for a major telecom provider. |

## 7. About

- Tag: `[ PASSED ] About me`
- Statement: An IT professional with a QA focus. I test the whole flow, not just the screen, and I'm growing toward system analysis.

**Education**
- BINUS University
- B.Sc. Information Systems, Business IT
- 2020 – 2024 · GPA 3.71

**Skills**
- Functional testing · Regression · FSD analysis · SQL Server · Katalon · Groovy · Redmine · AI tools (ChatGPT, Claude)
- Learning (dashed): Selenium · Postman
- Note: Dashed = currently learning
- AI note: I use AI as a sparring partner: drafting and challenging test cases, brainstorming edge cases and comparing tools. I review and verify every output myself.

**Beyond work**
- Gym and sports
- Indonesian (native), English (professional)
- Based in Jakarta, Indonesia

## 8. Contact (footer)

- Availability: Available now · based in Jakarta
- H2: Hiring a **QA Engineer**? Let's talk.
- Buttons: **mshadra6@gmail.com** (mailto) · **LinkedIn ↗** (linkedin.com/in/mulla-shadra)
- Footer: © [year] Mulla Shadra · Built with HTML, CSS, a little JavaScript and some help from AI

---

## Assets needed

| File | Status |
|---|---|
| `assets/profile.jpg` (4:5 crop of the white-background portrait) | ready |
| `assets/cv-mulla-shadra.pdf` (English CV) | to provide |
| `assets/case-study-bond-estatement.pdf` (deck exported as PDF) | export from the Slides artifact |

## Open items

- [ ] GitHub link to the Katalon repo: on hold.
- [ ] Final English CV with Bosnet dates (Apr–Sep 2026).
