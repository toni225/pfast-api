import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";
import {useEffect, useState} from "react";

const MapDisplay = ({data = [],page,markedLocation}) => {
    const position = {lat: 10.324444518537874, lng:123.95277453359705}

    const [marker,setMarker] = useState({})

    useEffect(()=>{
        if(page==="CreateParking"){
            markedLocation({lat:marker.lat,lng:marker.lng})

        }
    },[marker])

    if(page==="ParkingPage"){
        return (
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <div style={{height: "90vh"}}>
                    <Map
                        zoom={15}
                        center={position}
                    >
                        {data?.map(parking => {
                            return (
                                <div key={parking.ParkingID}>
                                    <Marker position={{lat:parseFloat(parking.Lat),lng:parseFloat(parking.Lng)}}/>
                                </div>)
                        })}
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