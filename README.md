# Lora Design System

A comprehensive, accessible design system built with React Aria Components, featuring 48+ production-ready components.

## Features

- 🎨 **48+ Components** - Complete set of UI components for modern web applications
- ♿ **Accessible** - Built with React Aria for WCAG compliance
- 🎭 **Dark/Light Mode** - Automatic theme switching based on user preference
- 📦 **Tree-shakeable** - Import only what you need
- 🎯 **TypeScript** - Full type safety with TypeScript
- 💅 **CSS Modules** - Scoped styling without conflicts
- 🎪 **Storybook** - Interactive component documentation

## Installation

```bash
npm install lora-ds
# or
yarn add lora-ds
# or
pnpm add lora-ds
```

## Quick Start

1. Import the global styles in your app:

```tsx
// app/layout.tsx or pages/_app.tsx
import 'lora-design-system/styles';
```

2. Use components:

```tsx
import { ButtonComponent } from 'lora-design-system';

export default function App() {
  return (
    <ButtonComponent variant="contained" color="primary">
      Click me
    </ButtonComponent>
  );
}
```
## Components

### Buttons (2)
- **Button** - Primary action button with variants
- **ButtonGroup** - Group related buttons together

### Forms (16)
- **Autocomplete** - Text input with suggestions
- **Checkbox** - Checkbox with indeterminate state
- **DatePicker** - Single date selection
- **DateRangePicker** - Date range selection with dual calendars
- **DateTimePicker** - Combined date and time selection
- **InputGroup** - Input with adornments
- **RadioGroup** - Radio button groups
- **Rating** - Star rating component
- **Select** - Dropdown selection
- **Slider** - Range slider input
- **Switch** - Toggle switch
- **TextField** - Text input with validation
- **TimeField** - Time-only input

### Overlay (3)
- **Modal** - Dialog overlay
- **Popover** - Floating content container
- **Tooltip** - Contextual help tooltips

### Navigation (8)
- **Breadcrumbs** - Navigation trail
- **Drawer** - Sliding side panel
- **Link** - Hyperlinks with variants
- **Menu** - Dropdown menus
- **Pagination** - Page navigation
- **SpeedDial** - Floating action button with menu
- **Stepper** - Step-by-step progress
- **Tabs** - Tabbed navigation
- **TreeView** - Hierarchical tree navigation

### Data Display (13)
- **Accordion** - Expandable content panels
- **Avatar** - User profile images
- **Badge** - Status indicators
- **Chip** - Tags and filters
- **Divider** - Content separators
- **ImageList** - Image grid layouts
- **ListBox** - Selectable lists
- **Table** - Data tables with sorting
- **Timeline** - Event timeline
- **Typography** - Text styling components

### Layout (4)
- **Box** - Flexible container
- **Container** - Responsive container
- **Grid** - 12-column grid system
- **Paper** - Elevated surface

### Feedback (5)
- **Alert** - Alert messages
- **Backdrop** - Overlay backdrop
- **Progress** - Progress indicators
- **Skeleton** - Loading placeholders
- **Snackbar** - Toast notifications

## Theming

The design system includes a comprehensive color system with automatic dark/light mode support:

```css
/* Colors available */
--primary: #F75A00
--secondary: #859448
--success, --error, --warning, --info
/* Plus dark mode variants */
```

## TypeScript

All components are fully typed with TypeScript:

```tsx
import { ButtonComponent, BaseButtonProps } from 'lora-design-system';

const MyButton: React.FC<BaseButtonProps> = (props) => {
  return <ButtonComponent {...props} />;
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Henrique

## Credits

Built with:
- [React Aria Components](https://react-spectrum.adobe.com/react-aria/) - Accessible component primitives
- [Iconify](https://iconify.design/) - Icon framework
- [Next.js](https://nextjs.org/) - React framework
- [Storybook](https://storybook.js.org/) - Component documentation
