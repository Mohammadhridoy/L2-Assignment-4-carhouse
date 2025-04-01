import { baseApi } from "./baseApi";



const userApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllUsers: builder.query({
            query: () =>({
                url:"/auth/user",
                method: 'GET'
            }),
            providesTags:['user']
        }),

        getSingleUser: builder.query({
            query: (email) =>({
                url:`/auth/user/${email}`,
                method:'GET'
            
            }) 
        }),
        changePassword: builder.mutation({
            query:(passwordObject ) =>({
                url:'/auth/user/changepassword',
                method:'POST',
                body: passwordObject
            })
        }),
        isBlocked: builder.mutation({
            query:(userId)=>({
                url:'/auth/user/blocked' ,
                method:'POST',
                body: userId
            }),
            invalidatesTags:['user']

        })

    }),
    

})



export const {useGetAllUsersQuery, useGetSingleUserQuery, useChangePasswordMutation, useIsBlockedMutation} = userApi

