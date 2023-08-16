import "./App.css";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Signin,
  Signup,
  Mypage,
  PracticeHome,
  PracticeList,
  PostPractice,
  DetailedPractice,
  EditPractice,
  Practice,
  Tip,
  PostTip,
  DetailedTip,
  Agora,
  PostAgora,
  DetailedAgora,
  PostQA,
  DetailedQA,
} from "./pages";

import { Header, NavBar, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        {/* 창작마루 */}
        <Route path="practicehome" element={<PracticeHome />} />
        <Route path="practicelist" element={<PracticeList />} />
        <Route path="postpractice" element={<PostPractice />} />
        <Route path="detailedpractice" element={<DetailedPractice />} />
        {/* <Route path="practice" element={<Practice />} /> */}
        <Route path="editpractice" element={<EditPractice />} />

        <Route path="mypage/profile/*" element={<Mypage />}></Route>
        <Route path="mypage/courses" element={<Mypage />}></Route>
        <Route path="mypage/posts" element={<Mypage />}></Route>
        <Route path="mypage/mypractice" element={<Mypage />}></Route>

        <Route path="tip" element={<Tip />} />
        <Route path="posttip" element={<PostTip />} />
        <Route path="detailedtip" element={<DetailedTip />} />

        <Route path="agora" element={<Agora />} />
        <Route path="postagora" element={<PostAgora />} />
        <Route path="detailedagora" element={<DetailedAgora />} />
        <Route path="postqa" element={<PostQA />} />
        <Route path="detailedqa" element={<DetailedQA />} />

        <Route path="*" element={<>404 page not found.</>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
