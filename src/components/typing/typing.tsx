'use client';

import { ChangeEvent, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import './style.css';

export default function TypingCheck(){
    // const word = "I am so fucking tired of the small dick jokes. You guys think you are so funny.  You think bigger is better. You are all morons. My dick is a precision instrument. A surgical tool. It is designed for accuracy not blunt force trauma. You guys are walking around with these giant unmanageable salamis. You probably knock over lamps when you turn around too fast. I hit the g-spot like a special forces sniper. Pinpoint accuracy every single time. You guys are just carpet bombing the whole area hoping to hit something. You are the collateral damage of sex. Women tell me they prefer it. They say its cute. They say it doesnt feel like their insides are being rearranged by a rogue battering ram. You are giving women internal bleeding and think you are a sex god. So laugh all you want at my tactical 3 inch stud finder. Ill be the one getting invited back. You will be wondering why she blocked your number after you gave her a prolapsed uterus with your goddamn anaconda. You probably dont even know what a clitoris is. You think its a type of dinosaur. Clitorisaurus Rex.";

    const word = "I am so fucking tired of the small dick jokes. You guys think you are so funny.";
    
    const [input, setInput] = useState("");
    const [index, setIndex] = useState(0);

    const charRef = useRef<(HTMLSpanElement | null)[]>([]);
    const inputRef = useRef<(HTMLInputElement | null)>(null);

    const [error, setError] = useState<number[]>([]);

    const [_timer, upTimer] = useState(0);
    const [startState, setStartState] = useState(true); //true - can start, false - cannot start 
    const timerManager = useRef<NodeJS.Timeout | null>(null);

    const router = useRouter();

    //score
    let grossWPM : number = 0;
    let netWPM : number = 0;
    let accuracy : number = 0;
    let time : string = '';

    const getTime = (totalTime: number) => {
        const min = Math.floor(totalTime / 60);
        const sec = totalTime - (min * 60);
        let time : string = '';

        if(min < 10){
            time += `0${min}`;
        }else{
            time += `${min}`;
        }

        if(sec < 10){
            time += `:0${sec}`;
        }else{
            time += `:${sec}`;
        }

        return time;
    }
    

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const lastChar = val[val.length - 1];

        if (val.length < input.length){
            setInput(val);
            charRef.current[index - 1]!.className = '';

            setIndex(val.length);

            if(error[error.length - 1] == index){
                setError(prev => prev.slice(0, -1));
            }

            return;
        }

        if(lastChar == ' '){
            if(word[index] == ' '){
                setInput(val);
                setIndex(val.length);
            }
        }else{
            if(word[index] != ' '){
                setInput(val);
                setIndex(val.length);
            }
        }
    }

    const calculateResults = ()=>{
        //score eval
        grossWPM = (index / 5) / (_timer / 60);
        netWPM = grossWPM - (error.length/(_timer / 60));
        accuracy = ((index - error.length) / index) * 100;

        //time eval
        time = getTime(_timer);
    }

    const loadResult = ()=>{
        sessionStorage.setItem("grossWPM", grossWPM.toString());
        sessionStorage.setItem("netWPM", netWPM.toString());
        sessionStorage.setItem("accuracy", accuracy.toString());
        sessionStorage.setItem("time", time);

        inputRef.current!.disabled = true;

        router.push('/result');
    }

    useEffect(()=>{
        if(index > 0){
            if(startState){
                setStartState(false);
                timerManager.current = setInterval(() => {
                    upTimer(prevT => prevT + 1);
                }, 1000);
            }
            if(charRef.current[index - 1]!.textContent == input[index - 1]){
                charRef.current[index - 1]!.classList.add('textCorrect');
            }else{
                charRef.current[index - 1]!.classList.add('textWrong');
                setError(prev => {
                    if(prev.includes(index)){
                        return [...prev];
                    }
                    return [...prev, index];
                });
            }

            if(charRef.current[index]){
                charRef.current[index]?.scrollIntoView({
                    block: "center",
                    inline: "nearest"
                })
            }

        }else{
            charRef.current[0]!.className = '';
        }
    }, [index]);

    //debug 
    // useEffect(()=>{
    //     console.log(error);
    // }, [error]);

    useEffect(()=>{
        if(_timer >= 60 || index >= word.length){
            if (timerManager.current) clearInterval(timerManager.current);
            setStartState(true);
            calculateResults();
            // Debug logging
            // console.log(grossWPM, netWPM, accuracy, time);
            // console.log(error);
            loadResult();
        }
    }, [_timer, index]);

    const focusText = ()=>{
        inputRef.current?.focus();
    }

    return (
        <>
            <div className='type_space' onClick={focusText}>
                <p>
                    {word.split("").map((char, i)=>{
                        return (
                            <span 
                            key={i} 
                            ref={(el) => {charRef.current[i] = el}}>
                                {char}
                            </span>
                        );
                    })} 
                </p>
            </div>
            <input name="test" 
            id="type_space" 
            value={input}
            onChange={handleChange} 
            ref={(el => {
                inputRef.current = el;
            })}></input>
        </>
    );
}