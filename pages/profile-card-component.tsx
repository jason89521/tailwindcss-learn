import React from 'react';
import Image from 'next/image';

import cardBgImg from 'public/images/profile-card-component/bg-pattern-card.svg';
import topBgImg from 'public/images/profile-card-component/bg-pattern-top.svg';
import bottomBgImg from 'public/images/profile-card-component/bg-pattern-bottom.svg';
import avatarImg from 'public/images/profile-card-component/image-victor.jpg';

const data = [
  { name: 'Followers', amount: '80K' },
  { name: 'Likes', amount: '803K' },
  { name: 'Photos', amount: '1.4K' },
];

const ProfileCard = () => {
  return (
    <div className="root flex min-h-screen items-center justify-center">
      <div className="overflow-hidden rounded-xl bg-white">
        <Image src={cardBgImg} alt="card background image" layout="responsive" priority />

        <div className="flex flex-col items-center gap-4">
          <div className="z-10 -mt-[49px] flex items-center rounded-full bg-white p-1">
            <Image className="rounded-full" src={avatarImg} alt="avatar" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="flex items-center gap-2">
              <span className="font-bold">Victor Crest</span>
              <span className="font-medium text-gray-400">26</span>
            </span>
            <span className="text-gray-400">London</span>
          </div>

          <div className="border-top-line flex gap-12 self-stretch border-t px-12 py-6">
            {data.map((datum, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-lg font-bold">{datum.amount}</span>
                  <span className="text-xs font-medium tracking-wider text-gray-400">{datum.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
        .root {
          background-image: url(${topBgImg.src}), url(${bottomBgImg.src});
          background-position: -50% -${topBgImg.height / 2}px, right -60% bottom -${bottomBgImg.height / 2}px;
          background-repeat: no-repeat;
          background-color: hsl(185, 75%, 39%);
          font-family: 'Kumbh Sans', sans-serif;
        }

        .border-top-line {
          border-top: 1px solid #ddd;
        }

        @media (max-width: 1200px) {
          .root {
            background-position: -${topBgImg.width / 2}px -${topBgImg.height / 2}px,
              right -${bottomBgImg.width / 2}px bottom -${bottomBgImg.height / 2}px;
          }
        }

        @media (max-width: 800px) {
          .root {
            background-position: -${topBgImg.width * (3 / 4)}px -${topBgImg.height / 2}px,
              right -${bottomBgImg.width * (3 / 4)}px bottom -${bottomBgImg.height / 2}px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;
