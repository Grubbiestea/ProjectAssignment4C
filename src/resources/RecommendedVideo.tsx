import {useNavigate} from "react-router-dom";
import {vidTable} from "./$vidTable.tsx";

function RecommendedVideo(props: {ID: string, fontSize?: any}) {
    const {ID, fontSize} = props;
    const navigate = useNavigate();
    let size = fontSize || 30;
    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center"}}>
            <img src={vidTable[ID]["thumbnail"]} style={{height: "auto", width: "170px", marginRight: "50px", cursor:"pointer"}}
                 onClick={()=>navigate(`/videos?ID=${ID}`)}/>
            <text style={{fontSize: size, width: "170px", cursor:"pointer", color:"lightgrey", fontFamily:"sans-serif"}}
                  onClick={()=>navigate(`/videos?ID=${ID}`)}>{vidTable[ID]["title"]}</text>
        </div>
    )
}

export default RecommendedVideo