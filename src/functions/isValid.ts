export function isValid(parsed : {
    grossWPM : number,
    netWPM : number,
    accuracy : number,
    time : string | null
}){
    return (!isNaN(parsed.grossWPM) &&
            !isNaN(parsed.netWPM) &&
            !isNaN(parsed.accuracy) &&
            parsed.time &&
            parsed.grossWPM >= 0 &&
            parsed.netWPM >= 0 &&
            parsed.accuracy <= 100);
}