import Header from '../../components/Header';
import Timeline from '../../components/Timeline';

import * as S from './styles';

function Feed() {
  return (
    <>
      <Header />
      <S.Content>
        <Timeline />
        <aside>Teste</aside>
      </S.Content>
    </>
  );
}

export default Feed;
