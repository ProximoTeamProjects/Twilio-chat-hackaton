import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { ChatProvider } from './context/ChatProvider';


function App() {

  return (

      <ChatProvider>

        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Header /> } />

          </Routes>
        </BrowserRouter>

      </ChatProvider>


  )
}

export default App
