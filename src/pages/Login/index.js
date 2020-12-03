import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ToastContainer ,toast } from 'react-toastify';

import { Wrapper, Form, WrapperForm, LinkRecoverPassword } from './styles';

import { useHistory } from 'react-router-dom';

import GlobalStyles from '../../styles/global';

import { FiMail, FiLock, FiAlertTriangle } from 'react-icons/fi';

import Input from '../../components/Input';

import Button from '../../components/Button';

import Header from "../../components/Header";

const schema = yup.object().shape({
  email: yup.string().email('Insira um e-mail válido').required('E-mail obrigatorio'),
  password: yup.string().required('Senha obrigatorio').min(8, 'Senha no minimo de 8 caracteres')
});

function Login() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const history = useHistory();

  function handleClickBack() {
    history.push('/');
  }


  function onSubmit(data) { 
    toast.success('Bem vindi', {
      autoClose: 2000
    });
  }


  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <WrapperForm>
            <h1>SIGN IN</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                  Icons={FiMail}
                  placeholder="E-mail"
                  IconsColor='#667676'
                  focus={true}
                  name='email'
                  register={register}
                />
                <p className="message__error">{errors.email?.message}</p>

                <Input
                  Icons={FiLock}
                  type="password"
                  placeholder="Password"
                  IconsColor='#667676'
                  name='password'
                  register={register}
                />
                <p className="message__error">{errors.password?.message}</p>
      
                <Button title="ENTER" />
                <Button title="VOLTAR" onClick={handleClickBack} color="rgb(23, 90, 187)" />
                <LinkRecoverPassword to='recover-password'>
                  <FiAlertTriangle className="icon__forgot_password" color='rgb(255, 55, 166)' size={23} />
                    Recuperar minha senha.
                </LinkRecoverPassword>
            </Form>
          </WrapperForm>
      </Wrapper>
      <ToastContainer />
    </>
  );
}

export default Login;
