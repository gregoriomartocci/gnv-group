import api from "../hooks/Api";

export const Login = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/signin`,
    payload: item,
  });
  return result;
};
