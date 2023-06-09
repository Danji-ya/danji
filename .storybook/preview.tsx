import React from 'react';
import type { Preview } from '@storybook/react';
import { DjProvider } from '../packages/styled/src';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <DjProvider>
        <Story />
      </DjProvider>
    ),
  ],
};

export default preview;
