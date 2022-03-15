import React from 'react';
import Image from 'next/image';

import largeBgImage from 'public/images/order-summary-component/pattern-background-desktop.svg';
import smallBgImage from 'public/images/order-summary-component/pattern-background-mobile.svg';
import heroImage from 'public/images/order-summary-component/illustration-hero.svg';
import musicIcon from 'public/images/order-summary-component/icon-music.svg';

const OrderSummary = () => {
  return (
    <div className="root flex min-h-screen items-center justify-center px-4">
      <div className="max-w-[450px] overflow-hidden rounded-lg bg-white shadow-2xl">
        <div>
          <Image src={heroImage} alt="hero image" />
        </div>
        <div className="flex flex-col items-center gap-8 p-8">
          <h1 className="text-dark-blue text-2xl font-extrabold capitalize">order summary</h1>
          <p className="text-center font-semibold text-slate-400">
            You can now listen to millons of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
          <div className="bg-light-blue flex items-center self-stretch rounded-lg px-6 py-3">
            <Image src={musicIcon} alt="music icon" />
            <div className="ml-4 mr-auto">
              <h2 className="font-bold">Annual Plan</h2>
              <span className="font-medium tracking-wider text-gray-500">$59.99/year</span>
            </div>
            <button className="change-btn font-extrabold underline hover:no-underline">Change</button>
          </div>
          <button className="pay-btn w-full rounded-md py-3 text-sm font-medium text-white">Proceed to Payment</button>
          <button className="text-sm font-bold text-slate-600 hover:text-slate-900">Cancel Order</button>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap');

        .root {
          background-image: url(${largeBgImage.src});
          background-repeat: no-repeat;
          background-size: 100%;
          background-color: hsl(225, 100%, 94%);
          font-family: 'Red Hat Display', sans-serif;
        }

        .pay-btn {
          background-color: hsl(245, 75%, 52%);
          box-shadow: 0 10px 10px hsl(245, 75%, 90%);
        }

        .pay-btn:hover {
          background-color: hsl(245, 75%, 70%);
        }

        .change-btn {
          color: hsl(245, 75%, 52%);
        }

        .change-btn:hover {
          color: hsl(245, 75%, 72%);
        }

        .text-dark-blue {
          color: hsl(223, 47%, 23%);
        }

        .bg-light-blue {
          background-color: hsl(225, 100%, 98%);
        }

        @media (max-width: 475px) {
          .root {
            font-size: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderSummary;
