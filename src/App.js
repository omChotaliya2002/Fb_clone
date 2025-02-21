import './App.css';
import Fb from './Fb';
import Forgot from './Forgot';
import CreatePage from './CreatePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<Router>

    <Routes>
        <Route path='/' element={<Fb/>}/>
        <Route path='/forgotPassword' element={<Forgot/>}/>
        <Route path='/createPage' element={<CreatePage/>}/>
    </Routes>

</Router>

    </div>
  );
}

export default App;