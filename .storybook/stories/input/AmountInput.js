import React from 'react';

import { storiesOf } from '@storybook/react';

import { withState } from '@dump247/storybook-state';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { text } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { AmountInput } from 'components';

decorateAddons(storiesOf('Input/Amount Input', module))
  .addWithJSX('Component', () => (
    <AmountInput
      symbol={'$'}
      placeholder={'AmountInputPlaceholder'}
      onChange={storyAction('onChange')}
    />
  ))
  .add(
    'Controlled',
    withState({ value: '' })(({ store }) => {
      const onChange = event => store.set({ value: event.target.value });
      return (
        <AmountInput
          symbol={'$'}
          onChange={onChange}
          placeholder={'AmountInputPlaceholder'}
          value={store.state.value}
        />
      );
    })
  )

  .add(
    'Prop Combinations',
    withPropsCombinations(AmountInput, {
      symbol: ['$'],
      onChange: [() => null],
      placeholder: ['TextInputPlaceholder'],
      value: [undefined, '123'],
    })
  );
