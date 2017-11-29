import React, { Component } from 'react';
import TodoLists from './TodoLists';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { quieryForecast,startquiery } from '../../action/forecast';
import { ProgressCircle  } from 'react-desktop/windows';

class Forecast extends Component {

_trickquiery = () => {
    
    this.props.quieryForecast();
}
    
componentDidMount() {
    
    this.props.startquiery();
    this._trickquiery();    
    
     this.interval = setInterval(() => this._trickquiery(),  3*3600*1000);
    
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }


render(){


    let content = null;
    let { forecast } = this.props;  

    if(forecast.is_quiering){
        content = <ProgressCircle color='#cc7f29' size={100}/>
    } else if (forecast.is_quiery_failure){
        // content = (
        //     <Label  color ="#ffffff" horizontalAlignment="center">
        //     <div style={{ fontSize : "15px",color : "red" }}>Can not Fetch data</div>
        //     </Label>
        // );
        this.props.quieryForecast();
        
    } else if(forecast.is_quiering_sucess && forecast.data != null){

        content = (
            <TodoLists items={forecast.data}/>
        )

    }

    return (
       <div >
           { content }
       </div>
    );
}

}


const mapStateToProps = (state) => {
    return {forecast : state.forecast};
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({quieryForecast,startquiery},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Forecast);