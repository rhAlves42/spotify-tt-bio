
import axios from 'axios';

const twitterInstance = axios.create({
  baseURL: process.env.TWITTER_BASE_URL || ''
  
})
export const authTwitter = async ():Promise<void> => {
  console.log('processs.envasda', process.env.TWITTER_BASE_URL)
 if (typeof window !== undefined) {
   const { host } = location;
   const encodedURL = encodeURIComponent(`https://${host}/return-twitter`)
   return await twitterInstance.post(`request_token?oauth_callback=${encodedURL}`);
 }
}