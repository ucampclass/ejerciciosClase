export const setToken = (infoUser) => {
  const value = JSON.stringify(infoUser);
  localStorage.setItem("token", value);
};

export const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};
