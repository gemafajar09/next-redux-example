import axios from "axios";
import { getCookie  } from "../utils/cookie"

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getCookie('token')}`
  }
});