import api from '../services/api';
import { useMutation, useQueryClient } from 'react-query';

export default function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation(
    (values) => api.put(`posts/${values.id}/comment`, { text: values.comment }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('profile');
      },
    }
  );
}
