import { useSelector } from "react-redux"
import cart from "../assets/Cart-background.jpg"
import CartItem from "../components/CartItem"


function Cart(){
    // const productData = useSelector((state)=>state.trendFusion.productData)

    // console.log(productData)
    return (
        <div>
            <img className="w-full h-20 object-cover" src={cart} alt="carting-bcgimage" />
            <div className="max-w-screen-xl mx-auto py-20 flex">
                <CartItem/>
                <div className="w-1/3 bg-[#fafafa] py-6 px-4">
                    <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                        <h2 className="text-2xl font-medium">cart totals</h2>
                        <p className="flex items-center gap-4 text-base">
                            Subtotal{""}
                            <span className="font-titleFont font-bold text-lg">${200}</span>
                        </p>
                        <p className="flex items-center gap-4 text-base">
                            Shipping{""}
                            <span className=" text-base flex items-start gap-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nisi.</span>
                        </p>
                    </div>
                    <p>Total <span className="text-xl font-bold">$200</span></p>
                    <button className="bg-black py-3 mt-6 w-full text-white hover:bg-gray-800 duration-75
                    ">Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart