import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  Backdrop,
  CardInfo,
  CardInfoItem,
  CardList,
  CardTitle,
  CloseBtn,
  Description,
  Img,
  Modal,
  RentBtn,
  RentalDiv,
  RentalWrapper,
} from './ModalWindow.styled';
import {
  selectAllCars,
  selectCarId,
  setCarId,
  setModalStatus,
} from 'redux/carsListSlice';
import { selectFavouritesCars } from 'redux/favouritesSlice';

export const ModalWindow = () => {
  const dispatch = useDispatch();
  const carId = useSelector(selectCarId);
  const allCars = useSelector(selectAllCars);
  const favCars = useSelector(selectFavouritesCars);
  let carInfo = null;
  const carFromDb = allCars.find(car => car.id === carId);
  const carFromFav = favCars.find(car => car.id === carId);

  if (carFromDb) {
    carInfo = carFromDb
  }
  else {
    carInfo = carFromFav
  };

  
  const rentCond = carInfo.rentalConditions.split('\n');
  const carAddress = carInfo.address.split(',');
  const country = carAddress[2];
  const city = carAddress[1];

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(setModalStatus(false));
        dispatch(setCarId(null));
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const onCloseBtnClick = () => {
    dispatch(setModalStatus(false));
    dispatch(setCarId(null));
    document.body.style.overflow = 'unset';
  };

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      dispatch(setModalStatus(false));
      dispatch(setCarId(null));
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <Backdrop onClick={handleOverlayClick}>
      <Modal>
        <Img src={carInfo.img} alt="test"></Img>
        <CloseBtn onClick={onCloseBtnClick}>&times;</CloseBtn>
        <CardInfo>
          <CardTitle>
            {carInfo.make} {carInfo.model}, {carInfo.year}
          </CardTitle>
          <CardList>
            <CardInfoItem>{city}</CardInfoItem>
            <CardInfoItem>{country}</CardInfoItem>
            <CardInfoItem>Id: {carInfo.id}</CardInfoItem>
            <CardInfoItem>Year: {carInfo.year}</CardInfoItem>
            <CardInfoItem>Type: {carInfo.type}</CardInfoItem>
            <CardInfoItem>Fuel Consumption {carInfo.fuelConsumption}</CardInfoItem>
            <CardInfoItem>Engine Size {carInfo.engineSize}</CardInfoItem>
          </CardList>
          <Description style={{fontSize: '14px'}}>{carInfo.description}</Description>
          <Description style={{fontSize: '16px'}}>Accessories and functionalities:</Description>
          <CardList>
          {carInfo.accessories.map((acc)=>{
              return (
                <CardInfoItem key={acc}>{acc}</CardInfoItem>
              )
            })}
            {carInfo.functionalities.map((func)=>{
              return (
                <CardInfoItem key={func}>{func}</CardInfoItem>
              )
            })}
          </CardList>
          <Description style={{fontSize: '16px'}}>Rental Conditions:</Description>
          <RentalWrapper>
          {rentCond.map((condition)=>{
            return (<RentalDiv key={condition}>{condition}</RentalDiv>)
          })}
          <RentalDiv>Mileage: <span style={{color: '#3470FF', fontWeight: 'bold'}}>{carInfo.mileage.toLocaleString("en-IN")}</span></RentalDiv>
          <RentalDiv>Price: <span style={{color: '#3470FF', fontWeight: 'bold'}}>{carInfo.rentalPrice}</span></RentalDiv>
          </RentalWrapper>
        </CardInfo>
        <RentBtn><a style={{color: 'white'}} href="tel:+11(000)111-11-11">Rental Car</a></RentBtn>
      </Modal>
    </Backdrop>
  );
};

export default ModalWindow;
