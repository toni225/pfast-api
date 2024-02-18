import * as userServices from "../services/user.service"

import {useEffect, useState} from "react";
import Layout from "./layout/Layout";
import {useNavigate} from "react-router-dom";

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
                <hr className="m-10"/>
                <ul role="list" className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 gap-4 pr-10 pl-10">
                    {parkingList.map((parking)=>{
                        return (
                            <li key={parking.ParkingID} className="border-solid border border-sky-500 p-4 rounded-md">
                                <div >
                                    <div className="block overflow-ellipsis truncate">
                                        <p className="overflow-hidden text-ellipsis">{parking.ParkingID}</p>
                                        <p className="overflow-hidden text-ellipsis">{parking.ParkingName}</p>
                                        <p className="overflow-hidden text-ellipsis">{new Date(parking.created_at).toLocaleString()}</p>
                                        <p className="overflow-hidden text-ellipsis">{parking.ParkingStatus ? "Available" : "Unavailable"}</p>
                                        <p className="overflow-hidden text-ellipsis">{parking.FourWheelsStatus?`Four Wheels: ${parking.FourWheelsPrice  === null ? '-----' : parking.FourWheelsPrice} ` : ""}</p>
                                        <p className="overflow-hidden text-ellipsis">{parking.TwoWheelsStatus?`Two Wheels: ${parking.TwoWheelsPrice === null ? '-----' : parking.TwoWheelsPrice}` : ""}</p>

                                    </div>
                                    <button
                                        type={"button"}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={()=>navigate(`/myparking/${parking.ParkingID}`)}>Details</button>
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