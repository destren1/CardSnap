import { useEffect } from "react";
import { AppHeader } from "./components/app-header/app-header";
import { Footer } from "./components/footer/footer";
import { useDispatch, useSelector } from "./services/store";
import { getAllCards, getCards } from "./services/cardsSlice";
import { CardList } from "./components/card-list/card-list";
import { Route, Routes } from "react-router-dom";
import { DetailPage } from "./pages/detailPage/detailPage";

function App() {
  const dispatch = useDispatch();
  const cards = useSelector(getAllCards);

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path="/" element={<CardList cards={cards} />} />
        <Route path="/:cardId" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
