import backgrounds from '@storybook/addon-backgrounds';

import { colors, gradients } from 'theme';

export default backgrounds([
  {
    name: 'Default',
    value: `linear-gradient(135deg, ${colors.grey5} 0%, ${colors.grey6} 50%, ${
      colors.grey5
    } 100%)`,
    default: true,
  },
  { name: 'White', value: colors.white },
  { name: 'Grey', value: colors.grey6 },
  { name: 'Blue', value: colors.primaryBlue },
  { name: 'Primary Gradient', value: gradients.primary },
  { name: 'Secondary Gradient', value: gradients.secondary },
]);
