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
import {
  dropFileInput,
  dropFileInputIcon,
  dropFilePreview,
  dropFilePreviewItem,
  dropFilePreviewTitleItemInfo,
  imageContainer,
  InfoMessage,
} from "./Styles";
import * as yup from "yup";
import { inputType } from "../../pages/profile/projects/components/Create";

export interface IImagetoUpload {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  src: string;
  type: string;
  webkitRelativePath: string;
  width?: any;
  height?: any;
}

// Create Image Object for getting the width ad height
const ImageFormater = async (newFile: IImagetoUpload) => {
  const img = new Image();
  const max_width = 2500;
  const max_height = 2000;
  const encoded = (await convertBase64(newFile)) as string;
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
  value: inputType;
  setValue: any;
}

const ImageUploader = ({ value, setValue }: IImageUploader) => {
  const wrapperRef = useRef<any>(null);
  const [errors, setErrors] = useState<string[] | []>([]);
  const [base64, setBase64] = useState<string[] | []>([]);

  console.log(base64);

  const schema = yup.object().shape({
    attachment: yup
      .mixed()
      .required("File is required")
      .test(
        "fileSize",
        "La imagen supera los 5 MB. Intente con otra",
        (value: IImagetoUpload) => {
          console.log(value, "AVER CHEE");
          return value?.size <= 50000000;
        }
      )
      .test(
        "fileFormat",
        "El formato de la imagen no es válido",
        (value: IImagetoUpload) => {
          const format = value?.type.split("/")[1];
          const isValid = ["png", "jpg", "svg", "jpeg"].includes(format);
          return isValid;
        }
      )
      .test(
        "fileResolution",
        "La resolución de la imagen es mayor a 2400x2000. Pruebe con otra imagen",
        (value: IImagetoUpload): any => {
          // const maxSize = 250;
          // return !value || (value && value.size <= maxSize * maxSize);
          return ImageFormater(value);
        }
      ),
  });

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = async (e: any) => {
    setErrors([]);

    const newFile = e.target.files[0];

    console.log(newFile, "fileee");

    await schema
      .validate({ attachment: newFile })
      .then(async () => {
        const result = await convertBase64(newFile);
        const { name, size, type } = newFile;
        const image = { name, size, type, src: result };
        setValue({ ...value, images: [...value?.images, image] });
      })
      .catch(({ errors }: any) => {
        if (errors) return setErrors([...errors, errors]);
      });
  };

  // Remove Image
  const fileRemove = (number: number) => {
    const update = value?.images?.filter((_, index) => index !== number);
    setValue({ ...value, images: update });
  };

  // Conver KB Format
  const Convert = (n: number): number => {
    return n / 1000;
  };

  return (
    <Fragment>
      <Fragment>
        <Box
          sx={dropFileInput}
          ref={wrapperRef}
          component="span"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
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
                accept="image/png, image/svg, image/png, image/jpeg, image/jpg"
                onChange={onFileDrop}
              />
            </Box>
          </Box>
        </Box>
        <Alert
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px 0",
            borderRadius: "10px",
          }}
          variant="outlined"
          severity="info"
        >
          <Box sx={{ margin: "0 15px", fontFamily: "'Poppins' sans-serif" }}>
            <Typography sx={InfoMessage}>
              • La imagen no puede ser superior a 5KB
            </Typography>
            <Typography sx={InfoMessage}>
              • La resolución debe ser menor a 1920x1080 px
            </Typography>
            <Typography sx={InfoMessage}>
              • Sólo se admiten imágenes con formato png, jpg, jpeg, svg.
            </Typography>
          </Box>
        </Alert>
        <Box>
          {errors?.length >= 1 && (
            <Alert variant="filled" severity="error">
              {errors[0]}
            </Alert>
          )}
        </Box>
      </Fragment>

      <Box sx={dropFilePreview}>
        {value?.images?.map((file, index) => {
          return (
            <Box key={index} sx={dropFilePreviewItem}>
              <Box sx={dropFilePreviewTitleItemInfo}>
                <Box sx={imageContainer}>
                  <img src={file.src} alt="" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: " 0px 20px",
                  }}
                >
                  <Typography>{file?.name}</Typography>
                  <Typography style={{ fontSize: "14px", fontWeight: 500 }}>
                    {Convert(file?.size)} KB
                  </Typography>
                </Box>
              </Box>
              <IconButton onClick={() => fileRemove(index)}>
                <CloseIcon />
              </IconButton>
            </Box>
          );
        }) ?? null}
      </Box>

      {/* {file?.length >= 1 && <UseButton type="Blue">Subir Imágenes</UseButton>} */}
    </Fragment>
  );
};

export default ImageUploader;
