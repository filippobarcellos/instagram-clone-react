import api from '../services/api';
import { useMutation, useQueryClient } from 'react-query';

export default function useLikePost() {
  const queryClient = useQueryClient();

  return useMutation((id) => api.post(`posts/${id}/like`), {
    onSuccess: () => {
      queryClient.invalidateQueries('feed');
    },
  });
}
