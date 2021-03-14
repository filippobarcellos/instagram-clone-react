import { createContext, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@instagram:user');
    const token = localStorage.getItem('@instagram:token');

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        user: JSON.parse(user),
        token,
      };
    }

    return {};
  });

  const login = async ({ email, password }) => {
    const response = await api.post('session', {
      email,
      password,
    });
    const { user, token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    localStorage.setItem('@instagram:user', JSON.stringify(user));
    localStorage.setItem('@instagram:token', token);

    setData({ user, token });
  };

  const logout = () => {
    setData({});
    localStorage.removeItem('@instagram:user');
    localStorage.removeItem('@instagram:token');
  };

  const updateUser = async (data) => {
    const response = await api.put('users', data);

    localStorage.setItem('@instagram:user', JSON.stringify(response.data));

    setData({
      token: data.token,
      user: response.data,
    });
  };

  const updateUserStorage = (user) => {
    localStorage.setItem('@instagram:user', JSON.stringify(user));

    setData({
      token: data.token,
      user: user,
    });
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, updateUser, updateUserStorage, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
