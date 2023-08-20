import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const videoUrlAtom = atomWithStorage("videoUrl", "");

export const videoTimeAtom = atom("");

export const videoPlayAtom = atom(true);

export const formattedVideoTimeAtom = atom((get) => {
    const time = get(videoTimeAtom)?.playedSeconds || 0;
    const formattedTime = new Date(Math.floor(time) * 1000)
        .toISOString()
        .slice(11, 19);
    return formattedTime;
});

export const notesListAtom = atomWithStorage("notesList", []);
