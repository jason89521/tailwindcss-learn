import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Accordion, { AccordionSummary, AccordionDetails } from 'components/Accordion';
import expandMoreIcon from 'public/images/icons/expand-more.svg';

const Home = () => {
  const [images, setImages] = useState<{ name: string; src: string }[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('api/images');
      const data = await res.json();
      setImages(data.images);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Head>
        <title>Tailwind CSS learn</title>
      </Head>

      <main className="p-20">
        <h1 className="mb-10 text-center font-fraunces text-6xl font-bold uppercase text-slate-500">Projects list</h1>

        {images.map(image => {
          return (
            <Accordion
              key={image.name}
              className="mb-5 rounded-lg bg-slate-400 px-10  text-slate-700 shadow-lg last:mb-0"
            >
              <AccordionSummary className="flex cursor-pointer items-center gap-5 py-5">
                {isExpanded => {
                  const iconRotate = isExpanded ? 'rotate-180' : '';
                  return (
                    <>
                      <Image
                        src={expandMoreIcon}
                        alt="expand more"
                        className={`${iconRotate} duration-250 transition-transform`}
                      />
                      <h2 className="font-fraunces text-4xl font-bold capitalize">{image.name}</h2>
                    </>
                  );
                }}
              </AccordionSummary>
              <AccordionDetails className="flex gap-10 py-5">
                <a href={image.src} target="_blank" rel="noreferrer">
                  <div key={image.name} className="relative h-[250px] w-[500px] shrink-0">
                    <Image
                      src={image.src}
                      alt={image.name}
                      layout="fill"
                      objectFit="cover"
                      objectPosition={`top left`}
                    />
                  </div>
                </a>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum numquam assumenda ducimus tempore, nihil
                  dicta repudiandae iure eaque magnam est odit, ratione nostrum accusamus consectetur dolorem, porro
                  quos illo. Voluptatem?
                </p>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
