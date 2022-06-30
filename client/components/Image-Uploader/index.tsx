import {
  Alert,
  AlertTitle,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useRef, useState } from "react";
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
import UseButton from "../Button";


export interface IImagetoUpload {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
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
const convertBase64 = (file: any) => {
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

const ImageUploader = () => {
  const wrapperRef = useRef<any>(null);
  const [file, setFile] = useState<IImagetoUpload[] | []>([]);
  const [errors, setErrors] = useState<string[] | []>([]);
  const [base64, setBase64] = useState<string[] | []>([]);

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
          console.log("Format", format);
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

  // Upload Image
  const uploadImage = async (file: IImagetoUpload) => {
    const result = await convertBase64(file);
    typeof result === "string" && setBase64([...base64, result]);
  };

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = async (e: any) => {
    setErrors([]);
    setFile([]);

    const newFile = e.target.files[0];

    await schema
      .validate({ attachment: newFile })
      .then(() => {
        setFile([...file, newFile]);
        uploadImage(newFile);
      })
      .catch(({ errors }: any) => {
        return setErrors([...errors, errors]);
      });
  };

  // Remove Image
  const fileRemove = (name: string) => {
    const update = file.filter((f) => f.name !== name);
    setFile(update);
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
        {file?.map((file, index) => {
          return (
            <Box sx={dropFilePreviewItem}>
              <Box sx={dropFilePreviewTitleItemInfo}>
                <Box sx={imageContainer}>
                  <img src={base64[index]} alt="" />
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
              <IconButton onClick={() => fileRemove(file?.name)}>
                <CloseIcon />
              </IconButton>
            </Box>
          );
        }) ?? null}
      </Box>

      {file?.length >= 1 && <UseButton type="Blue">Subir Imágenes</UseButton>}
    </Fragment>
  );
};

export default ImageUploader;