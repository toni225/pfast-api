import TopNavigation from "./TopNavigation";
import {ToastContainer} from "react-toastify";

const Layout = ({children}) => {
    return (
        <div>
            <TopNavigation/>
            {/*<ToastContainer/>*/}
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout
