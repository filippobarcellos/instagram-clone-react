import * as S from './styles';

const Photos = ({ posts }) => {
  return (
    <S.PhotosList>
      {posts.map((post) => (
        <S.Photo key={post.id}>
          <img
            src={`http://localhost:3333/files/${post.image}`}
            alt={post.description}
          />
        </S.Photo>
      ))}
    </S.PhotosList>
  );
};

export default Photos;
