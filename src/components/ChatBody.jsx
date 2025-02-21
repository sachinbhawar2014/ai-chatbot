import React, { useEffect, useRef, useState } from "react";
import ChatBotHeader from "./ChatBotHeader";
import ChatBotMessage from "./ChatBotMessage";
import UserPrompt from "./UserPrompt";
import PromptInputForm from "./PromptInputForm";

import "./style.css";

const ChatBody = () => {
    const lastMessageRef = useRef(null);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const welcomeMessage = { type: "chatbot-msg", message: "Hello, How can i help you." };
        setMessages((prevMsgs) => [...prevMsgs, welcomeMessage]);
    }, []);

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const insertPrompt = (msg) => {
        console.log(msg);
        const prompt = { type: "user-prompt", message: msg };
        setMessages((prevMessages) => [...prevMessages, prompt]);
    };
    return (
        <div className="my-12" style={{ width: "min(700px,90%)" }}>
            <ChatBotHeader />
            <div className="message-box w-full h-[550px] bg-white flex-wrap overflow-auto">
                {messages.map((msg, index) =>
                    msg.type === "user-prompt" ? (
                        <UserPrompt
                            key={index}
                            prompt={msg.message}
                            ref={index === messages.length - 1 ? lastMessageRef : null}
                        />
                    ) : (
                        <ChatBotMessage
                            key={index}
                            reply={msg.message}
                            ref={index === messages.length - 1 ? lastMessageRef : null}
                        />
                    )
                )}
            </div>
            <div className="w-full h-16 flex flex-row items-center justify-center bg-white">
                <PromptInputForm insertPrompt={insertPrompt} />
            </div>
        </div>
    );
};

export default ChatBody;
