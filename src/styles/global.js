import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body,
  button,
  input {
    font-family: 'Roboto', sans-serif;
    outline: none;
    border: 0;
  }
`;