import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import type { ProjectData } from './api/projects';
import Accordion, { AccordionSummary, AccordionDetails } from 'components/Accordion';
import expandMoreIcon from 'public/images/icons/expand-more.svg';

const Home = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('api/projects');
      const data = await res.json();
      setProjects(data);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Head>
        <title>Tailwind CSS learn</title>
      </Head>

      <main className="py-20 px-40">
        <h1 className="mb-10 text-center font-fraunces text-8xl font-bold uppercase text-slate-500">Projects list</h1>

        {projects.map(project => {
          return (
            <Accordion
              key={project.name}
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
                        className={`${iconRotate} duration-300 transition-transform`}
                      />
                      <h2 className="font-fraunces text-4xl font-bold capitalize">{project.name}</h2>
                    </>
                  );
                }}
              </AccordionSummary>
              <AccordionDetails className="flex gap-10 py-5">
                <a href={project.image} target="_blank" rel="noreferrer">
                  <div className="relative h-[250px] w-[500px] shrink-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      objectPosition={`top left`}
                    />
                  </div>
                </a>
                <div className="flex flex-col justify-between py-5">
                  <h3 className="font-fraunces text-3xl font-extrabold">Description</h3>
                  <p className="whitespace-pre-wrap font-barlow text-xl font-medium text-zinc-700">
                    {project.description}
                  </p>

                  <a
                    className="text-xl font-extrabold uppercase transition-colors hover:text-white self-start duration-300"
                    href={`/${project.pageName}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    demo link
                  </a>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
