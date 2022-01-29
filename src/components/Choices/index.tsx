import { ChoicesButton } from './styles';

export interface IChoicesProps {
  text: string;
  onClick?: () => void;
}

export function Choices(props: IChoicesProps) {
  return <ChoicesButton onClick={props.onClick}>{props.text}</ChoicesButton>;
}
