import { IPost, IPostDetails, IResponse } from '../interfaces/posts';
import Cookies from 'universal-cookie';
import { IUser } from '../interfaces/user';
import { IInputs } from '../constants/postInfo';

const baseURL = 'http://test-blog-api.ficuslife.com/api/v1';

export const cookies = new Cookies();

export const getAllPosts = async (): Promise<IPost[]> => {
  // const response = await fetch(baseURL + '/posts?limit=50&skip=550');
  const response = await fetch(
    'https://62ece0c2a785760e675ef3df.mockapi.io/articles',
  );
  const data = await response.json();

  return data;
};

export const getPostDetails = async (id: string): Promise<IPostDetails> => {
  // const response = await fetch(baseURL + '/posts/' + id);
  const response = await fetch(
    'https://62ece0c2a785760e675ef3df.mockapi.io/articles/' + id,
  );
  const data = await response.json();

  return data;
};

export const createPost = async (post: IInputs): Promise<boolean> => {
  const token = cookies.get('token');

  // const response = await fetch(baseURL + '/posts', {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(post),
  // });

  const response = await fetch(
    'https://62ece0c2a785760e675ef3df.mockapi.io/articles/',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    },
  );

  return response.ok;
};

// export const likePost = async id => (await axios.put(`/posts/like/${id}`)).data;

// export const createPost = async postData =>
//   (await axios.post('/posts', postData)).data;

// export const deletePost = async id => (await axios.delete(`/posts/${id}`)).data;

// export const updatePost = async ({ id, update }) =>
//   (await axios.patch(`/posts/${id}`, update)).data;

interface Inputs {
  email: string;
  password: string;
}
export const logIn = async (credentials: Inputs): Promise<string> => {
  const response = await fetch(baseURL + '/auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const { token } = await response.json();

  cookies.set('token', token);

  return token;
};

export const getUserInfo = async (token: string): Promise<IUser> => {
  const response = await fetch(baseURL + '/auth/user', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};

export const getJokes = async () => {
  const data = await fetch('https://icanhazdadjoke.com/search', {
    headers: {
      Accept: 'application/json',
    },
  });

  const { results } = await data.json();

  return results;
};
