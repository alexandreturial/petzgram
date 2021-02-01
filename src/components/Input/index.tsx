import React, {InputHTMLAttributes} from 'react';
import { Container } from './styles';

interface IInputPropps extends InputHTMLAttributes<HTMLInputElement>{
  name: string,
  label: string
}

const Input: React.FC<IInputPropps> = ({
  name,
  label,
  ...rest
}) => {
  return (
      <Container>
          <label htmlFor="name">{label}: </label>
          <input type="text" id={name} placeholder={name} {...rest}/>
      </Container>
  );
}

export default Input;