import React from 'react';
import Grid from '@mui/material/Grid';

const Step1Content = ({nickname, setNickname, 
                      email, setEmail,
                      password, setPassword,
                      password2, setPassword2}) => {


  return (
    <Grid>
      {/* <h1>Step 1의 내용: 이곳에는 Step 1의 내용이 표시됩니다.</h1> */}
      <div className="inputContainer">
          <div className='inputTitle'>닉네임<span className="essential">{" "}{'('}필수{')'}</span></div>
          <div className='inputWrap' >
            <input
                onChange={(e) => {
                  setNickname(e.target.value)
                }}
                value = {nickname} 
                className="inputForm"
                placeholder='닉네임을 입력해주세요.'
                type="text"
                required 
                name="nickname"
                />
              <br/>
          </div>
        </div>
        <div className="inputContainer">
          <div className='inputTitle'>이메일<span className="essential">{" "}{'('}필수{')'}</span></div>
          <div className='inputWrap' >
            <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value = {email} 
                className="inputForm"
                placeholder='이메일을 입력해주세요.'
                type="email"
                required 
                name="email"
                />
              <br/>
          </div>
        </div>
        <div className="inputContainer">
          <div className='inputTitle'>비밀번호<span className="essential">{" "}{'('}필수{')'}</span></div>
          <div className='inputWrap' >
            <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                value = {password} 
                className="inputForm"
                placeholder='비밀번호를 입력해주세요.'
                type="password"
                required 
                name="password"
                />
              <br/>
          </div>
        </div>
        <div className="inputContainer">
          <div className='inputTitle'>비밀번호 재확인<span className="essential">{" "}{'('}필수{')'}</span></div>
          <div className='inputWrap' >
            <input
                onChange={(e) => {
                  setPassword2(e.target.value)
                }}
                value = {password2} 
                className="inputForm"
                placeholder='비밀번호를 재입력해주세요.'
                type="password"
                required 
                name="password2"
                />
              <br/>
          </div>
        </div>


    </Grid>
  );
};

export default Step1Content;