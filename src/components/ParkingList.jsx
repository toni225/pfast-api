import * as userServices from "../services/user.service"

import {useEffect, useState} from "react";
import Layout from "./layout/Layout";

const ParkingList = () => {

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
                            <li key={parking.parking_id} className="border-solid border border-sky-500 p-4 rounded-md">
                                <div>
                                    <p>{parking.parking_id}</p>
                                    <p>{parking.name}</p>
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