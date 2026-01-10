export function getMaxWPM(lis : Object[]){
    let max = 0;
    if(lis != undefined){
        lis.forEach((e : any)=>{
            if(e['score']){
                if(e['score']['netWPM'] >= max){
                    max = e['score']['netWPM'];
                }
            }
        });
    }
    return max;
}

export function getMinWPM(lis : Object[]){
    let min = Number.MAX_SAFE_INTEGER;
    if(lis != undefined){
        lis.forEach((e : any)=>{
            if(e['score']){
                if(e['score']['netWPM'] <= min){
                    min = e['score']['netWPM'];
                }
            }
        });
    }
    return min;
}

export function getMaxAcc(lis : Object[]){
    let max = 0;
    if(lis != undefined){
        lis.forEach((e : any)=>{
            if(e['score']){
                if(e['score']['accuracy'] >= max){
                    max = e['score']['accuracy'];
                }
            }
        });
    }
    return max;
}

export function getMinAcc(lis : Object[]){
    let min = Number.MAX_SAFE_INTEGER;
    if(lis != undefined){
        lis.forEach((e : any)=>{
            if(e['score']){
                if(e['score']['accuracy'] <= min){
                    min = e['score']['accuracy'];
                }
            }
        });
    }
    return min;
}