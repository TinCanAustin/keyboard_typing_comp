'use client';

import PlaySetup from "@/components/play-setup/setup";
import PlayerAdd from "@/components/player-add/player_add";
import { useState } from "react";

export default function Local_play(){

    const [playState, setState] = useState(0);

    const incState = ()=>{
        setState(s => s += 1);
    }
    const decState = ()=>{
        setState(s => s -= 1);
    }

    return (
        <>
            {playState == 0 && <PlaySetup _next={incState}/>}
            {playState == 1 && <PlayerAdd _prev={decState}/>}
        </>
    );
}