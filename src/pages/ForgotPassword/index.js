import { useState } from 'react';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ToastContainer ,toast } from 'react-toastify';

import { Wrapper, Form, WrapperForm, WrapperButton } from './styles';

import { useHistory } from 'react-router-dom';

import GlobalStyles from '../../styles/global';

import { FiMail } from 'react-icons/fi';

import Input from '../../components/Input';

import Button from '../../components/Button';

import Header from "../../components/Header";
import Modal from "../../components/Modal";

import api from '../../services/api';

const schema = yup.object().shape({
  email: yup.string().email('Insira um e-mail válido').required('E-mail obrigatorio'),
});

function ForgotPassword() {
  const [active, setActive] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const history = useHistory();

  function handleClickBack() {
    history.push('/');
  }


 async function onSubmit(data) { 
   
   try {
      await api.post('/recover-password', data);
      setActive(true);

    } catch {
      toast.error('E-mail inválido', {
        autoClose: 2000
      });
    }
  }

  function handleClose() {
    setActive(false);
    history.push('/');
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <WrapperForm>
            <h1>RECOVER PASSWORD</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                  Icons={FiMail}
                  placeholder="E-mail"
                  IconsColor='#667676'
                  focus={true}
                  name='email'
                  type='email'
                  register={register}
                />
                <p className="message__error">{errors.email?.message}</p>
              <WrapperButton>
                <Button title="ENTER" />
                <Button title="VOLTAR" onClick={handleClickBack} color="rgb(23, 90, 187)" />
              </WrapperButton>
            </Form>
          </WrapperForm>
      </Wrapper>
      <Modal active={active} handleClose={handleClose} />
      <ToastContainer />
    </>
  );
}

export default ForgotPassword;
