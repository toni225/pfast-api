import {APIProvider, AdvancedMarker, InfoWindow, Map,Pin, Marker, useAdvancedMarkerRef, useMarkerRef} from "@vis.gl/react-google-maps";
import {useEffect, useState} from "react";

const MapDisplay = ({data = [],page,markedLocation}) => {
    const position = {lat: 10.324444518537874, lng:123.95277453359705}

    const [marker,setMarker] = useState({})
    const [openInfoWindow, setOpenInfoWindow] = useState(false)
    const [markerRef, useMarker] = useAdvancedMarkerRef()
    const [selectedMarker, setSelectedMarker] = useState(null)
 
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
                                            console.log(e);
                                            setOpenInfoWindow(true);
                                            setSelectedMarker(parking.ParkingID)
                                            console.log(selectedMarker)
                                            }} 
                                        position={{lat:parseFloat(parking.Lat),lng:parseFloat(parking.Lng)}}>
                                    <Pin
                                        background={'#22ccff'}
                                        borderColor={'#1e89a1'}
                                        glyphColor={'#0f677a'}></Pin>
                                    {
                                        openInfoWindow && selectedMarker === parking.ParkingID && (
                                            <div key={parking.ParkingID}>
                                                <InfoWindow
                                                    position={{lat:parseFloat(parking.Lat),lng:parseFloat(parking.Lng)}}
                                                    maxWidth={500}
                                                    minWidth={100}
                                                    onCloseClick={() => setOpenInfoWindow(false)}>
                                                    {console.log(parking)}
                                                    {parking.ParkingName}
                                                </InfoWindow>
                                            </div>
                                          )
                                    }
                                    </AdvancedMarker>
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