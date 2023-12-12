import React from "react";
import CredentialForm from './layout/CredentialForm';

const Login = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <form class="bg-[#0f0e17] relative flex flex-col shadow-md w-1/3 rounded-xl ">
        <h3 class="block font-sans text-7xl antialiased text-white text-center mt-5">
          PFASt
        </h3>
        <CredentialForm />
        <div class="p-6 pt-0">
          <center>
            <button
              class="bg-[#ff8906] select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              Login
            </button>
            <hr className="my-5 w-2/3" />  {/*HORIZONTAL LINE AFTER SIGN UP BUTTON*/}

          </center>
          <div class="flex justify-center space-x-4">
            <a href="#signup" class="inline-block font-sans text-sm antialiased font-bold leading-normal text-[#f25f4c]">Sign up</a>
            <a href="#recovery" class="inline-block font-sans text-sm antialiased font-bold leading-normal text-[#f25f4c]">Forgot Password?</a>
          </div>

          <div class="flex justify-center pt-5">
            <a href="?" class="inline-block font-sans text-sm antialiased font-bold leading-normal text-[#f25f4c]">Are you a Parking Owner?</a>
          </div>


        </div>
      </form>
    </div>
  )
}

export default Login