import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../../constants";
import { Box, Grid, Container, Typography, Paper } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "@emotion/styled";

import { DetailedPlaygroundTitle } from "../../components";

const ContentPaper = styled(Paper)({
  backgroundColor: "#FFF3E0",
  borderRadius: "20px",
  padding: "2rem 3rem",
});

function DetailedPlayground() {
  let { id } = useParams();
  const [program, setProgram] = useState();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // assignment_id: 1;
  // category: 4;
  // id: 1;
  // introduce: "ㄹㄴㄹㄴㄹㄴㄹㄴㄹ";
  // participants_cnt: 2;
  // score: null;
  // tag: ["1번프로그램"];
  // thumbnail: "http://localhost:8000/media/programs/thumbnail/20230817/%ED%94%84%EC%82%AC.jpg";
  // title: "ㅇㅇㅇㅇㅇㅇ";

  useEffect(() => {
    const init = async () => {
      await axios.get(`${server}/programs/program/${id}/`).then((res) => {
        console.log(res.data);
        setProgram(res.data);
      });
    };
    init();
  }, []);

  return (
    program && (
      <>
        {/* 프로그램 타이틀 */}
        <DetailedPlaygroundTitle program={program} />
        <Container style={{ padding: "4rem" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#00C853",
                  },
                }}
                textColor="dark"
              >
                <Tab label="프로그램 소개" value="1" />
                <Tab label="Q&A 게시판" value="2" />
                <Tab label="참여 후기" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{ padding: 0 }}>
              <Grid>
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{ mt: "4rem", mb: "2rem" }}
                >
                  프로그램 소개
                </Typography>
                <ContentPaper>{program.introduce}</ContentPaper>
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
      </>
    )
  );
}

export default DetailedPlayground;
