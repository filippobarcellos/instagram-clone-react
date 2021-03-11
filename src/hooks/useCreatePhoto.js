import api from '../services/api';
import { useMutation } from 'react-query';

export default function useAddComment() {
  return useMutation((data) => api.post(`posts`, data));
}
