import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const InputElement = styled.input`
  height: 50px;

  max-width: 270px;
  min-width: 350px;

  transition: all .2s;

  padding: 0 20px;

  margin: 7px 0;
  margin-left: 10px;

  background-color: rgb(9, 4, 70, .8);

  color: #fff;

  box-shadow: rgba(0, 0, 0, 0.5) 0px 14px 9px -14px;

  font-size: 16px;

  border-radius: 6px;

  &:focus {
    border: solid 2px rgb(99, 26, 134);
  }

  &:hover {
    transform: translateY(-3px);
  }
`;

export const Status = styled.div`
  width: 12px;
  height: 12px;

  border-radius: 6px;

  margin-left: 10px;

  ${InputElement}:focus + & {
    background: #FFA689;
  }

  ${InputElement}:invalid + & {
    background: #FE2F75;
  }

  ${InputElement}:valid + & {
    background: #70EDB9;
  }
`;