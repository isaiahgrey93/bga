import React from 'react';

import { storiesOf } from '@storybook/react';
import { header } from 'story-decorators';

import { Button } from 'components';

storiesOf('Buttons', module)
  .addDecorator(header({ title: 'Buttons' }))
  .add('Solid', () => (
    <Button
      raised
      type={'solid'}
      value={'Sign Up'}
      color={'primary'}
      onClick={() => alert('woot')}
    />
  ))
  .add('Outline', () => (
    <Button
      value={'Login'}
      type={'outline'}
      color={'primary'}
      onClick={() => alert('woot')}
    />
  ))
  .add('Wrapper', () => (
    <Button
      type={'wrapper'}
      value={'Use a different address'}
      onClick={() => alert('woot')}
    />
  ));
