import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import ChooseScape from './Components/ChooseScape';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/> 
          <Route path='/home' element={<Home/>}/>
          <Route path='/choosescape' element={<ChooseScape />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;