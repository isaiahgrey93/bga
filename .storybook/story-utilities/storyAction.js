import { action } from '@storybook/addon-actions';

export default name => {
  const _action = action(name);
  _action.toString = () => name;

  return _action;
};
