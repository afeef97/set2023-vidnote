import React from "react";
import Header from "../components/Header";
import VideoPlayer from "../components/video/VideoPlayer";
import NotesInputPanel from "../components/notes/NotesInputPanel";
import NotesPanel from "../components/notes/NotesPanel";

const Home = () => {
    return (
        <div className={`w-screen h-screen bg-mainBG`}>
            <Header />
            <div className="h-28"></div>
            <div className="h-[90%] w-full flex flex-col gap-6 justify-center items-center">
                <div className="w-5/6 max-w-[1328px] flex justify-center items-center gap-6">
                    <VideoPlayer />
                    <NotesInputPanel />
                </div>
                <div className="w-5/6 max-w-[1328px] basis-1/2">
                    <NotesPanel />
                </div>
            </div>
        </div>
    );
};

export default Home;
