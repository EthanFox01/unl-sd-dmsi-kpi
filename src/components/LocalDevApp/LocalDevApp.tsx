import React, { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';

import App from '../../App';
import { ForceSessionData } from '../../@types/force';
import { ableToRecoverValidSession, createNewSession } from './utils';

const LocalDevApp = () => {
  const history = createBrowserHistory();
  const [session, setSession] = useState<ForceSessionData>();
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const initializeLocalApp = async () => {
      if (ableToRecoverValidSession(setSession)) return;
      await createNewSession(setSession, setMessage);
    };
    console.log('running local app stuff');
    initializeLocalApp().catch(console.error);
  }, []);

  return session ? <App sessionData={session} history={history} /> : <div>{message}</div>;
};

export default LocalDevApp;
