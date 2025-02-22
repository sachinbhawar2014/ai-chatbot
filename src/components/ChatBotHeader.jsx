import React from "react";
import icon from "../assets/icon4.png";

const ChatBotHeader = () => {
    return (
        <div className="flex flex-row gap-0.5 p-2 pl-4 items-center">
            <div className="h-[50px] w-[50px] bg-white rounded-full">
                <img className="h-full aspect-square rounded-full" src={icon} alt="logo"></img>
            </div>
            <div className="text-2xl ml-4 p-4 items-center font-bold text-white">My ChatBot</div>
        </div>
    );
};

export default ChatBotHeader;
