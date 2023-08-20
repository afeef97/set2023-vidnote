import React, { useEffect } from "react";
import NotesList from "./NotesList";
import { Download } from "lucide-react";
import { CSVLink } from "react-csv";
import { useAtom } from "jotai";
import { notesListAtom } from "../../atoms";

const NotesPanel = () => {
    const [notesList] = useAtom(notesListAtom);

    return (
        <div
            id="draggableBound"
            className="bg-secondaryBG w-full h-full flex justify-start max-h-[600px] gap-4 rounded p-8">
            <div className="grow">
                <div className="mb-2 border-b-2 border-black flex justify-between items-center">
                    <h1>Notes List</h1>
                    <CSVLink
                        className="hover:cursor-pointer"
                        filename="video-notes.csv"
                        data={notesList}>
                        <Download className="text-secondaryAccent" />
                    </CSVLink>
                </div>
                <div className="w-full h-[480px] overflow-y-auto overflow-x-visible">
                    <NotesList />
                </div>
            </div>
        </div>
    );
};

export default NotesPanel;
