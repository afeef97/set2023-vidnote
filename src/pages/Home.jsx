import React, { useRef } from "react";
import Header from "../components/Header";
import VideoPlayer from "../components/video/VideoPlayer";
import NotesInputPanel from "../components/notes/NotesInputPanel";
import NotesPanel from "../components/notes/NotesPanel";

const Home = () => {
    return (
        <div
            className={`w-screen pb-12 h-[1300px] flex justify-between flex-col gap-12 bg-mainBG`}>
            <Header />
            <div className="h-28"></div>
            <div className="h-[90%] w-full flex flex-col gap-6 justify-center items-center">
                <div className="w-5/6 max-w-[1328px] h-full flex justify-center items-center gap-6">
                    <VideoPlayer />
                    <NotesInputPanel />
                </div>
                <div className="w-5/6 max-w-[1328px]">
                    <NotesPanel />
                </div>
            </div>
        </div>
    );
};

export default Home;
