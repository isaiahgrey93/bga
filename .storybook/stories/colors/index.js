import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { header } from 'story-decorators';
import { colors } from 'theme';

import {
  ColorSwatchesContainer,
  ColorSwatchContainer,
  ColorSwatchShape,
  ColorSwatchDetail,
  ColorStyleDetail,
} from './styles';

const ColorSwatch = ({ name, color }) => (
  <ColorSwatchContainer>
    <ColorSwatchDetail>{name}</ColorSwatchDetail>
    <ColorSwatchShape color={color} />
    <ColorSwatchDetail>
      <ColorStyleDetail>{color}</ColorStyleDetail>
    </ColorSwatchDetail>
  </ColorSwatchContainer>
);

storiesOf('Theme', module)
  .addDecorator(header({ title: 'Colors' }))
  .add('Colors', () => (
    <ColorSwatchesContainer>
      <ColorSwatch name={'Black'} color={colors.black} />
      <ColorSwatch name={'White'} color={colors.white} />
      <ColorSwatch name={'Grey 1'} color={colors.grey1} />
      <ColorSwatch name={'Grey 2'} color={colors.grey2} />
      <ColorSwatch name={'Grey 3'} color={colors.grey3} />
      <ColorSwatch name={'Grey 4'} color={colors.grey4} />

      <ColorSwatch name={'Primary Orange'} color={colors.primaryOrange} />
      <ColorSwatch name={'Light Orange'} color={colors.lightOrange} />
      <ColorSwatch name={'Dark Orange'} color={colors.darkOrange} />

      <ColorSwatch name={'Primary Blue'} color={colors.primaryBlue} />
      <ColorSwatch name={'Light Blue'} color={colors.lightBlue} />
      <ColorSwatch name={'Dark Blue'} color={colors.darkBlue} />
    </ColorSwatchesContainer>
  ));
