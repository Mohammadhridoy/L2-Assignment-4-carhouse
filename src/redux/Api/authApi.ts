import { baseApi } from "./baseApi";



const authApi = baseApi.injectEndpoints({
        endpoints: (builder) =>({
            login: builder.mutation({
                query: (userinfo) =>({
                    url: '/auth/login',
                    method:'POST',
                    body:userinfo,
                })
            }),

            setregister: builder.mutation({
                query: (registerinfo) =>({
                    url: 'auth/register',
                    method:'POST',
                    body:registerinfo,
                })
            })
        })
})


export const {useLoginMutation, useSetregisterMutation} = authApi