import { useParams } from 'react-router-dom';

import usePost from '../../hooks/usePost';
import DefaultLayout from '../_layouts/Default';
import Post from '../../shared/Post';

import * as S from './styles';

const PostPage = () => {
  const { id } = useParams();
  const { data, status } = usePost(id);

  return (
    <DefaultLayout>
      <S.Wrapper>
        {status === 'loading' && <p>Loading</p>}
        {data && <Post data={data} fullStyle />}
      </S.Wrapper>
    </DefaultLayout>
  );
};

export default PostPage;
