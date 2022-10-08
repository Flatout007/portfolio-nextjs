
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity";
import { client } from "../../sanity";
import { Social } from '../../typings';

const query: string = groq`
*[_type == "experience"]{
    ..., techStack[]->
  }
`;

export default function handler(req: NextApiRequest,
    res: NextApiResponse<Social[]>) {

    client.fetch(query).then(function (data: Social[]): void {

        res.status(200).json(data);
    })
}

