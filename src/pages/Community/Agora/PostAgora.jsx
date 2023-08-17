import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { styled } from "@mui/material/styles";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import { 
  Paginations,
  AgoraComments,
  AgoraCommentsList,
  Chips, Footer,
  Tags, Comments,
  YesorNo, Free,
  DetailedFree, DetailedYesNo 
} from "../../../components/";

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {Favorite} from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';


import { 
  Paper,
  Chip,
  Avatar,
  Typography, 
  Input, 
  TextField, 
  Box, 
  Container, 
  Button,
  Stack,
  Radio,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Grid
} from '@mui/material';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width:"40rem",
  display:"inline-block",
  margin:'0 1rem',
  height: '2rem',
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#F24E1E',
    //theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#43CCF8' : '#F24E1E',
  },
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Maindiv=styled(`div`)({
  display:'block',
  margin:"0 auto",
  fontFamily:"Kumbh Sans",
  padding:"0 20%", 
  height:"100%",
})


const StyledGrid=styled(Grid)({
  display:'block',
  margin:"0 auto", 
  padding:"0 0 0 0"
})

// 제목 페이퍼 
const StyledPaper=styled(Paper)({
  backgroundColor:"#F1F8E9",
  borderRadius:"20px",
  padding:"1rem", 
  margin:"0",
})
//콘텐츠 페이퍼
const ContentPaper=styled(Paper)({
  backgroundColor:"#FFF3E0",
  borderRadius:"20px",
  padding:"2rem 3rem", 
})

const StyledChip=styled(Chip)({
  width:'50%', 
  backgroundColor:"#C5E1A5"
})


const StyledButton = styled(Button)({
  backgroundColor: '#FFA000',
  width: '10%',
  borderRadius:"10px",
  color: 'black',
  marginLeft:"1rem",
  float: 'right',
  fontWeight:"bold",
  textAlign: 'center',
});



//토의/토론 글 작성 - 유형 선택에 따라 작성폼 컴포넌트 달라짐
function PostAgora() {
  const navigate = useNavigate();
  
  //const { thumbnail, title, type, summary, yes, no, my_opinion } = agora; //비구조화 할당
 
  // const onChange = (event) => {
  //   const { value, name } = event.target;

  //   setAgora((prevAgora) => ({
  //     ...prevAgora,
  //     [name]: value,
  // }));
    
  //};
  // const onChangeType=(e)=>{
  //   console.log(e.target.value); 
  //   setType(e.target.value) 
  // }

  // <공통> 제목, 썸네일, 유형, 이슈 종합 정리, 내 의견

  //제목
  const [title, setTitle]=useState('');

  //작성일자 
  const [date, setDate] = useState(""); 

  // 썸네일
  const [thumbnail, setThumbnail] = useState('');
  const imgRef = React.useRef();

  // 유형 (자유:1, 토의토론:2)
  const [type, setType] = useState("2");  //토의토론으로 초기화

  // 이슈 종합 정리
  const [summary, setSummary] = useState(""); 
  const [summaryFile, setSummaryFile] = useState("");

  // 내 의견
  const [my_opinion, setMyOpinion] = useState("");
  const [my_choice, setMyChoice] = useState("");
  
  // 파일
  const [files, setFiles]= useState([]);

  // 토의토론 - 찬반 입장 각각 정리
  const [yes, setYes] = useState("");
  const [no, setNo] = useState("");

  

  // 상태값 관리
  // 제목 
  const onChangeTitle=(e)=>{
    setTitle(e.target.value);
  }
  // 유형 
  const onChangeType=(e)=>{
    setType(e.target.value);
    console.log('type', type)
    setTitle('');
    setThumbnail('');
    setYes('');
    setNo('');
    setMyOpinion('');
    setMyChoice('');
    setSummaryFile('');
    setSummary('');
  }

  //날짜 
  function TodayDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const todayDate = `${year}-${month}-${day}`;
    console.log(todayDate);
    setDate(todayDate);
    console.log(date)
  };

  // 이미지 업로드 input의 onChange
  const saveThumbnail = () => {
	const file = imgRef.current.files[0];
	const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setThumbnail(reader.result);
   	};
  };



  // 뒤로 가기
  const backToList = (e)=>{
    navigate(-1);
  }

  const post = {
    //post_id: 0, 
    thumbnail: thumbnail,  
    title: title, 
    date: date, 
    type: type,   
    summary: summary, 
    my_opinion: my_opinion,  
    no: no,  
    yes: yes,
    files: files,    
  }; 

  // 아고라 글 등록 -> 해당 글 상세 페이지로 이동
  const saveAgora = (e)=>{
    
    console.log(post) ;


    navigate('/detailedagora', {state:type});
  }






  return (
    <Container>
      <Grid container  style={{padding:"1rem 5rem 4rem 5rem"}}>
        <Grid item xs={12}>
          {/* 포스트 제목 부분 */}
          <StyledPaper>
            <Grid container >
              <Grid item xs={5} > 
              <img
                src={thumbnail ? thumbnail :"/img/video.png"}
                alt="thumbnail"
                style={{ width: '80%', 
                  objectFit: 'contain', }}
              />
              <form style={{ paddingLeft:"1.5rem"}}>
                <Typography variant="body2" className="signup-profileImg-label" htmlFor="profileImg">
                  썸네일 추가
                </Typography>
                  <input
                    className="signup-profileImg-input"
                    type="file"
                    accept="image/*"
                    id="thumbnail"
                    onChange={saveThumbnail}
                    ref={imgRef}
                  />
                </form>
              </Grid>

              <Grid item xs={7} style={{padding:"0 2rem 1rem 0 "}}>
                <Grid container>
                  <Grid item xs={12} mt={4}>
                  <TextField id="outlined-basic" sx={{width:'100%'}} variant="outlined" 
                    name='title' 
                    value={title} 
                    onChange={onChangeTitle}
                    placeholder='토의/토론 제목을 입력해주세요.'/>
                  </Grid>
                  <Grid item xs={12}  mt={3}>
                        <RadioGroup
                    required
                    onChange={onChangeType}
                    value={type}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="2" control={<Radio />} label="토의/토론" />
                    <FormControlLabel value="1" control={<Radio />} label="자유" />
                  </RadioGroup>
                  </Grid>
                  

                  <Grid item xs={12} mt={5} style={{ display:"flex", justifyContent:'space-between'}}>
                    <Stack direction="row" >
                          <Typography variant="body2">좋아요 {' '}</Typography>
                          <FavoriteRoundedIcon style={{color:'red', margin:"0 0.5rem"}}/> 
                          <Typography variant="body2"> 명</Typography>
                    </Stack>
                    <Stack direction="row" >
                          <Typography variant="body2">참여인원 {' '}</Typography>
                          <PeopleAltIcon style={{margin:"0 0.5rem"}}/> 
                          <Typography variant="body2"> 명</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} mt={2} style={{display:"flex", justifyContent:"flex-end"}}>
                    <Typography variant="body2" style={{color:'gray',  textAlign:"right"}}>
                         작성일
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </StyledPaper>
          
        </Grid>

        <Grid item xs={12}>
          {
            type==="2"
            ? <YesorNo 
                summary={summary} setSummary={setSummary}
                files={files} setFiles={setFiles}
                yes={yes} setYes={setYes}
                no={no} setNo={setNo}
                my_opinion={my_opinion} setMyOpinion={setMyOpinion}
                myChoice={my_choice} setMyChoice={setMyChoice}
                />
            : <Free 
                summary={summary} setSummary={setSummary}
                files={files} setFiles={setFiles}
                my_opinion={my_opinion} setMyOpinion={setMyOpinion}
                />
          }
        </Grid>
        
        <Grid item xs={12} style={{textAlign:'right', margin:"3rem 0"}}>
          <StyledButton type="submit" onClick={saveAgora}>등록하기</StyledButton>
          <StyledButton type="button" onClick={backToList}>취소하기</StyledButton>
        </Grid>

      </Grid>
      
      
    </Container>
  );
};

export default PostAgora;





