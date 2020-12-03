import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  margin: 0 auto;

  background-color: rgb(9, 12, 40);

  @media(max-width: 980px) {
    background-position: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  
  min-width: 1080px;
  max-width: 2048px;

  margin-top: 46px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 60px;
`;

export const WrapperImage = styled.div`
  max-width: 1080px;

  img {
    width: 100%;
  }
`;


export const Text = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;

  margin-right: 90px;

  padding: 0 20px;

  border-radius: 9px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 90px;
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
      font-size: 60px;
      font-weight: 800;

      color: rgb(255, 55, 166);
    }
  }

  @media(max-width: 990px) {
    display: none;
  }
`;

export const WrapperButton = styled.div`
  width: 100%;

  max-width: 440px;

  display: flex;
  align-items: center;


  button {
    width: 200px;
    height: 60px;
    
    display: flex;
    align-items: center;

    padding: 12px 20px;


    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;

    transition: all ease-in .2s;

    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }

  .icon_button {
    width: 40px;
    height: 40px;

    padding-right: 10px;
    margin-right: 16px;

    border-right: solid 3px #1e272e;
  }

  .button__sign_in {
    background-image: linear-gradient(-225deg, #ec77ab 0%, #D41872 52%, #FF0066 100%);
    
    color: #1e272e;

    margin-right: 30px;
  }

  .button__sign_up {
    background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);

    color: #130f40;
    
  }
`;