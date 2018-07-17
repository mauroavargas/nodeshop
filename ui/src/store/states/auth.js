const isLogged = () => localStorage.getItem('nodeshop-session-token') !== null;

export default {
  logged: isLogged(),
  user: {}
};
