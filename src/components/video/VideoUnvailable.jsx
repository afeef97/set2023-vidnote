import { ImageOff } from "lucide-react";
import React from "react";

const VideoUnvailable = () => {
    return (
        <div className="w-full h-full bg-gray-400 flex flex-col justify-center items-center">
            <ImageOff className="w-16 h-16" />
            <h1 className="text-4xl mt-4">No video loaded</h1>
        </div>
    );
};

export default VideoUnvailable;
