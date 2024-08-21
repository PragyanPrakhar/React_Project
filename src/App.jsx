import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const App = () => {
    return (
        
        <>
            <Header />
            <Outlet />
            <Toaster />
            <Footer/>
        </>
        

    );
};

export default App;
