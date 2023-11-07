import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'components/Loader';
import { Container } from 'components/Container';
import {
  goToFirstPage,
  loadMore,
  requestCarsThunk,
  selectAllCars,
  selectCarsError,
  selectCarsIsLoading,
  selectCarsPage,
  selectFilterValue,
  selectShowMoreButton,
} from 'redux/carsListSlice';
import CarCard from 'components/CarCard/CarCard';
import { BtnDiv, List, MoreBtn } from './Catalog.styled';
import MakeFilter from 'components/Filters/MakeFilter';

export const CatalogPage = () => {
  const allCars = useSelector(selectAllCars);
  const isLoading = useSelector(selectCarsIsLoading);
  const error = useSelector(selectCarsError);
  const page = useSelector(selectCarsPage);
  const showMoreButton = useSelector(selectShowMoreButton);
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allCars) {
      return;
    }
    dispatch(requestCarsThunk(1));
  }, [allCars, dispatch]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    dispatch(requestCarsThunk(page));
  }, [dispatch, page]);

  const handleLoadMoreBtnClick = () => {
    dispatch(loadMore());
  };
  const handleGoToFirstPageBtnClick = () => {
    dispatch(goToFirstPage());
  };

  const getFilteredCars = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return allCars?.filter(car =>
      car.make.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const showCars = Array.isArray(allCars) && allCars.length > 0;

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <p>Error occured... Error is {error}</p>}
      {showCars && <MakeFilter />}
      <List>
        {showCars &&
          getFilteredCars().map(
            ({
              id,
              make,
              model,
              rentalPrice,
              year,
              address,
              rentalCompany,
              type,
              img,
            }) => {
              return (
                <li key={id}>
                  <CarCard
                    id={id}
                    make={make}
                    model={model}
                    rentalPrice={rentalPrice}
                    year={year}
                    address={address}
                    rentalCompany={rentalCompany}
                    type={type}
                    img={img}
                  />
                </li>
              );
            }
          )}
      </List>
      {!showMoreButton ? (
        <BtnDiv>
          <p>That's all vehicles we have!</p>
          <MoreBtn onClick={handleGoToFirstPageBtnClick}>Go to start page</MoreBtn>
        </BtnDiv>
      ) : (
        <BtnDiv>
        <MoreBtn onClick={handleLoadMoreBtnClick}>Load more</MoreBtn>
        </BtnDiv>
      )}
    </Container>
  );
};

export default CatalogPage;
