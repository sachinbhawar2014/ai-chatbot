import React, { useRef, useState, useCallback } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const api_key = process.env.REACT_APP_API_KEY;

const PromptInputForm = ({ insertPrompt }) => {
    console.log("prompt rendered");
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const animateBtn = useCallback((event) => {
        event.preventDefault();
        if (isAnimating) setIsAnimating(false);
        else setIsAnimating(true);
    }, []);

    const generateContent = async (prompt) => {
        const genAI = new GoogleGenerativeAI(api_key);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    };

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            const btn = event.currentTarget;
            if (btn.classlist.contains("animate"))
                if (inputRef.current) {
                    insertPrompt(inputRef.current.value.trim());
                    inputRef.current.value = "";
                }
        },
        [insertPrompt]
    );

    return (
        <div className="flex border w-[90%] h-12 rounded-3xl flex-row items-center justify-center p-2">
            <form className="w-full h-full" onSubmit={handleSubmit}>
                <div className="flex h-full flex-row justify-between items-center">
                    <input ref={inputRef} type="text" className="w-[90%] outline-0 pl-2" required />

                    <div className="border-1 flex flex-row gap-2 items-center">
                        <button
                            className={`w-8 h-8 rounded-full bg-red-500 transition-transform duration-700 ${
                                isAnimating ? "animate" : ""
                            }`}
                            onClick={animateBtn}
                        >
                            Go
                        </button>
                        <button
                            type="submit"
                            className="w-8 h-8 rounded-full bg-purple-600 hover:bg-purple-700 active:bg-purple-400 active:text-red-500 active:font-bold flex items-center justify-center text-white"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="material-symbols-outlined">check_box_outline_blank</span>
                            ) : (
                                <span className="material-symbols-outlined">arrow_upward</span>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PromptInputForm;
