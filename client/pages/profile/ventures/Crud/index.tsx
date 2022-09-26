import api from "../../../../hooks/Api";

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

export const UpdateProject = async (item: any) => {
  console.log(item, "CHEEEEEE");

  const result = await api({
    method: "post",
    path: `/edit-project/${item?._id}`,
    payload: item,
  });
  return result;
};

export const DeleteProject = async (id: any) => {

  console.log(id, "QUE ONDA PACHUUUU")

  const result = await api({
    method: "post",
    path: `/delete/${id}`,
    payload: {},
  });
  return result;
};
