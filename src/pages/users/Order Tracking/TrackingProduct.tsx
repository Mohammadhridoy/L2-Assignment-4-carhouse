
import { useGetSingleDataQuery } from "@/redux/Features/AllCars/GetAllCars";
import React from "react";




type productId = {
    productId:string
}


const TrackingProduct:React.FC<productId>= ({productId}) => {

    
     const {data} = useGetSingleDataQuery(productId)
     
    return (
        <h1 className="font-semibold">{data?.data?.carName}</h1>
    );
};

export default TrackingProduct;