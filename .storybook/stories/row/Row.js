import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { text } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';

import { Row } from 'components/common';

decorateAddons(storiesOf('Row', module))
  .addWithJSX('Component', () => (
    <Row
      left={text('Left Text/Node(s)', 'TextLeft')}
      right={text('Right Text/Node(s)', 'TextRight')}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(Row, {
      right: ['TextRight'],
      left: ['TextLeft'],
    })
  );
