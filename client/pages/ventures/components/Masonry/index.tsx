import { Box } from "@mui/system";
import React from "react";
import Masonry from "react-masonry-css";
import "./styles.css"

const UseMasonry = ({ items, component }) => {
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((item, i) => {
        return <Box key={i}>{component(item)}</Box>;
      })}
    </Masonry>
  );
};

export default UseMasonry;
