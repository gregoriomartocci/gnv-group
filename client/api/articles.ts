import api from "../hooks/Api";

export const CreateArticle = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/article`,
    payload: item,
  });
  return result;
};

export const ReadArticles = async () => {
  const result = await api({
    method: "get",
    path: `/articles`,
    payload: {},
  });
  return result;
};

export const ReadArticle = async (id: string) => {
  const result = await api({
    method: "get",
    path: `/article/${id}`,
    payload: {},
  });
  return result;
};

export const UpdateArticle = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/edit-article/${item?._id}`,
    payload: item,
  });
  return result;
};

export const DeleteArticle = async (id: string) => {
  const result = await api({
    method: "delete",
    path: `/article/${id}`,
    payload: {},
  });
  return result;
};
