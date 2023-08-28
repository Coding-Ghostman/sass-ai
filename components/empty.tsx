import React from "react";
import Lottie from "lottie-react";
import animationData from "../public/chat.json";

interface EmptyProps {
    label: string;
}

export default function Empty({ label }: EmptyProps) {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative w-72 h-72 lg:scale-[1.8]">
                <Lottie animationData={animationData} />
            </div>
            <p className="text-muted-foreground text-sm text-center lg:text-lg  lg:my-20">{label}</p>
        </div>
    );
}
