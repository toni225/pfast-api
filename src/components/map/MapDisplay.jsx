import {APIProvider, AdvancedMarker, InfoWindow, Map,Pin, Marker, useAdvancedMarkerRef, useMarkerRef} from "@vis.gl/react-google-maps";
import {useEffect, useState} from "react";
import Directions from "./Directions";
import {toast} from "react-toastify";

const MapDisplay = ({data = [],page,markedLocation}) => {
    const position = {lat: 10.324444518537874, lng:123.95277453359705}

    const [marker,setMarker] = useState({})
    const [openInfoWindow, setOpenInfoWindow] = useState(false)
    const [markerRef, useMarker] = useAdvancedMarkerRef()
    const [selectedMarker, setSelectedMarker] = useState(null)

    const [directions,setDirections] = useState({})
    const [doDirections,setDoDirections] = useState(false)
    const [origin,setOrigin] = useState('')

    useEffect(()=>{
        if(page==="CreateParking"){
            markedLocation({lat:marker.lat,lng:marker.lng})

        }
    },[marker])

    useEffect(()=>{
       if(navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(pos=>{
               const lat = pos.coords.latitude
               const lng = pos.coords.longitude

               setOrigin(`${lat}, ${lng}`)
           },err=>{
               setOrigin('10.32546837125536, 123.95334301842492')
               console.log(err)
               toast.warning('Location is turned off.')
           })
       }else {
           setOrigin('10.32546837125536, 123.95334301842492')
       }
    },[])
    
    if(page==="ParkingPage"){
        return (
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <div style={{height: "90vh"}}>
                    <Map
                        mapId={"bf51a910020fa25a"}
                        zoom={15}
                        center={position}
                    >
                        {data?.map(parking => {
                            return (
                                <div key={parking.ParkingID}>
                                    <AdvancedMarker 
                                        ref={markerRef}
                                        onClick={(e)=>{
                                            setOpenInfoWindow(true);
                                            setSelectedMarker(parking.ParkingID)}
                                        } 
                                        position={{lat:parseFloat(parking.Lat),lng:parseFloat(parking.Lng)}}>
                                    <Pin
                                        background={'#22ccff'}
                                        borderColor={'#1e89a1'}
                                        glyphColor={'#0f677a'}>
                                    </Pin>
                                    {
                                        openInfoWindow && selectedMarker === parking.ParkingID && (
                                            <div key={parking.ParkingID}>
                                                <InfoWindow
                                                    position={{lat:parseFloat(parking.Lat),lng:parseFloat(parking.Lng)}}
                                                    onCloseClick={() => {
                                                        setOpenInfoWindow(false)
                                                        setDoDirections(false)
                                                        setDirections('')
                                                    }}>
                                                    <div className="p-2 relative">
                                                        <div className="relative">
                                                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hautetime.com%2Fwp-content%2Fuploads%2F2015%2F08%2FPlace_Vendome_Paris_20_April_2011.jpg&f=1&nofb=1&ipt=18bea3a33b7591e2d27ec2e34c6089aaea807b81e074279344c21f863ab16741&ipo=images" className="max-h-52 rounded-md"></img>
                                                            <div className="absolute px-3 py-1 bottom-[-18px] left-2 text-[pink] text-3xl bg-slate-800 rounded-full">
                                                            {parking.ParkingName}
                                                            </div>
                                                        </div>
                                                        <div className="mt-5">
                                                            <button
                                                                className={"rounded-md bg-amber-600 p-3 hover:bg-amber-500"}
                                                                onClick={()=>{
                                                                    setDirections({
                                                                        origin,
                                                                        destination: `${parking.Lat}, ${parking.Lng}`
                                                                    })
                                                                    setDoDirections(true)
                                                                }}
                                                            >Directions</button>
                                                        </div>
                                                    
                                                    </div>
                                                </InfoWindow>
                                            </div>
                                        )
                                    }
                                    </AdvancedMarker>
                                </div>
                            )
                        })}
                        {doDirections && <Directions directions={directions}/>}
                    </Map>
                </div>

            </APIProvider>
        )
    }
    if(page==="CreateParking"){
        return (
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <div style={{height: "60vh"}}>
                    <Map
                        zoom={15}
                        center={position}
                        onClick={e=> {
                            setMarker({lat: e.detail.latLng.lat, lng: e.detail.latLng.lng});


                        }}
                    >
                        {marker && (<Marker position={{lat:parseFloat(marker?.lat),lng:parseFloat(marker?.lng)}}/>)}
                    </Map>
                </div>

            </APIProvider>
        )
    }


}

export default MapDisplay
