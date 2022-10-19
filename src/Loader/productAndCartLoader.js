import { getCartFromLocal } from "../Utility/LocalDB";

export const productAndCartLoader = async() => {
    const productData = await fetch ('products.json')
    const products = await productData.json()
    
    const previousCart = getCartFromLocal()
    const initialCart = []

    for(const id in previousCart){
        const existingProduct = products.find(product => product.id === id)
        if(existingProduct){
            const quantity = previousCart[id]
            existingProduct.quantity = quantity;
            initialCart.push(existingProduct)
        }
    }


    return {products ,initialCart};
}