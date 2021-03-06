import api from '../services/api';
import { useMutation, useQueryClient } from 'react-query';

export default function useFollowUser() {
  const queryClient = useQueryClient();

  return useMutation((user) => api.put(`users/${user.id}/unfollow`), {
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
    },
  });
}
