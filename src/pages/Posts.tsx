import { ChangeEvent, FC, useEffect, useState, lazy, Suspense } from "react";
import { getPostAndUser, getSearchPost } from "../components/Api";
import PostCart from "../components/PostCart";
import { Post } from "../models/Post";
import { User } from "../models/User";
import Loading from "../components/Loading";

const Search = lazy(() => import("../components/Search"));

const PostList: FC = () => {
  const [posts, setPosts] = useState<{ post: Post, user: User }[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostAndUser().then((data) => {
      setPosts(data)
      setLoading(false)
    });

  }, []);

  const handleSearch = async () => {
    setLoading(true)
    const data = await getSearchPost(query);
    setPosts(data);
    setLoading(false)
  };
  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }
  return (
    <div>
      <Suspense>
        <Search handleSearch={handleSearch} handleQueryChange={handleQueryChange} value={query} />
      </Suspense>
      {loading && <Loading />}
      {posts.length === 0 && <div className="mt-16 p-2">
        <p className="text-xl font-bold text-gray-600 text-center">No Data Match! Search Something Else.</p>
      </div>
      }
      {
        posts.map((items) => (
          <PostCart
            key={items.post.id}
            userData={items.user}
            postData={items.post} />
        ))
      };
    </div>
  )
}

export default PostList;