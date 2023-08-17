import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import {
  PlaygroundNav,
  SearchBar,
  Chips,
  Dropdown,
  PlaygroundList,
  Paginations,
} from "../../components";
import { isAccessExpired } from "../../utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../constants";

function Playground() {
  const [pathname, setPathname] = useState("");

  // 검색바 관련 상태값
  const options = ["제목+닉네임", "제목", "닉네임"];
  const [choice, setChoice] = useState(0); //선택 검색 옵션 : (0)제목+닉네임, (1)제목, (2)닉네임
  const [searchKeyword, setSearchKeyword] = useState(""); //검색어
  const [isSearch, setIsSearch] = useState(false); //검색버튼 클릭 여부

  // 태그 검색 관련 상태값
  const [searchTags, setSearchTags] = useState([]); //빈배열 초기화

  // 리스트 정렬 드롭다운 관련 상태값
  const [order, setOrder] = useState(0); //초기화 : (0)최신순 / (1)좋아요순

  // 프로그램 목록 불러오기
  const [programs, setPrograms] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      await axios.get(`${server}/programs/program`).then((res) => {
        console.log(res.data);
        setPrograms(res.data);
      });
    };

    init();

    setPathname(window.location.pathname.split("/")[2]);
  }, []);

  return (
    <Grid container justifyContent={"center"} gap={"2rem"}>
      <Grid>
        <PlaygroundNav pathname={pathname} setPathname={setPathname} />
      </Grid>
      <Grid item xs={8}>
        {/* 검색바 */}
        <Grid item xs={12} mt={9}>
          <SearchBar
            options={options}
            choice={choice}
            setChoice={setChoice}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            isSearch={isSearch}
            setIsSearch={setIsSearch}
          />
        </Grid>
        {/* 프로그램 태그 검색 */}
        <Grid
          item
          xs={12}
          mt={5}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Chips programs={programs} />
          {/* <Tags programs={programs} searchTags={searchTags} setSearchTags={setSearchTags} /> */}
          <Dropdown
            style={{ width: "100%" }}
            order={order}
            setOrder={setOrder}
          />
        </Grid>
        <PlaygroundList programs={programs} />
        <Paginations />
      </Grid>
    </Grid>
  );
}

export default Playground;
