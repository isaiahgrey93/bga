import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { WrapperButton } from 'components';

import { storyAction } from 'story-utilities';
import { text } from '@storybook/addon-knobs/react';

decorateAddons(storiesOf('Button/Wrapper Button', module))
  .addWithJSX('Component', () => (
    <WrapperButton
      value={text('value', 'Wrapped Text')}
      onClick={storyAction('onClick')}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(WrapperButton, {
      value: ['WrappedText', <div>Wrapped DOM Node</div>],
    })
  );
