import React, {useState} from 'react';
import axios from "axios";
import { styled } from "@mui/material/styles";

import { useNavigate, useLocation} from 'react-router-dom';
import {Box, Grid, Typography, Button, ButtonBase, Paper} from "@mui/material";
import { ListTemplate, PracticeNavbar, SearchBar, Tags, Chips, Dropdown, Paginations} from '../../components';


const BackBox = styled(Box)({
  left: "0px",
  top: "297px",
  background: "linear-gradient(180deg, #FFFDE7 0%, rgba(217, 217, 217, 0) 100%)",
})



const BrownGrid=styled(Grid)({
  backgroundColor:"#A1887F", 
  borderRadius:"20px",
  position:"relative", 
  width:"100%", 
  height:"100%", 
  margin:"0 auto"
})
const GreenGrid=styled(Grid)({
  backgroundColor:"#DCEDC8", 
  borderRadius:"20px", 
  justifyContent:"center",
  position:"relative",
   margin:"1.5rem", 
   alignItems:'center', 
   padding:"1rem 1rem 1rem 0"
})



const options = ["제목+닉네임", "제목", "닉네임"]




function PracticeList() {

  
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const firtType = params.get('param1');  // 창작마루 홈에서 진입할 때 받는 유형 정보
  
  //창작물 유형 정보 -> // page 유형에 따라 가져올 리스트 달라짐
  const [page, setPage]=useState(firtType) 
  
  const [practiceList, setPracticeList] = useState([]); 

  
  // 프로그램 목록 불러오기
  const [programs, setPrograms] = useState([
    {
      id:"",
      title:'프로그램명1',

    },
    {
      id:"",
      title:'프로그램명1',
    },
    {
      id:"",
      title:'프로그램명1',
    }
  ]);

  //const [programs, setPrograms]=useState([]);



  // 검색바 관련 상태값 
  const [choice, setChoice] = useState(0); //선택 검색 옵션 : (0)제목+닉네임, (1)제목, (2)닉네임
  const [searchKeyword, setSearchKeyword ]= useState(''); //검색어
  const [isSearch, setIsSearch]=useState(false); //검색버튼 클릭 여부
  
  // 태그 검색 관련 상태값  
  const [searchTags, setSearchTags] = useState([]); //빈배열 초기화
  

  // 리스트 정렬 드롭다운 관련 상태값
  const [order, setOrder] = useState(0); //초기화 : (0)최신순 / (1)좋아요순





  // const getPracticeList = async () => {
  //   try{
  //     const resp = (await axios.get('/practicelist')).data ////localhost:3000/practicelist
  //   setPracticeList(resp.data);  //practiceList 변수에 할당
    

  //   }catch (error) {
  //   console.error('Error fetching practice list:', error);
  //   }
  // }
  
  // useEffect(() => {
  //   getPracticeList(); //창작물 목록 조회 함수 호출
  // }, []); 



  
  return (
    <BackBox>
      <Grid container style={{ padding: "5rem 13rem" }}>
        {/* 창작마루 타이틀 이미지 */}
        <Grid item xs={12} style={{ justifyContent: 'center' }} >
          <img src="img/changjactitle.png" alt="changjac-title" style={{ width: "35%", display: "block", margin: "0 auto" }} />
        </Grid>

        {/* 네브바 */}
        <Grid item xs={12}>
          <PracticeNavbar page={page} setPage={setPage} />
        </Grid>

        {/* 검색바 */}
        <Grid item xs={12} mt={9}>
          <SearchBar options={options}
            choice={choice} setChoice={setChoice}
            searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}
            isSearch={isSearch} setIsSearch={setIsSearch}
          />
        </Grid>

        {/* 프로그램 태그 검색 */}
        <Grid item xs={12} mt={5} style={{ display: "flex", justifyContent: "space-between" }}>
          <Chips programs={programs} />
          {/* <Tags programs={programs} searchTags={searchTags} setSearchTags={setSearchTags} /> */}
          <Dropdown style={{ width: "100%" }} order={order} setOrder={setOrder} />
        </Grid>
        


        {/* 창작물 리스트 들어가는 공간 */}
        <Grid item xs={12} mt={5}>
          <BrownGrid container style={{ justifyContent: "center" }}>
            <GreenGrid container>
              <ListTemplate page={page} searchKeyword={searchKeyword} order={order} searchTags={searchTags} />
            </GreenGrid>
          </BrownGrid>
        </Grid>
        
      </Grid>
    </BackBox>
    
  );
}
export default PracticeList;




