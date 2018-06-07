// @flow
import * as React from 'react';

type Props = {
  title: string,
};

const App: React.ComponentType<any> = (props: Props): React.Node => (
  <div>{props.title}</div>
);

export default App;
