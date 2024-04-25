import HomeAndBack from "../resources/HomeAndBack.tsx";
import {useLocation} from "react-router-dom";
import React from "react";
import RandomRecommended from "../resources/RandomRecommended.tsx";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function NoVideos() {
    let query = useQuery();

    return (
        <div>
            <div style={{border: "2px solid black", padding: "20px", borderRadius: "10px", width: "fit-content", margin: "auto", marginTop: "0px", backgroundColor: "#013D7C", height: "704px"}}>
                <HomeAndBack></HomeAndBack>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                    <text style={{fontSize: 25, color:"red", marginTop:"20px"}}>NO VIDEO FOUND FOR</text>
                    <text style={{fontSize: 25, color:"red"}}>{query.get("search")}</text>
                    <a style={{color: "white", fontSize:30, marginTop:"30px"}} href={`https://www.google.com/search?q=${query.get("search")}`}>Try the web</a>
                </div>
                <hr style={{marginTop:"30px", marginBottom:"30px"}}/>
                <RandomRecommended height={455}/>
            </div>
        </div>
    )
}

export default NoVideos