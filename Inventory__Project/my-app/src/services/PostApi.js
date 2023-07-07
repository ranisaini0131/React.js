import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const PostApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
    endpoint: (builder) => ({
        adminLogin: builder.mutation({
            query: () => ({
                url: 'adminLogin',
                method: 'POST'
            })
        })
    })
})

export const { useAdminLoginMutation } = PostApi