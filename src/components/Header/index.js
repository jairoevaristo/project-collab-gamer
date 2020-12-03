import { Container } from './styles';

import ControllerGame from '../../assets/images/game-controller.svg';

function Header() {
  return(
    <Container>
        <img src={ControllerGame} /><br />
        <h4>Collab  <span>Gamer</span></h4>
    </Container>
  );
};

export default Header;