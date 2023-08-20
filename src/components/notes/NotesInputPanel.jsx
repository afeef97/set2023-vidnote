import { useAtom } from "jotai";
import React from "react";
import { useForm } from "react-hook-form";
import { videoTimeAtom } from "../../atoms";
import Button from "../shared/Button";

const NotesInputPanel = () => {
    const [videoTime] = useAtom(videoTimeAtom);
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault();
        if (data.notes) {
            console.log(data);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-between w-[450px] h-[476px] bg-secondaryBG rounded p-8 text-black">
            <div className="w-full">
                <h2>Notes</h2>
                <progress max={1} value={videoTime.played}></progress>

                <textarea
                    className="w-full rounded p-3 min-h-[280px] max-h-[280px] resize-none outline-none border border-secondaryAccent"
                    placeholder="Write down your notes here"
                    {...register("notes")}
                />
            </div>
            <div>
                <Button variant={"solid"}>Create a note</Button>
            </div>
        </form>
    );
};

export default NotesInputPanel;
