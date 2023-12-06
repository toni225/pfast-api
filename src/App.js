import {BrowserRouter,Routes,Route} from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css'

import ParkingList from "./components/ParkingList";
import CreateParking from "./components/CreateParking";
import MyParking from "./components/MyParking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<ParkingList/>}/>
            <Route path={'/create'} element={<CreateParking/>}/>
            <Route path={'/myparking/:id'} element={<MyParking/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
