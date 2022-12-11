import axios from "axios";
import { URL } from "./connect.Const"

const ConnectNewsList = async () => {
  const res = await axios.get(URL);
  return res;
}
         
export default ConnectNewsList;