import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { Divider } from 'components/common';

decorateAddons(storiesOf('Divider', module))
  .addWithJSX('Component', () => <Divider />)
  .add('Prop Combinations', withPropsCombinations(Divider, {}));
