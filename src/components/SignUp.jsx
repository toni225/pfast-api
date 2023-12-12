import React from 'react';
import CredentialForm from './layout/CredentialForm';

const SignUp = () => {
    return (
        <div class="flex items-center justify-center h-screen">
            <form class="bg-[#0f0e17] relative flex flex-col shadow-md w-1/3 rounded-xl ">
                <h3 class="block font-sans text-7xl antialiased text-white text-center mt-5">
                    PFASt
                </h3>
                <p class="text-white font-semibold rtl:ml-5">Registration</p>
                <CredentialForm />
                <div class="flex items-center justify-center pb-5">
                    <input type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label class="pl-2 text-white">Parking Owner</label>
                </div>

                <div class="p-6 pt-1">
                    <center>
                        <button
                            class="bg-[#ff8906] select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            Sign Up
                        </button>
                        <hr className="my-5 w-1/2" />  {/*HORIZONTAL LINE AFTER SIGN UP BUTTON*/}
                    </center>
                    <div class="flex justify-center">
                        <a href="?" class="inline-block font-sans text-sm antialiased leading-normal text-[#f25f4c]">Log In</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp