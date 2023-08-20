import React from "react";
import { videoUrlAtom } from "../../atoms";
import { useAtom } from "jotai";

const IconedInput = ({ type = "text", placeholder, identifier, children }) => {
    const [videoUrl, setVideoUrl] = useAtom(videoUrlAtom);

    const handleChange = (e) => {
        setVideoUrl(e.target.value);
    };

    return (
        <div className="bg-white text-tertiaryAccent p-2 flex gap-2 rounded-xl">
            {children}
            <input
                type={type}
                name={identifier}
                id={identifier}
                placeholder={placeholder}
                value={videoUrl}
                onChange={(e) => {
                    handleChange(e);
                }}
                className="outline-none w-80 placeholder:italic"
            />
        </div>
    );
};

export default IconedInput;
