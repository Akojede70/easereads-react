import { clearCredentials } from "../redux/auth-slice";
import { store } from "../redux/store";



export const handleBadToken = () => { 
  // Clear everything in local storage
  localStorage.clear();
  // Reset Redux state and clear everything dispatched to redux
 store.dispatch(clearCredentials());
  window.location.href = '/';
};