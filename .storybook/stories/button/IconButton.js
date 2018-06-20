import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { IconButton } from 'components';

decorateAddons(storiesOf('Button/Icon Button', module))
  .addWithJSX('Component', () => <IconButton />)
  .add('Prop Combinations', withPropsCombinations(IconButton, {}));
