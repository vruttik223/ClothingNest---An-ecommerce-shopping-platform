export const Add = (item)=> {
    return{
        type:"Add_to_cart",
        payload:item
    }
}


export const Remove = (id)=> {
    return{
        type:"Remove_from_cart",
        payload:id
    }
}


export const Desc = (item)=> {
    return{
        type:"DescQuantity",
        payload:item
    }
}


export const Clearcart = ()=> {
    return{
        type:"Clear_cart",
       
    }
}


