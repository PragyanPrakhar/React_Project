import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";

const App = () => {
    return (
        <Provider store={appStore}>
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
        </Provider>

    );
};

export default App;
