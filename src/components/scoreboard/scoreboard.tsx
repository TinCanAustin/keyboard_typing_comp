'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import './style.css'
import { compare } from '@/functions/compare';

export default function Scoreboard(){
    const [infoAvailable, setAvailability] = useState(false);
    const [settings, setSettings] = useState<{ players?: Record<string, any>[] }>({}); 
    const pathname = usePathname();

    useEffect(()=>{
        const raw = JSON.parse(localStorage.getItem("settings") || '{}');
        setSettings(raw);
        setSettings(d=>({
            ...d, 
            players: d.players ? [...d.players].sort(compare) : d.players,
        }))
        setAvailability(!!raw.players?.length);
    }, [pathname]);

    return(
        <div>
            <table className="score-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Net WPM</th>
                        <th>Accuracy</th>
                    </tr>
                </thead>
                {infoAvailable ? (
                    <tbody>
                        {
                            settings.players?.map((k: Record<string, any>, i : number)=>{
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{k['name']}</td>
                                        <td>{k['score']['netWPM']}</td>
                                        <td>{k['score']['accuracy']}%</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                ) : (
                    <></>
                )}
            </table>
            {!infoAvailable ? (
                <div className='no-data'>
                    <p>No Data Available</p>
                </div>
            ):(
                <></>
            )}
        </div>
    );
}