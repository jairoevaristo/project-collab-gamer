import styled from 'styled-components';
import game from '../../assets/images/game.jpg';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${game});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;

  @media(max-width: 980px) {
    background-position: center;
  }

  .message__error {
    color: rgb(255, 55, 166);
    opacity: .8;
  }
`;

export const Text = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 70px;  

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 100px;
    font-weight: 900;

    margin-bottom: 50px;

    color: rgb(23, 90, 187);

    @media(max-width: 990px) {
      font-size: 80px;
    }
    
    @media(max-width: 1030px) {
      font-size: 80px;
    }
    
    span {
      font-size: 90px;
      font-weight: 800;

      color: rgb(255, 55, 166);
    }
  }

  @media(max-width: 990px) {
    display: none;
  }
`;