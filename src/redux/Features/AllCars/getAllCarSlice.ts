
import { RootState } from "@/redux/store";
import { Car } from "@/Utils/types";
import { createSlice } from "@reduxjs/toolkit";



type TgetCarData = {
    data:Car| null,
    isFetching:boolean | null, 
    isLoading:boolean | null, 
    isError:string | null
}


const initialState :TgetCarData ={
    data:null,
    isFetching: null, 
    isLoading:null, 
    isError:null

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
   
        
    }
})


export const {setGetData} = getAllCarSlice.actions
export default getAllCarSlice.reducer

export const useGetAlldata = (state: RootState) => state.getAlldata




