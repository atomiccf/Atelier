# Atelier - Creative Agency Template

Modernized static website template for creative agencies.

## Features

- **Vanilla JavaScript** - No frameworks, no jQuery
- **SCSS** - Modular, maintainable stylesheets
- **CSS Custom Properties** - Design tokens for easy theming
- **Fluid Typography** - Responsive font sizes with `clamp()`
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

## Project Structure

```
Atelier/
├── src/
│   ├── index.html          # Main HTML file
│   ├── scss/
│   │   ├── main.scss       # Entry point
│   │   ├── _variables.scss # Design tokens
│   │   ├── _reset.scss     # CSS reset
│   │   ├── _base.scss      # Base styles
│   │   ├── _header.scss    # Header styles
│   │   ├── _sections.scss  # Section styles
│   │   ├── _footer.scss    # Footer styles
│   │   ├── _components.scss # Reusable components
│   │   └── _media.scss     # Media queries
│   └── js/
│       ├── navigation.js   # Navigation logic
│       └── main.js         # Entry point
├── css/                    # Compiled CSS
├── img/                    # Images
├── script/                 # Original scripts
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will watch SCSS files and compile them to `css/main_style.css` with expanded output and source maps.

### Build for Production

```bash
npm run build
```

Compiles SCSS to compressed CSS without source maps.

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

Formats HTML, SCSS, and JavaScript files.

## CSS Architecture

### Design Tokens (CSS Custom Properties)

Located in `_variables.scss`, exported as CSS variables:

```css
:root {
  --color-primary: #ffae2b;
  --color-bg: #181511;
  --font-main: 'Old Standard TT', serif;
  --container-max: 1320px;
}
```

### Naming Convention

BEM (Block Element Modifier):

- Block: `.header`
- Element: `.header__container`
- Modifier: `.header__burger--active`

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This is a template for personal and commercial use. Please check the original license terms.

## Credits

- Design: Based on Webflow templates
- Fonts: [Old Standard TT](https://fonts.google.com/specimen/Old+Standard+TT) by Botjo
