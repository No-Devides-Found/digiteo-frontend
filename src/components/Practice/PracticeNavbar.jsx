
import React, {useState} from 'react';
import { Grid , Box, Button ,Typography ,Stack} from '@mui/material';
import { styled } from "@mui/material/styles";

// import {Dropdown, SearchBar} from '../../components/';
import Dropdown from '../common/Dropdown/Dropdown';
import SearchBar from '../common/SearchBar/SearchBar';
import Tags from '../common/Tags/Tags';
import Paginations from '../common/Paginations/Paginations'; 
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


// 창작마루 네비게이션 바 - 영상,이미지,음성,문서 
// PracticeList에서 창작물 유형 정보 (page) 전달받음
const BackBox = styled(Box)({
  //position: "absolute",
 
  left: "0px",
  top: "297px",
  background: "linear-gradient(180deg, #FFFDE7 0%, rgba(217, 217, 217, 0) 100%)",
  
  })



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
  backgroundColor: '#FFEBEE', 
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  borderRadius:"30px",
  height:"fit-content",
};



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





export default function PracticeNavbar({ page, setPage}) {
  //네브바 토글 관련 상태값 
  const [alignment, setAlignment] = React.useState(page); 

  // 네브바 토글
  const handleChange = (e) => {
    setAlignment(e.target.value);    
    console.log(alignment)
  };

  // 페이지 정보 연결
  const onClick = (e) => {
    setPage(e.target.value);
  }
  

    // 검색바 관련 상태값
    const [searchKeyword, setSearchKeyword ]= useState(''); //검색어
    const [choice, setChoice] = useState(0); //선택 검색 옵션
    const [isSearch, setIsSearch]=useState(false); //검색버튼 클릭 여부

    // 페이지 유형에 맞는 창작물 데이터 목록을 가져와야 함. -> 제목, 닉네임, 좋아요 개수, 
  const [practice, setPractice] = useState({
    title: '',
    createdBy: '',
    tags: [],
    type: '',
    file: '',
    story: '',
    review: '',
  });

  const { title, createdBy,  tags, type, file, story, review } = practice; //비구조화 할당


  return (
    <BackBox>
      <Grid container style={{padding:"0 13rem"}}>
        {/* 창작마루 타이틀 이미지 */}
        <Grid item xs={12} style={{justifyContent:'center'}} mt={6}>
          <img src="img\changjactitle.png" alt="changjac-title"
          style={{width:"35%", display:"block", margin:"0 auto"}} />
        </Grid>

        {/* 토글 네브바  */}
        <Grid item xs={12} mt={9}>
            <StyledGroup
            variant="soft"
            size="lg"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <StyledButton
              value="video"
              onClick={onClick}
              selected={alignment === "video"}
              style={alignment === "video" ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
            >
              영상 창작물
            </StyledButton>
            <StyledButton
              value="img"
              selected={alignment === "img"}
              style={alignment === "img" ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
            >
              이미지 창작물
            </StyledButton>
            <StyledButton
              value="voice"
              selected={alignment === "voice"}
              style={alignment === "voice" ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
            >
              음성 창작물
            </StyledButton>
            <StyledButton
              value="text"
              selected={alignment === "text"}
              style={alignment === "text" ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
            >
              문서 창작물
            </StyledButton>
          </StyledGroup>
        </Grid>

        {/* 검색바 */}
        <Grid item xs={12} mt={9}>
          <SearchBar  options={options} 
              choice={choice} setChoice={setChoice} 
              searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}
              isSearch={isSearch} setIsSearch={setIsSearch}
            />
        </Grid>
        {/* 프로그램 태그 선택, 정렬 선택 */}
        <Grid item xs={12} mt={5} style={{display:"flex", justifyContent: "space-between"}}>
          <Tags style={{width:"80%"}} programs={programs} tags={practice.tags} setPractice={setPractice}/>
          <Dropdown 
          />
        </Grid>
        
    </Grid>
    </BackBox>
  );
}
