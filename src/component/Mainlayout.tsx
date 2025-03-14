import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "@/Shared/Footer";


const Mainlayout = () => {
    return (
        <div className="h-full w-full">
            <div >
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainlayout;