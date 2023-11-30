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
    padding: 12px 14px;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    background-color: var(--primaryBtnColor);
    cursor: pointer;

    &:hover{
    background-color: var(--focusBtnColor);  
    }

    @media (min-width: 768px) {
    padding: 12px 44px;
  }
`