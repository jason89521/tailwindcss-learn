import React, { useCallback, useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';

import dividerImg from 'public/images/advice-generator/pattern-divider-desktop.svg';
import diceImg from 'public/images/advice-generator/icon-dice.svg';

interface ResponseData {
  id: number;
  advice: string;
}

interface Props {
  initData: ResponseData;
}

const AdviceGenerator = ({ initData }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ResponseData>(initData);

  const getRandomAdvice = useCallback(async () => {
    const responseData = await (await fetch('https://api.adviceslip.com/advice')).json();
    setData(responseData.slip);
  }, []);

  const handleClick = useCallback(async () => {
    // prevent users from making multiple requests
    if (isLoading) return;

    setIsLoading(true);
    await getRandomAdvice();
    setIsLoading(false);
  }, [isLoading, getRandomAdvice]);

  return (
    <div className="root flex min-h-screen items-center justify-center px-4">
      <div className="card relative flex max-w-lg flex-col items-center gap-6 rounded-xl p-12 pb-16 text-center">
        <div className="color-green font-medium uppercase tracking-[.3em]">
          Advice <span>#{data?.id}</span>
        </div>
        <div className="font-[sans-serif] text-2xl font-bold tracking-wide before:content-['\201C'] after:content-['\201D']">
          <span className="font-['Manrope']">{data?.advice}</span>
        </div>
        <div>
          <Image src={dividerImg} alt="" />
        </div>
        <button
          className="btn bg-green absolute bottom-0 flex translate-y-half items-center rounded-full p-4 transition-all hover:rotate-180"
          onClick={handleClick}
        >
          <Image src={diceImg} alt="button to generate new advice" />
        </button>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
        .root {
          background-color: hsl(218, 23%, 16%);
        }
        .card {
          background-color: hsl(217, 19%, 24%);
          color: hsl(193, 38%, 86%);
        }
        .color-green {
          color: hsl(150, 100%, 66%);
        }
        .bg-green {
          background-color: hsl(150, 100%, 66%);
        }
        .btn:hover {
          background-color: hsl(150, 100%, 70%);
          box-shadow: 0 0 20px 15px hsla(150, 100%, 77%, 0.3);
        }
        @media (max-width: 500px) {
          .card {
            padding: 1.5rem;
            padding-bottom: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

const getStaticProps: GetStaticProps = async () => {
  const responseData = await (await fetch('https://api.adviceslip.com/advice')).json();
  return {
    props: {
      initData: responseData.slip,
    },
  };
};

export default AdviceGenerator;
export { getStaticProps };
