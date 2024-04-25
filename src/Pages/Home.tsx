import muted from "../assets/images/muted.png"
import unmuted from "../assets/images/unmuted.png";
import keyboard from "../assets/images/keyboard.jpg"
import {KeyboardEvent, useContext, useEffect, useState} from "react";
import "../css/home.css";
import {useNavigate} from "react-router-dom";
import 'regenerator-runtime/runtime.js';
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import {vidTable} from "../resources/$vidTable.tsx";
import {LastVideoContext} from "../resources/LastVideoContext.tsx";
import { FaBars } from "react-icons/fa";

function Home() {

    const [micImg, setMicImg] = useState(unmuted);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [isListening, setIsListening] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false);
    const {lastVideo} = useContext(LastVideoContext)

    const {
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    useEffect(() => {
        SpeechRecognition.startListening({continuous: true}).then();
        if (!browserSupportsSpeechRecognition) {
            console.log("No speech");
        }
    }, []);

    function search(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            for (const [key, value] of Object.entries(vidTable)) {
                if (value["search"].test(searchTerm)) {
                    navigate(`/videos?ID=${key}`)
                    return
                }
            }
            console.log(searchTerm);
            navigate(`/novideos?search=${searchTerm}`)
        }
        return
    }

    function muteMic() {
        if (micImg == unmuted) {
            setMicImg(muted);
            setIsListening(false);
            SpeechRecognition.stopListening().then();
        }
        else {
            setMicImg(unmuted);
            setIsListening(true);
            SpeechRecognition.startListening({continuous: true}).then();
        }
    }

    return (
        <div className="outer-container" style={{backgroundColor: "#013D7C"}}>
            <div style={{marginTop: "25px", position:"absolute", marginLeft:"0px"}}>
                <FaBars size={24} color="#fff" onClick={toggleMenu}/>
                {menuOpen && (
                    <div className="menu" style={{
                        position: "absolute",
                        top: "30px",
                        left: "0px",
                        backgroundColor: "lightgrey",
                        height: "600px",
                        width: "150px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}>
                        <div style={{backgroundColor: "black", borderRadius: "5px", textAlign: "center", marginTop:"10px"}}>
                            <text style={{cursor: "pointer", fontSize: "20px", fontFamily: "sans", color:"lightgrey"}}
                                  onClick={() => navigate(`/ratelastvideo?ID=${lastVideo}`)}>Rate Last Video
                            </text>
                        </div>
                        <div style={{backgroundColor: "black", borderRadius: "5px", textAlign: "center"}}>
                            <text style={{fontSize: "20px", fontFamily: "sans", color:"lightgrey"}}>
                                Settings
                            </text>
                        </div>
                    </div>
                )}
            </div>
            <div className="container">
                <h1 style={{textAlign: "center", width: "300px", marginTop: "-60px", fontFamily: "sans-serif"}}>Type or
                    State your Emergency</h1>
                <div>
                    <input style={{width: "300px", height: "40px", fontSize: "20px"}}
                           value={searchTerm}
                           onChange={(e) => {
                               setSearchTerm(e.target.value)
                           }}
                           onKeyDown={(e) => search(e)}/>
                </div>
                <div style={{fontSize: "20px"}}>{(() => {
                    if (isListening) {
                        return <p>Tap to mute</p>;
                    } else {
                        return <p>Tap to unmute</p>;
                    }
                })()}</div>
                <div style={{marginTop: "0px"}}>
                    <img src={micImg} alt={"Image not found!"} onClick={muteMic}/>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "-70px",
                position: "relative",
                bottom: 0
            }}>
                <img src={keyboard} style={{width: "375px", top: "50px"}}/>
            </div>
        </div>
    )
}

export default Home