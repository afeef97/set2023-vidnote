import { Link } from "lucide-react";
import React from "react";
import IconedInput from "./shared/IconedInput";

const Header = () => {
    return (
        <div
            className={`flex justify-between items-center fixed px-24 w-full h-28 bg-mainBG border-b-2 border-b-secondaryAccent`}>
            <div>
                <h3 className="text-4xl">VidNote</h3>
            </div>
            <IconedInput
                type={"url"}
                placeholder={"Link to video"}
                identifier={"videoUrl"}>
                <Link />
            </IconedInput>
        </div>
    );
};

export default Header;
