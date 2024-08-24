import { FC } from "react";
import styles from "./card.module.scss";

interface CardProps {
  id: string;
  title: string;
  imageUrl: string;
  likes: string;
  onCardClick: (id: string) => void;
  handleDeleteClick: (e: React.MouseEvent) => void;
  isLiked: boolean;
  handleLikeClick: (e: React.MouseEvent) => void;
}

export const CardUI: FC<CardProps> = ({
  id,
  title,
  imageUrl,
  likes,
  onCardClick,
  handleDeleteClick,
  isLiked,
  handleLikeClick,
}) => (
  <li className={styles.card} onClick={() => onCardClick(id)}>
    <img className={styles.card__image} src={imageUrl} alt={title} />
    <button
      type="button"
      className={styles["card__delete-button"]}
      onClick={handleDeleteClick}
    ></button>
    <div className={styles.card__description}>
      <h2 className={styles.card__title}>{title}</h2>
      <div className={styles.card__container}>
        <button
          type="button"
          className={`${styles["card__like-button"]} ${
            isLiked ? styles["card__like-button--is-active"] : ""
          }`}
          onClick={handleLikeClick}
        ></button>
        <p className={styles.card__likes}>{likes}</p>
      </div>
    </div>
  </li>
);
