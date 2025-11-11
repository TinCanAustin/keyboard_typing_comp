'use client';
import './style.css';

export default function ResultDisplay({grossWPM, netWPM, accuracy, time} : {
    grossWPM : number | null,
    netWPM : number | null,
    accuracy : number | null,
    time : string | null
}){
    return (
        <div>
            <div><p className='score-heading'>Gross WPM:</p><p className='score-text'>{grossWPM}</p></div>
            <div><p className='score-heading'>Net WPM:</p><p className='score-text'>{netWPM}</p></div>
            <div><p className='score-heading'>Accuracy:</p><p className='score-text'>{accuracy}%</p></div>
            <div><p className='score-heading'>Time:</p><p className='score-text'>{time}</p></div>
        </div>
    );
}