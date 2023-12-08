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
                <ul role="list" className="grid grid-cols-3 gap-4">
                    {parkingList.map((parking)=>{
                        return (
                            <li key={parking.ParkingID} className="border-solid border border-sky-500 p-4 rounded-md">
                                <div>
                                    <p>{parking.ParkingID}</p>
                                    <p>{parking.ParkingName}</p>
                                    <p>{new Date(parking.created_at).toLocaleString()}</p>
                                    <p>{parking.ParkingStatus ? "Available" : "Unavailable"}</p>
                                    <p>{parking.FourWheelsStatus?`Four Wheels: ${parking.FourWheelsPrice  === null ? '-----' : parking.FourWheelsPrice} ` : ""}</p>
                                    <p>{parking.TwoWheelsStatus?`Two Wheels: ${parking.TwoWheelsPrice === null ? '-----' : parking.TwoWheelsPrice}` : ""}</p>
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