import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  account: null,
};

export const accountSlice = createSlice({
  initialState,
  name: 'accountSlice',

  reducers: {
    logout: () => initialState,

    setAccount: (state, action) => {
      state.account = action.payload;
    },
  },
});

export default accountSlice.reducer;

export const { logout, setAccount } = accountSlice.actions;
