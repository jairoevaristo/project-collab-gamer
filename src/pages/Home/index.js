import { Container, Wrapper, Text, WrapperImage, WrapperButton } from './styles';

import Header from '../../components/Header';

import GamerLogo from '../../assets/images/gamer.svg';

import { FiLogIn, FiUserPlus } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import GlobalStyles from '../../styles/global';

function Home() {
  const history = useHistory();

  function handleClickSignIn() {
    history.push('/login');
  }

  function handleClickSignUp() {
    history.push('/signup');
  }

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Text>
            <h1>Um lugar Exclusivo para <span>Gamer's.</span></h1>
            <WrapperButton>
              <button className="button__sign_in" onClick={handleClickSignIn}>
                  <FiLogIn size={30} className="icon_button" />
                  sign in
                </button>
              <button className="button__sign_up" onClick={handleClickSignUp}>
                <FiUserPlus size={30} className="icon_button" />
                sign up
              </button>
            </WrapperButton>
          </Text>
          <WrapperImage>
            <img src={GamerLogo} alt="logo" />
          </WrapperImage>
        </Wrapper>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default Home;
