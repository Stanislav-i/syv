import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 300ms linear, visibility 300ms linear;
  z-index: 3;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scaleY(1);

  max-height: calc(100vh - 20px);
  background: #fcfcfc;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: transform 300ms linear;
  padding: 24px;
  overflow-y: auto;
  width: 100%;

  @media screen and (min-width: 380px) {
    width: 380px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
  border-radius: var(--radii);
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  height: 25px;
  text-align: left;
  color: #000000;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CardInfoItem = styled.span`
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  font-weight: var(--fw-light);
  color: #484242;
  padding-right: 5px;
  padding-left: 5px;
  &:not(:last-child) {
    border-right: 1px solid rgba(175, 175, 175, 0.5);
  }
  &:first-child {
    padding-left: 0;
  }
`;

export const Description = styled.p`
  padding-top: 14px;
  color: #000;
  font-weight: 600;
`;
export const RentalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
`;

export const RentalDiv = styled.div`
  padding: 7px 14px;
  background-color: #f9f9f9;
  color: #000;
  border: 1px solid rgba(175, 175, 175, 0.5);
  border-radius: 10px;
  font-size: 12px;
`;

export const RentBtn = styled.button`
  padding: 12px 50px;
  margin-top: 1.5rem;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: var(--primaryBtnColor);
  cursor: pointer;

  &:hover {
    background-color: var(--focusBtnColor);
  }
`;
