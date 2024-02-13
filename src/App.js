import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css'

import ParkingList from "./components/ParkingList";
import CreateParking from "./components/CreateParking";
import MyParking from "./components/MyParking";
import EditParking from "./components/EditParking";
import ParkingPage from "./components/layout/ParkingPage";
import Login from "./components/Login"
import SignUp from "./components/SignUp";
import {ToastContainer} from "react-toastify";
import AccountPage from "./components/AccountPage";
import {Protected} from "./components/protected";

function App() {

  return (
    <div className="App">
        <ToastContainer/>
      <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<ParkingList/>}/>
            <Route path={'/account'} element={<Protected><AccountPage/></Protected>}/>
            <Route path={'/create'} element={<Protected><CreateParking/></Protected>}/>
            <Route path={'/myparking/:id'} element={<Protected><MyParking/></Protected>}/>
            <Route path={'/myparking/:id/edit'} element={<Protected><EditParking/></Protected>}/>
            <Route path={'/parking'} element={<Protected><ParkingPage/></Protected>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/signup'} element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
