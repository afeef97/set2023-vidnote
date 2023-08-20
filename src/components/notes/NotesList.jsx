import { useAtom } from "jotai";
import React from "react";
import { notesListAtom } from "../../atoms";
import NotesCard from "./NotesCard";

const NotesList = () => {
    const [notesList, setNotesList] = useAtom(notesListAtom);

    return (
        <div className="space-y-3 w-full">
            {notesList.map((note, index) => {
                return (
                    <NotesCard id={`note${index}`} key={index} note={note} />
                );
            })}
        </div>
    );
};

export default NotesList;
