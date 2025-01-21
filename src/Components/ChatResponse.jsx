// const ChatResponse = ({ response }) => {
//     if (!response) {
//         return null;
//     }
    
//     const {candidates, usageMetadata } = response;

//     return (
//         <div className="container my-4">
//             <h3>Response</h3>
//         {candidates.map((candidate, index) => (
//             <div className="card mb-3" key={index}>
//             <div className="card-body">
//               <h5 className="card-title">Candidate {index + 1}</h5>
//               <p className="card-text">{candidate.content.parts[0].text}</p>
//               <h6>Citations:</h6>
//               <ul>
//                 {candidate?.citationMetadata?.citationSources.map((source, idx) => (
//                     <li key={idx}>
//                         <a href={source.uri} target="_blank" rel="noopener noreferrer">
//                             {source.uri}
//                         </a> {" "}
//                         (Indexes: {source.startIndex} - {source.endIndex})
//                     </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}

//         <h4>Usage Metadata</h4>
//         <p>Prompt Tokens: {usageMetadata.promptTokenCount}</p>
//         <p>ProResponse Tokens: {usageMetadata.candidatesTokenCount}</p>
//         <p>Total Tokens: {usageMetadata.totalTokenCount}</p>
//         </div>
//     )
// }

// export default ChatResponse;

const ChatResponse = ({ response }) => {
    if (!response) {
        return null;
    }

    const { candidates, usageMetadata } = response;

    return (
        <div className="container mx-auto my-8 p-6 bg-black rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Response</h3>

            {candidates.map((candidate, index) => (
                <div
                    key={index}
                    className="mb-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg p-5"
                >
                    <h5 className="text-lg font-semibold text-blue-600 mb-2">
                        Candidate {index + 1}
                    </h5>
                    <p className="text-gray-700 mb-4">
                        {candidate.content.parts[0].text}
                    </p>

                    {candidate?.citationMetadata?.citationSources?.length > 0 && (
                        <>
                            <h6 className="text-sm font-bold text-gray-800 mb-2">
                                Citations:
                            </h6>
                            <ul className="list-disc list-inside text-gray-600">
                                {candidate.citationMetadata.citationSources.map(
                                    (source, idx) => (
                                        <li key={idx} className="mb-1">
                                            <a
                                                href={source.uri}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 underline hover:text-blue-700"
                                            >
                                                {source.uri}
                                            </a>{" "}
                                            <span className="text-gray-500">
                                                (Indexes: {source.startIndex} -{" "}
                                                {source.endIndex})
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </>
                    )}
                </div>
            ))}

            <div className="mt-6 bg-white rounded-lg shadow-md p-5">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Usage Metadata
                </h4>
                <p className="text-gray-600 mb-1">
                    <strong>Prompt Tokens:</strong> {usageMetadata.promptTokenCount}
                </p>
                <p className="text-gray-600 mb-1">
                    <strong>Response Tokens:</strong> {usageMetadata.candidatesTokenCount}
                </p>
                <p className="text-gray-600">
                    <strong>Total Tokens:</strong> {usageMetadata.totalTokenCount}
                </p>
            </div>
        </div>
    );
};

export default ChatResponse;
