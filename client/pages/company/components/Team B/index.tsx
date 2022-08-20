import React, { Fragment } from "react";
import { Box } from "@mui/material";
import Cards from "../../../../components/Cards";
import Member from "./Components/Member";

type TTeamProps = {
  members: any[];
};

const TeamB = ({ members }: TTeamProps) => {
  const filterMembers = (members: any[], number: number) => {
    const membersFiltered = members.filter((m) => m.priority === number);
    return membersFiltered;
  };

  const gap = "65px";

  return (
    <Box>
      <Box sx={{ margin: `${gap} 0 0 0` }}>
        <Cards
          items={filterMembers(members, 1)}
          component={(item) => <Member {...item} />}
          columns={1}
          gap={gap}
        />
      </Box>
      <Box sx={{ margin: `${gap} 0 0 0` }}>
        <Cards
          items={filterMembers(members, 2)}
          component={(item) => <Member {...item} />}
          columns={2}
          gap={gap}
        />
      </Box>
      <Box sx={{ margin: `${gap} 0 0 0` }}>
        <Cards
          items={filterMembers(members, 3)}
          component={(item) => <Member {...item} />}
          columns={3}
          gap={gap}
        />
      </Box>
      <Box sx={{ margin: `${gap} 0 0 0` }}>
        <Cards
          items={filterMembers(members, 4)}
          component={(item) => <Member {...item} />}
          columns={4}
          gap={gap}
        />
      </Box>
    </Box>
  );
};

export default TeamB;
