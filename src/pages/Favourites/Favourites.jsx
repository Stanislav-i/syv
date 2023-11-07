import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'components/Container';
import CarCard from 'components/CarCard/CarCard';
import { List } from '../Catalog/Catalog.styled';
import { selectFavouritesCars } from 'redux/favouritesSlice';
import { requestCarsThunk, selectAllCars } from 'redux/carsListSlice';
import { useEffect } from 'react';
import { ErrorMessage } from './Favourites.styled';

export const FavouritesPage = () => {
  const favCars = useSelector(selectFavouritesCars);
  const allCars = useSelector(selectAllCars);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allCars) {
      return;
    }
    dispatch(requestCarsThunk(1));
  }, [allCars, dispatch]);

  const showCars = Array.isArray(favCars) && favCars.length > 0;

  return (
    <Container>
      {!showCars && (
        <ErrorMessage>
          No cars added...
          <br></br>It's time to select your vehicle!
        </ErrorMessage>
      )}
      <List>
        {showCars &&
          favCars.map(
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
              mileage,
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
    </Container>
  );
};

export default FavouritesPage;
