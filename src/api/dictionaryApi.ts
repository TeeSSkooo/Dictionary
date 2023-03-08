import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Word from 'types/Word';

export const dictionaryApi = createApi({
  reducerPath: 'dictionaryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en/' }),
  endpoints: (builder) => ({
    getWord: builder.query<Word[], string>({
      query: (word) => word,
    }),
  }),
});

export default dictionaryApi;
