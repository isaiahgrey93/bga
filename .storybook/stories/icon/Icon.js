import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { Icon } from 'components';

decorateAddons(storiesOf('Icon', module))
  .addWithJSX('Component', () => <Icon />)
  .add('Prop Combinations', withPropsCombinations(Icon, {}));
