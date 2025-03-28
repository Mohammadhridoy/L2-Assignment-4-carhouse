import { baseApi } from "./baseApi";



const userApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllUsers: builder.query({
            query: () =>({
                url:"/auth/user",
                method: 'GET'
            })
        }),

        getSingleUser: builder.query({
            query: (email) =>({
                url:`/auth/user/${email}`,
                method:'GET'
            
            }) 
        })
    }),
    

})



export const {useGetAllUsersQuery, useGetSingleUserQuery} = userApi

