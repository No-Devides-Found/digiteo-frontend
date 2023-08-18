import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// import {Dropdown, SearchBar} from '../../components/';
import Dropdown from "../common/Dropdown/Dropdown";
import SearchBar from "../common/SearchBar/SearchBar";
import Tags from "../common/Tags/Tags";
import Paginations from "../common/Paginations/Paginations";

import CreationTemplate from "./CreationTemplate";

const StyledBox = styled(Box)({
  margin: "0 auto",
  width: "100%",
  padding: "2rem 5rem",
});

const PostButton = styled(Button)({
  display: "block",
  margin: "0 auto",
  width: "10rem",
  backgroundColor: "white",
  textAlign: "center",
});
const StyledGrid = styled(Grid)({
  marginBottom: "1rem",
});
const PageGrid = styled(Grid)({
  margin: "0 auto",
});

//
function ListTemplate({ page, practices }) {
  const navigate = useNavigate();

  console.log("여기 리스트 템플릿", page); //페이지 정보 잘 오는지 확인 -완료

  // 페이지 유형에 맞는 창작물 데이터 목록을 가져와야 함. -> 제목, 닉네임, 좋아요 개수,
  //const [practice, setPractice] = useState([]);

  // 예시
  // [
  //   {
  //     id: 1,
  //     creations: [
  //       {
  //         order: 1,
  //         filename: "ㄹㄹㄹ",
  //         file: "ㅇㄹㄴㅇㄴㄹㅇㄹㄴㅇㄹ",
  //         file_type: 1,
  //       },
  //       {
  //         order: 2,
  //         filename: "ㄴㄴㅇㄹㄴㅇㄹ",
  //         file: "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹㄴㅁㄹㅇㄴㅁㄹ",
  //         file_type: 1,
  //       },
  //     ],
  //     tag: [],
  //     comment: [],
  //     liked_cnt: 0,
  //     created_at: "2023-08-18T19:27:37.486327",
  //     updated_at: "2023-08-18T19:27:37.486327",
  //     title: "창작창작마루창작",
  //     thumbnail:
  //       "http://localhost:8000/media/practice/thumbnail/20230818/%ED%94%84%EC%82%AC.jpg",
  //     create_story: "창작자라작작작",
  //     review: "후기입니다 후기",
  //     user: 1,
  //   },
  // ];

  //const { title, createdBy,  tags, type, file, story, review } = practice; //비구조화 할당

  //가져온 창작물 객체 목록

  // 창작물 작성 페이지 이동
  const postPractice = (e) => {
    navigate("/postpractice");
  };

  return (
    <StyledBox>
      <Grid container>
        {/* 창작물 목록 리스트 */}
        <Grid item xs={12}>
          {practices.map((practice, index) => (
            <CreationTemplate key={index} practice={practice} />
          ))}
        </Grid>
        {/* 창작물 작성 페이지로 이동 */}
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
          mt={3}
        >
          <Button
            type="button"
            onClick={postPractice}
            style={{
              background: "#A5D6A7",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
            cursor="pointer"
          >
            창작물 올리기
          </Button>
        </Grid>

        {/* 페이지네이션 */}
        <Grid item xs={12}>
          <Paginations />
        </Grid>
      </Grid>
    </StyledBox>
  );
}

export default ListTemplate;
