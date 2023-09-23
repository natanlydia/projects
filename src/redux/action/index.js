// for adding product to cart
export const addCart = (product ) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}


//for  delete product from cart 
export const deleteCart = (product ) => {
    return{
        type : "DELETEITEM",
        payload : product
    }
}