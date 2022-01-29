import { useEffect, useState } from 'react';
import { CountdownContainer } from './styles';

export function Timer() {
  const [counter, setCounter] = useState(60);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  useEffect(() => {
    counter === 0 && alert('cabo');
  }, [counter]);

  return <CountdownContainer>{counter}</CountdownContainer>;
}
