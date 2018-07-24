import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { boolean, select } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';

import { Icon } from 'components/common';
import { icons, sizes } from 'components/common/Icon/constants';

decorateAddons(storiesOf('Icon', module))
  .addWithJSX('Component', () => (
    <Icon
      fluid={boolean('Fluid', false)}
      name={select('Icon', Object.keys(icons), Object.keys(icons)[0])}
      size={select('Size', Object.keys(sizes), Object.keys(sizes)[3])}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(Icon, {
      name: Object.keys(icons),
    })
  );
