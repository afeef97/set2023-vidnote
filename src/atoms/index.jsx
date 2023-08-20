import { atom } from "jotai";

export const videoUrlAtom = atom("");

export const videoTimeAtom = atom("");

export const formattedVideoTimeAtom = atom((get) => {
    const time = get(videoTimeAtom)?.playedSeconds || 0;
    const formattedTime = new Date(Math.floor(time) * 1000)
        .toISOString()
        .slice(11, 19);
    return formattedTime;
});
