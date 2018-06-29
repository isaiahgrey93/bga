import React from 'react';

import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { SolidButton, Card, Text, WrapperOffset } from 'components/common';

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ExampleCard = styled(Card)`
  height: 420px;
  width: 360px;
`;

decorateAddons(storiesOf('WrapperOffset', module))
  .addWithJSX('Component', () => (
    <ExampleContainer>
      <WrapperOffset
        wrapper={
          <ExampleCard raised rounded={'large'}>
            <Text>Title</Text>
          </ExampleCard>
        }
        component={
          <SolidButton
            fluid
            size={'large'}
            raised={'high'}
            color={'secondary'}
            value={'Create account'}
            style={{ margin: '0 24px' }}
          />
        }
      />
    </ExampleContainer>
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(
      props => (
        <ExampleContainer>
          <WrapperOffset {...props} />
        </ExampleContainer>
      ),
      {
        wrapper: [
          <ExampleCard raised rounded={'large'}>
            <Text>Title</Text>
          </ExampleCard>,
        ],
        component: [
          <SolidButton
            fluid
            size={'large'}
            raised={'high'}
            color={'secondary'}
            value={'Create account'}
            style={{ margin: '0 24px' }}
          />,
          <SolidButton
            fluid
            size={'large'}
            raised={'high'}
            color={'secondary'}
            value={'Sign in'}
            style={{ margin: '0 24px' }}
          />,
          <SolidButton
            fluid
            size={'medium'}
            raised={'high'}
            color={'primary'}
            value={'Ok'}
            style={{ margin: '84px' }}
          />,
        ],
      }
    )
  );
