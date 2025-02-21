import React, { useRef, useState, useCallback } from "react";

const PromptInputForm = ({ insertPrompt }) => {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    console.log("re-render");
    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            if (inputRef.current) {
                insertPrompt(inputRef.current.value);
                inputRef.current.value = "";
            }
        },
        [insertPrompt]
    );

    const handleChange = useCallback((event) => {
        if (!event.target.value) return;
        if (inputRef.current) {
            inputRef.current.value = event.target.value;
        }
    }, []);

    return (
        <div className="flex border w-[90%] h-12 rounded-3xl flex-row items-center justify-center p-2">
            <form className="w-full h-full" onSubmit={handleSubmit}>
                <div className="flex h-full flex-row justify-between items-center">
                    <input
                        className="w-[90%] outline-0 pl-1"
                        onChange={handleChange}
                        ref={inputRef}
                        type="text"
                    />
                    <button
                        type="submit"
                        className="w-8 h-8 rounded-2xl bg-purple-600 hover:bg-purple-700 active:bg-purple-400 active:text-red-500 active:font-bold flex items-center justify-center text-white"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="material-symbols-outlined">check_box_outline_blank</span>
                        ) : (
                            <span className="material-symbols-outlined">arrow_upward</span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PromptInputForm;
