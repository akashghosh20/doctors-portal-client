import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';
import MakeApoointment from './MakeApoointment';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeApoointment></MakeApoointment>
            <Testimonials></Testimonials>
            <Footer></Footer>

        </div>
    );
};

export default Home;