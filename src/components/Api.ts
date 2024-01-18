import axios from 'axios'
import { Post } from '../models/Post';
import { User } from '../models/User';

export const getPostAndUser = async () => {
  try {
    const postResponse = await axios.get("https://dummyjson.com/posts");
    const promises: Promise<{ post: Post, user: User }>[] = postResponse.data.posts.map(async (post: Post) => {
      const userRes = await axios.get("https://dummyjson.com/users/" + post.userId);
      const user: User = userRes.data;
      return { post, user };
    });

    const combinedData = await Promise.all(promises);

    return combinedData;
  } catch (error) {
    console.error("Error in getPostAndUser:", error);
    throw error;
  }
};

export const getUser = async (id: number) => {
  try {
    const response = await axios.get("https://dummyjson.com/users/" + id);;
    return response.data;
  } catch (error) {
    console.error("Error in getUser:", error);
    throw error;
  }
};

export const getUsersPost = async (userId: number) => {
  try {
    const response = await axios.get(`https://dummyjson.com/users/${userId}/posts`);
    return response.data.posts;
  } catch (error) {
    console.error("Error in getUsersPost:", error);
    throw error;
  }
};

export const getSearchPost = async (query: string) => {
  try {
    const response = await axios.get('https://dummyjson.com/posts/search?q=' + query);

    const promises: { post: Post, user: User }[] = response.data.posts.map(async (post: Post) => {
      const userId = post.userId;
      const userRes = await axios.get(`https://dummyjson.com/users/${userId}`);
      return { post, user: userRes.data }
    });


    const data = await Promise.all(promises);
    return data;
  } catch (error) {
    console.error("Error in getSearchPost:", error);
    throw error;
  }
};

export const getRandomQoutes = async (id: number) => {
  try {
    const response = await axios.get("https://dummyjson.com/quotes/" + id);
    return response.data;
  } catch (error) {
    console.error("Error in getRandomQoutes:", error);
    throw error;
  }
}