import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home, Signin, Signup, Mypage } from "./pages";
import PracticeHome from "./pages/Practice/PracticeHome";
import PracticeList from "./pages/Practice/PracticeList";
import { Header, NavBar } from "./components";
import PostPractice from "./pages/Practice/pages/PostPractice";
import Practice from "./pages/Practice/pages/Practice";
import DetailedPractice from "./pages/Practice/pages/DetailedPractice";
import EditPractice from "./pages/Practice/pages/EditPractice";

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
      </Routes>
    </div>
  );
}

export default App;
