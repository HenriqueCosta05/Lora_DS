import type { Preview } from '@storybook/nextjs-vite';
import '../src/styles/globals.css';
import './preview.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#3D362B',
        },
        {
          name: 'light',
          value: '#F3F1ED',
        },
      ],
    },

    a11y: {
      test: 'todo'
    },

    layout: 'centered',
  },
};

export default preview;
