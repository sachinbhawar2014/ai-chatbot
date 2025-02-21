import React from "react";

const UserPrompt = ({ prompt }) => {
    return (
        <div className="flex flex-row justify-end p-2">
            <div
                className="p-2 w-max-[70%] align-text-left bg-sky-800 text-white"
                style={{ borderRadius: "10px 10px 3px 10px" }}
            >
                <p>{prompt}</p>
            </div>
        </div>
    );
};

export default UserPrompt;
