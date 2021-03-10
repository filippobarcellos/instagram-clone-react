import LikeButton from '../LikeButton';
import Comments from '../Comments';
import AddComment from '../AddComment';

import * as S from './styles';

const Article = ({ article }) => {
  return (
    <S.Article key={article.id}>
      <header>
        <img
          src={`http://localhost:3333/files/${article.user.image}`}
          alt={article.user.username}
        />
        <strong>{article.user.username}</strong>
      </header>

      <S.ArticlePhoto>
        <img
          src={`http://localhost:3333/files/${article.image}`}
          alt={article.description}
        />
      </S.ArticlePhoto>

      <div>
        <S.Widgets>
          <LikeButton id={article.id} likes={article.likes} />
          <strong>{article.likesCount} likes</strong>
        </S.Widgets>

        <S.Description>
          <strong>{article.user.username}</strong>
          <span>{article.description}</span>
        </S.Description>

        <Comments comments={article.comments} />

        <S.Hour>4 horas atras</S.Hour>

        <AddComment id={article.id} />
      </div>
    </S.Article>
  );
};

export default Article;
