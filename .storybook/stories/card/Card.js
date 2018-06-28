import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { text, boolean } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { Card } from 'components/common';

decorateAddons(storiesOf('Card', module))
  .addWithJSX('Component', () => (
    <Card
      raised={boolean('Shadow', true)}
      value={text('Content', 'Card Content')}
      onClick={storyAction('onClick')}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(Card, {
      raised: [true, false],
      onClick: [() => null],
      value: ['Card Content', <div>DOM Node</div>],
    })
  );
