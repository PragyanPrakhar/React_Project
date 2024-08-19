import { useState, useEffect } from "react";
import Cards, { withRatedLabel } from "./Cards";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import DropDown from "./DropDown";

const Body = () => {
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [originalFilteredProducts, setOriginalFilteredProducts] = useState(
        []
    );
    const [searchText, setSearchText] = useState("");
    const HighlyRatedCard = withRatedLabel(Cards);
    const [selectedOption, setSelectedOption] = useState("Categories");
    useEffect(() => {
        fetchData();
    }, []);

    const filterCategories = (category) => {
        setSelectedOption(category);
        const filteredProducts = originalFilteredProducts.filter(
            (product) => {
                return product.category.toLowerCase().includes(category.toLowerCase());
            }
        );
        setFilteredProducts(filteredProducts);
    };

    // console.log(filteredProducts);
    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
        setOriginalFilteredProducts(data.products);
    };
    const [value, setValue] = useState(null);
    if (products === null) return <Shimmer />;
    return (
        <div className="body">
            <div className="dropdown-container">
                <h3>Selected option :{selectedOption}</h3>
                <select value={selectedOption}
                onChange={(e) => filterCategories(e.target.value)}>
                    <option
                        value="Beauty"
                        // onChange={() => filterCategories("Beauty")}
                    >
                        BEAUTY
                    </option>
                    <option
                        value="Fragrances"
                        // onChange={() => filterCategories("FRAGRANCES")}
                    >
                        FRAGRANCES
                    </option>
                    <option
                        value="Furniture"
                        // onChange={() => filterCategories("FURNITURE")}
                    >
                        FURNITURE
                    </option>
                    <option
                        value="Groceries"
                        // onChange={() => filterCategories("GROCERIES")}
                    >
                        GROCERIES
                    </option>
                </select>
            </div>

            <div className="range-filter">
                <input
                    type="range"
                    id="volume"
                    name="volume"
                    min="0"
                    max="65"
                    onChange={(e) => setValue(e.target.value)}
                />
                <label htmlFor="volume">Price:{value}</label>
            </div>
            <div className="search-category-filter">
                <input
                    className="search-box border-2"
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
                    className="search-btn border-2"
                    onClick={() => {
                        const filteredProducts =
                            originalFilteredProducts.filter((res) => {
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
            <button
                className="price-filter"
                onClick={() => {
                    const filteredProduct = originalFilteredProducts.filter(
                        (item) => {
                            return item.price > value;
                        }
                    );

                    setFilteredProducts(filteredProduct);
                }}
            >
                Filter By
            </button>

            <div className="flex gap-5 flex-wrap justify-center ">
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
