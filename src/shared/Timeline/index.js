import { Instagram } from 'react-content-loader';
import useFeed from '../../hooks/useFeed';
import Post from '../Post';

import * as S from './styles';

const Timeline = () => {
  const { data, status } = useFeed();

  return (
    <S.Container>
      {status === 'loading' && <Instagram />}
      {data?.length === 0 && (
        <span>You need to follow users to see their photos</span>
      )}
      {data?.map((post) => (
        <Post data={post} key={post.id} limitComments={3} />
      ))}
    </S.Container>
  );
};

export default Timeline;
