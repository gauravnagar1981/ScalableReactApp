import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import NavigationMenu from './components/navigation';

export default (
  <Route path="/" component={App}>
      <Route path="menu" component={NavigationMenu} />
  </Route>
);
