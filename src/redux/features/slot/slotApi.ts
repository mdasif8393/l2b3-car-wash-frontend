import { baseApi } from "@/redux/api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableSlots: builder.query({
      query: (query) => {
        return {
          method: "GET",
          url: `/slots/availability?date=${query.date}&service=${query.serviceId}`,
        };
      },
    }),

    bookSlot: builder.mutation({
      query: (options) => {
        return {
          url: "/bookings",
          method: "POST",
          body: options,
        };
      },
    }),
  }),
});

export const { useGetAvailableSlotsQuery, useBookSlotMutation } = slotApi;
