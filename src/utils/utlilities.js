export const formatText = (text) => {
    // Replacing " * " (space * space) with <br/>
    let formattedText = text.replace(/ \* /g, "<br/>");

    // Replacing text enclosed in "**" with <strong>
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, "<br/><strong>$1</strong>");

    return formattedText;
};
