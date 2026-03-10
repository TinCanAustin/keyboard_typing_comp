'use client';
import { useEffect, useRef } from "react";
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

    useEffect(()=>{
        settings.current = JSON.parse(localStorage.getItem("settings") || '{}')
    }, []);

    return (
        <>
            <div className="full-page-element center-screen-element">
                <TypingCheck sec={settings.current['time']} punct={settings.current['punct']} num={settings.current['num']}/>
            </div>
        </>
    );
}