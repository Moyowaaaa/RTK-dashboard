import baseApi from "./baseApiSlice";

export type UserType = {
  [x: string]: any;

  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  meterNumber: number;
  password: string;
  id: string;
}

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getUsers: build.query<UserType, void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    getUsersDashboard:build.query({
        query: (id) => ({
            url: `/users/${id}/dashboard`,
            method: "GET",
          }),
    })
  }),
  overrideExisting: false,
});

export const {
  useGetUsersQuery,
  useGetUsersDashboardQuery
} = authApi;
