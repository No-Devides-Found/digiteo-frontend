import React, {useState, useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import { Container, Grid , Box, Button, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';
import { styled } from "@mui/material/styles";

import axios from "axios";
import {CommunityNav, Chips, Dropdown, AgoraList, Paginations,
  SearchBar, Footer} from '../../../components';

const StyledToggleButton=styled(ToggleButton)({
  width:'15rem',
  backgroundColor:'orange',
  height:'3rem',
  // margin: '0 1rem',
  color:'black'
})


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
// 네브바 전체 그룹
const StyledGroup = styled(ToggleButtonGroup)({
  display: 'block',
  borderRadius:"20px",
  margin: '0 auto',
  textAlign: 'center',
  width: '100%',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  background: '#FFBCBC',
})
// 전체 토글 버튼 
const StyledButton = styled(ToggleButton)({
  width: '25%',
  height: '3rem',
  fontWeight: 'bold',
  fontSize: '1rem',
  borderRadius: '20px',
})
// 기본 버튼 
const buttonStyle = {
  background: '#FFBCBC',
  border: 'none',
  color: 'black',
};
//select된 버튼 색상 변경됨
const selectedButtonStyle = {
  width:"50%",
  backgroundColor: '#FFEBEE', 
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  borderRadius:"30px",
  height:"fit-content",
};






const Agora = () => {
  const [page, setPage] = useState("agora"); //페이지 (배움터 :agora / Q&A :qa)

  const [posts, setPosts]=useState();

  const navigate = useNavigate();

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

  // 글쓰기 버튼 - 이동
  const postAgora=(e)=>{
    if(page==="agora"){
      navigate('/postagora') //토의토론 작성 페이지로 이동
    }else{
      navigate('/postqa') //q&a 작성 페이지로 이동
    }
    
  }

  //배움터-큐엔에이 토글
  const handlePage=(e)=>{
    setPage(e.target.value);
    console.log(page)
  }

  



//네브바 토글 관련 상태값 
const [alignment, setAlignment] = React.useState(page); 
// 네브바 토글
  const handleChange = (e) => {
    setPage(e.target.value)
    setAlignment(e.target.value);    
    console.log(alignment)
  };




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
            <Typography variant="h4" gutterBottom>배움터</Typography>
          </Grid>

          <Grid item xs={12} mt={3} > 
            <ToggleButtonGroup
              //color="primary"
              
              value={page}
              exclusive
              onChange={handlePage}
              aria-label="Platform"    
              style={{width:"100%", color:"white", backgroundColor:"#FFBCBC", border:"none", borderRadius:"20px"
                  
            }}  
            >; 
                <ToggleButton value="qa" style={{fontWeight:"bold", width:"50%" ,border:"none", borderRadius:"20px"}}  >
                  Q & A
                </ToggleButton>
                <ToggleButton value="agora" style={{  fontWeight:"bold", width:"50%", border:"none", borderRadius:"20px"}}>
                  배움터
                </ToggleButton>
            </ToggleButtonGroup>
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

          {/* 아고라 리스트 */}
          <Grid item xs={12}>
            <AgoraList page={page} searchKeyword={searchKeyword}/>
          </Grid>

          <Grid item xs={12} mt={3}>
            <Button onClick={postAgora} style={{display:'block', margin:'0 auto'
          , background: "#A5D6A7", color: "black", fontWeight: "bold", textAlign: "center" }} cursor="pointer">
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

export default Agora;