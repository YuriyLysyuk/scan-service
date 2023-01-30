import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../constants';
import { setCredentials } from '../features/authSlice';

export const scanApi = createApi({
  reducerPath: 'scanApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}`,

    prepareHeaders: (headers, { getState }) => {
      headers.set('Accept', 'application/json');
      headers.set('Content-Type', 'application/json');

      const accessToken = getState().auth.accessToken;

      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),

  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: '/account/login',
        method: 'POST',
        body: credentials,
      }),

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setCredentials(data));

          await dispatch(scanApi.endpoints.getAccountInfo.initiate(null));
        } catch (error) {}
      },
    }),

    getAccountInfo: build.query({
      query: () => ({
        url: '/account/info',
      }),

      // transformResponse: (result) => result.data.user,

      // async onQueryStarted(args, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled;

      //     dispatch(setAccount(data));
      //   } catch (error) {}
      // },
    }),
  }),
});

export const { useLoginMutation, useGetAccountInfoQuery } = scanApi;
