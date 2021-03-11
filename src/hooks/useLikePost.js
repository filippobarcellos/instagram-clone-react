import api from '../services/api';
import { useMutation } from 'react-query';

export default function useLikePost() {
  return useMutation((id) => api.post(`posts/${id}/like`));
}
