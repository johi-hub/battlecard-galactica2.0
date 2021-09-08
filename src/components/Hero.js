import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { motion } from 'framer-motion';
import SeasonOne from '../images/season-1.jpg';
import SeasonTwo from '../images/season-2.jpg';
import SeasonThree from '../images/season-3.jpg';
import SeasonFour from '../images/season-4.jpg';
import MiniSeries from '../images/miniseries.jpg';
import Razor from '../images/razor.jpg';
import '../scss/sections/_hero.scss';


const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;


`;

const Card =  styled(motion.div)`
color: #fff;
padding: 2rem;
backdrop-filter: blur(5px);
background-color: rgba(0, 0, 0, 0.4);
margin: 2rem;
border-radius: 5px;
position: absolute;
background-position-x: center;
:hover{
    h1, p, button{ 
        visibility: visible 
    }
}


h1 {
    font-size: clamp(1rem, 8vw, 1.5rem);
    margin-bottom: 0.5rem;
    visibility: hidden;
}

p {
    font-size: clamp(1rem, 6vw, 0.5rem);
    margin-bottom: 1rem;
    visibility: hidden;
}

button {
    font-size: clamp(0.8rem, 4vw, 1.1rem);
    padding: 0.8rem 4rem;
    color: #000;
    background: linear-gradient(to right, #ffcc33, #ffb347);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    visibility: hidden;
}
`;

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
position: relative;

${Card}:nth-child(1) {
    top: 17rem;
    right: 40rem;
    background-image: url(${MiniSeries});
    background-size: cover;
}

${Card}:nth-child(2) {
    top: 17rem;
    right: 20rem;
    background-image: url(${Razor});
    background-size: cover;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}

${Card}:nth-child(3) {
    top: -1rem;
    left: 20rem;
    background-image: url(${SeasonOne});
    background-size: cover;
}
${Card}:nth-child(4) {
    top: 17rem;
    left: 40rem;
    background-image: url(${SeasonTwo});
    background-size: cover;
}

${Card}:nth-child(5) {
    top: 17rem;
    left: 1rem;
    background-image: url(${SeasonThree});
    background-size: cover;
}

${Card}:nth-child(6) {
    top: 34.5rem;
    left: 20rem;
    background-image: url(${SeasonFour});
    background-size: cover;
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
        
        <Card
               className="MiniSeries"
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
               whileHover={{ 
                backgroundImage: 'none', 
             }}
            > 
                <h1>Mini Series</h1>
                <p>{desc}</p>
                <button>learn more</button>
            </Card>
            <Card
               className="Razor"
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
               whileHover={{ 
                backgroundImage: 'none', 
             }}
            >
                <h1>Razor</h1>
                <p>{desc}</p>
                <button>learn more</button>
            </Card>
            <Card
                className="Season1"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                whileHover={{ 
                    backgroundImage: 'none', 
                 }}
            >
                <h1>Season 1</h1>
                <p>{desc}</p>
                <button>learn more</button>
            </Card>
            <Card 
               className="Season2"
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
               whileHover={{ 
                backgroundImage: 'none', 
             }}
            >
                <h1>Season 2</h1>
                <p>{desc}</p>
                <button>learn more</button>
            </Card>
            <Card
               className="Season3"
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
               whileHover={{ 
                backgroundImage: 'none', 
             }}
            >
                <h1>Season 3</h1>
                <p>{desc}</p>
                <button>learn more</button>
            </Card>
            <Card
               className="Season4"
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
               whileHover={{ 
                backgroundImage: 'none', 
             }}
            >
                <h1>Season 4</h1>
                <p>{desc}</p>
                <button>learn more</button>
            </Card>
            </Container>
        </Section>
    )
}

export default Hero
