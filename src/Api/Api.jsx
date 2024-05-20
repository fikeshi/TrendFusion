export async function productsData(){
    const products = await fetch("https://fakestoreapi.com/products")
    const data =await products.json()
    return data
}