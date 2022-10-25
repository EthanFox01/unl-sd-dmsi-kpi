import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom';
import { History } from 'history';
import ImportFileScreen from "./components/ImportFileScreen";
import { DashboardScreen } from './screens/DashboardScreen';
import ChartViewerScreen from './screens/ChartViewerScreen';

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
      <Switch>
        <Route path="/viewer" component={ChartViewerScreen}/>
        <Route path="/dashboard" component={DashboardScreen} />
        <Route path="/" component={ImportFileScreen} />
      </Switch>
    </Router>
  );
}

export default App;
