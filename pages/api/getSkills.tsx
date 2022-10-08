import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity";
import { client } from "../../sanity";
import { Skill } from '../../typings';


// query sanity db for items 
const query: string = groq`
    *[_type == "skill"]
`;

/* get the data from sanity db using the above query
  and turn the data into valid javascript
*/
export default function handler(req: NextApiRequest,
    res: NextApiResponse<Skill[]>) {

    client.fetch(query).then(function (data: Skill[]): void {

        res.status(200).json(data);
    })
}