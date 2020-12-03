import { Container, Form } from './styles';

import ControllerGame from '../../assets/images/game-controller.svg';

function Sidebar({ children, title, handleForm}) {

  return (
    <Container>
      <div>
        <img src={ControllerGame} atl="logo" /><br />
        <h4>Collab  <span>Gamer</span></h4>
      </div>
      
      <Form onSubmit={handleForm}>
        <h3>{title}</h3>
          {children}
      </Form>
    </Container>
  );
};

export default Sidebar;