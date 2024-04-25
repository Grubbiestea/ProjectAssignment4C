import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import 'regenerator-runtime/runtime.js';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import MoreVideos from "./Pages/MoreVideos.tsx";
import NoVideos from "./Pages/NoVideos.tsx";
import Videos from "./Pages/Videos.tsx";
import {LastVideoContext} from "./resources/LastVideoContext.tsx";
import RateLastVideo from "./Pages/RateLastVideo.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/videos",
        element: <Videos />,
    },
    {
        path: "/morevideos",
        element: <MoreVideos />,
    },
    {
        path: "/novideos",
        element: <NoVideos />,
    },
    {
        path: "/ratelastvideo",
        element: <RateLastVideo />,
    },
]);

function RootRender () {
    const [lastVideo, setLastVideo] = useState("")
    return (
        <React.StrictMode>
            <LastVideoContext.Provider value={{lastVideo, setLastVideo}}>
                <RouterProvider router={router}/>
            </LastVideoContext.Provider>
        </React.StrictMode>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RootRender/>
)
