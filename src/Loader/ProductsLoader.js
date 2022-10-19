export const ProductLoader = async() => {
    const productData = await fetch ('products.json')
    const products = await productData.json()
    return products;
}