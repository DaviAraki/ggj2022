import { ButtonContainer } from './styles';

export interface IButtonProps {
  text: string;
  backgroundColor: string;
  textColor?: string;
  onClick?: () => void;
}

export function Button(props: IButtonProps) {
  return (
    <ButtonContainer
      color={props.textColor}
      backgroundColor={props.backgroundColor}
      onClick={props.onClick}
    >
      {props.text}
    </ButtonContainer>
  );
}
