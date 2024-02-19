import * as userServices from "../services/user.service"

import {useEffect, useState} from "react";
import Layout from "./layout/Layout";
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
                <h1 className="text-orange-500 text-center">PARKING LIST</h1>
                <div className="mt-10 flex justify-center">
                    <div className="flex items-center">
                        <button
                            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                            onClick={()=>navigate('/parking')}
                        >Explore</button>
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
<p className="overflow-hidden text-ellipsis text-slate-200">{parking.ParkingStatus ? "Available" : "Unavailable"}</p>
                                        <p className="overflow-hidden text-ellipsis text-slate-200">{parking.FourWheelsStatus?`Four Wheels: ${parking.FourWheelsPrice  === null ? '-----' : parking.FourWheelsPrice} ` : ""}</p>
                                        <p className="overflow-hidden text-ellipsis text-slate-200">{parking.TwoWheelsStatus?`Two Wheels: ${parking.TwoWheelsPrice === null ? '-----' : parking.TwoWheelsPrice}` : ""}</p>

                                    </div>
                                        <div className="flex justify-end">
                                            <button
                                            type={"button"}
                                            
                                            className="px-8 py-8 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                                            onClick={()=>navigate(`/myparking/${parking.ParkingID}`)}>Navigate</button>
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