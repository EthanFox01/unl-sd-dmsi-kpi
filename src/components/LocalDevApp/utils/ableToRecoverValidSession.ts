import { ForceSessionData } from '../../../@types/force';

const ableToRecoverValidSession = (setSessionState: (value: ForceSessionData) => void) => {
  if (!localStorage.getItem('sessionExpTime')) return false;

  const sessionIsExpired =
    parseInt(localStorage.getItem('sessionExpTime')!, 10) < new Date().getTime();
  if (sessionIsExpired) return false;

  const sessionString = localStorage.getItem('session');
  if (!sessionString) return false;
  setSessionState(JSON.parse(sessionString) as ForceSessionData);
  return true;
};

export default ableToRecoverValidSession;
