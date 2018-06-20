import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { OutlineButton } from 'components';

decorateAddons(storiesOf('Button/Outline Button', module))
  .addWithJSX('Component', () => <OutlineButton />)
  .add('Prop Combinations', withPropsCombinations(OutlineButton, {}));
