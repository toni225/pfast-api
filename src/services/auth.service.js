import * as userService from '../services/user.service'

export class Auth {
    static isLoggedIn() {
        try{
            const token = localStorage.getItem('session')
            if(token!==null){
                const response = userService.getUser(token)

                if(response) {
                    return true
                }
            }

        }catch (e) {
            return false
        }

    }
}
