import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../../shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="missing" />
          <div>
            <h1 class="text-5xl font-bold">Your new style starts here</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default Banner;