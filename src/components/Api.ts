import axios from 'axios'
import { Post } from '../models/Post';
import { User } from '../models/User';

export const getPostAndUser = async () => {
  const postResponse = await axios.get("https://dummyjson.com/posts");
  const promises: { post: Post, user: User }[] = postResponse.data.posts.map(async (post: Post) => {
    const userRes = await axios.get("https://dummyjson.com/users/" + post.userId);
    const user: User = userRes.data;
    return { post, user };
  });

  const combindData = await axios.all(promises);

  return combindData;
};

export const getUser = async (id: number) => {
  const response = 
await axios.get("https://dummyjson.com/users/" + id)
  return response.data
};

export const getUsersPost = async (userId: number) => {
  const response = await axios.get(`https://dummyjson.com/users/${userId}/posts`);
  return response.data.posts;
};

export const getSearchPost = async (query: string) => {
  const response = await axios.get('https://dummyjson.com/posts/search?q=' + query );

  const promisses: { post: Post, user: User }[] = response.data.posts.map( async (post: Post)=>{
    const userId = post.userId;
    const userRes = await axios.get(`https://dummyjson.com/users/${userId}`);
    return {post, user: userRes.data}
  });

  
  const data = await axios.all(promisses);
  return data
};

export const getRandomQoutes = async (id: number) => {
  const response = await axios.get("https://dummyjson.com/quotes/" + id);
  return response.data;
}