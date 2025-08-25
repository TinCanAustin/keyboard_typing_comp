'use client';

import { ChangeEvent, useState, useEffect, useRef } from 'react';

import './style.css'

export default function TypingCheck(){
    const word = "I am so fucking tired of the small dick jokes. You guys think you are so funny. You think bigger is better. You are all morons. My dick is a precision instrument. A surgical tool. It is designed for accuracy not blunt force trauma. You guys are walking around with these giant unmanageable salamis. You probably knock over lamps when you turn around too fast. I hit the g-spot like a special forces sniper. Pinpoint accuracy every single time. You guys are just carpet bombing the whole area hoping to hit something. You are the collateral damage of sex. Women tell me they prefer it. They say its cute. They say it doesnt feel like their insides are being rearranged by a rogue battering ram. You are giving women internal bleeding and think you are a sex god. So laugh all you want at my tactical 3 inch stud finder. Ill be the one getting invited back. You will be wondering why she blocked your number after you gave her a prolapsed uterus with your goddamn anaconda. You probably dont even know what a clitoris is. You think its a type of dinosaur. Clitorisaurus Rex. Fucking idiots."
    
    const [input, setInput] = useState("");
    const [index, setIndex] = useState(0);

    const charRef = useRef<(HTMLSpanElement | null)[]>([]);
    const inputRef = useRef<(HTMLInputElement | null)>(null);

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

    useEffect(()=>{
        console.log(index);
        if(index > 0){
            if(charRef.current[index - 1]!.textContent == input[index - 1]){
                charRef.current[index - 1]!.classList.add('textCorrect');
            }else{
                charRef.current[index - 1]!.classList.add('textWrong');
            }
        }else{
            charRef.current[0]!.className = '';
        }
    }, [index]);

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