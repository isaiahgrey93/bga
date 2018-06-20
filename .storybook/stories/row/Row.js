import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { Row } from 'components';

decorateAddons(storiesOf('Row', module))
  .addWithJSX('Component', () => <Row />)
  .add('Prop Combinations', withPropsCombinations(Row, {}));
