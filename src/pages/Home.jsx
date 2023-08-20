import React from "react";
import Header from "../components/Header";
import VideoPlayer from "../components/video/VideoPlayer";
import NotesInputPanel from "../components/notes/NotesInputPanel";

const Home = () => {
    return (
        <div className={`w-screen h-screen bg-mainBG`}>
            <Header />
            <div className="h-28"></div>
            <div className="h-1/2 w-screen flex justify-center items-center">
                <div className="flex justify-center items-center gap-6">
                    <VideoPlayer />
                    <NotesInputPanel />
                </div>
            </div>
        </div>
    );
};

export default Home;
