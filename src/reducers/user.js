const reducers = (userDetails = [], action) => {
  switch (action.type) {
    case "DELETE_USER":
      return userDetails.filter((user) => user._id !== action.payload);
    case "UPDATE_USER":
      return userDetails.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    case "FETCH_ALL_USER":
      return action.payload;
    case "CREATE_USER":
      return [...userDetails, action.payload];
    default:
      return userDetails;
  }
};
export default reducers;
