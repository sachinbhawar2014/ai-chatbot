# AI-Powered Chatbot React Web App

This is a React web application that provides an AI-powered chatbot experience. It uses Google's Generative AI to generate responses to user questions.

## Features

-   **Interactive Chat Interface:** A user-friendly interface for asking questions and receiving AI-generated responses.
-   **Google Generative AI Integration:** Leverages the power of Google's Generative AI models for intelligent and context-aware replies.
-   **Responsive Design:** Works seamlessly on various devices (desktops, tablets, and mobile phones).
-   **Clean and Modern UI:** Built with React and styled with Tailwind CSS for a sleek user experience.

## Technologies Used

-   **React:** JavaScript library for building user interfaces.
-   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
-   **Google Generative AI:** For AI-powered responses.
-   **npm/yarn:** Package managers for JavaScript dependencies.

## Prerequisites

-   Node.js (>= 18.0.0)
-   npm or yarn
-   A Google Cloud Project with the Generative AI API enabled and associated API Key.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone [[repository_url]](https://github.com/sachinbhawar2014/ai-chatbot)
    cd ai-chatbot
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**

    -   Create a `.env.local` file in the root directory.
    -   Add your Google Generative AI API key:

        ```
        REACT_APP_GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
        ```

    -   Make sure to replace `YOUR_GOOGLE_API_KEY` with your actual API key.

4.  **Run the application:**

    ```bash
    npm start
    # or
    yarn start
    ```

    The application will be accessible at `http://localhost:3000`.

## Usage

1.  Open the application in your web browser.
2.  Type your question in the input field.
3.  Press Enter or click the send button.
4.  The AI-generated response will be displayed in the chat interface.

## Project Structure

ai-chatbot-react/
├── public/

│ └── index.html

├── src/

│ ├── assets/

│ │ └── ... (images, icons)

│ ├── components/

│ │ ├── ChatBotBody.jsx

│ │ ├── ChatBotHeader.jsx

│ │ ├── ChatBotMessage.jsx

│ │ └── ...

│ ├── App.jsx

│ ├── main.jsx

│ └── ...

├── package.json

├── README.md


## Google Generative AI Setup

## Google Generative AI Setup

1.  **Go to ai.google.dev:**

    -   Open your web browser and navigate to [ai.google.dev](https://ai.google.dev/).

2.  **Sign in or Create an Account:**

    -   If you don't have a Google account, you'll need to create one.
    -   If you have an account, sign in.

3.  **Navigate to "Get API key":**

    -   Once logged in, look for the "Get API key" button or a similar prompt. This is often prominently displayed on the main page or in the navigation.

4.  **Create a New API Key:**

    -   Click the "Get API key" button.
    -   You might be prompted to select or create a Google Cloud Project. If so, follow the on-screen instructions.
    -   Click the "Create API key in existing project" button, or a similar button.
    -   A new API key will be generated and displayed.
    -   **Copy the API key immediately and store it securely.** You won't be able to see it again after you close the dialog.

5.  **Secure Your API Key (Crucial):**

    -   **Never expose your API key directly in your client-side JavaScript code.** This is a major security risk.
    -   Instead, store the API key as an environment variable in a `.env.local` file (as shown in the Installation section). Access it using `process.env.REACT_APP_GOOGLE_API_KEY`.
    -   It is best practice to restrict the API key's usage to only the Gemini API within the Google Cloud Console's Credentials section.
    -   If you plan to deploy the app to a server, store the API key in the server's environment variables, and have the react app make api calls to your server, which will then use the api key to make calls to google's gemini api.

## Example Usage of `@google/generative-ai`

The following code demonstrates how to use the `@google/generative-ai` library to interact with the Gemini API:

```javascript
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("YOUR_API_KEY"); // Replace with your API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const prompt = "Explain how AI works";
const result = await model.generateContent(prompt);
console.log(result.response.text());

## Future Enhancements

-   **Conversation History:** Implement persistent conversation history.
-   **Voice Input/Output:** Add voice interaction capabilities.
-   **Contextual Awareness:** Improve context management for more accurate responses.
-   **Customizable UI:** Allow users to customize the chatbot's appearance.
-   **Error Handling:** Implement robust error handling for API calls.
-   **Loading Indicators:** Add loading indicators during API calls.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or create issues for bug reports or feature requests.
```
