import { useState } from 'react'
import './App.css'
import ChatInput from './Components/ChatInput';
import ChatResponse from './Components/ChatResponse';
import { fetchChatResponse } from './Service/ApiCall';


function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Failed to get response")
    } finally {
      setLoading(false);
    }
  }


  // if (loading) {
  //   return (<h1>Loading...</h1>);
  // }

  return (
    <div className='App '>
      <header className='bg-black text-white text-center py-4'>
        <h1>Gemini ChatBot</h1>
      </header>
      <ChatInput onSubmit={handleQuestionSubmit}/>
      {loading &&  <h3>Loading...</h3>}
        <ChatResponse response={response} />
      {/* RESPONSE */}
    </div>
  )
}

export default App