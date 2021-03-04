import Header from '../../components/Header';
import Timeline from '../../components/Timeline';
import Sidebar from '../../components/Sidebar';

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
