import * as userServices from "../services/user.service"

import Layout from "./layout/Layout";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";


const EditParking = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [ParkingName,setParkingName] = useState("")
    const [ParkingStatus,setParkingStatus] = useState(false)
    const [Lat,setLat] = useState("")
    const [Lng,setLng] = useState("")
    const [FourWheelsPrice,setFourWheelsPrice] = useState(0)
    const [FourWheelsStatus,setFourWheelsStatus] = useState(false)
    const [TwoWheelsPrice,setTwoWheelsPrice] = useState(0)
    const [TwoWheelsStatus,setTwoWheelsStatus] = useState(false)
    const [ParkingSpace,setParkingSpace] = useState(0)

    const fetchUser = async () => {
        try{
            const {data:{parking}} = await userServices.getParking(id)

            setParkingName(parking[0].ParkingName)
            setParkingStatus(parking[0].ParkingStatus)
            setLat(parking[0].Lat)
            setLng(parking[0].Lng)
            setFourWheelsPrice(parking[0].FourWheelsPrice)
            setFourWheelsStatus(parking[0].FourWheelsStatus)
            setTwoWheelsPrice(parking[0].TwoWheelsPrice)
            setTwoWheelsStatus(parking[0].TwoWheelsStatus)
            setParkingSpace(parking[0].ParkingSpace)

        }catch (e) {

        }
    }

    useEffect(()=>{
        fetchUser()
    },[id])

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
            const apiResponse = await userServices.editParking(id,payload)

            if(apiResponse.data?.status === 200){
                toast.success("Parking Edited!")
            }
        }catch (e){
            toast.error("Error.")
        }
    }

    const parkingRemove = async () => {
        try{
            const apiResponse = await userServices.removeParking(id)

            if(apiResponse.data?.status === 200){
                toast.success("Parking Deleted!")

                setTimeout(()=>{
                    window.location.href = '/'
                }, 2000)
            }
        }catch (e) {
            toast.error("Error.")
        }
    }

    return(
        <Layout>
            <div>
                <h1 className="text-orange-500 text-center">EDIT PARKING</h1>

                <div className="mx-auto max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <form className="max-w-sm mx-auto" onSubmit={submitForm}>
                        <div className="mb-5">
                            <label htmlFor="parking_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parking Name</label>
                            <input
                                id="parking_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={e=>setParkingName(e.target.value)}
                                placeholder="Parking Name"
                                value={ParkingName}
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
                                    value={Lat}
                                    placeholder="Latitude"
                                    required
                                />
                                <input
                                    id="parking_lng"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={e=>setLng(e.target.value)}
                                    value={Lng}
                                    placeholder="Longitude"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type={"submit"}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Save
                        </button>
                        <button
                            type={"button"}
                            onClick={()=>navigate(-1)}
                            className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Back
                        </button>
                    </form>
                    <hr className="m-5"/>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={parkingRemove}
                            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                        >Remove Parking
                        </button>

                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default EditParking