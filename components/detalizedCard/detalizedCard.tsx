import { FC } from "react";
import styles from "./detalizedCard.module.scss";

interface DetalizedCardProps {
  title: string;
  imageUrl: string;
}

export const DetalizedCard: FC<DetalizedCardProps> = ({ title, imageUrl }) => (
  <div className={styles.card}>
    <img className={styles.card__image} src={imageUrl} alt={title} />
    <div className={styles.card__description}>
      <h2 className={styles.card__title}>{title}</h2>
    </div>
  </div>
);
