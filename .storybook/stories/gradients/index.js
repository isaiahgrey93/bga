import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { header } from 'story-decorators';
import { colors, gradients } from 'theme';

import {
  GradientSwatchesContainer,
  GradientSwatchContainer,
  GradientSwatchShape,
  GradientSwatchDetail,
  GradientStyleDetail,
} from './styles';

const GradientSwatch = ({ name, primary }) => (
  <GradientSwatchContainer>
    <GradientSwatchDetail>{name}</GradientSwatchDetail>
    <GradientSwatchShape primary={primary} />
    <GradientSwatchDetail>
      <GradientStyleDetail>
        background: {primary ? gradients.primary : gradients.secondary}
      </GradientStyleDetail>
    </GradientSwatchDetail>
  </GradientSwatchContainer>
);

storiesOf('Theme', module)
  .addDecorator(header({ title: 'Gradients' }))
  .add('Gradients', () => (
    <GradientSwatchesContainer>
      <GradientSwatch name={'Primary'} primary />
      <GradientSwatch name={'Secondary'} />
    </GradientSwatchesContainer>
  ));
