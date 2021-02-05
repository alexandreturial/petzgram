import React, { useState, useCallback } from 'react';

import { images } from "../../assets/images";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";


import { Container, ButtonNavegation } from './styles';


const Carrousel: React.FC = () => {
    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 1
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };


    const [[page, direction], setPage] = useState([0, 0]);
    const [select, setSelect] = useState(1);
    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    let imageIndex = wrap(0, images.length, page);


    function newPage(newDirection: number) {
        imageIndex = newDirection;

        setSelect(newDirection);
        console.log(imageIndex);
    }

    return (
        <Container>
            <ButtonNavegation slider={select}>

                <div>
                    <input type="radio" id="0" name="slider" onChange={() => newPage(0)} />
                    <input type="radio" id="1" name="slider" onChange={() => newPage(1)} />
                    <input type="radio" id="2" name="slider" onChange={() => newPage(2)} />


                    <label htmlFor="0" id="slide0"> </label>
                    <label htmlFor="1" id="slide1"> </label>
                    <label htmlFor="2" id="slide2"> </label>
                </div>



            </ButtonNavegation>


            <>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        src={images[select]}
                        custom={direction}
                        variants={variants}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 300 },
                            opacity: { duration: 0.5 }
                        }}
                    />
                </AnimatePresence>
            </>

        </Container>
    );
}

export default Carrousel;