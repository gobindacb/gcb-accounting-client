import React from 'react';
import Banner from '../Banner/Banner';
import Summary from '../Summary/Summary';
import Services from './ServicesSum/ServicesSum';
import Stats from './Stats/Stats';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Services></Services>
            <Stats></Stats>
        </div>
    );
};

export default Home;