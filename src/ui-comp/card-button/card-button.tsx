import "./style.css"

export default function BCard({_text, func} : { _text : String , func : ()=>void}){
    return(
        <div id="card" onClick={func}><p>{_text}</p></div>
    );
}