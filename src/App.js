import './App.css';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
