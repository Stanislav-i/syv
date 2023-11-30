import styled from 'styled-components';

export const List = styled.section`
  padding: 2rem 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 380px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
`

export const MoreBtn = styled.button`
    padding: 12px 50px;
    margin-top: 1.5rem;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    background-color: var(--primaryBtnColor);
    cursor: pointer;

    &:hover{
    background-color: var(--focusBtnColor);  
    }
`

export const GoTopBtn = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  background-color: #8de540;
  cursor: pointer;
  z-index: 5;
`