import { baseApi } from "@/redux/api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableSlots: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/slots/availability",
        };
      },
    }),
  }),
});

export const { useGetAvailableSlotsQuery } = slotApi;
