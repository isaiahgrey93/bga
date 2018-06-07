import React from 'react';
import { storiesOf } from '@storybook/react';

import { Centered } from 'story-decorators';

storiesOf('Button', module)
  .addDecorator(Centered)
  .add('basic', () => <button>Submit</button>);
