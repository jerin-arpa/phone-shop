import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-blue-100">
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <a className="font-bold pl-0 text-xl">Phone Shop</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
                            }>Home</NavLink>
                        </li>

                        <NavLink to="/favorite" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
                        }><li><a>Favorite</a></li></NavLink>

                        <NavLink to="/login" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
                        }><li><a>Login</a></li></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;