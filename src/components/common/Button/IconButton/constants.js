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

export const sizes = {
  xSmall: {
    icon: 16,
    container: 16,
  },
  small: {
    icon: 20,
    container: 24,
  },
  medium: {
    icon: 30,
    container: 36,
  },
  large: {
    icon: 44,
    container: 52,
  },
  xLarge: {
    icon: 62,
    container: 72,
  },
};

export const shadowTypes = shadows.depth;

export const defaultShadowType = 'none';
export const defaultColor = 'black';
export const defaultSize = 'medium';
