// import { useState } from "react";

// const ChatInput = ({ onSubmit }) => {
// const [question, setQuestion] = useState("");
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (question.trim()) {
//             onSubmit(question);
//             setQuestion("");
//         }
//     }

//     return (
//         <div className="container my-4">
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="question">Ask a Question</label>
//                     <input 
//                         type="text"
//                         className="form-control"
//                         id="question"
//                         placeholder="Enter your question"
//                         value={question}
//                         onChange={(e) => setQuestion(e.target.value)}/>
//                 </div>

//                 <button type="submit" className="btn btn-primary mt-2">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default ChatInput;

import { useState } from "react";

const ChatInput = ({ onSubmit }) => {
    const [question, setQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim()) {
            onSubmit(question);
            setQuestion("");
        }
    };

    return (
        <div className="flex justify-center items-center my-6">
            <div className="w-full max-w-md bg-black  shadow-lg rounded-lg p-6 border border-gray-200">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="question"
                            className="block text-sm font-medium text-white mb-1"
                        >
                            Ask a Question
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            id="question"
                            placeholder="Enter your question here..."
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-semibold transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatInput;
