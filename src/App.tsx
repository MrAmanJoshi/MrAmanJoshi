import  { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Post from "./pages/Posts";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import SignUp from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import RandomQoutes from "./pages/RandomQuotes";
import LuckyWeel from "./pages/LuckyWeel"
import {PopupContext} from "./context/PopupContext";

export default function App() {
  const [popup, setPopup] = useState(false)
  return (
    <>
      <Header />
      <Routes>
        
        <Route 
          path="/Setting" 
          element={ <Setting/>} 
          />
        <Route 
          path="/luckyWeel"
          element={
      <LuckyWeel/>}
          />
        <Route 
          path="/createProfile" 
          element={ 
            <SignUp/>
            } />
        <Route 
          path="/Profile" 
          element={ 
          <Profile/>} 
          />
        <Route 
          path='/quotes' 
          element={<RandomQoutes />}/>
        <Route 
       path="/userProfile/:userId" 
      element={ <UserProfile/>} 
          />
   <Route 
     index 
     element={<Post />}/>
          
        </Routes>
    </>
  )
}