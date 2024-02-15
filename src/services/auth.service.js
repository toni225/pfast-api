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

export const getUserInfo = async () => {
    try{
        const token = localStorage.getItem('session')
        if(token!==null){
            const response = await userService.getUser(token)

            return response
        }

    }catch (e) {
        return e
    }
}

export const onSignOut = async () => {
    try {
        const apiResponse = await userService.signout()

        if(apiResponse.status === 200){
            window.location.href ='/'
            localStorage.clear()
        }

    }catch (e) {
        console.log(e)
    }
}
