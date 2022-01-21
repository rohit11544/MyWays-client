export const loginUser = (
  userDetails = {
    fullName: "",
    email: "",
    phNumber: "",
    passWord: "",
    verified: "NO",
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    case "LOGOUT_USER":
      return action.payload;
    default:
      return userDetails;
  }
};
