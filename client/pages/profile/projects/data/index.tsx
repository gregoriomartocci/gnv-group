interface Data {
  id: number;
  name: string;
  username: number;
  property: number;
  created: string;
  img: string;
}

function createData(
  id: number,
  name: string,
  username: number,
  property: number,
  created: string,
  img: string
): Data {
  return {
    id,
    name,
    username,
    property,
    created,
    img,
  };
}

export const rows = [
  createData(
    1234124,
    "Sebastian Poto",
    3.7,
    67,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    4354354,
    "Sebastian Poto",
    25.0,
    51,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    5454333,
    "Sebastian Poto",
    16.0,
    24,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    2334443,
    "Sebastian Poto",
    6.0,
    24,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    3433344,
    "Sebastian Poto",
    16.0,
    49,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    7657567,
    "Sebastian Poto",
    3.2,
    87,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    5554435,
    "Sebastian Poto",
    9.0,
    37,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    4568724,
    "Sebastian Poto",
    0.0,
    94,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    3455554,
    "Sebastian Poto",
    8,
    26.0,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    3433244,
    "Sebastian Poto",
    0.2,
    98,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    4545433,
    "Sebastian Poto",
    0,
    81,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    3455543,
    "Sebastian Poto",
    0,
    19.0,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
  createData(
    3444544,
    "Sebastian Poto",
    18.0,
    63,
    "23/7/95",
    "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg"
  ),
];
