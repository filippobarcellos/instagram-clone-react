import api from '../services/api';
import { useMutation, useQueryClient } from 'react-query';

export default function useUnlikePost() {
  const queryClient = useQueryClient();

  return useMutation((id) => api.delete(`posts/${id}/unlike`), {
    onSuccess: () => {
      queryClient.invalidateQueries('feed');
    },
  });
}
