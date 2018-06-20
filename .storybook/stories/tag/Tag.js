import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { Tag } from 'components';

decorateAddons(storiesOf('Tag', module))
  .addWithJSX('Component', () => <Tag />)
  .add('Prop Combinations', withPropsCombinations(Tag, {}));
