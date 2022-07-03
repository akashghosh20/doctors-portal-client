import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex items-center">
             <div className="avatar">
                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review.img} alt="" />
                </div>
             </div>
             <div className='pl-5'>
                <h4>{review.name}</h4>
                <h2>{review.location}</h2>
             </div>
          </div>
        </div>
      </div>
    );
};

export default Review;