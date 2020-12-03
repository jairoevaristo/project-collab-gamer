import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 42px;

    transition: all linear .2s;

    margin-top: 15px;

    border-radius: 5px;

    background-color: ${({ color }) => (color ? color : 'rgb(99, 26, 134)')};
    color :#fff;

    font-size: 15px;
    font-weight: 400;

    box-shadow: rgba(0, 0, 0, 0.5) 0px 14px 9px -14px;

    cursor: pointer;

    &:hover {
      opacity: .8;
      transform: translateY(-3px);
    }

    &:active {
      transform: scale(0.95);
    }
`;
