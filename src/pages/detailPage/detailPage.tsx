import { useNavigate, useParams } from "react-router-dom";
import { DetalizedCard } from "../../components/detalizedCard/detalizedCard";
import style from "./detailPage.module.scss";
import { useDispatch } from "../../services/store";
import { useEffect } from "react";
import { getCard, getCardById } from "../../services/cardsSlice";
import { useSelector } from "../../services/store";

export const DetailPage = () => {
  const navigate = useNavigate();
	const dispatch = useDispatch();
  const { cardId } = useParams();
  const card = useSelector(getCard);

  useEffect(() => {
    if (cardId) {
      dispatch(getCardById(cardId));
    }
  }, [cardId, dispatch]);

  return (
    <div className={style.detailPage}>
      <button className={style.detailPage__button} onClick={() => navigate(-1)}>
        Назад
      </button>
      <DetalizedCard title={card.alt_description} imageUrl={card.urls.regular} />
    </div>
  );
};
