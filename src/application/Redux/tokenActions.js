
export const setToken = (token, userId) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
  return {
    type: 'SET_TOKEN',
    payload: { token, userId },
  };
};

export const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return {
    type: 'REMOVE_TOKEN',
  };
};


export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

