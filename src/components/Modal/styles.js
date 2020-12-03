import styled from 'styled-components';


export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  transition: all ease-in .2s;

  width: 100vw;
  height: 100vh;


  display: ${({ active }) => (active ? 'flex' : 'none' )};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, .5);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 420px;
  max-width: 620px;

  padding: 20px 30px;

  transition: all ease-in .2s;

  background-color: rgb(9, 12, 40);

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 160px;
    height: 160px;
  }

  h1 {
    width: 100%;
    
    text-align: center;

    margin-top: 36px;
    
    font-size: 40px;

    color: rgb(255, 55, 166, .7);
  }
`;

export const WrapperButton = styled.div`
  width: 100%;

  margin-top: 46px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 160px;
    height: 46px;

    cursor: pointer;

    transition: all ease-in .2s;

    background-color: rgb(99, 26, 134);

    font-size: 24px;
    font-weight: 600;

    color: #f5f5fb;

    &:hover {
      opacity: .8;
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;