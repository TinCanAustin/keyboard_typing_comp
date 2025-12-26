'use client';
import TypingCheck from "@/components/typing/typing";
import { useRef, useState, useEffect } from "react";
import './style.css'

export default function Local_Play(){
    const settings = JSON.parse(localStorage.getItem("settings") || '{}');
    const players = settings["names"];
    
    const scores = useRef<any[]>([]);
    const [turn, changeTurn] = useState(0);

    const [currentPlayer, changePlayer] = useState("");

    useEffect(()=>{
        changePlayer(players[turn]);
    }, [turn]);
    
    const incTurn = ()=>{
        changeTurn(t => t += 1);
    }

    return (
        <>
            <div className="full-page-element center-screen-element">
                <p className="player-title"><span id="player-name">{currentPlayer}</span>'s turn</p>
                <TypingCheck scoreRef={scores} turnRef={turn} _next={incTurn}/>
            </div>
        </>
    );
}