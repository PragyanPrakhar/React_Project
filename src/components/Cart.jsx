import { useSelector } from "react-redux";
import CartPage from "./CartPage";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <CartPage items={cartItems}/>
    
    );
};
export default Cart;
