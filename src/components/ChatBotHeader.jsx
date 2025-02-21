import React from "react";
import icon from "../assets/icon2.png";

const ChatBotHeader = () => {
    return (
        <div
            className="flex flex-row h-16 items-center p-2 w-full bg-green-400"
            style={{ borderRadius: "20px 20px 0px 0px" }}
        >
            <div className="h-full ">
                <img src={icon} alt="logo" style={{ height: "100%", aspectRatio: "1" }}></img>
            </div>
            <div className="chatbot-logo-text text-2xl ml-4 font-bold">My ChatBot</div>
        </div>
    );
};

export default ChatBotHeader;
