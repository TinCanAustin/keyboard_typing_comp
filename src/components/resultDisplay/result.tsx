import './style.css';

export default function ResultDisplay({grossWPM, netWPM, accuracy, time} : {
    grossWPM : number | null,
    netWPM : number | null,
    accuracy : number | null,
    time : string | null
}){
    return (
        <div>
            <div><p className='main'>Net WPM:</p><p className='sub-main'>{netWPM}</p></div>
            <div><p className='main'>Accuracy:</p><p className='sub-main'>{accuracy}%</p></div>
            <div><p className='score-heading'>Gross WPM:</p><p className='score-text'>{grossWPM}</p></div>
            <div><p className='score-heading'>Time:</p><p className='score-text'>{time}</p></div>
        </div>
    );
}