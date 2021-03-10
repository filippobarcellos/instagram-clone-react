import { useState } from 'react';
import useAddComment from '../../../hooks/useAddComment';

import * as S from './styles';

import Input from '../../Input';
import Button from '../../Button';

const AddComment = ({ id }) => {
  const [comment, setComment] = useState('');
  const { mutate: addComment } = useAddComment();

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ id: id, comment: comment });
    setComment('');
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ border: 'none' }}
        />
        <Button type="submit" variant="secondary" disabled={!comment}>
          Post
        </Button>
      </form>
    </S.Container>
  );
};

export default AddComment;
