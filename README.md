# NDCSDC — Official Web Portal & NACS 2026 Summit Platform

> **Notre Dame Career & Skill Development Club (NDCSDC)**  
> *Notre Dame College, Dhaka, Bangladesh*  
> **Flagship Event:** 1st National Academic Career Summit 2026 (NACS 2026) &bull; 14 November 2026

---

## 🏛️ About NDCSDC & The Platform

This repository contains the official, production-grade frontend portal for the **Notre Dame Career & Skill Development Club (NDCSDC)** of Notre Dame College Dhaka. 

The website serves a dual purpose:
1. **Club Digital Headquarters**: Showcasing club history, executive panel, faculty moderators, seasonal workshops, study expos, and institutional milestones.
2. **NACS 2026 Summit Platform**: The nationwide command hub for the **1st National Academic Career Summit 2026**, scheduled for **Saturday, 14 November 2026** at the historic Notre Dame College campus. The platform handles attendee registration, simulated mock examinations, track-wise hall allocations, and digital entry pass generation for over 1,800 college students across Bangladesh.

---

## 🚀 Key Features

### 1. 🎓 Flagship Summit (NACS 2026) Command Center
- **4 Career Pathways**: Specialized curricula and simulated mock examination drills for:
  - **BUET & Engineering Drills**: Speed numerical problem-solving and calculus heuristics.
  - **IBA & Business Leadership**: Analytical reasoning, case studies, and critical aptitude.
  - **Medical & Healthcare Strategy**: Biology diagnostics, chemistry speed-recall, and clinical thinking.
  - **Abroad Studies & IELTS Global**: Scholarship roadmaps, SAT/IELTS strategy, and Ivy League applications.
- **Interactive Registration Engine**: Form capturing student details, HSC batch, academic stream, and selected pathway.
- **Instant Digital Entry Pass (Voucher)**: Auto-generates a unique alphanumeric entry code (e.g. `NACS26-00482`) with barcode styling, venue directions, and print/download capabilities.
- **Live Countdown Banner**: Dynamic countdown driver tracking days, hours, minutes, and seconds until summit inauguration.

### 2. 📰 Activities, Workshops & Bulletins
- Categorized activity feed (Study Fairs, Masterclasses, Bootcamps, Competitions).
- Interactive **Photo Lightbox Modal** for immersive viewing of workshop imagery.

### 3. 👥 Executive Panel & Faculty Leadership
- Official committee directory featuring Club Moderators and Student Executives.
- Direct contact cards with phone, email, and social profiles.

### 4. 🤝 Tiered Partner & Sponsor Ecosystem
- Showcase for institutional partners, title sponsors, and official collaborators.
- **Official Website Partner**: Permanent partner credit and integration for **NeexG** ([https://neexg.com](https://neexg.com)).

### 5. 🌐 Multi-Language Architecture (`next-intl`)
- Full internationalization support for English (`en`) and Bengali (`bn`).

---

## 🎨 Design System & Aesthetics

The UI adheres strictly to the **NDCSDC Warm Academic & Editorial Design Specification**:
- **70% Warm Sand / Beige Canvas**: `#F5F1E6`, `#EFEADB`, `#E6E0CD` — inspired by traditional college paper and dignified campus architecture.
- **20% Charcoal Ink**: `#1A1614`, `#110E0C` — high-contrast typography and deep structural containers.
- **10% Brand Red (Notre Dame Heritage)**: `#A81818` (Hover `#8F1313`, Bright `#D91A1A`) — prominent CTAs, track ribbons, and summit badges.
- **Typography**: 
  - Display Headings: **Poppins** (Editorial, bold, uppercase tracking).
  - Body Text: **Inter** (Clean, legible, modern typography).

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3.4](https://tailwindcss.com/)
- **Internationalization**: [`next-intl v4`](https://next-intl-docs.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Performance & SEO**: Native Next.js Image Optimization, Metadata API, and Semantic HTML5.

---

## 📂 Project Structure

```
ndcsdc-frontend/
├── public/
│   ├── logos/                 # NDCSDC, NDC College crest, NeexG partner logos
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── [locale]/          # Localized App Router pages
│   │   │   ├── (public)/      # Public marketing and summit routes
│   │   │   │   ├── about/     # Club history & mission
│   │   │   │   ├── activities/# Workshop bulletins & image lightbox
│   │   │   │   ├── contact/   # Secretariat desk & campus transit directions
│   │   │   │   ├── partners/  # Sponsor ecosystem & NeexG partner showcase
│   │   │   │   ├── summit/    # NACS 2026 flagship event page
│   │   │   │   │   └── register/ # Attendee registration & Pass generator
│   │   │   │   ├── team/      # Executive committee & moderator panel
│   │   │   │   └── page.tsx   # Editorial Homepage
│   │   │   └── layout.tsx     # Root locale layout with fonts & providers
│   │   └── api/               # API endpoints
│   ├── components/
│   │   ├── home/              # Hero, Countdown, Trust Bento, Pathways, Teasers
│   │   ├── layout/            # NavbarClient, Footer, Mobile Navigation
│   │   └── ui/                # Shared UI primitives
│   ├── i18n/                  # Locale routing and messages configuration
│   └── messages/              # en.json / bn.json translation strings
├── tailwind.config.js         # Custom brand colors, fonts, and shadows
└── package.json
```

---

## 💻 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/abuhosain/ndcsdc-frontend.git
cd ndcsdc-frontend

# Install dependencies
npm install
```

### Running Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Build the production bundle (Turbopack + Next.js App Router)
npm run build

# Start production server
npm run start
```

---

## 🛡️ Official Partners & Credits

- **Host Institution**: [Notre Dame College, Dhaka](https://ndc.edu.bd)
- **Club**: Notre Dame Career & Skill Development Club (NDCSDC)
- **Official Website Partner**: **NeexG** ([https://neexg.com](https://neexg.com))

---

## 📄 License
All rights reserved © 2026 Notre Dame Career & Skill Development Club (NDCSDC).
