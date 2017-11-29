import { START_QUIERY_FORECAST,SUCESS_QUIERY_FORECAST,FAILURE_QUIERY_FORECAST } from '../action/forecast';

const Initstate = {
    is_quiering : false,
    is_quiering_sucess : false,
    is_quiery_failure : false,
    data : null
}

export default function forecast(state = Initstate, action){

switch(action.type){

    case START_QUIERY_FORECAST :
        return Object.assign({},state,{
            is_quiering : true
        });
    
    case SUCESS_QUIERY_FORECAST : 
        return Object.assign({},state,{
        is_quiering : false,
        is_quiering_sucess : true,
        data : action.forecast,
        is_quiery_failure : false
    });

    case FAILURE_QUIERY_FORECAST :
       return Object.assign({},state,{
        is_quiering : false,
        is_quiering_sucess : false,
        is_quiery_failure : true
    });

    default:
        return state;

}

}