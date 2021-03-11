import * as S from './styles';

const Comments = ({ comments, limit }) => {
  return (
    <S.Container>
      {comments.slice(0, limit || comments.length).map((comment) => (
        <S.Comment key={comment.id}>
          <strong>{comment.user.username}</strong>
          <span>{comment.text}</span>
        </S.Comment>
      ))}
    </S.Container>
  );
};

export default Comments;
