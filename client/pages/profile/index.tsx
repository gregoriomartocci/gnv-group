import React, { Fragment } from "react";
import Dashboard from "../../components/Dashboard";
import useValidateToken from "../../hooks/validateToken/Index";
import Layout from "./layout";

const Index = () => {
  const { validate } = useValidateToken();
  return <Fragment> {validate && <Layout />} </Fragment>;
};

export default Index;
