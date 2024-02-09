import * as userService from '../services/user.service'

import React, {useState} from "react";
import CredentialForm from './layout/CredentialForm';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const getData = (data) => {
    setEmail(data.email)
    setPassword(data.password)
  }

  const submitForm = async (e) => {
    e.preventDefault()

    const payload = {
      email,password
    }

    try {
      const apiResponse = await userService.login(payload)


      if(apiResponse.status === 201){
        toast.success("Welcome!")
        // navigate('/')
        console.log(apiResponse.data.data.session)
        localStorage.setItem('session',JSON.stringify(apiResponse.data.data.session))
      }
    } catch (e) {
      toast.error(e.response.data.data.message)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={submitForm} className="bg-[#0f0e17] relative flex flex-col shadow-md w-1/3 rounded-xl ">
        <h3 className="block font-sans text-7xl antialiased text-white text-center mt-5">
          PFASt
        </h3>
        <CredentialForm data={getData}/>
        <div className="p-6 pt-0">
          <center>
            <button
              className="bg-[#ff8906] select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit">
              Login
            </button>
            <hr className="my-5 w-2/3" />  {/*HORIZONTAL LINE AFTER SIGN UP BUTTON*/}

          </center>
          <div className="flex justify-center space-x-4">
            <a href="signup" className="inline-block font-sans text-sm antialiased leading-normal text-[#f25f4c]">Sign up</a>
            <a href="#recovery" className="inline-block font-sans text-sm antialiased leading-normal text-[#f25f4c]">Forgot Password?</a>
          </div>

          <div className="flex justify-center pt-5">
            <a href="?" className="inline-block font-sans text-sm antialiased leading-normal text-[#f25f4c]">Are you a Parking Owner?</a>
          </div>


        </div>
      </form>
    </div>
  )
}

export default Login
