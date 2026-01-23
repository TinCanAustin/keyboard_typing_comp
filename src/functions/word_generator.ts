import { addNouns, addTemplates, paragraph } from "@ndaidong/txtgen";
import sentence from '../misc/words.json'

export function wordGenerator(length : number, punct : boolean, num : boolean){
    var word = "";

    const normalSize = sentence.noNumbers.length;
    const numberSize = sentence.withNumbers.length;
    const noPunctNumSize = sentence.noPunct.length;

    if(punct){
        if(num){
            for(let i = 0; i < length; i++){
                const chance : number = Math.floor(Math.random() * 2);
                switch(chance){
                    case 0: {
                        word += sentence.noNumbers[Math.floor(Math.random() * normalSize)];
                        break;
                    }
                    case 1: {
                        word += sentence.withNumbers[Math.floor(Math.random() * numberSize)];
                        break;
                    }
                }
                word += " ";
            }
        }else{
            for(let i = 0; i < length; i++){
                word += sentence.noNumbers[Math.floor(Math.random() * normalSize)];
                word += " ";
            }
        }
    }else{
        if(num){
            for(let i = 0; i < length; i++){
                const chance : number = Math.floor(Math.random() * 2);
                switch(chance){
                    case 0: {
                        word += sentence.noNumbers[Math.floor(Math.random() * normalSize)];
                        break;
                    }
                    case 1: {
                        word += sentence.noPunct[Math.floor(Math.random() * noPunctNumSize)];
                        break;
                    }
                }
                word += " ";
            }
        }else{
            for(let i = 0; i < length; i++){
                word += sentence.noNumbers[Math.floor(Math.random() * normalSize)];
                word += " ";
            }
        }
        word.replace(/[^\w\s]|_/g, "");
    }

    word.toLowerCase();
    return word;
}