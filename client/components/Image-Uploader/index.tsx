import {
  Alert,
  AlertTitle,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useRef, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { dropFileInput, dropFileInputIcon } from "./Styles";
import * as yup from "yup";
import FileResizer from "react-image-file-resizer";
import { Reorder, useMotionValue } from "framer-motion";

export interface IImagetoUpload {
  lastModified?: number;
  lastModifiedDate?: Date;
  name: string;
  size: number;
  src: string;
  type: string;
  webkitRelativePath?: string;
  width?: any;
  height?: any;
  arrayBuffer: any;
  slice: any;
  stream: any;
  text: any;
}

const resizeFile = (file: Blob) =>
  new Promise((resolve) => {
    FileResizer.imageFileResizer(
      file,
      1280,
      720,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

// Create Image Object for getting the width ad height
const ImageFormater = async (newFile: Blob) => {
  const img = new Image();
  const max_width = 2000;
  const max_height = 2500;
  const encoded = (await resizeFile(newFile)) as string;
  img.src = encoded;
  await img.decode();
  return img.naturalWidth < max_width && img.naturalHeight < max_height;
};

// Convert to Base64
export const convertBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    if (file) {
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    }
  });
};

interface IImageUploader {
  value: any;
  addImage: any;
  removeImage: any;
  reOrderImages?: any;
}

const ImageUploader = ({
  value,
  addImage,
  removeImage,
  reOrderImages,
}: IImageUploader) => {
  const wrapperRef = useRef<any>(null);
  const [errors, setErrors] = useState<string[] | []>([]);

  const y = useMotionValue(0);

  const schema = yup.object().shape({
    attachment: yup
      .mixed()
      .required("File is required")
      .test(
        "fileSize",
        "La imagen supera los 5 MB. Intente con otra",
        (value: IImagetoUpload) => {
          return value?.size <= 50000000;
        }
      )
      .test(
        "fileFormat",
        "El formato de la imagen no es válido",
        (value: IImagetoUpload) => {
          const format = value?.type.split("/")[1];
          const isValid = ["png", "jpg", "svg", "jpeg", "mp4", "webp"].includes(
            format
          );
          return isValid;
        }
      )
      .test(
        "fileResolution",
        "La resolución de la imagen es mayor a 2400x2000. Pruebe con otra imagen",
        (value: IImagetoUpload): any => {
          return ImageFormater(value);
        }
      ),
  });

  // Upload Function
  const onFileDrop = async (e: any) => {
    setErrors([]);
    const newFile = e.target.files[0];

    await schema
      .validate({ attachment: newFile })
      .then(async () => {
        const result = await resizeFile(newFile);
        const { name, size, type } = newFile;
        const image = { name, size, type, src: result };

        addImage(image);
      })
      .catch(({ errors }: any) => {
        if (errors) return setErrors([...errors, errors]);
      });
  };

  // Remove Image
  const fileRemove = (number: number) => {
    const update = value?.filter((_, index) => index !== number);
    removeImage(update);
  };

  return (
    <Box>
      <Box sx={dropFileInput} ref={wrapperRef} component="span">
        <Box>
          <CloudUploadIcon sx={dropFileInputIcon} />
        </Box>
        <Box>
          <Typography sx={{ fontFamily: "Poppins" }}>
            Arrastre o seleccione su imágenes aquí
          </Typography>
          <Box>
            <input
              type="file"
              value=""
              accept="image/png, image/svg, image/png, image/jpeg, image/jpg, image/webpb"
              onChange={onFileDrop}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        {errors?.length >= 1 && (
          <Alert variant="filled" severity="error">
            {errors[0]}
          </Alert>
        )}
      </Box>

      <Reorder.Group
        axis="y"
        values={value}
        onReorder={reOrderImages}
        style={{ maxHeight: 375, overflowY: "auto", marginTop: "20px" }}
        layoutScroll
      >
        {value?.map((file, index) => (
          <Reorder.Item value={file} id={file} key={file?.name}>
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                backgroundColor: "#F5F8FF",
                padding: "15px",
                borderRadius: "5px",
                cursor: "pointer",
                width: "98%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    img: {
                      width: "85px",
                      height: "85px",
                      borderRadius: "5px",
                      objectFit: "cover",
                    },
                  }}
                >
                  <img src={file?.src} alt="Imagen" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: " 0px 20px",
                    fontFamily: "'Poppins' sans-serif",
                  }}
                >
                  <Typography sx={{ fontFamily: "'Poppins' sans-serif" }}>
                    {file?.name}
                  </Typography>
                  <Typography sx={{ fontFamily: "'Poppins' sans-serif" }}>
                    {file?.description}
                  </Typography>
                </Box>
              </Box>
              <IconButton onClick={() => fileRemove(index)}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </Box>
  );
};

export default ImageUploader;
