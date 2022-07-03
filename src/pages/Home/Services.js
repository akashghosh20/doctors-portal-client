import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServiceThree from './ServiceThree';

const Services = () => {

    const services =[
        {
            _id: 1,
            name : 'Fluoride Treatment',
           description: '',
           img: fluoride  ,
        },
        {
          _id: 2,
            name: 'Cavity Treatment',
            description: '',
            img: cavity  ,
        },
        {
            _id: 3,
            name : 'Teeth Whitening',
            description: '',
            img: whitening  ,
        }
       

    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold '>Our Services</h3 >
            <h2 className='text-4xl' > Services We provide</h2>
            </div>
            <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
            {
                 services.map (service =>
                    <Service
                        key = {service._id}
                        service = {service}
                        >
                      
                    </Service>)
            }
            </div>
            <div className='my-12'>
                <ServiceThree></ServiceThree>
            </div>
        </div>
      
    );
};

export default Services;