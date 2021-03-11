import api from '../services/api';
import { useMutation } from 'react-query';

export default function useUnlikePost() {
  return useMutation((id) => api.delete(`posts/${id}/unlike`));
}
