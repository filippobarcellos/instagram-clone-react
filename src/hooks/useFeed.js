import { useQuery } from 'react-query';
import api from '../services/api';

const getFeed = async () => {
  const { data } = await api.get('feed');
  return data;
};

export default function useFeed() {
  return useQuery('feed', getFeed);
}
