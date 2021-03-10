import DefaultLayout from '../_layouts/Default';
import Timeline from '../../shared/Timeline';
import Sidebar from '../../shared/Sidebar';

import * as S from './styles';

function Feed() {
  return (
    <DefaultLayout>
      <S.Content>
        <Timeline />
        <Sidebar />
      </S.Content>
    </DefaultLayout>
  );
}

export default Feed;
