import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";
import {useEffect} from "react";

const MapDisplay = ({data = [],page}) => {
    const position = {lat: 10.324444518537874, lng:123.95277453359705}

    return (
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <div style={{height: "100vh"}}>
                <Map
                    zoom={15}
                    center={position}
                >
                    {page=== "ParkingPage" && data?.map(parking => {
                        return (
                            <div key={parking.ParkingID}>
                                <Marker position={{lat:parseFloat(parking.Lat),lng:parseFloat(parking.Lng)}}/>
                            </div>)
                    })}
                </Map>
            </div>

        </APIProvider>
        // <>
        //     {data?.map(parking => {
        //         return (
        //             <div key={parking.ParkingID}>
        //                 {/*<Marker key={parking?.ParkingID} position={{lat:parseInt(parking.Lat),lng:parseInt(parking.Lng)}}/>*/}
        //                 {parseFloat(parking.Lat)}
        //                 {parseFloat(parking.Lng)}
        //             </div>)
        //     })}
        // </>
    )

}

export default MapDisplay