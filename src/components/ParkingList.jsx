import * as userServices from "../services/user.service"

import {useEffect, useState} from "react";
import Layout from "./layout/Layout";
import gps from "./images/gps.png"
import {useNavigate} from "react-router-dom";
import { ArrowUpLeftIcon } from '@heroicons/react/24/solid'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';



const ParkingList = () => {
    const navigate = useNavigate()
    const [parkingList,setParkingList] = useState([])

    const fetchUser = async () => {
        try{
            const {data} = await userServices.getAllParking()
            setParkingList(data.users)

        }catch (e) {
            
        }
    }

    useEffect(()=>{
       fetchUser()
    },[])

    return (
        <Layout>
            <div>
                {/* <div className="mt-10 flex justify-center">
                    <div className="flex items-center">
                        <img src={gps} class="object-contain h-20 w-20" alt=""></img>
                    </div> */}

                <div className="mt-10 flex justify-center -mb-10">
                    <div className="flex items-center">
                        <button onClick={()=>navigate('/parking')}>
                            <img src={gps} className="object-contain h-20 w-20 mx-auto transition-transform duration-300 transform hover:scale-110" alt=""></img>
                            <h1 className="text-slate-800 text-2xl text-center font-sans font-bold mb-8">Explore Parkings</h1>
                        </button>
                    </div>
                </div>

                <hr className="m-5 border-slate-500"/>
                <h1 className="text-black-500 text-4xl text-center font-sans font-bold mb-8">Parking Lots Near You</h1>
                <ul role="list" className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 gap-4 pr-10 pl-10">
                    {parkingList.map((parking)=>{
                        return (
                            <li key={parking.ParkingID} className="bg-gray-950 border-solid border p-4 rounded-md">
                                <div >
                                    <div className="flex-col block overflow-ellipsis truncate">
                                        <p className="overflow-hidden text-ellipsis">{/*parking.ParkingID*/}</p>
                                        <p className="overflow-hidden text-ellipsis text-2xl text-slate-200">{parking.ParkingName}</p>
                                        <p className="overflow-hidden text-ellipsis text-slate-200">{new Date(parking.created_at).toLocaleString()}</p>
                                        {/* <p className="overflow-hidden text-ellipsis text-slate-200">{parking.ParkingStatus ? "Available" : "Unavailable"}</p> */}
                                        <p className="overflow-hidden text-ellipsis text-slate-200">
                                            {parking.ParkingStatus ? 
                                                <>
                                                    <CheckCircleIcon className="h-5 w-5 text-green-500 inline-block mr-1" />
                                                    Available
                                                </> 
                                                : 
                                                <>
                                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500 inline-block mr-1" />
                                                    Unavailable
                                                </>
                                            }
                                        </p>
                                        <p className="overflow-hidden text-ellipsis text-slate-200">{parking.FourWheelsStatus?`Four Wheels: ${parking.FourWheelsPrice  === null ? '-----' : parking.FourWheelsPrice} ` : ""}</p>
                                        <p className="overflow-hidden text-ellipsis text-slate-200">{parking.TwoWheelsStatus?`Two Wheels: ${parking.TwoWheelsPrice === null ? '-----' : parking.TwoWheelsPrice}` : ""}</p>

                                    </div>
                                        <div className="flex justify-end">
                                            <button
                                            type={"button"}
                                            
                                            className="px-3 py-3 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                                            onClick={()=>navigate(`/myparking/${parking.ParkingID}`)}><ArrowUpLeftIcon className="h-6 w-6 text-white text-4xl" />Navigate</button>

                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>

    )
}

export default ParkingList