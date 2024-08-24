import { FC } from "react";
import { CardList } from "../../components/card-list/card-list";
import { UnsplashPhoto } from "../../services/cardsSlice";
import style from "./cardsPage.module.scss";

interface CardsPageProps {
  cards: UnsplashPhoto[];
}

export const CardsPage: FC<CardsPageProps> = ({ cards }) => {
  return (
    <div className={style.cardsPage}>
      <label className={style.cardsPage__filter}>
        Только избранное
        <input type="checkbox" />
      </label>
      <CardList cards={cards} />
    </div>
  );
};
