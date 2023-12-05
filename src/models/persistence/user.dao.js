import {createClient} from "@supabase/supabase-js";
import {REACT_APP_SUPABASE_KEY, REACT_APP_SUPABASE_URL} from "../data/constants";


import {supabase} from "../data/api"
import {StatusCodes} from "http-status-codes";

const addParking = async (details) => {

    const response = await supabase
        .from('parking_lot')
        .insert(details)

    return response

}

const getAllParking = async () => {
    const response = await supabase
        .from('parking_lot')
        .select()

    return response
}

const getParking = async (id) => {
    const response = await supabase
        .from('parking_lot')
        .select()
        .eq('parking_id',id)

    if(response.data.length > 0) {
        return response
    }

    return StatusCodes.NOT_FOUND

}

const updateParking = async (id,details) => {

    const response = await supabase
        .from('parking_lot')
        .update(details)
        .eq('parking_id', id)
        .select()

    return response
}

const deleteParking = async (id) => {

    const selectResponse = await supabase
        .from('parking_lot')
        .select('parking_id')
        .eq('parking_id',id)

    if(selectResponse.data.length > 0){
        const response = await supabase
            .from('parking_lot')
            .delete()
            .eq('parking_id', id)

        return response.status
    }

    if(selectResponse.data.length === 0){
        return StatusCodes.NOT_FOUND
    }
}
export default {addParking,getAllParking,updateParking,deleteParking,getParking}