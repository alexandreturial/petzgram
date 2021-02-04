import React, { useState } from 'react';

import Input from '../../components/Input';

import { Container, Button, ImgSpan } from './styles';

const NewPost: React.FC = () => {
    const [imgPreview, setImgPreview] = useState<File>()
  
    return (
        <Container>
            <form>
                <Input name="title" label="Title" />
                <label htmlFor="image">
                    {imgPreview ? 
                        imgPreview.name 
                    :
                    (
                        <ImgSpan>
                            Selecione uma imagem
                        </ImgSpan>
                    )
                    
                    }
                </label>
                <input 
                    name="imagem" 
                    id="image"
                    type="file" 
                    accept="image/*" 
                    max-size="1" 
                    onChange={(e)=>{if(e.target.files !== null) setImgPreview(e.target.files[0])}}
                    
                />
                
                {
                    imgPreview && 
                        <img src={URL.createObjectURL(imgPreview)} alt={imgPreview.name}/> 
                    
                }
               
                <Button>
                    Save
              </Button>
          </form>
      </Container>
  );
}

export default NewPost;
