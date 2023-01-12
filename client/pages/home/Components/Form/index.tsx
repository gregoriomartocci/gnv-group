import React, { Fragment, useRef, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import InputGroup from "../../../../components/Input";
import TextArea from "../../../../components/Text-Area";
import emailjs from "emailjs-com";
import UseButton from "../../../../components/Button";
import useWindowDimensions from "../../../../hooks/ScreenSize";
import { useForm } from "react-hook-form";
import { LegendToggle } from "@mui/icons-material";

interface IError {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Form = () => {
  const email_api = process.env.NEXT_PUBLIC_EMAIL;
  const { width, height } = useWindowDimensions();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [value, setValue] = useState();
  const xs = width && width < 600;

  const validateForm = () => {
    let errors = {};
    if (!value?.name) {
      errors = { ...errors, name: "Por favor ingresa tu nombre" };
    }
    if (!value?.email) {
      errors = {
        ...errors,
        email: "Por favor ingresa tu correo electrónico",
      };
    }
    if (!value?.message) {
      errors = { ...errors, message: "Por favor ingresa tu mensaje" };
    }
    if (!value?.phone) {
      errors = {
        ...errors,
        phone: "Por favor ingrese un numero de telefono",
      };
    }
    setErrors(errors);
  };

  const onChangeHandler = (e: any) => {
    console.log(e.target.name, e.target.value, "que onda brooooo");
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    validateForm();
    console.log(value, "que pasa che");

    if (!errors) {
      try {
        await emailjs.sendForm(
          "service_1122e5d",
          "template_dq3osnp",
          form?.current,
          email_api
        );
        setLoading(false);
        setValue({ name: "", phone: "", email: "", message: "" });
      } catch {
        setLoading(false);
      }
    }
    setLoading(false);
  };

  console.log(value, "Juan Roman Riquelme");

  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", row: "row" },
            }}
          >
            <Box sx={{ width: "100%", margin: { xs: "", ms: "0 10px 0 0px" } }}>
              <InputGroup
                label="Nombre"
                name="name"
                type="text"
                value={value ? value?.name : ""}
                onChangeHandler={(e) => onChangeHandler(e)}
                description="Ingrese su nombre"
                height="100%"
                width="100%"
                inputFontSize={{ xs: "12px", md: "15px" }}
                labelFontSize={{ xs: "12px", md: "15px" }}
              />
              {errors?.name && (
                <Typography sx={{ color: "#ff1744", fontSize: "12px" }}>
                  {errors?.name}
                </Typography>
              )}
            </Box>
            <Box sx={{ width: "100%", margin: { xs: "", ms: "0 10px 0 0px" } }}>
              <InputGroup
                label="Email"
                name="email"
                type="text"
                value={value ? value?.email : ""}
                onChangeHandler={(e) => onChangeHandler(e)}
                description="Ingrese su email"
                height="100%"
                width="100%"
                inputFontSize={{ xs: "12px", md: "15px" }}
                labelFontSize={{ xs: "12px", md: "15px" }}
              />
              {errors?.email && (
                <Typography sx={{ color: "#ff1744", fontSize: "12px" }}>
                  {errors?.email}
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <InputGroup
              label="Teléfono"
              name="phone"
              type="number"
              value={value ? value?.phone : ""}
              onChangeHandler={(e) => onChangeHandler(e)}
              description="Ingrese su numero de telefono"
              height="100%"
              width="100%"
              inputFontSize={{ xs: "12px", md: "15px" }}
              labelFontSize={{ xs: "12px", md: "15px" }}
            />
            {errors?.phone && (
              <Typography sx={{ color: "#ff1744", fontSize: "12px" }}>
                {errors?.phone}
              </Typography>
            )}
          </Box>
          <Box>
            <TextArea
              label="Mensaje"
              name="message"
              value={value ? value?.message : ""}
              onChangeHandler={(e) => onChangeHandler(e)}
              description="Deje su mensaje"
              height={{ xs: "80px", md: "125px" }}
              width="100%"
              inputFontSize={{ xs: "12px", md: "15px" }}
              labelFontSize={{ xs: "12px", md: "15px" }}
            />
            {errors.message && (
              <Typography
                sx={{ color: "#ff1744", fontSize: "12px", marginTop: "5px" }}
              >
                {errors?.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ width: "100%", margin: "20px 0 0 0 " }}>
            {loading ? (
              <UseButton type="Primary" width="100%">
                <CircularProgress style={{ color: "#fff" }} />
              </UseButton>
            ) : (
              <input
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: xs ? "16px" : "18px",
                  backgroundColor: "#212121",
                  borderRadius: "7.5px",
                  padding: xs ? "10px 50px" : "15px 50px",
                  whiteSpace: "nowrap",
                  color: "#fff",
                  textTransform: "unset",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                }}
                type="submit"
                value={
                  loading ? (
                    <CircularProgress style={{ color: "#fff" }} />
                  ) : (
                    "enviar"
                  )
                }
              />
            )}
          </Box>
        </form>
      </Box>
    </Fragment>
  );
};

export default Form;
