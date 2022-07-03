import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeApoointment from './MakeApoointment';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeApoointment></MakeApoointment>

        </div>
    );
};

export default Home;