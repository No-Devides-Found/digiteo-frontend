import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
function MyPractice() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Container>
        <Typography variant="h6" fontWeight={"bold"}>
          나의 창작마루
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="내가 올린 창작물" value="1" />
              <Tab label="좋아요" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" style={{ padding: 0 }}>
            <Grid></Grid>
          </TabPanel>
          <TabPanel value="2" style={{ padding: 0 }}>
            <Grid></Grid>
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}
export default MyPractice;
