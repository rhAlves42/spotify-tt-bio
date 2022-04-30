
import axios from 'axios';

const twitterInstance = axios.create({
  baseURL: process.env.TWITTER_BASE_URL || ''
  
})
export const authTwitter = async ():Promise<void> => {
 if (typeof window !== undefined) {
   const { host } = location;
   const encodedURL = encodeURIComponent(`https://${host}/return-twitter`)
   console.log('chamando função dentro da API')
   return await twitterInstance.post(`request_token?oauth_callback=${encodedURL}`).catch(err => err);
 }
}
