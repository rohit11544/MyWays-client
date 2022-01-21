import * as api from "../api";

export const getBlog = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlog();

    dispatch({ type: "FETCH_ALL_BLOG", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBlog = (blog) => async (dispatch) => {
  try {
    const { data } = await api.createBlog(blog);
    dispatch({ type: "CREATE_BLOG", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBlog = (id, blog) => async (dispatch) => {
  try {
    const { data } = await api.updateBlog(id, blog);
    dispatch({ type: "UPDATE_BLOG", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlog = (id) => async (dispatch) => {
  try {
    await api.deleteBlog(id);
    dispatch({ type: "DELETE_BLOG", payload: id });
  } catch (error) {
    console.log(error);
  }
};
