const reducers = (blogDetails = [], action) => {
  switch (action.type) {
    case "DELETE_BLOG":
      return blogDetails.filter((blog) => blog._id !== action.payload);
    case "UPDATE_BLOG":
      return blogDetails.map((blog) =>
        blog._id === action.payload._id ? action.payload : blog
      );
    case "FETCH_ALL_BLOG":
      return action.payload;
    case "CREATE_BLOG":
      return [...blogDetails, action.payload];
    default:
      return blogDetails;
  }
};
export default reducers;
