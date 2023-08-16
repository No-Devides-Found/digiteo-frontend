import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function Posts() {
  const [value, setValue] = useState("1");
  const [page, setPage] = useState("qna");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePage = (e) => {
    setPage(e.target.value);
    console.log(page);
  };

  return (
    <Box>
      <Container>
        <Typography variant="h6" fontWeight={"bold"}>
          나의 커뮤니티 활동
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="배움터" value="1" />
              <Tab label="나눔터" value="2" />
              <Tab label="좋아요" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" style={{ padding: 0 }}>
            <Grid>
              <ToggleButtonGroup
                color="primary"
                value={page}
                exclusive
                onChange={handlePage}
                aria-label="Platform"
                style={{ width: "100%" }}
              >
                <ToggleButton value="qna" style={{ width: "50%" }}>
                  Q & A
                </ToggleButton>
                <ToggleButton value="agora" style={{ width: "50%" }}>
                  배움터
                </ToggleButton>
              </ToggleButtonGroup>
              {}
            </Grid>
          </TabPanel>
          <TabPanel value="2" style={{ padding: 0 }}>
            <Grid></Grid>
          </TabPanel>
          <TabPanel value="3" style={{ padding: 0 }}>
            <Grid></Grid>
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}

export default Posts;
