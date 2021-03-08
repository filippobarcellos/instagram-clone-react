import Article from './Article';

import * as S from './styles';

const Timeline = ({ data }) => {
  return (
    <S.Container>
      {data?.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </S.Container>
  );
};

export default Timeline;
