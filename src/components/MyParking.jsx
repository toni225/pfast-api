import * as userServices from "../services/user.service"

import Layout from "./layout/Layout";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const MyParking = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [parkingId,setParkingId] = useState("")
    const [parkingName,setParkingName] = useState("")

    const fetchUser = async () => {
        try{
            const {data} = await userServices.getParking(id)
            console.log(data)
            setParkingId(data.parking[0].parking_id)
            setParkingName(data.parking[0].name)

        }catch (e) {
            window.location.href = '/'
        }
    }

    useEffect(()=>{
       fetchUser()
    },[])

  return(
      <Layout>
          <h1 className="text-orange-500 text-center">MY PARKING</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div></div>
              <form className="text-[#FFFFFE] mx-auto max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#0f0e17] dark:border-gray-700">
                  <div className="flex justify-between">
                      <div>
                          <p>{parkingId}</p>
                          <p>{parkingName}</p>
                          <p>Location</p>
                      </div>
                      <NavLink to={`/myparking/${id}/edit`}>Edit</NavLink>
                  </div>
                  <hr className="mt-3 mb-3"/>
                  <div className="flex justify-center ">
                  <span className="flex items-center">
                      Available
                      <label className="ml-5 relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer"/>
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-red-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                      </label>
                  </span>
                  </div>
                  <hr className="mt-3 mb-3"/>
                  <div className="flex-col justify-items-center">
                      <p className="flex justify-center">Available Spaces (Optional)</p>
                      <div className="flex justify-center items-center gap-5 mt-3">
                          <button type="button"
                                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">-
                          </button>
                          <span>#</span>
                          <button type="button"
                                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">+
                          </button>

                      </div>
                  </div>
                  <hr className="mt-3 mb-3"/>
                  <div>
                      <div className="flex gap-5 justify-between">
                          <label className="ml-5 relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" className="sr-only peer"/>
                              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-red-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                          </label>
                          <p>Car</p>
                          <input placeholder={"Price"} className="text-[#0f0e17]" type="number"/>
                      </div>
                      <div className="flex gap-5 mt-3 justify-between">
                          <label className="ml-5 relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" className="sr-only peer"/>
                              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-red-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                          </label>
                          <p>Motorcycles</p>
                          <input placeholder={"Price"} className="text-[#0f0e17]" type="number"/>
                      </div>
                  </div>
              </form>
              <div className="grid place-items-center md:place-items-start">
                  <button
                      type={"button"}
                      onClick={()=>navigate('/create')}
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >Add Parking</button>
              </div>
          </div>


      </Layout>
  )
}

export default MyParking