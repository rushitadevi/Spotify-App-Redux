export const handleUserLoggedIn = userName => {
    return async (dispatch, getState) => {
      //do async code here
      dispatch({
        type: "USER_LOGGED_IN",
        payload: userName
      });
    };
  };