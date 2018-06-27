import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { TextArea } from 'components';

decorateAddons(storiesOf('TextArea', module))
  .addWithJSX('Component', () => (
    <TextArea placeholder={'TextAreaPlaceholder'} />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(TextArea, {
      placeholder: ['TextAreaPlaceholder'],
    })
  );
