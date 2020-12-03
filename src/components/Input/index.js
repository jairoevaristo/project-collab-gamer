import { Container, InputElement, Status } from './styles';

function Input({
  type,
  placeholder,
  Icons,
  IconsColor,
  focus = false,
  onChange,
  name,
  register,
}) {

  return (
    <Container>
      {!!Icons && <Icons size={25} color={IconsColor} />}
      <InputElement
        type={ type ? type : 'text' } 
        placeholder={placeholder} 
        autoFocus={focus} 
        onChange={onChange}
        name={name}
        ref={register}
        autoComplete='off'
      />
      <Status />
    </Container>
  );
};

export default Input;