import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardUI } from "../ui/card/cardUI";
import { useDispatch } from "react-redux";
import { deleteCardById, likeCard } from "../../services/cardsSlice";

interface CardProps {
  id: string;
  title: string;
  imageUrl: string;
  likes: string;
}

export const Card: FC<CardProps> = ({ id, title, imageUrl, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCardClick = (id: string) => {
    navigate(`/${id}`);
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    dispatch(likeCard({ id, liked: isLiked }));
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteCardById(id));
  };

  return (
    <CardUI
      id={id}
      title={title}
      imageUrl={imageUrl}
      likes={likes}
      onCardClick={onCardClick}
      handleLikeClick={handleLikeClick}
      handleDeleteClick={handleDeleteClick}
      isLiked={isLiked}
    />
  );
};
