import {signout} from "../../services/user.service";
import userData from "../data/user.data";



export const onSignOut = async () => {
    try {
        const apiResponse = await signout()

        if(apiResponse.status === 200){
            window.location.href ='/'
            localStorage.clear()
        }

    }catch (e) {
        console.log(e)
    }
}
