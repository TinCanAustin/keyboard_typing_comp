'use client';
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

import './style.css';
import Toggle from "@/ui-comp/toggle/toggle";

export default function PlaySetup(){
    const [timer, setTimer] = useState(15);
    const buttonRef = useRef<(HTMLButtonElement | null)[]>([]);

    const [togglePunct, setPunct] = useState(false);
    const [toggleNum, setNum] = useState(false);

    const manageTimer = (e : React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        setTimer(Number(button.textContent));
    }
    const setRef = (i : number) => (el: HTMLButtonElement | null) => {
        buttonRef.current[i] = el;
    }

    const enablePunct = ():void=>{
        setPunct(state => !state);
    }
    const enableNum = ():void=>{
        setNum(state => !state);
    }

    useEffect(
        ()=>{
            buttonRef.current.forEach((e)=>{
                if(Number(e?.textContent) == timer){
                    e?.classList.add("selected");
                }else{
                    if(e?.classList.contains("selected")){
                        e?.classList.remove("selected");
                    }
                }
            });
        },
    [timer]);

    return(
        <div id="setup-settings" className="full-page-element">
            <div id="setup-hold">
                <h3>Game Settings</h3>
                <div className="select-align">
                    <p>Set timer: </p>
                    <div id="timer-select">
                        <button onClick={manageTimer} ref={setRef(1)}>15</button>
                        <button onClick={manageTimer} ref={setRef(2)}>30</button>
                        <button onClick={manageTimer} ref={setRef(3)}>60</button>
                        <button onClick={manageTimer} ref={setRef(4)}>120</button>
                    </div>
                </div>
                <div className="select-align">
                    <p>Number of players: </p>
                    <input type="number" name="players" min={1} max={20} step={1} id="count-style"/>
                </div>
                <div className="select-align">
                    <p>Punctuation?</p>
                    <Toggle func={enablePunct} check={togglePunct}/>
                </div>
                <div className="select-align">
                    <p>Numbers?</p>
                    <Toggle func={enableNum} check={toggleNum}/>
                </div>
                <div id="set-next">
                    <button><RiArrowDropRightLine size={50}/></button>
                    <button><MdCancel size={30}/></button>
                </div>
            </div>
        </div>
    );
}