import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { TextArea } from 'components';

decorateAddons(storiesOf('TextArea', module))
  .addWithJSX('Component', () => <TextArea />)
  .add('Prop Combinations', withPropsCombinations(TextArea, {}));
