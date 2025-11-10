'use client';
import ResultDisplay from "@/components/resultDisplay/result";
import { isValid } from "@/functions/isValid";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import './style.css';

export default function ResultPage(){
    const router = useRouter();
    
    const [grossWPM, setGWPM] = useState<number | null>(null);
    const [netWPM, setNWPM] = useState<number | null>(null);
    const [accuracy, setAcc] = useState<number | null>(null);
    const [time, setTime] = useState<string | null>(null);

    useEffect(()=>{
        const GWPM = sessionStorage.getItem("grossWPM");
        const NWPM = sessionStorage.getItem("netWPM");
        const acc = sessionStorage.getItem("accuracy");
        const _time = sessionStorage.getItem("time");
        
        const parsed = {
            grossWPM: Number(GWPM) || NaN,
            netWPM: Number(NWPM) || NaN,
            accuracy: Number(acc) || NaN,
            time: _time
        }

        console.log(parsed)

        if(!isValid(parsed)){
            throw new Error("Values does not exsist");
        }

        setGWPM(parsed.grossWPM);
        setNWPM(parsed.netWPM);
        setAcc(parsed.accuracy);
        setTime(parsed.time);

    }, [])

    const goBack = ()=>{
        router.back();
    }

    return (
        <>
            <div id="resultPage" className="full-page-element">
                <ResultDisplay grossWPM={grossWPM} netWPM={netWPM} accuracy={accuracy} time={time}/>
                <button onClick={goBack}>Reset</button>
            </div>
        </>
    );
}