import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    formattedVideoTimeAtom,
    notesListAtom,
    videoTimeAtom,
    videoPlayAtom,
    videoUrlAtom,
} from "../../atoms";
import Button from "../shared/Button";

const NotesInputPanel = () => {
    const [videoTime, setVideoTime] = useAtom(videoTimeAtom);
    const [videoUrl, setVideoUrl] = useAtom(videoUrlAtom);
    const [formattedVideoTime] = useAtom(formattedVideoTimeAtom);
    const [notesList, setNotesList] = useAtom(notesListAtom);
    const [videoPlay, setVideoPlay] = useAtom(videoPlayAtom);
    const { register, handleSubmit, reset, watch } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault();
        if (data.notes && videoUrl) {
            setNotesList([
                ...notesList,
                {
                    timestamp: formattedVideoTime,
                    notes: data.notes,
                },
            ]);
        }
    };

    useEffect(() => {
        if (watch("notes") !== "") {
            setVideoPlay(false);
        } else setVideoPlay(true);
    }, [watch("notes")]);

    useEffect(() => {
        reset({
            notes: "",
        });
    }, [notesList]);

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
