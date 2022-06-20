import React, { Fragment as Box } from "react";
import Dashboard from "../../../components/Dashboard";
import CreateProject from "./components/Create";
import UseTable from "./components/Table";

const Posts = () => {
  return (
    <Dashboard>
      <UseTable>
        <CreateProject />
      </UseTable>
    </Dashboard>
  );
};

export default Posts;
