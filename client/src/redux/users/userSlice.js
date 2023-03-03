import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoading: (state) => {
            state.isLoading = true;
        },
        userLoaded: (state, action) => {
            state.isAuthenticated = true;
            state.isLoading = false;
            state.user = action.payload
        },
        authError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.deleteItem('token');
          },
    }
})

export const { userLoading, userLoaded, authError, logoutUser } = userSlice.actions;

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
  
  export default userSlice.reducer;