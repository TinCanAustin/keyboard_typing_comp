'use client';

import PlaySetup from "@/components/play-setup/setup";
import PlayerAdd from "@/components/player-add/player_add";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Local_settings(){

    const [playState, setState] = useState(0);
    const router = useRouter();

    const incState = ()=>{
        setState(s => s += 1);
    }
    const decState = ()=>{
        setState(s => s -= 1);
    }

    useEffect(()=>{
        if(playState == 2){
            router.push("/local/play");
        }
    }, [playState]);

    return (
        <>
            {playState == 0 && <PlaySetup _next={incState}/>}
            {playState == 1 && <PlayerAdd _prev={decState} _next={incState}/>}
        </>
    );
}