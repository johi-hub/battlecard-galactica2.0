import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import '../scss/style.scss';
const Home = () => {
    return (
        <>
            <Header />
            <Hero title='Mini Series' desc='whatever'/>
        </>
    )
}

export default Home
