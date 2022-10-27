import { IPostDetails, IResponse } from '../interfaces/posts';

const baseURL = 'http://test-blog-api.ficuslife.com/api/v1';

export const getAllPosts = async (): Promise<IResponse> => {
  const response = await fetch(baseURL + '/posts?limit=50');
  const data = await response.json();

  return data;
};

export const getPostDetails = async (id: string): Promise<IPostDetails> => {
  const response = await fetch(baseURL + '/posts/' + id);
  const data = await response.json();

  return data;
};

// export const likePost = async id => (await axios.put(`/posts/like/${id}`)).data;

// export const createPost = async postData =>
//   (await axios.post('/posts', postData)).data;

// export const deletePost = async id => (await axios.delete(`/posts/${id}`)).data;

// export const updatePost = async ({ id, update }) =>
//   (await axios.patch(`/posts/${id}`, update)).data;
