import api from './api-config';

export const getAllUsers = async () => {
  const resp = await api.get('/users');
  return resp.data;
};

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
}

export const putUser = async (id, userData) => {
  const resp = await api.put(`/users/${id}`, { user: userData })
  return resp.data;
}

export const deleteUser = async (id) => {
  const resp = await api.delete(`/users/${id}`);
  return resp
}

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
};

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
}

export const createPost = async (postData) => {
  const resp = await api.post('/posts', { post: postData })
  return resp.data;
}

export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData })
  return resp.data;
}

export const deletePost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp
}


export const createComment = async (posts_id, commentData) => {
  const resp = await api.post(`/posts/${posts_id}/comments`, { comment: commentData })
  return resp.data;
}

export const putComment = async (posts_id, commentData, id) => {
  const resp = await api.put(`/posts/${posts_id}/comments/${id}`, { comment: commentData })
  return resp.data;
}

export const deleteComment = async (posts_id, id) => {
  const resp = await api.delete(`/posts/${posts_id}/comments/${id}`);
  return resp
}