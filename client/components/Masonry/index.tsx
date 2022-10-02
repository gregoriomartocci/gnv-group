import { Box } from "@mui/system";
import React from "react";
import Masonry from "react-masonry-css";

type TUseMasonry = {
  items: any[];
  component: any;
  laoding: boolean;
  breakpoints: any;
};

const UseMasonry = ({ items, component, breakpoints }: TUseMasonry) => {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items
        ? items?.map((item, i) => {
            return <Box key={i}>{component(item)}</Box>;
          })
        : []}
    </Masonry>
  );
};

export default UseMasonry;
