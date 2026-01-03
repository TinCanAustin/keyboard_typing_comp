'use client';

import PlaySetup from "@/components/play-setup/setup";
import { useRouter } from "next/navigation";

export default function Local_settings(){
    const router = useRouter();

    const incState = ()=>{
        router.push("/local/play");
    }

    return (
        <PlaySetup _next={incState}/>
    );
}