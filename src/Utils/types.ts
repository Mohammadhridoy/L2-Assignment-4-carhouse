import { BaseQueryApi } from "@reduxjs/toolkit/query"

export type Car ={
    brand: string,
    model: string,
    year:number, 
    price:number,
    category: "Sedan" | "SUV" | "Truck" | "Coupe" | "Convertible",
    description: string,
    quantity:number,
    inStock: boolean, 

}

export type TError ={
    data:{
        message:string
        stack: string
        success:boolean; 
    }
}

export type TResponse<T> ={
     
    data?: T;
    error?:TError
    successs:boolean;
    message:string
    meta?:number

}

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi

export type Titem ={
    name:string,
    value: string | React.Key
}[]