/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { getMaxAcc, getMaxWPM, getMinAcc, getMinWPM } from "./mathFunc";

export function updatePoints(lis : Object[]){
    const maxWPM = getMaxWPM(lis);
    const minWPM = getMinWPM(lis);

    const maxAcc = getMaxAcc(lis);
    const minAcc = getMinAcc(lis);

    lis.forEach((e : any)=>{
        let point = 0;
        if(maxWPM == minWPM){
            point = e['score']['netWPM'] - minWPM;
        }else{
            point = (e['score']['netWPM'] - minWPM) / (maxWPM - minWPM);
        }
        if(maxAcc == minAcc){
            point += e['score']['accuracy'] - minAcc;
        }else{
            point += (e['score']['accuracy'] - minAcc) / (maxAcc - minAcc); 
        }
        point = point/2;
        e['score']['point'] = point
    });

    return lis;
}