# Creative Studio Companion
## Master Product Specification v1.0

**Project:** The Creative Studio Companion  
**Companion to:** *The Creative Studio: Learn to Think Like a Designer*  
**Manuscript status:** 313 pages complete; editorial and production work intentionally paused  
**Document purpose:** Single source of truth for product design, engineering, content, accessibility, and future AI-assisted development  
**Primary build environment:** GitHub + Codex + Vercel  
**Recommended stack:** Next.js, TypeScript, Tailwind CSS, Supabase, Vercel  
**Version:** 1.0  
**Status:** MVP blueprint  

---

# 1. Executive Summary

The Creative Studio Companion is an interactive learning platform designed to work alongside the 313-page book *The Creative Studio: Learn to Think Like a Designer*.

The book provides the curriculum, philosophy, principles, language, and long-form teaching.

The app provides practice, interaction, feedback, progress, reflection, and portfolio development.

The product should help beginners and early-career creatives learn how to see, think, and work like designers. It should not primarily teach software. It should build creative judgment.

The experience should feel like a combination of:

- a refined independent design publication
- a calm digital studio
- an art-school learning environment
- a modern course platform
- a visual practice tool
- a portfolio-building workspace
- a thoughtful creative director sitting beside the learner

The product must be visually polished, immediately understandable, responsive, accessible, and structurally durable. It must not become fragile as features are added.

This specification is intended to prevent the common failure pattern of vibe-coded applications: inconsistent styling, duplicated components, one-off fixes, contradictory layouts, unstable responsive behavior, and code that becomes harder to change with every request.

The app should be built with the principle:

> The book teaches the ideas. The app turns those ideas into practice.

---

# 2. Product Vision

## 2.1 Vision Statement

Create the most thoughtful beginner-friendly digital studio for learning design judgment.

The platform should help users move beyond asking:

> “Does this look good?”

and begin asking:

- What should the viewer notice first?
- What problem am I solving?
- What relationship am I creating?
- What can be removed?
- Does this decision support the audience?
- Is the design clear, accessible, and intentional?
- Can this idea function as a system?
- What changed between the first version and the final one?
- What evidence supports the decision?

The long-term product should support learners, educators, creative teams, schools, workforce-development programs, and community organizations.

## 2.2 Core Promise

> Learn to see, think, and work like a designer.

Supporting language:

> The book gives you the principles. The studio helps you practice them.

> Build creative judgment through visual lessons, guided exercises, critique, and portfolio-ready projects.

## 2.3 Product Philosophy

1. Design is learned through observation and practice.
2. Visual judgment develops through comparison, iteration, critique, and reflection.
3. Software knowledge is useful, but software is not the same as design thinking.
4. Beginners need structure without condescension.
5. Good teaching explains why.
6. Interactive learning should make abstract ideas visible.
7. AI should help users think, not replace their thinking.
8. Accessibility is part of good design.
9. Progress should be demonstrated through work, not empty points.
10. A portfolio should reveal process, not only polished outcomes.

---

# 3. Product Positioning

## 3.1 Category

The Creative Studio Companion sits between:

- online design education
- creative coaching
- design practice software
- digital workbooks
- portfolio-development platforms
- AI-assisted critique tools

It is not a traditional course platform.

It is not a design editor.

It is not a social feed.

It is not a template marketplace.

It is not an AI image-generation product.

It is a guided learning studio.

## 3.2 Primary Differentiation

Most beginner design education focuses on:

- software tutorials
- shortcuts
- templates
- trend replication
- aesthetic inspiration
- isolated projects

The Creative Studio Companion focuses on:

- visual judgment
- design reasoning
- systems thinking
- critique
- revision
- accessibility
- audience awareness
- professional process
- portfolio storytelling

The differentiator is not access to more content.

The differentiator is the learning method.

## 3.3 Positioning Statements

Primary:

> A visual studio for developing creative judgment.

Alternative:

> Turn design principles into creative practice.

Alternative:

> Learn design by seeing, doing, testing, and refining.

Alternative:

> A guided studio for beginners who want to think like designers.

---

# 4. Audience

## 4.1 Primary Audience

Beginner and early-career creatives who:

- are interested in design but feel intimidated
- can use Canva, Adobe tools, Figma, or similar platforms at a basic level
- create graphics but struggle to explain why something works
- rely heavily on inspiration and imitation
- want stronger visual instincts
- want to build a portfolio
- are transitioning into creative work
- learn best visually and through practice
- want structure without formal design school
- may not know coding or advanced software

## 4.2 Secondary Audiences

- self-taught designers
- content creators
- marketers
- nonprofit communications staff
- government communications teams
- youth-program participants
- college students
- career changers
- creative entrepreneurs
- educators
- workforce-development organizations
- community-based organizations

---

# 5. Learning Model

The core learning cycle is:

## Learn

Understand the principle through concise visual teaching.

## Observe

Study examples and identify what is happening.

## Practice

Manipulate or apply the principle in a controlled exercise.

## Build

Use the principle inside a larger project.

## Critique

Evaluate what is working and what is unclear.

## Revise

Make intentional changes.

## Reflect

Explain what changed and why.

## Document

Turn the process into portfolio-ready material.

---

# 6. Product Ecosystem

## 6.1 The Creative Studio Book

- long-form curriculum
- philosophy
- theory
- essays
- case studies
- design language
- reflection
- reference

## 6.2 The Creative Studio Companion

- interactive lessons
- visual demonstrations
- exercises
- progress
- guided critique
- studio projects
- reflection
- portfolio development

## 6.3 The Creative Studio Portfolio

- organize project process
- create case studies
- publish private or public links
- prepare learners for job applications or client work

## 6.4 The Creative Studio Classroom

Future:

- educator dashboards
- cohort management
- assignments
- critique rooms
- institutional licensing
- custom learning paths

---

# 7. MVP Scope

## 7.1 MVP Features

1. Public landing page
2. Authentication-ready app shell
3. Student dashboard
4. Lessons library
5. Individual lesson pages
6. Five visual learning modules
7. Five interactive exercises
8. Inspiration library
9. Farmers Market Identity Studio Project
10. Guided critique interface
11. Portfolio case-study builder
12. Settings
13. Responsive layouts
14. Empty, loading, success, and error states
15. Reusable design system
16. Documentation
17. Automated tests
18. Vercel-ready deployment

## 7.2 Initial Learning Modules

1. Visual Hierarchy
2. White Space
3. Typography
4. Contrast
5. Grid Systems

## 7.3 Out of Scope for MVP

- live classes
- video hosting
- payment processing
- advanced community features
- direct messaging
- follower counts
- public social feeds
- certificates
- school administration
- native mobile apps
- a full drag-and-drop design editor
- automatic image annotation
- advanced AI grading
- complex real-time collaboration
- marketplace features
- fake analytics
- fake testimonials
- fake integrations

---

# 8. Information Architecture

## 8.1 Public Routes

- `/`
- `/about`
- `/book`
- `/features`
- `/pricing`
- `/faq`
- `/sign-in`
- `/sign-up`
- `/privacy`
- `/terms`

## 8.2 Authenticated Routes

- `/dashboard`
- `/learn`
- `/learn/[moduleSlug]`
- `/learn/[moduleSlug]/[lessonSlug]`
- `/practice`
- `/practice/[exerciseSlug]`
- `/studio`
- `/studio/farmers-market-identity`
- `/studio/farmers-market-identity/[phaseSlug]`
- `/inspiration`
- `/inspiration/[itemId]`
- `/critique`
- `/critique/[submissionId]`
- `/portfolio`
- `/portfolio/[caseStudyId]/edit`
- `/portfolio/[caseStudyId]/preview`
- `/settings`
- `/help`

## 8.3 Primary Navigation

- Dashboard
- Learn
- Practice
- Studio Projects
- Inspiration
- Portfolio

Secondary:

- Search
- Help
- Settings
- User menu

---

# 9. Core User Journeys

## 9.1 New User Journey

1. Visit landing page
2. Understand product promise
3. Create account or enter demo mode
4. Complete onboarding
5. Choose experience level
6. See recommended starting module
7. Begin Visual Hierarchy lesson
8. Complete exercise
9. Save reflection
10. Return to dashboard
11. See next recommended action

## 9.2 Returning User Journey

1. Sign in
2. Land on dashboard
3. See one primary Continue Learning action
4. Resume lesson or Studio Project
5. Save progress
6. View recent inspiration or portfolio progress
7. Continue without unnecessary friction

## 9.3 Studio Project Journey

1. Open Farmers Market Identity
2. Review brief
3. Complete research prompts
4. Define audience
5. Build strategy
6. Save references
7. Upload sketches
8. Develop system
9. Add applications
10. Complete critique
11. Document revision
12. Prepare final presentation
13. Complete reflection
14. Send content to portfolio builder

---

# 10. Dashboard Specification

The dashboard should prioritize direction, not data.

## Required Sections

### Continue Learning

- current lesson
- module
- brief description
- progress
- clear primary action

### Current Studio Project

- project name
- current phase
- next action
- project progress

### Weekly Practice

- one focused challenge
- estimated time
- skill connection

### Recent Inspiration

- recent saved references
- observation notes
- link to library

### Portfolio Progress

- completed sections
- missing sections
- next suggested action

Avoid excessive metric cards, fake streaks, meaningless points, and multiple competing primary buttons.

The dashboard should answer:

> What should I do next?

---

# 11. Initial Module Specifications

## 11.1 Visual Hierarchy

Goal: teach users to create a clear order of attention.

Exercise controls:

- headline size
- event date weight
- location placement
- body copy size
- call-to-action emphasis
- spacing between groups

Reflection:

> What should the viewer notice first, second, and third?

## 11.2 White Space

Goal: teach users that empty space creates grouping, clarity, tone, and rhythm.

Exercise controls:

- headline and subtitle spacing
- image and caption spacing
- information-group spacing
- outer margins
- paragraph spacing

Reflection:

> Where is space communicating separation? Where is it communicating connection?

## 11.3 Typography

Goal: teach readability, personality, pairing, and hierarchy.

Exercise:

Compare type pairings and identify tone:

- editorial
- technical
- approachable
- elegant
- playful
- authoritative

Reflection:

> What personality does the type communicate before the words are read?

## 11.4 Contrast

Goal: teach users to create distinction and emphasis.

Exercise:

Create one clear focal point using scale, weight, spacing, and emphasis.

Reflection:

> Which difference is doing the most work?

## 11.5 Grid Systems

Goal: teach alignment and structure.

Exercise:

Place content into one-column, two-column, three-column, and modular grids.

Reflection:

> Where does the grid create consistency, and where might you intentionally break it?

---

# 12. Inspiration Library

The library should encourage analysis rather than passive collecting.

## Core Actions

- upload image
- add title
- add source
- add creator or brand
- add source notes
- add category
- add tags
- write observation
- save
- edit
- delete
- filter
- search
- view detail

## Categories

- Typography
- Composition
- Color
- Photography
- Illustration
- Packaging
- Identity
- Editorial
- Wayfinding
- Digital Experience
- Emotional Tone

Core prompt:

> What are you noticing—not merely liking?

---

# 13. Farmers Market Identity Studio Project

## Project Phases

1. Brief
2. Research
3. Audience
4. Strategy
5. References
6. Sketches
7. System
8. Applications
9. Critique
10. Revision
11. Final Presentation
12. Reflection

Required applications:

- poster
- social post
- vendor sign
- wayfinding sign
- tote bag or reusable bag
- market schedule

---

# 14. Guided Critique

## Categories

- Clarity
- Hierarchy
- Typography
- Composition
- Accessibility
- Consistency
- Emotional Tone
- Strategic Fit

## Modes

- Guide Me
- Show Me
- Let Me Try

For MVP, use thoughtful predefined feedback and clearly label future AI functionality. Do not fake image analysis.

---

# 15. Portfolio Builder

## Case Study Sections

- Project Overview
- The Problem
- Audience
- Research
- Strategy
- Explorations
- Design System
- Applications
- Critique
- Revisions
- Outcome
- Reflection

Never invent metrics, quotes, results, or testimonials.

---

# 16. Brand Direction

The brand should feel:

- intelligent
- stylish
- warm
- observant
- confident
- editorial
- modern
- refined
- accessible
- serious without being stiff

Avoid:

- childish visuals
- loud startup styling
- generic SaaS layouts
- excessive gradients
- excessive cards
- glassmorphism
- constant drop shadows
- pill-shaped UI everywhere

---

# 17. Visual Design System

## Color Palette

- Canvas: `#F3EFE6`
- Paper: `#FBF9F4`
- Ink: `#191816`
- Muted Ink: `#6F6A62`
- Rule: `#D9D3C8`
- Primary Accent: `#6D1F2A`
- Secondary Accent: `#7F8B45`
- Highlight: `#E6CF73`
- Success: `#2F6548`
- Warning: `#A56B1F`
- Error: `#9B3C32`

Translate these into semantic tokens.

## Typography

Display direction:

- Fraunces
- Cormorant Garamond
- Libre Baskerville
- DM Serif Display

Body/interface direction:

- Inter
- Manrope
- Geist
- Source Sans 3

Optional mono:

- IBM Plex Mono
- Geist Mono

## Motion

Motion should explain, orient, confirm, and connect states. Respect reduced motion.

---

# 18. Accessibility

Target WCAG 2.2 AA where practical.

Requirements:

- semantic HTML
- correct heading order
- keyboard navigation
- visible focus states
- accessible forms
- clear labels
- error identification
- reduced-motion support
- screen-reader-friendly feedback
- color-independent status indicators
- accessible dialogs
- logical tab order
- zoom support
- text reflow
- sufficient contrast

Interactive exercises must offer non-drag alternatives.

---

# 19. Technical Stack

Use:

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- shadcn/ui only where appropriate
- Lucide icons
- React Hook Form
- Zod
- Supabase-compatible interfaces
- Vitest
- Playwright
- ESLint
- Prettier
- Vercel

---

# 20. Recommended Folder Structure

```text
src/
  app/
    (public)/
    (auth)/
    (app)/
    api/
  components/
    ui/
    layout/
    navigation/
    feedback/
  features/
    dashboard/
    learning/
    practice/
    inspiration/
    studio-projects/
    critique/
    portfolio/
    settings/
  domain/
    users/
    learning/
    projects/
    critique/
    portfolio/
  services/
    auth/
    learning/
    storage/
    projects/
    critique/
  lib/
    constants/
    validation/
    routes/
    utils/
  hooks/
  styles/
  tests/
    unit/
    integration/
    e2e/
  content/
    lessons/
    exercises/
    projects/
docs/
public/
```

---

# 21. Anti-Collapse Engineering Rules

## Before Every Change

- inspect relevant routes
- inspect related components
- inspect types
- inspect tests
- inspect design tokens
- identify existing patterns
- identify regression risk
- define the smallest coherent change

## During Every Change

- do not rewrite unrelated areas
- do not replace working architecture casually
- do not duplicate components
- do not bypass the design system
- do not silently remove behavior
- do not suppress errors
- do not add `any` without justification
- do not leave dead code
- do not add temporary hacks without documentation

## After Every Change

- run typecheck
- run lint
- run tests
- run production build
- inspect responsive behavior
- inspect keyboard behavior
- inspect error states
- inspect console output
- summarize changed files
- update documentation when needed

Root-cause rule:

> Fix the cause, not the symptom.

---

# 22. Repository Documentation

Create and maintain:

- `README.md`
- `AGENTS.md`
- `docs/PRODUCT.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/CONTENT_MODEL.md`
- `docs/DECISIONS.md`
- `docs/ROADMAP.md`
- `CHANGELOG.md`

---

# 23. Testing Requirements

At minimum test:

- landing page renders
- navigation works
- dashboard loads
- lesson progression works
- exercise state changes and resets
- inspiration filtering works
- Studio Project phases navigate
- portfolio preview renders
- form validation works
- mobile navigation works
- no critical route produces console errors

Required smoke flow:

Landing page → Enter app → Open lesson → Complete exercise → Open Studio Project → Preview portfolio.

---

# 24. Build Order

## Phase 1: Foundation

- inspect repository
- configure stack
- create documentation
- create tokens
- create route constants
- create domain models
- create service interfaces
- create app shell
- create shared primitives
- create test setup

## Phase 2: Public Experience

- landing page
- about
- book relationship
- features
- sign-in and sign-up shells
- footer
- metadata

## Phase 3: Core App

- navigation
- dashboard
- onboarding
- settings

## Phase 4: Learning

- lesson library
- lesson template
- five modules
- five exercises
- progress

## Phase 5: Studio

- inspiration library
- Farmers Market Identity project
- phase navigation
- saveable mock state

## Phase 6: Critique and Portfolio

- critique interface
- critique modes
- portfolio builder
- portfolio preview

## Phase 7: Quality

- responsive review
- accessibility review
- loading and error states
- tests
- build
- documentation updates
- deployment readiness

---

# 25. Definition of Done

The MVP is complete only when:

- all named routes exist
- navigation works
- design system is coherent
- five lessons are usable
- five exercises are usable
- Inspiration Library works with mock data
- Farmers Market project is navigable
- critique interface is complete
- portfolio builder is complete
- mobile, tablet, and desktop layouts work
- keyboard navigation works
- focus states are visible
- typecheck passes
- lint passes
- tests pass
- production build passes
- documentation matches implementation
- no fake backend functionality is presented as real
- no secrets are committed
- repository is ready for GitHub and Vercel

---

# 26. Codex Master Build Prompt

```text
You are the lead product engineer, front-end architect, UX engineer, and technical steward for The Creative Studio Companion.

The repository contains the canonical product specification for this application. Read it completely before making changes.

Your job is not merely to generate a visually impressive prototype. Your job is to establish a clean, scalable, stable application that can be expanded over time without becoming fragile, inconsistent, or difficult to maintain.

Treat the specification as the single source of truth.

Work autonomously through the initial setup and MVP implementation.

Before making changes:

1. Inspect the full repository.
2. Read all product and architecture documentation.
3. Identify the current project state.
4. Identify existing patterns that should be preserved.
5. Create a written implementation plan inside the repository.
6. Do not begin feature work before establishing the foundation.

Build the project in the documented phases.

Use:

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- shadcn/ui only where it genuinely fits
- Lucide icons
- React Hook Form
- Zod
- Supabase-compatible service interfaces
- Vitest
- Playwright
- ESLint
- Prettier
- Vercel-compatible deployment

Follow all visual, accessibility, architecture, testing, and anti-collapse rules in the specification.

Critical rules:

- Do not build the entire interface as giant page components.
- Do not duplicate components.
- Do not scatter raw colors or arbitrary spacing.
- Do not use fake backend functionality.
- Do not create fake testimonials, results, users, ratings, or analytics.
- Do not suppress TypeScript, lint, test, or build errors.
- Do not use `any` without explicit justification.
- Do not rewrite unrelated code.
- Do not introduce additional libraries without a clear reason.
- Do not use generic purple SaaS styling.
- Do not overuse cards, gradients, pills, shadows, or glassmorphism.
- Do not sacrifice accessibility for visual novelty.
- Do not stop after producing a plan.

The interface must feel sleek, stylish, editorial, warm, calm, intelligent, and immediately understandable.

The book is the curriculum.
The app is the studio.

Primary product promise:

Learn to see, think, and work like a designer.

The MVP must include:

- public landing page
- authentication-ready app shell
- dashboard
- lessons library
- five learning modules
- five interactive exercises
- Inspiration Library
- Farmers Market Identity Studio Project
- guided critique interface
- portfolio case-study builder
- settings
- responsive behavior
- accessible interactions
- empty, loading, success, and error states
- documentation
- testing
- Vercel-ready deployment

Use realistic sample content, not lorem ipsum.

When the implementation is complete:

1. Run typecheck.
2. Run lint.
3. Run unit tests.
4. Run Playwright smoke tests.
5. Run the production build.
6. Fix all discovered issues.
7. Review 375px, 768px, 1024px, and 1440px layouts.
8. Review keyboard behavior.
9. Review console output.
10. Update documentation.

Final response must include:

1. Summary of what was built
2. Route map
3. Architecture summary
4. Important design decisions
5. Validation completed
6. Known limitations
7. Recommended next three tasks
8. Exact local setup commands
9. Required environment variables

Do not merely return code snippets or a plan.

Build the project.
```

---

# 27. Permanent AGENTS.md Content

```text
# AGENTS.md

This repository contains The Creative Studio Companion.

The canonical product specification must be read before any meaningful change.

## Product Principle

The book teaches the ideas.
The app turns those ideas into practice.

The product helps beginners learn to see, think, and work like designers.

## Before Editing

- Inspect the relevant routes.
- Inspect related components.
- Inspect domain types.
- Inspect services.
- Inspect tests.
- Inspect design tokens.
- Reuse existing patterns.
- Identify regression risk.
- Define the smallest coherent change.

## During Editing

- Preserve working architecture.
- Do not rewrite unrelated areas.
- Do not duplicate components.
- Do not bypass design tokens.
- Do not scatter raw values.
- Do not add one-off style patches.
- Do not use fake functionality.
- Do not suppress errors.
- Do not use `any` without justification.
- Do not silently remove behavior.
- Do not leave dead code.
- Do not add libraries without a clear reason.

## Design Rules

The interface must feel editorial, calm, stylish, warm, intelligent, spacious, refined, and immediately understandable.

Avoid generic SaaS styling, purple startup gradients, excessive cards, glassmorphism, constant shadows, unnecessary pills, childish gamification, and decorative clutter.

## Accessibility

- Use semantic HTML.
- Preserve heading order.
- Support keyboard use.
- Use visible focus states.
- Maintain WCAG AA contrast.
- Respect reduced motion.
- Provide non-drag alternatives.
- Use accessible form feedback.
- Do not rely on color alone.

## Architecture

- Prefer server components.
- Use client components only when required.
- Keep services separate from presentation.
- Keep mock data outside components.
- Maintain strict TypeScript.
- Use feature-oriented boundaries.
- Avoid giant components.
- Avoid deep prop drilling.
- Avoid circular imports.
- Use route constants.
- Use typed domain models.

## Validation

After every meaningful change:

- run typecheck
- run lint
- run relevant tests
- run production build
- inspect responsive behavior
- inspect keyboard behavior
- inspect console output
- summarize files changed

## Documentation

Update documentation when architecture, routes, data models, design tokens, dependencies, or feature scope change.

## Root Cause Rule

Fix the cause, not the symptom.

## Incremental Change Rule

Treat each request as an incremental production change, not a fresh redesign.

Make the smallest coherent change that solves the stated problem.
```

---

# 28. Future Change Request Template

```text
Treat this as an incremental production change, not a fresh redesign. Inspect and preserve the existing architecture, behavior, design system, and working features. Make the smallest coherent change that solves the stated problem. Do not patch symptoms, duplicate components, or rewrite unrelated code.

TASK:
[Describe one specific change.]

USER PROBLEM:
[Explain what is not working for the user.]

SCOPE:
[Name the routes, sections, or features that may change.]

PRESERVE:
- existing architecture
- existing working behavior
- current navigation
- mobile behavior
- accessibility
- design system
- unrelated features

REQUIREMENTS:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

DO NOT:
- redesign unrelated sections
- create duplicate components
- introduce a new visual system
- add unnecessary libraries
- patch symptoms
- remove working functionality

VALIDATION:
- inspect before editing
- test relevant breakpoints
- run typecheck
- run lint
- run relevant tests
- run production build
- report changed files
- report shared-system impact
```

---

# 29. Final Product Standard

The Creative Studio Companion should feel like a product created by people who understand the principles it teaches.

The interface itself must demonstrate:

- hierarchy
- spacing
- contrast
- rhythm
- clarity
- accessibility
- systems thinking
- restraint
- intentionality

The app should never ask users to trust a principle that the interface itself fails to follow.

The final standard is not:

> Does the app look impressive?

The final standard is:

> Does the app make learning feel clear, thoughtful, visual, and worth returning to?

That is the product.
