// import { FaShoppingCart } from "react-icons/fa";

// const EmptyCart = () => {
//     return(
//         <div className="flex flex-col items-center text-center bg-white dark:bg-gray-700 shadow-lg rounded-lg p-10 max-w-md">
//             <FaShoppingCart className="text-gray-400 dark:text-gray-500 text-6xl mb-4" />
//             <h1 className="text-2xl font-bold text-gray-700 dark:text-white">
//                 Your Cart is Empty
//             </h1>
//             <p className="text-gray-500 dark:text-gray-400 mt-2">
//                 Looks like you haven't added anything to your cart yet.
//             </p>
//             <button
//                 className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg shadow"
//                 onClick={() => alert("Start Shopping")}
//             >
//                 Start Shopping
//             </button>
//         </div>
//     );
// };
// export default EmptyCart;

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const EmptyCart = () => {
    return(
        <div className="flex flex-col items-center text-center bg-white dark:bg-gray-700 shadow-lg rounded-lg   p-36  mx-auto my-20">
            <FaShoppingCart className="text-gray-400 dark:text-gray-500 text-6xl mb-4" />
            <h1 className="text-2xl font-bold text-gray-700 dark:text-white">
                Your Cart is Empty
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
                Looks like you haven't added anything to your cart yet.
            </p>
            <button
                className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg shadow"
                // onClick={() => alert("Start Shopping")}
            >
                <Link to="/">Start Shopping</Link>
            </button>
        </div>
    );
};
export default EmptyCart;
