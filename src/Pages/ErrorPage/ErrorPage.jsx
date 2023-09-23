import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center items-center">
            <h2>Opps!!</h2>
            <Link to="/">Go back Home</Link>
        </div>
    );
};

export default ErrorPage;