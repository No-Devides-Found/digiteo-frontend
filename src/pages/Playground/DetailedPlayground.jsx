import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../../constants";
import {
  Box,
  Grid,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "@emotion/styled";

import { EvaluationList } from "../../components";

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

  const [comment, setComment] = useState("");
  const onChange = (e) => {
    setComment(e.target.value);
  };
  const onClick = (e) => {
    setComment(""); //댓글 작성창 초기화
    //comment 보내기
  };

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
              <Container>
                <Grid sx={{ mt: "4rem", mb: "2rem" }}>
                  <Typography variant="h6" fontWeight={"bold"}>
                    프로그램 소개
                  </Typography>
                  <ContentPaper>{program.introduce}</ContentPaper>
                </Grid>
              </Container>
            </TabPanel>
            <TabPanel value="2" style={{ padding: 0 }}>
              <Grid></Grid>
            </TabPanel>
            <TabPanel value="3" style={{ padding: 0 }}>
              <Container>
                <Grid sx={{ mt: "4rem", mb: "2rem" }}>
                  <Typography variant="h6" component="span" fontWeight={"bold"}>
                    참여후기{" "}
                  </Typography>
                  <Typography
                    variant="p"
                    component="span"
                    fontWeight={"bold"}
                    color={"text.disabled"}
                  >
                    (총 {program.reviews.length}개)
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      multiline
                      value={comment}
                      onChange={onChange}
                      placeholder="후기를 작성해보세요. (500자 이내)"
                      rows={6}
                      style={{ width: "100%", margin: "0", padding: "0" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="flex-end"
                    mt={1}
                  >
                    <Button
                      type="submit"
                      sx={{ width: "10%" }}
                      style={{
                        backgroundColor: "#C5E1A5",
                        color: "black",
                        fontFamily: "Kumbh Sans",
                        borderRadius: "10px",
                        fontWeight: "medium",
                      }}
                      onClick={onClick}
                    >
                      등록
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <EvaluationList reviews={program.reviews} />
                  </Grid>
                </Grid>
              </Container>
            </TabPanel>
          </TabContext>
        </Container>
      </>
    )
  );
}

export default DetailedPlayground;
