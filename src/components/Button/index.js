import { Container } from './styles';

function Button({ title, onClick, color }) {
  return (
    <Container onClick={onClick} color={color}>{title}</Container>
  );
};

export default Button;