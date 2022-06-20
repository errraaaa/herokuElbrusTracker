const { REACT_APP_HOST: host } = process.env;

export const signUp = () => `${host}/signup`;
export const signIn = () => `${host}/signin`;
export const signOut = () => `${host}/auth/signout`;
export const checkAuth = () => `${host}/auth/check`;

export const getAllUsers = () => `${host}/users`;
export const editUser = (id) => `${host}/users/${id}`;
export const getUser = (id) => `${host}/users/${id}`;
