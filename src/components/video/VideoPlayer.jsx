import { useAtom } from "jotai";
import React from "react";
import ReactPlayer from "react-player";
import {
    videoTimeAtom,
    formattedVideoTimeAtom,
    videoUrlAtom,
} from "../../atoms";
import VideoUnvailable from "./VideoUnvailable";

const VideoPlayer = () => {
    const [videoUrl, setVideoUrl] = useAtom(videoUrlAtom);
    const [videoTime, setVideoTime] = useAtom(videoTimeAtom);
    const formattedVideoTime = useAtom(formattedVideoTimeAtom);

    const handleVideoProgress = (t) => {
        setVideoTime(t);
    };

    return (
        <div className="">
            <div className="w-[854px] h-[480px]">
                {ReactPlayer.canPlay(videoUrl) ? (
                    <ReactPlayer
                        url={videoUrl}
                        controls={true}
                        width={"100%"}
                        height={"100%"}
                        volume={0.3}
                        onProgress={(time) => {
                            handleVideoProgress(time);
                        }}
                    />
                ) : (
                    <VideoUnvailable />
                )}
            </div>
        </div>
    );
};

export default VideoPlayer;
