import React, { Fragment as Box } from "react";
import Dashboard from "../../../components/Dashboard";
import UseTable from "../projects/components/Table";
import CreateUser from "./components/Create";

const Posts = () => {
  return (
    <Dashboard>
      <UseTable>
        <CreateUser/>
      </UseTable>
    </Dashboard>
  );
};

export default Posts;
