import { Routes, Route } from "react-router-dom"

import "./client/styles/alpha.css";
import Cart from "./client/pages/Cart";
import Categories from "./client/pages/Categories";
import Home from "./client/pages/Home";
import Payment from "./client/pages/Payment";
import ProductDesc from "./client/pages/ProductDesc";
import Upload from "./client/pages/Upload";
import Signup from "./client/pages/signup";
import Login from "./client/pages/login";
import EmptyProfile from "./client/pages/EmptyProfile";
import Profile from "./client/pages/Profile.js";
import SearchPanel from "./client/pages/search";
import ProfileInfo from "./client/pages/ProfileInfo";
import ProfileSettings from "./client/pages/ProfileSettings.js";
import DashHome from "./client/pages/dashboard/home";
import Todo from "./client/pages/dashboard/order/todo";
import Cancelled from "./client/pages/dashboard/order/cancelled";
import Completed from "./client/pages/dashboard/order/completed";
import InProgress from "./client/pages/dashboard/order/in-progress";
import AppointHome from "./client/pages/dashboard/appointment/home";
import Message from "./client/pages/dashboard/message";
import Setting from "./client/pages/dashboard/settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDesc />} />
        <Route path="/shop" element={<Categories />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path={"/searchpanel"} element={<SearchPanel />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        {/* <Route path="/profile/empty" element={<EmptyProfile/>}/> */}
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/information" element={<ProfileInfo/>}/>
        <Route path="/profile/settings" element={<ProfileSettings/>}/>
        <Route path={"/dashboard/home"} element={<DashHome />} />
        <Route path={"/dashboard/order/todo"} element={<Todo />} />
        <Route path={"/dashboard/order/cancelled"} element={<Cancelled />} />
        <Route path={"/dashboard/order/completed"} element={<Completed />} />
        <Route path={"/dashboard/order/in-progress"} element={<InProgress />} />
        <Route path={"/dashboard/appointment"} element={<AppointHome />} />
        <Route path={"/dashboard/msgs"} element={<Message />} />
        <Route path={"/dashboard/setting"} element={<Setting />} />

      </Routes>
    </div>
  );
}

export default App;
