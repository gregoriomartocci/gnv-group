import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Cards from "../../../../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../../components/Menu";
import api from "../../../../hooks/Api";
import {
  IProject,
  setFilter,
  setProjects,
} from "../../../../redux/slices/projects";
import { errorType } from "../../../profile/ventures";
import { IArticle } from "../../../../redux/slices/articles";

import Venture from "../Venture";
import UseMasonry from "../../../../components/Masonry";
import ventures_mock from "../../../../data/ventures_mock";

export type Props = {
  items: [];
  loading: boolean;
  error: any;
};

const Ventures = ({ items, loading, error }: Props) => {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Box>
      {loading ? (
        <p>cargando</p>
      ) : (
        <UseMasonry
          items={items && items.length ? items : []}
          loading={loading}
          error={error}
          breakpoints={breakpoints}
          component={(item: IProject) => <Venture {...item} />}
        />
      )}
    </Box>
  );
};

export default Ventures;
