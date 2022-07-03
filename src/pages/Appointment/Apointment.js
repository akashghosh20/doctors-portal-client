import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppointmentHeader from './AppointmentHeader';
import AvailableAppointments from './AvailableAppointments';

const Apointment = () => {
    const [date,setDate] = useState(new Date());
    return (
        <div>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>


            <Footer></Footer>
        </div>
    );
};

export default Apointment;