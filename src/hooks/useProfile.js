import { useQuery } from 'react-query';
import api from '../services/api';

const getProfile = async (username) => {
  const { data } = await api.get(`users/${username}`);
  return data;
};

export default function useProfile(username) {
  return useQuery(['profile', username], () => getProfile(username));
}
