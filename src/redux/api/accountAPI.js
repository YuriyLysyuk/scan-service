import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../constants';
import { setAccount } from '../features/accountSlice';

export const accountAPI = createApi({
  reducerPath: 'accountAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/account/`,
  }),
  tagTypes: ['Account'],

  endpoints: (build) => ({
    accountLogin: build.mutation({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(accountAPI.endpoints.accountLogout.initiate(null));
        } catch (error) {}
      },
    }),

    accountLogout: build.mutation({
      query() {
        return {
          url: 'logout',
          credentials: 'include',
        };
      },
    }),

    accountInfo: build.query({
      query() {
        return {
          url: 'info',
          credentials: 'include',
        };
      },

      transformResponse: (result) => result.data.user,

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setAccount(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useAccountLoginMutation, useAccountLogoutMutation } = accountAPI;
