# Erik Burdett - Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Showcasing full stack development work, DevOps expertise, and WordPress solutions.

🌐 **Live Site:** [erikburdett.dev](https://erikburdett.dev)

## 🚀 Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Hook Form** - Form Handling
- **Lucide React** - Icons
- **Web3Forms** - Contact Form API

## 🎨 Features

- **Dark Cyberpunk Theme** - A distinctive dark aesthetic with neon accents
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Page transitions and micro-interactions
- **Terminal-Style Elements** - Developer-focused design touches
- **Working Contact Form** - Integrated with Web3Forms for email delivery
- **Downloadable Resume** - PDF resume download
- **SEO Optimized** - Meta tags and semantic HTML

## 📁 Project Structure

```
erik-burdett-portfolio/
├── public/
│   ├── favicon.svg
│   └── Erik-Burdett-Resume-2025.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── resumeData.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Navigate to project directory
cd erik-burdett-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📧 Contact Form

The contact form is integrated with [Web3Forms](https://web3forms.com/) for serverless email delivery.

To use your own Web3Forms access key:
1. Get a free access key at [Web3Forms](https://web3forms.com/)
2. Update the `WEB3FORMS_ACCESS_KEY` in `src/pages/Contact.tsx`

## 🎯 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

- `cyber` - Primary accent (cyan/teal)
- `neon` - Secondary accents (pink, purple, blue)
- `surface` - Background shades
- `void` - Deep blues

### Content

Update `src/data/resumeData.ts` with your:

- Personal information
- Work experience
- Projects
- Skills
- Education

## 📱 Pages

- **Home** - Hero section with intro, stats, and featured content
- **Experience** - Timeline of work history and freelance projects
- **Projects** - Portfolio of development work
- **Skills** - Technical expertise visualization
- **Contact** - Contact form and information

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

**Erik Burdett** | Full Stack Developer | [GitHub](https://github.com/ErikBurdett) | [LinkedIn](https://linkedin.com/in/erikburdett)

