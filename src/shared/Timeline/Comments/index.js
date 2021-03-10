import * as S from './styles';

const Comments = ({ comments }) => {
  return (
    <S.Container>
      {comments.map((comment, index) => (
        <S.Comment key={comment.id}>
          <strong>{comment.user.username}</strong>
          <span>{comment.text}</span>
        </S.Comment>
      ))}
    </S.Container>
  );
};

export default Comments;
