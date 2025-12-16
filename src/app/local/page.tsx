'use client';

import PlaySetup from "@/components/play-setup/setup";
import { useState } from "react";

export default function Local_play(){

    const [playState, setState] = useState(0);

    const incState = ()=>{
        setState(s => s++);
    }

    return (
        <>
            {playState == 0 && <PlaySetup _next={incState}/>}
        </>
    );
}