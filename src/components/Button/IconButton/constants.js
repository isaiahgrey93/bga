import { colors, gradients, shadows, } from 'theme';

export const backgroundColors = {
  black: colors.black,
  transparent: colors.transparent,
  muted: colors.grey5,
  white: colors.white,
  blue: colors.primaryBlue,
  primary: gradients.primary,
  secondary: gradients.secondary,
};

export const iconColors = {
  black: colors.white,
  transparent: colors.black,
  muted: colors.black,
  white: colors.black,
  blue: colors.white,
  primary: colors.white,
  secondary: colors.white,
};

export const buttonSizes = {
  xSmall: {
    icon: 14,
    container: 20,
  },
  small: {
    icon: 20,
    container: 32,
  },
  medium: {
    icon: 22,
    container: 40,
  },
  large: {
    icon: 32,
    container: 56,
  },
};

export const shadowTypes = shadows.depth;

export const defaultShadowType = 'none';
export const defaultColor = 'black';
export const defaultButtonSize = 'medium';
