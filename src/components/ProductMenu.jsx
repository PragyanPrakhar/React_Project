import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";
import ReviewAccordian from "./ReviewAccordian";
import ClipLoader from "react-spinners/ClipLoader";
import { addItem,addItemInWishlist } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const ProductMenu = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [show, setShow] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchProct();
    }, []);
    const fetchProct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        console.log(data);
    };
    if (product === null) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader
                    color={"#4A90E2"}
                    loading={true}
                    size={150}
                    css={{ border: "2px solid #4A90E2", borderRadius: "50%" }}
                />
            </div>
        );
    }
    const handleAddItem = (item) => {
        toast.success("item added to cart");
        dispatch(addItem(item));
    };
    
    const handleAddItemInWishList=(item)=>{
        toast.success("item added to wishlist");
        dispatch(addItemInWishlist(item));

    }
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5  mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={product?.thumbnail}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {product?.brand}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {product?.title}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">
                                        {product?.reviews.length}
                                    </span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                {product?.description}
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    Price: ${product?.price}
                                </span>
                                <button
                                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                                    onClick={() => handleAddItem(product)}
                                >
                                    Add to Cart
                                </button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-pink-200"
                                    onClick={()=>handleAddItemInWishList(product)}
                                    >
                                    <svg
                                        fill="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-12">
                    <h1 className="text-4xl flex justify-center">Reviews</h1>
                    <div className="flex flex-wrap ">
                        {product?.reviews.map((item, index) => (
                            <ReviewAccordian
                                key={item.id}
                                data={item}
                                setShow={() =>
                                    setShow(index === show ? null : index)
                                }
                                show={index === show}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
export default ProductMenu;
