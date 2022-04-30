
import axios from 'axios';

const twitterInstance = axios.create({
  baseURL: process.env.TWITTER_BASE_URL || ''
})
export const authTwitter = async ():Promise<void> => {
  console.log('processs.envasda', process.env.GATSBY_TWITTER_BASE_URL)
  console.log('processs.envasda', process.env.TWITTER_BASE_URL)
  console.log('processs.envasda', process.env.GATSBY)
  return await twitterInstance.post(`request_token`);
}