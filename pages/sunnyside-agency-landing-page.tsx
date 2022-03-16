import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import useResponsiveWidth from 'hooks/useResponsiveWidth';
import arrowDownIcon from 'public/images/sunnyside-agency-landing-page/icon-arrow-down.svg';
import logoImg from 'public/images/sunnyside-agency-landing-page/logo.svg';
import headerImg from 'public/images/sunnyside-agency-landing-page/desktop/image-header.jpg';
import transformImg from 'public/images/sunnyside-agency-landing-page/desktop/image-transform.jpg';

const Page = () => {
  const {width, elementRef} = useResponsiveWidth();

  const headerImgRatio = headerImg.height / headerImg.width;

  return (
    <main ref={elementRef} className="root font-barlow font-semibold">
      <Head>
        <title>Sunnyside agency landing page</title>
      </Head>
      <section className="section-header relative">
        <div className="absolute -z-10 h-full w-full">
          <Image src={headerImg} alt="header background" layout="responsive" priority />
        </div>
        <nav className="flex items-center justify-between px-8 py-6">
          <div>
            <Image src={logoImg} alt="logo" />
          </div>
          <div className="flex items-center gap-10 tracking-wider text-white">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a
              href="#"
              className="font-fraunces rounded-3xl bg-white px-6 py-3 text-center uppercase tracking-normal text-black transition hover:bg-white/25 hover:text-white"
            >
              Contact
            </a>
          </div>
        </nav>

        <header className="mt-20 flex flex-col items-center gap-32">
          <h1 className="font-fraunces text-center text-6xl font-black uppercase tracking-widest text-white">
            We are creatives
          </h1>
          <Image src={arrowDownIcon} alt="arrow down" />
        </header>
      </section>

      <section className="flex">
        <div className="flex-1"></div>
        <div className="flex-1">
          <Image src={transformImg} alt="transform image" layout="responsive" />
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Fraunces:wght@400;500;600;700;800;900&display=swap');

        .section-header {
          min-height: ${width * headerImgRatio}px;
        }

        .font-barlow {
          font-family: 'Barlow', sans-serif;
        }

        .font-fraunces {
          font-family: 'Fraunces', serif;
        }
      `}</style>
    </main>
  );
};

export default Page;
