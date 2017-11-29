import { API_URI_CURRENT,APPID,lat,lon } from '../config';

export const START_QUIERY_API = "start_q_current";
export const SUCESS_QUIERY_API = "sucess_q_current";
export const FAILURE_QUIERY_API = "failure_q_current";

export function startquiery(){
    return {
        type : START_QUIERY_API
    }
}

export function sucessquiery(weather){
    return {
        type : SUCESS_QUIERY_API,
        weather
    }
}

export function failurequiery(){
    return {
        type : FAILURE_QUIERY_API
    }
}

export function quieryCurrentWeather(){
    return dispatch => {

        return fetch(API_URI_CURRENT + "?lat="+lat+"&lon="+lon+"&units=metric"+"&appid="+APPID)
                .then(response => {
                    if(response.status === 200){
                        return response;
                    }else {
                        let error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                }).then(response => {
                    return response.json();
                }).then(json => {

                    if(json.coord !=null){
                        dispatch(sucessquiery(json));
                    }else {
                        dispatch(failurequiery());
                    }
                }).catch(err => {
                    dispatch(failurequiery());
                })
    }
}