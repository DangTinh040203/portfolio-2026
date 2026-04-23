# CDT. — Personal Portfolio

> Fullstack Developer portfolio showcasing 10+ production projects across Web3, AI SaaS, and enterprise platforms.

**Live:** [portfolio-2026.vercel.app](https://portfolio-2026.vercel.app)

---

## ✨ Features

- **Animated SVG Constellation** — Custom tech constellation with orbiting nodes, pulsing connections, and gradient lines in the About section
- **Scroll-triggered Animations** — Framer Motion–powered entrance animations on every section via reusable `MotionSection` / `MotionItem` components
- **10 Project Showcases** — Each with live demo links, tech stacks, and high-fidelity screenshots captured from production sites
- **Responsive Design** — Mobile-first layout that adapts seamlessly across breakpoints
- **Dark Navy Theme** — Editorial design system inspired by [The Binary Holdings](https://new-tbh-website.vercel.app/) with cyan/blue/green accent palette
- **SEO Optimized** — Semantic HTML, proper heading hierarchy, meta tags, and statically generated pages

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **UI** | React 19, TypeScript |
| **Styling** | Tailwind CSS v4,  custom CSS tokens |
| **Animation** | Framer Motion, SVG `<animate>` |
| **Icons** | Lucide React |
| **Fonts** | Fraunces (serif), DM Sans (sans-serif) via Google Fonts |
| **Deployment** | Vercel |

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens & theme variables
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Single-page composition
├── components/
│   ├── motion/              # MotionSection, MotionItem wrappers
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx       # Tech Constellation SVG
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx    # 10 project entries
│   │   ├── ContactSection.tsx
│   │   └── FooterSection.tsx
│   └── ui/                  # Section, SectionTypography primitives
public/
├── projects/                # 10 high-fidelity project screenshots
└── CV_Cao_Dang_Tinh_Fullstack.pdf
```

## 🚀 Featured Projects

| # | Project | Category | Stack |
|---|---------|----------|-------|
| 1 | **CV Craft** | AI Application | Next.js, NestJS, Prisma, Gemini AI, WebSocket |
| 2 | **JobRocky** | AI SaaS Platform | Next.js, OpenAI API, Supabase, Stripe |
| 3 | **Đạo Tràng Ảo** | AI Application | Next.js, AI/RAG, Voice AI, Supabase |
| 4 | **TestArchitect UI Mapify** | Browser Extension | TypeScript, OpenAI API, Webpack |
| 5 | **TestArchitect Cloud** | Enterprise SaaS | React.js, TypeScript, REST APIs |
| 6 | **HotPotGPT** | AI Multi-Agent | Next.js, Multiple AI APIs, Supabase |
| 7 | **The Binary Holdings** | Web3 Infrastructure | Next.js, Framer Motion, Supabase |
| 8 | **The Binary Network** | Web3 Blockchain | React.js, Web3.js, REST APIs |
| 9 | **Binary Holdings (Legacy)** | Web3 Corporate | Next.js, Framer Motion, Supabase |
| 10 | **HackNative** | Web3 Community | Next.js, Supabase, Web3 |

## 🏁 Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Design System

The theme is defined in `src/app/globals.css` with custom color tokens:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-navy` | `#0d1b2a` | Primary text on light backgrounds |
| `--color-blue` | `#1847f0` | Primary blue accent |
| `--color-cyan` | `#00d4b4` | TBH-style teal accent |
| `--color-green` | `#10b981` | Success / Web3 accent |
| `--color-amber` | `#f59e0b` | Warning / highlight accent |

Typography uses **Fraunces** for headings (serif, editorial feel) and **DM Sans** for body text (clean, modern).

## 📄 License

This project is for personal use. Feel free to use it as reference for your own portfolio.

---

**Built by [Cao Dang Tinh](https://github.com/DangTinh040203)** · Ho Chi Minh City, Vietnam
