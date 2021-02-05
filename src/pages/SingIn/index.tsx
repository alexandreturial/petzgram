import React, { useState } from 'react';

import Input from '../../components/Input';
import Carrousel from '../../components/Carrousel';

import {
  Container,
  Content,
  Button
} from './styles';


const SingIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <Container>
      <Carrousel />
      <Content>
        <form>
          <Input name="email" label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>

          <Input name="senha" label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <Button>Login</Button>
        </form>
        <p>Not a member? <a href="/register">SingUp now</a></p>
      </Content>
    </Container>
  );
}

export default SingIn;