import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contract from "../Pages/Contract/Contract";
import FetchFromRoute from "../Pages/FetchFromRoute/FetchFromRoute";
import FetchFromRouteSingle from "../Pages/FetchFromRoute/FetchFromRouteSingle";
import ErrorRoute from "../Pages/404Rouute/ErrorRoute";

export const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/Contract',
                    element: <Contract></Contract>
                },
                {
                    path: '/fetchFromRoute',
                    element: <FetchFromRoute></FetchFromRoute>,
                    loader: () => fetch('https://zero2intern.onrender.com/interns'),
                },

                {
                    path: '/SingleIntern/:_id',
                    element: <FetchFromRouteSingle></FetchFromRouteSingle>,
                    loader: async ({ params }) => fetch(`https://zero2intern.onrender.com/interns/${params._id}`)
                },

                {
                    path: '*',
                    element: <ErrorRoute></ErrorRoute>
                },



                // https://jsonplaceholder.typicode.com/photos/{_id}
               

            ]
        }
    ]
)