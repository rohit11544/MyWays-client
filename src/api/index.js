import axios from "axios";

//--------------------------------------Admin----------------------------------------------------------
const urlAdmin = "https://blog-myways-server-code.vercel.app/admin";

export const fetchAdmin = () => axios.get(urlAdmin);

export const createAdmin = (newAdmin) => axios.post(urlAdmin, newAdmin);

export const updateAdmin = (id, updateAdmin) =>
  axios.patch(`${urlAdmin}/${id}`, updateAdmin);

export const deleteAdmin = (id) => axios.delete(`${urlAdmin}/${id}`);

//--------------------------------------user---------------------------------------------------------
const urlUser = "https://blog-myways-server-code.vercel.app/user";

export const fetchUser = () => axios.get(urlUser);

export const createUser = (newUser) => axios.post(urlUser, newUser);

export const updateUser = (id, updateUser) =>
  axios.patch(`${urlUser}/${id}`, updateUser);

export const deleteUser = (id) => axios.delete(`${urlUser}/${id}`);

//--------------------------------------blog---------------------------------------------------------
const urlBlog = "https://blog-myways-server-code.vercel.app/blog";

export const fetchBlog = () => axios.get(urlBlog);

export const createBlog = (newBlog) => axios.post(urlBlog, newBlog);

export const updateBlog = (id, updateBlog) =>
  axios.patch(`${urlBlog}/${id}`, updateBlog);

export const deleteBlog = (id) => axios.delete(`${urlBlog}/${id}`);
