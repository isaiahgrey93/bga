import React from 'react';

import { storiesOf } from '@storybook/react';

import { withState } from '@dump247/storybook-state';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { boolean, text } from '@storybook/addon-knobs/react';
import { button } from '@storybook/addon-knobs';

import { decorateAddons } from 'story-decorators';

import { Modal, Card, Text } from 'components';

decorateAddons(storiesOf('Modal', module))
  .addWithJSX('Component', () => (
    <Modal active={boolean('Open', false)}>
      <Text
        color={'white'}
        value={text('Content (children)', 'ModalText/DOM Node(s)')}
      />
    </Modal>
  ))
  .add(
    'Controlled',
    withState({ active: false })(({ store }) => {
      const toggle = () => store.set({ active: !store.state.active });

      return (
        <div>
          <Modal onClose={toggle} active={store.state.active}>
            <Card style={{ height: 480, width: 320 }}>
              <Text
                value={text('Content (children)', 'Modal with Card Component')}
              />
              <button onClick={toggle}>Close Modal</button>
            </Card>
          </Modal>
          <button onClick={toggle}>Open Modal</button>
          {button('Toggle Modal', toggle)}
        </div>
      );
    })
  );
