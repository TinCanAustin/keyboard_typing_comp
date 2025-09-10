'use client';

export default function ResultDisplay({grossWPM, netWPM, accuracy, time} : {
    grossWPM : number | null,
    netWPM : number | null,
    accuracy : number | null,
    time : string | null
}){
    return (
        <div>
        <p>Gross WPM: {grossWPM}</p>
        <p>Net WPM: {netWPM}</p>
        <p>Accuracy: {accuracy}</p>
        <p>Time: {time}</p>
        </div>
    );
}