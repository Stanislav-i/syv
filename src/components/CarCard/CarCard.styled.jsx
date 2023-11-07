import styled from 'styled-components';

export const Wrapper = styled.article`
  position: relative;
  background-color: car(--colors-ui-base);
  overflow: hidden;
`;

export const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 150px;
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

export const CardTitleDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  height: 25px;
  text-align: center;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 20px;
`;

export const CardInfoItem = styled.span`
  margin: 0;
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  padding-right: 5px;
  padding-left: 5px;
  &:not(:last-child) {
    border-right: 1px solid rgba(175, 175, 175, 0.5);
  }
  &:first-child {
    padding-left: 0;
  }
`;

export const Heart = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  height: 18px;
  width: 18px;
  cursor: pointer;
`;

export const LearnBtn = styled.button`
  width: 100%;
  padding: 10px 0;
  margin-top: 2.5rem;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #3470ff;
  cursor: pointer;

  &:focus {
    background-color: #0b44cd;
  }
`;
