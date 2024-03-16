import {v4 as uuidv4} from "uuid"
import {supabase} from "../data/api"
import {StatusCodes} from "http-status-codes";

const addParking = async (details) => {

    const response = await supabase
        .from('ParkingDetails')
        .insert(details)

    return response

}

const getAllParking = async () => {
    const response = await supabase
        .from('ParkingDetails')
        .select()
        .order('ParkingID',{ascending:true})

    return response
}

const getParking = async (id) => {
    const response = await supabase
        .from('ParkingDetails')
        .select()
        .eq('ParkingID',id)

    if(response.data?.length > 0) {
        return response
    }

    return StatusCodes.NOT_FOUND

}

const editParking = async (id, details) => {

    const response = await supabase
        .from('ParkingDetails')
        .update(details)
        .eq('ParkingID', id)
        .select()

    return response
}

const deleteParking = async (id) => {


    if(isNaN(id)){
        const response = await supabase.rpc("deleteparking", {
            tbl: '"ParkingDetails"', col: 'ParkingName', val: id
        })
        return response
    }

    const selectResponse = await supabase
        .from('ParkingDetails')
        .select('ParkingID')
        .eq('ParkingID',id)

    if(selectResponse.data.length > 0){
        const response = await supabase
            .from('ParkingDetails')
            .delete()
            .eq('ParkingID', id)

        return response.status
    }

    if(selectResponse.data?.length === 0){
        return StatusCodes.NOT_FOUND
    }

}

const uploadParkingImage = async (username,image,parkingName) => {

    const response = await supabase.storage
        .from('images')
        .upload(`${username}/${parkingName.parkingName}/${uuidv4()}`, image,{
            contentType: 'image/webp'
        })

    return response

}

const getParkingImage = async (username,parkingName) => {

    const response = await supabase.storage
        .from('images')
        .list(`${username}/${parkingName}/`, {
            limit: 1,
            offset: 0,
            sortBy: {column: "created_at", order: "desc"}
        })

    return response

}

const getMyParking = async (username) => {
    const response = await supabase
        .from('ParkingDetails')
        .select()
        .eq('username',username)

    return response
}

//=====================User APIs==================================

const signUp = async (details) => {

    const response = await supabase.auth.signUp({
        email: details.email,
        password: details.password,
        options: {
            emailRedirectTo: 'http://localhost:3000/',
            data: {
                isParkingOwner: details.isParkingOwner
            }
        },
    })
    return response

}

const signIn = async (details) => {

    const response = await supabase.auth.signInWithPassword({
        email: details.email,
        password: details.password,
    })
    return response

}

const signOut = async () => {

    const response = await supabase.auth.signOut()
    return response

}

const getUser = async (token) => {

    const response = await supabase.auth.getUser(token)
    return response
}

const getUserInfo = async (id) => {
    try{
        const response = await supabase
            .from('UserInfo')
            .select()
            .eq("id",id)

        return response
    }catch (e) {
        return e
    }

}

const getSessions = async () => {

    const response = await supabase.auth.getSession()
    return response

}

const updateUser = async (id, details) => {

    const response = await supabase
        .from('UserInfo')
        .update(details)
        .eq('id', id)
        .select()

    return response
}

const addUserInfo = async (details) => {

    const response = await supabase
        .from('UserInfo')
        .insert(details)
        .select()

    return response

}

const resetPassword = async ({email}) => {
    const response = await supabase.auth
        .resetPasswordForEmail(email,{redirectTo: 'http://localhost:3000/recovery/updatepass'})

    return response
}

const updatePassword = async ({password}) => {
    const response = await supabase.auth.updateUser({
        password
    })

    return response
}

const addParkingHistory = async (user) => {
    const response = await supabase
        .from('UserHistory')
        .insert([
            { username: user.username, ParkingID: user.ParkingID },
        ])
        .select()

    return response
}

const getParkingHistory = async (user) => {
    const response = await supabase
        .from('UserHistory')
        .select('*, ParkingDetails (*)')
        .eq('username',user)

    return response
    // return user
}

//=========================Admin APIs=============================
const getReports = async () => {
    const response = await supabase
        .from('Report')
        .select('*, ParkingDetails (ParkingName)')
        .order('ReportID',{ascending:true})

    return response
}

const banParking = async (id) => {

    const response = await supabase
        .from('Report')
        .delete()
        .eq('ReportID',id)
    return response
}

export default {
    addParking,getAllParking,editParking,
    deleteParking,getParking,signUp,signIn,
    signOut,getUser,getUserInfo,getSessions,
    updateUser, addUserInfo, uploadParkingImage,
    getParkingImage, getMyParking, resetPassword,
    updatePassword, getReports, banParking,
    addParkingHistory, getParkingHistory
}
