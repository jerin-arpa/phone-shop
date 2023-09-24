import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-7xl font-bold text-center mt-36">Oops!</h1>
            <p className="text-2xl font-bold text-center mt-5">Sorry, an unexpected error has occurred.</p>

            <div className="flex justify-center mt-5">
                <Link to='/'>
                    <button className="btn">Go Home</button>
                </Link>
            </div>
        </div >
    );
};

export default ErrorPage;