import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { select, text, boolean } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { Card } from 'components/common';

import { rounding } from 'components/common/Card/constants';

const roundingOptions = Object.keys(rounding);

decorateAddons(storiesOf('Card', module))
  .addWithJSX('Component', () => (
    <Card
      raised={boolean('Shadow', true)}
      value={text('Content', 'Card Content')}
      onClick={storyAction('onClick')}
      rounded={select('Border Rounding', roundingOptions, 'small')}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(Card, {
      raised: [true, false],
      onClick: [() => null],
      rounded: roundingOptions,
      value: ['Card Content', <div>DOM Node</div>],
    })
  );
