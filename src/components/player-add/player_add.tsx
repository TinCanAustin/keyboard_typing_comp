'use client';
import { useState, useEffect, useRef } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

import './style.css';

export default function PlayerAdd({_prev, _next}:{
    _prev : ()=>void,
    _next : ()=>void
}){
    const maxCount = useRef(0);
    const playerNames = useRef<string[]>([]);

    const [playerCount, setCount] = useState(1);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
        const settings = JSON.parse(localStorage.getItem("settings") || '{}');
        if(Object.keys(settings).length > 0){
            console.log(Number(settings["players"]));
            maxCount.current = Number(settings["players"]);
        }
    }, []);

    const nextFunc = ()=>{
        if(inputRef.current){
            playerNames.current.push(inputRef.current.value);
            inputRef.current.value = "";
        }
        
        if(playerCount < maxCount.current){
            setCount(c => c+1);
        }else{
            console.log(playerNames.current);
            console.log("done");
            return;
            //_next();
        }
    }

    return(
        <div className="full-page-element center-screen-element">
            <h2>Add Players</h2>
            <div className="select-align">
                <p>Player {playerCount}: </p>
                <input type="text" className="input-style" ref={inputRef}/>
            </div>
            <div className="set-next">
                <button onClick={_prev}><RiArrowDropLeftLine size={50} className="setting-icon"/></button>
                <button onClick={nextFunc}><RiArrowDropRightLine size={50} className="setting-icon"/></button>
            </div>
        </div>
    )
}