import { Link } from "react-router-dom";


const FetchFromRouteComp = ({ intern }) => {

    // console.log(intern);
    const { Intern, category, image, adminEmail, _id } = intern;

    return (
        <div className="m-6 p-4 bg-slate-300">
            <img className="h-52 w-96" src={image} alt="" />
            <p className="font-bold">Intern: {Intern}</p>
            <p>Category: {category}</p>
            <p>Email: {adminEmail}</p>

            <Link to={`/SingleIntern/${_id}`}  className="btn btn-outline btn-primary mt-2">View Details</Link>
        </div>
    );
};

export default FetchFromRouteComp;

