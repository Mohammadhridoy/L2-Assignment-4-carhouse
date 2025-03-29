
import { RootState } from "@/redux/store";
import {  data, TSingleCar } from "@/Utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type TgetCarData = {
    data:data| null,
    isFetching:boolean | null, 
    isLoading:boolean | null, 
    isError:string | null,
    singleData: TSingleCar
}


const initialState :TgetCarData ={
    data:null,
    isFetching: null, 
    isLoading:null, 
    isError:null,
    singleData: {} as TSingleCar

}



const getAllCarSlice = createSlice({
    name:"getAllCar",
    initialState,
    reducers:{
        setGetData:(state, action) =>{
            const {data, isFetching, isLoading, isError} = action.payload
            state.data=data
            state.isFetching = isFetching
            state.isLoading = isLoading
            state.isError = isError

        },
        setSingleData: (state, action: PayloadAction<TSingleCar>) =>{
                state.singleData = action.payload
        }
   
        
    }
})


export const {setGetData, setSingleData} = getAllCarSlice.actions
export default getAllCarSlice.reducer

export const useGetAlldata = (state: RootState) => state.getAlldata
export const useSingledata = (state: RootState) => state.getAlldata.singleData



