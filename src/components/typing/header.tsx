'use client';

import { ChangeEvent, useState, useEffect, useRef } from 'react';

import './style.css'

export default function TypingCheck(){
    const word = "I am so fucking tired of the small dick jokes. You guys think you are so funny."
    
    const [input, setInput] = useState("");
    const [index, setIndex] = useState(0);

    const charRef = useRef<(HTMLSpanElement | null)[]>([]);
    const inputRef = useRef<(HTMLInputElement | null)>(null);

    const [error, setError] = useState(0);

    const [_timer, upTimer] = useState(0);
    const [startState, setStartState] = useState(true); //true - can start, false - cannot start 
    const timerManager = useRef<NodeJS.Timeout | null>(null);

    //score
    let grossWPM : number = 0;
    let netWPM : number = 0;
    let accuracy : number = 0;
    let time : string = '';

    const getTime = (totalTime: number) => {
        const min = Math.floor(totalTime / 60);
        const sec = totalTime - (min * 60);

        const time = `${min}:${sec}`;
        return time;
    }
    

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const lastChar = val[val.length - 1];

        if (val.length < input.length){
            setInput(val);
            charRef.current[index - 1]!.className = '';

            setIndex(val.length);
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
        netWPM = (grossWPM - error) / (_timer / 60);
        accuracy = ((index - error) / index) * 100;

        //time eval
        time = getTime(_timer);
    }

    useEffect(()=>{
        if(index > 0){
            if(startState){
                console.log("done");
                setStartState(false);
                timerManager.current = setInterval(() => {
                    upTimer(prevT => prevT + 1);
                }, 1000);
            }
            if(charRef.current[index - 1]!.textContent == input[index - 1]){
                charRef.current[index - 1]!.classList.add('textCorrect');
            }else{
                charRef.current[index - 1]!.classList.add('textWrong');
                setError(error + 1);
            }
        }else{
            charRef.current[0]!.className = '';
        }
    }, [index]);

    useEffect(()=>{
        console.log(_timer);
        if(_timer >= 20 || index >= word.length){
            if (timerManager.current) clearInterval(timerManager.current);
            calculateResults();
            console.log(grossWPM, netWPM, accuracy, time);
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