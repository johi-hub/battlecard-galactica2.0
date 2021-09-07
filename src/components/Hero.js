import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { motion } from 'framer-motion';

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;


`;

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}

`;

const Card =  styled(motion.div)`
color: #fff;
padding: 2rem;
backdrop-filter: blur(5px);
background-color: rgba(240, 52, 52, 1);
margin: 2rem;
border-radius: 5px;
position: absolute;


h1 {
    font-size: clamp(1rem, 8vw, 2.5rem);
    margin-bottom: 0.5rem;
}

p {
    font-size: clamp(1rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
}

button {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.8rem 2rem;
    color: #000;
    background: linear-gradient(to right, #ffcc33, #ffb347);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
}

`;

const ColumnRight = styled.div`
display: flex;
justify content: center;
align-items: center;
padding: 2rem;
position: relative;

${Card}:nth-child(1) {
    top: -1rem;
    left: 20rem;
}
${Card}:nth-child(2) {
    top: 17rem;
    left: 40rem;
}

${Card}:nth-child(3) {
    top: 17rem;
    left: 1rem;
}

${Card}:nth-child(4) {
    top: 34.5rem;
    left: 20rem;
}
`;

const Hero = ({ title, desc }) => {
    return (
        <Section>
              <Particles id="particles-js"
                params={
                {
                    "particles":{"number":{"value":178,"density":{"enable":true,"value_area":800}},
                    "color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"","width":110,"height":100}},
                    "opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},
                    "size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},
                    "line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},
                    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":1126.873126873127,"line_linked":{"opacity":1}},
                    "bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
                    "retina_detect":true
                }
            }    
        />
        <Container>
        <ColumnRight>
            <Card
                className="Season1"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            >
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>learn more</button>
            </Card>
            <Card
               className="Season2"
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            >
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>learn more</button>
            </Card>
            <Card
               className="Season3"
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            >
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>learn more</button>
            </Card>
            <Card
               className="Season4"
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            >
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>learn more</button>
            </Card>
            <Card
               className="MiniSeries"
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            >
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>learn more</button>
            </Card>
            </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero
