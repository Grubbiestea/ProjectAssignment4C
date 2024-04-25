import HomeAndBack from "../resources/HomeAndBack.tsx";
import RandomRecommended from "../resources/RandomRecommended.tsx";

function MoreVideos() {
    return (
        <div>
            <div style={{border: "2px solid black", padding: "20px", borderRadius: "10px", width: "fit-content", margin: "auto", marginTop: "0px", backgroundColor: "#013D7C", height:"704px"}}>
                <HomeAndBack></HomeAndBack>
                <RandomRecommended height={660}/>
            </div>
        </div>
    )
}

export default MoreVideos;

/*
<RecommendedVideo ID={"cpr"}/>
<RecommendedVideo ID={"grease-fire"}/>
<RecommendedVideo fontSize={25} ID={"panic-attack"}/>
 */