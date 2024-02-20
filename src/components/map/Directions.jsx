import {useState, useEffect} from "react";
import {useMap, useMapsLibrary} from "@vis.gl/react-google-maps";


const Directions = ({directions}) => {

    const map = useMap();
    const routesLibrary = useMapsLibrary('routes');
    const [directionsService, setDirectionsService] = useState(null);
    const [directionsRenderer, setDirectionsRenderer] = useState(null);
    const [routes, setRoutes] = useState([]);
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes[routeIndex];
    const leg = selected?.legs[0];

    // Initialize directions service and renderer
    useEffect(() => {
        if (!routesLibrary || !map) return;
        setDirectionsService(new routesLibrary.DirectionsService());
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({map}));
    }, [routesLibrary, map]);

    // Use directions service
    useEffect(() => {
        if (!directionsService || !directionsRenderer) return;

        directionsService
            .route({
                origin: directions.origin,
                destination: directions.destination,
                // eslint-disable-next-line no-undef
                travelMode: google.maps.TravelMode.DRIVING,
                provideRouteAlternatives: true,
            })
            .then(response => {
                directionsRenderer.setOptions({
                    polylineOptions: {
                        strokeColor: '#f25f4c'
                    }
                })
                directionsRenderer.setDirections(response);
                setRoutes(response.routes);
            });

        return () => directionsRenderer.setMap(null);
    }, [directionsService, directionsRenderer]);

    // Update direction route
    useEffect(() => {
        if (!directionsRenderer) return;
        directionsRenderer.setRouteIndex(routeIndex);
    }, [routeIndex, directionsRenderer]);

    if (!leg) return null;


}

export default Directions
