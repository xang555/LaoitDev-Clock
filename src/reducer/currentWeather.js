import { START_QUIERY_API,SUCESS_QUIERY_API,FAILURE_QUIERY_API } from '../action/current';

const Initstate = {
    is_quiering : false,
    is_quiering_sucess : false,
    is_quiery_failure : false,
    data : null
}

export default function currentWeather(state = Initstate, action){

switch(action.type){

    case START_QUIERY_API :
        return Object.assign({},state,{
            is_quiering : true
        });
    
    case SUCESS_QUIERY_API : 
        return Object.assign({},state,{
        is_quiering : false,
        is_quiering_sucess : true,
        data : action.weather,
        is_quiery_failure : false
    });

    case FAILURE_QUIERY_API :
       return Object.assign({},state,{
        is_quiering : false,
        is_quiering_sucess : false,
        is_quiery_failure : true
    });

    default:
        return state;

}

}