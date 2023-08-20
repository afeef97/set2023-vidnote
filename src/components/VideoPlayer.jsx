import { useAtom } from "jotai";
import React from "react";
import ReactPlayer from "react-player";
import { videoTimeAtom, formattedVideoTimeAtom, videoUrlAtom } from "../atoms";
import VideoUnvailable from "./VideoUnvailable";

const VideoPlayer = () => {
    const [videoUrl, setVideoUrl] = useAtom(videoUrlAtom);
    const [videoTime, setVideoTime] = useAtom(videoTimeAtom);
    const formattedVideoTime = useAtom(formattedVideoTimeAtom);

    const handleVideoProgress = (t) => {
        setVideoTime(t);
    };

    return (
        <div className="w-screen flex justify-center items-center pt-36 pb-8 px-16 bg-black">
            <div className="w-[960px] h-[540px]">
                {ReactPlayer.canPlay(videoUrl) ? (
                    <ReactPlayer
                        url={videoUrl}
                        controls={true}
                        width={"100%"}
                        height={"100%"}
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
