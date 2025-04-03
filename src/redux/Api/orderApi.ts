import { baseApi } from "./baseApi";




const userApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        setOrder: builder.mutation({
            query: (orderInfo) =>({
                url:"/orders",
                method:'POST',
                body: orderInfo
            }),
           
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
        }),
        getAllOrders:builder.query({
            query:() =>({
                url:'/orders',
                method:'GET',
            }),
            providesTags:['order']
        }),
        updateOrderStatus:builder.mutation({
            query:(updateOrder)=>({
                url:'/orders/updatestatus',
                method:'PUT',
                body: updateOrder
            }),
            invalidatesTags:['order']
        }),
        updateDate:builder.mutation({
            query:(updateDate)=>({
                url:"/orders/updatedate",
                method:'PUT',
                body:updateDate
            }),
            invalidatesTags:['order']
        }),
        singleOrder:builder.query({
            query:(id)=>({
                url:`/orders/${id}`,
                method:'GET',
            }),
            
        }),

  
    }),
    

})


export const {useSetOrderMutation, useVerifyOrderQuery,useGetSingleUserOrderQuery, useGetAllOrdersQuery,
     useUpdateOrderStatusMutation, useUpdateDateMutation, useSingleOrderQuery} = userApi