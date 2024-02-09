import {getUser, signout} from "../services/user.service";
import {useNavigate} from "react-router-dom";
import userData from "./data/user.data";

const AccountPage = () => {
    const navigate = useNavigate()

    const onSignOut = async () => {
        try {
            const apiResponse = await signout()

            if(apiResponse.status === 200){
                navigate('/login')
                localStorage.clear()
                userData.session = {}
            }

        }catch (e) {
            console.log(e)
        }
    }

    const onGetUser = async () => {
        try {
            const token = localStorage.getItem('session')
            const apiResponse = await getUser(token)

            console.log(apiResponse)
        } catch (e) {
            navigate('/login')
        }
    }

  return (
      <div>
          {/*{userData.session != null ? userData.session.user.id : "No Account"}*/}

          <button className={"border p-2 bg-slate-900 text-amber-100"} onClick={onSignOut}>Sign Out</button>
          <button className={"border p-2 bg-slate-900 text-amber-100"} onClick={onGetUser}>get User</button>
      </div>
  )
}

export default AccountPage
