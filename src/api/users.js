import http from './http';
import { clearSession, setSession } from './session';

export async function signUp(payload) {
  try {
    const { data: response } = await http.post('/users/signup', payload);
    const { meta } = response;
    const { token } = meta;
    setSession(token);
    return response;
  } catch (error) {
    return error;
  }
}
export async function signIn(payload) {
  try {
    const { data: response } = await http.post('/users/signin', payload);
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
