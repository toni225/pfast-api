import {BrowserRouter,Routes,Route} from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css'

import ParkingList from "./components/ParkingList";
import CreateParking from "./components/CreateParking";
import MyParking from "./components/MyParking";
import EditParking from "./components/EditParking";
import ParkingPage from "./components/layout/ParkingPage";
import Login from "./components/Login"
import SignUp from "./components/SignUp";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="App">
        <ToastContainer/>
      <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<ParkingList/>}/>
            <Route path={'/create'} element={<CreateParking/>}/>
            <Route path={'/myparking/:id'} element={<MyParking/>}/>
            <Route path={'/myparking/:id/edit'} element={<EditParking/>}/>
            <Route path={'/parking'} element={<ParkingPage/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/signup'} element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
