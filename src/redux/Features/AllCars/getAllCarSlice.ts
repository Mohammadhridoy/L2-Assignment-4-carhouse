
import { RootState } from "@/redux/store";
import {  data, TSingleCar } from "@/Utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type TgetCarData = {
    data:data| null,
    singleData: TSingleCar
}


const initialState :TgetCarData ={
    data:null,
    singleData: {} as TSingleCar

}



const getAllCarSlice = createSlice({
    name:"getAllCar",
    initialState,
    reducers:{
        setGetData:(state, action) =>{
            const {data } = action.payload
            state.data=data
           

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



