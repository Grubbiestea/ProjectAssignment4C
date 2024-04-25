import HomeAndBack from "../resources/HomeAndBack.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import RecommendedVideo from "../resources/RecommendedVideo.tsx";
import homeIcon from "../assets/icons/home.png"

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function RateLastVideo() {

    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    let query = useQuery();

    return (
        <div>
            <div style={{border: "2px solid black", padding: "20px", borderRadius: "10px", width: "fit-content", margin: "auto", marginTop: "0px", backgroundColor: "#013D7C", height:"704px"}}>
                <HomeAndBack></HomeAndBack>
                {(() => {
                    if (!submitted) {
                        return (
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <h1 style={{color: "white"}}>Rate this video</h1>
                                {(() => {
                                    if (query.get("ID") == "") {
                                        return <text style={{fontSize:"20px", color:"lightgrey"}}>No ID provided</text>
                                    }
                                    //@ts-ignore
                                    return (<RecommendedVideo ID={query.get("ID").toString()}/>)
                                })()}
                                <br/>
                                <hr style={{width: "350px"}}/>
                                <h3 style={{
                                    maxWidth: "300px",
                                    textAlign: "center",
                                    color: "#2d2c2c",
                                    backgroundColor: "#b5b6bb",
                                    borderRadius: "10px",
                                    padding: "2px"
                                }}>How HELPFUL was this video in solving your problem?</h3>
                                <form style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: "10px",
                                    color: "white"
                                }}>
                                    <label>
                                        <input type="radio" name="rating"/>1
                                    </label>
                                    <label>
                                        <input type="radio" name="rating"/>2
                                    </label>
                                    <label>
                                        <input type="radio" name="rating"/>3
                                    </label>
                                    <label>
                                        <input type="radio" name="rating"/>4
                                    </label>
                                    <label>
                                        <input type="radio" name="rating"/>5
                                    </label>
                                </form>
                                <br/>
                                <hr style={{width: "350px"}}/>
                                <h3 style={{
                                    maxWidth: "300px",
                                    textAlign: "center",
                                    color: "#2d2c2c",
                                    backgroundColor: "#b5b6bb",
                                    borderRadius: "10px",
                                    padding: "2px"
                                }}>How RELEVANT was this video in solving your problem?</h3>
                                <form style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: "10px",
                                    color: "white"
                                }}>
                                    <label>
                                        <input type="radio" name="rating"/>1
                                    </label>
                                    <label>
                                        <input type="radio" name="rating"/>2
                                    </label>
                                    <label>
                                        <input type="radio" name="rating"/>3
                                    </label>
                                    <label>
                                        <input type="radio" name="rating"/>4
                                    </label>
                                    <label>
                                        <input type="radio" name="rating"/>5
                                    </label>
                                </form>
                                <button style={{
                                    marginTop: "50px",
                                    height: "50px",
                                    width: "200px",
                                    fontSize: "40px",
                                    fontFamily: "sans-serif",
                                    borderRadius: "10px",
                                    backgroundColor: "lightgrey",
                                    cursor: "pointer"}}
                                    onClick={() => setSubmitted(!submitted)}
                                >Submit
                                </button>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div style={{width: "353px", height:"680px", display: "flex", justifyContent: "center", alignItems: "center", textAlign:"center", flexDirection:"column"}}>
                                <h1 style={{color:"white"}}>Thank you for Submitting!</h1>
                                <img src={homeIcon} style={{width:"100px", height:"auto", backgroundColor:"lightgrey", borderRadius:"15px", cursor:"pointer"}} onClick={()=>navigate("/home")}/>
                            </div>
                        )
                    }
            })()}
            </div>
        </div>
    )
}

export default RateLastVideo;