import React, { FC, useState, memo } from "react";
import { Post } from "../models/Post";
import { User } from "../models/User";
import {BsSuitHeartFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

type PostCartProps = {
  postData: Post,
  userData: User  
};

const PostCart: FC<PostCartProps> = ({postData, userData}) => {

 const[like, setLike] = useState(postData.reactions)

const handleLikeAdd = () => setLike(like + 1);
  
  return (
        <div className="flex justify-center items-center py-4 px-1 mx-1">
      
          <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">      
       <Link to={"/userProfile/" + postData.userId} >
         <div className="flex justify-between items-center px-6 py-3 bg-gray-900">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={userData.image}
              alt={userData.firstName}
            />
            <div className="ml-3">
              <div className="text-sm font-medium text-white">{userData.firstName}</div>
              <div className="text-xs font-medium text-gray-400">{userData.username}</div>
            </div>
          </div>
        </div>
         </Link>
        <div className="px-6 py-4">
         
          <p className="my-4 flex">{postData.tags.map((tag)=>(<p
      key={tag}
                          className="text-blue-900 font-bold  mr-1">#{tag}</p>))}</p>
          <Link to={"/userProfile/" + postData.userId} >
          <p className="my-4 font-medium text-lg">{postData.title}</p>
          <p className="text-gray-800 text-base">{postData.body}</p>
            </Link>
          <div className="py-2 text-sm font-bold">
            <div className="mb-1">
            <button onClick={handleLikeAdd}><BsSuitHeartFill className="font-bold text-2xl hover:text-red-500 text-slate-300 transition delay-100 duration-250 ease-in-out hover:-translate-y-1 hover:scale-110"/></button>
            </div>
          
         <p>
            {like === 0 ? "No like in this post": `Liked ❤️ by ${like} others...  `}
         </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default memo(PostCart);