
import {Navigate, Outlet} from "react-router-dom";

export const Protected = ({isAccessible}) => {

    return <div>
        {isAccessible ? <Outlet/> : <Navigate to={'/login'}/>}
    </div>
}
