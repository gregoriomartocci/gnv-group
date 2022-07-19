import axios from "axios";

type HTTPMethods = {
  get: string;
  post: string;
  put: string;
  delete: string;
};

interface IFetch {
  path: string;
  payload?: any;
  method: keyof HTTPMethods;
}

const api = async ({ path, payload, method }: IFetch) => {
  
  if (typeof window) {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
  } else {
    axios.defaults.baseURL = process.env.API;
  }

  try {
    if (payload !== {}) {
      const { data } = await axios[method](path, payload);
      return data;
    }
    const { data } = await axios[method](path);
    return data;

  } catch (err) {
    return err;
  }

};

export default api;
