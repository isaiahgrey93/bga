import { colors, gradients, shadows } from 'theme';

export const backgroundColors = {
  black: colors.black,
  transparent: colors.transparent,
  muted: colors.grey5,
  white: colors.white,
  blue: colors.primaryBlue,
  primary: gradients.primary,
  secondary: gradients.secondary,
};

export const textColors = {
  black: colors.white,
  transparent: colors.black,
  muted: colors.black,
  white: colors.black,
  blue: colors.white,
  primary: colors.white,
  secondary: colors.white,
};

export const buttonSizes = {
  small: {
    text: 11,
    container: 32,
  },
  medium: {
    text: 13,
    container: 40,
  },
  large: {
    text: 15,
    container: 56,
  },
};

export const shadowTypes = shadows.depth;

export const defaultShadowType = 'none';
export const defaultBackgroundColor = 'black';
export const defaultButtonSize = 'medium';
