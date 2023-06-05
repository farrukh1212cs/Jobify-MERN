import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Error,Register,Landing,ProtectedRoute} from './pages'
import {AddJob,AllJobs,Profile,Stats,SharedLayout} from './pages/dashboard'

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<ProtectedRoute> <SharedLayout/></ProtectedRoute>}>
        <Route index element={<Stats/>} />
        <Route path="add-job" element={<AddJob/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="all-jobs" element={<AllJobs/>} />
        </Route>

        <Route path="/register" element={<Register></Register>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error></Error>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
