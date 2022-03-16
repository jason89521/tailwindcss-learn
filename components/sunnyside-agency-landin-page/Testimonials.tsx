import Image from 'next/image';

import emilyImg from 'public/images/sunnyside-agency-landing-page/image-emily.jpg';
import thomasImg from 'public/images/sunnyside-agency-landing-page/image-thomas.jpg';
import jennieImg from 'public/images/sunnyside-agency-landing-page/image-jennie.jpg';

const userData = [
  {
    name: 'Emily R.',
    imgSrc: emilyImg,
    job: 'Marketing Director',
    testimonials: `We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
  },
  {
    name: 'Thomas S.',
    imgSrc: thomasImg,
    job: 'Chief Operating Officer',
    testimonials: `Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.`,
  },
  {
    name: 'Jennie F.',
    imgSrc: jennieImg,
    job: 'Business Owner',
    testimonials: `Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
  },
];

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center gap-20 py-40 px-20 lg:gap-10 lg:py-20 lg:px-5">
      <h2 className="font-fraunces text-2xl font-extrabold uppercase tracking-widest text-gray-400">
        Client testimonials
      </h2>
      <div className="flex gap-8 self-stretch font-barlow md:flex-col md:gap-20">
        {userData.map(user => {
          return (
            <div key={user.name} className="flex flex-1 flex-col items-center text-center md:gap-8">
              <div className="mb-10 w-20 overflow-hidden rounded-full md:mb-0">
                <Image src={user.imgSrc} alt="" layout="responsive" />
              </div>
              <p className="h-52 text-xl text-gray-600 md:h-auto">{user.testimonials}</p>

              <div>
                <h3 className="mb-4 font-fraunces text-xl font-extrabold">{user.name}</h3>
                <span className="text-gray-400">{user.job}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
