import { FC } from "react";
import { Card } from "../card/card";
import {
  getPendingState,
  getRequestState,
  UnsplashPhoto,
} from "../../services/cardsSlice";
import styles from "./card-list.module.scss";
import { useSelector } from "../../services/store";

interface CardListProps {
  cards: UnsplashPhoto[];
}

export const CardList: FC<CardListProps> = ({ cards }) => {
  const pending = useSelector(getPendingState);
  const request = useSelector(getRequestState);

  if (pending) {
    return <div className={styles.info}>Загрузка...</div>;
  }

  if (!request) {
    return (
      <div className={styles.info}>Ошибка: Не удалось загрузить карточки</div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className={styles.info}>
        У вас пока нет избранных карточек. Добавьте их, чтобы увидеть здесь!
      </div>
    );
  }

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
