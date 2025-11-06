# BTEC420 Final Project

A modern full-stack application built with cutting-edge web technologies. This repository contains the frontend client implementation, with backend development planned for future iterations.

## 🚀 Tech Stack

### Frontend (Current)

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[HeroUI](https://heroui.com/)** - Beautiful React component library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Dark mode support

### Backend (Planned)

Backend implementation will be added in future development phases.

## 📁 Project Structure

```
btec420-final-project/
├── client/                # Frontend Next.js application
│   ├── app/              # Next.js 16 App Router
│   │   ├── about/        # About page
│   │   ├── blog/         # Blog section
│   │   ├── docs/         # Documentation
│   │   ├── pricing/      # Pricing page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable React components
│   ├── config/           # App configuration
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   └── public/           # Static assets
├── server/               # Backend (Coming soon)
└── compose.yml          # Docker compose configuration
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **pnpm** or **yarn**

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd btec420-final-project
```

2. Install frontend dependencies:
```bash
cd client
npm install
```

### Development

Start the development server with Turbopack:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

Run ESLint with auto-fix:

```bash
npm run lint
```

## 🎨 Features

- ⚡️ **Lightning Fast** - Next.js 16 with Turbopack for instant HMR
- 🎨 **Modern UI** - Pre-built components from HeroUI
- 🌓 **Dark Mode** - Built-in theme switching
- 📱 **Responsive** - Mobile-first design with Tailwind CSS
- ♿️ **Accessible** - WCAG compliant components
- 🔒 **Type Safe** - Full TypeScript support
- 🎭 **Animations** - Smooth transitions with Framer Motion
- 📦 **Optimized** - Automatic code splitting and image optimization

## 🧩 Available HeroUI Components

The project includes a comprehensive set of HeroUI components:

- Accordion, Alert, Autocomplete
- Avatar, Badge, Button
- Card, Chip, Code
- Divider, Drawer, Dropdown
- Form, Image, Input
- Kbd, Link, Listbox
- Modal, Navbar, Pagination
- Popover, Progress, Radio
- ScrollShadow, Select, Skeleton
- Snippet, Spacer, Spinner
- Switch, Table, Tabs
- Toast, Tooltip, User

## 📝 Configuration

### Site Configuration

Edit `client/config/site.ts` to customize:
- Site name and description
- Navigation items
- Social links

### Theme Configuration

Modify `client/tailwind.config.mjs` for theme customization.

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint with auto-fix |

## 🚧 Roadmap

- [x] Frontend setup with Next.js 16
- [x] HeroUI component integration
- [x] Tailwind CSS 4 configuration
- [x] Dark mode support
- [ ] Backend API development
- [ ] Database integration
- [ ] Authentication system
- [ ] Deployment configuration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](client/LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Development

This project is part of the BTEC420 course final project.

---

**Note:** This is currently a frontend-only implementation. Backend services will be integrated in upcoming development phases.

