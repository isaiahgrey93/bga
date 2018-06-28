import React from 'react';

import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { withState } from '@dump247/storybook-state';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { boolean, text } from '@storybook/addon-knobs/react';
import { button } from '@storybook/addon-knobs';

import { decorateAddons } from 'story-decorators';

import { Modal, Card, SolidButton, OutlineButton, Text } from 'components/common';

const ExampeModalCard = styled(Card)`
  height: 480px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

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
            <ExampeModalCard>
              <Text
                value={text('Content (children)', 'Modal with Card Component')}
              />
              <OutlineButton fluid onClick={toggle}>
                Close Modal
              </OutlineButton>
            </ExampeModalCard>
          </Modal>
          <SolidButton onClick={toggle}>Open Modal</SolidButton>
          {button('Toggle Modal', toggle)}
        </div>
      );
    })
  );
