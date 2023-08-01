import React, {useState} from 'react';
import Axios from 'axios';


import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';





export const Signin = () => {
  const [email, setEmail] = useState('');   //아이디=이메일로 입력받음
  const [pw, setPw] = useState('');   //비밀번호
  
  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: email,
      pw: pw, 
    }

    Axios.post('', user)
      .then(res => {
        if (res.data.key) {
          localStorage.clear()
          localStorage.setItem('token', res.data.key)
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace('/')
        } else {
          setEmail('')
          setPw('')
          localStorage.clear()
          // setErrors(true)
        }
      })
      .catch(err => {
        console.clear()
        alert('아이디 또는 비밀번호가 일치하지 않습니다')
        setEmail('')
        setPw('')
      })


  }




  return (
    <div className="singin-wrapper">
      <div className='titleWrap'>
        <h1>로그인 페이지</h1>
      </div>
      <form onSubmit={onSubmit} className="containerWrap" >
        <div className='inputTitle'>이메일 주소</div>
        <div className='inputWrap'>
          <TextField 
              label="email"
              placeholder='아이디(이메일)를 입력해주세요.'
              required 
              fullwidth
              name="email"
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />{''}
              <br/>
        </div>
        <div className='inputTitle' sx={{mt:3}}>비밀번호</div>
        <div className='inputWrap' >
          <TextField 
              label="password" 
              placeholder='비밀번호를 입력해주세요.'
              type="password"
              required 
              fullwidth 
              name="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              />
            <br/>
        </div>
        <Button type="submit" className='signinButton' variant="contained" 
        sx={{mt:3}}>
          로그인
        </Button>      
      </form>
      

      <Grid container sx={{mt:3}}> 
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
      
    </div>
  );
};

export default Signin;