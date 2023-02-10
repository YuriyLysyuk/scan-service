import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companyLimits: null,
};

export const slice = createSlice({
  initialState,
  name: 'account',

  reducers: {
    setAccountInfo: (state, { payload }) => {
      state.companyLimits = payload;
    },
  },
});

export const { setAccountInfo } = slice.actions;

export default slice.reducer;

export const selectCompanyLimits = (state) => state.account.companyLimits;
