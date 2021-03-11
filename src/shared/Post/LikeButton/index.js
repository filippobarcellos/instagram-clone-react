import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/useAuth';
import useLikePost from '../../../hooks/useLikePost';
import useUnlikePost from '../../../hooks/useUnlikePost';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const LikeButton = ({ id, likes, likesCount }) => {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [likesQtd, setLikesQtd] = useState(likesCount);

  const { mutate: likePost } = useLikePost();
  const { mutate: unLikePost } = useUnlikePost();

  const toggleLike = (id) => {
    if (isLiked) {
      unLikePost(id);
      setIsLiked(!isLiked);
      setLikesQtd((state) => state - 1);
    } else {
      likePost(id);
      setIsLiked(!isLiked);
      setLikesQtd((state) => state + 1);
    }
  };

  useEffect(() => {
    const l = likes.map((l) => l.userId).includes(user.id);
    setIsLiked(l);
  }, [likes, user.id]);

  return (
    <>
      {isLiked ? (
        <BsHeartFill size={22} color="#ED4956" onClick={() => toggleLike(id)} />
      ) : (
        <BsHeart size={22} onClick={() => toggleLike(id)} />
      )}
      <strong>{likesQtd} likes</strong>
    </>
  );
};

export default LikeButton;
