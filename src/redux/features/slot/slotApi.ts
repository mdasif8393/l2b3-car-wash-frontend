import { baseApi } from "@/redux/api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableSlots: builder.query({
      query: (query) => {
        console.log(query);
        return {
          method: "GET",
          url: `/slots/availability?date=${query.date}&service=${query.serviceId}`,
        };
      },
    }),
  }),
});

export const { useGetAvailableSlotsQuery } = slotApi;
