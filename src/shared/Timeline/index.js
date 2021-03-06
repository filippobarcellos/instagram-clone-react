import { FiHeart } from 'react-icons/fi';
import Input from '../Input';
import Button from '../Button';

import * as S from './styles';

const Timeline = () => {
  return (
    <S.Container>
      <S.Article>
        <header>
          <img
            src="https://scontent-lhr8-2.cdninstagram.com/v/t51.2885-19/s150x150/51849642_2029589913763268_240543882545201152_n.jpg?tp=1&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_ohc=1SDcLgC6wRIAX8c0l5L&oh=1eccbb2ebd18e008dea723dd6b2145f3&oe=606751EC"
            alt="Filippo"
          />
          <strong>filippobarcellos</strong>
        </header>

        <S.ArticlePhoto>
          <img
            src="https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80"
            alt="algo"
          />
        </S.ArticlePhoto>

        <div>
          <S.Widgets>
            <FiHeart size={22} />
            <strong>35 likes</strong>
          </S.Widgets>

          <S.Description>
            <strong>filippobarcellos</strong>
            <span>What's your definition of a custom meal??</span>
          </S.Description>
          <S.Hour>4 horas atras</S.Hour>
          <S.Comments></S.Comments>
          <S.AddComment>
            <form>
              <Input type="text" placeholder="Add a comment..." noBorder />
              <Button type="submit" variant="secondary" disabled>
                Post
              </Button>
            </form>
          </S.AddComment>
        </div>
      </S.Article>
    </S.Container>
  );
};

export default Timeline;
