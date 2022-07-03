import React from 'react';
import quote from '../../assets/icons/quote.svg'
import peopleOne from '../../assets/images/people1.png';
import peopleTwo from '../../assets/images/people2.png';
import peopleThree from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id:1,
            name: 'Akash Ghosh',
            description:'Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.',
            img: peopleOne,
            location:'California',
        },
        {
            _id:2,
            name:'Abdullah Bin Ziad',
            description:'Hi iam Abdullah Bin Ziad.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.',
            img:peopleTwo,
            location:'Calcutta',
        },
        {
            _id:3,
            name:'Rana',
            description:'Hi iam Abdullah Bin Ziad.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.Hi iam Akash Ghosh.It was a nice treatment.',
            img:peopleThree,
            location:'Dhaka',
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                   <h4 className='text-xl font-bold text-primary'>Testimonals</h4>
                   <h2 className='text-3xl '> What our patients say</h2>
                </div>
                   <img src={quote} className='w-24 lg:w-48' alt=""></img>
                

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                        reviews.map(review=><Review
                            key ={review._id}
                            review = {review}
                            >
                        </Review>)
                    }
            </div>
        </section>
    );
};

export default Testimonials;