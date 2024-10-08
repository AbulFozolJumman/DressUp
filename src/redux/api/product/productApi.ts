import { baseApi } from "../baseApi";

const ProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    getAllProducts: builder.query({
      query: ({ page = 1, category = "", sort = "", limit = "" }) => {
        // Building query params using URLSearchParams
        const queryParams = new URLSearchParams({
          page: page.toString(),
          category,
          sort, // This could be empty, meaning it will sort by createdAt in the backend
          limit, // Optional limit; when omitted, backend returns all products
        });

        return {
          url: `/products?${queryParams}`,
          method: "GET",
        };
      },
      providesTags: ["Product"],
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: (id) => [{ type: "Product", id }],
    }),

    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    updateProductById: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductByIdMutation,
  useUpdateProductByIdMutation,
} = ProductApi;
