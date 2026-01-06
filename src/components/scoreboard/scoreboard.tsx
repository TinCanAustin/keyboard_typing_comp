'use client';
import { useState } from 'react';
import './style.css'

export default function Scoreboard(){
    return(
        <table className="score-table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Net WPM</th>
                    <th>Accuracy</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    );
}