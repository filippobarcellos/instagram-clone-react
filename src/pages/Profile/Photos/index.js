import { Link } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';
import * as S from './styles';

const Photos = ({ posts }) => {
  return (
    <S.PhotosList>
      {posts.length === 0 && <span>Share you first photo.</span>}
      {posts.map((post) => (
        <S.Photo key={post.id}>
          <img
            src={`https://instagram-clone-prisma-api.herokuapp.com/files/${post.image}`}
            alt={post.description}
          />
          <Link to={`/p/${post.id}`}>
            <div>
              <span>
                <BsHeartFill size={22} />
                <p>{post.comments.length}</p>
              </span>

              <span>
                <BsHeartFill size={22} />
                <p>{post.likesCount}</p>
              </span>
            </div>
          </Link>
        </S.Photo>
      ))}
    </S.PhotosList>
  );
};

export default Photos;
