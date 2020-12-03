import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  background-color: rgb(9, 12, 40);

  padding: 12px 26px; 

  img {
    height: 50px;
    margin-right: 12px;
  }

  h4 {
    font-size: 30px;
    color: rgb(23, 190, 187);

    span {
      font-size: 26px;
      color: rgb(255, 55, 166, .7);
    }
  }
`;