import { createSlice } from '@reduxjs/toolkit'

const authedUserSlice = createSlice({
  name : 'authedUser',
  initialState: {
    username: null,
  },
  reducers: {
    setAuthedUser: (state, action) => {
      state.username = action.payload;
    },
    logoutAuthedUser: (state, action) => {
      state.username = null;
    }
  }
});

export const { setAuthedUser, logoutAuthedUser } = authedUserSlice.actions;
export default authedUserSlice.reducer;
