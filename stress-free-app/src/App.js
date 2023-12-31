import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import ChooseScape from './Components/ChooseScape';
import ChooseSound from './Components/ChooseSound';
import StressSpace from './Components/StressSpace';
import ChooseDuration from './Components/ChooseDuration';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/> 
          <Route path='/home' element={<Home/>}/>
          <Route path='/choosescape' element={<ChooseScape />}/>
          <Route path='/choosesound' element={<ChooseSound />} />
          <Route path='/chooseduration' element={<ChooseDuration />} />
          <Route path='/stressspace' element={<StressSpace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;