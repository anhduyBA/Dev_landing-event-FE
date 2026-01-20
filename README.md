# TemplateStation Login UI

A complete React login interface built with Vite, Ant Design, and responsive CSS.

## Features

- **Desktop Layout**: Two-column design with branded left panel and login form on right
- **Mobile Layout**: Single-column responsive design
- **Vietnamese UI**: All text in Vietnamese as specified
- **Ant Design Components**: Professional form components with icons
- **Social Login**: Google, Facebook, GitHub integration ready
- **Responsive Design**: Optimized for desktop and mobile (375px+)

## Tech Stack

- React 18
- Vite (build tool)
- Ant Design (UI components)
- React Router (navigation)
- SCSS/CSS (styling)
- Ant Design Icons

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── layouts/
│   └── AuthLayout.jsx          # Two-column layout wrapper
├── pages/
│   └── auth/
│       └── Login.jsx           # Login page component
├── components/
│   └── auth/
│       └── LoginForm.jsx       # Login form with tabs and social buttons
├── styles/
│   └── auth.css               # Complete responsive styling
└── main.jsx                   # App entry point
```

## Design Implementation

### Desktop (768px+)
- Left panel: 40% width, dark blue gradient, brand name + hero text
- Right panel: 60% width, white background, centered login form
- Full viewport height (100vh)

### Mobile (< 768px)
- Single column layout
- Hidden left panel
- Full-width centered form
- Optimized for 375px minimum width

### Form Features
- Personal/Business account tabs
- Email and password inputs with icons
- Primary login button with hover effects
- Forgot password link
- Social login buttons (Google, Facebook, GitHub)
- Sign up link

## Usage

The application starts on the login page at `/` or `/login`. All form interactions are logged to console (no backend integration).

## Customization

- **Colors**: Modify CSS custom properties in `auth.css`
- **Branding**: Update brand name in `AuthLayout.jsx`
- **Social Providers**: Add/remove buttons in `LoginForm.jsx`
- **Responsive Breakpoints**: Adjust media queries in `auth.css`