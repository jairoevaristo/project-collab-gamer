import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rgb(9, 12, 40);

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 60px 60px;

  @media(max-width: 980px) {
    background-position: center;
  }
`;

export const WrapperForm = styled.div`
  height: 90%;
  max-width: 470px;

  margin-top: -90px;
  
  background-color: rgba(0, 0, 0, .3);

  border: solid 1px rgb(99, 26, 134);


  box-shadow: rgba(0, 0, 0, .8) 4px 16px 10px -14px;

  
  padding: 50px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    width: 90%;
    text-align: center;

    padding-bottom: 15px;

    color: rgb(23, 90, 187);

    text-transform: uppercase;
    
    border-bottom: solid 2px rgba(255, 255, 255, .5);
  }
`;

export const Form = styled.form`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .message__error {
    color: rgb(255, 55, 166);
    opacity: .8;
  }
`;

export const LinkRecoverPassword = styled(Link)`  
  color: rgb(255, 55, 166);
  
  font-size: 18px;
  font-weight: 600;

  transition: all ease-in .2s;
  
  opacity: .8;

  margin-top: 20px;

  text-decoration: none;
  
  display: flex;
  align-items: center;
  justify-content: center;

  .icon__forgot_password {
    margin-right: 6px;
  }

  &:hover {
    opacity: .6;
    border-bottom: solid 1px rgb(99, 26, 134);
  }
`;