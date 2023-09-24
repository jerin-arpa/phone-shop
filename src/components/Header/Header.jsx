import Navbar from "../Navbar/Navbar";

const Header = () => {
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