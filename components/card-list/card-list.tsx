import { FC } from "react";
import { Card } from "../card/card";
import { UnsplashPhoto } from "../../services/cardsSlice";
import styles from "./card-list.module.scss";

interface CardListProps {
  cards: UnsplashPhoto[];
}

export const CardList: FC<CardListProps> = ({ cards }) => {
  return (
    <ul className={styles.list}>
      {cards.map((card) => (
        <Card
          id={card.id}
          title={card.alt_description}
          imageUrl={card.urls.small}
          likes={card.likes}
        />
      ))}
    </ul>
  );
};
