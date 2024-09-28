import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      // Accepting query params for pagination, category filtering, and sorting
      query: ({ page = 1, category = "", sort = "asc" }) => {
        const queryParams = new URLSearchParams({
          page: page.toString(),
          category,
          sort,
        });
        return `/products?${queryParams}`;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = baseApi;
