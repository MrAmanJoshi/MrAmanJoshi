import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, getUsersPost } from "../components/Api";
import PostCart from "../components/PostCart";
import Search from "../components/Search";
import { Post } from "../models/Post";
import { User } from "../models/User";

const UserProfile = () => {
  const [user, setUser] = useState<Partial<User>>({});
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const params = useParams();
  const id = +params.userId!;

  useEffect(() => {
    getUser(id).then((user: User) => {
      setUser(user)
      setLoading(false)
    }),
      getUsersPost(id).then((usersPost) => {
        setPost(usersPost);
      })
  }, []);
  console.log("user", user)
  const handleSearch = async () => {
    setLoading(true)
    const data = await axios.get('https://dummyjson.com/posts/search?q=' + query);
    setPost(data.data.posts)
    setLoading(false)
  };
  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }
  if (loading) {
    return <div className="flex justify-center items-center font-bold w-full h-screen">Loading...</div>
  };
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mx-auto flex flex-col m-1">
        <div className="flex flex-col items-center">
          <img
            className="w-28 h-28 rounded-full mt-4 mb-6 border border-gray-200"
            src={user.image}
          />
          <div>
            <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
            <h5 className="text-lg font-normal text-slate-400">{user.username}</h5>
            <p className="text-gray-600"><span className="text-gray-800 font-medium">Gender:</span> {user.gender}</p>
            <p className="text-gray-600"><span className="text-gray-800 font-medium">E-mail:</span> {user.email}</p>
            <p className="text-gray-600"><span className="text-gray-800 font-medium"> Phone:</span> {user.phone}</p>
            <p className="text-gray-600">  <span className="text-gray-800 font-medium"> Address:</span> {user.address?.address}, city {user.address?.city}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-4">Post</h3>
          <Search handleSearch={handleSearch} handleQueryChange={handleQueryChange} value={query} />
          {post.length === 0 && <div className="mt-16 p-2">
            <p className="text-xl font-bold text-gray-600 text-center">No Data Match! Search Something Else.</p>
          </div>
          }
          <div>
            {
              post.map((post: Post) => (
                <PostCart
                  postData={post}
                  userData={{
                    username: user?.username as string,
                    firstName: user?.firstName as string,
                    image: user?.image as string
                  }}
                  key={post.id}

                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
