import React, { useState }from 'react';

import Carrousel from '../../components/Carrousel';
import Input from '../../components/Input';

import { useAuth } from '../../Hooks/Auth';

import { 
  Container,
   Content, 
   Button 
} from './styles';

const Register: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  
  const { register } = useAuth();

  return (
    <Container>
      <Carrousel />
      <Content>
        <form onSubmit={()=> register(name, email, password)}>
          <Input name="name" label="Name" type="text" value={name} onChange={e => setName(e.target.value)}/>

          <Input name="email" label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>

          <Input name="senha" label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <Button type="submit">Cadastrar</Button>
        </form>
        <p>Is a member? <a href="/">SingIn now</a></p>
      </Content>
    </Container>
  );
}

export default Register;