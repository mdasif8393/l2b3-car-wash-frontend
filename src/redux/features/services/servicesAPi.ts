import { baseApi } from "@/redux/api/baseApi";

const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
    }),
    getSingleService: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/services/${id}`,
        };
      },
    }),
  }),
});

export const { useGetAllServicesQuery, useGetSingleServiceQuery } = servicesApi;
