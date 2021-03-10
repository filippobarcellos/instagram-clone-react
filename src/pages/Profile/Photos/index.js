import { Link } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';
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

          <Link to="/test">
            <div>
              <span>
                <BsHeartFill size={22} />
                <p>40</p>
              </span>

              <span>
                <BsHeartFill size={22} />
                <p>40</p>
              </span>
            </div>
          </Link>
        </S.Photo>
      ))}
    </S.PhotosList>
  );
};

export default Photos;
