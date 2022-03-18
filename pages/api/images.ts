// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = {
  images: { src: string; name: string }[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const projectsDir = path.resolve('public', 'projects');
  const imagesFilenames = fs.readdirSync(projectsDir + '/images');
  const descriptionsFilenames = fs.readdirSync(projectsDir + '/descriptions');

  const images = imagesFilenames.map(filename => {
    const src = `/projects/images/${filename}`;
    const name = filename.replace(/-/g, ' ');

    return {
      src,
      name: name.slice(0, -4),
    };
  });

  const textFile = fs.readFileSync('./public/projects/descriptions/test.txt', 'utf-8');
  console.log(textFile);

  res.status(200).json({ images: images });
}
