import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";
const CartPage = ({ items }) => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <>
            <ul className="flex flex-col  pl-72 dark:divide-gray-300 max-w-4xl items-center">
                {items.length === 0 ? (
                    <EmptyCart />
                ) : (
                    items.map((item, index) => (
                        <li
                            key={index}
                            className="flex flex-col py-6 sm:flex-row sm:justify-between"
                        >
                            <div className="flex w-full space-x-2 sm:space-x-4">
                                <img
                                    className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                                    src={item.thumbnail} // Use item's thumbnail from the Redux store
                                    alt={item.title} // Alt text as item title
                                />
                                <div className="flex flex-col justify-between w-full pb-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-lg font-semibold">
                                            {item.title}
                                        </h3>
                                        <span className="text-gray-500">
                                            ${item.price}
                                        </span>
                                    </div>
                                    <p className="text-gray-500">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))
                )}

                {items.length > 0 && (
                    <button
                        className="p-4 m-2 bg-red-400 text-white rounded-lg"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                )}
            </ul>
        </>
    );
};

export default CartPage;
