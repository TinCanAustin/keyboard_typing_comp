'use client';

import { useEffect, useRef, useState } from 'react';
import './style.css'
import { useRouter } from "next/navigation";
import { RiArrowDropRightLine } from "react-icons/ri";
import BCard from '@/ui-comp/card-button/card-button';


export default function PlayerManager(){

    const settings = useRef<{ players?: Record<string, any>[] }>({});
    
    const score = useRef<any>({});
    const [state, updateState] = useState(false); 
    const [isNotEmpty, setEmpty] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const router = useRouter();
    
    useEffect(()=>{
        const GWPM = sessionStorage.getItem("grossWPM");
        const NWPM = sessionStorage.getItem("netWPM");
        const acc = sessionStorage.getItem("accuracy");
        const _time = sessionStorage.getItem("time");

        score.current.grossWPM = Number(GWPM) || NaN;
        score.current.netWPM = Number(NWPM) || NaN;
        score.current.accuracy = Number(acc) || NaN;
        score.current.time = _time;
    }, []);

    useEffect(()=>{
        if(!state){
            settings.current = JSON.parse(localStorage.getItem("settings") || '{}');
        }
        if(settings.current['players'] != undefined){
            setEmpty(true);
        }
        console.log(settings);
    }, [state]);

    const goBack = ()=>{
        router.back();
    }
    
    const changeState = ()=>{
        updateState(s => s = !s);
    }

    const addPlayer = ()=>{
        if(settings.current['players'] == undefined){
            settings.current['players'] = [];
        }
        if(inputRef.current && inputRef.current.value != ""){
            settings.current['players'].push({
                name : inputRef.current.value,
                score : {}
            });
            localStorage.setItem('settings', JSON.stringify(settings.current));
            changeState();
        }
    }

    const setScore = (i : number, name : string)=>{
        if(settings.current['players'] != undefined){
            if(settings.current['players'][i]['name'] == name){
                settings.current['players'][i]['score'] = score.current;
                localStorage.setItem('settings', JSON.stringify(settings.current));
            }
            goBack();
        }
    }

    return (
        <div id="manager">
            <div id="manager-header">
                <h1>Update Score</h1>
                {state ? (
                    <button onClick={changeState} className='mang-select-btn'>Close</button>
                ) : (
                    <button onClick={changeState} className='mang-select-btn'>Add</button>
                )}
            </div>
            <div id='manager-body'>
                {state ? (
                    <div className='add-comp'>
                        <p>New Player Name: </p>
                        <input type="text" ref={inputRef}/>
                        <div className='set-next'>
                            <button onClick={addPlayer}><RiArrowDropRightLine className='setting-icon' size={40}/></button>
                        </div>
                    </div>
                ) : (
                    <>
                        {isNotEmpty && settings.current['players'] != undefined ? (
                            <div className='player-holder'>
                                {/* <BCard _text={"hohn"} func={()=>{}}/> */}
                                {
                                    settings.current['players'].map((k: Record<string, any>, i : number)=>{
                                        return(
                                            <BCard _text={k['name']} func={()=>{
                                                setScore(i, k['name']);
                                            }} key={i}/>
                                        );
                                    })
                                }
                            </div>
                        ) : (
                            <div className='add-comp'><h1>No Players Found</h1></div>
                        )}
                    </>
                )}
            </div>
            <button onClick={goBack} id='manager-ignore'>Ignore</button>
        </div>
    );
}