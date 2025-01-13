import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    username: '',
    image: '',
    address: '',
    phnNumber: '',
    email: '',
    userType: '',
  },
};

const userSlice = createSlice({
  name: "user",
  initialState, 
  reducers: {
    updateUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { updateUserData } = userSlice.actions;
export default userSlice.reducer;
