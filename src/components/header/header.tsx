"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header(){
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    }, []);

    if(!mounted){
        return null;
    }

    return (
        <div className="header">
            <Image
                src={resolvedTheme == "dark" ? "/placementLogo-Dark.png" : "/placementLogo-Light.png"}
                alt="Logo"
                width={300}
                height={78}
                priority={true}
            />
        </div>
    );
}