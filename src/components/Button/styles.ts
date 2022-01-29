import styled from 'styled-components';
interface IButtonProps {
  color?: string;
  backgroundColor?: string;
}

export const ButtonContainer = styled.button<IButtonProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  height: 4.028vw;
  width: 18.264vw;
  border-radius: 29px;
  border-color: ${(props) => props.backgroundColor};
  font-size: 1.389vw;
  :hover {
    cursor: pointer;
  }
`;
