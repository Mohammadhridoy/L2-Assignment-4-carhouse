
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { logout, setUser } from '../Features/auth/authSlice';

    const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5000/api', 
        credentials:'include',
        prepareHeaders: (headers, {getState}) =>  {
            const token = (getState() as RootState).auth?.token 
            if(token){
                headers.set('authorization', `${token}`)
            }
            return headers
        },
    })

    const baseQueryWithRfreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async(args, api, extraOptions):Promise<any> =>{
        let result = await baseQuery(args, api, extraOptions)
        
        if(result?.error?.status=== 401){
            const res = await fetch('http://localhost:5000/api/auth/refresh-token',{
                method:"POST",
                credentials:'include' 
    
            })

            const data = await res.json()
            
            console.log("Refresh token resonse:", data);
            if(data?.data?.accessToken){
                const user = (api.getState() as RootState).auth.user
                api.dispatch(
                    setUser({
                        user,
                        token: data.data.accessToken
                    })
                )
    
                result = await baseQuery(args, api, extraOptions)

            }
            if(!data?.data?.accessToken){
                api.dispatch(logout())
            }
                
                
            
         

        }
        return result
    }

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRfreshToken,
    tagTypes: ['user','order'],
    endpoints: () =>({ })

})