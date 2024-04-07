"use client";
import React, { useContext } from 'react';
import { useEffect } from "react";
import { AppContext } from "../AppContext";
import { useRouter } from 'next/router';


export default function Generating() {
    const router = useRouter();

    const {stlUrl} = useContext(AppContext);

    useEffect(() => {
        router.push("/user/review");
    }, [stlUrl])


    return (
        <div className="p-4">
            <div className="font-amogus font-bold text-2xl">
                Generating Preview
            </div>
            <p className="font-medium">This will usually take about 10-20 seconds.</p>
            <img 
            //    style="width: min(90vw, 500px)"
            alt="tablet upload task among us" src="/img/among-us-upload.gif" /><br/><br/>
        </div>
    );
}
