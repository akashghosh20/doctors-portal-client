import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';

const AvailableAppointments = ({date}) => {

    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data => setServices(data));

    },[])
    return (
      <div>
          <div>
           <h4 className='text-xl text-primary text-center font-bold'> Your available appointment on {format(date,'PP')}</h4>
        </div>
        <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
              
              services.map (service =>
                <Booking
                    key = {service._id}
                    service = {service}
                    >
                  
                </Booking>)
            }
        </div>
      </div>
    );
};

export default AvailableAppointments;