import {useLocation} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import BaseVideo from "../resources/BaseVideo.tsx";
import {vidTable} from "../resources/$vidTable.tsx";
import {LastVideoContext} from "../resources/LastVideoContext.tsx";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Videos() {
    const query = useQuery();
    const {setLastVideo} = useContext(LastVideoContext);

    useEffect(() => {
        // @ts-ignore
        setLastVideo(query.get("ID"));
    }, []);

    if (query.get("ID") == null) {
        return <span>No ID found</span>
    }

    // @ts-ignore
    const url = vidTable[query.get("ID")]["url"]
    // @ts-ignore
    const description = vidTable[query.get("ID")]["description"]
    return (
        <BaseVideo videoURL={url} instructions={description}/>
    )
}

export default Videos