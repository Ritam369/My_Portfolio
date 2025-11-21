# ✨ My Portfolio

A modern, responsive portfolio website showcasing my journey as a **Computational Problem Solver**, **Competitive Programmer**, **Prompt Engineer**, and **Software Engineer**.

## 🚀 Live Demo

Visit my portfolio: [LINK](https://www.ritamsaha.me/)

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible UI components

### Additional Libraries
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **React Parallax Tilt** - Interactive tilt effects
- **@emailjs/browser** - Contact form email functionality
- **Lucide React** - Modern icon set
- **Class Variance Authority** - Component variant management
- **clsx & tailwind-merge** - Utility class management

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
My_Portfolio/
├── public/                 # Static assets
│   ├── logo.png           # Portfolio logo
│   ├── My_pic.jpg         # Profile picture
│   └── vite.svg           # Vite icon
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form with EmailJS
│   │   ├── Education.jsx  # Education timeline section
│   │   ├── Hero.jsx       # Hero/landing section with typewriter
│   │   ├── Navbar.jsx     # Navigation bar with mobile menu
│   │   ├── Projects.jsx   # Projects showcase section
│   │   ├── ServiceCard.jsx # Service display cards
│   │   ├── Skills.jsx     # Skills showcase with icons
│   │   ├── ThemeToggle.jsx # Dark/light mode toggle button
│   │   ├── Work.jsx       # Work experience section
│   │   └── ui/           # Reusable UI components
│   │       └── button.jsx # Shadcn button component
│   ├── assets/           # Images and icons
│   │   ├── icons/        # Service icons (cp.png, cps.png, pe.png, se.png)
│   │   ├── index.js      # Asset exports
│   │   └── *.svg         # Vector graphics (close, menu, react)
│   ├── constants/        # App constants and data
│   │   └── index.js      # Navigation, social links, services, tech stack
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.jsx # Theme state management
│   ├── hooks/            # Custom React hooks
│   │   ├── index.js      # Hook exports
│   │   └── SectionWrapper.jsx # HOC for section styling
│   ├── lib/              # Utility libraries
│   │   └── utils.js      # Helper functions (cn for classnames)
│   ├── utils/            # Utility functions
│   │   ├── motion.js     # Framer Motion animation variants
│   │   └── styles.js     # Common style classes
│   ├── App.jsx           # Main app component with theme provider
│   ├── main.jsx          # App entry point
│   ├── index.css         # Global styles and Tailwind imports
│   └── styles.js         # Style utilities
├── .env                   # Environment variables (EmailJS config)
├── .gitignore            # Git ignore rules
├── components.json        # Shadcn/ui configuration
├── eslint.config.js       # ESLint configuration
├── index.html            # HTML entry point
├── jsconfig.json         # JavaScript configuration (path aliases)
├── package.json           # Project dependencies
├── postcss.config.cjs     # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration with path aliases
└── README.md             # Project documentation
```

## ✨ Features

- **🌓 Dark Mode** - Toggle between light and dark themes with smooth transitions
- **📱 Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **✨ Smooth Animations** - Powered by Framer Motion with scroll-triggered effects
- **🎨 Interactive Elements** - Parallax tilt effects and hover animations
- **⌨️ Typewriter Effect** - Dynamic text animation in hero section
- **📧 Contact Form** - Functional contact form with EmailJS integration
- **🎓 Education Timeline** - Animated timeline showcasing academic journey
- **💼 Projects Showcase** - Interactive project cards with details
- **🛠️ Skills Display** - Dynamic skill icons with hover effects
- **🎯 Modern UI** - Clean, professional design with Tailwind CSS and Shadcn/ui
- **⚡ Fast Performance** - Optimized with Vite build system and lazy loading

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ritam369/My_Portfolio.git
   cd My_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   
   Get your credentials from [EmailJS Dashboard](https://www.emailjs.com/)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Constants Configuration
The portfolio is highly customizable through the `src/constants/index.js` file where you can update:
- **Personal Information** - `words` array for typewriter effect
- **Social Links** - `socialsData` with LinkedIn, GitHub, Instagram, Twitter, Facebook
- **Navigation** - `navLinks` array for menu items
- **Services** - `services` array with titles, icons, and descriptions
- **Tech Stack** - `techStack` array for skill icons
- **Content** - `home_page_text`, `about_page_text`, `Work_page_text`, `Email`

### Theme Customization
Modify `src/contexts/ThemeContext.jsx` to adjust theme behavior or add new theme variants.

### Styling
- Update `tailwind.config.js` for custom colors, fonts, and design tokens
- Modify component-specific styles in respective `.jsx` files
- Global styles in `src/index.css`

## 📱 Connect With Me

- **LinkedIn**: [ritamsaha137](https://www.linkedin.com/in/ritamsaha137)
- **GitHub**: [Ritam369](https://github.com/Ritam369)
- **Twitter**: [@saharitam963](https://x.com/saharitam963)
- **Instagram**: [r_i_t_a_m_s_a_h_a](https://www.instagram.com/r_i_t_a_m_s_a_h_a)

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ by [Ritam Saha](https://github.com/Ritam369)**



