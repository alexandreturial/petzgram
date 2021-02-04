import React, { useState } from 'react';

import Input from '../../components/Input';

import { Container } from './styles';

const NewPost: React.FC = () => {
    const [imgPreview, setImgPreview] = useState<File>()
  
    return (
        <Container>
            <form>
                <Input name="title" label="Title" />
                <input name="imagem" type="file" accept="image/*" max-size="1" onChange={(e)=>{if(e.target.files !== null) setImgPreview(e.target.files[0]) }}/>
                
                {
                    imgPreview && 
                        <img src={URL.createObjectURL(imgPreview)} alt={imgPreview.name}/> 
                    
                }
               
                <button>
                    Save
              </button>
          </form>
      </Container>
  );
}

export default NewPost;
