# Professional Portfolio Website

A fully responsive professional portfolio website built with pure HTML, CSS, and JavaScript.

## Overview

This portfolio website is designed for aspiring data scientists and developers to showcase their skills, experience, and projects. It features a modern, clean design with dark/light theme support and smooth animations.

## File Structure

```
/
├── index.html      # Main HTML structure with all sections
├── style.css       # Complete CSS styling with responsive design
├── script.js       # JavaScript for interactivity and animations
```

## Features

### Sections
- **Home/Hero**: Large hero with name, professional title, tagline, and CTA buttons
- **About Me**: Professional summary, education, career goals, profile placeholder
- **Experience**: Timeline layout with internships, training, certifications
- **Projects**: Grid layout of project cards with tech stack and demo links
- **Skills**: Categorized skills with animated progress bars
- **Contact**: Form with validation and contact information

### Design Features
- Clean, modern UI with professional color scheme
- Dark/Light theme toggle with localStorage persistence
- Smooth scroll navigation
- Hover effects and transitions
- Mobile-responsive layout (breakpoints at 992px, 768px, 480px)
- Sticky navigation bar with mobile hamburger menu
- Scroll reveal animations
- Back to top button

### Technical Features
- Pure HTML5, CSS3, and vanilla JavaScript (ES6+)
- No external frameworks required
- Google Fonts (Inter, Poppins)
- Font Awesome icons via CDN
- CSS Grid and Flexbox layouts
- CSS custom properties for theming
- Client-side form validation

## Running the Project

The website is served using Python's built-in HTTP server:

```bash
python -m http.server 5000 --bind 0.0.0.0
```

## Customization

### Personal Information
Edit `index.html` to update:
- Name and professional title
- Tagline
- About me content
- Education details
- Experience entries
- Project cards
- Skills and percentages
- Contact information

### Styling
Edit `style.css` to modify:
- Colors via CSS variables in `:root`
- Fonts
- Spacing
- Animations

### Functionality
Edit `script.js` to modify:
- Form validation rules
- Animation timing
- Scroll behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Recent Changes

- December 6, 2024: Initial creation with all sections and features
