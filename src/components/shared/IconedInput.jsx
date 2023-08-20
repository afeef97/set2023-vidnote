import React from "react";

const IconedInput = ({ type = "text", placeholder, identifier, children }) => {
    return (
        <div className="bg-white text-tertiaryAccent p-2 flex gap-2 rounded-xl">
            {children}
            <input
                type={type}
                name={identifier}
                id={identifier}
                placeholder={placeholder}
                className="outline-none w-80 placeholder:italic"
            />
        </div>
    );
};

export default IconedInput;
