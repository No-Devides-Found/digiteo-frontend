import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages"; 
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">메인홈</Link> 
        <Link to="/signin">로그인</Link>  
        <Link to="/signup">회원가입</Link> 
      </nav>
      {/* <Program img="/asset/thumbnail.jpg" 
      alt="썸네일설명" 
      title="프로그램 대제목" 
      button1="참여인원" 
      button2="별점" /> */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />   
      </Routes>
      

    </div>
  );
}

export default App;
