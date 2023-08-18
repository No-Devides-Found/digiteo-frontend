import React, {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import { Container, Grid , Box, Button, Typography} from '@mui/material';
import { styled } from "@mui/material/styles";

import {CommunityNav, Chips, Dropdown, TipList, Paginations,SearchBar, Footer} from '../../../components';

const options = ["제목+닉네임", "제목", "닉네임"]

const programs = [
  '프로그램명1',
  '프로그램명2', 
  '프로그램명3', 
  '프로그램명4', 
  '프로그램명5', 
  '프로그램명6', 
  '프로그램명7', 
];


// 나눔터 (Tip) 페이지

function Tip (){
  const page = 'tip'; 
  const navigate = useNavigate();

  const postTip=(e)=>{
    navigate(`/posttip`);   
  }

  // useEffect(() => {
  //   const init = async () => {
  //     await axios.get(`${server}/programs/program`).then((res) => {
  //       console.log(res.data);
  //       setPosts(res.data);
  //     });
  //   };

  //   init();

  //   setPathname(window.location.pathname.split("/")[2]);
  // }, []);



  // 검색바 관련 상태값
  const options = ["제목+닉네임", "제목", "닉네임"];
  const [choice, setChoice] = useState(0); //선택 검색 옵션 : (0)제목+닉네임, (1)제목, (2)닉네임
  const [searchKeyword, setSearchKeyword] = useState(""); //검색어
  const [isSearch, setIsSearch] = useState(false); //검색버튼 클릭 여부
  // 리스트 정렬 드롭다운 관련 상태값
  const [order, setOrder] = useState(0); //초기화 : (0)최신순 / (1)좋아요순

  

  
 
  return (

    <Grid container justifyContent={"center"} gap={"2rem"}>

        {/* 좌측 메뉴바 */}
        <Grid item  xs={1.5}>
          <CommunityNav page={page} />
        </Grid>

          
        {/* 우측 */}
        <Grid item xs={7}>

          {/* 제목 */}
          <Grid item xs={12} mt={9}>
            <Typography variant="h4" gutterBottom>나눔터</Typography>
          </Grid>
          <Grid item xs={12} mt={4}>
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

          {/* 나눔터 리스트 */}
          <Grid item xs={12}>
            <TipList page={page} searchKeyword={searchKeyword}/>
          </Grid>

          <Grid item xs={12} mt={3}>
            <Button  
            onClick={postTip}
            style={{display:'block', margin:'0 auto', background: "#A5D6A7", color: "black", fontWeight: "bold", textAlign: "center" }} 
            cursor="pointer">
              글쓰기
            </Button> 
          </Grid>

          {/* 페이지네이션 */}
          <Grid item xs={12} mt={3} style={{ marginBottom:"3rem" }}>
            <Paginations />
          </Grid>
         
                   
        </Grid>

      </Grid>
    
  );
};

export default Tip;