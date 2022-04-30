import axios from "axios";

export const loginTwitter = async () => {
  if (typeof window !== undefined) {
    const { host } = location;
    await axios.get(`http://${host}/api/twitter`)
  }
}