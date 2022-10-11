import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom';
import { History } from 'history';
import ImportFileScreen from "./components/ImportFileScreen";
import { DashboardScreen } from './screens/DashboardScreen';
import ChartViewerScreen from './components/screen/ChartViewerScreen';

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
      {/* <DashboardScreen /> */}
      {/*<div><ImportFileScreen/></div> */}
      <Switch>
        <Route path="/import" component={ImportFileScreen} />
        <Route path="/viewer" component={ChartViewerScreen}/>
        <Route path="/" component={DashboardScreen} />
      </Switch>
    </Router>
  );
}

export default App;
