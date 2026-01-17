export function compare(a : Record<string, any>, b : Record<string, any>){
    if(a['score']['point'] < b['score']['point']){
        return 1;
    }
    if(a['score']['point'] > b['score']['point']){
        return -1;
    }
    return 0;
}