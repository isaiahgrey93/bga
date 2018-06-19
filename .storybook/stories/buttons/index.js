import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';

import { SolidButton } from 'components';
import { bgColors } from 'components/Button/SolidButton/constants';

decorateAddons(storiesOf('Buttons', module)).addWithJSX('Solid Button', () => (
  <SolidButton
    onClick={() => null}
    value={text('Label', 'Sign Up')}
    color={select('Color', Object.keys(bgColors), 'black')}
    raised={select(
      'Shadow Depth',
      { 0: 'None', 1: 'Low', 2: 'Medium', 3: 'High' },
      0
    )}
  />
));
