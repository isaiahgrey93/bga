import React from 'react';

import { storiesOf } from '@storybook/react';

import { withState } from '@dump247/storybook-state';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { boolean } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { Toggle } from 'components/common';

decorateAddons(storiesOf('Toggle', module))
  .addWithJSX('Component', () => (
    <Toggle
      active={boolean('Active', false)}
      onToggle={storyAction('onToggle')}
    />
  ))
  .add(
    'Controlled',
    withState({ active: false })(({ store }) => {
      const toggle = () => store.set({ active: !store.state.active });

      return <Toggle active={store.state.active} onToggle={toggle} />;
    })
  )
  .add(
    'Prop Combinations',
    withPropsCombinations(Toggle, {
      active: [false, true],
    })
  );
