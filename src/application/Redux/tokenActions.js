
export const setToken = (token, userId) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('userId', userId);
  return {
    type: 'SET_TOKEN',
    payload: { token, userId },
  };
};

export const removeToken = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userId');
  return {
    type: 'REMOVE_TOKEN',
  };
};


export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

