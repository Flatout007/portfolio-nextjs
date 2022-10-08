
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity";
import { client } from "../../sanity";
import { Social } from '../../typings';

// query sanity db for all social items
const query: string = groq`
    *[_type=="social"]
`;

/* get the data from sanity db using the above query
  and turn the data into valid javascript
*/
export default function handler(req: NextApiRequest,
    res: NextApiResponse<Social[]>) {

    client.fetch(query).then(function (data: Social[]): void {

        res.status(200).json(data);
    })
}

