import axios from "axios";

export const loginTwitter = async () => {
  if (typeof window !== undefined) {
    const { host } = location;
    await axios.get(`https://${host}/api/twitter`)
  }
}