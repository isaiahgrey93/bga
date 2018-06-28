import React from 'react';

import { storiesOf } from '@storybook/react';

import { withState } from '@dump247/storybook-state';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { select } from '@storybook/addon-knobs/react';
import { button } from '@storybook/addon-knobs';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { RadioOption } from 'components/common';

decorateAddons(storiesOf('Radio/Option', module))
  .addWithJSX('Component', () => (
    <RadioOption
      value={'bi-monthly'}
      selected={select('Selected', ['bi-weekly', 'bi-monthly'], 'bi-weekly')}
      onSelect={storyAction('onSelect')}
    />
  ))
  .add(
    'Controlled',
    withState({ selected: undefined })(({ store }) => {
      const selectOption = value => store.set({ selected: value });

      button('Reset Selection', () => store.set({ selected: undefined }));

      return (
        <RadioOption
          value={'default'}
          onSelect={selectOption}
          selected={store.state.selected}
        />
      );
    })
  )
  .add(
    'Prop Combinations',
    withPropsCombinations(RadioOption, {
      value: ['bi-monthly'],
      selected: [undefined, 'bi-monthly'],
    })
  );
