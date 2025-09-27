# Trinowa - IT Tech Solutions Website

A modern, responsive website for Trinowa IT Tech Solutions Services built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Works on all device sizes from mobile to desktop
- **Performance Optimized**: Fast loading with code splitting and lazy loading
- **SEO Friendly**: Proper meta tags, semantic HTML, and accessible components
- **Contact Form**: Functional contact form with validation
- **Interactive Elements**: Hover effects, dropdowns, and mobile menu

## Tech Stack

- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Static type checking for better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Icons** - Popular icon library
- **Vite** - Next generation frontend tooling
- **ESLint & Prettier** - Code quality and formatting

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/Trinowa-Tech Solutions.git
   cd Trinowa-Tech Solutions
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── layout/        # Layout components (Header, Footer, etc.)
│   ├── ui/            # UI components (Buttons, Cards, etc.)
│   └── common/        # Common components
├── pages/             # Page components
├── assets/            # Static assets (images, fonts, etc.)
├── styles/            # Global styles and Tailwind configuration
└── utils/             # Utility functions and helpers
```

## Customization

### Colors

You can customize the color scheme by editing the `tailwind.config.js` file. The primary color palette is defined under the `theme.extend.colors.primary` key.

### Content

To update the content, you can modify the respective page components in the `src/pages` directory. The data for services, portfolio items, and team members is defined directly in each component file.

### Styling

This project uses Tailwind CSS for styling. You can add custom styles by:

1. Using Tailwind's utility classes directly in your components
2. Adding custom styles in `src/index.css`
3. Extending the Tailwind configuration in `tailwind.config.js`

## Deployment

### GitHub Pages (Automated)

This project includes a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages when you push to the main branch.

1. Push your code to a GitHub repository
2. Go to your repository settings > Pages
3. Under "Source", select "GitHub Actions"
4. The site will be automatically deployed on each push to the main branch
5. Access your site at `https://[your-username].github.io/it-consultancy-website/`

### Netlify

1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Set the build command to `npm run build` and publish directory to `dist`
4. Deploy the site

### Vercel

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Vercel will automatically detect the framework and configure the build settings
4. Deploy the site

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Unsplash](https://unsplash.com/) for placeholder images

---

Built with ❤️ by [Your Name]
