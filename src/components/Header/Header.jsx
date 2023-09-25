import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Header = () => {
    const loc = useLocation();
    console.log(loc);

    useEffect(() => {
        console.log(loc.pathname);

        if (loc.pathname === "/") {
            document.title = `Phone-home`;
        } else {
            document.title = `Phone ${loc.pathname.replace("/", "-")}`;
        }

        if (loc.state) {
            document.title = ` ${loc.state}`;
        }
    }, [loc.pathname]);

    return (
        <div>
            <Navbar></Navbar>

            <div className="h-[40vh] bg-blue-100">
                <h2 className="text-7xl font-bold text-center pt-16">Phone shop</h2>
            </div>
        </div>
    );
};

export default Header;