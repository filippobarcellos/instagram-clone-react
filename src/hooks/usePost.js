import { useQuery } from 'react-query';
import api from '../services/api';

const getPost = async (id) => {
  const { data } = await api.get(`posts/${id}`);
  return data;
};

export default function usePost(id) {
  return useQuery(['post', id], () => getPost(id));
}
