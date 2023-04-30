import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {SiPostmates} from 'react-icons/si';
import {GiHamburgerMenu} from "react-icons/gi"
import withUser from "./withUser";
import {User} from '../models/User'

function Header({user}: User) {
  const [menu, setMenu] = useState(false);
  console.log("user",user)
  return (
    <div>
    <header className="bg-white shadow-lg px-2">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
      <SiPostmates className="text-pink-500 font-bold text-5xl"/>
          <Link to="/" className="ml-2 font-semibold text-lg text-pink-700">TrendyPost<span className="text-xs text-blue-600">.com</span></Link>
        </div>
        <div className="hidden md:block">
        
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center">
            <li className="mr-6">
              <Link to="/" className="text-gray-800 hover:text-indigo-500">Home</Link>
            </li>
            
            <li className="mr-6">
        {  user.firstName !== undefined &&
        
      <Link to={'/Profile'} className='text-gray-600 text-lg hover:text-blue-900 text-center p-2'>Profile</Link> }
              
        {  user.firstName === undefined  &&
      <Link to={'/createProfile'} className='text-gray-600 text-lg hover:text-blue-900 text-center p-2'>Create profile</Link>}
              
              </li>
            
            <li className="mr-6">
            <Link to="/quotes" className="text-gray-800 hover:text-indigo-500 p-2">Quotes</Link>
            </li>
            
            <li className="mr-6">
            <Link to="/luckyWeel" className="text-gray-800 hover:text-indigo-500 p-2">Try Your Luck</Link>
            </li>
            <li className="mr-6">
              <Link to="/Setting" className="text-gray-800 hover:text-indigo-500">Settings</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={()=>setMenu(menu===true ? false : true)} type="button" className="text-gray-800 hover:text-indigo-500 focus:outline-none text-2xl">
            <GiHamburgerMenu/>
          </button>
        </div>
      </nav>
    </header>
      { menu === true && <div className=' mt-5 flex flex-col items-center'>
        
        <div className='border-b'>
      <Link to={'/'} onClick={()=>setMenu(false)} className='text-gray-600 text-lg hover:text-blue-900 text-center  p-2'>Home</Link>
          </div>
              <div className='border-b'>
<Link to="/quotes" className='text-gray-600 text-lg hover:text-blue-900 text-center' onClick={() =>setMenu(false)}>Quotes</Link>
        </div>
        <div className='border-b'>
<Link to="/luckyWeel" className='text-gray-600 text-lg hover:text-blue-900 text-center' onClick={() =>setMenu(false)}>Try Your Luck</Link>
        </div>

        
        { user.firstName !== undefined &&
        <div className='border-b'>
      <Link onClick={()=>setMenu(false)} to={'/Profile'} className='text-gray-600 text-lg hover:text-blue-900 text-center p-2'>Profile</Link>
        </div>}
        { user.firstName === undefined &&
        <div className='border-b'>
      <Link onClick={()=>setMenu(false)} to={'/createProfile'} className='text-gray-600 text-lg hover:text-blue-900 text-center p-2'>Create profile</Link>
        </div>}
        
      <Link onClick={()=>setMenu(false)} to={'Setting'} className='text-gray-600 text-lg hover:text-blue-900 text-center border-b '>Setting</Link>
        
      </div>}
      </div>
  );
}

export default withUser(Header);
