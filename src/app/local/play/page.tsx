'use client';
import TypingCheck from "@/components/typing/typing";
import './style.css'

export default function Local_Play(){

    const settings = JSON.parse(localStorage.getItem("settings") || '{}');

    return (
        <>
            <div className="full-page-element center-screen-element">
                <TypingCheck sec={settings['time']}/>
            </div>
        </>
    );
}