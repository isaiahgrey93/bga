import React from 'react';

import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { decorateAddons } from 'story-decorators';

import { colors, fonts } from 'theme';
import {
  SectionTitle,
  FontStylesContainer,
  FontStyleContainer,
  FontStyleDetail,
  FontStyleShowcase,
} from './styles';

const paragraph =
  'Paradigm shift analytics traction twitter business to consumer influencer growth hacking focus.';

const paragraphStyle = {
  maxWidth: 240,
  padding: '0px 10px',
};

const fontFamilyTitleStyle = {
  padding: 12,
  fontFamily: 'monospace',
  fontSize: fonts.fontSizing.large,
};

const FontStyle = ({
  name,
  size,
  weight,
  leading,
  code,
  content,
  contentStyle,
}) => (
  <FontStyleContainer>
    <FontStyleShowcase
      size={size}
      weight={weight}
      leading={leading}
      style={contentStyle}
    >
      {content}
    </FontStyleShowcase>
    <FontStyleDetail>{name}</FontStyleDetail>
  </FontStyleContainer>
);

decorateAddons(storiesOf('Typography', module))
  .add('Font Families', () => (
    <FontStylesContainer>
      <h3 style={fontFamilyTitleStyle}>Poppins</h3>
      <FontStyle
        size={64}
        content={'Aa'}
        name={`Regular - ${fonts.fontWeight.regular}`}
        weight={fonts.fontWeight.regular}
      />
      <FontStyle
        size={64}
        content={'Aa'}
        name={`Medium - ${fonts.fontWeight.medium}`}
        weight={fonts.fontWeight.medium}
      />
      <FontStyle
        size={64}
        content={'Aa'}
        name={`Semi-Bold - ${fonts.fontWeight.semiBold}`}
        weight={fonts.fontWeight.semiBold}
      />
      <FontStyle
        size={64}
        content={'Aa'}
        name={`Bold - ${fonts.fontWeight.bold}`}
        weight={fonts.fontWeight.bold}
      />
    </FontStylesContainer>
  ))
  .add('Font Sizes', () => (
    <FontStylesContainer>
      <FontStyle
        content={'Aa'}
        name={`Extra Small - ${fonts.fontSizing.xSmall}px`}
        size={fonts.fontSizing.xSmall}
        weight={fonts.fontWeight.regular}
      />
      <FontStyle
        content={'Aa'}
        name={`Small - ${fonts.fontSizing.small}px`}
        size={fonts.fontSizing.small}
        weight={fonts.fontWeight.regular}
      />
      <FontStyle
        content={'Aa'}
        name={`Medium - ${fonts.fontSizing.medium}px`}
        size={fonts.fontSizing.medium}
        weight={fonts.fontWeight.regular}
      />
      <FontStyle
        content={'Aa'}
        name={`Large - ${fonts.fontSizing.large}px`}
        size={fonts.fontSizing.large}
        weight={fonts.fontWeight.regular}
      />
      <FontStyle
        content={'Aa'}
        name={`Extra Large - ${fonts.fontSizing.xLarge}px`}
        size={fonts.fontSizing.xLarge}
        weight={fonts.fontWeight.regular}
      />
    </FontStylesContainer>
  ))
  .add('Font Leading', () => (
    <FontStylesContainer>
      <FontStyle
        name={`Extra Small - ${fonts.fontLeading.xSmall}px`}
        size={fonts.fontSizing.medium}
        weight={fonts.fontWeight.regular}
        leading={fonts.fontLeading.small}
        contentStyle={paragraphStyle}
        content={paragraph}
      />
      <FontStyle
        name={`Small - ${fonts.fontLeading.small}px`}
        size={fonts.fontSizing.medium}
        weight={fonts.fontWeight.regular}
        leading={fonts.fontLeading.small}
        contentStyle={paragraphStyle}
        content={paragraph}
      />
      <FontStyle
        name={`Medium - ${fonts.fontLeading.medium}px`}
        size={fonts.fontSizing.medium}
        weight={fonts.fontWeight.regular}
        leading={fonts.fontLeading.medium}
        contentStyle={paragraphStyle}
        content={paragraph}
      />
      <FontStyle
        name={`Large - ${fonts.fontLeading.large}px`}
        size={fonts.fontSizing.medium}
        weight={fonts.fontWeight.regular}
        leading={fonts.fontLeading.large}
        contentStyle={paragraphStyle}
        content={paragraph}
      />
      <FontStyle
        name={`Extra Large - ${fonts.fontLeading.xLarge}px`}
        size={fonts.fontSizing.medium}
        weight={fonts.fontWeight.regular}
        leading={fonts.fontLeading.xLarge}
        contentStyle={paragraphStyle}
        content={paragraph}
      />
    </FontStylesContainer>
  ));
