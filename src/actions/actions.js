export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "LOGIN_USER", payload: user });
};

export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: "LOGOUT_USER",
    payload: {
      fullName: "",
      email: "",
      phNumber: "",
      passWord: "",
      verified: "NO",
    },
  });
};
