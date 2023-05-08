import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Error,Dashboard,Register,Landing} from './pages'


function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error></Error>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
