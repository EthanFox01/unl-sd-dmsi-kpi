import { ForceSessionData } from '../../../@types/force';
import loginFetch from './loginFetch';
import sessionFetch from './sessionFetch';
import { LoginType } from '../LocalDevApp.types';

const NEXT_DAY = 24 * 60 * 60 * 1000;

const createNewSession = async (
  setSessionState: (value: ForceSessionData) => void,
  username: string,
  password: string,
) => {
  if (!username || !password) {
    return;
  }
  const resp = await loginFetch(username, password);
  const loginData = (await resp.json()) as LoginType;
  const defaultBranch = loginData.data.login.InitialBranch;
  const sessionResp = await sessionFetch(defaultBranch);
  const sessData = (await sessionResp.json()) as { data: ForceSessionData };
  const tomorrow = new Date().setHours(0, 0, 0, 0) + NEXT_DAY;
  const forceSessionData = { ...sessData?.data, defaultBranch };

  localStorage.setItem('session', JSON.stringify(forceSessionData));
  localStorage.setItem('sessionExpTime', `${tomorrow}`);
  setSessionState(forceSessionData);
};

export default createNewSession;
