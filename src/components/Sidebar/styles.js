import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-width: 470px;
  
  background-color: rgb(9, 21, 64, .9);
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 80px;
  }

  div {
      text-align: center;

    h4 {
      font-size: 26px;
      color: rgb(23, 190, 187);

      span {
        font-size: 20px;
        color: rgb(255, 55, 166, .7);
      }
    }
  }

  @media(max-width: 980px) {
    width: 100vw;
    position: absolute;

    padding: 0;
  }

`;

export const Form = styled.form`
  width: 100%;
  
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    margin-bottom: 26px;
    color: rgb(23, 90, 187);
    text-transform: uppercase;
  }
`;

