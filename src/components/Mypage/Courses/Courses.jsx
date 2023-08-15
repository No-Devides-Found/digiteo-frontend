import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Program } from "../../../components";

function Courses() {
  const [value, setValue] = useState("1");

  const programs = [
    { wish: false, participate: true, progress: 15 },
    { wish: true, participate: false, progress: 0 },
    { wish: true, participate: true, progress: 50 },
    { wish: true, participate: true, progress: 100 },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Container>
        <Typography variant="h6" fontWeight={"bold"}>
          프로그램 참여 현황
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="찜한 프로그램" value="1" />
              <Tab label="참여 중인 프로그램" value="2" />
              <Tab label="이수한 프로그램" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" style={{ padding: 0 }}>
            <Grid>
              {programs.map((item, idx) => {
                return item.wish === true ? <Program maxWidth={200} /> : null;
              })}
            </Grid>
          </TabPanel>
          <TabPanel value="2" style={{ padding: 0 }}>
            <Grid>
              {programs.map((item, idx) => {
                return item.participate === true && item.progress < 100 ? (
                  <Program maxWidth={200} progress={item.progress} />
                ) : null;
              })}
            </Grid>
          </TabPanel>
          <TabPanel value="3" style={{ padding: 0 }}>
            <Grid>
              {programs.map((item, idx) => {
                return item.progress === 100 ? (
                  <Program maxWidth={200} progress={item.progress} />
                ) : null;
              })}
            </Grid>
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}

export default Courses;
