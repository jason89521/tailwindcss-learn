import Head from 'next/head';
import Image from 'next/image';
import React, { useRef } from 'react';

import useWindowInnerSize from 'hooks/useWindowInnerSize';
import logoImg from 'public/images/sunnyside-agency-landing-page/logo.svg';
import headerBgImg from 'public/images/sunnyside-agency-landing-page/desktop/image-header.jpg';

const Page = () => {
  const { innerWidth } = useWindowInnerSize();

  return (
    <main className="root">
      <Head>
        <title>Sunnyside agency landing page</title>
      </Head>
      <section className="section-header">
        <nav>
          <div>
            <Image src={logoImg} alt="logo" />
          </div>
          <div>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
        </nav>

        <header>
          <h1>title</h1>
        </header>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Fraunces:wght@400;500;600;700;800;900&display=swap');

        .section-header {
          background-image: url(${headerBgImg.src});
          background-repeat: no-repeat;
          background-size: 100%;
          min-height: ${headerBgImg.height}px;
        }
      `}</style>
    </main>
  );
};

export default Page;
