import React from 'react';

import { storiesOf } from '@storybook/react';

import { withState } from '@dump247/storybook-state';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { text, select } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { TextInput } from 'components';

const icons = {
  none: undefined,
  plus: <span>&#43;</span>,
  close: <span>&#215;</span>,
  mail: <span>&#9993;</span>,
};

decorateAddons(storiesOf('Input/Text Input', module))
  .addWithJSX('Component', () => (
    <TextInput
      onChange={storyAction('onChange')}
      icon={icons[select('Icon', Object.keys(icons), Object.keys(icons)[0])]}
    />
  ))
  .add(
    'Controlled',
    withState({ value: '' })(({ store }) => {
      const onChange = event => store.set({ value: event.target.value });
      return (
        <TextInput
          onChange={onChange}
          value={store.state.value}
          icon={
            icons[select('Icon', Object.keys(icons), Object.keys(icons)[0])]
          }
        />
      );
    })
  )
  .add(
    'Prop Combinations',
    withPropsCombinations(TextInput, {
      onChange: [() => null],
      icon: [Object.values(icons)[0]],
      placeholder: ['TextInputPlaceholder'],
      value: [undefined, 'TextInputValue'],
    })
  );
