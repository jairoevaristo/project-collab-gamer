import { Container, Wrapper, WrapperButton } from './styles';

import Send from '../../assets/images/send.svg';

function Modal({ active, handleClose }) {
  return (
      <Container active={active}>
        <Wrapper>
          <img src={Send} alt="logo" />  
          <h1>Sua nova senha foi enviada para o seu E-mail.</h1>
          <WrapperButton>
            <button onClick={handleClose}>
              OK
            </button>
          </WrapperButton>
        </Wrapper>
    </Container>
  );
};

export default Modal;