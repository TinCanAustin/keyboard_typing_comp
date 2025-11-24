import './style.css'

export default function Toggle({func, check}:{func : ()=>void, check: boolean}){
    return (
        <label className="switch">
            <input type="checkbox" checked={check} onChange={func}/>
            <span className="slider round"></span>
        </label>
    );
}