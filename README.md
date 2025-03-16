# Quantum Explorations Website

A beautiful, animated website for showcasing quantum physics and computing projects.

## Structure

- `index.html` - Main landing page with sections for About, Experience, Projects, and Contact
- `styles.css` - Main stylesheet with animations and responsive design
- `script.js` - JavaScript for animations, particle effects, and interactions
- `projects/` - Directory containing individual project pages
  - `project1.html` - Quantum Algorithm Visualization project page
  - Add more project pages as needed
- `images/` - Directory for storing images used throughout the site

## Features

- Beautiful particle animation background using particles.js
- Smooth scrolling and animations
- Responsive design that works on all devices
- Interactive project showcase with popup overlay
- Timeline for displaying experience
- Social media links and contact information

## How to Use

1. Clone or download this repository
2. Customize the content in `index.html` to reflect your own experience and projects
3. Update the social media links in the hero section to point to your profiles
4. Add your own project pages in the `projects/` directory, using `project1.html` as a template
5. Add your own images to the `images/` directory
6. Deploy to your preferred web hosting service

## Customization

### Adding a New Project

1. Create a new HTML file in the `projects/` directory (e.g., `project5.html`)
2. Copy the structure from `project1.html` and modify the content
3. Add a new project card to the projects grid in `index.html`:

```html
<div class="project-card" onclick="window.location.href='projects/project5.html'">
    <div class="project-icon"><i class="fas fa-[icon-name]"></i></div>
    <h3>Your Project Title</h3>
    <p>Brief description of your project.</p>
</div>
```

### Changing Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #6c63ff;
    --secondary-color: #f50057;
    --accent-color: #00bcd4;
    --dark-color: #121212;
    --light-color: #f5f5f5;
    --text-color: #333;
    --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}
```

## Dependencies

- [particles.js](https://vincentgarreau.com/particles.js/) - For the particle animation
- [Font Awesome](https://fontawesome.com/) - For icons

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Created with ❤️ for quantum enthusiasts everywhere. 