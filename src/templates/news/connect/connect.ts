import axios from "axios";
import { URL } from "./connect.Const"

const ConnectNews = async () => {
  const resp = await axios.all(URL.map((url) => axios.get(url)));
  return resp;
}
         
export default ConnectNews;