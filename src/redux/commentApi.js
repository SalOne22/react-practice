import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "comments";
const BASE_URL = "https://64ce4f770c01d81da3eeafa2.mockapi.io/api/";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),

    addComment: builder.mutation({
      query(comment) {
        return {
          url: API_ENDPOINT,
          method: "POST",
          body: comment,
        };
      },
      invalidatesTags: ["Comments"],
    }),

    updateCommentCount: builder.mutation({
      query({ id, ...body }) {
        return {
          url: `${API_ENDPOINT}/${id}`,
          method: "PUT",
          body: body,
        };
      },
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentCountMutation,
} = commentApi;
