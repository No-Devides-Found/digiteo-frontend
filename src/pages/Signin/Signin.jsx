import React, {useState} from 'react';
import Axios from 'axios';
import "./Signin.css";   

// import styled from 'styled-components';   
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange , purple } from '@mui/material/colors';

// 컬러 테마 
const theme = createTheme({
  palette: {
    primary: orange,
    secondary: purple,
  },
});



const Signin = () => {

  
  const [email, setEmail] = useState('');   //아이디=이메일로 입력받음
  const [password, setPassword] = useState('');   //비밀번호
  // const [errors, setErrors] = useState(false)  //에러메세지
  
  // 폼 제출 이벤트 처리 - 서버로 사용자 정보를 전송하고 로그인을 처리 
  const onSubmit = (e) => {
    e.preventDefault()

    //email 및 password 속성을 가진 user 객체를 생성
    const user = {
      email: email,
      password: password, 
    }

    Axios.post('/accounts/dj-rest-auth/login/', user)
      //POST 요청이 성공적으로 완료 - 서버 응답 처리
      .then(res => {
        if (res.data.key) {
          localStorage.clear()
          localStorage.setItem('token', res.data.key)
          
          window.location.replace('/') // App.js에서 /로 라우팅 필요
        } else {
          setEmail('')
          setPassword('')
          localStorage.clear()
          // setErrors(true)
        }
      })
      .catch(err => {
        console.clear()
        alert('아이디 또는 비밀번호가 일치하지 않습니다')
        setEmail('')
        setPassword('')
      })


  }




  return (
    <Grid container>
      <Grid item xs  className="signinLeft">
        이미지 필드 입니다.
      </Grid>
      <Grid item xs  className="signinRight">
      <div className='titleWrap'>
        <h1>Digiteo</h1>
      </div>
      <form onSubmit={onSubmit} className="signinWrap" >

        {/* MUI TextField 이용  */}
        <div className="inputContainer">
          <div className='inputTitle'>이메일 주소</div>
          <div className='inputWrap'>
            <TextField
                className="signinInput"
                placeholder='아이디(이메일)를 입력해주세요.'
                variant="outlined"
                required
                name="email"
                type="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
          </div>
        </div>
        <div className="inputContainer">
          <div className='inputTitle' >비밀번호</div>
          <div className='inputWrap' >
            <TextField
                className="signinInput"
                placeholder='비밀번호를 입력해주세요.'
                type="password"
                variant="outlined"
                required 
                fullwidth 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              <br/>
          </div>
        </div>

        {/* input 태그 이용 - 스타일 적용이 쉬움... */}
        <div className="inputContainer">
          <div className='inputTitle'>이메일</div>
          <div className='inputWrap' >
            <input
                className="inputForm"
                placeholder='이메일을 입력해주세요.'
                type="email"
                required 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              <br/>
          </div>
        </div>
        <div className="inputContainer">
          <div className='inputTitle'>비밀번호</div>
          <div className='inputWrap' >
            <input
                className="inputForm"
                placeholder='비밀번호를 입력해주세요.'
                type="password"
                required 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              <br/>
          </div>
        </div>

        <ThemeProvider theme={theme}>
        <Button  type="submit" className='signinButton' variant="contained" 
        >
          로그인
        </Button> 
        <Button color="secondary" type="submit" className='signinButton' variant="contained" 
        >
          로그인
        </Button>

        </ThemeProvider>
      </form>

      {/* 하단 부가 기능 */}
      <Grid container > 
        <Grid item xs>
          <Link to="">아이디 찾기</Link>
        </Grid>
        <Grid item xs >
          <Link to="">비밀번호 찾기</Link>
        </Grid> 
        <Grid item xs>
          <Link to="/signup">회원가입</Link>
        </Grid> 
      </Grid>
      
    </Grid>

      </Grid>
      
  );
};

export default Signin;