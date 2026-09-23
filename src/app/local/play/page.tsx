'use client';
import { useEffect, useRef, useState } from "react";
import TypingCheck from "@/components/typing/typing";
import './style.css'

export default function Local_Play(){

    const settings = useRef<{
        time: number;
        punct: boolean;
        num: boolean;
    }>({
        time: 15,
        punct: false,
        num: false
    });
    const [settingsLoaded, setLoaded] = useState<boolean>(false)

    useEffect(()=>{
        const loadedSettings = JSON.parse(localStorage.getItem("settings") || '{}');
        if(Object.keys(loadedSettings).length != 0){
            settings.current = loadedSettings;
        }
        setLoaded(true);
    }, []);

    return (
        <>
            <div className="full-page-element center-screen-element">
                {settingsLoaded ? (
                    <TypingCheck sec={settings.current['time']} punct={settings.current['punct']} num={settings.current['num']}/>
                ) : (
                    <>Loading</>
                )
                }
            </div>
        </>
    );
}