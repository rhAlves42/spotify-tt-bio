import {authTwitter} from '../services/twitter';
import tryCatch from '../hooks/tryCatch'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const promise = authTwitter()
  const [result, error ]= await tryCatch({req: promise});
  if (error) return res.status(400).json(error);
  res.status(200).json(result)
  
}