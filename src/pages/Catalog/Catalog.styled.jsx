import styled from 'styled-components';

export const List = styled.section`
  /* width: 380px; */
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
    /* padding: 2.5rem 3rem; */
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
    background-color: #3470FF;
    cursor: pointer;

    &:focus{
    background-color: #0B44CD;  
    }
`