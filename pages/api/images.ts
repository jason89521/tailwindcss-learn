// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = {
  images: { src: string; name: string }[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const dir = path.resolve('./public', 'images/demo-image');
  const filenames = fs.readdirSync(dir);

  const images = filenames.map(filename => {
    const src = `/images/demo-image/${filename}`;
    const name = filename.replaceAll('-', ' ');

    return {
      src,
      name: name.slice(0, -4),
    };
  });

  res.status(200).json({ images: images });
}
