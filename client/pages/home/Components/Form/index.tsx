import React, { Fragment, useRef, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import InputGroup from "../../../../components/Input";
import TextArea from "../../../../components/Text-Area";
import emailjs from "emailjs-com";
import UseButton from "../../../../components/Button";

type TValue = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface IProps {
  value: {
    name: string;
    email: string;
    phone: number;
    message: string;
  };
  setValue: any;
}

const Form = ({ value, setValue }: any) => {
  const email_api = process.env.NEXT_PUBLIC_EMAIL;
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e: any, value: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_1122e5d",
        "template_dq3osnp",
        form?.current,
        email_api
      );
      setLoading(false);
      setValue({ name: "", phone: "", email: "", message: "" });
      console.log("que pasa che");
    } catch {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      {value && (
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
              <Box
                sx={{ width: "100%", margin: { xs: "", ms: "0 10px 0 0px" } }}
              >
                <InputGroup
                  label="Nombre"
                  name="name"
                  type="text"
                  value={value ? value?.name : ""}
                  onChangeHandler={onChangeHandler}
                  description="Ingrese su nombre"
                  height="100%"
                  width="100%"
                  inputFontSize="16px"
                  labelFontSize="18px"
                />
              </Box>
              <Box
                sx={{ width: "100%", margin: { xs: "", ms: "0 10px 0 0px" } }}
              >
                <InputGroup
                  label="Email"
                  name="email"
                  type="text"
                  value={value ? value?.email : ""}
                  onChangeHandler={onChangeHandler}
                  description="Ingrese su email"
                  height="100%"
                  width="100%"
                  inputFontSize="18px"
                  labelFontSize="18px"
                />
              </Box>
            </Box>
            <InputGroup
              label="Teléfono"
              name="phone"
              type="number"
              value={value ? value?.phone : ""}
              onChangeHandler={onChangeHandler}
              description="Ingrese su numero de telefono"
              height="100%"
              width="100%"
              inputFontSize="18px"
              labelFontSize="18px"
            />
            <TextArea
              label="Mensaje"
              name="message"
              value={value ? value?.message : ""}
              onChangeHandler={onChangeHandler}
              description="Deje su mensaje"
              height="125px"
              width="100%"
              fontSize="18px"
     
            />
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
                    fontSize: "17px",
                    backgroundColor: "#212121",
                    borderRadius: "7.5px",
                    padding: "20px 50px",
                    whiteSpace: "nowrap",
                    color: "#fff",
                    textTransform: "unset",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  type="submit"
                  value={
                    loading ? (
                      <CircularProgress style={{ color: "#fff" }} />
                    ) : (
                      "ENVIAR"
                    )
                  }
                />
              )}
            </Box>
          </form>
        </Box>
      )}
    </Fragment>
  );
};

export default Form;
