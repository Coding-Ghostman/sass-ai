import React from "react";
import Lottie from "lottie-react";
import animationData from "../public/wave.json";

export default function Loader() {
    return (
        <div className="h-full flex flex-col gal-y-4 items-center">
            <div className="w-12 h-12 scale-[4] relative amimate-spin">
                <Lottie animationData={animationData} />
            </div>
            <p className="text-s, text-muted-foreground">Sin-x is thinking</p>
        </div>
    );
}
