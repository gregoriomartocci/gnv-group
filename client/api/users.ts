import api from "../hooks/Api";

export const CreateUser = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/signup`,
    payload: item,
  });
  return result;
};

export const ReadUsers = async () => {
  const result = await api({
    method: "get",
    path: `/user`,
    payload: {},
  });
  return result;
};

export const ReadUser = async (id: string) => {
  const result = await api({
    method: "get",
    path: `/user/${id}`,
    payload: {},
  });
  return result;
};

export const UpdateUser = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/edit-user/${item?._id}`,
    payload: item,
  });
  return result;
};

export const DeleteUser = async (id: string) => {
  const result = await api({
    method: "delete",
    path: `/user/${id}`,
    payload: {},
  });
  return result;
};
