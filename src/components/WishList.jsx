import { useDispatch,useSelector } from "react-redux";
import {removeItemFromWishlist,clearWishList} from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";
const WishList=()=>{
    const wishListItems = useSelector((store) => store.cart.wishlist);
    const dispatch = useDispatch();
    const handleClearWishList = () => {
        dispatch(clearWishList());
    };
    console.log(wishListItems);
    return(
        <div className="flex">
        <ul className="flex flex-col  pl-72 dark:divide-gray-300 max-w-4xl items-center">
            {wishListItems?.length === 0 ? (
                <EmptyCart />
            ) : (
                wishListItems?.map((item, index) => (
                    <li
                        key={index}
                        className="flex flex-col py-6 sm:flex-row sm:justify-between"
                    >
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img
                                className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                                src={item?.thumbnail} // Use item's thumbnail from the Redux store
                                alt={item?.title} // Alt text as item title
                            />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between">
                                    <div className="">
                                        <h3 className="text-lg font-semibold">
                                            {item?.title}
                                        </h3>
                                        <div className="flex  items-center">
                                            {/* <h2 className="text-md pt-2">
                                                Quantity : {item.quantity}
                                            </h2> */}

                                            {/* here starts the div of plus and minus */}
                                            
                                            <span className="flex pl-16 cursor-pointer" onClick={()=>
                                                dispatch(removeItemFromWishlist({id : item?.id}))
                                            }>❌</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-500">
                                        ${item?.price}
                                    </span>
                                </div>
                                <p className="text-gray-500">
                                    {item?.description}
                                </p>
                            </div>
                        </div>
                    </li>
                ))
            )}

            {wishListItems?.length > 0 && (
                <button
                    className="p-4 m-2 bg-red-400 text-white rounded-lg"
                    onClick={handleClearWishList}
                >
                    Clear Cart
                </button>
            )}
        </ul>
        {/* <div className="text-3xl mt-10 ml-32">Total Price :</div> */}
       {/*  <div className="ml-32 mt-10 flex flex-col items-center justify-center p-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg max-w-xs">
            <h2 className="text-4xl font-bold mb-2">Total Price</h2>
            <span className="text-3xl">
                $
                {items
                    .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                    )
                    .toFixed(2)}
            </span>
        </div> */}
    </div>
    )
}
export default WishList;