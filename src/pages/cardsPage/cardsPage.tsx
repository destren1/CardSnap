import { FC } from "react";
import { CardList } from "../../components/card-list/card-list";
import {
  getShowOnlyLikedState,
  setOnlyShowLiked,
  UnsplashPhoto,
} from "../../services/cardsSlice";
import style from "./cardsPage.module.scss";
import { useDispatch, useSelector } from "../../services/store";

interface CardsPageProps {
  cards: UnsplashPhoto[];
}

export const CardsPage: FC<CardsPageProps> = ({ cards }) => {
  const dispatch = useDispatch();
  const showOnlyLiked = useSelector(getShowOnlyLikedState);

  const handleCheckBoxChange = () => {
    dispatch(setOnlyShowLiked());
  };

  const filteredCards = showOnlyLiked
    ? cards.filter((card) => card.isLiked === true)
    : cards;

  return (
    <div className={style.cardsPage}>
      <label className={style.cardsPage__filter}>
        Только избранное
        <input
          type="checkbox"
          checked={showOnlyLiked}
          onChange={handleCheckBoxChange}
        />
      </label>
      <CardList cards={filteredCards} />
    </div>
  );
};
