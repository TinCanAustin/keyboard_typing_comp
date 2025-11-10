'use client';
import './style.css';

export default function ResultDisplay({grossWPM, netWPM, accuracy, time} : {
    grossWPM : number | null,
    netWPM : number | null,
    accuracy : number | null,
    time : string | null
}){
    return (
        <div id='resultInfos'>
            <div><p>Gross WPM:</p><p>{grossWPM}</p></div>
            <div><p>Net WPM:</p><p>{netWPM}</p></div>
            <div><p>Accuracy:</p><p>{accuracy}</p></div>
            <div><p>Time:</p><p>{time}</p></div>
        </div>
    );
}