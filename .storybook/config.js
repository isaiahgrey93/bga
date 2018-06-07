import { configure, } from '@storybook/react';

const req = require.context('./stories', true, /\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
