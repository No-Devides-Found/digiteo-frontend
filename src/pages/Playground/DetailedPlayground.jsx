import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../../constants";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";

import { DetailedPlaygroundTitle } from "../../components";

function DetailedPlayground() {
  let { id } = useParams();
  const [program, setProgram] = useState();

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
      </>
    )
  );
}

export default DetailedPlayground;
