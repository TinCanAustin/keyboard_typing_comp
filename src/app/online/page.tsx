'use client';

import PlaySetup from "@/components/play-setup/setup";
import { useRouter } from "next/navigation";

export default function Online_settings(){
    const router = useRouter();

    const incState = ()=>{
        router.push("/online/play");
    }

    return (
        <PlaySetup _next={incState}/>
    );
}