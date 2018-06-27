import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { select } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';

import { Icon } from 'components';
import { icons } from 'components/Icon/constants';

decorateAddons(storiesOf('Icon', module))
  .addWithJSX('Component', () => (
    <Icon name={select('Icon', Object.keys(icons), Object.keys(icons)[0])} />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(Icon, {
      name: Object.keys(icons),
    })
  );
