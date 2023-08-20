import React from "react";
import Header from "../components/Header";
import VideoPlayer from "../components/video/VideoPlayer";

const Home = () => {
    return (
        <div className={`w-screen h-screen bg-mainBG`}>
            <Header />

            <VideoPlayer />
        </div>
    );
};

export default Home;
