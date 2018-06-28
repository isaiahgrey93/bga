import React from 'react';

import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import { withState } from '@dump247/storybook-state';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { button } from '@storybook/addon-knobs';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { Card, RadioGroup, RadioOption } from 'components';

const options = [
  {
    label: 'None',
    value: 'NONE',
  },
  {
    label: 'Daily',
    value: 'DAILY',
  },
  {
    label: 'Weekly',
    value: 'WEEKLY',
  },
  {
    label: 'Every Two Weeks',
    value: 'BIWEEKLY',
  },
  {
    label: 'Twice a month (1st & 16th)',
    value: 'BIMONTHLY',
  },
  {
    label: 'Monthly',
    value: 'MONTHLY',
  },
];

decorateAddons(storiesOf('Radio/Group', module))
  .addWithJSX('Component - options as children', () => (
    <RadioGroup>
      {options.map(option => (
        <RadioOption
          key={option.value}
          onSelect={storyAction('onSelect')}
          {...option}
        />
      ))}
    </RadioGroup>
  ))
  .addWithJSX('Component - options as object array', () => (
    <RadioGroup onSelect={storyAction('onSelect')} options={options} />
  ))
  .add(
    'Controlled',
    withState({ selected: options[0].value })(({ store }) => {
      const selectOption = value => store.set({ selected: value });

      button('Reset Selection', () =>
        store.set({ selected: options[0].value })
      );

      return (
        <RadioGroup
          options={options}
          onSelect={selectOption}
          selected={store.state.selected}
        />
      );
    })
  )
  .add(
    'Prop Combinations',
    withPropsCombinations(RadioGroup, {
      selected: [undefined, options[0].value],
      options: [options],
      children: [
        undefined,
        options.map(option => (
          <RadioOption
            key={option.value}
            onSelect={storyAction('onSelect')}
            {...option}
          />
        )),
        options.map(option => (
          <RadioOption
            key={option.value}
            selected={options[0].value}
            onSelect={storyAction('onSelect')}
            {...option}
          />
        )),
      ],
    })
  );
