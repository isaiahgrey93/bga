import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { WrapperButton } from 'components';

decorateAddons(storiesOf('Button/Wrapper Button', module))
  .addWithJSX('Component', () => <WrapperButton />)
  .add('Prop Combinations', withPropsCombinations(WrapperButton, {}));
