import React from 'react';

import { Donee, } from 'stores';

export default () => (
  <Donee.Profile fetch donee={'1071226100775949'}>
    {profile => JSON.stringify(profile)}
  </Donee.Profile>
);
