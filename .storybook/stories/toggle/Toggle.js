import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { boolean } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { Toggle } from 'components';

decorateAddons(storiesOf('Toggle', module))
  .addWithJSX('Component', () => (
    <Toggle
      active={boolean('Active', false)}
      onToggle={storyAction('onToggle')}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(Toggle, {
      active: [false, true],
    })
  );
