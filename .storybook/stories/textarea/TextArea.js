import React from 'react';

import { storiesOf } from '@storybook/react';

import { withState } from '@dump247/storybook-state';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { text } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';

import { TextArea } from 'components/common';

decorateAddons(storiesOf('TextArea', module))
  .addWithJSX('Component', () => (
    <TextArea
      value={text('Value', 'TextAreaContent')}
      placeholder={'TextAreaPlaceholder'}
    />
  ))
  .add(
    'Controlled',
    withState({ value: '' })(({ store }) => {
      const onChange = event => store.set({ value: event.target.value });
      return (
        <TextArea
          onChange={onChange}
          value={store.state.value}
          placeholder={'TextAreaPlaceholder'}
        />
      );
    })
  )
  .add(
    'Prop Combinations',
    withPropsCombinations(TextArea, {
      value: [undefined, 'TextAreaContent'],
      placeholder: ['TextAreaPlaceholder'],
    })
  );
