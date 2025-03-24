import { useGetAllCarsQuery } from "@/redux/Features/AllCars/GetAllCars"
import { setGetData } from "@/redux/Features/AllCars/getAllCarSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { Titem } from "./types"



const useFetchData = (params:Titem) =>{

       const dispatch = useAppDispatch()

      const {data, isFetching, isLoading, isError} = useGetAllCarsQuery({arg: params} )
  
  useEffect(()=>{
    dispatch(setGetData({data:data, isFetching:isFetching, isLoading: isLoading, isError:isError}))
  })



}

export default useFetchData

  // const {data, isFetching, isLoading, isError} = useGetAllCarsQuery({arg: queryParams} )
  
  // dispatch(setGetData({data:data, isFetching:isFetching, isLoading: isLoading, isError:isError}))



// console.log("nav",data?.data, isFetching, isLoading, isError);


// console.log( 'ddd', queryParams);
  //  const dispatch = useAppDispatch()
  // import { useGetAllCarsQuery } from "@/redux/Features/AllCars/GetAllCars"
// import { setGetData } from "@/redux/Features/AllCars/getAllCarSlice"
// import { useAppDispatch } from "@/redux/hooks"