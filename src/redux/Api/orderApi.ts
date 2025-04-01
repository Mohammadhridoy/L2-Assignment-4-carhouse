import { baseApi } from "./baseApi";




const userApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        setOrder: builder.mutation({
            query: (orderInfo) =>({
                url:"/orders",
                method:'POST',
                body: orderInfo
            })
        }),

        verifyOrder: builder.query({
            query:(order_id) =>({
                url:"/orders/verify",
                method:'GET',
                params:{ order_id}
            })
        }),
        getSingleUserOrder : builder.query({
            query:(email) =>({
                url:`/order/${email}`,
                method:"GET"
            })
        })

  
    }),
    

})


export const {useSetOrderMutation, useVerifyOrderQuery,useGetSingleUserOrderQuery} = userApi