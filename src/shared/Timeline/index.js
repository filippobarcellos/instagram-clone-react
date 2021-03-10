import { Instagram } from 'react-content-loader';
import useFeed from '../../hooks/useFeed';
import Article from './Article';

import * as S from './styles';

const Timeline = () => {
  const { data, status } = useFeed();

  return (
    <S.Container>
      {status === 'loading' && <Instagram />}

      {data?.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </S.Container>
  );
};

export default Timeline;
