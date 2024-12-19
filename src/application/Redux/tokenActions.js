
export const setToken = (token) => {
  localStorage.setItem('token', token);
  return {
    type: 'SET_TOKEN',
    payload: token,
  };
};

export const removeToken = () => {
  localStorage.removeItem('token');
  return {
    type: 'REMOVE_TOKEN',
  };
};
