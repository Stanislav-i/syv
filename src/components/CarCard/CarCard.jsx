import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {
  Wrapper,
  CardImg,
  CardInfo,
  CardTitleDiv,
  CardTitle,
  CardList,
  CardInfoItem,
  Heart,
  LearnBtn,
} from './CarCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars, setCarId, setModalStatus} from 'redux/carsListSlice';
import { addCar, deleteCar, selectFavouritesCars } from 'redux/favouritesSlice';


export const CarCard = ({
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
  const carAddress = address.split(',');
  const country = carAddress[2];
  const city = carAddress[1];
  const allCars = useSelector(selectAllCars);
  const dispatch = useDispatch();
  const favCars = useSelector(selectFavouritesCars);

  const handleHeartBtnClick = () => {
    const newFav = allCars.find(car => car.id === id);
    dispatch(addCar(newFav));
  };

  const handleFavHeartBtnClick = () => {
    dispatch(deleteCar(id));
  };

  const handleLearnMoreBtnClick = () => {
    dispatch(setCarId(id));
    dispatch(setModalStatus(true));
    document.body.style.overflow = 'hidden';
  }

  return (
    <Wrapper>
      <Heart>
        {favCars.find(car => car.id === id) === undefined ? (
          <AiOutlineHeart
            color="#ffffff"
            onClick={handleHeartBtnClick}
          ></AiOutlineHeart>
        ) : (
          <AiFillHeart
            color="var(--primaryBtnColor)"
            onClick={handleFavHeartBtnClick}
          ></AiFillHeart>
        )}
      </Heart>
      <CardImg src={img} alt={make} />
      <CardInfo>
        <CardTitleDiv>
          <CardTitle>
            {make}, {year}
          </CardTitle>
          <CardTitle>{rentalPrice}</CardTitle>
        </CardTitleDiv>
        <CardList>
          <CardInfoItem>{city}</CardInfoItem>
          <CardInfoItem>{country}</CardInfoItem>
          <CardInfoItem>{rentalCompany}</CardInfoItem>
          <CardInfoItem>{type}</CardInfoItem>
          <CardInfoItem>{model}</CardInfoItem>
        </CardList>
      </CardInfo>
      <LearnBtn onClick={handleLearnMoreBtnClick}>Learn More</LearnBtn>
    </Wrapper>
  );
};

export default CarCard;
