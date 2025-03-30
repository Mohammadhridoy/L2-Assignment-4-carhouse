import { useGetAllCarsQuery } from "@/redux/Features/AllCars/GetAllCars"
import { setGetData } from "@/redux/Features/AllCars/getAllCarSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { Titem } from "./types"




const useFetchData = (params:Titem[]) =>{

       const dispatch = useAppDispatch()

      const {data } = useGetAllCarsQuery({arg: params} )
  
  useEffect(()=>{
    dispatch(setGetData({data:data}))
    
  })



}

export default useFetchData

  