import api from "../hooks/Api";

export const CreateNew = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/article`,
    payload: item,
  });
  return result;
};

export const ReadNews = async () => {
  const result = await api({
    method: "get",
    path: `/articles`,
    payload: {},
  });
  return result;
};

export const ReadNew = async (id: string) => {
  const result = await api({
    method: "get",
    path: `/article/${id}`,
    payload: {},
  });
  return result;
};

export const UpdateNew = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/edit-project/${item?._id}`,
    payload: item,
  });
  return result;
};

export const DeleteNew = async (id: string) => {
  const result = await api({
    method: "delete",
    path: `/article/${id}`,
    payload: {},
  });
  return result;
};
