import { useLoaderData } from "react-router-dom";
import FetchFromRouteComp from "./FetchFromRouteComp";
import './FetchFromRoute.css'

const FetchFromRoute = () => {

    const interns = useLoaderData();
    // console.log(interns);

    return (
        <div className="fetch-from-route">
            {
                interns.map(intern => (
                    <FetchFromRouteComp key={intern._id} intern={intern} />
                ))
            }
        </div>
    );
};

export default FetchFromRoute;