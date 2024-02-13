import * as userService from '../services/user.service'

export const isLoggedIn = async () => {
    const token = localStorage.getItem('session')
    try{
        if(token!==null){
            const response = await userService.getUser(token)
            if(response){
                return true
            }
        }
        return false
    }catch (e) {
        if(e.response.status === 401){
            return false
        }
    }

}
