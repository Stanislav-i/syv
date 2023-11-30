import styled from 'styled-components';

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    padding-top: 25px;
    max-width: 700px;
    margin: 0 auto;
`
export const SelectWrapper = styled.div`
    @media (min-width: 380px) {
    width: 220px;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`

export const SearchBtn = styled.button`
    padding: 14px 14px;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    background-color: #3470FF;
    cursor: pointer;

    &:focus{
    background-color: #0B44CD;  
    }

    @media (min-width: 768px) {
    padding: 14px 44px;
  }
`