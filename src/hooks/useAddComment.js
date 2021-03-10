import api from '../services/api';
import { useMutation, useQueryClient } from 'react-query';

export default function useAddComment() {
  const queryClient = useQueryClient();

  return useMutation(
    (values) =>
      api.post(`posts/${values.id}/comment`, { text: values.comment }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('feed');
      },
    }
  );
}
