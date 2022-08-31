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
      <InputGroup
        label="Nombre"
        name="name"
        type="text"
        value={name}
        onChangeHandler={onChangeHandler}
        description="Lorem Ipsum Siempre Yendo"
      />
      <InputGroup
        label="Email"
        name="email"
        type="text"
        value={email}
        onChangeHandler={onChangeHandler}
        description="Lorem Ipsum Siempre Yendo"
      />
      <InputGroup
        label="Teléfono"
        name="phone"
        type="number"
        value={phone}
        onChangeHandler={onChangeHandler}
        description="Lorem Ipsum Siempre Yendo"
      />
      <TextArea
        label="Mensaje"
        name="message"
        value={message}
        onChangeHandler={onChangeHandler}
        description="Leave your message"
      />
    </Box>
  );
};

export default Form;
