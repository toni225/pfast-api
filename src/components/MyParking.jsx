import * as userServices from "../services/user.service"

import Layout from "./layout/Layout";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

const MyParking = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [Data,setData] = useState({})
    const [ParkingID,setParkingID] = useState("")
    const [ParkingName,setParkingName] = useState("")
    const [ParkingStatus,setParkingStatus] = useState(undefined)
    const [Lat,setLat] = useState("")
    const [Lng,setLng] = useState("")
    const [FourWheelsPrice,setFourWheelsPrice] = useState(0)
    const [FourWheelsStatus,setFourWheelsStatus] = useState(undefined)
    const [TwoWheelsPrice,setTwoWheelsPrice] = useState(0)
    const [TwoWheelsStatus,setTwoWheelsStatus] = useState(undefined)
    const [ParkingSpace,setParkingSpace] = useState(0)

    const fetchParking = async () => {
        try{
            const {data} = await userServices.getParking(id)

            setParkingID(data.parking[0].ParkingID)
            setParkingName(data.parking[0].ParkingName)
            setParkingStatus(data.parking[0].ParkingStatus)
            setLat(data.parking[0].Lat)
            setLng(data.parking[0].Lng)
            setFourWheelsPrice(data.parking[0].FourWheelsPrice)
            setFourWheelsStatus(data.parking[0].FourWheelsStatus)
            setTwoWheelsPrice(data.parking[0].TwoWheelsPrice)
            setTwoWheelsStatus(data.parking[0].TwoWheelsStatus)
            setParkingSpace(data.parking[0].ParkingSpace)

        }catch (e) {
            window.location.href = '/'
        }
    }

    const updateParkingDetails = async (Field={}) => {

        try {
            const payload = {
                Field
            }
            console.log(Field)
            const apiResponse = await userServices.editParking(id,Field)
            console.log(apiResponse)
            if(apiResponse.data?.status === 200){

                return toast.success("Parking Updated!")
            }
        }catch (e) {

        }
    }

    const submitForm = (Field) => {
        updateParkingDetails(Field)
        // fetchParking()
    }

    useEffect(()=>{

        fetchParking()


    },[ParkingSpace,TwoWheelsPrice])


    return(
        <Layout>
            <h1 className="text-orange-500 text-center">MY PARKING</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div></div>
                <form className="text-[#FFFFFE] w-full mx-auto max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#0f0e17] dark:border-gray-700">
                    <div className="flex justify-between">
                        <div>
                            <p>{ParkingID}</p>
                            <p>{ParkingName}</p>
                            <span className="flex gap-2">
                              <p>{Lat}</p>
                              <p>{Lng}</p>
                          </span>
                        </div>
                        <NavLink to={`/myparking/${id}/edit`}>Edit</NavLink>
                    </div>
                    <hr className="mt-3 mb-3"/>
                    <div className="flex justify-center ">
                  <span className="flex items-center">
                      Available
                      <label className="ml-5 relative inline-flex items-center cursor-pointer">
                          <input name="ParkingStatus" type="checkbox" className="sr-only peer" onClick={e=>{setParkingStatus(e.target.checked);submitForm({[e.target.name]:e.target.checked});}}  defaultChecked={ParkingStatus} />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-red-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                      </label>
                  </span>
                    </div>
                    <hr className="mt-3 mb-3"/>
                    <div className="flex-col justify-items-center">
                        <p className="flex justify-center">Available Spaces (Optional)</p>
                        <div className="flex justify-center justify-items-center gap-5 mt-3">
                            <button type="button"
                                    onClick={e=>{setParkingSpace(ParkingSpace-1); submitForm({ParkingSpace:ParkingSpace-1})}}
                                    disabled={ParkingSpace === 0 ? true : false}
                                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">-
                            </button>
                            <span className="text-4xl">{ParkingSpace ? ParkingSpace : 0}</span>
                            <button type="button"
                                    name="ParkingSpace"
                                    onClick={e=>{setParkingSpace(ParkingSpace+1); submitForm({ParkingSpace:ParkingSpace+1})}}
                                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">+
                            </button>

                        </div>
                    </div>
                    <hr className="mt-3 mb-3"/>
                    <div>
                        <div className="flex gap-5 justify-between">
                            <label className="ml-5 relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="FourWheelsStatus" onClick={e=>{setFourWheelsStatus(e.target.checked);submitForm({[e.target.name]:e.target.checked});}} defaultChecked={FourWheelsStatus} className="sr-only peer"/>
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-red-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                            </label>
                            <p>Car</p>
                            <input name="FourWheelsPrice" disabled={!FourWheelsStatus ? true : false} placeholder={"Price"} className="text-[#0f0e17] rounded pl-1 md:w-32" value={FourWheelsPrice ? FourWheelsPrice : ""} onChange={e=>{setFourWheelsPrice(e.target.value);submitForm({[e.target.name]:parseInt(e.target.value,10)})}} type="number"/>
                        </div>
                        <div className="flex gap-5 mt-3 justify-between">
                            <label className="ml-5 relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="TwoWheelsStatus" onClick={e=>{setTwoWheelsStatus(e.target.checked);submitForm({[e.target.name]:e.target.checked})}} defaultChecked={TwoWheelsStatus} className="sr-only peer"/>
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-red-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                            </label>
                            <p>Motorcycles</p>
                            <input name="TwoWheelsPrice" disabled={!TwoWheelsStatus ? true : false} placeholder={"Price"} className="text-[#0f0e17] rounded pl-1 md:w-32" value={TwoWheelsPrice ? TwoWheelsPrice : ""} onChange={e=>{setTwoWheelsPrice(e.target.value);submitForm({[e.target.name]:parseInt(e.target.value,10)})}} type="number"/>
                        </div>
                        {/*<button type={"submit"} onClick={submitForm({FourWheelsPrice},{TwoWheelsPrice})}>Save</button>*/}
                    </div>
                </form>
                <div className="grid place-items-center md:place-items-start">
                    <button
                        type={"button"}
                        onClick={()=>navigate('/create')}
                        className="md:ml-10 mt-5 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                    >Add Parking</button>
                </div>
            </div>


        </Layout>
    )
}

export default MyParking