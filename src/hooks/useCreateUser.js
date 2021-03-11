import api from '../services/api';
import { useMutation } from 'react-query';

export default function useCreateUser() {
  return useMutation((data) => api.post('users', data));
}
