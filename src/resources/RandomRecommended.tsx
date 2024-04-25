import {useEffect, useState} from "react";
import {vidTable} from "./$vidTable.tsx";
import RecommendedVideo from "./RecommendedVideo.tsx";

function RandomRecommended(props: { height: number | string; amount?: number; }) {
    //Start Jank ------------------------------------------------------

    const {height, amount} = props

    const [randomVideoIds, setRandomVideoIds] = useState<string[]>([]);

    const total = amount || 9

    const getRandomVideoIds = () => {
        const videoIds = Object.keys(vidTable);
        const randomIds = [];
        while (randomIds.length < total) {
            const randomIndex = Math.floor((Math.random() * 10000) % videoIds.length);
            const randomId = videoIds[randomIndex];
            randomIds.push(randomId);
        }
        return randomIds;
    };

    useEffect(() => {
        setRandomVideoIds(getRandomVideoIds());
    }, []);

    //Stop Jank ------------------------------------------------------

    return (
        <div style={{maxHeight: `${height}px`, overflowY: "auto"}}>
            {(() => {
                if (randomVideoIds.length > 0) {
                    return (
                        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                            {randomVideoIds.map((videoId, index) => (
                                <RecommendedVideo key={index} ID={videoId}/>
                            ))}
                        </div>
                    )
                }
            })()}
        </div>
    )
}

export default RandomRecommended