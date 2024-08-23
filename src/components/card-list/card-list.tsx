import { FC } from "react";
import { Card } from "../card/card";
import { deleteCardById, UnsplashPhoto } from "../../services/cardsSlice";
import styles from "./card-list.module.scss";
import { useDispatch } from "../../services/store";

interface CardListProps {
  cards: UnsplashPhoto[];
}

export const CardList: FC<CardListProps> = ({ cards }) => {
  const dispatch = useDispatch();
	console.log(cards)
  const handleDelete = (id: string) => {
    dispatch(deleteCardById(id));
  };

  return (
    <ul className={styles.list}>
      {cards.map((card) => (
        <Card
          id={card.id}
          title={card.alt_description}
          imageUrl={card.urls.small}
					likes={card.likes}
          onCardClick={() => {}}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
