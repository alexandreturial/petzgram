import React from 'react';

import Input from '../../components/Input';

import { Container } from './styles';

const NewPost: React.FC = () => {
  return (
      <Container>
          <form>
              <Input name="title" label="Title"/>
              <Input name="imagem" label="Imagem" type="file" accept="image/*" max-size="1"/>

              <button>
                  Save
              </button>
          </form>
      </Container>
  );
}

export default NewPost;
