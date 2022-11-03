import api from "../hooks/Api";

export const LoginAuth = async (user: any) => {
  const result = await api({
    method: "post",
    path: `/signin`,
    payload: user,
  });
  return result;
};
