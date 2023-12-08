import * as userServices from "../services/user.service"

import Layout from "./layout/Layout";
import {useState} from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const CreateParking = () => {
    const navigate = useNavigate()

    const [ParkingName,setParkingName] = useState("")
    const [ParkingStatus,setParkingStatus] = useState(false)
    const [Lat,setLat] = useState("")
    const [Lng,setLng] = useState("")
    const [FourWheelsPrice,setFourWheelsPrice] = useState(0)
    const [FourWheelsStatus,setFourWheelsStatus] = useState(false)
    const [TwoWheelsPrice,setTwoWheelsPrice] = useState(0)
    const [TwoWheelsStatus,setTwoWheelsStatus] = useState(false)
    const [ParkingSpace,setParkingSpace] = useState(0)

    const submitForm = async (e) => {
        e.preventDefault()

        const payload = {
            ParkingName,
            ParkingStatus,
            Lat,
            Lng,
            FourWheelsPrice,
            FourWheelsStatus,
            TwoWheelsPrice,
            TwoWheelsStatus,
        }

        try{
            const apiResponse = await userServices.createParking(payload)

            if(apiResponse.data?.status === 201){
                toast.success("Parking Created!")
                console.log(apiResponse)
            }
        }catch (e){
            toast.error("Error!")
        }
    }

    return(
        <Layout>
            <div>
                <h1 className="text-orange-500 text-center">CREATE PARKING</h1>

                <div className="mx-auto max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <form className="max-w-sm mx-auto" onSubmit={submitForm}>
                        <div className="mb-5">
                            <label htmlFor="parking_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parking Name</label>
                            <input
                                id="parking_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={e=>setParkingName(e.target.value)}
                                placeholder="Parking Name"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="parking_loc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                            <div className="flex gap-2">
                                <input
                                    id="parking_lat"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={e=>setLat(e.target.value)}
                                    placeholder="Latitude"
                                    required
                                />
                                <input
                                    id="parking_lng"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={e=>setLng(e.target.value)}
                                    placeholder="Longitude"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type={"submit"}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add Parking
                        </button>
                        <button
                            type={"button"}
                            onClick={()=>navigate(-1)}
                            className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Cancel
                        </button>
                    </form>
                </div>

            </div>
        </Layout>
    )
}

export default CreateParking