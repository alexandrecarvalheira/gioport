import axios from "axios";
const fetchFromCMS = async (path) => {
  const url = `http://localhost:1337/api/${path}?populate=*`;
  const res = await axios.get(url);
  const res2 = res.data;
  return res2.data;
};
export default fetchFromCMS;
