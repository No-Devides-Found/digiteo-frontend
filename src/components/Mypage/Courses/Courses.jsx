import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Program } from "../../../components";

import { withProgram } from "../../../recoil/user";
import { useRecoilValue } from "recoil";

function Courses() {
  const [value, setValue] = useState("1");
  const programs_data = useRecoilValue(withProgram);

  const program_user_maps = programs_data.program_user_maps;
  const programs = programs_data.programs;

  const getProgramProps = (program_id) => {
    const program = programs.filter((el) => {
      return el.id === program_id;
    })[0];
    return {
      id: program.id,
      image: program.thumbnail,
      alt: program.title,
      title: program.title,
      info: program.introduce,
      participants: program.participants_cnt,
      rating: program.score ? program.score : 0,
    };
  };

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
              {program_user_maps.map((item, idx) => {
                return item.wish === true ? (
                  <React.Fragment key={item.program_id}>
                    <Program
                      maxWidth={200}
                      {...getProgramProps(item.program_id)}
                    />
                  </React.Fragment>
                ) : null;
              })}
            </Grid>
          </TabPanel>
          <TabPanel value="2" style={{ padding: 0 }}>
            <Grid>
              {program_user_maps.map((item, idx) => {
                return item.participate === true && item.progress < 100 ? (
                  <React.Fragment key={item.program_id}>
                    <Program
                      maxWidth={200}
                      progress={item.progress}
                      {...getProgramProps(item.program_id)}
                    />
                  </React.Fragment>
                ) : null;
              })}
            </Grid>
          </TabPanel>
          <TabPanel value="3" style={{ padding: 0 }}>
            <Grid>
              {program_user_maps.map((item, idx) => {
                return item.progress === 100 ? (
                  <React.Fragment key={item.program_id}>
                    <Program
                      maxWidth={200}
                      progress={item.progress}
                      {...getProgramProps(item.program_id)}
                    />
                  </React.Fragment>
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
