import api from "../hooks/Api";

export const CreateTimelineItem = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/timeline`,
    payload: item,
  });
  return result;
};

export const ReadTimeline = async () => {
  const result = await api({
    method: "get",
    path: `/timeline`,
    payload: {},
  });
  return result;
};

export const ReadTimelineItem = async (id: string) => {
  const result = await api({
    method: "get",
    path: `/timeline/${id}`,
    payload: {},
  });
  return result;
};

export const UpdateTimelineItem = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/edit-timeline/${item?._id}`,
    payload: item,
  });
  return result;
};

export const DeleteTimelineItem = async (id: string) => {
  const result = await api({
    method: "delete",
    path: `/timeline/${id}`,
    payload: {},
  });
  return result;
};
