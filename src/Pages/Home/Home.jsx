
import toast, { Toaster } from "react-hot-toast";
import Mar from "./Mar";
import Par from "./Par";


import { FaFacebook } from "react-icons/fa";

const Home = () => {

    const notify = () => toast.error('Here is your toast.');

    return (
        <div>
            <button onClick={notify}>Make me a toast</button>
            <Toaster />
            <p>This is Home</p>
            <Mar />
            <Par />


            {/* icons */}
            <div>
                <p className="flex items-center"> <FaFacebook /> Facebook</p>
            </div>
        </div>
    );
};

export default Home;