import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CardUI } from "../ui/card/cardUI";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCardById,
  getAllCards,
  likeCard,
} from "../../services/cardsSlice";

interface CardProps {
  id: string;
  title: string;
  imageUrl: string;
  likes: string;
}

export const Card: FC<CardProps> = ({ id, title, imageUrl, likes }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cards = useSelector(getAllCards);
  const card = cards.find((card) => card.id === id);
  const isLiked = card?.isLiked;

  const onCardClick = (id: string) => {
    navigate(`/${id}`);
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
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
