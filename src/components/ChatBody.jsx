import React, { useCallback, useEffect, useRef, useState } from "react";
import ChatBotHeader from "./ChatBotHeader";
import ChatBotMessage from "./ChatBotMessage";
import PromptInputForm from "./PromptInputForm";
import UserPrompt from "./UserPrompt";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { formatText } from "../utils/utlilities.js";
import "./style.css";

const api_key = import.meta.env.VITE_API_KEY;

const ChatBody = () => {
    const [loading, setLoading] = useState(false);
    const chatContainerRef = useRef();
    const [messages, setMessages] = useState([
        { type: "chatbot-reply", message: "Hello, How can i help you." },
    ]);
    const [error, setError] = useState(null);

    useEffect(() => {
        chatContainerRef.current.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    const insertPrompt = useCallback((msg) => {
        console.log(msg);
        const userMsg = { type: "user-prompt", message: msg };
        const standByReply = { type: "chatbot-reply", message: "Thinking..." };
        setMessages((prevMessages) => [...prevMessages, userMsg, standByReply]);
        sendReply(msg);
    }, []);

    const sendReply = useCallback(async (msg) => {
        try {
            setLoading(true);
            setError(null);
            const generatedReply = await generateContent(msg);

            setMessages((prevMessages) => {
                if (
                    prevMessages.length > 0 &&
                    prevMessages[prevMessages.length - 1].type === "chatbot-reply" &&
                    prevMessages[prevMessages.length - 1].message === "Thinking..."
                ) {
                    return [
                        ...prevMessages.slice(0, -1),
                        {
                            type: "chatbot-reply",
                            message: formatText(generatedReply),
                        },
                    ];
                }
                return [
                    ...prevMessages,
                    {
                        type: "chatbot-reply",
                        message: generatedReply,
                    },
                ];
            });
        } catch (error) {
            setError(error.message);
            console.error("Error generating reply:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const generateContent = useCallback(async (prompt) => {
        try {
            if (!api_key) {
                throw new Error("API key is not configured");
            }
            const genAI = new GoogleGenerativeAI(api_key);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent(prompt);

            return result.response.text();
        } catch (error) {
            throw error;
        }
    }, []);

    useEffect(() => {
        return () => {
            setLoading(false);
            setError(null);
        };
    }, []);

    return (
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,99%)]">
            {error && <div className="error-message bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>}
            <div className="header">
                <ChatBotHeader />
            </div>
            <div
                className="message-box w-full h-[550px] bg-white flex-wrap overflow-auto pt-4"
                ref={chatContainerRef}
            >
                {messages.map((msg, ind) =>
                    msg.type === "user-prompt" ? (
                        <UserPrompt key={ind} prompt={msg.message} />
                    ) : (
                        <ChatBotMessage key={ind} reply={msg.message} />
                    )
                )}
            </div>
            <div className="footer">
                <PromptInputForm insertPrompt={insertPrompt} loading={loading} error={error} />
            </div>
        </div>
    );
};

export default ChatBody;
