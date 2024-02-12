import * as userService from '../services/user.service'

import React, {useState} from "react";
import CredentialForm from './layout/CredentialForm';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import userData from "./data/user.data";

const Login = () => {
  const navigate = useNavigate()

  const [loading,setIsLoading] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const getData = (data) => {
    setEmail(data.email)
    setPassword(data.password)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const payload = {
      email,password
    }

    try {
      const apiResponse = await userService.login(payload)


      if(apiResponse.status === 201){

        const userId = apiResponse.data.data.user.id
        localStorage.setItem('session',apiResponse.data.data.session.access_token)

        try{
          const userInfoResponse = await userService.getUserInfo(userId)

          if(userInfoResponse.data.data.length > 0){
            console.log(userInfoResponse.data.data[0])
            localStorage.setItem('user',JSON.stringify(userInfoResponse.data.data[0]))
            toast.success("Welcome!")
            navigate('/')
          }else{
            toast.warning("Please fill up the docs")
            navigate('/account')
          }
        }catch (e) {
          console.log(e)
        }


        // console.log(apiResponse.data.data.session.access_token)
        // userData.session = apiResponse.data.data

      }
    } catch (e) {
      // console.log(e)
      toast.error(e.response.data.data.message)
      setIsLoading(false)
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
              disabled={loading}
              type="submit">
              {loading ?
                <span className="flex items-center">
                  <svg aria-hidden="true"
                     className="w-7 h-5 mr-1 text-white animate-spin fill-gray-500"
                     viewBox="0 0 100 101" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"/>
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"/>
                </svg>Login</span> : "Login"}
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
