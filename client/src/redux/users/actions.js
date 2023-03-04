export const loginUser = (email, password) => async (dispatch) => {
    try {
      dispatch(userLoading());
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                email: email,
                password: password
            }
        })
    });
      const user = await response.json();
      dispatch(userLoaded(user.data));
    } catch (error) {
      dispatch(authError(error.message));
    }
  };
  
//   export const signupUser = (email, password) => async (dispatch) => {
//     try {
//       dispatch(userLoading());
//       // Call API to signup user
//       const user = await api.signup(email, password);
//       dispatch(userLoaded(user));
//     } catch (error) {
//       dispatch(authError(error.message));
//     }
//   };
  
//   export const logout = () => async (dispatch) => {
//     try {
//       // Call API to logout user
//       await api.logout();
//       dispatch(logoutUser());
//     } catch (error) {
//       console.log(error);
//     }
//   };
  