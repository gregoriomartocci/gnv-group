import React, { Fragment } from "react";
import Admin from "../pages/admin/index";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Home from "./home";

export const Index = () => {
  return <Home />;
};

export default Index;
