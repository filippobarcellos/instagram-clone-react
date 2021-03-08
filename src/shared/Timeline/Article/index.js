import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/useAuth';

import LikeButton from './LikeButton';
import Input from '../../Input';
import Button from '../../Button';

import * as S from './styles';

const Article = ({ article }) => {
  const { user } = useAuth();

  return (
    <S.Article key={article.id}>
      <header>
        <img
          src={`http://localhost:3333/files/${article.User.image}`}
          alt={article.User.username}
        />
        <strong>{article.User.username}</strong>
      </header>

      <S.ArticlePhoto>
        <img
          src="https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80"
          alt="algo"
        />
      </S.ArticlePhoto>

      <div>
        <S.Widgets>
          <LikeButton id={article.id} likes={article.likes} />
          <strong>{article.likesCount} likes</strong>
        </S.Widgets>

        <S.Description>
          <strong>{article.User.username}</strong>
          <span>{article.description}</span>
        </S.Description>
        <S.Hour>4 horas atras</S.Hour>
        <S.Comments></S.Comments>
        <S.AddComment>
          <form>
            <Input type="text" placeholder="Add a comment..." noborder />
            <Button type="submit" variant="secondary" disabled>
              Post
            </Button>
          </form>
        </S.AddComment>
      </div>
    </S.Article>
  );
};

export default Article;
