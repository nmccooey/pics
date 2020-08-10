import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Authorization: Client-ID At8M9rvIXxCrDASxPhstWLih39HuNwBoOkU2p5ihfEk",
  },
});
