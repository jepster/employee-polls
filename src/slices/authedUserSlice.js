import { createSlice } from '@reduxjs/toolkit'

const authedUserSlice = createSlice({
  name : 'authedUser',
  initialState: {
    authedUser: null,
  },
  reducers: {
    setAuthedUser: (state, action) => {
      state.authedUser = action.payload;
    },
    logoutAuthedUser: (state, action) => {
      state.authedUser = null;
    }
  }
});

export const { setAuthedUser, logoutAuthedUser } = authedUserSlice.actions;
export default authedUserSlice.reducer;
