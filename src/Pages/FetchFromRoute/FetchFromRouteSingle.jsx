import { useLoaderData } from "react-router-dom";


const FetchFromRouteSingle = () => {
    const a = useLoaderData()
    
    const { Intern, category, image, adminEmail, description } = a;
    return (
        <div className="flex justify-center items-center">
            <div className="m-6 p-4 bg-slate-300">
                <img className="h-52 w-96" src={image} alt="" />
                <p className="font-bold">Intern: {Intern}</p>
                <p>Category: {category}</p>
                <p>Email: {adminEmail}</p>
                <p className="w-96">{description}</p>
            </div>
        </div>
    );
};

export default FetchFromRouteSingle;