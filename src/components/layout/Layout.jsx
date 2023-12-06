import TopNavigation from "./TopNavigation";
import {ToastContainer} from "react-toastify";

const Layout = ({children}) => {
    return (
        <div>
            <TopNavigation/>
            <ToastContainer/>
            <div className={"mt-5 mb-5"}>
                {children}
            </div>
        </div>
    )
}

export default Layout