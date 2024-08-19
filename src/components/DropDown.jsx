import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// eslint-disable-next-line react/prop-types
const DropDown = ({ originalProducts, setOriginalFilteredProducts }) => {
    const [selectedOption, setSelectedOption] = useState("Categories");
    
    const handleOptionClick = (category) => {
        setSelectedOption(category);
        // eslint-disable-next-line react/prop-types
        const filtered = originalProducts.filter((product) =>
            product.category.toLowerCase().includes(category.toLowerCase())
        );
        setOriginalFilteredProducts(filtered);
    };
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {selectedOption}
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400"
                    />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <MenuItem onClick={() => handleOptionClick("BEAUTY")}>
                    <div className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-900 cursor-pointer ">
                        BEAUTY
                    </div>
                </MenuItem>
                <MenuItem onClick={() => handleOptionClick("FRAGRANCES")}>
                    <div className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-900 cursor-pointer ">
                        FRAGRANCES
                    </div>
                </MenuItem>
                <MenuItem onClick={() => handleOptionClick("FURNITURE")}>
                    <div className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-900 cursor-pointer ">
                        FURNITURE
                    </div>
                </MenuItem>
                <MenuItem onClick={() => handleOptionClick("GROCERIES")}>
                    <div className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-900 cursor-pointer ">
                        GROCERIES
                    </div>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
};
export default DropDown;
