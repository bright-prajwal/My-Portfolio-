# Prajwal Hon - Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, GSAP, and Framer Motion.

## Features

- ✨ **Modern UI/UX** - Clean, minimal design with smooth animations
- 🌓 **Dark Mode** - Always-on dark theme with starry background
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🎯 **Advanced Animations** - Powered by GSAP with ScrollTrigger
- 🎨 **Smooth Transitions** - Scroll-triggered animations and hover effects
- 🚀 **Fast Performance** - Built with Vite for optimal loading times

## Sections

- **Hero Section** - Introduction with call-to-action buttons
- **About Me** - Personal background and experience
- **Skills** - Technical skills organized by category
- **Projects** - Showcase of 5 featured projects
- **Contact** - Contact form and social media links

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- GSAP (GreenSock Animation Platform)
- ScrollTrigger Plugin
- Framer Motion (for some components)
- React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Personal Information

Edit the following files to update your information:

- `src/components/Hero.jsx` - Name, title, location
- `src/components/About.jsx` - About section content
- `src/components/Contact.jsx` - Contact information and social links
- `src/components/Projects.jsx` - Project details

### Change Color Theme

Edit `tailwind.config.js` to customize the color scheme. The primary color is defined in the `colors.primary` section.

### Add/Remove Projects

Edit the `projects` array in `src/components/Projects.jsx`.

## Deployment

This portfolio can be deployed to:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

## License

This project is open source and available under the MIT License.

## Contact

Prajwal Hon - prajwal.hon@example.com

---

Built with ❤️ by Prajwal Hon

