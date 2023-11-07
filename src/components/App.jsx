import { Suspense, lazy } from "react";
import { Header } from "./Header/Header"
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader";
import ModalWindow from "./ModalWindow/ModalWindow";
import { useSelector } from "react-redux";
import { selectShowModal } from "redux/carsListSlice";


const HomePage = lazy(()=> import("pages/Home/Home"));
const CatalogPage = lazy(()=> import("pages/Catalog/Catalog"));
const FavouritesPage = lazy(()=> import("pages/Favourites/Favourites"));

export const App = () => {
  const isModalOpen = useSelector(selectShowModal)

  return (
    <>
      <Header />
      {isModalOpen && <ModalWindow />}
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};