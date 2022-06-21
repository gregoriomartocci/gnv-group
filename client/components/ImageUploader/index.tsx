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
  const max_size = 500;
  const encoded = (await convertBase64(newFile)) as string;
  img.src = encoded;
  await img.decode();
  return img.naturalWidth < max_size && img.naturalHeight < max_size;
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
  const schema = yup.object().shape({
    attachment: yup
      .mixed()
      .required("File is required")
      .test(
        "fileSize",
        "La imagen supera los 5 MB. Intente con otra",
        (value: IImagetoUpload) => {
          return value?.size <= 5000;
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
        "La resolución de la imagen es mayor a 1920x1080. Pruebe con otra imagen",
        (value: IImagetoUpload): any => {
          // const maxSize = 250;
          // return !value || (value && value.size <= maxSize * maxSize);
          return ImageFormater(value);
        }
      ),
  });

  const wrapperRef = useRef<any>(null);
  const [file, setFile] = useState<IImagetoUpload | null>(null);
  const [error, setErrors] = useState<string[] | []>([]);
  const [base64, setBase64] = useState<any>("");

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  // Upload Image
  const uploadImage = async (file: IImagetoUpload) => {
    const result = await convertBase64(file);
    setBase64(result);
  };

  file !== null && ImageFormater(file);

  const onFileDrop = async (e: any) => {
    setErrors([]);
    setFile(null);

    const newFile = e.target.files[0];

    await schema
      .validate({ attachment: newFile })
      .then(() => {
        setFile(newFile);
        uploadImage(newFile);
      })
      .catch(({ errors }: any) => {
        return setErrors(errors);
      });
  };

  // Remove Image
  const fileRemove = () => {
    setFile(null);
  };

  // Conver KB Format
  const Convert = (n: number): number => {
    return n / 1000;
  };

  return (
    <Fragment>
      {!file && (
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
              <Typography>Arrastre o seleccione su imágenes aquí</Typography>
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
              <Typography sx={{ margin: "2.5px 0", fontSize: "14px" }}>
                La imagen no puede ser superior a 5KB
              </Typography>
              <Typography sx={{ margin: "2.5px 0", fontSize: "14px" }}>
                y su resolución debe ser menor a 1920x1080 px
              </Typography>
              <Typography sx={{ margin: "2.5px 0", fontSize: "14px" }}>
                Sólo se admiten imágenes con formato png, jpg, jpeg, svg.
              </Typography>
            </Box>
          </Alert>
        </Fragment>
      )}

      <Box sx={dropFilePreview}>
        <Box>
          {error?.length >= 1 &&
            error?.map((e, index) => (
              <Alert key={index} variant="filled" severity="error">
                {e}
              </Alert>
            ))}
        </Box>
        {file ? (
          <Fragment>
            <Box sx={dropFilePreviewItem}>
              <Box sx={dropFilePreviewTitleItemInfo}>
                <Box sx={imageContainer}>
                  <img src={base64} alt="" />
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
              <IconButton onClick={fileRemove}>
                <CloseIcon />
              </IconButton>
            </Box>

            <UseButton type="Blue">Subir Imágenes</UseButton>
          </Fragment>
        ) : null}
      </Box>
    </Fragment>
  );
};

export default ImageUploader;
