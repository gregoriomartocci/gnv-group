import React, { useState } from "react";
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

const Form = ({ value, setValue }: IProps) => {
  const { name, email, phone, message } = value;

  const onChangeHandler = (e, value) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "100%", margin: "0 10px 0 0px" }}>
          <InputGroup
            label="Nombre"
            name="name"
            type="text"
            value={name}
            onChangeHandler={onChangeHandler}
            description="Ingrese su nombre"
          />
        </Box>
        <Box sx={{ width: "100%", margin: "0 0 0 10px" }}>
          <InputGroup
            label="Email"
            name="email"
            type="text"
            value={email}
            onChangeHandler={onChangeHandler}
            description="Ingrese su email"
          />
        </Box>
      </Box>
      <InputGroup
        label="Teléfono"
        name="phone"
        type="number"
        value={phone}
        onChangeHandler={onChangeHandler}
        description="Ingrese su numero de telefono"
      />
      <TextArea
        label="Mensaje"
        name="message"
        value={message}
        onChangeHandler={onChangeHandler}
        description="Deje su mensaje"
      />
    </Box>
  );
};

export default Form;