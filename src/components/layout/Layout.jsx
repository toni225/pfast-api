import TopNavigation from "./TopNavigation";
import {ToastContainer} from "react-toastify";

const Layout = ({children}) => {

    return (
        <div>
            <div>
                <TopNavigation/>
                {/*<ToastContainer/>*/}
                <div>
                    {children}
                </div>
            </div>
        </div>

    )
}

export default Layout
