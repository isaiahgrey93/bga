import { withKnobs } from '@storybook/addon-knobs/react';

import { backgrounds, centered, header } from './';

export default story =>
  story
    .addDecorator(centered)
    .addDecorator(backgrounds)
    .addDecorator(withKnobs)
    .addDecorator(header({ title: story.kind }));
