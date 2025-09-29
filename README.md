# Hayden Harris Portfolio - Next.js Version

A modern, responsive portfolio website built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React icons.

## Features

- 🚀 **Next.js 14** with App Router
- ⚛️ **React 18** with TypeScript
- 🎨 **Tailwind CSS** for styling
- 🎭 **Framer Motion** for animations
- 🎯 **Lucide React** for icons
- 📱 **Fully Responsive** design
- 🖼️ **Next.js Image Optimization**
- ⚡ **Fast Performance**

## Sections

- **Hero Section** - Introduction with profile image
- **Mission Section** - Personal mission statement
- **Projects Section** - Showcase of 3 projects with Bootstrap-style cards
- **Skills Section** - Technical skills with icons
- **Contact Section** - Social media and contact links
- **Carousel Section** - Pet photos carousel
- **Footer** - Copyright information

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Haydenharr23/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your images:**
   - Copy your images to the `public/images/` directory
   - Make sure you have the following images:
     - `me.jpg` - Your profile photo
     - `officeplants.jpg` - Office plants photo
     - `project1.jpg`, `project2.jpg`, `project3.jpg` - Project screenshots
     - `cats1.jpg`, `cats2.jpg`, `gecko.jpg` - Pet photos
     - `html.svg`, `Bootstrap_logo.svg`, `python.svg` - Skill icons

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Building for Production

To create a production build:

```bash
npm run build
npm start
```

## Customization

### Updating Project Information

Edit the `src/components/ProjectsSection.tsx` file to update your projects:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Your project description...',
    image: '/images/your-project.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    liveDemo: 'https://your-demo-link.com',
    github: 'https://github.com/yourusername/your-repo',
    color: 'primary'
  },
  // ... more projects
]
```

### Updating Skills

Edit the `src/components/SkillsSection.tsx` file to update your skills:

```typescript
const skills = [
  {
    name: 'Your Skill',
    description: 'Your skill description...',
    icon: '/images/your-skill-icon.svg',
    delay: 0.1
  },
  // ... more skills
]
```

### Updating Contact Information

Edit the `src/components/ContactSection.tsx` file to update your contact links.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Next.js Image** - Optimized image loading

## Deployment

This project can be deployed on:

- [Vercel](https://vercel.com/) (recommended for Next.js)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- Any hosting service that supports Node.js

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Hayden Harris
- Email: haydenharr@gmail.com
- LinkedIn: [hayden-harris-workspace](https://www.linkedin.com/in/hayden-harris-workspace/)
- GitHub: [Haydenharr23](https://github.com/Haydenharr23)