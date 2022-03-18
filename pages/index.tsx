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

      <main className="py-20 px-40 2xl:px-20 lg:p-10 sm:p-5">
        <h1 className="mb-10 text-center font-fraunces text-8xl font-bold uppercase text-slate-500 2xl:text-6xl lg:text-4xl sm:mb-5">
          Projects list
        </h1>

        {projects.map(project => {
          return (
            <Accordion key={project.name} className="mb-5 rounded-lg bg-slate-400 text-slate-700 shadow-lg last:mb-0">
              <AccordionSummary className="flex cursor-pointer items-center gap-5 px-10 py-5 2xl:py-2.5 xl:px-5">
                {isExpanded => {
                  const iconRotate = isExpanded ? 'rotate-180' : '';
                  return (
                    <>
                      <Image
                        src={expandMoreIcon}
                        alt="expand more"
                        className={`${iconRotate} transition-transform duration-300`}
                      />
                      <h2 className="font-fraunces text-4xl font-bold capitalize 2xl:text-3xl xl:text-2xl">
                        {project.name}
                      </h2>
                    </>
                  );
                }}
              </AccordionSummary>
              <AccordionDetails className="flex gap-10 px-10 py-5 xl:gap-5 xl:px-5 lg:py-2.5 md:flex-col">
                <a href={project.image} target="_blank" rel="noreferrer">
                  <div className="relative h-[250px] min-w-[500px] shrink-0 2xl:h-[150px] 2xl:min-w-[300px] lg:h-[100px] lg:min-w-[200px] md:h-[200px]">
                    <Image src={project.image} alt={project.name} layout="fill" objectFit="contain" />
                  </div>
                </a>
                <div className="flex flex-col justify-between py-5 2xl:py-2.5 xl:py-0 md:gap-2.5 md:py-2.5">
                  <h3 className="font-fraunces text-3xl font-extrabold 2xl:text-2xl xl:text-xl lg:text-base">
                    Description
                  </h3>
                  <p className="whitespace-pre-wrap font-barlow text-xl font-medium text-zinc-700 2xl:text-base xl:text-sm lg:text-xs">
                    {project.description}
                  </p>

                  <a
                    className="self-start text-xl font-extrabold uppercase text-white/75 transition-colors duration-300 hover:text-current 2xl:text-base xl:text-sm lg:text-xs"
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
