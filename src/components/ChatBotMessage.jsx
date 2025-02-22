import React, { useState } from "react";
import miniIcon from "../assets/icon3.png";

const ChatBotMessage = ({ reply }) => {
    return (
        <div className="flex flex-row p-2 gap-2">
            <div className="w-[40px] h-[40px] flex-none flex-shrink-0">
                <img className="w-full h-full" src={miniIcon} alt="icon" />
            </div>
            <div
                className="bg-sky-100 p-2 lg:w-max-[60%] md:w-max-[80%] align-text-left"
                style={{ borderRadius: "5px 10px 10px 10px" }}
            >
                <p dangerouslySetInnerHTML={{ __html: reply }} />
                {/* <p> {reply}</p> */}
            </div>
        </div>
    );
};

export default ChatBotMessage;
