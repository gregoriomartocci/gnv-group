import React from "react";
import { Box } from "@mui/material";
import Cards from "../../../../components/Cards";
import GalleryItem from "./Components/Gallery-Item";

const ArtGallery = ({ gallery }) => {
  return (
    <Box>
      <Cards
        items={gallery}
        component={(item) => <GalleryItem {...item} />}
        columns={4}
        rows={0}
        gap="50px"
      />
    </Box>
  );
};

export default ArtGallery;
