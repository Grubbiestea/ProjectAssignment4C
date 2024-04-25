import ReactPlayer from "react-player";
import "../css/video.css"
import rightArrow from "../assets/icons/RightArrow.png"
import HomeAndBack from "./HomeAndBack.tsx";
import {useNavigate} from "react-router-dom";

function BaseVideo(props: { videoURL: any; instructions: any; }) {
    const {videoURL, instructions} = props;
    const navigate = useNavigate();
    return (
        <div style={{
            border: "2px solid black",
            padding: "20px",
            borderRadius: "10px",
            width: "fit-content",
            margin: "auto",
            marginTop: "0px",
            backgroundColor:"#013D7C"}}>
            <HomeAndBack></HomeAndBack>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "688px", width: "375px"}}>
                <div>
                    <ReactPlayer style={{scale: ".64", marginTop: "-100px", marginLeft: "-2px"}} url={videoURL}
                                 controls={true} playing={true}/>
                </div>
                <div style={{flex: 1, overflowY: "scroll", maxHeight: "425px", width: "400px", whiteSpace: "pre-wrap", marginTop: "-60px"}}>
                    <pre style={{fontSize: "20px", whiteSpace: "pre-wrap", lineHeight: "25px", color:"white", fontFamily:"sans-serif"}}>{instructions}</pre>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px"}}>
                <img src={rightArrow} style={{height:"30px", width:"50px", marginTop: "-20px", cursor: "pointer"}} onClick={() => navigate("/morevideos")}/>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <button style={{color: "white", background: "transparent", border: "none", outline: "none"}} onClick={() => navigate("/morevideos")}>
                    Swipe for more videos
                </button>
            </div>
        </div>
    )
}

export default BaseVideo