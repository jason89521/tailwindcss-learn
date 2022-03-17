import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import Nav from 'components/sunnyside-agency-landin-page/Nav';
import IntroSection from 'components/sunnyside-agency-landin-page/IntroSection';
import IntroItem from 'components/sunnyside-agency-landin-page/IntroItem';
import Testimonials from 'components/sunnyside-agency-landin-page/Testimonials';
import Gallery from 'components/sunnyside-agency-landin-page/Gallery';
import Footer from 'components/sunnyside-agency-landin-page/Footer';
import useResponsiveWidth from 'hooks/useResponsiveWidth';

import arrowDownIcon from 'public/images/sunnyside-agency-landing-page/icon-arrow-down.svg';

import headerImg_desktop from 'public/images/sunnyside-agency-landing-page/desktop/image-header.jpg';
import transformImg_desktop from 'public/images/sunnyside-agency-landing-page/desktop/image-transform.jpg';
import standOutImg_desktop from 'public/images/sunnyside-agency-landing-page/desktop/image-stand-out.jpg';
import graphicImg_desktop from 'public/images/sunnyside-agency-landing-page/desktop/image-graphic-design.jpg';
import photographyImg_desktop from 'public/images/sunnyside-agency-landing-page/desktop/image-photography.jpg';

import headerImg_mobile from 'public/images/sunnyside-agency-landing-page/mobile/image-header.jpg';
import transformImg_mobile from 'public/images/sunnyside-agency-landing-page/mobile/image-transform.jpg';
import standOutImg_mobile from 'public/images/sunnyside-agency-landing-page/mobile/image-stand-out.jpg';
import graphicImg_mobile from 'public/images/sunnyside-agency-landing-page/mobile/image-graphic-design.jpg';
import photographyImg_mobile from 'public/images/sunnyside-agency-landing-page/mobile/image-photography.jpg';

const Page = () => {
  const { width, elementRef } = useResponsiveWidth();
  const useDesktopImg = width > 600;

  const headerImg = useDesktopImg ? headerImg_desktop : headerImg_mobile;
  const transformImg = useDesktopImg ? transformImg_desktop : transformImg_mobile;
  const standOutImg = useDesktopImg ? standOutImg_desktop : standOutImg_mobile;
  const graphicImg = useDesktopImg ? graphicImg_desktop : graphicImg_mobile;
  const photographyImg = useDesktopImg ? photographyImg_desktop : photographyImg_mobile;

  return (
    <main ref={elementRef} className="main font-barlow font-semibold">
      <Head>
        <title>Sunnyside agency landing page</title>
      </Head>

      <section className="section-header relative">
        <div className="absolute -z-10 h-full w-full">
          <Image src={headerImg} alt="header background" layout="responsive" priority />
        </div>

        <Nav />

        <header className="mt-20 flex flex-col items-center gap-32 px-10 lg:mt-0 lg:gap-16 md:mt-20">
          <h1 className="text-center font-fraunces text-6xl font-black uppercase tracking-[0.8rem] text-white lg:text-5xl">
            We are creatives
          </h1>
          <Image src={arrowDownIcon} alt="arrow down" />
        </header>
      </section>

      <IntroSection
        rightImg
        imgSrc={transformImg}
        title="Transform your brand"
        linkColor="hsl(51, 100%, 75%)"
        hoverLinkColor="hsl(51, 100%, 49%)"
      >
        We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
        compelling visuals that do most of the marketing for you.
      </IntroSection>

      <IntroSection
        imgSrc={standOutImg}
        title="Stand out to the right audience"
        linkColor="hsl(7, 99%, 90%)"
        hoverLinkColor="hsl(7, 99%, 70%)"
      >
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
        we&apos;ll build and extend your brand in digital places.
      </IntroSection>

      <section className="flex md:flex-col">
        <IntroItem imgSrc={graphicImg} title="Graphic design">
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures
          potential clients&apos; attention.
        </IntroItem>
        <IntroItem isPhotography imgSrc={photographyImg} title="Photography">
          Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
        </IntroItem>
      </section>

      <Testimonials />

      <Gallery />

      <Footer />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Fraunces:wght@400;500;600;700;800;900&display=swap');

        .section-header {
          min-height: ${width * (headerImg.height / headerImg.width)}px;
        }
      `}</style>

      <style jsx global>{`
        @media (max-width: 1000px) {
          html {
            font-size: 80%;
          }
        }
      `}</style>
    </main>
  );
};

export default Page;
