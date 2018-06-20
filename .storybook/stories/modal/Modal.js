import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { Modal } from 'components';

decorateAddons(storiesOf('Modal', module))
  .addWithJSX('Component', () => <Modal />)
  .add('Prop Combinations', withPropsCombinations(Modal, {}));
