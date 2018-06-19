import backgrounds from '@storybook/addon-backgrounds';

import { colors } from 'theme';

export default backgrounds([
  { name: 'White', value: colors.white, default: true },
  { name: 'Grey', value: colors.grey6 },
  { name: 'Blue', value: colors.primaryBlue },
]);
