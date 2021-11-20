import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Signin from "./components/Signin";
import LeftSideBar from "./components/LeftSideBar";
import Home from "./components/Home";
import FeedList from "./components/FeedList";
import Category from "./components/Category";
import GroupList from "./components/GroupList";
import EventList from "./components/EventList";
import IndividualFeed from "./components/IndividualFeed";
import Navbar from "./components/Navbar";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {userInfo ? (
          <main>
            <LeftSideBar />
            <div className="main-container">
              <Routes>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/signin" element={<Signin />}></Route>
                <Route path="/category" element={<Category />}></Route>
                <Route path="/feeds" element={<FeedList />}></Route>
                <Route path="/feeds/:id" element={<IndividualFeed />}></Route>
                <Route path="/groups" element={<GroupList />}></Route>
                <Route path="/events" element={<EventList />}></Route>
              </Routes>
            </div>
          </main>
        ) : (
          <main>
            <Routes>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/signin" element={<Signin />}></Route>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </main>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
