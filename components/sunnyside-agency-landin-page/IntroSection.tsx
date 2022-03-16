import Image from 'next/image';
import React from 'react';

interface PropsType {
  rightImg?: boolean;
  linkColor: string;
  hoverLinkColor: string;
  imgSrc: StaticImageData;
  title: string;
  children: React.ReactNode;
}

const IntroSection = ({ rightImg = false, linkColor, hoverLinkColor, imgSrc, title, children }: PropsType) => {
  const contentPadding = rightImg ? 'pl-32' : 'pr-32';
  const imgMargin = rightImg ? 'ml-16' : 'mr-16';

  const image = (
    <div className={`${imgMargin} min-w-[50%] lg:m-0 md:-order-1`}>
      <Image src={imgSrc} alt="transform image" layout="responsive" />
    </div>
  );

  return (
    <section className="flex lg:text-sm md:flex-col">
      {!rightImg && image}
      <div
        className={`${contentPadding} flex flex-1 flex-col items-start justify-center gap-10 lg:px-10 lg:py-5 md:items-center md:px-4 md:py-10`}
      >
        <h2 className="font-fraunces text-4xl font-extrabold md:text-center">{title}</h2>
        <p className="text-md text-gray-500 md:text-center">{children}</p>
        <a
          href="#"
          className="link relative px-2 text-center font-fraunces font-extrabold uppercase tracking-wider after:absolute after:bottom-0 after:left-0 after:-z-10 after:block after:h-2.5 after:w-full after:rounded-full"
        >
          Learn more
        </a>
      </div>
      {rightImg && image}

      <style jsx>{`
        .link::after {
          background-color: ${linkColor};
        }

        .link:hover::after {
          background-color: ${hoverLinkColor};
        }
      `}</style>
    </section>
  );
};

export default IntroSection;
