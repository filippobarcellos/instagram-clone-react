import { useQuery } from 'react-query';
import api from '../services/api';

const getProfiles = async () => {
  const { data } = await api.get('profiles');
  return data;
};

export default function useProfiles() {
  return useQuery('profiles', getProfiles);
}
