import React, { useState } from "react";

const NotesCard = ({ note }) => {
    const [positionState, setPositionState] = useState("");

    return (
        <div
            style={{ position: `${positionState}` }}
            className="w-full p-3 z-20 bg-white border rounded cursor-pointer border-secondaryAccent">
            <a>{note.timestamp}</a>
            <p>{note.notes}</p>
        </div>
    );
};

export default NotesCard;
