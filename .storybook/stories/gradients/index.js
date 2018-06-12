import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { header } from 'story-decorators';
import { colors } from 'theme';

import {
  GradientSwatchesContainer,
  GradientSwatchContainer,
  GradientSwatchShape,
  GradientSwatchDetail,
  GradientStyleDetail,
} from './styles';

const GradientSwatch = ({ name, start, end }) => (
  <GradientSwatchContainer>
    <GradientSwatchDetail>{name}</GradientSwatchDetail>
    <GradientSwatchShape start={start} end={end} />
    <GradientSwatchDetail>
      <GradientStyleDetail>
        background: linear-gradient(135deg, {start} 0%, {end} 100%)
      </GradientStyleDetail>
    </GradientSwatchDetail>
  </GradientSwatchContainer>
);

storiesOf('Theme', module)
  .addDecorator(header({ title: 'Gradients' }))
  .add('Gradients', () => (
    <GradientSwatchesContainer>
      <GradientSwatch
        name={'Blue'}
        start={colors.lightBlue}
        end={colors.darkBlue}
      />
      <GradientSwatch
        name={'Orange'}
        start={colors.lightOrange}
        end={colors.darkOrange}
      />
    </GradientSwatchesContainer>
  ));
