import api from "../hooks/Api";

export const CreateProject = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/project`,
    payload: item,
  });
  return result;
};

export const ReadProjects = async () => {
  const result = await api({
    method: "get",
    path: `/projects`,
    payload: {},
  });
  return result;
};

export const ReadProject = async (id: string) => {
  const result = await api({
    method: "get",
    path: `/project/${id}`,
    payload: {},
  });
  return result;
};

export const UpdateProject = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/edit-project/${item?._id}`,
    payload: item,
  });
  return result;
};

export const DeleteProject = async (id: string) => {
  const result = await api({
    method: "delete",
    path: `/project/${id}`,
    payload: {},
  });
  return result;
};
