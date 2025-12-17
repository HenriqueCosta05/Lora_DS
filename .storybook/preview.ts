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
      options: {
        dark: {
          name: 'dark',
          value: '#3D362B',
        },

        light: {
          name: 'light',
          value: '#F3F1ED',
        }
      }
    },

    a11y: {
      test: 'todo'
    },

    layout: 'centered',
  },

  initialGlobals: {
    backgrounds: {
      value: 'dark'
    }
  }
};

export default preview;
