import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import PrimaryButton from '../../shared/PrimaryButton';

const MakeApoointment = () => {
    return (
        <section 
        
        style={{

          background: `url(${appoinment})`

        }}
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img src={doctor} className='mt-[-155px]'/>
            </div>
            <div className="flex-1 px-12 ">
                <h3 className='text-xl text-primary text-center font-bold '>Appointment</h3>
                <h2 className='text-3xl text-center text-white '>Make an appointment today</h2><br></br>
            <p className='text-white'> Hi doctor kaku,Today iam very sick.I need a appoinment.I have a ferver and headache.My hwalth consition is really bad today</p>
            <p className='text-white'> Hi doctor kaku,Today iam very sick.I need a appoinment.I have a ferver and headache.My hwalth consition is really bad today</p>
            <p className='text-white'> Hi doctor kaku,Today iam very sick.I need a appoinment.I have a ferver and headache.My hwalth consition is really bad today</p>
            <div className='text-center py-10'>
            <PrimaryButton>Get Starts</PrimaryButton>
            </div>
            
            </div>
        </section>
    );
};

export default MakeApoointment;