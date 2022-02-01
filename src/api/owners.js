import http from './http';
import { clearSession, setSession } from './session';

export async function ownerSignUp(payload) {
  try {
    const { data: response } = await http.post('/owners/signup', payload);
    const { meta } = response;
    const { token } = meta;
    setSession(token);
    return response;
  } catch (error) {
    return error;
  }
}
export async function ownerSignIn(payload) {
  try {
    const { data: response } = await http.post('/owners/signin', payload);
    const { meta } = response;
    const { token } = meta;
    setSession(token);
    return response;
  } catch (error) {
    return error;
  }
}

export function signOut() {
  clearSession();
}
