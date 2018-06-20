import React from 'react';
import styled from 'styled-components';

import { setDefaults } from 'react-storybook-addon-props-combinations';
import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';

import 'loki/configure-react';

const PropComboContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
`;

setAddon(JSXAddon);

setOptions({
  name: 'Givelify BGA',
  addonPanelInRight: true,
  url: 'https://github.com/Givelify/browser-giving-app',
});

setDefaults({
  showSource: false,
  CombinationRenderer: ({ Component, props, options }) => (
    <PropComboContainer>
      <Component {...props} />
    </PropComboContainer>
  ),
});

const req = require.context('./stories', true, /\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
