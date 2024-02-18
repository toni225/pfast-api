import * as userServices from "../services/user.service"

import Layout from "./layout/Layout";
import {useState} from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import MapDisplay from "./map/MapDisplay";

const CreateParking = () => {
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)

    const [ParkingName,setParkingName] = useState("")
    const [ParkingStatus,setParkingStatus] = useState(false)
    const [Lat,setLat] = useState(undefined)
    const [Lng,setLng] = useState(undefined)
    const [FourWheelsPrice,setFourWheelsPrice] = useState(0)
    const [FourWheelsStatus,setFourWheelsStatus] = useState(false)
    const [TwoWheelsPrice,setTwoWheelsPrice] = useState(0)
    const [TwoWheelsStatus,setTwoWheelsStatus] = useState(false)
    const [ParkingSpace,setParkingSpace] = useState(0)
    
    const markedLocation = (loc) => {
        setLat(loc.lat)
        setLng(loc.lng)
    }

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
                                    value={Lat}
                                    onChange={e=>setLat(e.target.value)}
                                    placeholder="Latitude"
                                    required
                                />
                                <input
                                    id="parking_lng"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={Lng}
                                    onChange={e=>setLng(e.target.value)}
                                    placeholder="Longitude"
                                    required
                                />

                            </div>
                            <button type="button" className="mt-3 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                                    onClick={()=>setShowModal(true)}
                            >Open Map</button>

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
            {showModal ? (<>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-screen  my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Modal Title
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      ×
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative flex-auto">
                                <MapDisplay page={"CreateParking"} markedLocation={markedLocation}/>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                        setShowModal(false);
                                        console.log(Lat,Lng)
                                    }}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>) : null}
        </Layout>
    )
}

export default CreateParking