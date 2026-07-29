# thecreativestudio
# The Creative Studio Companion

> **Learn to see, think, and work like a designer.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**The Creative Studio Companion** is an interactive visual learning platform designed to work alongside the 313-page curriculum book *The Creative Studio: Learn to Think Like a Designer*.

While the book teaches principles, theory, and long-form design philosophy, **the Companion Studio** provides an interactive space for visual practice, guided critique, portfolio case-study building, and structured studio projects.

---

## 🎨 Product Philosophy & Design Language

The experience is crafted to feel like a blend of an independent design publication, a quiet art-school studio, and an intelligent portfolio workspace.

- **Editorial Palette:** Warm Ivory canvas (`#F3EFE6`), soft Paper surfaces (`#FBF9F4`), Near-Black Charcoal ink (`#191816`), and Deep Oxblood (`#6D1F2A`) accents.
- **Refined Typography:** High-contrast display serifs paired with clean, legibility-focused interface sans and technical monospace labels.
- **Judgment Over Shortcuts:** AI tools act strictly as reflective coaching partners—asking strategic questions rather than generating designs or making creative choices for the user.

---

## 🚀 Key MVP Features

### 1. Visual Learning Modules & Interactive Exercises
- **Visual Hierarchy:** Manipulate scale, weight, and order of event poster copy with real-time contrast feedback.
- **White Space:** Adjust padding and group margins to experience visual pacing and separation.
- **Typography:** Evaluate paired typefaces and identify editorial, technical, or authoritative character traits.
- **Contrast:** Balance scale, tone, and emphasis to establish one unambiguous focal point.
- **Grid Systems:** Snap elements to column grids and analyze visual alignment.

### 2. Studio Project Workspace
- **Farmers Market Identity:** A 12-phase guided studio project taking users through Brief, Research, Audience, Strategy, System, Applications, Critique, Revision, and Final Portfolio Presentation.

### 3. Guided Critique & Portfolio Builder
- **3 Coaching Modes:** *Guide Me* (reflective prompts), *Show Me* (visual overlays), and *Let Me Try* (independent critique).
- **Case-Study Generator:** Converts completed studio phases into an editorial portfolio case study with verified outcome placeholders.

### 4. Inspiration Library
- Filterable reference grid encouraging active analysis (*"What are you noticing—not merely liking?"*) across typography, composition, wayfinding, and packaging.

---

## 🗺️ Route Map

| Section | Route | Description |
| :--- | :--- | :--- |
| **Public** | `/` | Editorial landing page & methodology overview |
| | `/about` | Book relationship & core learning cycle |
| | `/privacy` | Privacy policy & local storage guidance |
| | `/ai-disclosure` | AI coaching bounds & IP protection terms |
| **Dashboard** | `/dashboard` | Action-oriented student dashboard |
| **Learn** | `/learn` | Lessons library & 5 core modules |
| **Practice** | `/practice` | 5 interactive visual exercises |
| **Studio** | `/studio` | Farmers Market Identity workspace (12 phases) |
| **Inspiration**| `/inspiration` | Curated reference library & upload interface |
| **Critique** | `/critique` | Guided evaluation interface across 8 criteria |
| **Portfolio** | `/portfolio` | Case study builder & presentation renderer |
| **Settings** | `/settings` | User preferences & IP transparency controls |

---

## 🛠️ Technical Stack & Architecture

- **Framework:** Next.js (App Router, React Server Components by default)
- **Language:** TypeScript (Strict Mode enabled)
- **Styling:** Tailwind CSS with semantic design token contracts
- **Validation:** React Hook Form + Zod
- **Architecture:** Feature-oriented directory boundaries separating Presentation, Domain Models (`src/domain/`), and Service Interfaces (`src/services/`) for future Supabase backend integration.

---

## 💻 Local Development Setup

### 1. Clone the repository
```bash
git clone [https://github.com/YOUR-USERNAME/creative-studio-companion.git](https://github.com/YOUR-USERNAME/creative-studio-companion.git)
cd creative-studio-companion
