import Header from '../../shared/Header';
import Timeline from '../../shared/Timeline';
import Sidebar from '../../shared/Sidebar';

import * as S from './styles';

function Feed() {
  return (
    <>
      <Header />
      <S.Content>
        <Timeline />
        <Sidebar />
      </S.Content>
    </>
  );
}

export default Feed;
