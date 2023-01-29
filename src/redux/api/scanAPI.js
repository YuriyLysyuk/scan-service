import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../constants';

export const scanAPI = createApi({
  reducerPath: 'scanAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    // prepareHeaders: prepareAuthHeaders,
  }),
  tagTypes: ['accessToken'],

  endpoints: (build) => ({
    accountLogin: build.mutation({
      query: ({ login, password }) => ({
        url: '/account/login',
        body: { login, password },
        method: 'POST',
      }),
    }),
  }),
});

// export const {  } = scanAPI;
