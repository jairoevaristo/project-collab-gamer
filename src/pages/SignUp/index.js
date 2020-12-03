import { useState } from 'react';

import { Container, Wrapper, Text } from './styles';

import { FaUserAstronaut } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { FiCheckCircle } from 'react-icons/fi';

import { ToastContainer, toast } from 'react-toastify';

import GlobalStyles from '../../styles/global';

import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import Button from '../../components/Button';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';

function SignUp() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const history = useHistory();

  function handleClickBack() {
    history.push('/');
  };

  function onChange(e) {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  }

  
  async function onSubmit(event) { 
    event.preventDefault();

    if (data.password !== data.confirmPassword) {
        toast.error('As senhas são diferentes!', {
        autoClose: 2000
      });
    }

    else {
      const result = await api.post('/users', data);
      
      if (!result) {
        toast.error('Erro ao Cadastrar-se!', {
          autoClose: 2000
        });
      }
  
      toast.success('Cadastrado com sucesso!', {
        autoClose: 2000
      });
  
      setTimeout(() => {
        history.push('/');
      }, 2500);
    }

  };

  return (
    <Container>
      <GlobalStyles />
      <Wrapper>
        <Sidebar title="Sign Up" handleForm={onSubmit}>
          <Input
            Icons={FaUserAstronaut}
            placeholder="Nickname"
            IconsColor='#667676'
            focus={true}
            name="name"
            onChange={onChange}
          />

          <Input
            Icons={FiMail}
            type="email"
            placeholder="E-mail"
            IconsColor='#667676'
            name='email'
            onChange={onChange}
          />

          <Input
            Icons={FiLock}
            type="password"
            placeholder="Senha"
            IconsColor='#667676'
            name='password'
            onChange={onChange}
          />

          <Input
            Icons={FiCheckCircle} 
            type="password" 
            placeholder="Confirma senha" 
            IconsColor='#667676'
            name='confirmPassword'
            onChange={onChange}
          />
          <Button title="ENTER" />
          <Button title="VOLTAR" onClick={handleClickBack} color="rgb(23, 90, 187)" />
        </Sidebar>
        <Text>
          <h1>Conecte-se com outros <span>Gamer's.</span></h1>
        </Text>
      </Wrapper>
      <ToastContainer />
    </Container>
  );
}

export default SignUp;
