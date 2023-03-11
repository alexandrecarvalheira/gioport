import axios from "axios";
export const fetchPostlist = async () => {
  const url = `https://gio-port.fly.dev/api/collections/portfolio_items/records`;
  const res = await axios.get(url);
  return res.data.items;
};
export const fetchPost = async (id) => {
  console.log(id);
  const url = `https://gio-port.fly.dev/api/collections/portfolio_items/records/${id}`;
  const res = await axios.get(url);
  return res.data;
};
