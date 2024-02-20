import {createClient} from "@supabase/supabase-js";
import {REACT_APP_SUPABASE_KEY, REACT_APP_SUPABASE_URL} from "../data/constants";


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

export default {
    addParking,getAllParking,editParking,
    deleteParking,getParking,signUp,signIn,
    signOut,getUser,getUserInfo,getSessions,
    updateUser, addUserInfo
}
