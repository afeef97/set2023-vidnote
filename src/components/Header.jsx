import { Link, Trash } from "lucide-react";
import React from "react";
import IconedInput from "./shared/IconedInput";
import { useAtom } from "jotai";
import { videoUrlAtom, notesListAtom } from "../atoms";

const Header = () => {
    const [videoUrl, setVideoUrl] = useAtom(videoUrlAtom);
    const [notesList, setNotesList] = useAtom(notesListAtom);
    const handleClear = () => {
        localStorage.clear();
        setVideoUrl("");
        setNotesList([]);
    };

    return (
        <div
            className={`flex justify-between items-center fixed px-24 w-full h-28 bg-mainBG border-b-2 border-b-mainAccent z-50`}>
            <div>
                <h3 className="text-4xl text-white">VidNote</h3>
            </div>

            <div className="flex gap-4 items-center">
                <div className="cursor-pointer" onClick={handleClear}>
                    <Trash className="text-white" />
                </div>
                <IconedInput
                    type={"url"}
                    placeholder={"Link to video"}
                    identifier={"videoUrl"}>
                    <Link />
                </IconedInput>
            </div>
        </div>
    );
};

export default Header;
