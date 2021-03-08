import useFeed from '../../hooks/useFeed';

import DefaultLayout from '../_layouts/Default';
import Timeline from '../../shared/Timeline';
import Sidebar from '../../shared/Sidebar';

import * as S from './styles';

function Feed() {
  const { data } = useFeed();

  return (
    <DefaultLayout>
      <S.Content>
        <Timeline data={data} />
        <Sidebar />
      </S.Content>
    </DefaultLayout>
  );
}

export default Feed;
