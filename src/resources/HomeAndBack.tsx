import backButton from "../assets/icons/back.png";
import homeButton from "../assets/icons/home.png";
import {useNavigate} from "react-router-dom";

function HomeAndBack() {
    const navigate = useNavigate();
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px"}}>
            <img src={backButton} style={{width: "20px", cursor: "pointer", backgroundColor:"lightgrey", borderRadius:"10px"}} onClick={() => navigate(-1)}/>
            <img src={homeButton} style={{width: "20px", cursor: "pointer", backgroundColor:"lightgrey", borderRadius:"5px"}} onClick={() => navigate("/home")}/>
        </div>
    )
}

export default HomeAndBack;