import api from "../hooks/Api";

export const CreateGalleryItem = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/gallery-item`,
    payload: item,
  });
  return result;
};

export const ReadGalleryItems = async () => {
  const result = await api({
    method: "get",
    path: `/gallery`,
    payload: {},
  });
  return result;
};

export const ReadGalleryItem = async (id: string) => {
  const result = await api({
    method: "get",
    path: `/gallery/${id}`,
    payload: {},
  });
  return result;
};

export const UpdateGalleryItem = async (item: any) => {
  const result = await api({
    method: "post",
    path: `/edit-gallery/${item?._id}`,
    payload: item,
  });
  return result;
};

export const DeleteGalleryItem = async (id: string) => {
  const result = await api({
    method: "delete",
    path: `/gallery/${id}`,
    payload: {},
  });
  return result;
};
