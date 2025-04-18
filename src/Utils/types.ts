import { BaseQueryApi } from "@reduxjs/toolkit/query"
import { JSX } from "react/jsx-runtime"

export type TCar ={
    map(arg0: (carInfo: TCar) => JSX.Element): import("react").ReactNode
    brand: string,
    model: string,
    year:number, 
    price:number,
    category: "Sedan" | "SUV" | "Truck" | "Coupe" | "Convertible",
    description: string,
    quantity:number,
    inStock: boolean,
    image:string,
    carName:string,
    _id?:string|undefined

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
    name: string | undefined,
    value: string | React.Key
}


export type data = {
    data:TCar
}

export type  TpropUser = {
    name: string,
    email: string
}

export type TproductDetail = {
        carName: string,
        model: string,
        brand: string,
        year: number,
}

 export   type dataStore = {
        brand: string,
        model: string,
        year:number, 
        price:number,
        category: "Sedan" | "SUV" | "Truck" | "Coupe" | "Convertible",
        description: string,
        quantity:number,
        inStock: boolean,
        image:string,
        carName:string,
        _id?:string|undefined
    }

export type TSingleCar ={
    dataStore: dataStore,
    

}

type Ttransaction = {
    id: string
    transactionStatus: string
    bank_status: string
    date_time: string
    method: string
    sp_code: string
}

export type Torder = {
    _id: string
    email: string
    carId: string
    quantity: number
    totalPrice: number
    status: string
    transaction:Ttransaction,
    orderStatus:string
    deliveryDate:string

 
}

export type Tuser ={
    _id: string
    name: string
    email: string
    role: string
    isBlocked: boolean
    needPasswordChange: boolean
}

