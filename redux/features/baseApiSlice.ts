import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://639a3f4b16b0fdad77584051.mockapi.io/api/v3",
	}),
	endpoints: () => ({}),
	reducerPath: "baseApi",
	tagTypes: ["Users"],
});

export default baseApi;
