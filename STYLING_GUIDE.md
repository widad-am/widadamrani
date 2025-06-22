# 🎨 Portfolio Styling Guide

A comprehensive guide to all styling utilities, components, and design patterns available in your portfolio project.

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Design System](#design-system)
- [Utility Classes](#utility-classes)
- [Components](#components)
- [Animations](#animations)
- [Best Practices](#best-practices)
- [Examples](#examples)

## 🚀 Quick Start

Your portfolio project comes with a comprehensive styling system built on:

- **Tailwind CSS v4** - Modern utility-first CSS framework
- **Framer Motion** - Smooth animations and interactions
- **React Icons** - Beautiful icon library
- **Custom Design System** - Consistent colors, spacing, and components

### Basic Usage

```jsx
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';

// Use utility classes
<div className="card gradient-bg section-padding">
  <h1 className="gradient-text text-4xl font-bold">Hello World</h1>
  <Button variant="primary">Click Me</Button>
</div>
```

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--color-primary: hsl(240 5.9% 10%);
--color-primary-foreground: hsl(0 0% 98%);

/* Brand Colors */
.brand-purple: #8b5cf6
.brand-pink: #ec4899
.brand-blue: #3b82f6
.brand-indigo: #6366f1

/* Gradients */
.gradient-text: purple → pink → blue
.gradient-bg: light purple/pink/blue
.gradient-bg-dark: dark purple/blue
.gradient-bg-aurora: vibrant purple/pink/blue
```

### Typography

```css
/* Font Families */
font-sans: Poppins (primary)
font-mono: JetBrains Mono, Fira Code

/* Font Sizes */
text-xs: 0.75rem
text-sm: 0.875rem
text-base: 1rem
text-lg: 1.125rem
text-xl: 1.25rem
text-2xl: 1.5rem
text-3xl: 1.875rem
text-4xl: 2.25rem
text-5xl: 3rem
text-6xl: 3.75rem
text-7xl: 4.5rem
text-8xl: 6rem
text-9xl: 8rem
```

### Spacing

```css
/* Custom Spacing */
space-18: 4.5rem
space-88: 22rem
space-128: 32rem

/* Section Padding */
section-padding: py-16 lg:py-24
section-padding-sm: py-8 lg:py-12
```

## 🛠️ Utility Classes

### Gradient Utilities

```css
.gradient-text          /* Purple → Pink → Blue text */
.gradient-text-reverse  /* Blue → Pink → Purple text */
.gradient-bg            /* Light gradient background */
.gradient-bg-dark       /* Dark gradient background */
.gradient-bg-aurora     /* Vibrant gradient background */
.gradient-bg-sunset     /* Sunset gradient background */
```

### Glass Morphism

```css
.glass                  /* Light glass effect */
.glass-dark             /* Dark glass effect */
.glass-strong           /* Stronger light glass */
.glass-strong-dark      /* Stronger dark glass */
```

### Shadow Effects

```css
.shadow-glow            /* Purple glow shadow */
.shadow-glow-hover      /* Enhanced glow on hover */
.shadow-glow-lg         /* Large glow shadow */
.shadow-glow-xl         /* Extra large glow shadow */
.shadow-neon            /* Neon effect shadow */
```

### Text Effects

```css
.text-shadow            /* Subtle text shadow */
.text-shadow-lg         /* Large text shadow */
.text-shadow-glow       /* Glowing text shadow */
.text-balance           /* Balanced text wrapping */
```

### Interactive Effects

```css
.hover-lift             /* Lift on hover */
.hover-scale            /* Scale on hover */
.hover-glow             /* Glow on hover */
```

### Background Patterns

```css
.bg-pattern-dots        /* Dots pattern */
.bg-pattern-grid        /* Grid pattern */
```

### Scrollbar Styling

```css
.scrollbar-thin         /* Thin custom scrollbar */
.scrollbar-hide         /* Hide scrollbar */
```

## 🧩 Components

### Button Component

```jsx
import Button from '@/components/ui/Button';
import { FiArrowRight } from 'react-icons/fi';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="gradient">Gradient</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="glass">Glass</Button>
<Button variant="neon">Neon</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// With icons
<Button icon={FiArrowRight} iconPosition="right">
  Get Started
</Button>

// Loading state
<Button loading>Loading...</Button>

// Full width
<Button fullWidth>Full Width</Button>
```

### Card Component

```jsx
import Card from '@/components/ui/Card';

// Variants
<Card variant="glass">Glass Card</Card>
<Card variant="glass-dark">Dark Glass</Card>
<Card variant="solid">Solid Card</Card>
<Card variant="gradient">Gradient Card</Card>
<Card variant="neon">Neon Card</Card>

// Padding sizes
<Card padding="sm">Small Padding</Card>
<Card padding="md">Medium Padding</Card>
<Card padding="lg">Large Padding</Card>
<Card padding="xl">Extra Large Padding</Card>

// With sub-components
<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle>Card subtitle</Card.Subtitle>
  </Card.Header>
  <Card.Content>
    <p>Card content goes here...</p>
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>

// With image
<Card>
  <Card.Image src="/image.jpg" alt="Description" />
  <Card.Content>
    <p>Content with image</p>
  </Card.Content>
</Card>
```

### Input Component

```jsx
import Input from '@/components/ui/Input';

// Variants
<Input variant="glass" placeholder="Glass input" />
<Input variant="solid" placeholder="Solid input" />
<Input variant="outline" placeholder="Outline input" />

// Types
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="search" placeholder="Search..." />

// Sizes
<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />

// With label and validation
<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  error="Please enter a valid email"
  required
/>

// With success state
<Input
  label="Username"
  placeholder="Enter username"
  success="Username is available!"
/>
```

## ✨ Animations

### Built-in Animations

```css
.animate-float           /* Floating animation */
.animate-glow            /* Glowing animation */
.animate-shimmer         /* Shimmer effect */
.animate-gradient-x      /* Horizontal gradient animation */
.animate-gradient-y      /* Vertical gradient animation */
.animate-pulse-slow      /* Slow pulse */
.animate-bounce-in       /* Bounce in effect */
```

### Framer Motion Integration

```jsx
import { motion } from 'framer-motion';

// Basic animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Hover animations
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Interactive Element
</motion.div>

// Staggered animations
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

## 📐 Layout Utilities

### Container

```css
.container-custom        /* Responsive container with max-width */
```

### Section Spacing

```css
.section-padding         /* Standard section padding */
.section-padding-sm      /* Small section padding */
```

### Responsive Design

```jsx
// Mobile-first responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Responsive Grid</div>
</div>

// Responsive text
<h1 className="text-3xl md:text-4xl lg:text-6xl">
  Responsive Heading
</h1>

// Responsive spacing
<div className="p-4 md:p-6 lg:p-8">
  Responsive Padding
</div>
```

## 🎯 Best Practices

### Performance

1. **Limit animations** - Don't animate too many elements simultaneously
2. **Use transform/opacity** - These properties are GPU-accelerated
3. **Reduce motion** - Respect user's motion preferences
4. **Optimize images** - Use appropriate formats and sizes
5. **Lazy load** - Load components and images as needed

### Accessibility

1. **Focus indicators** - Always provide visible focus states
2. **Color contrast** - Ensure sufficient contrast ratios
3. **Screen readers** - Use semantic HTML and ARIA labels
4. **Keyboard navigation** - Ensure all interactive elements are keyboard accessible
5. **Motion preferences** - Respect `prefers-reduced-motion`

### Design Consistency

1. **Use design tokens** - Stick to defined colors, spacing, and typography
2. **Component composition** - Build complex UIs from simple components
3. **Responsive design** - Test on multiple screen sizes
4. **Dark mode support** - Consider dark mode variants
5. **Loading states** - Provide feedback for async operations

## 📝 Examples

### Hero Section

```jsx
<section className="relative w-full min-h-screen gradient-bg flex items-center justify-center">
  <div className="container-custom text-center">
    <motion.h1
      className="text-5xl lg:text-7xl font-bold mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="gradient-text">Hello, I'm Widad</span>
    </motion.h1>
    <motion.p
      className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Full Stack Developer crafting exceptional digital experiences
    </motion.p>
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Button variant="primary" size="lg">
        View My Work
      </Button>
      <Button variant="outline" size="lg">
        Contact Me
      </Button>
    </motion.div>
  </div>
</section>
```

### Project Card

```jsx
<Card variant="glass" className="group">
  <Card.Image src="/project.jpg" alt="Project" />
  <Card.Header>
    <Card.Title className="group-hover:gradient-text transition-all duration-300">
      Project Name
    </Card.Title>
    <Card.Subtitle>React • Node.js • MongoDB</Card.Subtitle>
  </Card.Header>
  <Card.Content>
    <p className="text-gray-600">
      A modern web application built with cutting-edge technologies.
    </p>
  </Card.Content>
  <Card.Footer>
    <div className="flex gap-3">
      <Button variant="outline" size="sm">
        View Demo
      </Button>
      <Button variant="primary" size="sm">
        Source Code
      </Button>
    </div>
  </Card.Footer>
</Card>
```

### Contact Form

```jsx
<div className="card p-8">
  <h2 className="text-3xl font-bold gradient-text mb-6">Get In Touch</h2>
  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Input
        label="First Name"
        placeholder="Enter your first name"
        required
      />
      <Input
        label="Last Name"
        placeholder="Enter your last name"
        required
      />
    </div>
    <Input
      label="Email"
      type="email"
      placeholder="Enter your email"
      required
    />
    <Input
      label="Message"
      placeholder="Tell me about your project..."
      required
    />
    <Button variant="primary" fullWidth loading>
      Send Message
    </Button>
  </form>
</div>
```

## 🔧 Customization

### Adding Custom Colors

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
        'custom-green': '#059669',
      }
    }
  }
}
```

### Adding Custom Animations

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'custom-bounce': 'custom-bounce 2s infinite',
      }
    }
  }
}
```

### Creating Custom Components

```jsx
// components/ui/CustomComponent.js
import { motion } from 'framer-motion';

const CustomComponent = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      className={`custom-base-classes ${className}`}
      whileHover={{ scale: 1.02 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default CustomComponent;
```

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Design System Best Practices](https://www.designsystems.com/)

---

This styling guide provides everything you need to create beautiful, consistent, and accessible components for your portfolio. Happy coding! 🎉 