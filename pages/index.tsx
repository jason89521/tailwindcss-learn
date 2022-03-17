import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

      <header className="mb-10 flex min-h-[40vh] items-center justify-center bg-sky-400">
        <h1 className="text-center font-fraunces text-8xl font-extrabold text-white">Tailwind CSS learn</h1>
      </header>

      <main>
        <h2 className="mb-10 text-center font-fraunces text-6xl font-bold text-slate-500">Projects list</h2>
        {images.map(image => {
          return <Image key={image.name} src={image.src} alt="" width={500} height={500} />;
        })}
      </main>
    </div>
  );
};

export default Home;
