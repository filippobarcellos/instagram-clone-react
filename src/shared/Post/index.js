import { Link } from 'react-router-dom';

import LikeButton from './LikeButton';
import Comments from './Comments';
import AddComment from './AddComment';

import * as S from './styles';

const Post = ({ data, fullStyle, limitComments }) => {
  return (
    <S.Article key={data.id} fullStyle={fullStyle}>
      <header>
        <Link to={`/${data.user.username}`}>
          <img
            src={
              data.user.image
                ? `https://instagram-clone-prisma-api.herokuapp.com/files/${data.user.image}`
                : `https://eu.ui-avatars.com/api/?name=${data.user.username}`
            }
            alt={data.user.username}
          />
          <strong>{data.user.username}</strong>
        </Link>
      </header>

      <S.ArticlePhoto>
        <Link to={`/p/${data.id}`}>
          <img
            src={`https://instagram-clone-prisma-api.herokuapp.com/files/${data.image}`}
            alt={data.description}
          />
        </Link>
      </S.ArticlePhoto>

      <S.ArticleInfo>
        <S.ArticleWidgets>
          <LikeButton
            id={data.id}
            likes={data.likes}
            likesCount={data.likesCount}
          />
        </S.ArticleWidgets>

        <S.ArticleDescription>
          <strong>{data.user.username}</strong>
          <span>{data.description}</span>
        </S.ArticleDescription>

        <S.ArticleComments>
          <Comments comments={data.comments} limit={limitComments} />
        </S.ArticleComments>

        <S.ArticleAddComment>
          <AddComment id={data.id} />
        </S.ArticleAddComment>
      </S.ArticleInfo>
    </S.Article>
  );
};

export default Post;
