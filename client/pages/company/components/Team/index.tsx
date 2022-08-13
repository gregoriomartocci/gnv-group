import React from "react";
import { Box } from "@mui/material";
import Cards from "../../../../components/Cards";
import Member from "./Components/Member";

type TTeamProps = {
  members: any[];
};

const Team = ({ members }: TTeamProps) => {
  return (
    <Box>
      <Cards
        items={members}
        component={(item) => <Member {...item} />}
        columns={4}
        gap="50px"
      />
    </Box>
  );
};

export default Team;
