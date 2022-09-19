import React from 'react';
import { Router } from 'react-router-dom';
import { History } from 'history';

import { ForceSessionData } from './@types/force';

function App({
  history,
  sessionData,
}: {
  history: History<unknown>;
  sessionData?: ForceSessionData;
}) {
  return (
    <Router history={history}>
      <div>Hello World</div>
    </Router>
  );
}

export default App;
