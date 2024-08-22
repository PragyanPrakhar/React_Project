import { useState, useEffect } from "react";
import Cards, { withRatedLabel } from "./Cards";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
// import DropDown from "./DropDown";

const Body = () => {
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [originalFilteredProducts, setOriginalFilteredProducts] = useState(
        []
    );
    const [doubleFilteredProduct,setDoubleFilteredProduct]=useState([]);
    const [searchText, setSearchText] = useState("");
    const HighlyRatedCard = withRatedLabel(Cards);
    const [selectedOption, setSelectedOption] = useState("Categories");
    useEffect(() => {
        fetchData();
    }, []);

    // console.log(filteredProducts);
    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
        setOriginalFilteredProducts(data.products);
    };

    const filterCategories = (category) => {
        //Added line of Code
        setSelectedOption(category);
        const filteredProd = originalFilteredProducts.filter((product) => {
            //changed code
            return product.category
                .toLowerCase()
                .includes(category.toLowerCase());
        });
        setFilteredProducts(filteredProd);
        setDoubleFilteredProduct(filteredProd);
    };

    const [value, setValue] = useState(null);
    if (products === null) return <Shimmer />;
    return (
        <div className=" body p-6 bg-gray-100">
            <div className="sub-body sticky flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                <div className="dropdown-container border-2">
                    {/* <h3>Selected option :{selectedOption}</h3> */}
                    <select
                        value={selectedOption}
                        onChange={(e) => filterCategories(e.target.value)}
                        className="p-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">All</option>
                        <option value="Beauty">BEAUTY</option>
                        <option value="Fragrances">FRAGRANCES</option>
                        <option value="Furniture">FURNITURE</option>
                        <option value="Groceries">GROCERIES</option>
                    </select>
                </div>

                {/* Price Range */}
                <div className="flex items-center ml-6">
                    <div className="range-filter flex items-center mr-6">
                        <input
                            type="range"
                            id="volume"
                            name="volume"
                            min="0"
                            max="65"
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <label
                            htmlFor="volume"
                            className="text-sm font-medium text-gray-600"
                        >
                            Price:{value}
                        </label>
                    </div>
                    <button
                        className="price-filter px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => {
                            const filteredProduct =
                            doubleFilteredProduct.filter((item) => {
                                    return item.price > value;
                                });

                            setFilteredProducts(filteredProduct);
                        }}
                    >
                        Filter By
                    </button>
                </div>

                <div className="flex items-center">
                    <div className="search-category-filter mr-3">
                        <input
                            className="search-box p-3 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Search the Category"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>

                    <div className="search-button">
                        <button
                            className="search-btn px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => {
                                const filteredProducts =
                                    //changed code
                                    doubleFilteredProduct.filter((res) => {
                                        return res.title
                                            .toLowerCase()
                                            .includes(searchText.toLowerCase());
                                    });
                                setFilteredProducts(filteredProducts);
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex gap-5 flex-wrap justify-center mt-5 ">
                {filteredProducts?.map((item) => (
                    <Link to={`/product/${item.id}`} key={item.id}>
                        {
                            /** if the rating of the product is more than 4.5 then add a highly rated label to it.*/
                            item.rating > 4.5 ? (
                                <HighlyRatedCard data={item} />
                            ) : (
                                <Cards data={item} />
                            )
                        }
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Body;
