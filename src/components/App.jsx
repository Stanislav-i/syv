import { Suspense, lazy, useState } from "react";
import { Header } from "./Header/Header"
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader";
import ModalWindow from "./ModalWindow/ModalWindow";
import { useSelector } from "react-redux";
import { selectShowModal } from "redux/carsListSlice";
import { GoTopBtn } from "pages/Catalog/Catalog.styled";
import Footer from "./Footer/Footer";


const HomePage = lazy(()=> import("pages/Home/Home"));
const CatalogPage = lazy(()=> import("pages/Catalog/Catalog"));
const FavouritesPage = lazy(()=> import("pages/Favourites/Favourites"));

export const App = () => {
  const isModalOpen = useSelector(selectShowModal);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 

  const handleGoToFirstPageBtnClick = () => {
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    })
  };

  window.addEventListener('scroll', toggleVisible); 

  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
    }}>
      <Header />
      <GoTopBtn style={{display: visible ? 'inline' : 'none'}} onClick={handleGoToFirstPageBtnClick}>&uarr;</GoTopBtn>
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
      <Footer />
    </div>
  );
};