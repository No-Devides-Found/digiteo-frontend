import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home, Signin, Signup, Mypage,
         PracticeHome, PracticeList, PostPractice, DetailedPractice, EditPractice, Practice,
         Tip, PostTip, DetailedTip,
         Agora, PostAgora, DetailedAgora, PostQA, DetailedQA } from "./pages";

import { Header, NavBar, } from "./components";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        {/* 창작마루 */}
        <Route path="practicehome" element={<PracticeHome />} />
        <Route path="practicelist" element={<PracticeList />} />
        <Route path="postpractice" element={<PostPractice />} />
        <Route path="detailedpractice" element={<DetailedPractice />} />
        <Route path="practice" element={<Practice />} />
        <Route path="editpractice" element={<EditPractice />} />

        <Route path="mypage/*" element={<Mypage />}></Route>

        <Route path="*" element={<p>Path not resolved</p>} />

        <Route path="tip" element={<Tip/>}/>
        <Route path="posttip" element={<PostTip/>}/>
        <Route path="detailedtip" element={<DetailedTip/>}/>

        <Route path="agora" element={<Agora/>}/>
        <Route path="postagora" element={<PostAgora/>}/>
        <Route path="detailedagora" element={<DetailedAgora/>}/>
        <Route path="postqa" element={<PostQA/>}/>
        <Route path="detailedqa" element={<DetailedQA/>}/>
      </Routes>
    </div>
  );
}

export default App;
