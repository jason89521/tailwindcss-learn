// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export type ProjectData = {
  name: string;
  description: string;
  image: string;
  pageName: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ProjectData[]>) {
  const projectsDir = path.resolve('public', 'projects');
  const projectsName = fs.readdirSync(projectsDir);

  const data = projectsName.map(projectName => {
    const image = `/projects/${projectName}/image.png`;
    const description = fs.readFileSync(`${projectsDir}/${projectName}/description.txt`, 'utf-8');
    const name = projectName.replace(/-/g, ' ');
    const pageName = projectName;
    return { name, description, image, pageName };
  });

  res.status(200).json(data);
}
