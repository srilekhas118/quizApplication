import React, { Children } from "react";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import QuizPage from "./Components/QuizPage";
import Layout from "./Components/Layout";
import Result from "./Components/Result";


let myRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"QuizPage",
                element:<QuizPage/>
            },
            {
                path:"Result",
                element:<Result/>
            }
        ]
    }    
])

const App=()=>{
    return(<RouterProvider router={myRoutes}>
    
    </RouterProvider>)
}

export default App;