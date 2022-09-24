import React, { Fragment } from "react";
import { Box } from "@mui/material";
import InputGroup from "../../../../components/Input";
import TextArea from "../../../../components/Text-Area";

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
  const onChangeHandler = (e: any, value: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      {value && (
        <Box sx={{ width: "100%" }}>
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
                onChangeHandler={onChangeHandler}
                description="Ingrese su nombre"
              />
            </Box>
            <Box sx={{ width: "100%", margin: { xs: "", ms: "0 10px 0 0px" } }}>
              <InputGroup
                label="Email"
                name="email"
                type="text"
                value={value ? value?.email : ""}
                onChangeHandler={onChangeHandler}
                description="Ingrese su email"
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
          />
          <TextArea
            label="Mensaje"
            name="message"
            value={value ? value?.message : ""}
            onChangeHandler={onChangeHandler}
            description="Deje su mensaje"
          />
        </Box>
      )}
    </Fragment>
  );
};

export default Form;
