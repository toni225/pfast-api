import MapDisplay from "../map/MapDisplay";
import {useEffect, useState} from "react";
import {getAllParking} from "../../services/user.service";

const ParkingPage = () => {
    const [data,setData] = useState([])


    const fetchData = async () => {
        const response = await getAllParking()

        setData(response.data.users)

    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div>
            <MapDisplay data={data} page={"ParkingPage"}/>
        </div>
    )
}

export default ParkingPage