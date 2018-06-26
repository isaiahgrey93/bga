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
    'With State',
    withState({ active: false })(({ store }) => {
      const close = () => store.set({ active: !store.state.active });

      return (
        <div>
          <Modal onClose={close} active={store.state.active}>
            <Card style={{ height: 480, width: 320 }}>
              <Text
                value={text('Content (children)', 'Modal with Card Component')}
              />
            </Card>
          </Modal>
          {button('Toggle Modal', close)}
        </div>
      );
    })
  );
