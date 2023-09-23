import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import Home from "../Pages/Home/Home";


const myCreateRouter = createBrowserRouter( [
    {
   path: "/",
   element: <MainLayout></MainLayout>,
   children: [
    {
        path: "/",
        element: <Home></Home>
    }
   ]
    }
])
    


export default myCreateRouter;