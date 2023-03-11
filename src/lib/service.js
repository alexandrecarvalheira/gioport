import axios from "axios";
const fetchFromCMS = async () => {
  const url = `https://gio-port.fly.dev/api/collections/portfolio_items/records`;
  const res = await axios.get(url);
  console.log(res.data.items);
  return res.data.items;
};
export default fetchFromCMS;
