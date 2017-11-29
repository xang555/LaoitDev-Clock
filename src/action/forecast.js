import { API_URI_FORECAST,APPID,lat,lon } from '../config';

export const START_QUIERY_FORECAST = "start_q_forecast";
export const SUCESS_QUIERY_FORECAST = "sucess_q_forecast";
export const FAILURE_QUIERY_FORECAST = "failure_q_forecast";

export function startquiery(){
    return {
        type : START_QUIERY_FORECAST
    }
}

export function sucessquiery(forecast){
    return {
        type : SUCESS_QUIERY_FORECAST,
        forecast
    }
}

export function failurequiery(){
    return {
        type : FAILURE_QUIERY_FORECAST
    }
}

export function quieryForecast(){
    return dispatch => {
        
                return fetch(API_URI_FORECAST + "?lat="+lat+"&lon="+lon+"&units=metric"+"&appid="+APPID)
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
        
                            if(json.cod === "200"){
                                dispatch(sucessquiery(filterForecast(json)));
                            }else {
                                dispatch(failurequiery());
                            }
                        }).catch(err => {
                            dispatch(failurequiery());
                        })
            }
}


function filterForecast(forecast){

    let listdatas = [];
    let data = forecast.list;
    let lastDate = null;
    let curentDate = null;

    for(let i = 0 ; i < data.length; i++){        
        let dt = new Date(data[i].dt * 1000);
        curentDate = dt.getDate();
        if(dt.getDate() !== lastDate){

            if(listdatas.length === 5) continue;

            listdatas.push(data[i]);
            lastDate = curentDate;
        }
    }

    return listdatas;
}