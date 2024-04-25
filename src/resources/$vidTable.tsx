import {
        CPRdescription,
        GreaseFiredescription, Heimlichdescription,
        Licedescription, ODdescription,
        PanicAttackdescription,
        Wounddescription
} from "./$instructions.tsx";
//Video imports
import CPRVid from "../assets/videos/CPRVid.mp4"
import GreaseVid from "../assets/videos/GreaseFireVid.mp4"
import PanicVid from "../assets/videos/PanicAttackVid.mp4"
import LiceVid from "../assets/videos/LiceVid.mp4"
import WoundVid from "../assets/videos/WoundVid.mp4"
import ODVid from "../assets/videos/ODVid.mp4"
import HeimlishVid from "../assets/videos/HeilichVid.mp4"
//Thumbnail imports
import CPRthumb from "../assets/thumbnails/CPRthumbnail.png"
import Greasethumb from "../assets/thumbnails/GreaseFirethumbnail.png"
import Panicthumb from "../assets/thumbnails/PanicAttackthumbnail.png"
import Licethumb from "../assets/thumbnails/Licethumbnail.png"
import Woundthumb from "../assets/thumbnails/Woundthumbnail.jpg"
import ODthumb from "../assets/thumbnails/ODthumbnail.jpg"
import Heimlichthumb from "../assets/thumbnails/Heimlichthumb.jpg"


interface VideoEntry {
        url: string;
        description: string;
        thumbnail: string;
        search: RegExp;
        title: string;
}

function createVideoEntry(
    url: string,
    description: string,
    thumbnail: string,
    search: RegExp,
    title: string
): VideoEntry { return { url, description, thumbnail, search, title };}

const vidTable: { [key: string]: VideoEntry } = {
        "cpr": createVideoEntry(CPRVid, CPRdescription, CPRthumb, /cpr/i, "How to perform cpr"),
        "grease-fire": createVideoEntry(GreaseVid, GreaseFiredescription, Greasethumb, /\b(?:grease.*fire|fire.*grease)\b/i, "Put out grease fire"),
        "panic-attack": createVideoEntry(PanicVid, PanicAttackdescription, Panicthumb, /\b(?:panic.*attack|attack.*panic)\b/i, "Help with panic attack"),
        "lice": createVideoEntry(LiceVid, Licedescription, Licethumb, /lice/i, "Remove Head Lice"),
        "wound": createVideoEntry(WoundVid, Wounddescription, Woundthumb, /wound/i, "How to help wound"),
        "OD": createVideoEntry(ODVid, ODdescription, ODthumb, /\b(?:over.*dose|dose.*over)\b/i, "Help someone who is ODing"),
        "heimlich": createVideoEntry(HeimlishVid, Heimlichdescription, Heimlichthumb, /chocking/i, "Heimlich Maneuver")
};

export {vidTable}