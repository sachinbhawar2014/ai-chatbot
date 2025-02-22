import React, { useCallback, useEffect, useRef, useState } from "react";
import ChatBotHeader from "./ChatBotHeader";
import ChatBotMessage from "./ChatBotMessage";
import UserPrompt from "./UserPrompt";
import PromptInputForm from "./PromptInputForm";

import "./style.css";

const ChatBody = () => {
    const [messages, setMessages] = useState([
        { type: "chatbot-reply", message: "Hello, How can i help you." },
    ]);

    const [loading, setLoading] = useState(false);
    const lastMsgRef = useRef(null);

    // on loading this component the app is greeting user and asking user how it can help user
    useEffect(() => {
        if (lastMsgRef.current) {
            lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const insertPrompt = useCallback((msg) => {
        console.log(msg);
        const prompt = { type: "user-prompt", message: msg };
        const standByReply = { type: "chatbot-reply", message: "Thinking..." };
        setMessages((prevMessages) => [...prevMessages, prompt, standByReply]);
        setLoading(true);
    }, []);
    return (
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,99%)]">
            <div className="header">
                <ChatBotHeader />
            </div>

            {/*  */}
            <div className="message-box w-full h-[550px] bg-white flex-wrap overflow-auto pt-4">
                {messages.map((msg, ind) =>
                    msg.type === "user-prompt" ? (
                        <UserPrompt
                            key={ind}
                            prompt={msg.message}
                            ref={ind === messages.length - 1 ? lastMsgRef : null}
                        />
                    ) : (
                        <ChatBotMessage
                            key={ind}
                            reply={msg.message}
                            ref={ind === messages.length - 1 ? lastMsgRef : null}
                        />
                    )
                )}
            </div>

            {/*  */}
            <div className="footer">
                <PromptInputForm insertPrompt={insertPrompt} />
            </div>
        </div>
    );
};

export default ChatBody;
